(this["webpackJsonprevv-suite"]=this["webpackJsonprevv-suite"]||[]).push([[8],{1023:function(e,t){},1026:function(e,t){},1096:function(e,t){},1098:function(e,t){},1103:function(e,t){},1105:function(e,t){},1112:function(e,t){},1124:function(e,t){},1127:function(e,t){},1132:function(e,t){},1350:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ie}));var n=a(111),r=a.n(n),c=a(129),i=a(48),s=a(49),o=a(51),d=a(52),f=a(637),u=a(0),l=a(901),j=a.n(l),b=a(156),O=a.n(b),h=a(343),x=a(656),p=a(315),v=a(527),w=a(660),m=a(200),g=a(528),R=a(1206),D=a.n(R),y=a(333),L=a(131),S=a(668),k=a.n(S),A=a(680),I=a.n(A),V=a(669),W=a.n(V),P=a(678),E=a.n(P),F=a(672),C=a.n(F),J=a(670),T=a.n(J),N=a(671),z=a.n(N),G=a(673),M=a.n(G),Q=a(675),U=a.n(Q),Z=a(676),q=a.n(Z),B=a(677),H=a.n(B),K=a(681),Y=a.n(K),X=a(674),$=a.n(X),_=a(679),ee=a.n(_),te=a(682),ae=a.n(te),ne=a(3),re={Add:Object(u.forwardRef)((function(e,t){return Object(ne.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Check:Object(u.forwardRef)((function(e,t){return Object(ne.jsx)(W.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Clear:Object(u.forwardRef)((function(e,t){return Object(ne.jsx)(T.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Delete:Object(u.forwardRef)((function(e,t){return Object(ne.jsx)(z.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),DetailPanel:Object(u.forwardRef)((function(e,t){return Object(ne.jsx)(C.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Edit:Object(u.forwardRef)((function(e,t){return Object(ne.jsx)(M.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Export:Object(u.forwardRef)((function(e,t){return Object(ne.jsx)($.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Filter:Object(u.forwardRef)((function(e,t){return Object(ne.jsx)(U.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),FirstPage:Object(u.forwardRef)((function(e,t){return Object(ne.jsx)(q.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),LastPage:Object(u.forwardRef)((function(e,t){return Object(ne.jsx)(H.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),NextPage:Object(u.forwardRef)((function(e,t){return Object(ne.jsx)(C.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),PreviousPage:Object(u.forwardRef)((function(e,t){return Object(ne.jsx)(E.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ResetSearch:Object(u.forwardRef)((function(e,t){return Object(ne.jsx)(T.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Search:Object(u.forwardRef)((function(e,t){return Object(ne.jsx)(ee.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),SortArrow:Object(u.forwardRef)((function(e,t){return Object(ne.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(u.forwardRef)((function(e,t){return Object(ne.jsx)(Y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ViewColumn:Object(u.forwardRef)((function(e,t){return Object(ne.jsx)(ae.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))}))},ce=[{field:"timeStamp",title:"Date",type:"date",filterPlaceholder:"Filter Date"},{field:"value",title:"Reward",filterPlaceholder:"Filter Reward",render:function(e){return e.value+" REVV"}}],ie=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getTransactions=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=j.a.utils.isAddress(n.state.walletAddress),n.setState({validAddress:a,validationDone:!0}),!a){e.next=13;break}if(c=n.state.walletAddress+(new Date).getDate().toString(),!localStorage.getItem(c)){e.next=10;break}n.setData(JSON.parse(localStorage.getItem(c))),n.setDataLoaded(!0),e.next=13;break;case 10:return n.setIsLoading(!0),e.next=13,g.a.get("&address=".concat(n.state.walletAddress)).then((function(e){var t=e.data.result;t=n.filterData(t),t=n.formatData(t),n.setData(t),n.setDataLoaded(!0),n.setIsLoading(!1)})).catch((function(e){console.error(e),n.setIsLoading(!1)}));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={walletAddress:"",validAddress:!0,validationDone:!1,isLoading:!1,dataLoaded:!1,data:[]},n}return Object(s.a)(a,[{key:"setIsLoading",value:function(e){this.setState({isLoading:e})}},{key:"setDataLoaded",value:function(e){this.setState({dataLoaded:e})}},{key:"setData",value:function(e){this.setState({data:e})}},{key:"setWalletAddress",value:function(e){this.setState({walletAddress:e,validationDone:!1,dataLoaded:!1})}},{key:"filterData",value:function(e){return e=e.filter((function(e){return"REVV"===e.tokenSymbol&&"0x9c8a06f0197ee718cd820adeb48a88ea2a9b5c48"===e.from}))}},{key:"formatData",value:function(e){return e=e.map((function(e){return e.id=e.hash,e.timeStamp=new Date(1e3*e.timeStamp),e.value=parseFloat(j.a.utils.fromWei(e.value)).toFixed(2),e}))}},{key:"render",value:function(){var e=this;return Object(ne.jsxs)(y.a,{container:!0,spacing:3,children:[Object(ne.jsxs)(y.a,{item:!0,xs:12,style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(ne.jsx)(h.a,{style:{background:"red",color:"white"},children:Object(ne.jsx)(O.a,{})}),Object(ne.jsx)(m.a,{component:"h1",variant:"h5",children:"Distributed REVV Rewards"})]}),Object(ne.jsxs)(y.a,{item:!0,xs:12,component:"form",onSubmit:function(t){e.getTransactions(t)},noValidate:!0,sx:{mt:3},children:[Object(ne.jsx)(p.a,{margin:"normal",color:"primary",required:!0,fullWidth:!0,id:"wallet",label:"Wallet Address",name:"wallet",autoFocus:!0,variant:"outlined",error:!this.state.validAddress,onChange:function(t){return e.setWalletAddress(t.target.value)}}),Object(ne.jsx)("br",{}),!this.state.isLoading&&Object(ne.jsx)(x.a,{type:"submit",color:"primary",fullWidth:!0,variant:"contained",children:"Get Rewards List"}),this.state.isLoading&&Object(ne.jsx)(w.a,{})]}),this.state.dataLoaded&&Object(ne.jsxs)(v.a,{sx:{marginTop:8,display:"contents",height:"100vh",flexDirection:"column",alignItems:"center"},children:[Object(ne.jsx)("br",{}),Object(ne.jsx)("div",{style:{display:"flex",height:"100%",width:"100%"},children:Object(ne.jsx)("div",{style:{flexGrow:1},children:Object(ne.jsx)(D.a,{theme:Object(L.a)(),title:"REVV Rewards",data:this.state.data,columns:ce,icons:re,isLoading:this.state.isLoading,options:{pageSize:10,pageSizeOptions:[5,10,20,{value:this.state.data?parseInt(this.state.data.length):0,label:"All"}],filtering:!0,search:!1}})})})]})]})}}]),a}(u.Component)},528:function(e,t,a){"use strict";var n=a(130),r=a.n(n);t.a=r.a.create({baseURL:"https://api.polygonscan.com/api?module=account&action=tokentx&contractaddress=0x70c006878a5a50ed185ac4c87d837633923de296&sort=desc&apikey=NW6MQ4UW5JIEVBH61JW4AK3WY2Q27ZZIM7"})},915:function(e,t){},917:function(e,t){},921:function(e,t){},922:function(e,t){},949:function(e,t){},951:function(e,t){},962:function(e,t){},964:function(e,t){},974:function(e,t){},976:function(e,t){},991:function(e,t){}}]);
//# sourceMappingURL=8.c0022efe.chunk.js.map