<script lang="ts">
  import { onMount } from 'svelte';
  import { compress, decompress } from '../modules/compress';
  import NotepadPreview from './NotepadPreview.svelte';
  import type { Proc } from '../modules/convert';

  let input = $state('');
  let timer: ReturnType<typeof setTimeout> | null = null;
  let isPreview = $state(false);
  const key = 'd';

  const getProcessor = async () => {
    return (await import('../modules/convert')).processor;
  };

  const toHTML = async (md: string) => {
    const p = await getProcessor();
    const v = await p.process(md);
    return v.toString();
  };

  onMount(() => {
    timer = setTimeout(async () => {
      const params = new URL(document.URL).searchParams;
      const data = params.get(key);

      if (data) {
        input = await decompress(data);
      }

      timer = null;
    }, 500);

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
      (ii) => {
        input = ii;

        if (timer != null) {
          clearTimeout(timer);
          timer = null;
        }

        timer = setTimeout(async () => {
          const formatted = input
            .replace(/\x20{3,}/, '  ')
            .replace(/\n{3,}/, '\n\n')
            .trim()
            .concat('\n');

          if (formatted !== '\n') {
            const compressed = await compress(formatted);
            const params = new URLSearchParams([[key, compressed]]);
            history.replaceState(null, '', `?${params}`);
          } else {
            history.replaceState(null, '', './');
          }

          timer = null;
        }, 500);
      }
    }
  ></textarea>
</div>

{#if isPreview}
  <div class="preview">
    <h3>Preview</h3>
    {#await toHTML(input) then rawHTML}
      <NotepadPreview {rawHTML} />
    {/await}
  </div>
{/if}

<style lang="postcss">
  @reference '../styles/global.css';

  @layer components {
    .toggle-btn {
      @apply mbs-paragraph flex justify-center-safe;

      > button {
        @apply border-2 cborder-accent ctext-accent rounded-full px-4
          hover-focus:text-textinv hover-focus:cbg-accent
          transition-colors;
      }
    }

    .edit {
      @apply flex-col gap-2 *:block;

      > label {
        @apply text-center text-2xl mbs-heading ctext-accent;
      }

      > textarea {
        @apply block-120 min-inline-0;
      }
    }

    .preview {
      @apply flex flex-col gap-2;

      > h3 {
        @apply text-center;
      }
    }
  }
</style>
