<script lang="ts">
  import { cornacchia, bailliePSW } from '@tktb-tess/util-fns/baillie_psw';
  import { Failed, Success, Unidentified } from '../modules/result';
  import { renderToString } from 'katex';
  import type { Result } from '../modules/result';

  type CalcResult = Result<[bigint, bigint], Error>;
  let p: bigint | null = $state(null);
  const result: CalcResult = $derived.by(() => {
    if (p == null) return Unidentified();

    if (!bailliePSW(p)) {
      return Failed(new Error(`${p}は素数ではありません`));
    }

    if ((p & 3n) === 3n) {
      return Failed(
        new Error(
          `${p}は4で割って3余るため、2つの平方和で表すことができません。`,
        ),
      );
    }

    try {
      const r = cornacchia(p);
      if (r == null) {
        return Failed(new Error('unexpected error'));
      }
      return Success(r);
    } catch (cause) {
      return Failed(new Error('unexpected error', { cause }));
    }
  });
</script>

<div class="__cornacchia">
  <input
    type="number"
    id="__input"
    class="__input"
    min="0"
    max="9007199254740991"
    bind:value={
      () => p?.toString() ?? '',
      (_p) => {
        if (_p === '') {
          p = null;
        } else {
          const __p = BigInt(_p);
          const MAX = BigInt(Number.MAX_SAFE_INTEGER);

          if (__p < 0n) {
            p = 0n;
          } else if (__p > MAX) {
            p = MAX;
          } else {
            p = __p;
          }
        }
      }
    }
  />
  <p class="__result">
    {#if result.status === 'success'}
      {@const [m, n] = result.value}
      {@html renderToString(`${p} = ${m}^2 + ${n}^2`, { displayMode: true })}
    {:else if result.status === 'failed'}
      {@const msg = result.error.message}
      {@html renderToString(`\\text\{${msg}\}`, { displayMode: true })}
    {/if}
  </p>
</div>

<style lang="postcss">
  @reference '../styles/global.css';

  @layer components {
    .__cornacchia {
      @apply flex flex-col gap-y-4 max-inline-180 mx-auto my-4;

      .__input {
        @apply block min-inline-0 inline-full max-inline-80 mx-auto border border-border rounded-sm px-1 font-mono;
      }
    }
  }
</style>
