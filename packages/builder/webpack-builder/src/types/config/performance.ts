import type { BundleAnalyzerPlugin } from '../../../compiled/webpack-bundle-analyzer';
import type webpack from 'webpack';

export type ConsoleType = 'log' | 'info' | 'warn' | 'error' | 'table' | 'group';

export type SplitChunks = webpack.Configuration extends {
  optimization?: {
    splitChunks?: infer P;
  };
}
  ? P
  : never;

export type CacheGroup = webpack.Configuration extends {
  optimization?: {
    splitChunks?:
      | {
          cacheGroups?: infer P;
        }
      | false;
  };
}
  ? P
  : never;

export interface BaseChunkSplit {
  strategy:
    | 'split-by-module'
    | 'split-by-experience'
    | 'all-in-one'
    | 'single-vendor';
  forceSplitting?: Array<RegExp>;
  override?: SplitChunks;
}

export interface SplitBySize {
  strategy: 'split-by-size';
  minSize?: number;
  maxSize?: number;
  forceSplitting?: Array<RegExp>;
  override?: SplitChunks;
}

export interface SplitCustom {
  strategy: 'custom';
  splitChunks?: SplitChunks;
  forceSplitting?: Array<RegExp>;
}

export type BuilderChunkSplit = BaseChunkSplit | SplitBySize | SplitCustom;

export interface PerformanceConfig {
  removeConsole?: boolean | ConsoleType[];
  removeMomentLocale?: boolean;
  bundleAnalyze?: BundleAnalyzerPlugin.Options;
  chunkSplit?: BuilderChunkSplit;
}

export interface FinalPerformanceConfig extends PerformanceConfig {
  removeConsole: boolean | ConsoleType[];
  removeMomentLocale: boolean;
  chunkSplit: BuilderChunkSplit;
}
