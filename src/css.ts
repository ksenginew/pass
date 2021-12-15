export let css = (strings: TemplateStringsArray, ...args: any[]) =>
    strings.reduce(
        (acc, currentString, index) => acc + currentString + (args[index] ?? ""),
        ""
    );
