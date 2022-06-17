export let stringify = (obj: any) => {
  let out = "";
  for (let key in obj) {
    let val = obj[key];
    if (typeof val == "object") out += key + "{" + stringify(val) + "}";
    else {
      val = Array.isArray(val) ? val : [val];
      out += val
        .filter((v: any) => v != undefined)
        .map((v: any) => key + (key[0] == "@" ? " " : ":") + v + ";")
        .join("");
    }
  }
  return out;
};
