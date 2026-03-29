<script lang="ts">
  import { onMount } from 'svelte';
  import { compress, decompress } from '../modules/compress';

  let input = $state('');
  let timer: ReturnType<typeof setTimeout> | null = null;
  let isPreview = $state(false);
  const key = 'd';

  const toHTML = async (md: string) => {
    const { getProcessor } = await import('../modules/convert');
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
          const compressed = await compress(input);
          const params = new URLSearchParams([[key, compressed]]);
          history.replaceState(null, '', `?${params}`);
          timer = null;
        }, 500);
      }
    }
  ></textarea>
</div>

{#if isPreview}
  <div class="preview">
    <h3>Preview</h3>
    <div class="output-html">
      {#await toHTML(input) then outputHTML}
        {@html outputHTML}
      {/await}
    </div>
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
        @apply blobk-120 min-inline-0;
      }
    }

    .preview {
      @apply flex flex-col gap-2;

      > h3 {
        @apply text-center;
      }
    }

    .output-html {
      @apply flow-root;
    }
  }
</style>
