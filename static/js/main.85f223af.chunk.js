(this["webpackJsonprevv-suite"]=this["webpackJsonprevv-suite"]||[]).push([[1],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(136),c=n.n(a);function i(){return c()({palette:{type:"dark"}})}},146:function(e,t,n){"use strict";var a=n(85),c=n.n(a);t.a=c.a.create({baseURL:"https://api.coingecko.com/api/v3/simple"})},210:function(e,t,n){},211:function(e,t,n){},257:function(e,t,n){var a={"./REVV International Circuit (RIC).svg":258,"./REVV International Circuit (RIC2).svg":259,"./REVV International Circuit (RIC3).svg":260};function c(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=i,e.exports=c,c.id=257},258:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/REVV International Circuit (RIC).208d98b0.svg"},259:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/REVV International Circuit (RIC2).a4ffea9b.svg"},260:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/REVV International Circuit (RIC3).5745be8e.svg"},261:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(14),r=n.n(i),s=(n(210),n(211),n(341)),o=n(133),l=n(342),j=n(344),d=n(336),u=n(343),b=n(39),h=n(40),x=n(41),O=n(42),p=n(319),v=n(318),f=n(317),m=n(316),g=n(169),y=n.n(g),k=n(166),C=n(2),R=function(e){Object(x.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={copied:!1},a}return Object(h.a)(n,[{key:"setCopied",value:function(e){this.setState({copied:e})}},{key:"markCopy",value:function(){this.setCopied(!0)}},{key:"render",value:function(){var e=this;return Object(C.jsx)(k.CopyToClipboard,{text:"0xcD107Eca2e99aaC18A6BcC830c07c703dc5044D4",onCopy:function(){return e.markCopy()},children:Object(C.jsx)(m.a,{title:"Copied",open:this.state.copied,arrow:!0,onClose:function(){return e.setCopied(!1)},children:Object(C.jsx)(f.a,{id:"tip",label:"Tip",variant:"outlined",value:"0xcD107Eca2e99aaC18A6BcC830c07c703dc5044D4",disabled:!0,fullWidth:!0,color:"secondary",InputProps:{endAdornment:Object(C.jsx)(v.a,{position:"end",children:Object(C.jsx)(p.a,{"aria-label":"copy",edge:"end",children:Object(C.jsx)(y.a,{})})})}})})})}}]),n}(a.Component),w=n(56),D=n.n(w),I=n(84),S=n(146),V=n.p+"static/media/REVV_logo.d63df005.png",E=n(346),L=function(e){Object(x.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).getPrice=function(){var e=Object(I.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("price?ids=revv&vs_currencies=usd").then((function(e){a.setPrice(e.data.revv.usd)})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={price:0},a}return Object(h.a)(n,[{key:"setPrice",value:function(e){this.setState({price:e})}},{key:"componentDidMount",value:function(){this.getPrice()}},{key:"render",value:function(){return Object(C.jsx)(f.a,{fullWidth:!0,id:"revvprice",label:"REVV Price",variant:"outlined",value:"".concat(this.state.price.toString()," USD"),disabled:!0,color:"primary",InputProps:{startAdornment:Object(C.jsx)(v.a,{position:"start",children:Object(C.jsx)(p.a,{"aria-label":"copy",edge:"end",children:Object(C.jsx)(E.a,{src:V})})})}})}}]),n}(a.Component),N=n(30),T=n(320),P=n(202),W=n(335),G=n(135),U=n(321),F=n(26),z=n(334),J=n(46),M=n(174),A=n.n(M),B=n.p+"static/media/REVV_logo.6096a359.gif",_=n(171),$=n.n(_),H=n(158),q=n.n(H),K=n(173),Q=n.n(K),X=n(172),Y=n.n(X),Z=n(170),ee=n.n(Z);function te(){return Object(C.jsxs)(J.b,{className:"navLink",to:"/",children:[Object(C.jsx)(ee.a,{style:{marginTop:"4px"}}),Object(C.jsx)(P.a,{variant:"h5",noWrap:!0,component:"div",children:"Home"})]})}function ne(){return Object(C.jsxs)(J.b,{className:"navLink",to:"/Leaderboard",children:[Object(C.jsx)($.a,{style:{marginTop:"4px"}}),Object(C.jsx)(P.a,{variant:"h5",noWrap:!0,component:"div",children:"Leaderboard"})]})}function ae(){return Object(C.jsxs)(J.b,{className:"navLink",to:"/Rewards",children:[Object(C.jsx)(q.a,{style:{marginTop:"4px"}}),Object(C.jsx)(P.a,{variant:"h5",noWrap:!0,component:"div",children:"Rewards"})]})}function ce(){return Object(C.jsxs)(J.b,{className:"navLink",to:"/Tracks",children:[Object(C.jsx)(Y.a,{style:{marginTop:"4px"}}),Object(C.jsx)(P.a,{variant:"h5",noWrap:!0,component:"div",children:"Tracks"})]})}function ie(){return Object(C.jsxs)(J.b,{className:"navLink",to:"/Gas",children:[Object(C.jsx)(Q.a,{style:{marginTop:"4px"}}),Object(C.jsx)(P.a,{variant:"h5",noWrap:!0,component:"div",children:"Gas Tracker"})]})}function re(){var e=c.a.useState(null),t=Object(N.a)(e,2),n=t[0],a=t[1],i=function(){a(null)},r=Object(F.a)(),s=Object(z.a)(r.breakpoints.down("sm"));return Object(C.jsx)(W.a,{position:"static",color:"inherit",children:Object(C.jsxs)(T.a,{children:[Object(C.jsx)(p.a,{edge:"start",color:"inherit","aria-label":"menu",href:"/REVV-Suite/",children:Object(C.jsx)(E.a,{src:B})}),Object(C.jsx)(P.a,{variant:"h5",noWrap:!0,component:"div",className:"revvtitle",style:{flexGrow:"10",cursor:"pointer"},children:"REVV Suite (Unofficial)"}),!s&&Object(C.jsxs)("div",{className:"navWrapper",children:[Object(C.jsx)(te,{}),Object(C.jsx)(ne,{}),Object(C.jsx)(ae,{}),Object(C.jsx)(ce,{}),Object(C.jsx)(ie,{})]}),s&&Object(C.jsxs)("div",{children:[Object(C.jsx)(p.a,{size:"large",edge:"end",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:function(e){a(e.currentTarget)},children:Object(C.jsx)(A.a,{})}),Object(C.jsxs)(G.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:i,children:[Object(C.jsx)(U.a,{onClick:i,children:Object(C.jsx)(te,{})}),Object(C.jsx)(U.a,{onClick:i,children:Object(C.jsx)(ne,{})}),Object(C.jsx)(U.a,{onClick:i,children:Object(C.jsx)(ae,{})}),Object(C.jsx)(U.a,{onClick:i,children:Object(C.jsx)(ce,{})}),Object(C.jsx)(U.a,{onClick:i,children:Object(C.jsx)(ie,{})})]})]})]})})}var se=n(337),oe=n(338),le=n(339),je=n(177);var de,ue=(de=n(257)).keys().map(de),be=function(e){Object(x.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={tracks:ue},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(JSON.stringify(this.state.tracks));t.forEach((function(n){Object(je.a)(n.default).then((function(a){var c=a.width,i=a.height;n.width=c,n.height=i,e.setState({tracks:t})})).catch((function(e){console.error(e)}))}))}},{key:"render",value:function(){return Object(C.jsx)(d.a,{container:!0,spacing:3,children:this.state.tracks.map((function(e){var t=e.width,n=e.height;return t||(t=100),n||(n=200),Object(C.jsx)(d.a,{item:!0,xs:12,children:Object(C.jsxs)(se.a,{children:[Object(C.jsx)(oe.a,{className:"track",style:{width:t.toString()+"px",height:n.toString()+"px"},image:e.default}),Object(C.jsx)(le.a,{children:e.default.replace(/^.*[\\\/]/,"").replace(/\.[^/.]+$/,"").replace(/\.[^/.]+$/,"")})]})})}))})}}]),n}(a.Component),he=n(11),xe=n(340),Oe=n(323),pe=n(322),ve=n(85),fe=n.n(ve).a.create({baseURL:"https://gasstation-mainnet.matic.network/"}),me=function(e){Object(x.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).updateGasPrice=Object(I.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.get().then((function(e){var t=a.state.gasData&&JSON.stringify(a.state.gasData)===JSON.stringify(e.data)?a.state.lastRetrieved:new Date;a.setState({loaded:!0,gasData:e.data,lastRetrieved:t})})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)}))),a.state={loaded:!1,gasData:void 0,lastRetrieved:void 0},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.updateGasPrice,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return Object(C.jsxs)(d.a,{container:!0,spacing:3,children:[!this.state.loaded&&Object(C.jsxs)(d.a,{item:!0,xs:12,children:[Object(C.jsx)(P.a,{variant:"h4",align:"center",children:"Loading..."}),Object(C.jsx)("br",{}),Object(C.jsx)(pe.a,{})]}),this.state.loaded&&Object(C.jsxs)(c.a.Fragment,{children:[Object(C.jsx)(d.a,{item:!0,xs:12,children:Object(C.jsx)(se.a,{variant:"outlined",style:{display:"flex",alignItems:"center",flexDirection:"column"},children:Object(C.jsxs)(P.a,{variant:"subtitle1",children:["Last Updated: ",this.state.lastRetrieved.toDateString()+" "+this.state.lastRetrieved.toLocaleTimeString()]})})}),Object(C.jsx)(d.a,{item:!0,md:4,xs:12,children:Object(C.jsxs)(se.a,{variant:"outlined",style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(C.jsx)(P.a,{variant:"h5",children:"Standard"}),Object(C.jsxs)(P.a,{variant:"h4",style:{color:"#00c9a7"},children:[this.state.gasData.safeLow," Gwei"]}),Object(C.jsx)(P.a,{color:"textSecondary",children:"(30-60 secs)"})]})}),Object(C.jsx)(d.a,{item:!0,md:4,xs:12,children:Object(C.jsxs)(se.a,{variant:"outlined",style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(C.jsx)(P.a,{variant:"h5",children:"Fast"}),Object(C.jsxs)(P.a,{variant:"h4",style:{color:"#8247e5"},children:[this.state.gasData.standard," Gwei"]}),Object(C.jsx)(P.a,{color:"textSecondary",children:"(10-30 secs)"})]})}),Object(C.jsx)(d.a,{item:!0,md:4,xs:12,children:Object(C.jsxs)(se.a,{variant:"outlined",style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(C.jsx)(P.a,{variant:"h5",children:"Rapid"}),Object(C.jsxs)(P.a,{variant:"h4",style:{color:"#A5343E"},children:[this.state.gasData.fast," Gwei"]}),Object(C.jsx)(P.a,{color:"textSecondary",children:"(5-10 secs)"})]})})]})]})}}]),n}(a.Component),ge=Object(a.lazy)((function(){return Promise.all([n.e(7),n.e(10)]).then(n.bind(null,1358))})),ye=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6),n.e(9)]).then(n.bind(null,1362))})),ke=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(8)]).then(n.bind(null,1351))}));var Ce=function(){return Object(C.jsx)(a.Suspense,{fallback:Object(C.jsx)(xe.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:!0,children:Object(C.jsx)(Oe.a,{color:"inherit"})}),children:Object(C.jsx)(J.a,{children:Object(C.jsxs)(s.a,{theme:Object(o.a)(),children:[Object(C.jsx)(l.a,{}),Object(C.jsxs)(u.a,{className:"mainDiv",children:[Object(C.jsx)(re,{}),Object(C.jsxs)(j.a,{component:"main",className:"container",children:[Object(C.jsxs)(d.a,{container:!0,spacing:3,children:[Object(C.jsx)(d.a,{item:!0,md:6,xs:12,children:Object(C.jsx)(L,{})}),Object(C.jsx)(d.a,{item:!0,md:6,xs:12,children:Object(C.jsx)(R,{})})]}),Object(C.jsx)(he.c,{children:Object(C.jsx)(he.a,{exact:!0,path:"/",element:Object(C.jsx)(ge,{})})}),Object(C.jsx)(he.c,{children:Object(C.jsx)(he.a,{path:"/Leaderboard",element:Object(C.jsx)(ye,{})})}),Object(C.jsx)(he.c,{children:Object(C.jsx)(he.a,{path:"/Rewards",element:Object(C.jsx)(ke,{})})}),Object(C.jsx)(he.c,{children:Object(C.jsx)(he.a,{path:"/Tracks",element:Object(C.jsx)(be,{})})}),Object(C.jsx)(he.c,{children:Object(C.jsx)(he.a,{path:"/Gas",element:Object(C.jsx)(me,{})})})]})]})]})})})},Re=function(e){e&&e instanceof Function&&n.e(13).then(n.bind(null,1353)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(Ce,{})}),document.getElementById("root")),Re()}},[[261,2,4]]]);
//# sourceMappingURL=main.85f223af.chunk.js.map