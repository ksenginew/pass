/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import Prism from "prismjs";
import copy from "copy-text-to-clipboard";
import Translate, { translate } from "@docusaurus/Translate";
import {
  useThemeConfig,
  parseCodeBlockTitle,
  parseLanguage,
  parseLines,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import usePrismTheme from "@theme/hooks/usePrismTheme";

import styles from "./styles.module.css";

export default function CodeBlock({
  children,
  className: blockClassName,
  metastring,
  title,
}) {
  const [showCopied, setShowCopied] = useState(false);
  const container = useRef();

  const codeBlockTitle = parseCodeBlockTitle(metastring) || title;

  // In case interleaved Markdown (e.g. when using CodeBlock as standalone component).
  const content = (
    Array.isArray(children) ? children.join("") : children
  ).replace(/\n$/, "");

  useEffect(() => {
    Prism.highlightElement(container.current);
  }, [children]);

  const handleCopyCode = () => {
    copy(content);
    setShowCopied(true);

    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <div
      className={clsx(
        styles.codeBlockContainer,
        ThemeClassNames.common.codeBlock
      )}
    >
      {codeBlockTitle && (
        <div className={styles.codeBlockTitle}>
          {codeBlockTitle}
        </div>
      )}
      <div className={clsx(styles.codeBlockContent)}>
        <pre
          tabIndex={0}
          className={clsx(styles.codeBlock, "thin-scrollbar")}
        >
          <code
            ref={container}
            className={clsx(blockClassName, styles.codeBlockLines)}
          >
            {content}
          </code>
        </pre>

        <button
          type="button"
          aria-label={translate({
            id: "theme.CodeBlock.copyButtonAriaLabel",
            message: "Copy code to clipboard",
            description: "The ARIA label for copy code blocks button",
          })}
          className={clsx(styles.copyButton, "clean-btn")}
          onClick={handleCopyCode}
        >
          {showCopied ? (
            <Translate
              id="theme.CodeBlock.copied"
              description="The copied button label on code blocks"
            >
              Copied
            </Translate>
          ) : (
            <Translate
              id="theme.CodeBlock.copy"
              description="The copy button label on code blocks"
            >
              Copy
            </Translate>
          )}
        </button>
      </div>
    </div>
  );
}
