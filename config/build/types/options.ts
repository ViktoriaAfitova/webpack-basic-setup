import { BuildMode } from './modes';
import { BuildPaths } from './paths';

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths; 
  isDev: boolean;  
  port: number; 
}