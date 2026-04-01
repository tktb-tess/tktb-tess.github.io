<script lang="ts">
  interface Props {
    rawHTML: string;
  }

  const { rawHTML }: Props = $props();
</script>

<div class="xhtml-preview-root">
  {#if rawHTML}
    {@html rawHTML}
  {/if}
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
      padding-inline: revert;
      margin-inline: revert;
      inline-size: revert;
    }
  }
</style>
