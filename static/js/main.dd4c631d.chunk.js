(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,a){},245:function(e,t,a){e.exports=a.p+"static/media/cpu.593d32f1.png"},246:function(e,t,a){e.exports=a.p+"static/media/net.453fd9e8.png"},247:function(e,t,a){e.exports=a.p+"static/media/ram.63c78e1d.png"},260:function(e,t,a){e.exports=a(463)},273:function(e,t){},278:function(e,t){},280:function(e,t){},463:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(56),l=a.n(c),o=(a(156),a(24)),i=a(25),s=a(27),u=a(26),p=a(19),m=a(28),d=a(248),h=a(57),E=a(250),f=a(22),b=a(7),v=a.n(b),y=a(16),g=a(472),O=a(478),w=a(153),k=a(469),j=a(464),x=a(471),C=a(475),S=a(470),_=a(249),A=a(42),L=a.n(A),B=a(225),M=a.n(B),D=a(226),N=a.n(D),P=a(65),T=new(0,a(65).JsonRpc)("https://nodes.get-scatter.com",{fetch:fetch}),R=function(){var e=Object(y.a)(v.a.mark(function e(t){var a,n,r,c=arguments;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:"eosio",n=c.length>2&&void 0!==c[2]?c[2]:"",e.next=4,T.get_table_rows({json:!0,code:a,scope:a,table:t,lower_bound:n,limit:1});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(y.a)(v.a.mark(function e(t){var a,n,r,c,l;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("rexpool");case 2:return a=e.sent,n=(n=a.rows)[0],r=n.total_unlent.split(" ")[0],c=n.total_rent.split(" ")[0],l=r/(c+1),e.abrupt("return",t/l);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),U={cpu:function(){var e=Object(y.a)(v.a.mark(function e(){var t,a,n,r,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get_account("cypherglasss");case 2:return t=e.sent,a=t.total_resources.cpu_weight.split(" ")[0],n=t.cpu_limit.max,r=a/(n/1e3),e.next=9,I(1e3*r);case 9:return c=e.sent,e.abrupt("return",{pp_cpu:r,pp_cpu_rent:c});case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),net:function(){var e=Object(y.a)(v.a.mark(function e(){var t,a,n,r,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get_account("cypherglasss");case 2:return t=e.sent,a=t.total_resources.net_weight.split(" ")[0],n=t.net_limit.max,r=a/(n/1024),e.next=9,I(1e3*r);case 9:return c=e.sent,e.abrupt("return",{pp_net:r,pp_net_rent:c});case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),ram:function(){var e=Object(y.a)(v.a.mark(function e(){var t,a,n,r,c,l;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("rammarket");case 2:return t=e.sent,a=(a=t.rows)[0],n=a.quote.balance.split(" ")[0],r=a.base.balance.split(" ")[0],l=1024*(c=n/r),e.abrupt("return",{pp_byte:c,pp_kb:l});case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),round:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return e?e.toFixed(t):e},autoscaleBalance:function(){var e=Object(y.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("deposits","autoscale.x",t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};L.a.plugins(new M.a,new N.a({Api:P.Api,JsonRpc:P.JsonRpc}));var W,J,F,z,q=A.Network.fromJson({blockchain:"eos",host:"nodes.get-scatter.com",port:443,protocol:"https",chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"}),H=new P.JsonRpc(q.fullhost()),Y=function(){var e=Object(y.a)(v.a.mark(function e(t,a,n,r,c){var l;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.transact({actions:[{account:t,name:a,authorization:[{actor:z.name,permission:z.authority}],data:n}]},{blocksBehind:3,expireSeconds:30});case 3:r(),e.next=12;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0),(l=e.t0).message&&(l=l.message),c(l.toString());case 12:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t,a,n,r,c){return e.apply(this,arguments)}}(),$={init:function(){var e=Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.scatter.connect("Autoscale");case 2:if(e.sent){e.next=6;break}return console.error("Could not connect to Scatter."),e.abrupt("return");case 6:return W=L.a.scatter,e.next=9,W.getIdentity({accounts:[q]});case 9:return J=e.sent,F=W.eos(q,P.Api,{rpc:H,beta3:!0}),z=J.accounts[0],console.log("--"),console.log(J),e.abrupt("return",{scatter:W,identity:J,eos:F,account:z});case 15:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),logout:function(){var e=Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.forgetIdentity();case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),prioritize:function(){var e=Object(y.a)(v.a.mark(function e(t,a,n){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y("autoscale.x","prioritize",{account:z.name,priority:t},a,n);case 2:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),transfer:function(){var e=Object(y.a)(v.a.mark(function e(t,a,n){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y("eosio.token","transfer",{from:z.name,to:"autoscale.x",quantity:"".concat(parseFloat(t).toFixed(4)," EOS"),memo:z.name},a,n);case 2:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),autoscale:function(){var e=Object(y.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.autoscaleBalance(t);case 2:if(!(a=e.sent).rows.length||a.rows[0].account!==t){e.next=7;break}return e.abrupt("return",a.rows[0]);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},G=a(474),K=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={autoscale_balance:0,balance_loading:!0},a.getBalance=a.getBalance.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getBalance();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getBalance",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.account){e.next=8;break}return this.setState(Object(f.a)({},this.state,{balance_loading:!0})),e.next=4,$.autoscale(this.props.account);case 4:t=e.sent,a=0,t&&(a=t.balance/1e4),this.setState(Object(f.a)({},this.state,{autoscale_balance:a,balance_loading:!1}));case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.balance_loading?r.a.createElement(G.a,null,r.a.createElement(G.a.Paragraph,null,r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null))):r.a.createElement("div",null,r.a.createElement("h3",null,this.state.autoscale_balance.toFixed(4)," EOS"),0===this.state.autoscale_balance?r.a.createElement("span",null,"Autoscale off, Deposit EOS to enable. ",r.a.createElement(h.a,{name:"shield",color:"red"})):this.state.autoscale_balance<.1?r.a.createElement("span",null,"Low balance, refill to avoid interruption. ",r.a.createElement(h.a,{name:"warning sign",color:"orange"})):r.a.createElement("span",null,"Autoscale will monitor your account. ",r.a.createElement(h.a,{name:"check",color:"green"})))}}]),t}(r.a.Component),Q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={priorityError:"",loading:!1,clickButtonLoading:!1,priority:null,priorityAfterUpdate:null},a.switchPriority=a.switchPriority.bind(Object(p.a)(a)),a.priorityCompleted=a.priorityCompleted.bind(Object(p.a)(a)),a.priorityCanceled=a.priorityCanceled.bind(Object(p.a)(a)),a.getPriority=a.getPriority.bind(Object(p.a)(a)),a.genButton=a.genButton.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getPriority();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getPriority",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.account){e.next=8;break}return this.setState(Object(f.a)({},this.state,{loading:!0})),t=null,e.next=5,$.autoscale(this.props.account);case 5:(a=e.sent)&&(t=a.priority),this.setState(Object(f.a)({},this.state,{priority:t,loading:!1}));case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"switchPriority",value:function(e){var t=e.target.value;this.setState({priorityAfterUpdate:t,clickButtonLoading:parseInt(t)}),$.prioritize(t,this.priorityCompleted,this.priorityCanceled)}},{key:"priorityCompleted",value:function(){this.setState(Object(f.a)({},this.state,{clickButtonLoading:!1,priority:parseInt(this.state.priorityAfterUpdate)}))}},{key:"priorityCanceled",value:function(e){var t=this;this.setState(Object(f.a)({},this.state,{clickButtonLoading:!1,priorityError:e})),setTimeout(function(){t.setState(Object(f.a)({},t.state,{priorityError:""}))},5e3)}},{key:"genButton",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=this.state,a=t.clickButtonLoading,n=t.priority,c=Boolean(n===e),l=c?"Active":"Select";return null===n&&(l="Off",c=!0),r.a.createElement(j.a,{basic:!0,loading:Boolean(a===e),disabled:c,value:e,onClick:this.switchPriority},l)}},{key:"render",value:function(){return this.state.loading?r.a.createElement(G.a,null,r.a.createElement(G.a.Paragraph,null,r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null))):r.a.createElement("div",null,this.state.priorityError?r.a.createElement(w.a,{inverted:!0,color:"red"},this.state.priorityError):null,r.a.createElement(g.a,{basic:"very"},r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Row,{positive:!0},r.a.createElement(g.a.Cell,{style:{width:"70%"}},r.a.createElement("h4",null,r.a.createElement(h.a,{name:"arrow alternate circle up"}),"CPU/NET ONLY"),"Autoscale monitors account for sufficient CPU and NET resources but not RAM."),r.a.createElement(g.a.Cell,null,this.genButton(1))),r.a.createElement(g.a.Row,null,r.a.createElement(g.a.Cell,null,r.a.createElement("h4",null,r.a.createElement(h.a,{name:"plus circle"}),"CPU/NET + RAM"),"Autoscale monitors all account resources. Note: RAM use depletes balance faster."),r.a.createElement(g.a.Cell,null,this.genButton(2))),r.a.createElement(g.a.Row,null,r.a.createElement(g.a.Cell,null,r.a.createElement("h4",null,r.a.createElement(h.a,{name:"pause circle"}),"PAUSE AUTOSCALE"),"Autoscale will be turned off and not monitor your account for resources."),r.a.createElement(g.a.Cell,null,this.genButton(0))))))}}]),t}(r.a.Component),V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.payment;e||(e=1),e>100&&(e=100);var t=window,a=t.cpu_prices,n=t.net_prices,c=t.ram_prices,l=a?parseInt(e/a.pp_cpu_rent*30):0,o=n?parseInt(e/n.pp_net_rent*30):0,i=c?parseInt(e/(1e3*c.pp_byte)*30):0;return r.a.createElement("div",null,r.a.createElement("div",{className:"spacer"}),r.a.createElement(g.a,{basic:"very",compact:"very"},r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Row,null,r.a.createElement(g.a.Cell,null,parseFloat(e).toFixed(4)," ",r.a.createElement("br",null)," EOS Token = "),r.a.createElement(g.a.Cell,null,r.a.createElement("h4",null,r.a.createElement(h.a,{name:"cog",color:"grey"})," CPU")," ",l," Days"),r.a.createElement(g.a.Cell,null,r.a.createElement("h4",null,r.a.createElement(h.a,{name:"plug",color:"grey"})," NET")," ",o," Days"),r.a.createElement(g.a.Cell,null,r.a.createElement("h4",null,r.a.createElement(h.a,{name:"globe",color:"grey"})," RAM"),i," Days")))),r.a.createElement("div",{className:"spacer"}),"*Based on ",r.a.createElement("i",null,"current market prices"),". Assumption of 1000ms CPU daily, 1000kb NET daily, or 1000bytes RAM monthly.")}}]),t}(r.a.Component),X=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={connection:!1,depositLoading:!1,depositAmt:.5,depositError:"",autoscale_balance:0,showBalance:!0},a.openWallet=a.openWallet.bind(Object(p.a)(a)),a.logoutScatter=a.logoutScatter.bind(Object(p.a)(a)),a.transferTokens=a.transferTokens.bind(Object(p.a)(a)),a.setDepositAmt=a.setDepositAmt.bind(Object(p.a)(a)),a.depositCompleted=a.depositCompleted.bind(Object(p.a)(a)),a.depositCanceled=a.depositCanceled.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.openWallet();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"openWallet",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.init();case 2:t=e.sent,console.log("connected"),console.log(t),this.state.connection||this.setState(Object(f.a)({},this.state,{connection:t}));case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"logoutScatter",value:function(){$.logout(),window.location.reload()}},{key:"transferTokens",value:function(){this.setState({depositLoading:!0}),$.transfer(this.state.depositAmt,this.depositCompleted,this.depositCanceled)}},{key:"setDepositAmt",value:function(e){var t=e.target.value;this.setState(Object(f.a)({},this.state,{depositAmt:t}))}},{key:"depositCompleted",value:function(){var e=this;this.setState(Object(f.a)({},this.state,{depositLoading:!1})),setTimeout(function(){e.setState(Object(f.a)({},e.state,{showBalance:!1}),function(){e.setState(Object(f.a)({},e.state,{showBalance:!0}))})},800)}},{key:"depositCanceled",value:function(e){var t=this;this.setState(Object(f.a)({},this.state,{depositLoading:!1,depositError:e})),setTimeout(function(){t.setState(Object(f.a)({},t.state,{depositError:""}))},5e3)}},{key:"renderTable",value:function(e){var t=e.account;return r.a.createElement(g.a,{basic:"very"},r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Row,null,r.a.createElement(g.a.Cell,{width:4},"User Account"),r.a.createElement(g.a.Cell,null,r.a.createElement("h2",null,r.a.createElement("span",{className:"color"},t.name)," \xa0",r.a.createElement("a",{href:"https://bloks.io/account/".concat(t.name),target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{name:"globe"})),r.a.createElement(h.a,{name:"sign-out",style:{cursor:"pointer"},onClick:this.logoutScatter})))),r.a.createElement(g.a.Row,null,r.a.createElement(g.a.Cell,null,"Autoscale Balance"),r.a.createElement(g.a.Cell,null,this.state.showBalance?r.a.createElement(K,{account:t.name}):null))))}},{key:"renderTabs",value:function(){var e=r.a.createElement(O.a.Pane,null,this.state.depositError?r.a.createElement(w.a,{inverted:!0,color:"red"},this.state.depositError):null,r.a.createElement(k.a,{style:{width:"100px"},type:"number",name:"quantity",onChange:this.setDepositAmt,value:this.state.depositAmt,step:"0.1",min:"0",max:"99.9"}),"\xa0",r.a.createElement(j.a,{onClick:this.transferTokens,loading:this.state.depositLoading},"Deposit"),r.a.createElement("div",{className:"spacer"}),"Initial deposit must be at least 0.25 EOS. ",r.a.createElement("br",null),"You can also fund your account by sending EOS to ",r.a.createElement("b",null,"autoscale.x"),r.a.createElement(V,{payment:this.state.depositAmt})),t=r.a.createElement(O.a.Pane,null,r.a.createElement(Q,{account:this.state.connection.account.name})),a=[{menuItem:"Deposit EOS",render:function(){return e}},{menuItem:"Settings",render:function(){return t}}];return r.a.createElement(O.a,{panes:a})}},{key:"render",value:function(){return r.a.createElement(x.a,{size:"tiny",open:!0,onClose:this.props.closeModal},r.a.createElement(x.a.Content,null,this.state.connection?r.a.createElement("div",null,this.renderTable(this.state.connection),r.a.createElement("div",{className:"spacer"}),this.renderTabs()):r.a.createElement("div",null,r.a.createElement(w.a,{basic:!0},r.a.createElement(C.a,{active:!0,inverted:!0},r.a.createElement(S.a,{inverted:!0},"Connecting...")),r.a.createElement(_.a,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"})),r.a.createElement(j.a,{onClick:this.openWallet},"Retry wallet"))))}}]),t}(r.a.Component),Z=a(473),ee=a(245),te=a.n(ee),ae=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={prices:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.cpu();case 2:t=e.sent,window.cpu_prices=t,this.setState({prices:t});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(Z.a,{fluid:!0},r.a.createElement(_.a,{src:te.a,wrapped:!0,ui:!1,style:{padding:"2em"}}),r.a.createElement(Z.a.Content,null,r.a.createElement(Z.a.Header,null,"CPU"),r.a.createElement(Z.a.Description,null,"Amount of time the network can spend processing your transactions.")),r.a.createElement(Z.a.Content,{extra:!0},this.state.prices?r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"30-day Cost:"),r.a.createElement("td",null,r.a.createElement("h3",{className:"color"},U.round(this.state.prices.pp_cpu_rent,6)," EOS"))),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,"for 1.0s CPU Daily")),r.a.createElement("tr",null,r.a.createElement("td",null,"Source:"),r.a.createElement("td",null,"eosio.rexpool")),r.a.createElement("tr",null,r.a.createElement("td",null,"Stake Basis:"),r.a.createElement("td",null,"1ms for ",U.round(this.state.prices.pp_cpu,4)," EOS")))):r.a.createElement(G.a,null,r.a.createElement(G.a.Paragraph,null,r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null)))))}}]),t}(r.a.Component),ne=a(246),re=a.n(ne),ce=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={prices:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.net();case 2:t=e.sent,window.net_prices=t,this.setState({prices:t});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(Z.a,{fluid:!0},r.a.createElement(_.a,{src:re.a,wrapped:!0,ui:!1,style:{padding:"2em"}}),r.a.createElement(Z.a.Content,null,r.a.createElement(Z.a.Header,null,"NET"),r.a.createElement(Z.a.Description,null,"Amount of data the network can transfer during your transactions.")),r.a.createElement(Z.a.Content,{extra:!0},this.state.prices?r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"30-day Cost:"),r.a.createElement("td",null,r.a.createElement("h3",{className:"color"},U.round(this.state.prices.pp_net_rent,6)," EOS"))),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,"for 1mb NET Daily")),r.a.createElement("tr",null,r.a.createElement("td",null,"Source:"),r.a.createElement("td",null,"eosio.rexpool")),r.a.createElement("tr",null,r.a.createElement("td",null,"Stake Basis:"),r.a.createElement("td",null,"1kb for ",U.round(this.state.prices.pp_net,4)," EOS")))):r.a.createElement(G.a,null,r.a.createElement(G.a.Paragraph,null,r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null)))))}}]),t}(r.a.Component),le=a(247),oe=a.n(le),ie=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={prices:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.ram();case 2:t=e.sent,window.ram_prices=t,this.setState({prices:t});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(Z.a,{fluid:!0},r.a.createElement(_.a,{src:oe.a,wrapped:!0,ui:!1,style:{padding:"2em"}}),r.a.createElement(Z.a.Content,null,r.a.createElement(Z.a.Header,null,"RAM"),r.a.createElement(Z.a.Description,null,"Storage for application data and smart contracts on the blockchain.")),r.a.createElement(Z.a.Content,{extra:!0},this.state.prices?r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Exchange:"),r.a.createElement("td",null,r.a.createElement("h3",{className:"color"},"1kb = ",U.round(this.state.prices.pp_kb,4)," EOS"))),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,U.round(this.state.prices.pp_byte,8)," / byte")),r.a.createElement("tr",null,r.a.createElement("td",null,"Source:"),r.a.createElement("td",null,"eosio.rammarket")),r.a.createElement("tr",null,r.a.createElement("td",null,"Unit Type:"),r.a.createElement("td",null,"bytes")))):r.a.createElement(G.a,null,r.a.createElement(G.a.Paragraph,null,r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null),r.a.createElement(G.a.Line,null)))))}}]),t}(r.a.Component),se=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isOpen:!1},a.closeModal=a.closeModal.bind(Object(p.a)(a)),a.openModal=a.openModal.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"closeModal",value:function(e){e&&e.preventDefault(),this.setState({isOpen:!1})}},{key:"openModal",value:function(e){e&&e.preventDefault(),this.setState({isOpen:!0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.isOpen?r.a.createElement(X,{closeModal:this.closeModal}):null,r.a.createElement(d.a,{fixed:"top"},r.a.createElement(d.a.Item,{name:"home",onClick:this.handleItemClick},r.a.createElement("a",{href:"https://autoscale.one",style:{color:"black"}},r.a.createElement("b",null,"Autoscale")," ",r.a.createElement("span",{className:"hide_small"},"\xa0 | \xa0 Automatic Scaling")," for EOS")),r.a.createElement(d.a.Menu,{position:"right"},r.a.createElement(d.a.Item,{style:{fontWeight:"bold"},name:"manager",onClick:this.openModal},r.a.createElement("span",{className:"color"},r.a.createElement(h.a,{name:"rocket"})," Scaling Manager")))),r.a.createElement("div",{className:"header_spacer"},"\xa0"),r.a.createElement(E.a,{textAlign:"center"},r.a.createElement(E.a,{container:!0,columns:3,stackable:!0},r.a.createElement(E.a.Column,{textAlign:"center"},r.a.createElement(ae,null)),r.a.createElement(E.a.Column,null,r.a.createElement(ce,null)),r.a.createElement(E.a.Column,null,r.a.createElement(ie,null)))),r.a.createElement("br",null),r.a.createElement("div",null,"Deposit EOS directly to ",r.a.createElement("b",null,"autoscale.x")," or use the ",r.a.createElement("b",{className:"color",style:{cursor:"pointer"},onClick:this.openModal},"scaling manager"),"."))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[260,1,2]]]);
//# sourceMappingURL=main.dd4c631d.chunk.js.map