import{u as P,j as ee,m as se,p as _,q as le,v as te,x as ae,y as ie,l as A,z as R,A as ue,w as re,k as l,B as ne,R as j,C as oe,D as ce,E as ve,G as de,H as me,I as he,J as ye,K as pe,L as ge,M as C,N as Se,O as fe,P as He,Q as ke,S as M,T as O,U as Qe}from"./app-LM2t-I8K.js";const Re=["/","/EasySchool/","/EasySelectCourse/","/EasySelectCourse/SelectionStrategy.html","/Other/","/QuickStart/Agreement.html","/QuickStart/","/QuickStart/Sponsor.html","/demo/","/demo/disable.html","/demo/layout.html","/demo/markdown.html","/demo/page.html","/guide/","/EasySelectCourse/SelectionGuide/","/EasySelectCourse/SelectionGuide/Sports.html","/guide/bar/","/guide/bar/baz.html","/guide/foo/","/guide/foo/ray.html","/404.html"],Ce="SLIMSEARCH_QUERY_HISTORY",p=P(Ce,[]),we=()=>{const{queryHistoryCount:t}=C,a=t>0;return{enabled:a,queryHistories:p,addQueryHistory:i=>{a&&(p.value=Array.from(new Set([i,...p.value.slice(0,t-1)])))},removeQueryHistory:i=>{p.value=[...p.value.slice(0,i),...p.value.slice(i+1)]}}},I=t=>Re[t.id]+("anchor"in t?`#${t.anchor}`:""),qe="SLIMSEARCH_RESULT_HISTORY",{resultHistoryCount:U}=C,g=P(qe,[]),xe=()=>{const t=U>0;return{enabled:t,resultHistories:g,addResultHistory:a=>{if(t){const i={link:I(a),display:a.display};"header"in a&&(i.header=a.header),g.value=[i,...g.value.slice(0,U-1)]}},removeResultHistory:a=>{g.value=[...g.value.slice(0,a),...g.value.slice(a+1)]}}},Ee=t=>{const a=de(),i=_(),w=me(),r=A(0),f=R(()=>r.value>0),h=he([]);return ye(()=>{const{search:y,terminate:q}=pe(),S=ge(o=>{const{resultsFilter:H=n=>n,querySplitter:$,suggestionsFilter:x,...E}=a.value;o?(r.value+=1,y(o,i.value,E).then(n=>H(n,o,i.value,w.value)).then(n=>{r.value-=1,h.value=n}).catch(n=>{console.warn(n),r.value-=1,r.value||(h.value=[])})):h.value=[]},C.searchDelay-C.suggestDelay,{maxWait:5e3});Se([t,i],([o])=>S(o.join(" "))),fe(()=>{q()})}),{isSearching:f,results:h}};var Le=ee({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(t,{emit:a}){const i=se(),w=_(),r=le(te),{enabled:f,addQueryHistory:h,queryHistories:y,removeQueryHistory:q}=we(),{enabled:S,resultHistories:o,addResultHistory:H,removeResultHistory:$}=xe(),x=f||S,E=ae(t,"queries"),{results:n,isSearching:G}=Ee(E),u=ie({isQuery:!0,index:0}),d=A(0),m=A(0),T=R(()=>x&&(y.value.length>0||o.value.length>0)),b=R(()=>n.value.length>0),L=R(()=>n.value[d.value]||null),Y=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?o.value.length-1:y.value.length-1):u.index=s-1},z=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:o.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},B=()=>{d.value=d.value>0?d.value-1:n.value.length-1,m.value=L.value.contents.length-1},J=()=>{d.value=d.value<n.value.length-1?d.value+1:0,m.value=0},K=()=>{m.value<L.value.contents.length-1?m.value+=1:J()},N=()=>{m.value>0?m.value-=1:B()},D=e=>e.map(s=>Qe(s)?s:l(s[0],s[1])),V=e=>{if(e.type==="customField"){const s=He[e.index]||"$content",[c,Q=""]=ke(s)?s[w.value].split("$content"):s.split("$content");return e.display.map(v=>l("div",D([c,...v,Q])))}return e.display.map(s=>l("div",D(s)))},k=()=>{d.value=0,m.value=0,a("updateQuery",""),a("close")},W=()=>f?l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},r.value.queryHistory),y.value.map((e,s)=>l("div",{class:["slimsearch-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{a("updateQuery",e)}},[l(M,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},e),l("button",{class:"slimsearch-remove-icon",innerHTML:O,onClick:c=>{c.preventDefault(),c.stopPropagation(),q(s)}})]))])):null,X=()=>S?l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},r.value.resultHistory),o.value.map((e,s)=>l(j,{to:e.link,class:["slimsearch-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{k()}},()=>[l(M,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(c=>D(c)).flat())]),l("button",{class:"slimsearch-remove-icon",innerHTML:O,onClick:c=>{c.preventDefault(),c.stopPropagation(),$(s)}})]))])):null;return ue("keydown",e=>{if(t.isFocusing){if(b.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const s=L.value.contents[m.value];h(t.queries.join(" ")),H(s),i.push(I(s)),k()}}else if(S){if(e.key==="ArrowUp")Y();else if(e.key==="ArrowDown")z();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(a("updateQuery",y.value[s]),e.preventDefault()):(i.push(o.value[s].link),k())}}}}),re([d,m],()=>{var e;(e=document.querySelector(".slimsearch-result-list-item.active .slimsearch-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["slimsearch-result-wrapper",{empty:t.queries.length?!b.value:!T.value}],id:"slimsearch-results"},t.queries.length?G.value?l(ne,{hint:r.value.searching}):b.value?l("ul",{class:"slimsearch-result-list"},n.value.map(({title:e,contents:s},c)=>{const Q=d.value===c;return l("li",{class:["slimsearch-result-list-item",{active:Q}]},[l("div",{class:"slimsearch-result-title"},e||r.value.defaultTitle),s.map((v,Z)=>{const F=Q&&m.value===Z;return l(j,{to:I(v),class:["slimsearch-result-item",{active:F,"aria-selected":F}],onClick:()=>{h(t.queries.join(" ")),H(v),k()}},()=>[v.type==="text"?null:l(v.type==="title"?oe:v.type==="heading"?ce:ve,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[v.type==="text"&&v.header?l("div",{class:"content-header"},v.header):null,l("div",V(v))])])})])})):r.value.emptyResult:x?T.value?[W(),X()]:r.value.emptyHistory:r.value.emptyResult)}});export{Le as default};
