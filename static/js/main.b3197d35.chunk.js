(this.webpackJsonpcoin=this.webpackJsonpcoin||[]).push([[0],{70:function(e,n,t){"use strict";t.r(n);var i,c,r,o,l,d,s,a,j,h,b,x,p,u,O,f,v,g,m,y,w,k,_,R,K=t(1),W=t.n(K),q=t(25),C=t.n(q),D=t(5),M=t(6),S=t(40),L=D.b(i||(i=Object(M.a)(["\n  ",';\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: "Roboto Slab", serif;\n  }\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n'])),S.a),z=t(16),A=t(4),Q=t(26),U=t(10),F=t(30),P=t.n(F),T=t(46),E="https://api.coinpaprika.com/v1",N=function(){return fetch("".concat(E,"/tickers")).then((function(e){return e.json()}))},Y=function(){var e=Object(T.a)(P.a.mark((function e(n){var t,i;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(Date.now()/1e3),i=t-1209600,e.abrupt("return",fetch("".concat(E,"/coins/").concat(n,"/ohlcv/historical?start=").concat(i,"&end=").concat(t)).then((function(e){return e.json()})));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),$=function(){return fetch("".concat(E,"/tickers/usdt-tether?quotes=KRW")).then((function(e){return e.json()}))},I=t(0),J=D.d.ul(c||(c=Object(M.a)(["\n  margin: 20px 0px;\n  display: flex;\n  flex-direction: column;\n"]))),B=D.d.li(r||(r=Object(M.a)(["\n  display: flex;\n  margin: 10px 0px;\n"]))),V=D.d.span(o||(o=Object(M.a)(["\n  width: 150px;\n  text-align: start;\n  font-weight: bold;\n"]))),Z=function(e){var n=e.rank,t=e.market_cap,i=e.total_supply,c=e.release_date;return Object(I.jsxs)(J,{children:[Object(I.jsxs)(B,{children:[Object(I.jsx)(V,{children:"\uc2dc\uac00\ucd1d\uc561 \uc21c\uc704"}),Object(I.jsx)("span",{children:n})]}),Object(I.jsxs)(B,{children:[Object(I.jsx)(V,{children:"\uc2dc\uac00\ucd1d\uc561"}),Object(I.jsxs)("span",{style:{fontWeight:"bold"},children:[Math.floor(t/1e12).toLocaleString("ko-KR"),"\uc870\uc6d0"]})]}),Object(I.jsxs)(B,{children:[Object(I.jsx)(V,{children:"\ucd5c\ucd08 \ubc1c\ud589"}),Object(I.jsxs)("span",{style:{fontWeight:"bold"},children:[new Date(c).getFullYear(),"\ub144",new Date(c).getMonth()+1,"\uc6d4"]})]}),Object(I.jsxs)(B,{children:[Object(I.jsx)(V,{children:"\ud604\uc7ac \uc720\ud1b5\ub7c9"}),Object(I.jsx)("span",{style:{fontWeight:"bold"},children:Math.floor(i).toLocaleString("ko-KR")})]})]})},G=Object(D.e)(l||(l=Object(M.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),H=D.d.div(d||(d=Object(M.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70vh;\n"]))),X=D.d.div(s||(s=Object(M.a)(["\n  animation: "," 1s linear infinite;\n  transform: translateZ(0);\n\n  border-top: 2px solid grey;\n  border-right: 2px solid grey;\n  border-bottom: 2px solid grey;\n  border-left: 4px solid black;\n  background: transparent;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n"])),G),ee=function(){return Object(I.jsx)(H,{children:Object(I.jsx)(X,{})})},ne=D.d.main(a||(a=Object(M.a)(["\n  width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 10px 20px 0px 20px;\n  min-height: 100vh;\n  border: 1px solid black;\n"]))),te=function(e){var n=e.children;return Object(I.jsx)(ne,{children:n})},ie=D.d.h1(j||(j=Object(M.a)(["\n  font-weight: 600;\n  font-size: 48px;\n  color: ","; ;\n"])),(function(e){return e.theme.titleColor})),ce=function(e){var n=e.children;return Object(I.jsx)(ie,{children:n})},re=D.d.section(h||(h=Object(M.a)(["\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n"]))),oe=D.d.div(b||(b=Object(M.a)(["\n  flex: 1;\n"]))),le=D.d.nav(x||(x=Object(M.a)(["\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 20px;\n"]))),de=Object(D.d)(z.b)(p||(p=Object(M.a)(["\n  background-color: ",";\n  padding: 10px 50px;\n  border-radius: 10px;\n  color: white;\n"])),(function(e){return e.theme.titleColor})),se=function(){var e,n,t,i,c,r,o=Object(A.f)().state,l=Object(A.i)().id,d=Object(A.g)("/:id/chart"),s=Object(A.g)("/:id/price"),a=Object(U.useQuery)([l,"ticker"],(function(){return function(e){return fetch("".concat(E,"/tickers/").concat(e,"?quotes=KRW")).then((function(e){return e.json()}))}(l)})),j=a.isLoading,h=a.data;return Object(I.jsxs)(te,{children:[Object(I.jsx)(Q.a,{children:Object(I.jsx)("title",{children:null!==(e=null!==(n=null===o||void 0===o?void 0:o.name)&&void 0!==n?n:null===h||void 0===h?void 0:h.name)&&void 0!==e?e:"Not Found"})}),Object(I.jsx)("header",{children:Object(I.jsx)(ce,{children:null!==(t=null!==(i=null===o||void 0===o?void 0:o.name)&&void 0!==i?i:null===h||void 0===h?void 0:h.name)&&void 0!==t?t:"Not Found"})}),j||(null===h||void 0===h?void 0:h.error)?Object(I.jsx)(ee,{}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(re,{children:[Object(I.jsx)("img",{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(null===h||void 0===h?void 0:h.symbol.toLowerCase()),alt:null===h||void 0===h?void 0:h.symbol,style:{width:80}}),Object(I.jsxs)(oe,{children:[Object(I.jsxs)("div",{style:{fontSize:20,color:"gray"},children:[null===h||void 0===h?void 0:h.symbol,"/KRW"]}),Object(I.jsx)("div",{children:Object(I.jsxs)("div",{style:{fontSize:32,margin:"10px 0px"},children:[(null===h||void 0===h?void 0:h.quotes.KRW.price)<1?null===h||void 0===h?void 0:h.quotes.KRW.price.toFixed(2):Math.floor(null===h||void 0===h?void 0:h.quotes.KRW.price).toLocaleString("ko-KR"),Object(I.jsxs)("span",{style:{fontSize:24,color:(null===h||void 0===h||null===(c=h.quotes)||void 0===c||null===(r=c.KRW)||void 0===r?void 0:r.percent_change_24h)>=0?"red":"blue"},children:[" ",null===h||void 0===h?void 0:h.quotes.KRW.percent_change_24h,"%"]})]})})]})]}),Object(I.jsx)(Z,{rank:null===h||void 0===h?void 0:h.rank,market_cap:null===h||void 0===h?void 0:h.quotes.KRW.market_cap,total_supply:null===h||void 0===h?void 0:h.circulating_supply,release_date:null===h||void 0===h?void 0:h.first_data_at}),Object(I.jsxs)(le,{children:[Object(I.jsx)(de,{to:"chart",style:{fontWeight:d?"bold":"normal"},children:"\ucc28\ud2b8"}),Object(I.jsx)(de,{to:"price",style:{fontWeight:s?"bold":"normal"},children:"\uc2dc\uc138"})]}),Object(I.jsx)(A.a,{})]})]})},ae=D.d.h3(u||(u=Object(M.a)(["\n  font-size: 22px;\n  color: gray;\n  margin: 10px 0px;\n"]))),je=D.d.ul(O||(O=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),he=D.d.li(f||(f=Object(M.a)(["\n  border-bottom: 1px solid #ecf0f1;\n  padding: 0px 16px;\n  transition: background-color 0.3s ease-in, color 0.3s ease-in-out;\n  a {\n    padding: 20px 0px;\n    display: flex;\n    align-items: center;\n    div {\n      display: flex;\n      align-items: center;\n    }\n    div:first-child {\n      width: 40%;\n    }\n    div:nth-child(n + 2) {\n      width: 15%;\n    }\n  }\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.hoverColor})),be=D.d.span(v||(v=Object(M.a)(["\n  margin: 0px 15px;\n  font-size: 22px;\n  font-weight: bold;\n"]))),xe=D.d.span(g||(g=Object(M.a)(["\n  font-size: 16px;\n  color: #7f8c8d;\n"]))),pe=D.d.img(m||(m=Object(M.a)(["\n  width: 32px;\n  height: 32px;\n"]))),ue=D.d.div(y||(y=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  height: 40px;\n  padding: 12px 16px;\n  background-color: #ecf0f1;\n  div {\n    text-align: left;\n  }\n  div:first-child {\n    width: 40%;\n  }\n  div:nth-child(n + 2) {\n    width: 15%;\n  }\n"]))),Oe=D.d.span(w||(w=Object(M.a)(["\n  font-size: 24px;\n"]))),fe=D.d.span(k||(k=Object(M.a)(["\n  font-size: 24px;\n  color: ",";\n"])),(function(e){return e.isUp?e.theme.upward:e.theme.downward})),ve=function(){var e=Object(U.useQuery)("coins",N),n=e.isLoading,t=e.data;Object(U.useQuery)("exchange",$).data;return Object(I.jsxs)(te,{children:[Object(I.jsx)(Q.a,{children:Object(I.jsx)("title",{children:"CRYPTO TRACKER"})}),Object(I.jsxs)("header",{children:[Object(I.jsx)(ce,{children:"CRYPTO TRACKER "}),Object(I.jsx)(ae,{children:Object(I.jsx)("a",{href:"https://api.coinpaprika.com/",target:"_blank",rel:"noreferrer",children:"using Coinpaprika API"})})]}),Object(I.jsxs)(ue,{children:[Object(I.jsx)("div",{children:"Name"}),Object(I.jsx)("div",{children:"Price"}),Object(I.jsx)("div",{children:"24h Change"}),Object(I.jsx)("div",{children:"24h Volume"}),Object(I.jsx)("div",{children:"Market Cap"})]}),n?Object(I.jsx)(ee,{}):Object(I.jsx)(je,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(e){return Object(I.jsx)(he,{children:Object(I.jsxs)(z.b,{to:"".concat(e.id,"/chart"),state:{name:e.name},children:[Object(I.jsxs)("div",{children:[Object(I.jsx)(pe,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(e.symbol.toLowerCase()),alt:e.symbol}),Object(I.jsx)(be,{children:e.symbol}),Object(I.jsx)(xe,{children:e.name})]}),Object(I.jsx)("div",{children:Object(I.jsxs)(Oe,{children:["$",e.quotes.USD.price.toFixed(2)]})}),Object(I.jsx)("div",{children:Object(I.jsxs)(fe,{isUp:e.quotes.USD.percent_change_24h>0,children:[e.quotes.USD.percent_change_24h>0&&"+",e.quotes.USD.percent_change_24h,"%"]})}),Object(I.jsx)("div",{children:Object(I.jsxs)("span",{children:["$",e.quotes.USD.volume_24h]})}),Object(I.jsx)("div",{children:Object(I.jsxs)("span",{children:["$",e.quotes.USD.market_cap]})})]})},e.id)}))})]})},ge=t(47),me=t.n(ge),ye=function(){var e=Object(A.i)().id,n=Object(U.useQuery)([e,"history"],(function(){return Y(e)})),t=n.isLoading,i=n.data,c=Object(U.useQuery)("rate",$),r=c.isLoading,o=c.data;return t||r||!i?Object(I.jsx)(ee,{}):Object(I.jsx)(me.a,{type:"candlestick",options:{chart:{type:"candlestick",toolbar:{show:!1}},tooltip:{enabled:!1},xaxis:{type:"datetime",labels:{format:"MM/dd"}},yaxis:{tooltip:{enabled:!0},labels:{formatter:function(e){return e.toLocaleString("ko-KR")+"\uc6d0"}}},plotOptions:{candlestick:{colors:{upward:"#ff0000",downward:"#0000ff"}}}},series:[{data:null===i||void 0===i?void 0:i.map((function(e){return{x:e.time_open,y:[Math.floor(e.open*(null===o||void 0===o?void 0:o.quotes.KRW.price)),Math.floor(e.high*(null===o||void 0===o?void 0:o.quotes.KRW.price)),Math.floor(e.low*(null===o||void 0===o?void 0:o.quotes.KRW.price)),Math.floor(e.close*(null===o||void 0===o?void 0:o.quotes.KRW.price))]}}))}]})},we=D.d.div(_||(_=Object(M.a)(["\n  display: flex;\n  margin-bottom: 15px;\n"]))),ke=D.d.li(R||(R=Object(M.a)(["\n  display: flex;\n  margin-bottom: 10px;\n  transform: rotate(-180deg);\n"]))),_e=function(){var e=Object(A.i)().id,n=Object(U.useQuery)([e,"history"],(function(){return Y(e)})),t=n.isLoading,i=n.data,c=Object(U.useQuery)("rate",$),r=c.isLoading,o=c.data;return t||r||!i?Object(I.jsx)(ee,{}):Object(I.jsxs)("section",{style:{padding:"0px 20px"},children:[Object(I.jsxs)(we,{children:[Object(I.jsx)("div",{style:{width:"33%",textAlign:"start"},children:"\uc77c\uc790"}),Object(I.jsx)("div",{style:{width:"33%",textAlign:"start"},children:"\uc885\uac00(KRW)"}),Object(I.jsx)("div",{style:{width:"33%",textAlign:"end"},children:"\uc804\uc77c\ub300\ube44"})]}),Object(I.jsx)("ul",{style:{transform:"rotate(180deg)"},children:i.map((function(e,n){var t=0;if(0!==n&&n<i.length){var c=e.close,r=i[n-1].close;t=Math.round((c-r)/c*1e4)/100}return Object(I.jsxs)(ke,{children:[Object(I.jsxs)("div",{style:{display:"flex",width:"33%",textAlign:"center"},children:[Object(I.jsx)("span",{children:new Date(e.time_open).getMonth()+1}),Object(I.jsx)("span",{children:"."}),Object(I.jsx)("span",{children:new Date(e.time_open).getDate()<10?"0"+new Date(e.time_open).getDate():new Date(e.time_open).getDate()})]}),Object(I.jsx)("span",{style:{width:"33%",textAlign:"start"},children:Math.floor(e.close*(null===o||void 0===o?void 0:o.quotes.KRW.price)).toLocaleString("ko-KR")}),Object(I.jsx)("span",{style:{width:"33%",textAlign:"end",color:0===t?"black":t>0?"red":"blue"},children:0===n?"-":t+"%"})]},n)}))})]})},Re=function(){return Object(I.jsx)(z.a,{basename:"/react-coin",children:Object(I.jsxs)(A.d,{children:[Object(I.jsx)(A.b,{path:"/",element:Object(I.jsx)(ve,{})}),Object(I.jsxs)(A.b,{path:"/:id",element:Object(I.jsx)(se,{}),children:[Object(I.jsx)(A.b,{path:"chart",element:Object(I.jsx)(ye,{})}),Object(I.jsx)(A.b,{path:"price",element:Object(I.jsx)(_e,{})})]})]})})},Ke=function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(L,{}),Object(I.jsx)(Re,{})]})},We=new U.QueryClient;C.a.render(Object(I.jsx)(W.a.StrictMode,{children:Object(I.jsx)(D.a,{theme:{hoverColor:"#ecf0f1",titleColor:"#218c74",upward:"#ff0000",downward:"#0000ff"},children:Object(I.jsx)(U.QueryClientProvider,{client:We,children:Object(I.jsx)(Ke,{})})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.b3197d35.chunk.js.map