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
        doc: `if 'Unv is awesome!'
    print('Hello World!')
# keep editing for live results
`,
        extensions: [
          basicSetup,
          python(),
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
