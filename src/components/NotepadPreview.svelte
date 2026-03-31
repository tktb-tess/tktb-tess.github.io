<script lang="ts">
  interface Props {
    rawHTMLPromise: Promise<string>;
  }

  const { rawHTMLPromise }: Props = $props();
</script>

<div class="xhtml-preview-root">
  {#await rawHTMLPromise}
    <p>Loading…</p>
  {:then rawHTML}
    {#if rawHTML}
      {@html rawHTML}
    {/if}
  {:catch}
    <p class="text-caution">An error has occured</p>
  {/await}
</div>

<style lang="postcss">
  @reference '../styles/global.css';

  @layer components {
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
    }
  }
</style>
