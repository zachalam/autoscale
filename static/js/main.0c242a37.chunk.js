(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,n){},240:function(e,t,n){e.exports=n.p+"static/media/cpu.593d32f1.png"},241:function(e,t,n){e.exports=n.p+"static/media/net.453fd9e8.png"},242:function(e,t,n){e.exports=n.p+"static/media/ram.63c78e1d.png"},254:function(e,t,n){e.exports=n(456)},267:function(e,t){},272:function(e,t){},274:function(e,t){},456:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(52),l=n.n(c),o=(n(154),n(33)),s=n(34),u=n(36),i=n(35),p=n(30),m=n(37),d=n(468),E=n(54),h=n(472),f=n(107),b=n(10),v=n.n(b),y=n(17),k=n(465),O=n(462),g=n(457),w=n(464),x=n(471),j=n(469),C=n(463),S=n(244),_=n(53),A=n.n(_),D=n(223),L=n.n(D),M=n(101);A.a.plugins(new L.a);var T,N,W,B,I=_.Network.fromJson({blockchain:"eos",host:"nodes.get-scatter.com",port:443,protocol:"https",chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"}),R=new M.JsonRpc(I.fullhost()),J={init:function(){var e=Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.scatter.connect("Autoscale");case 2:if(e.sent){e.next=6;break}return console.error("Could not connect to Scatter."),e.abrupt("return");case 6:return T=A.a.scatter,e.next=9,T.getIdentity({accounts:[I]});case 9:return N=e.sent,W=T.eos(I,M.Api,{rpc:R}),B=N.accounts[0],console.log("--"),console.log(N),e.abrupt("return",{scatter:T,identity:N,eos:W,account:B});case 15:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),logout:function(){var e=Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.forgetIdentity();case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),transfer:function(){var e=Object(y.a)(v.a.mark(function e(t,n){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.transact({actions:[{account:"eosio.token",name:"transfer",authorization:[{actor:B.name,permission:B.authority}],data:{from:B.name,to:"autoscale.x",quantity:"".concat(t," EOS"),memo:B.name}}]},{blocksBehind:3,expireSeconds:30});case 3:e.sent,n(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n();case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,n){return e.apply(this,arguments)}}()},P=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={connection:!1,depositLoading:!1,depositAmt:1},n.openWallet=n.openWallet.bind(Object(p.a)(n)),n.logoutScatter=n.logoutScatter.bind(Object(p.a)(n)),n.transferTokens=n.transferTokens.bind(Object(p.a)(n)),n.setDepositAmt=n.setDepositAmt.bind(Object(p.a)(n)),n.depositCompleted=n.depositCompleted.bind(Object(p.a)(n)),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){var e=Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.isOpen){e.next=3;break}return e.next=3,this.openWallet();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"openWallet",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.init();case 2:t=e.sent,console.log("connected"),console.log(t),this.state.connection||this.setState(Object(f.a)({},this.state,{connection:t}));case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"logoutScatter",value:function(){J.logout(),window.location.reload()}},{key:"transferTokens",value:function(){this.setState({depositLoading:!0}),J.transfer(this.state.depositAmt,this.depositCompleted)}},{key:"setDepositAmt",value:function(e){var t=e.target.value;this.setState(Object(f.a)({},this.state,{depositAmt:t}))}},{key:"depositCompleted",value:function(){this.setState(Object(f.a)({},this.state,{depositLoading:!1}))}},{key:"renderTable",value:function(e){var t=e.identity.accounts[0];return r.a.createElement(k.a,{basic:"very"},r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Row,null,r.a.createElement(k.a.Cell,null,"Account"),r.a.createElement(k.a.Cell,null,r.a.createElement("h2",null,t.name," \xa0",r.a.createElement(E.a,{name:"sign-out",style:{cursor:"pointer"},onClick:this.logoutScatter})))),r.a.createElement(k.a.Row,null,r.a.createElement(k.a.Cell,null,"Autoscale Balance"),r.a.createElement(k.a.Cell,null,r.a.createElement("h3",null,"0.00 EOS"))),r.a.createElement(k.a.Row,null,r.a.createElement(k.a.Cell,null,"Deposit EOS"),r.a.createElement(k.a.Cell,null,r.a.createElement(O.a,{type:"number",name:"quantity",onChange:this.setDepositAmt,value:this.state.depositAmt,step:"0.1",min:"0",max:"500"}),"\xa0",r.a.createElement(g.a,{onClick:this.transferTokens,loading:this.state.depositLoading},"Deposit"),r.a.createElement("br",null),"You can also send EOS tokens to ",r.a.createElement("b",null,"autoscale.x")))))}},{key:"render",value:function(){return r.a.createElement(w.a,{size:"tiny",open:this.props.isOpen,onClose:this.props.closeModal},r.a.createElement(w.a.Content,null,this.state.connection?this.renderTable(this.state.connection):r.a.createElement("div",null,r.a.createElement(x.a,{basic:!0},r.a.createElement(j.a,{active:!0,inverted:!0},r.a.createElement(C.a,{inverted:!0},"Connecting...")),r.a.createElement(S.a,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"})),r.a.createElement("a",{href:"#",onClick:this.openWallet},"Retry wallet"))))}}]),t}(r.a.Component),U=n(466),q=n(467),H=n(240),z=n.n(H),F=new(0,n(101).JsonRpc)("https://nodes.get-scatter.com",{fetch:fetch}),Y=function(){var e=Object(y.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get_table_rows({json:!0,code:"eosio",scope:"eosio",table:t,limit:1});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(y.a)(v.a.mark(function e(t){var n,a,r,c,l;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y("rexpool");case 2:return n=e.sent,a=(a=n.rows)[0],r=a.total_unlent.split(" ")[0],c=a.total_rent.split(" ")[0],l=r/(c+1),e.abrupt("return",t/l);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),G={cpu:function(){var e=Object(y.a)(v.a.mark(function e(){var t,n,a,r,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get_account("cypherglasss");case 2:return t=e.sent,n=t.total_resources.cpu_weight.split(" ")[0],a=t.cpu_limit.max,r=n/(a/1e3),e.next=9,$(1e3*r);case 9:return c=e.sent,e.abrupt("return",{pp_cpu:r,pp_cpu_rent:c});case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),net:function(){var e=Object(y.a)(v.a.mark(function e(){var t,n,a,r,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get_account("cypherglasss");case 2:return t=e.sent,n=t.total_resources.net_weight.split(" ")[0],a=t.net_limit.max,r=n/(a/1024),e.next=9,$(1e3*r);case 9:return c=e.sent,e.abrupt("return",{pp_net:r,pp_net_rent:c});case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),ram:function(){var e=Object(y.a)(v.a.mark(function e(){var t,n,a,r,c,l;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y("rammarket");case 2:return t=e.sent,n=(n=t.rows)[0],a=n.quote.balance.split(" ")[0],r=n.base.balance.split(" ")[0],l=1024*(c=a/r),e.abrupt("return",{pp_byte:c,pp_kb:l});case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),round:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return e?e.toFixed(t):e}},K=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={prices:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.cpu();case 2:t=e.sent,this.setState({prices:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(U.a,{fluid:!0},r.a.createElement(S.a,{src:z.a,wrapped:!0,ui:!1,style:{padding:"2em"}}),r.a.createElement(U.a.Content,null,r.a.createElement(U.a.Header,null,"CPU"),r.a.createElement(U.a.Description,null,"Amount of time the network can spend processing your transactions.")),r.a.createElement(U.a.Content,{extra:!0},this.state.prices?r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"30-day Cost:"),r.a.createElement("td",null,r.a.createElement("h3",{className:"color"},G.round(this.state.prices.pp_cpu_rent,6)," EOS"))),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,"for 1.0s CPU Daily")),r.a.createElement("tr",null,r.a.createElement("td",null,"Source:"),r.a.createElement("td",null,"eosio.rexpool")),r.a.createElement("tr",null,r.a.createElement("td",null,"Stake Basis:"),r.a.createElement("td",null,"1ms / ",G.round(this.state.prices.pp_cpu,4)," EOS")))):r.a.createElement(q.a,null,r.a.createElement(q.a.Paragraph,null,r.a.createElement(q.a.Line,null),r.a.createElement(q.a.Line,null),r.a.createElement(q.a.Line,null),r.a.createElement(q.a.Line,null)))))}}]),t}(r.a.Component),Q=n(241),V=n.n(Q),X=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={prices:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.net();case 2:t=e.sent,this.setState({prices:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(U.a,{fluid:!0},r.a.createElement(S.a,{src:V.a,wrapped:!0,ui:!1,style:{padding:"2em"}}),r.a.createElement(U.a.Content,null,r.a.createElement(U.a.Header,null,"NET"),r.a.createElement(U.a.Description,null,"Amount of data the network can transfer during your transactions.")),r.a.createElement(U.a.Content,{extra:!0},this.state.prices?r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"30-day Cost:"),r.a.createElement("td",null,r.a.createElement("h3",{className:"color"},G.round(this.state.prices.pp_net_rent,6)," EOS"))),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,"for 1mb NET Daily")),r.a.createElement("tr",null,r.a.createElement("td",null,"Source:"),r.a.createElement("td",null,"eosio.rexpool")),r.a.createElement("tr",null,r.a.createElement("td",null,"Stake Basis:"),r.a.createElement("td",null,"1kb / ",G.round(this.state.prices.pp_net,4)," EOS")))):r.a.createElement(q.a,null,r.a.createElement(q.a.Paragraph,null,r.a.createElement(q.a.Line,null),r.a.createElement(q.a.Line,null),r.a.createElement(q.a.Line,null),r.a.createElement(q.a.Line,null)))))}}]),t}(r.a.Component),Z=n(242),ee=n.n(Z),te=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={prices:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.ram();case 2:t=e.sent,this.setState({prices:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(U.a,{fluid:!0},r.a.createElement(S.a,{src:ee.a,wrapped:!0,ui:!1,style:{padding:"2em"}}),r.a.createElement(U.a.Content,null,r.a.createElement(U.a.Header,null,"RAM"),r.a.createElement(U.a.Description,null,"Storage for application data and smart contracts on the blockchain.")),r.a.createElement(U.a.Content,{extra:!0},this.state.prices?r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Exchange:"),r.a.createElement("td",null,r.a.createElement("h3",{className:"color"},"1kb = ",G.round(this.state.prices.pp_kb,4)," EOS"))),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,G.round(this.state.prices.pp_byte,8)," / byte")),r.a.createElement("tr",null,r.a.createElement("td",null,"Source:"),r.a.createElement("td",null,"eosio.rammarket")),r.a.createElement("tr",null,r.a.createElement("td",null,"Unit Type:"),r.a.createElement("td",null,"bytes")))):r.a.createElement(q.a,null,r.a.createElement(q.a.Paragraph,null,r.a.createElement(q.a.Line,null),r.a.createElement(q.a.Line,null),r.a.createElement(q.a.Line,null),r.a.createElement(q.a.Line,null)))))}}]),t}(r.a.Component),ne=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={isOpen:!1},n.closeModal=n.closeModal.bind(Object(p.a)(n)),n.openModal=n.openModal.bind(Object(p.a)(n)),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"closeModal",value:function(e){e&&e.preventDefault(),this.setState({isOpen:!1})}},{key:"openModal",value:function(e){e&&e.preventDefault(),this.setState({isOpen:!0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P,{isOpen:this.state.isOpen,closeModal:this.closeModal}),r.a.createElement(d.a,{stackable:!0},r.a.createElement(d.a.Item,{name:"home",onClick:this.handleItemClick},r.a.createElement("a",{href:"https://autoscale.one",style:{color:"black"}},r.a.createElement("b",null,"Autoscale")," \xa0 | \xa0 Automatic EOS Scaling")),r.a.createElement(d.a.Menu,{position:"right"},r.a.createElement(d.a.Item,{style:{fontWeight:"bold"},name:"manager",onClick:this.openModal},r.a.createElement("span",{className:"color"},r.a.createElement(E.a,{name:"cog"})," Scaling Manager")))),r.a.createElement(h.a,{textAlign:"center",style:{height:"85vh"},verticalAlign:"middle"},r.a.createElement(h.a,{container:!0,columns:3,stackable:!0},r.a.createElement(h.a.Column,{textAlign:"center"},r.a.createElement(K,null)),r.a.createElement(h.a.Column,null,r.a.createElement(X,null)),r.a.createElement(h.a.Column,null,r.a.createElement(te,null)))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[254,1,2]]]);
//# sourceMappingURL=main.0c242a37.chunk.js.map