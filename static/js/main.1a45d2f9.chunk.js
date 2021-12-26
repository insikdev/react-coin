(this.webpackJsonpcoin=this.webpackJsonpcoin||[]).push([[0],{71:function(e,n,t){"use strict";t.r(n);var c,i,r,o,s,d,a,l,j,b,h,x,u,O,p,f,m,g,v,y,w,k,_,D,S,C,U,M,F,q,z,R,L,A=t(1),K=t.n(A),N=t(26),P=t.n(N),T=t(3),Q=t(5),E=t(41),$=T.b(c||(c=Object(Q.a)(["\n  ",';\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: "Roboto Slab", serif;\n  }\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n'])),E.a),I=t(11),J=t(6),Y=t(19),B=t(27),H=t(12),V=t(31),Z=t.n(V),G=t(47),W="https://api.coinpaprika.com/v1",X=function(){return fetch("".concat(W,"/tickers")).then((function(e){return e.json()}))},ee=function(){var e=Object(G.a)(Z.a.mark((function e(n){var t,c;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(Date.now()/1e3),c=t-1209600,e.abrupt("return",fetch("".concat(W,"/coins/").concat(n,"/ohlcv/historical?start=").concat(c,"&end=").concat(t)).then((function(e){return e.json()})));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ne=function(e){return Math.abs(Number(e))>=1e6?(Math.abs(Number(e))/1e6).toFixed(2)+"M":Math.abs(Number(e))>=1e3?(Math.abs(Number(e))/1e3).toFixed(2)+"K":Math.abs(Number(e))},te=t(0),ce=T.d.div(i||(i=Object(Q.a)(["\n  background-color: ",";\n  padding: 10px 60px;\n  border-radius: 10px;\n  color: white;\n  width: min-content;\n  margin-bottom: 50px;\n  font-weight: ",";\n"])),(function(e){return e.theme.titleColor}),(function(e){return e.isOn?"bold":"normal"})),ie=function(e){var n=e.title,t=e.isOn;return Object(te.jsx)(ce,{isOn:t,children:n})},re=T.d.ul(r||(r=Object(Q.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),oe=T.d.li(o||(o=Object(Q.a)(["\n  display: flex;\n  width: 100%;\n  margin-bottom: 40px;\n"]))),se=T.d.div(s||(s=Object(Q.a)(["\n  width: 50%;\n  font-size: 22px;\n  font-weight: bold;\n"]))),de=T.d.div(d||(d=Object(Q.a)(["\n  font-size: 20px;\n  color: gray;\n"]))),ae=function(e){return Object(te.jsxs)(re,{children:[Object(te.jsx)(ie,{title:"Detail",isOn:!0}),Object(te.jsxs)(oe,{children:[Object(te.jsx)(se,{children:"Market Cap Rank"}),Object(te.jsx)(de,{children:e.rank})]}),Object(te.jsxs)(oe,{children:[Object(te.jsx)(se,{children:"Market Cap"}),Object(te.jsx)(de,{children:ne(e.quotes.USD.market_cap)})]}),Object(te.jsxs)(oe,{children:[Object(te.jsx)(se,{children:"Circulation Supply"}),Object(te.jsx)(de,{children:e.circulating_supply.toLocaleString("KR")})]}),Object(te.jsxs)(oe,{children:[Object(te.jsx)(se,{children:"Max Supply"}),Object(te.jsx)(de,{children:e.max_supply.toLocaleString("KR")})]}),Object(te.jsxs)(oe,{children:[Object(te.jsx)(se,{children:"Total Supply"}),Object(te.jsx)(de,{children:e.total_supply.toLocaleString("KR")})]}),Object(te.jsxs)(oe,{children:[Object(te.jsx)(se,{children:"Issue Date"}),Object(te.jsx)(de,{children:new Date(e.first_data_at).toLocaleString()})]})]})},le=Object(T.e)(a||(a=Object(Q.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),je=T.d.div(l||(l=Object(Q.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70vh;\n"]))),be=T.d.div(j||(j=Object(Q.a)(["\n  animation: "," 1s linear infinite;\n  transform: translateZ(0);\n  border-top: 2px solid grey;\n  border-right: 2px solid grey;\n  border-bottom: 2px solid grey;\n  border-left: 4px solid black;\n  background: transparent;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n"])),le),he=function(){return Object(te.jsx)(je,{children:Object(te.jsx)(be,{})})},xe=T.d.main(b||(b=Object(Q.a)(["\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n"]))),ue=function(e){var n=e.children;return Object(te.jsx)(xe,{children:n})},Oe=T.d.h2(h||(h=Object(Q.a)(["\n  font-weight: 600;\n  font-size: 48px;\n  color: ",";\n  text-align: left;\n  margin: 20px 0px;\n"])),(function(e){return e.theme.titleColor})),pe=function(e){var n=e.children;return Object(te.jsx)("header",{children:Object(te.jsx)(Oe,{children:n})})},fe=T.d.section(x||(x=Object(Q.a)(["\n  background-color: ",";\n  border-radius: 2px;\n  margin-bottom: 50px;\n  padding: 20px 0px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"])),(function(e){return e.theme.hoverColor})),me=T.d.div(u||(u=Object(Q.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),ge=T.d.span(O||(O=Object(Q.a)(["\n  font-size: 30px;\n  font-weight: bold;\n"]))),ve=T.d.span(p||(p=Object(Q.a)(["\n  color: gray;\n  font-size: 16px;\n  margin-bottom: 10px;\n"]))),ye=T.d.span(f||(f=Object(Q.a)(["\n  font-size: 26px;\n"]))),we=Object(T.d)(ye)(m||(m=Object(Q.a)(["\n  color: ",";\n"])),(function(e){return e.isUp?e.theme.upward:e.theme.downward})),ke=function(e){return Object(te.jsxs)(fe,{children:[Object(te.jsx)(me,{children:Object(te.jsxs)(ge,{children:[e.symbol,"/USDT"]})}),Object(te.jsxs)(me,{children:[Object(te.jsx)(ve,{children:"Price"}),Object(te.jsxs)(ye,{children:["$",e.quotes.USD.price.toFixed(2)]})]}),Object(te.jsxs)(me,{children:[Object(te.jsx)(ve,{children:"24h Change"}),Object(te.jsxs)(we,{isUp:e.quotes.USD.percent_change_24h>0,children:[e.quotes.USD.percent_change_24h>0?"\u25b2":"\u25bc",Math.abs(e.quotes.USD.price*e.quotes.USD.percent_change_24h/100).toFixed(2)," ",e.quotes.USD.percent_change_24h>0?"+":null,e.quotes.USD.percent_change_24h,"%"]})]}),Object(te.jsxs)(me,{children:[Object(te.jsx)(ve,{children:"ATH"}),Object(te.jsxs)(ye,{children:["$",e.quotes.USD.ath_price.toFixed(2)]})]})]})},_e=T.d.nav(g||(g=Object(Q.a)(["\n  display: flex;\n  justify-content: space-around;\n"]))),De=T.d.div(v||(v=Object(Q.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),Se=T.d.section(y||(y=Object(Q.a)(["\n  width: 40%;\n"]))),Ce=function(){var e,n,t,c,i,r,o=Object(J.f)().state,s=Object(J.i)().id,d=Object(J.g)("/:id/chart"),a=Object(J.g)("/:id/price"),l=Object(H.useQuery)([s,"ticker"],(function(){return function(e){return fetch("".concat(W,"/tickers/").concat(e)).then((function(e){return e.json()}))}(s)})),j=l.isLoading,b=l.data;return Object(te.jsxs)(ue,{children:[Object(te.jsx)(B.a,{children:Object(te.jsx)("title",{children:null!==(e=null!==(n=null===o||void 0===o?void 0:o.name)&&void 0!==n?n:null===b||void 0===b?void 0:b.name)&&void 0!==e?e:"Not Found"})}),Object(te.jsx)(pe,{children:null!==(t=null!==(c=null===o||void 0===o?void 0:o.name)&&void 0!==c?c:null===b||void 0===b?void 0:b.name)&&void 0!==t?t:"Not Found"}),j||!b?Object(te.jsx)(he,{}):Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(ke,Object(Y.a)({},b)),Object(te.jsxs)(De,{children:[Object(te.jsxs)(Se,{children:[Object(te.jsxs)(_e,{children:[Object(te.jsx)(I.b,{to:"chart",children:Object(te.jsx)(ie,{title:"Chart",isOn:null!==(i=null===d||void 0===d?void 0:d.pattern.end)&&void 0!==i&&i})}),Object(te.jsx)(I.b,{to:"price",children:Object(te.jsx)(ie,{title:"Price",isOn:null!==(r=null===a||void 0===a?void 0:a.pattern.end)&&void 0!==r&&r})})]}),Object(te.jsx)(J.a,{})]}),Object(te.jsx)(Se,{children:Object(te.jsx)(ae,Object(Y.a)({},b))})]})]})]})},Ue=t(18),Me=T.d.li(w||(w=Object(Q.a)(["\n  border-bottom: 1px solid;\n  border-bottom-color: ",";\n  padding: 0px 16px;\n  transition: background-color 0.3s ease-in, color 0.3s ease-in-out;\n  a {\n    padding: 20px 0px;\n    display: flex;\n    align-items: center;\n    div {\n      display: flex;\n      align-items: center;\n      font-size: 22px;\n    }\n    div:first-child {\n      width: 30%;\n    }\n    div:nth-child(n + 2) {\n      width: 17.5%;\n    }\n  }\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.hoverColor}),(function(e){return e.theme.hoverColor})),Fe=T.d.img(k||(k=Object(Q.a)(["\n  width: 32px;\n  height: 32px;\n"]))),qe=T.d.span(_||(_=Object(Q.a)(["\n  margin: 0px 15px;\n  font-size: 22px;\n  font-weight: bold;\n"]))),ze=T.d.span(D||(D=Object(Q.a)(["\n  font-size: 16px;\n  color: #7f8c8d;\n"]))),Re=T.d.span(S||(S=Object(Q.a)(["\n  color: ",";\n"])),(function(e){return e.isUp?e.theme.upward:e.theme.downward})),Le=function(e){return Object(te.jsx)(Me,{children:Object(te.jsxs)(I.b,{to:"".concat(e.id,"/chart"),state:{name:e.name,id:e.id},children:[Object(te.jsxs)("div",{children:[Object(te.jsx)(Fe,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(e.symbol.toLowerCase()),alt:e.symbol}),Object(te.jsx)(qe,{children:e.symbol}),Object(te.jsx)(ze,{children:e.name})]}),Object(te.jsx)("div",{children:Object(te.jsxs)("span",{children:["$",e.quotes.USD.price.toFixed(2)]})}),Object(te.jsx)("div",{children:Object(te.jsxs)(Re,{isUp:e.quotes.USD.percent_change_24h>0,children:[e.quotes.USD.percent_change_24h>0&&"+",e.quotes.USD.percent_change_24h,"%"]})}),Object(te.jsx)("div",{children:Object(te.jsx)("span",{children:ne(e.quotes.USD.volume_24h)})}),Object(te.jsx)("div",{children:Object(te.jsxs)("span",{children:["$",ne(e.quotes.USD.market_cap)]})})]})})},Ae=T.d.ul(C||(C=Object(Q.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Ke=T.d.div(U||(U=Object(Q.a)(["\n  display: flex;\n  align-items: center;\n  height: 40px;\n  padding: 12px 16px;\n  background-color: ",";\n  div {\n    text-align: left;\n  }\n  div:first-child {\n    width: 30%;\n  }\n  div:nth-child(n + 2) {\n    width: 17.5%;\n  }\n"])),(function(e){return e.theme.hoverColor})),Ne=T.d.footer(M||(M=Object(Q.a)(["\n  align-self: flex-end;\n  margin: 30px 0px;\n"]))),Pe=T.d.button(F||(F=Object(Q.a)(["\n  padding: 10px;\n  border: none;\n  background-color: transparent;\n  border-radius: 4px;\n  cursor: pointer;\n  margin: 0px 10px;\n  font-size: 16px;\n  background-color: ",";\n"])),(function(e){return e.theme.hoverColor})),Te=function(){var e=Object(A.useState)(1),n=Object(Ue.a)(e,2),t=n[0],c=n[1],i=Object(H.useQuery)("coins",X),r=i.isLoading,o=i.data;return Object(te.jsxs)(ue,{children:[Object(te.jsx)(B.a,{children:Object(te.jsx)("title",{children:"CRYPTO TRACKER"})}),Object(te.jsx)(pe,{children:"Markets"}),Object(te.jsxs)(Ke,{children:[Object(te.jsx)("div",{children:"Name"}),Object(te.jsx)("div",{children:"Price"}),Object(te.jsx)("div",{children:"24h Change"}),Object(te.jsx)("div",{children:"24h Volume"}),Object(te.jsx)("div",{children:"Market Cap"})]}),r?Object(te.jsx)(he,{}):Object(te.jsx)(Ae,{children:null===o||void 0===o?void 0:o.slice(20*(t-1),20*t).map((function(e,n){return Object(A.createElement)(Le,Object(Y.a)(Object(Y.a)({},e),{},{key:n}))}))}),Object(te.jsxs)(Ne,{children:[Object(te.jsxs)(Pe,{onClick:function(){return c((function(e){return 1===e?1:e-1}))},children:["<< ","prev"]}),Object(te.jsxs)("span",{children:["Page ",t," of 20"]}),Object(te.jsxs)(Pe,{onClick:function(){return c((function(e){return 20===e?20:e+1}))},children:["next"," >>"]})]})]})},Qe=t(48),Ee=t.n(Qe),$e=function(){var e=Object(J.i)().id,n=Object(H.useQuery)([e,"history"],(function(){return ee(e)})),t=n.isLoading,c=n.data;return t?Object(te.jsx)(he,{}):Object(te.jsx)(Ee.a,{type:"candlestick",options:{chart:{type:"candlestick",toolbar:{show:!1}},tooltip:{enabled:!1},xaxis:{type:"datetime",labels:{format:"MM/dd"}},yaxis:{tooltip:{enabled:!0},labels:{formatter:function(e){return e.toLocaleString("ko-KR")}}},plotOptions:{candlestick:{colors:{upward:"#ff0000",downward:"#0000ff"}}}},series:[{data:null===c||void 0===c?void 0:c.map((function(e){return{x:e.time_open,y:[e.open.toFixed(2),e.high.toFixed(2),e.low.toFixed(2),e.close.toFixed(2)]}}))}]})},Ie=T.d.div(q||(q=Object(Q.a)(["\n  display: flex;\n  margin-bottom: 15px;\n"]))),Je=T.d.li(z||(z=Object(Q.a)(["\n  display: flex;\n  margin-bottom: 10px;\n  transform: rotate(-180deg);\n"]))),Ye=function(){var e=Object(J.i)().id,n=Object(H.useQuery)([e,"history"],(function(){return ee(e)})),t=n.isLoading,c=n.data;return t?Object(te.jsx)(he,{}):Object(te.jsxs)("section",{style:{padding:"0px 20px",width:"100%"},children:[Object(te.jsxs)(Ie,{children:[Object(te.jsx)("div",{style:{width:"33%",textAlign:"center"},children:"\uc77c\uc790"}),Object(te.jsx)("div",{style:{width:"33%",textAlign:"center"},children:"\uc885\uac00"}),Object(te.jsx)("div",{style:{width:"33%",textAlign:"center"},children:"\uc804\uc77c\ub300\ube44"})]}),Object(te.jsx)("ul",{style:{transform:"rotate(180deg)"},children:null===c||void 0===c?void 0:c.map((function(e,n){var t=0;if(0!==n&&n<c.length){var i=e.close,r=c[n-1].close;t=Math.round((i-r)/i*1e4)/100}return Object(te.jsxs)(Je,{children:[Object(te.jsxs)("div",{style:{display:"flex",width:"33%",justifyContent:"center"},children:[Object(te.jsx)("span",{children:new Date(e.time_open).getMonth()+1}),Object(te.jsx)("span",{children:"."}),Object(te.jsx)("span",{children:new Date(e.time_open).getDate()<10?"0"+new Date(e.time_open).getDate():new Date(e.time_open).getDate()})]}),Object(te.jsx)("span",{style:{width:"33%",textAlign:"center"},children:e.close.toLocaleString("ko-KR",{minimumFractionDigits:2,maximumFractionDigits:2})}),Object(te.jsx)("span",{style:{width:"33%",textAlign:"center",color:0===t?"black":t>0?"red":"blue"},children:0===n?"-":t+"%"})]},n)}))})]})},Be=T.d.nav(R||(R=Object(Q.a)(["\n  font-weight: 600;\n  font-size: 24px;\n  color: ",";\n  background-color: black;\n  padding: 28px;\n"])),(function(e){return e.theme.titleColor})),He=Object(T.d)(I.b)(L||(L=Object(Q.a)(["\n  margin-left: 50px;\n  font-weight: normal;\n  color: white;\n  font-size: 20px;\n"]))),Ve=function(){return Object(te.jsxs)(Be,{children:[Object(te.jsx)(I.b,{to:"/",children:"CRYPTO TRACKER"}),Object(te.jsx)(He,{to:"/",children:"Markets"})]})},Ze=function(){return Object(te.jsxs)(I.a,{basename:"/react-coin",children:[Object(te.jsx)(Ve,{}),Object(te.jsxs)(J.d,{children:[Object(te.jsx)(J.b,{path:"/",element:Object(te.jsx)(Te,{})}),Object(te.jsxs)(J.b,{path:"/:id",element:Object(te.jsx)(Ce,{}),children:[Object(te.jsx)(J.b,{path:"chart",element:Object(te.jsx)($e,{})}),Object(te.jsx)(J.b,{path:"price",element:Object(te.jsx)(Ye,{})})]})]})]})},Ge=function(){return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)($,{}),Object(te.jsx)(Ze,{})]})},We=new H.QueryClient;P.a.render(Object(te.jsx)(K.a.StrictMode,{children:Object(te.jsx)(T.a,{theme:{hoverColor:"#ecf0f1",titleColor:"#218c74",upward:"#ff0000",downward:"#0000ff"},children:Object(te.jsx)(H.QueryClientProvider,{client:We,children:Object(te.jsx)(Ge,{})})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.1a45d2f9.chunk.js.map