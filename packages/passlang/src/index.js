import { createRuntime } from "./run";

export const runtime = createRuntime();

/**
 * @param {string} file
 */
export async function compile(file) {
  return runtime(file).default;
}

/**
 * @param {string} file
 */
export function compileSync(file) {
  return runtime(file).default;
}

/**
 * @param {string} src
 */
export async function compileString(src, id = process.cwd()) {
  return runtime(id, src).default;
}

/**
 * @param {string} src
 */
export function compileStringSync(src, id = process.cwd()) {
  return runtime(id, src).default;
}
