import { compileString } from "sass";
import { css as pass } from "@passlang/core";

export * from "sass";

export let scss =
    (/** @type {import("sass").StringOptionsWithoutImporter<"sync"> | undefined} */ options) =>
        (/** @type {TemplateStringsArray} */ strings, /** @type {any} */ ...args) =>
            compileString(pass(strings, ...args), options).css;

export let sass = (options = {}) =>
    scss({ syntax: "indented", ...options });

export default scss();