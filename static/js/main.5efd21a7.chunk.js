(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){e.exports=a(322)},137:function(e,t,a){},241:function(e,t,a){},322:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(6),r=a.n(o),i=(a(137),a(32)),l=a(17),u=a(85),s=a.n(u),m=a(118),f={data:[],pagination:{count:0,total_count:0,offset:0}},h=function(e){var t=p(Object(l.a)({},e,{api_key:"dc6zaTOxFJmzC"}));return"".concat("https://api.giphy.com").concat("/v1/gifs/search").concat(t)};function p(e){return Object.keys(e).reduce(function(t,a,n){return[t,0===n?"?":"&",a=encodeURIComponent(a),"=",encodeURIComponent(e[a])].join("")},"")}var d=a(129),g=a(119),E=a.n(g),v=a(86),b=a.n(v),j=a(325);a(140);function O(e){var t=e.title,a=Object(d.a)(e,["title"]),n=a.images.fixed_width,o=n.url,r=n.width,i=n.height;return console.log(a.images),c.a.createElement(b.a,{style:{width:240,margin:"20px auto",height:"fit-content"},cover:c.a.createElement("img",{width:r,height:i,src:o,alt:t})},c.a.createElement(b.a.Meta,{title:c.a.createElement("a",{href:o,target:"_blank"},t)}))}var w=function(e){var t=e.data,a=e.pagination,n=e.pageChange,o=e.query,r=a.total_count,i=a.count,u=a.offset,s=Math.floor(u/i)+1;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"items"},t.map(function(e){return c.a.createElement(O,Object.assign({key:e.id},e))})),c.a.createElement("div",{className:"footer"},c.a.createElement(E.a,{current:s,key:s,total:r,pageSize:i,showQuickJumper:!0,itemRender:function(e,t){return"jump-prev"===t?c.a.createElement(j.a,{to:"".concat(location.pathname).concat(p(Object(l.a)({},o,{offset:e*i})))},"<<"):"jump-next"===t?c.a.createElement(j.a,{to:"".concat(location.pathname).concat(p(Object(l.a)({},o,{offset:e*i})))},">>"):"prev"===t?c.a.createElement(j.a,{to:"".concat(location.pathname).concat(p(Object(l.a)({},o,{offset:e*i})))},"<"):"next"===t?c.a.createElement(j.a,{to:"".concat(location.pathname).concat(p(Object(l.a)({},o,{offset:e*i})))},">"):c.a.createElement(j.a,{to:"".concat(location.pathname).concat(p(Object(l.a)({},o,{offset:e*i})))},e)},onChange:function(e){n(e*i-i)}})))},y=a(123),x=a.n(y),S=a(87),k=a.n(S),C=a(60),q=a.n(C),I=a(122),_=(a(241),q.a.Header),F=q.a.Content,G={q:"cats",limit:10,offset:0};var J=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).location,t=void 0===e?{search:""}:e,a=Object(l.a)({},G,Object(I.parse)(t.search)),o=Object(n.useState)(""),r=Object(i.a)(o,2),u=r[0],d=r[1],g=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(!0),u=Object(i.a)(r,2),d=u[0],g=u[1],E=Object(n.useState)(null),v=Object(i.a)(E,2),b=v[0],j=v[1],O=Object(n.useState)(e),w=Object(i.a)(O,2),y=w[0],x=w[1];Object(n.useEffect)(function(){var e=p(y);history.pushState(e,y.q||"Giphy Search",e)},[y]),Object(n.useEffect)(function(){function e(){return(e=Object(m.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,fetch(h(y));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),o(e.t0);case 13:j(a),g(!1);case 15:case"end":return e.stop()}},e,this,[[1,10]])}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[y]);var S=b||f;return{error:c,loading:d,data:S.data,pagination:S.pagination,fetchGifs:function(e){x(function(t){return Object(l.a)({},t,e)})},query:y}}(a),E=g.error,v=g.loading,b=g.data,j=g.pagination,O=g.fetchGifs,y=g.query;return c.a.createElement(q.a,null,c.a.createElement(_,null,c.a.createElement("h1",{style:{color:"white",textAlign:"center"}},c.a.createElement("a",{href:"".concat(window.location.origin).concat(window.location.pathname)},"Giphy Search App"))),c.a.createElement(F,{style:{width:"100%"}},c.a.createElement(k.a,{onSubmit:function(e){var t={q:u,offset:0,limit:a.limit};O(t),e.preventDefault()},style:{margin:"20px auto 20px auto",maxWidth:"250px"}},c.a.createElement("p",null,"Enter a word or phrase:"),c.a.createElement(k.a.Item,null,c.a.createElement(x.a,{autoFocus:!0,enterButton:!0,defaultValue:a.q,onSearch:function(e){O({q:e})},onChange:function(e){d(e.target.value)}}))),E&&c.a.createElement("div",null,E),!E&&v&&c.a.createElement("div",null,"Loading..."),!v&&!E&&j&&0===j.total_count&&c.a.createElement("div",null,"No Results Found"),!v&&!E&&c.a.createElement("div",null,c.a.createElement("p",{style:{textAlign:"center"}},"Total Items ",c.a.createElement("span",null,j.total_count)),c.a.createElement(w,{data:b,pagination:j,pageChange:function(e){O({offset:e})},query:y}))))},R=a(124),z=a(125),A=a(128),B=a(126),N=a(130),W=function(e){function t(e){var a;return Object(R.a)(this,t),(a=Object(A.a)(this,Object(B.a)(t).call(this,e))).state={error:null,errorInfo:null},a}return Object(N.a)(t,e),Object(z.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?c.a.createElement("div",null,c.a.createElement("h2",null,"Something went wrong."),c.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),c.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children}}]),t}(c.a.Component),D=a(326),M=a(327),T=function(){return c.a.createElement(D.a,null,c.a.createElement(W,null,c.a.createElement(M.a,{path:"/",component:J})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[132,1,2]]]);
//# sourceMappingURL=main.5efd21a7.chunk.js.map