let newRule = /(?:([\u0080-\uFFFF\w-%@]+) *:? *((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^{};])+?)[;}]|([^;}{]*?) *{)|(}\s*)/g;
let ruleClean = /\/\*[^]*?\*\/|\s\s+|\n/g;

/**
 * Convert a css style string into a object
 * @param {String} val
 * @returns {Object}
 */
export let parse = (val: string) => {
    let tree = [];
    let current = ''
    let outer = '';
    let result = ''
    let block;
    let rule = (selector) => {
        if (current) {
            result += [selector, ...tree.filter(rule => rule[0] == '@')].reduce(
                (p, c) => c + '{' + p + '}',
                current
            )
            current = ''
        }
    }
    while ((block = newRule.exec(val.replace(ruleClean, '')))) {
        // Remove the current entry
        if (block[4]) {
            rule(tree.shift())
        } else if (block[3]) {
            rule(tree[0])
            let selector = block[3]
            if (selector[0] != '@') {
                let parent = tree.find(value => value[0] != '@')
                if (parent)
                    selector =
                        // Go over the selector and replace the matching multiple selectors if any
                        parent.replace(/([^,])+/g, (sel) => {
                            // Return the current selector with the key matching multiple selectors if any
                            return selector.replace(/(^:.*)|([^,])+/g, (k) => {
                                // If the current `k`(key) has a nested selector replace it
                                if (/&/.test(k)) return k.replace(/&/g, sel);

                                // If there's a current selector concat it
                                return sel ? sel + ' ' + k : k;
                            });
                        })
            }
            tree.unshift(selector);
        } else {
            current += block[1].replace(/_/g, '-').replace(/[A-Z]/g, '-$&').toLowerCase() + ':' + block[2] + ';'
        }
    }

    return result;
};