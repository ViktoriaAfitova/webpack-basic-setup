import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/options';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { paths, mode, isDev } = options;

  return {
    entry: paths.entry,
    mode: mode,
    output: {
      filename: '[contenthash].[name].js',
      path: paths.build,
      clean: true
    },
    module: {
      rules: buildLoaders()
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    resolve: buildResolvers(),
    plugins: buildPlugins(paths),
  }
};
