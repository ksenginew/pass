// import basit utility
import { css } from "@passlang/core";
// @ts-ignore
import { primary_1, primary_2, primary_3 } from "./colors.pass.ts";

// use the variables and export CSS
export default css`
  .main-header {
    background-color: ${primary_1};
  }

  .menu-left {
    background-color: ${primary_2};
  }

  .menu-right {
    background-color: ${primary_3};
  }
`;
