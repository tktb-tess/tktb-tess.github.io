<script lang="ts">
  import { onMount } from 'svelte';
  import { compress, decompress } from '../modules/compress';
  import type { Proc } from '../modules/convert';
  import NotepadPreview from './NotepadPreview.svelte';

  let timer: ReturnType<typeof setTimeout> | null = null;
  let pro: Proc | undefined;
  const key = 'd';
  const delay = 500;

  let input = $state('');
  let isPreview = $state(false);
  let output = $state('');

  const getProcessor = async () => {
    if (!pro) {
      pro = (await import('../modules/convert')).processor;
    }
    return pro;
  };

  const updateOutput = async () => {
    if (!input.trim()) {
      output = '';
      return;
    }

    const p = await getProcessor();
    const v = await p.process(input);
    output = v.toString();
  };

  const updateURL = async () => {
    const formatted = input
      .replace(/\x20{3,}/, '  ')
      .replace(/\n{3,}/, '\n\n')
      .trim();

    if (!formatted) {
      history.replaceState(null, '', './');
      return;
    }

    const comp = await compress(`${formatted}\n`);
    const params = new URLSearchParams([[key, comp]]);
    history.replaceState(null, '', `?${params}`);
  };

  onMount(() => {
    timer = setTimeout(async () => {
      try {
        const params = new URL(document.URL).searchParams;
        const data = params.get(key);

        if (data) {
          input = await decompress(data);
        }

        await updateOutput();
      } catch (e) {
        console.error(e);
      }

      timer = null;
    }, delay);

    return () => {
      if (timer != null) {
        clearTimeout(timer);
        timer = null;
      }
    };
  });
</script>

<div class="toggle-btn">
  <button
    onclick={(ev) => {
      ev.preventDefault();
      isPreview = !isPreview;
    }}
  >
    {isPreview ? 'edit' : 'preview'}
  </button>
</div>

<div class="edit {isPreview ? 'hidden' : 'flex'}">
  <label for="ntpd-input">Input</label>
  <textarea
    id="ntpd-input"
    bind:value={
      () => input,
      (_in) => {
        input = _in;

        if (timer != null) {
          clearTimeout(timer);
          timer = null;
        }

        timer = setTimeout(async () => {
          const res = await Promise.allSettled([updateOutput(), updateURL()]);

          res
            .filter((r) => r.status === 'rejected')
            .forEach((r) => console.log(r.reason));

          timer = null;
        }, delay);
      }
    }
  ></textarea>
</div>

<div class="preview {isPreview ? 'flex' : 'hidden'}">
  <h3>Preview</h3>
  <div class="xhtml-preview-root">
    {#if output}
      {@html output}
    {/if}
  </div>
</div>

<style lang="postcss">
  @reference '../styles/global.css';

  @layer components {
    .toggle-btn {
      @apply mbs-paragraph flex justify-center-safe;

      > button {
        @apply border-2 border-accent text-accent rounded-full px-4
          hover-focus:text-textinv hover-focus:bg-accent
          transition-colors;
      }
    }

    .edit {
      @apply flex-col gap-2 *:block;

      > label {
        @apply text-center text-2xl mbs-heading text-accent;
      }

      > textarea {
        @apply block-120 min-inline-0;
      }
    }

    .preview {
      @apply flex-col gap-2;

      > h3 {
        @apply text-center mbs-heading;
      }
    }

    .xhtml-preview-root {
      @apply flow-root border-2 border-border rounded p-4;
    }

    .xhtml-preview-root :global(*) {
      font: revert;
      border: revert;
      background: revert;
      color: revert;
      text-align: revert;
      word-break: revert;
      padding-inline: revert;
      margin-inline: revert;
      inline-size: revert;
    }
  }
</style>
