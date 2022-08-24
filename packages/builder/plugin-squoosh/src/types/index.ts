import { Buffer } from 'buffer';
import {
  AvifConfig,
  JpegCompressOptions,
  PNGLosslessOptions,
  PngQuantOptions,
} from '@napi-rs/image';

export interface WebpTransformOptions {
  quality?: number;
}

/* eslint-disable @typescript-eslint/ban-types */
export interface CompressorBaseOptions {
  jpeg: JpegCompressOptions;
  png: PngQuantOptions;
  pngLossless: PNGLosslessOptions;
  webp: WebpTransformOptions;
  webpLossless: {};
  avif: AvifConfig;
  ico: {};
}
/* eslint-enable */

export interface Compressor<T extends Compressors> {
  handler: (buf: Buffer, options: CompressorBaseOptions[T]) => Promise<Buffer>;
  defaultOptions: Omit<FinalOptionCollection[T], 'compress'>;
}

export type Compressors = keyof CompressorBaseOptions;

export interface BaseCompressOptions<T extends Compressors> {
  compress: T;
  test?: RegExp;
}

export type OptionCollection = {
  [K in Compressors]: K | FinalOptionCollection[K];
};

export type Options = OptionCollection[Compressors];

export type FinalOptionCollection = {
  [K in Compressors]: BaseCompressOptions<K> & CompressorBaseOptions[K];
};

export type FinalOptions = FinalOptionCollection[Compressors];
