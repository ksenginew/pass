// import basit utility
import { css } from '@passlang/core'

// define variables for the primary colors
let primary_1:string = '#a2b9bc'
let primary_2:string = '#b2ad7f'
let primary_3:string = '#878f99'

// use the variables and export CSS
export default css`
.main-header  {  
  background-color:  ${primary_1};  
}  
  
.menu-left  {  
  background-color:  ${primary_2};  
}  
  
.menu-right  {  
  background-color:  ${primary_3};  
}
`
