import path from 'path';
import { BuildPaths } from './config/build/types/paths';
import { BuildMode } from './config/build/types/modes';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv } from './config/build/types/env';

export default (env: BuildEnv) => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'src', 'index.html')
  };

  const mode: BuildMode = env.mode || 'development';
  const isDev: boolean = mode === 'development';
  const PORT = env.port || 3000;

  return buildWebpackConfig({
    isDev,
    mode,
    paths,
    port: PORT
  });
}; 