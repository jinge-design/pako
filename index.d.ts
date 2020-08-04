export = Pako;
export as namespace pako;

declare namespace Pako {
  interface DeflateOptions {
    level?: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    windowBits?: number;
    memLevel?: number;
  }

  /**
   * Creates raw deflate data, without wrapper (header and adler32 crc).
   */
  function deflateRaw(data: Uint8Array, options?: DeflateOptions): Uint8Array;
}
