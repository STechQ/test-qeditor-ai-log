/*! For license information please see apiInput_design.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports.flowcomponent=r(require("react")):e.flowcomponent=r(e.react)}(this,(e=>(()=>{"use strict";var r={1837:(e,r,t)=>{var s=t(8156),o=Symbol.for("react.element"),n=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var s,p={},i=null,c=null;for(s in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(c=r.ref),r)n.call(r,s)&&!l.hasOwnProperty(s)&&(p[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===p[s]&&(p[s]=r[s]);return{$$typeof:o,type:e,key:i,ref:c,props:p,_owner:a.current}}r.jsx=p,r.jsxs=p},2094:(e,r,t)=>{e.exports=t(1837)},8156:r=>{r.exports=e}},t={};function s(e){var o=t[e];if(void 0!==o)return o.exports;var n=t[e]={exports:{}};return r[e](n,n.exports,s),n.exports}s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{s.r(o),s.d(o,{default:()=>p});var e=s(2094);var r=s(8156);const t=t=>{const s=t.propValues.urlParams||[],{NameDiv:o,DescDiv:n}=t.react.prop,{ExpressionComp:a}=t.react,l=e=>s.map(((r,t)=>t==(null==e?void 0:e.index)&&e.val)),[p,i]=(0,r.useState)(s),[c,u]=(0,r.useState)(l()),[d,y]=(0,r.useState)(!1),[v,h]=(0,r.useState)(),x=(e,r)=>u(l({index:e,val:r}));return(0,e.jsxs)("div",{children:[(0,e.jsx)(o,{children:"Url Parameters"}),(0,e.jsxs)(n,{children:["Parameters to get from url. Like /buy/","{","productID","}"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"/"}),p.reduce(((r,o,n)=>{0!=n&&r.push((0,e.jsx)("span",{children:"/"},`slash_${n}`));const a="string"==typeof o?o:`{${o.value}}`,p={display:c[n]?"inline":"none"};return r.push((0,e.jsxs)("span",{onMouseOver:()=>x(n,!0),onMouseOut:()=>x(n,!1),children:[(0,e.jsx)("span",{children:a}),(0,e.jsx)("span",{style:p,onClick:()=>(e=>{const r=s.filter(((r,t)=>t!=e));i(r),u(l()),t.callbacks.setProp("urlParams",r.length?r:void 0)})(n),children:"X"})]},a)),r}),[])]}),(0,e.jsx)(a,{inputOptions:{width:"140px"},expression:v,types:["msg","string"],onChange:(e,r)=>{y(r),h(e)}}),(0,e.jsx)("br",{}),(0,e.jsx)("button",{disabled:!d,onClick:()=>{if(!v)return;const e=s.map((e=>e));e.push("msg"==v.type?v:v.value),i(e),t.callbacks.setProp("urlParams",e),h({type:v.type,value:""})},children:"Add"})]})},n={width:"80px"},a=t=>{const{NameDiv:s,DescDiv:o}=t.react.prop,{ExpressionComp:a}=t.react,l=e=>e.reduce(((e,r)=>(r.key&&(e[r.key]=r.value.value),e)),{}),p=()=>y.map((e=>e)),i=e=>{e.push({key:"",value:{type:"msg",value:""}})},c=(u=t.propValues.headers||{},d=(e,r)=>({key:r,value:{type:"msg",value:e}}),function(e){return Object.keys(e)}(u).map(((e,r)=>d(u[e],e,r))));var u,d;0!=c.length&&""==c[c.length-1].key||i(c);const[y,v]=(0,r.useState)(c);return(0,e.jsxs)("div",{children:[(0,e.jsx)(s,{children:"Headers"}),(0,e.jsx)(o,{children:"Where to read headers from API input ?"}),y.map(((r,s)=>(0,e.jsxs)("div",{children:[(0,e.jsx)("input",{type:"text",style:n,value:r.key,placeholder:r.key?void 0:"key",onChange:e=>((e,r)=>{const s=p();s[r].key=e.toLowerCase(),""!=s[s.length-1].key&&i(s);const o=s.findIndex((e=>""==e.key));-1!=o&&o!=s.length-1&&s.splice(o,1),v(s),t.callbacks.setProp("headers",l(s))})(e.target.value,s)}),(0,e.jsx)(a,{inputOptions:{width:"70px"},types:["msg"],expression:r.value,onChange:e=>((e,r)=>{const s=p();s[r].value=e,v(s),t.callbacks.setProp("headers",l(s))})(e,s)})]},s)))]})},l=t=>{const{NameDiv:s,DescDiv:o}=t.react.prop,{ExpressionComp:n}=t.react,[a,l]=(0,r.useState)({type:"msg",value:t.propValues.body||""});return(0,e.jsxs)("div",{children:[(0,e.jsx)(s,{children:"Body"}),(0,e.jsx)(o,{children:"Where to read the body of the api to ?"}),(0,e.jsx)(n,{types:["msg"],expression:a,onChange:e=>{l(e),t.callbacks.setProp("body",e.value)}})]})},p={name:"apiInput",version:"0.8",style:{fill:"#DEB877",stroke:"#999999"},inputs:[{name:"_"}],outputs:["_"],editSection:r=>()=>(0,e.jsxs)("div",{children:[t(r),(0,e.jsx)("hr",{}),a(r),(0,e.jsx)("hr",{}),l(r)]})}})(),o})()));