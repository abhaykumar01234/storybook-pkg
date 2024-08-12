import{r as y}from"./index-RYns6xqu.js";var c={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=y,x=Symbol.for("react.element"),b=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,v=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function m(t,e,i){var r,o={},a=null,p=null;i!==void 0&&(a=""+i),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(p=e.ref);for(r in e)h.call(e,r)&&!k.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:x,type:t,key:a,ref:p,props:o,_owner:v.current}}s.Fragment=b;s.jsx=m;s.jsxs=m;c.exports=s;var E=c.exports;const f=({style:t={},...e})=>E.jsx("button",{style:{...t,background:"darkred",color:"white",padding:"0.5rem 1.5rem",border:"none",outline:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"600"},...e});f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{style:{defaultValue:{value:"{}",computed:!1},required:!1}}};const R={title:"Button",component:f},n={args:{children:"My Button",onClick:()=>alert("My name is Abhay")}};var u,l,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "My Button",
    onClick: () => alert("My name is Abhay")
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const g=["Primary"];export{n as Primary,g as __namedExportsOrder,R as default};
