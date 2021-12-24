import React, { Fragment, useEffect, useState, createRef } from "react";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { javascript } from "@codemirror/lang-javascript";
import styles from "./playground.module.css";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Head from "@docusaurus/Head";

let sucrase =
  "https://cdn.skypack.dev/pin/sucrase@v3.20.3-gZX9cgIr2LXp7bQ6YAVm/mode=imports,min/optimized/sucrase.js";
function CodeEditor() {
  let parent = createRef();
  let [mounted, setMounted] = useState(false);
  let [code, setCode] = useState("");

  useEffect(() => {
    if (mounted) return;
    setMounted(true);
    let Import = new Function("url", "return import(url)");
    Import(sucrase);
    let editor = new EditorView({
      state: EditorState.create({
        doc: `import { css } from '@passlang/core'

let font_stack: string = 'monospace'

export default css\`
nav {
  width: \${10 + 10}px; /* operators */
}

ul {
  font: 100% \${font_stack}; /* using variables */
}
\``,
        extensions: [
          basicSetup,
          javascript(),
          EditorView.theme({
            "&": { height: "40vh" },
            ".cm-scroller": { overflow: "auto" },
          }),
          EditorView.updateListener.of((v) => {
            if (v.docChanged) {
              try {
                Import(sucrase).then(({ transform }) => {
                  Import(
                    URL.createObjectURL(
                      new Blob(
                        [
                          transform(
                            editor.state.doc
                              .toString()
                              .replace(
                                /(?<=import[\W].+?[\W]from\s*['"])/g,
                                "https://cdn.skypack.dev/"
                              ),
                            { transforms: ["typescript"] }
                          ).code,
                        ],
                        {
                          type: "text/javascript",
                        }
                      )
                    )
                  ).then((module) => setCode(module.default));
                });
              } catch (e) {
                setCode(e.toString());
                console.log(e);
              }
            }
          }),
        ],
      }),
      parent: parent.current,
    });
  }, []);
  return (
    <>
      <div ref={parent}></div>
      <div className={styles.preview}>
        <CodeBlock className="language-css">{code}</CodeBlock>
      </div>
    </>
  );
}

export default function Playground() {
  return (
    <Layout>
      <h1>Playground</h1>
      <div className={styles.playground}>
        <BrowserOnly fallback={<div>Loading...</div>}>
          {() => {
            return <CodeEditor />;
          }}
        </BrowserOnly>
      </div>
    </Layout>
  );
}
