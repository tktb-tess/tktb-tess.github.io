<script lang="ts">
  import { onMount } from 'svelte';
  import type { Proc } from '../modules/convert';
  import { processor } from '../modules/convert';
  import { compress, decompress } from '../modules/compress';

  let input = $state('');
  let outputHTML = $state('');
  let timer: ReturnType<typeof setTimeout> | null = null;

  onMount(() => {
    timer = setTimeout(async () => {
      const params = new URL(document.URL).searchParams;
      const data = params.get('data');

      if (data) {
        input = await decompress(data);
      }

      outputHTML = (await processor.process(input)).toString();
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

<div class="input">
  <label for="notepad-input">input</label>
  <textarea
    id="notepad-input"
    bind:value={
      () => input,
      (ii) => {
        input = ii;

        if (timer != null) {
          clearTimeout(timer);
          timer = null;
        }

        timer = setTimeout(async () => {
          outputHTML = (await processor.process(input)).toString();
          const compressed = await compress(input);
          const params = new URLSearchParams([['data', compressed]]);
          history.replaceState(null, '', `?${params}`);
          timer = null;
        }, 500);
      }
    }
  ></textarea>
</div>

<div class="output-html">
  {@html outputHTML}
</div>

<style lang="postcss">
  @reference '../styles/global.css';

  @layer base {
    .output-html {
      &,
      :global(*) {
        all: revert !important;
      }
    }
  }

  @layer components {
    .input {
      @apply flex flex-col gap-2 *:block;
    }
  }
</style>
