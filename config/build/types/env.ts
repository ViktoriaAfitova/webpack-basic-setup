import { BuildMode } from './modes';

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}