export let stringify = (obj: any) =>
    Object.entries(obj).map(
        ([key, val]) =>
            key +
            (typeof val == "object"
                ? "{" + stringify(val) + "}"
                : (key[0] == "@" ? " " : ":") + val + ";")
    ).join("");
