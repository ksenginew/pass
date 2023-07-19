/**
 * @param {any} obj
 */
export function stringify(obj) {
  let out = "";
  for (let key in obj) {
    let val = obj[key];
    if (typeof val == "object") out += key + "{" + stringify(val) + "}";
    else {
      val = Array.isArray(val) ? val : [val];
      out += val
        .filter((/** @type {any} */ v) => v != undefined)
        .map(
          (/** @type {string} */ v) =>
            key + (key[0] == "@" ? " " : ":") + v + ";",
        )
        .join("");
    }
  }
  return out;
}
