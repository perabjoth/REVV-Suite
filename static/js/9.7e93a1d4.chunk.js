(this["webpackJsonprevv-suite"]=this["webpackJsonprevv-suite"]||[]).push([[9],{1362:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ke}));var r=a(1318),i=a(56),n=a.n(i),s=a(84),o=a(39),l=a(40),c=a(41),d=a(42),u=a(639),f=a(0),j=a.n(f),b=a(640),h=a.n(b),p=a(146),v=a(85),O=a.n(v).a.create({baseURL:"https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/revv-suite-qdwss/service/revv-data/incoming_webhook/"}),g=a(530),m=a(900),x=a(658),V=a(337),R=a(339),w=a(1345),P=a(1350),k=a(336),E=a(319),S=a(322),T=a(662),z=a(648),D=a(644),F=a(661),y=a(649),C=a(317),A=a(133),_=a(901),I=a.n(_),W=a(669),L=a.n(W),N=a(681),U=a.n(N),J=a(670),$=a.n(J),B=a(679),M=a.n(B),G=a(673),H=a.n(G),Q=a(671),Z=a.n(Q),q=a(672),K=a.n(q),Y=a(674),X=a.n(Y),ee=a(676),te=a.n(ee),ae=a(677),re=a.n(ae),ie=a(678),ne=a.n(ie),se=a(682),oe=a.n(se),le=a(675),ce=a.n(le),de=a(680),ue=a.n(de),fe=a(683),je=a.n(fe),be=a(2),he=["children","onClose"],pe="GAME_SESSION_ALPHA_A_",ve="_SPLIT_OWNER",Oe="_SPLIT_HIRED",ge={Add:Object(f.forwardRef)((function(e,t){return Object(be.jsx)(L.a,Object(u.a)(Object(u.a)({},e),{},{ref:t}))})),Check:Object(f.forwardRef)((function(e,t){return Object(be.jsx)($.a,Object(u.a)(Object(u.a)({},e),{},{ref:t}))})),Clear:Object(f.forwardRef)((function(e,t){return Object(be.jsx)(Z.a,Object(u.a)(Object(u.a)({},e),{},{ref:t}))})),Delete:Object(f.forwardRef)((function(e,t){return Object(be.jsx)(K.a,Object(u.a)(Object(u.a)({},e),{},{ref:t}))})),DetailPanel:Object(f.forwardRef)((function(e,t){return Object(be.jsx)(H.a,Object(u.a)(Object(u.a)({},e),{},{ref:t}))})),Edit:Object(f.forwardRef)((function(e,t){return Object(be.jsx)(X.a,Object(u.a)(Object(u.a)({},e),{},{ref:t}))})),Export:Object(f.forwardRef)((function(e,t){return Object(be.jsx)(ce.a,Object(u.a)(Object(u.a)({},e),{},{ref:t}))})),Filter:Object(f.forwardRef)((function(e,t){return Object(be.jsx)(te.a,Object(u.a)(Object(u.a)({},e),{},{ref:t}))})),FirstPage:Object(f.forwardRef)((function(e,t){return Object(be.jsx)(re.a,Object(u.a)(Object(u.a)({},e),{},{ref:t}))})),LastPage:Object(f.forwardRef)((function(e,t){return Object(be.jsx)(ne.a,Object(u.a)(Object(u.a)({},e),{},{ref:t}))})),NextPage:Object(f.forwardRef)((function(e,t){return Object(be.jsx)(H.a,Object(u.a)(Object(u.a)({},e),{},{ref:t}))})),PreviousPage:Object(f.forwardRef)((function(e,t){return Object(be.jsx)(M.a,Object(u.a)(Object(u.a)({},e),{},{ref:t}))})),ResetSearch:Object(f.forwardRef)((function(e,t){return Object(be.jsx)(Z.a,Object(u.a)(Object(u.a)({},e),{},{ref:t}))})),Search:Object(f.forwardRef)((function(e,t){return Object(be.jsx)(ue.a,Object(u.a)(Object(u.a)({},e),{},{ref:t}))})),SortArrow:Object(f.forwardRef)((function(e,t){return Object(be.jsx)(U.a,Object(u.a)(Object(u.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(f.forwardRef)((function(e,t){return Object(be.jsx)(oe.a,Object(u.a)(Object(u.a)({},e),{},{ref:t}))})),ViewColumn:Object(f.forwardRef)((function(e,t){return Object(be.jsx)(je.a,Object(u.a)(Object(u.a)({},e),{},{ref:t}))}))};function me(e,t,a){var r=e.filter((function(e){return e[t]===a}));if(r.length>0)return r[0]}function xe(e,t,a,r,i){var n=Object(be.jsx)("div",{}),s="$";r.toUpperCase().includes("REVV")&&(s="REVV");var o=r.replace(/\D/g,"");if(e&&e.total>0){var l=e.total,c=e.hired,d=e.owner,u=d/l,f=c/l,j=!1;i||(u=.5,f=.5,j=!0);var b=!1;for(var h in t){t[h].unit=s;var p=1,v=1;if(t[h].prize<1||j){if(h<t.length-1){var O=parseInt(h)+1;t[O].rank-t[h].rank>1&&(b=!0,t[h].rankString=t[h].rank.toString()+" - "+(t[O].rank-1).toString(),v=p=parseInt(t[O].rank)-parseInt(t[h].rank))}else b&&(t[h].rankString=t[h].rank.toString()+"+*",p=c>t[h].rank?c-t[h].rank:-1,v=d>t[h].rank?d-t[h].rank:-1);t[h].rankString||(t[h].rankString=t[h].rank.toString());var g=t[h].prize*(j?1:o);t[h].hiredPrize=-1!==p?((j?1:f)*g/p).toFixed(2):0,t[h].ownerPrize=-1!==v?((j?1:u)*g/v).toFixed(2):0}}n=Object(be.jsxs)(T.a,{children:[Object(be.jsx)(F.a,{children:Object(be.jsxs)(y.a,{children:[Object(be.jsx)(D.a,{children:"Rank"}),Object(be.jsxs)(D.a,{children:["Driver Prize ",a&&"("+(100*u).toFixed(2)+"%)"]}),a&&Object(be.jsxs)(D.a,{children:["Hired Prize (",(100*f).toFixed(2),"%)"]})]})}),Object(be.jsx)(z.a,{children:t.map((function(e){return Object(be.jsxs)(y.a,{children:[Object(be.jsx)(D.a,{children:e.rankString?e.rankString:e.rank}),Object(be.jsxs)(D.a,{children:[a?e.ownerPrize:e.prize," ",s]}),a&&Object(be.jsxs)(D.a,{children:[e.hiredPrize," ",s]})]})}))})]})}else n=Object(be.jsx)(V.a,{sx:{minWidth:275},children:Object(be.jsx)(R.a,{align:"center",children:Object(be.jsx)("h1",{children:"Prize Data Not Available"})})});return n}var Ve=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).prizeAsyncGenerator=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.generatePrizeTableContent(r.props.eventData.prizeData,r.props.eventData.data.prize,r.props.eventData.data.splitLeaderboard,r.props.eventData.data.prize_total.toString(),r.props.eventData.data.dynamicPrizePoolRatio);case 1:case"end":return e.stop()}}),e)}))),r.state={prizeTable:Object(be.jsx)(S.a,{}),prizeData:void 0},r}return Object(l.a)(a,[{key:"generatePrizeTableContent",value:function(e,t,a,r,i){this.setPrizeTable(xe(e,t,a,r,i))}},{key:"setPrizeTable",value:function(e){this.setState({prizeTable:e})}},{key:"componentDidMount",value:function(){this.prizeAsyncGenerator()}},{key:"render",value:function(){return Object(be.jsx)("div",{children:this.state.prizeTable})}}]),a}(f.Component),Re=function(e){var t=e.children,a=e.onClose,i=Object(r.a)(e,he);return Object(be.jsxs)(P.a,Object(u.a)(Object(u.a)({sx:{m:0,p:2}},i),{},{children:[t,a?Object(be.jsx)(E.a,{"aria-label":"close",onClick:a,style:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(be.jsx)(I.a,{})}):null]}))};var we=[{title:"Series",field:"data.series",hidden:!0},{title:"Name",field:"data.name",filterPlaceholder:"Filter Name"},{title:"Rank",field:"rank",filterPlaceholder:"Filter Rank",hidden:!0},{title:"Time",field:"time",filterPlaceholder:"Filter Time",hidden:!0},{title:"REVV",field:"RewardString",filterPlaceholder:"Filter REVV",hidden:!0},{title:"Tries",field:"tries",filterPlaceholder:"Filter Tries",hidden:!0},{title:"View Pizes",field:"",render:function(e){return new Date(e.endTimestamp).getTime()<(new Date).getTime()?Object(be.jsx)(m.a,{trigger:Object(be.jsx)("a",{children:"View Prizes"}),position:"bottom center",closeOnDocumentClick:!1,modal:!0,closeOnEscape:!0,children:function(t){return Object(be.jsxs)(w.a,{open:!0,onClose:t,children:[Object(be.jsx)(Re,{id:"customized-dialog-title",onClose:t,children:"Prize Distribution"}),Object(be.jsx)(Ve,{eventData:e})]})}}):Object(be.jsxs)("div",{children:[new Date(e.startTimestamp).getTime()<(new Date).getTime()?"In Progress":"Upcoming","..."]})}},{title:"Start",field:"startTimestamp",type:"date",filterPlaceholder:"Filter Start"},{title:"End",field:"endTimestamp",type:"date",filterPlaceholder:"Filter End"},{title:"Track",field:"data.track",filterPlaceholder:"Filter Track"},{title:"Laps",field:"data.lapCount",filterPlaceholder:"Filter Laps"},{title:"Weather",field:"data.weather",filterPlaceholder:"Filter Weather"},{title:"Total Prize",field:"data.prize_total_formatted",filterPlaceholder:"Filter Prize"},{title:"id",field:"id",hidden:!0},{title:"percentagePrizePool",field:"data.percentagePrizePool",hidden:!0},{title:"dynamicPrizePoolRatio",field:"data.dynamicPrizePoolRatio",hidden:!0},{title:"splitLeaderboard",field:"data.splitLeaderboard",hidden:!0}];function Pe(e){return e.map((function(e){return e.startTimestamp=new Date(parseFloat(e.startTimestamp)),e.endTimestamp=new Date(parseFloat(e.endTimestamp)),e.data.prize_total.toString().toUpperCase().includes("REVV")?e.data.prize_total_formatted=e.data.prize_total:e.data.prize_total_formatted=e.data.prize_total.toString()+" $",e})),(e=e.filter((function(e){return!e.data.practice}))).sort((function(e,t){return new Date(t.startTimestamp)-new Date(e.startTimestamp)})),e}var ke=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).BasicTable=Object(s.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("events").then((function(e){t=Pe(t=e.data),r.setEventData(t)})).catch((function(e){console.error(e)}));case 2:return e.next=4,O.get("leaderboards").then((function(e){r.setPrizeData(e.data)})).catch((function(e){console.error(e)}));case 4:case"end":return e.stop()}}),e)}))),r.getREVVPrice=function(){var e=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("price?ids=revv&vs_currencies=usd").then((function(e){r.setREVVPrice(e.data.revv.usd)})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.setWalletPosition=function(e,t){r.setState({walletPositions:e});var a=JSON.parse(JSON.stringify(r.state.columns));(a=a.filter((function(e){return""!==e.field})))[2].hidden=!1,a[3].hidden=!1,a[4].hidden=!1,a[5].hidden=!1,r.setState({columns:a}),r.getREVVPrice();var i=0,n=0,s=0,o=0,l=0,c=0,d=JSON.parse(JSON.stringify(r.state.eventData));d.forEach((function(a){a.REVVReward=0,a.dollarReward=0,a.rank=0;var r=t.reduce((function(e,t){return e+(new Date(t.timeStamp)>=new Date(a.startTimestamp)&&new Date(t.timeStamp)<=new Date(a.endTimestamp))}),0),d=a.prizeData;if(d&&e[a.id]){var u=e[a.id],f=parseInt(u.rank);a.rank=f,a.time=function(e){var t=Math.floor(e/6e4),a=(e%6e4/1e3).toFixed(3);return t+":"+(a<10?"0":"")+a}(e[a.id].time),xe(d,a.data.prize,a.data.splitLeaderboard,a.data.prize_total.toString(),a.data.dynamicPrizePoolRatio);for(var j=a.data.prize,b=void 0,h=0;h<j.length;h++){var p=j[h],v=h+1;if(v===j.length){b=p;break}if(f>=parseInt(p.rank)&&f<parseInt(j[v].rank)){b=p;break}}if(a.unit="REVV",b){var O="";O=u.leaderboard_id.includes("SPLIT")?u.hired?b.hiredPrize:b.ownerPrize:b.prize,"REVV"===b.unit?(a.tries=r,c+=parseFloat(r),r>0&&(l+=1),o+=1,a.REVVReward+=parseFloat(O),a.RewardString=a.REVVReward.toString()+" REVV",i+=parseFloat(O),s+=f):(a.unit="$",a.tries=r,a.dollarReward+=parseFloat(O),n+=parseFloat(O),a.RewardString=a.dollarReward.toString()+" $")}}})),s>0&&i>0?r.setAverages(i/o,s/o,c/l):r.setAverages(0,0),r.setTotalPrizes(i,n,c),r.setEventData(d)},r.getWalletPositions=Object(s.a)(n.a.mark((function e(){var t,a,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.setEventDataLoaded(!1),t={},e.next=4,O.get("walletPositions",{params:{walletAddress:r.state.walletAddress.toUpperCase()}});case 4:return a=(a=e.sent).data,r.state.eventData.forEach((function(e){if(e.data.splitLeaderboard){var r=pe+e.id.toUpperCase()+ve,i=pe+e.id.toUpperCase()+Oe,n=me(a,"leaderboard_id",r),s=me(a,"leaderboard_id",i);n?t[e.id]=n:s&&(s.hired=!0,t[e.id]=s)}else{var o=pe+e.id.toUpperCase(),l=me(a,"leaderboard_id",o);l&&(t[e.id]=l)}})),e.next=9,g.a.get("&address=".concat(r.state.walletAddress)).then((function(e){i=e.data.result,i=r.filterTransactions(i)})).catch((function(e){console.error(e)}));case 9:r.setWalletPosition(t,i);case 10:case"end":return e.stop()}}),e)}))),r.state={eventData:void 0,eventDataLoaded:!1,walletAddress:"",walletPositions:void 0,columns:we,totalREVV:void 0,totalDollars:void 0,totalTries:void 0,REVVPrice:0,averageRank:0,averageREVV:0,averageTries:0},r}return Object(l.a)(a,[{key:"setEventData",value:function(e){this.setState({eventData:e,eventDataLoaded:!0})}},{key:"setEventDataLoaded",value:function(e){this.setState({eventDataLoaded:e})}},{key:"setPrizeData",value:function(e){var t={};e.forEach((function(e){var a=e.leaderboard_id.includes(ve),r=e.leaderboard_id.includes(Oe),i=e.leaderboard_id.replace(pe,"").replace(ve,"").replace(Oe,""),n=parseInt(e.count.$numberLong);a&&(t[i]?t[i].owner=n:t[i]={owner:n}),r&&(t[i]?t[i].hired=n:t[i]={hired:n}),a||r||(t[i]?t[i].total=n:t[i]={total:n}),t[i]&&t[i].hired&&t[i].owner&&(t[i].total=parseInt(t[i].hired)+parseInt(t[i].owner))}));var a=JSON.parse(JSON.stringify(this.state.eventData));a.forEach((function(e){t[e.id.toUpperCase()]&&(e.prizeData=t[e.id.toUpperCase()])})),this.setEventData(a)}},{key:"componentDidMount",value:function(){this.BasicTable()}},{key:"setWalletAddress",value:function(e){this.setState({walletAddress:e,walletPositions:void 0,columns:we,totalREVV:void 0,totalDollars:void 0,totalTries:void 0,REVVPrice:0,averageRank:0,averageREVV:0,averageTries:0})}},{key:"filterWallet",value:function(e){return e.wallet===this.walletAddress}},{key:"setREVVPrice",value:function(e){this.setState({REVVPrice:e})}},{key:"setTotalPrizes",value:function(e,t,a){this.setState({totalREVV:e,totalDollars:t,totalTries:a})}},{key:"filterTransactions",value:function(e){return e=(e=e.filter((function(e){return"REVV"===e.tokenSymbol&&e.to.toUpperCase()==="0x069895FdA566d0364ABEc6e290BeE3D565c55666".toUpperCase()&&"5000000000000000000"===e.value}))).map((function(e){return e.timeStamp=new Date(1e3*e.timeStamp),e}))}},{key:"setAverages",value:function(e,t,a){this.setState({averageREVV:e,averageRank:t,averageTries:a})}},{key:"render",value:function(){var e=this;return Object(be.jsxs)(k.a,{container:!0,spacing:3,children:[Object(be.jsx)(k.a,{item:!0,md:12,xs:12,children:Object(be.jsx)(C.a,{id:"wallet-address",label:"Wallet Address",variant:"outlined",fullWidth:!0,focused:!0,placeholder:"0x000...",onChange:function(t){return e.setWalletAddress(t.target.value)}})}),Object(be.jsx)(k.a,{item:!0,xs:12,alignContent:"center",alignItems:"center",children:Object(be.jsx)(x.a,{color:"primary",fullWidth:!0,variant:"contained",onClick:function(){return e.getWalletPositions()},children:"Get Wallet List"})}),this.state.totalREVV&&Object(be.jsxs)(j.a.Fragment,{children:[Object(be.jsx)(k.a,{item:!0,md:6,xs:12,alignContent:"center",alignItems:"center",children:Object(be.jsx)(C.a,{id:"totalRevv",label:"Total REVV (New Prize Structure)",variant:"outlined",disabled:!0,fullWidth:!0,value:this.state.totalREVV.toFixed(2).toString()+" REVV"+(this.state.REVVPrice?" ("+(this.state.REVVPrice*this.state.totalREVV).toFixed(2).toString()+" $)":"")})}),Object(be.jsx)(k.a,{item:!0,md:6,xs:12,alignContent:"center",alignItems:"center",children:Object(be.jsx)(C.a,{id:"totalDollars",label:"Total Dollars (Old Prize Structure)",variant:"outlined",disabled:!0,fullWidth:!0,value:this.state.totalDollars.toFixed(2).toString()+" $"})})]}),this.state.averageRank>0&&Object(be.jsxs)(j.a.Fragment,{children:[Object(be.jsx)(k.a,{item:!0,md:6,xs:12,alignContent:"center",alignItems:"center",children:Object(be.jsx)(C.a,{id:"averageRank",label:"Average Rank (New Prize Structure)",variant:"outlined",disabled:!0,fullWidth:!0,value:this.state.averageRank.toFixed(0).toString()})}),Object(be.jsx)(k.a,{item:!0,md:6,xs:12,alignContent:"center",alignItems:"center",children:Object(be.jsx)(C.a,{id:"averageREVV",label:"Average REVV Earned (New Prize Structure)",variant:"outlined",disabled:!0,fullWidth:!0,value:this.state.averageREVV.toFixed(2).toString()+" REVV"+(this.state.REVVPrice?" ("+(this.state.REVVPrice*this.state.averageREVV).toFixed(2).toString()+" $)":"")})})]}),this.state.totalTries&&Object(be.jsxs)(j.a.Fragment,{children:[Object(be.jsx)(k.a,{item:!0,md:6,xs:12,alignContent:"center",alignItems:"center",children:Object(be.jsx)(C.a,{id:"totalTries",label:"Total Tries (New Prize Structure)",variant:"outlined",disabled:!0,fullWidth:!0,value:this.state.totalTries.toFixed(0).toString()+" Tries"+(this.state.REVVPrice?" ("+5*this.state.totalTries+" REVV/"+(this.state.REVVPrice*this.state.totalTries*5).toFixed(2).toString()+" $)":"")})}),Object(be.jsx)(k.a,{item:!0,md:6,xs:12,alignContent:"center",alignItems:"center",children:Object(be.jsx)(C.a,{id:"averageTries",label:"Average Tries (New Prize Structure)",variant:"outlined",disabled:!0,fullWidth:!0,value:this.state.averageTries.toFixed(0).toString()+" Tries"+(this.state.REVVPrice?" ("+(5*this.state.averageTries).toFixed(2)+" REVV/"+(this.state.REVVPrice*this.state.averageTries*5).toFixed(2).toString()+" $)":"")})})]}),Object(be.jsx)(k.a,{item:!0,xs:12,children:Object(be.jsx)(h.a,{theme:Object(A.a)(),style:{width:"100%",display:"grid"},title:"REVV Leaderboards",columns:this.state.columns,data:this.state.eventData,icons:ge,isLoading:!this.state.eventDataLoaded,options:{pageSize:10,pageSizeOptions:[5,10,20,{value:this.state.eventData?parseInt(this.state.eventData.length):100,label:"All"}],filtering:!0,selection:!0,search:!1,toolbar:!0,grouping:!0,exportButton:!0},onSelectionChange:function(t){var a=0,r=0,i=0,n=0,s=0,o=0;0===t.length&&(t=e.state.eventData),t.forEach((function(e){a+=parseFloat(e.REVVReward),r+=parseFloat(e.dollarReward),"REVV"===e.unit&&(i+=parseFloat(e.rank),n+=1,o+=e.tries,e.tries&&e.tries>0&&(s+=1))})),i>0&&a>0?e.setAverages(a/n,i/n,o/s):e.setAverages(0,0),e.setTotalPrizes(a,r,o)}})})]})}}]),a}(f.Component)},530:function(e,t,a){"use strict";var r=a(85),i=a.n(r);t.a=i.a.create({baseURL:"https://api.polygonscan.com/api?module=account&action=tokentx&contractaddress=0x70c006878a5a50ed185ac4c87d837633923de296&sort=desc&apikey=NW6MQ4UW5JIEVBH61JW4AK3WY2Q27ZZIM7"})}}]);
//# sourceMappingURL=9.7e93a1d4.chunk.js.map