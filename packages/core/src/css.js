import { generate, parse } from "css-tree";
import { stringify } from "./stringify";

/**
 * 
 * @param {TemplateStringsArray} strings 
 * @param  {...any} args 
 */
export let css = (strings, ...args) => {
  let str = strings.reduce((p, c, index) => {
    let value = args[index];
    if (typeof value == "object") {
      if (value.type) value = generate(value)
      else value = stringify(value);
    }
    // `value == undefined` can detect null too.
    return p + c.trim() + (value == undefined ? "" : value);
  }, "");
  try { return parse(str, { context: 'value' }) }
  catch {
    try { return parse(str, { context: 'declaration' }) }
    catch {
      try { return parse(str, { context: 'declarationList' }) }
      catch {
        try { return parse(str, { context: 'block' }) }
        catch {
          try { return parse(str, { context: 'rule' }) }
          catch {
            try { return parse(str, { context: 'atrule' }) }
            catch {
              try { return parse(str, { context: 'stylesheet' }) }
              catch {
                throw Error
              }
            }
          }
        }
      }
    }
  }
}