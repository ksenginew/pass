import { createRuntime } from "./run";

export const runtime = createRuntime();

export async function compile(file: string) {
  return runtime(file).default;
}

export function compileSync(file: string) {
  return runtime(file).default;
}

export async function compileString(src: string, id: string = process.cwd()) {
  return runtime(id, src).default;
}

export function compileStringSync(src: string, id: string = process.cwd()) {
  return runtime(id, src).default;
}
