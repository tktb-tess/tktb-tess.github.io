const toBase64URL = (bin: Uint8Array) => {
  const a = Array.from(bin, (n) => String.fromCharCode(n));
  const b64 = btoa(a.join(''));
  return b64.replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '');
};

const fromBase64URL = (base64Url: string) => {
  const len = (4 - (base64Url.length % 4)) % 4;
  const b64 = `${base64Url}${'='.repeat(len)}`
    .replaceAll('-', '+')
    .replaceAll('_', '/');
  return Uint8Array.from(atob(b64), (s) => s.charCodeAt(0));
};

export const compress = async (plain: string) => {
  const stream = new Blob([plain])
    .stream()
    .pipeThrough(new CompressionStream('gzip'));
  const comp = await new Response(stream).bytes();
  return toBase64URL(comp);
};

export const decompress = (base64URL: string) => {
  const bin = fromBase64URL(base64URL);
  const stream = new Blob([bin])
    .stream()
    .pipeThrough(new DecompressionStream('gzip'));
  return new Response(stream).text();
};
