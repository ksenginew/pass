import { stringify } from "./stringify";

/**
 * 
 * @param {TemplateStringsArray} strings 
 * @param  {...any} args 
 */
export let css = (strings, ...args) =>
  strings.reduce((p, c, index) => {
    let value = args[index];
    if (typeof value == "object") value = stringify(value);
    // `value == undefined` can detect null too.
    return p + c + (value == undefined ? "" : value);
  }, "");
