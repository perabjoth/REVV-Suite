(this["webpackJsonprevv-suite"]=this["webpackJsonprevv-suite"]||[]).push([[8],{1322:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var i=n(48),a=n(49),r=n(52),o=n(51),s=n(0),c=n(1318),d=n(1327),l=n(1329),j=n(1306),u=n(1325),h=n(1324),p=n(1328),v=n(898),b=n.n(v),O=n.p+"static/media/Opensea.203348e1.svg",f=n(1320),m=n(1330),x=n(3),y=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={preview:!1,loadingIframe:!1},a}return Object(a.a)(n,[{key:"setPreview",value:function(e){this.setState({preview:e,loadingIframe:e})}},{key:"setLoadingIframe",value:function(e){this.setState({loadingIframe:e})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return Object(x.jsxs)(c.a,{children:[Object(x.jsxs)(d.a,{expandIcon:Object(x.jsx)(b.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:[Object(x.jsx)(f.a,{src:O})," ",Object(x.jsx)(p.a,{variant:"h4",noWrap:!0,component:"div",children:"\xa0REVV NFT Collection"})]}),Object(x.jsxs)(l.a,{style:{display:"block"},children:[Object(x.jsxs)(h.a,{container:!0,spacing:3,children:[!this.state.preview&&Object(x.jsx)(h.a,{item:!0,md:6,xs:6,children:Object(x.jsx)(u.a,{color:"primary",fullWidth:!0,variant:"contained",onClick:function(){return e.setPreview(!0)},children:"Preview Collection"})}),Object(x.jsx)(h.a,{item:!0,md:this.state.preview?12:6,xs:this.state.preview?12:6,children:Object(x.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://opensea.io/collection/revv-motorsport-inventory",style:{textDecoration:"none"},children:Object(x.jsx)(u.a,{color:"primary",fullWidth:!0,variant:"contained",children:"View Opensea Collection"})})})]}),this.state.loadingIframe&&Object(x.jsx)(h.a,{container:!0,spacing:3,children:Object(x.jsx)(h.a,{item:!0,md:12,xs:12,children:Object(x.jsxs)(j.a,{sx:{width:"100%"},children:[Object(x.jsx)(p.a,{variant:"h4",noWrap:!0,component:"div",align:"center",children:"Loading..."}),Object(x.jsx)(m.a,{color:"secondary",fullWidth:!0})]})})}),this.state.preview&&Object(x.jsx)(h.a,{container:!0,spacing:3,children:Object(x.jsx)(h.a,{item:!0,md:12,xs:12,children:Object(x.jsx)("iframe",{src:"https://opensea.io/collection/revv-motorsport-inventory?embed=true",width:"100%",height:"1000px",title:"opensea",onLoad:function(){return e.setLoadingIframe(!1)},frameborder:"0",style:{display:this.state.loadingIframe?"none":""},allowfullscreen:!0})})})]})]})}}]),n}(s.Component),g=n(111),w=n.n(g),k=n(128),C=n(899),I=n.n(C),V=n(903),L=n(327),D={height:n(917).isMobile?"320":"640",width:"100%",playerVars:{autoplay:0}},R=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).searchYoutube=Object(k.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={q:"REVV Racing",part:"snippet",type:"video",order:"date",maxResults:10},e.next=3,I()("AIzaSyCVf-RD5wQBDOdROwBT2AozbDcrZHwQdrM",t).then((function(e){a.setVideoComponent(a.generateVideos(e.items)),a.setVideosLoaded(!0)})).catch((function(e){console.error(e)}));case 3:case 4:case"end":return e.stop()}}),e)}))),a.state={videosLoaded:!1,videoComponent:void 0},a}return Object(a.a)(n,[{key:"setVideosLoaded",value:function(e){this.setState({videosLoaded:e})}},{key:"setVideoComponent",value:function(e){this.setState({videoComponent:e})}},{key:"generateVideos",value:function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n];t.push(Object(x.jsx)(L.a,{container:!0,spacing:3,children:Object(x.jsx)(L.a,{item:!0,md:12,xs:12,alignContent:"center",alignItems:"center",children:Object(x.jsx)(V.a,{videoId:i.id.videoId,opts:D},i.id.videoId)})}))}return t}},{key:"componentDidMount",value:function(){this.searchYoutube()}},{key:"render",value:function(){return Object(x.jsx)("div",{children:this.state.videosLoaded&&this.state.videoComponent})}}]),n}(s.Component),S=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("br",{}),Object(x.jsx)(y,{}),Object(x.jsx)("br",{}),Object(x.jsx)(R,{})]})}}]),n}(s.Component)}}]);
//# sourceMappingURL=8.10a51e7e.chunk.js.map