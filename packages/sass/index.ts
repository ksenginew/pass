// @ts-ignore
import { compileString } from "sass";
// @ts-ignore
import type { StringOptions } from "sass";
// @ts-ignore
import { css as pass } from "pass-lang";

// @ts-ignore
export * from "sass";

export let scss =
  (options?: StringOptions<"sync">) =>
  (strings: TemplateStringsArray, ...args: any[]) => {
    let result = compileString(pass(strings, ...args), options);
    return Object.assign(result.css, result);
  };

export let sass = (options: StringOptions<"sync"> = {}) =>
  scss({ syntax: "indented", ...options });

export default scss();
