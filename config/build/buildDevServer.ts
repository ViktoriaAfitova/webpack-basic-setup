import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/options';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  const { port } = options;

  return {
    port: port,
    open: true
  }
}