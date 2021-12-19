import { stringify } from './stringify';

export { stringify } from './stringify'

export let css = (strings: TemplateStringsArray, ...args: any[]) =>
    strings.reduce(
        (p, c, index) => {
            let value = args[index]
            if (typeof value == 'object')
                value = stringify(value)
            return p + c + value
        },
        ""
    );
