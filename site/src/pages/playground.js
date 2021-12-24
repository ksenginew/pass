import React, { Fragment, useEffect, useState, createRef } from "react";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup"
import { javascript } from "@codemirror/lang-javascript"
import styles from "./playground.module.css";
import BrowserOnly from '@docusaurus/BrowserOnly';

function CodeEditor() {
  let parent = createRef()
  let [mounted, setMounted] = useState(false)
  let [code, setCode] = useState('')

  useEffect(() => {
    if (mounted)
      return
    setMounted(true)

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
            ".cm-scroller": { overflow: "auto" }
          }),
          EditorView.updateListener.of(v => {
            if (v.docChanged) {
              document.querySelector('.' + styles.preview).textContent = ''
              try {
                import(URL.createObjectURL(new Blob([editor.state.doc.toString()], {type: 'text/javascript'}))).then(module => setCode(module.default))
              } catch(e) {
                setCode(e.toString())
              }
            }
          })
        ]
      }),
      parent: parent.current
    })
  }, [])
  return <>
    <div ref={parent}></div>
    <div className={styles.preview} >
      <CodeBlock className="language-css">{code}</CodeBlock>
    </div>
  </>
}

export default function Playground() {
  return (
    <Layout>
      <h1>Playground</h1>
      <div className={styles.playground}>
        <BrowserOnly fallback={<div>Loading...</div>}>
          {() => {
            return <CodeEditor />
          }}
        </BrowserOnly>
      </div>
    </Layout>
  );
}
