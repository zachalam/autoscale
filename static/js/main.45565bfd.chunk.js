(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,a){},244:function(e,t,a){e.exports=a.p+"static/media/cpu.593d32f1.png"},245:function(e,t,a){e.exports=a.p+"static/media/net.453fd9e8.png"},246:function(e,t,a){e.exports=a.p+"static/media/ram.63c78e1d.png"},259:function(e,t,a){e.exports=a(462)},272:function(e,t){},277:function(e,t){},279:function(e,t){},462:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(54),l=a.n(c),o=(a(156),a(22)),s=a(23),i=a(25),u=a(24),m=a(27),p=a(26),d=a(247),E=a(56),h=a(249),f=a(38),b=a(10),v=a.n(b),y=a(17),w=a(471),O=a(477),g=a(468),k=a(463),j=a(470),C=a(153),x=a(474),_=a(469),S=a(248),A=a(55),M=a.n(A),D=a(225),L=a.n(D),N=a(107);M.a.plugins(new L.a);var P,B,T,R,I=A.Network.fromJson({blockchain:"eos",host:"nodes.get-scatter.com",port:443,protocol:"https",chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"}),U=new N.JsonRpc(I.fullhost()),W={init:function(){var e=Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.scatter.connect("Autoscale");case 2:if(e.sent){e.next=6;break}return console.error("Could not connect to Scatter."),e.abrupt("return");case 6:return P=M.a.scatter,e.next=9,P.getIdentity({accounts:[I]});case 9:return B=e.sent,T=P.eos(I,N.Api,{rpc:U,beta3:!0}),R=B.accounts[0],console.log("--"),console.log(B),e.abrupt("return",{scatter:P,identity:B,eos:T,account:R});case 15:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),logout:function(){var e=Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.forgetIdentity();case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),transfer:function(){var e=Object(y.a)(v.a.mark(function e(t,a,n){var r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.transact({actions:[{account:"eosio.token",name:"transfer",authorization:[{actor:R.name,permission:R.authority}],data:{from:R.name,to:"autoscale.x",quantity:"".concat(parseFloat(t).toFixed(4)," EOS"),memo:R.name}}]},{blocksBehind:3,expireSeconds:30});case 3:r=e.sent,console.log(r),a(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0&&console.log(e.t0),n();case 12:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t,a,n){return e.apply(this,arguments)}}()},F=a(473),J=new(0,a(107).JsonRpc)("https://nodes.get-scatter.com",{fetch:fetch}),q=function(){var e=Object(y.a)(v.a.mark(function e(t){var a,n,r,c=arguments;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:"eosio",n=c.length>2&&void 0!==c[2]?c[2]:"",e.next=4,J.get_table_rows({json:!0,code:a,scope:a,table:t,lower_bound:n,limit:1});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(y.a)(v.a.mark(function e(t){var a,n,r,c,l;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q("rexpool");case 2:return a=e.sent,n=(n=a.rows)[0],r=n.total_unlent.split(" ")[0],c=n.total_rent.split(" ")[0],l=r/(c+1),e.abrupt("return",t/l);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Y={cpu:function(){var e=Object(y.a)(v.a.mark(function e(){var t,a,n,r,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.get_account("cypherglasss");case 2:return t=e.sent,a=t.total_resources.cpu_weight.split(" ")[0],n=t.cpu_limit.max,r=a/(n/1e3),e.next=9,H(1e3*r);case 9:return c=e.sent,e.abrupt("return",{pp_cpu:r,pp_cpu_rent:c});case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),net:function(){var e=Object(y.a)(v.a.mark(function e(){var t,a,n,r,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.get_account("cypherglasss");case 2:return t=e.sent,a=t.total_resources.net_weight.split(" ")[0],n=t.net_limit.max,r=a/(n/1024),e.next=9,H(1e3*r);case 9:return c=e.sent,e.abrupt("return",{pp_net:r,pp_net_rent:c});case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),ram:function(){var e=Object(y.a)(v.a.mark(function e(){var t,a,n,r,c,l;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q("rammarket");case 2:return t=e.sent,a=(a=t.rows)[0],n=a.quote.balance.split(" ")[0],r=a.base.balance.split(" ")[0],l=1024*(c=n/r),e.abrupt("return",{pp_byte:c,pp_kb:l});case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),round:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return e?e.toFixed(t):e},autoscaleBalance:function(){var e=Object(y.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q("deposits","autoscale.x",t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={autoscale_balance:0,balance_loading:!0},a.getBalance=a.getBalance.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getBalance();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getBalance",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.account){e.next=8;break}return this.setState(Object(f.a)({},this.state,{balance_loading:!0})),e.next=4,Y.autoscaleBalance(this.props.account);case 4:t=e.sent,a=0,t.rows.length&&(a=t.rows[0].balance/1e4),this.setState(Object(f.a)({},this.state,{autoscale_balance:a,balance_loading:!1}));case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.balance_loading?r.a.createElement(F.a,null,r.a.createElement(F.a.Paragraph,null,r.a.createElement(F.a.Line,null),r.a.createElement(F.a.Line,null))):r.a.createElement("div",null,r.a.createElement("h3",null,this.state.autoscale_balance.toFixed(4)," EOS"),0===this.state.autoscale_balance?r.a.createElement("span",null,"Deposit EOS to enable Autoscale. ",r.a.createElement(E.a,{name:"shield",color:"red"})):this.state.autoscale_balance<.1?r.a.createElement("span",null,"Low balance, refill to avoid interruption. ",r.a.createElement(E.a,{name:"warning sign",color:"orange"})):r.a.createElement("span",null,"Your account is protected. ",r.a.createElement(E.a,{name:"check",color:"green"})))}}]),t}(r.a.Component),$=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={},a.switchPriority=a.switchPriority.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"switchPriority",value:function(){alert("Coming soon..")}},{key:"render",value:function(){return r.a.createElement(w.a,{basic:"very"},r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Row,{positive:!0},r.a.createElement(w.a.Cell,{style:{width:"70%"}},r.a.createElement("h5",null,r.a.createElement(E.a,{name:"arrow alternate circle up"}),"CPU/NET ONLY"),"Autoscale monitors account for sufficient CPU and NET resources but not RAM."),r.a.createElement(w.a.Cell,null,r.a.createElement(k.a,{basic:!0,disabled:!0,onClick:this.switchPriority},"Active"))),r.a.createElement(w.a.Row,null,r.a.createElement(w.a.Cell,null,r.a.createElement("h5",null,r.a.createElement(E.a,{name:"plus circle"}),"CPU/NET +RAM"),"Autoscale monitors all account resources. Note: RAM use depletes balance faster."),r.a.createElement(w.a.Cell,null,r.a.createElement(k.a,{basic:!0,onClick:this.switchPriority},"Switch"))),r.a.createElement(w.a.Row,null,r.a.createElement(w.a.Cell,null,r.a.createElement("h5",null,r.a.createElement(E.a,{name:"pause circle"}),"PAUSE AUTOSCALE"),"Autoscale will be turned off and not monitor your account for resources."),r.a.createElement(w.a.Cell,null,r.a.createElement(k.a,{basic:!0,onClick:this.switchPriority},"Switch")))))}}]),t}(r.a.Component),G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.payment;(!e||e>500)&&(e=1);var t=window,a=t.cpu_prices,n=t.net_prices,c=t.ram_prices,l=parseInt(e/a.pp_cpu_rent*30),o=parseInt(e/n.pp_net_rent*30),s=parseInt(e/(1e3*c.pp_byte)*30);return r.a.createElement(w.a,{basic:"very",compact:"very"},r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Row,null,r.a.createElement(w.a.Cell,null,parseFloat(e).toFixed(4)," ",r.a.createElement("br",null)," EOS Token = "),r.a.createElement(w.a.Cell,null,r.a.createElement("h4",null,r.a.createElement(E.a,{name:"cog",color:"grey"})," CPU")," ",l," Days"),r.a.createElement(w.a.Cell,null,r.a.createElement("h4",null,r.a.createElement(E.a,{name:"plug",color:"grey"})," NET")," ",o," Days"),r.a.createElement(w.a.Cell,null,r.a.createElement("h4",null,r.a.createElement(E.a,{name:"globe",color:"grey"})," RAM"),s," Days"))))}}]),t}(r.a.Component),K=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={connection:!1,depositLoading:!1,depositAmt:.5,autoscale_balance:0,showBalance:!0},a.openWallet=a.openWallet.bind(Object(m.a)(a)),a.logoutScatter=a.logoutScatter.bind(Object(m.a)(a)),a.transferTokens=a.transferTokens.bind(Object(m.a)(a)),a.setDepositAmt=a.setDepositAmt.bind(Object(m.a)(a)),a.depositCompleted=a.depositCompleted.bind(Object(m.a)(a)),a.depositCanceled=a.depositCanceled.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.openWallet();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"openWallet",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.init();case 2:t=e.sent,console.log("connected"),console.log(t),this.state.connection||this.setState(Object(f.a)({},this.state,{connection:t}));case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"logoutScatter",value:function(){W.logout(),window.location.reload()}},{key:"transferTokens",value:function(){this.setState({depositLoading:!0}),W.transfer(this.state.depositAmt,this.depositCompleted,this.depositCanceled)}},{key:"setDepositAmt",value:function(e){var t=e.target.value;this.setState(Object(f.a)({},this.state,{depositAmt:t}))}},{key:"depositCompleted",value:function(){var e=this;this.setState(Object(f.a)({},this.state,{depositLoading:!1})),setTimeout(function(){e.setState(Object(f.a)({},e.state,{showBalance:!1}),function(){e.setState(Object(f.a)({},e.state,{showBalance:!0}))})},800)}},{key:"depositCanceled",value:function(){this.setState(Object(f.a)({},this.state,{depositLoading:!1}))}},{key:"renderTable",value:function(e){var t=e.account;return r.a.createElement(w.a,{basic:"very"},r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Row,null,r.a.createElement(w.a.Cell,{width:4},"User Account"),r.a.createElement(w.a.Cell,null,r.a.createElement("h2",null,r.a.createElement("span",{className:"color"},t.name)," \xa0",r.a.createElement("a",{href:"https://bloks.io/account/".concat(t.name),target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.a,{name:"globe"})),r.a.createElement(E.a,{name:"sign-out",style:{cursor:"pointer"},onClick:this.logoutScatter})))),r.a.createElement(w.a.Row,null,r.a.createElement(w.a.Cell,null,"Autoscale Balance"),r.a.createElement(w.a.Cell,null,this.state.showBalance?r.a.createElement(z,{account:t.name}):null))))}},{key:"renderTabs",value:function(){var e=r.a.createElement(O.a.Pane,null,r.a.createElement(g.a,{style:{width:"100px"},type:"number",name:"quantity",onChange:this.setDepositAmt,value:this.state.depositAmt,min:"0",max:"500"}),"\xa0",r.a.createElement(k.a,{onClick:this.transferTokens,loading:this.state.depositLoading},"Deposit"),r.a.createElement("div",{className:"spacer"}),"You can also send EOS tokens to ",r.a.createElement("b",null,"autoscale.x"),r.a.createElement(G,{payment:this.state.depositAmt}),r.a.createElement("div",{className:"spacer"}),"Calculation based on current market prices. Assumption of 1000ms CPU daily or 1000kb NET daily or 1000bytes RAM monthly."),t=r.a.createElement(O.a.Pane,null,r.a.createElement($,null)),a=[{menuItem:"Deposit EOS",render:function(){return e}},{menuItem:"Resource Settings",render:function(){return t}}];return r.a.createElement(O.a,{panes:a})}},{key:"render",value:function(){return r.a.createElement(j.a,{size:"tiny",open:!0,onClose:this.props.closeModal},r.a.createElement(j.a.Content,null,this.state.connection?r.a.createElement("div",null,this.renderTable(this.state.connection),r.a.createElement("div",{className:"spacer"}),this.renderTabs()):r.a.createElement("div",null,r.a.createElement(C.a,{basic:!0},r.a.createElement(x.a,{active:!0,inverted:!0},r.a.createElement(_.a,{inverted:!0},"Connecting to Scatter...")),r.a.createElement(S.a,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"})),r.a.createElement(k.a,{onClick:this.openWallet},"Retry wallet"))))}}]),t}(r.a.Component),Q=a(472),V=a(244),X=a.n(V),Z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={prices:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.cpu();case 2:t=e.sent,window.cpu_prices=t,this.setState({prices:t});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(Q.a,{fluid:!0},r.a.createElement(S.a,{src:X.a,wrapped:!0,ui:!1,style:{padding:"2em"}}),r.a.createElement(Q.a.Content,null,r.a.createElement(Q.a.Header,null,"CPU"),r.a.createElement(Q.a.Description,null,"Amount of time the network can spend processing your transactions.")),r.a.createElement(Q.a.Content,{extra:!0},this.state.prices?r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"30-day Cost:"),r.a.createElement("td",null,r.a.createElement("h3",{className:"color"},Y.round(this.state.prices.pp_cpu_rent,6)," EOS"))),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,"for 1.0s CPU Daily")),r.a.createElement("tr",null,r.a.createElement("td",null,"Source:"),r.a.createElement("td",null,"eosio.rexpool")),r.a.createElement("tr",null,r.a.createElement("td",null,"Stake Basis:"),r.a.createElement("td",null,"1ms for ",Y.round(this.state.prices.pp_cpu,4)," EOS")))):r.a.createElement(F.a,null,r.a.createElement(F.a.Paragraph,null,r.a.createElement(F.a.Line,null),r.a.createElement(F.a.Line,null),r.a.createElement(F.a.Line,null),r.a.createElement(F.a.Line,null)))))}}]),t}(r.a.Component),ee=a(245),te=a.n(ee),ae=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={prices:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.net();case 2:t=e.sent,window.net_prices=t,this.setState({prices:t});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(Q.a,{fluid:!0},r.a.createElement(S.a,{src:te.a,wrapped:!0,ui:!1,style:{padding:"2em"}}),r.a.createElement(Q.a.Content,null,r.a.createElement(Q.a.Header,null,"NET"),r.a.createElement(Q.a.Description,null,"Amount of data the network can transfer during your transactions.")),r.a.createElement(Q.a.Content,{extra:!0},this.state.prices?r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"30-day Cost:"),r.a.createElement("td",null,r.a.createElement("h3",{className:"color"},Y.round(this.state.prices.pp_net_rent,6)," EOS"))),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,"for 1mb NET Daily")),r.a.createElement("tr",null,r.a.createElement("td",null,"Source:"),r.a.createElement("td",null,"eosio.rexpool")),r.a.createElement("tr",null,r.a.createElement("td",null,"Stake Basis:"),r.a.createElement("td",null,"1kb for ",Y.round(this.state.prices.pp_net,4)," EOS")))):r.a.createElement(F.a,null,r.a.createElement(F.a.Paragraph,null,r.a.createElement(F.a.Line,null),r.a.createElement(F.a.Line,null),r.a.createElement(F.a.Line,null),r.a.createElement(F.a.Line,null)))))}}]),t}(r.a.Component),ne=a(246),re=a.n(ne),ce=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={prices:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.ram();case 2:t=e.sent,window.ram_prices=t,this.setState({prices:t});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(Q.a,{fluid:!0},r.a.createElement(S.a,{src:re.a,wrapped:!0,ui:!1,style:{padding:"2em"}}),r.a.createElement(Q.a.Content,null,r.a.createElement(Q.a.Header,null,"RAM"),r.a.createElement(Q.a.Description,null,"Storage for application data and smart contracts on the blockchain.")),r.a.createElement(Q.a.Content,{extra:!0},this.state.prices?r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Exchange:"),r.a.createElement("td",null,r.a.createElement("h3",{className:"color"},"1kb = ",Y.round(this.state.prices.pp_kb,4)," EOS"))),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,Y.round(this.state.prices.pp_byte,8)," / byte")),r.a.createElement("tr",null,r.a.createElement("td",null,"Source:"),r.a.createElement("td",null,"eosio.rammarket")),r.a.createElement("tr",null,r.a.createElement("td",null,"Unit Type:"),r.a.createElement("td",null,"bytes")))):r.a.createElement(F.a,null,r.a.createElement(F.a.Paragraph,null,r.a.createElement(F.a.Line,null),r.a.createElement(F.a.Line,null),r.a.createElement(F.a.Line,null),r.a.createElement(F.a.Line,null)))))}}]),t}(r.a.Component),le=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={isOpen:!1},a.closeModal=a.closeModal.bind(Object(m.a)(a)),a.openModal=a.openModal.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"closeModal",value:function(e){e&&e.preventDefault(),this.setState({isOpen:!1})}},{key:"openModal",value:function(e){e&&e.preventDefault(),this.setState({isOpen:!0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.isOpen?r.a.createElement(K,{closeModal:this.closeModal}):null,r.a.createElement(d.a,{fixed:"top"},r.a.createElement(d.a.Item,{name:"home",onClick:this.handleItemClick},r.a.createElement("a",{href:"https://autoscale.one",style:{color:"black"}},r.a.createElement("b",null,"Autoscale")," ",r.a.createElement("span",{className:"hide_small"},"\xa0 | \xa0 Automatic Scaling")," for EOS")),r.a.createElement(d.a.Menu,{position:"right"},r.a.createElement(d.a.Item,{style:{fontWeight:"bold"},name:"manager",onClick:this.openModal},r.a.createElement("span",{className:"color"},r.a.createElement(E.a,{name:"rocket"})," Scaling Manager")))),r.a.createElement("div",{className:"header_spacer"},"\xa0"),r.a.createElement(h.a,{textAlign:"center"},r.a.createElement(h.a,{container:!0,columns:3,stackable:!0},r.a.createElement(h.a.Column,{textAlign:"center"},r.a.createElement(Z,null)),r.a.createElement(h.a.Column,null,r.a.createElement(ae,null)),r.a.createElement(h.a.Column,null,r.a.createElement(ce,null)))),r.a.createElement("br",null),r.a.createElement("div",null,"Deposit EOS directly to ",r.a.createElement("b",null,"autoscale.x")," or use the ",r.a.createElement("b",{className:"color",style:{cursor:"pointer"},onClick:this.openModal},"scaling manager"),"."))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[259,1,2]]]);
//# sourceMappingURL=main.45565bfd.chunk.js.map