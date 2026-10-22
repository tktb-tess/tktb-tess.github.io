<script lang="ts">
  import { cornacchia, bailliePSW } from '@tktb-tess/util-fns/baillie_psw';
  import { Failed, Success, Unidentified } from '../modules/result';
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

<input
  type="number"
  name="num"
  id="num"
  min="2"
  max="9007199254740991"
  bind:value={
    () => p?.toString() ?? '',
    (_p) => {
      if (_p === '') {
        p = null;
      } else {
        p = BigInt(_p);
      }
    }
  }
/>

<p>
  {#if result.status === 'success'}
    {@const [m, n] = result.value}
    {p} = {m}² + {n}²
  {:else if result.status === 'failed'}
    {result.error.message}
  {/if}
</p>
