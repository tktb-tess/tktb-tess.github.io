<script lang="ts">
  interface Props {
    rawHTML: string;
  }
  const { rawHTML }: Props = $props();
</script>

<div class="html-preview">
  {@html rawHTML}
</div>

<style lang="postcss">
  @reference '../styles/global.css';

  @layer components {
    .html-preview {
      @apply flow-root border-2 border-border rounded p-4;
    }

    .html-preview :global(*) {
      font: revert;
      border: revert;
      background: revert;
      color: revert;
      text-align: revert;
      word-break: revert;
    }
  }
</style>
