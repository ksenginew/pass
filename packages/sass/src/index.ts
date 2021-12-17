// @ts-ignore
import { compileString } from "sass";
// @ts-ignore
import type { StringOptions } from "sass";
// @ts-ignore
import { css as pass } from "@pass/core";

// @ts-ignore
export * from "sass";

export let scss =
  (options?: StringOptions<"sync">) =>
  (strings: TemplateStringsArray, ...args: any[]) =>
    // @ts-ignore
    compileString(pass(strings, ...args), options).css as string;

export let sass = (options: StringOptions<"sync"> = {}) =>
  scss({ syntax: "indented", ...options });

export default scss();
