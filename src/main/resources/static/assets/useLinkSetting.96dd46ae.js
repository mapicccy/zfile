import{l as u,c as i}from"./admin-setting.fad9817e.js";import{ax as e}from"./index.bbf7818f.js";import{E as d}from"./request.19cbe8c5.js";function f(){const{data:a,loading:t,reload:s}=e(u,{formatResult:r=>r.data}),{loading:o,run:n}=e(i,{manual:!0,onSuccess(){d({message:"\u4FDD\u5B58\u6210\u529F",type:"success"})}});return{data:a,dataLoading:t,reload:s,saveData:()=>{n(a.value)},saveLoading:o}}export{f as u};