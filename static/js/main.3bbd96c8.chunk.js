(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,n){var a={".":4,"./":4,"./Image":20,"./Image.js":20,"./ImageVeil":21,"./ImageVeil.js":21,"./imageAssets/ancestral-map.jpg":120,"./imageAssets/portraits.jpg":121,"./index":4,"./index.js":4};function i(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=119},120:function(e,t,n){e.exports=n.p+"static/media/ancestral-map.d04420a2.jpg"},121:function(e,t,n){e.exports=n.p+"static/media/portraits.c29e8623.jpg"},122:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(49),c=n.n(r),s=n(50),o=n.n(s),l=n(3),m=n.n(l),h=n(13),p=n.n(h),u=n(11),g=n(6),d=n(7),f=n(9),y=n(8),v=n(10),b=n(30),w=function(){var e={};return function(t){return t in e?e[t]:e[t]=p()()}},x=w(),E=w(),j=function(){return i.a.createElement("filter",{id:"drop-shadow-filter",height:"130%"},i.a.createElement("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"7"}),i.a.createElement("feOffset",{dx:"1",dy:"8",result:"offsetblur"}),i.a.createElement("feComponentTransfer",null,i.a.createElement("feFuncA",{type:"linear",slope:"0.5"})),i.a.createElement("feMerge",null,i.a.createElement("feMergeNode",null),i.a.createElement("feMergeNode",{in:"SourceGraphic"})))},I=n(4),O=n(53),k=n(14),A=function(e,t){return Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every(function(n){return t.hasOwnProperty(n)&&e[n]===t[n]})},S=function(e){return function(t){function n(){var e,t;Object(g.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(f.a)(this,(e=Object(y.a)(n)).call.apply(e,[this].concat(i)))).state={x:0,y:0},t}return Object(v.a)(n,t),Object(d.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this;if(!A(e.dims,this.props.dims)){var n=e.dims,a=n.x,i=n.y,r=n.width,c=void 0===r?0:r,s=n.height,o=void 0===s?0:s,l=this.props.dims,m=l.x,h=l.y,p=l.width,u=void 0===p?0:p,g=l.height,d=void 0===g?0:g,f=Object(k.a)(a,m),y=Object(k.a)(i,h),v=Object(k.a)(c,u),b=Object(k.a)(o,d),w=null;window.requestAnimationFrame(function e(n){var a=n-(w||(w=n));if(a<300){var i=a/300;t.setState({x:f(i),y:y(i),width:v(i),height:b(i)}),window.requestAnimationFrame(e)}else t.setState({x:m,y:h,width:u,height:d})})}}},{key:"render",value:function(){return i.a.createElement(e,Object.assign({},this.props,{dims:Object(O.a)({},this.props.dims,this.state)}))}}]),n}(a.Component)},L=S(function(e){var t=e.graphicId,n=e.dims;return i.a.createElement("clipPath",{id:x(t)},i.a.createElement("rect",Object.assign({},n,{rx:3,ry:3})))}),N=function(e){var t=e.graphicId;return i.a.createElement("use",{xlinkHref:"#".concat(E(t)),clipPath:"url(#".concat(x(t),")")})},T='500 1rem "Atlas Grotesk"',X={frontText:{font:T,fill:"#fff",transitionDuration:"0.3s"},backText:{font:T,stroke:"#333",strokeWidth:2,opacity:.8,strokeLinejoin:"round",strokeLinecap:"round"}},D=S(m()(X)(function(e){var t=e.classes,n=e.text,r=e.dims,c=(r.width,r.height,Object(u.a)(r,["width","height"]));e.transform;return i.a.createElement(a.Fragment,null,i.a.createElement("text",Object.assign({className:t.backText},c),n),i.a.createElement("text",Object.assign({className:t.frontText},c),n))})),W=function(e){e.classes;var t=e.clipDims,n=e.text,a=t.x,r=t.y,c=t.height,s={x:a,y:r};return r>12?s.y-=10:s.y+=c+6,i.a.createElement(D,{dims:s,text:n})},C=1.46875,F={top:20,right:20,bottom:24,left:20},H=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(i)))).state={height:null,leftImgX:null,rightImgX:null,imgY:null,imgWidth:null,imgHeight:null},n.updateDimensions=function(){var e=document.body.clientWidth,t=n.state.imgHeight/C;n.setState({leftImgX:e/2-t,rightImgX:e/2,imgY:F.top,imgWidth:t})},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.updateDimensions()},0);var t=window.innerHeight;this.setState({height:t,imgHeight:t-F.top-F.bottom})}},{key:"render",value:function(){var e=this.state,t=e.height,n=e.leftImgX,a=e.rightImgX,r=e.imgY,c=e.imgWidth,s=e.imgHeight,o=this.props,l=o.graphicId,m=o.leftImg,h=o.rightImg,p=o.clip,g=p.clipLabel,d={leftX:n,rightX:a,y:r,width:c,height:s},f=function(e,t){var n=e.leftX,a=e.y,i=e.width,r=e.height;return{x:n+t.x*i,y:a+t.y*i,width:t.w*i,height:t.h*r}}(d,Object(u.a)(p,["clipLabel"]));return i.a.createElement("svg",{width:document.body.clientWidth,height:t},i.a.createElement(j,null),i.a.createElement("defs",null,i.a.createElement(L,{dims:f,graphicId:l})),i.a.createElement("g",{id:E(l),style:{filter:"url(#".concat("drop-shadow-filter",")")}},i.a.createElement(I.Image,{dims:d,name:m,leftSide:!0}),i.a.createElement(I.Image,{dims:d,name:h})),i.a.createElement(I.ImageVeil,{dims:d}),i.a.createElement(N,{graphicId:l}),i.a.createElement(W,{clipDims:f,text:g}))}}]),t}(a.Component),M=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(i)))).state={clip:{clipLabel:"",x:0,y:0,w:0,h:0}},n.onStepEnter=function(e){var t=e.data,a=(t.text,Object(u.a)(t,["text"]));A(n.state.clip,a)||n.setState({clip:a})},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.clip,t=this.props,n=t.classes,a=t.id,r=t.leftImg,c=t.rightImg,s=t.steps;return i.a.createElement("div",{className:n.Graphic},i.a.createElement("figure",{className:n.sticky},i.a.createElement(H,{graphicId:a,leftImg:r,rightImg:c,clip:e})),i.a.createElement("article",{className:n.steps},i.a.createElement(b.Scrollama,{onStepEnter:this.onStepEnter,offset:.33},s.map(function(e){return i.a.createElement(b.Step,{key:e.text,data:e},i.a.createElement("div",{className:n.step},i.a.createElement("p",{className:n.stepText},e.text)))}))))}}]),t}(a.PureComponent),G=m()({Graphic:{marginBottom:"70vh"},sticky:{position:"sticky",top:0},steps:{padding:"0 5vw 130vh 5vw"},step:{position:"relative",backgroundColor:"#fff",boxShadow:"0 5px 15px 0 rgba(0,0,0,0.41)",margin:"0 auto 70vh auto",maxWidth:"500px","&:last-child":{marginBottom:0}},stepText:{textAlign:"center",color:"#222",padding:"1rem",fontSize:"1.1rem",fontFamily:"Merriweather",fontWeight:400,lineHeight:"1.9rem"}})(M),B=o.a.load("\n[graphics]\n\nleftImg: ancestral-map.jpg\nrightImg: portraits.jpg\n\n[.steps]\n\ntext: I was joining the ranks of millions of American who have dug into their personal histories.\nx: 0.5\ny: 0.5\nw: 0.4\nh: 0.4\nclipLabel: Ancestral map\n\ntext: The popular 1976 miniseries Roots had launched a genealogy craze that swept across the continent and sent many on a quest to find their family roots.\nx: 0.5\ny: 0.5\nw: 0.5\nh: 0.6\nclipLabel: Family portrait\n\ntext: In recent years, genetic biology has become increasingly important in the story arc of American popular genealogy.\nx: 1.6\ny: 0.1\nw: 0.3\nh: 0.7\nclipLabel: Great poem\n\n[]\n\nleftImg: portraits.jpg\nrightImg: ancestral-map.jpg\n\n[.steps]\n\ntext: The Fulton Center looks like where they launch rockets from Kennedy Space Center.\nx: 0.5\ny: 0.5\nw: 0.4\nh: 0.4\nclipLabel: Clip label\n\ntext: Are whiteboards with glass on them really whiteboards? They\u2019re pretty sick though.\nx: 0.5\ny: 0.5\nw: 0.5\nh: 0.6\nclipLabel: My glasses\n\ntext: In recent years, genetic biology has become increasingly important in the story arc of American popular genealogy.\nx: 1.6\ny: 0.1\nw: 0.3\nh: 0.7\nclipLabel: Fell :(\n\n[]\n\n{}\n").graphics,P=function(e){return e.map(function(e){return{text:e.text,x:+e.x,y:+e.y,w:+e.w,h:+e.h,clipLabel:e.clipLabel}})},V=m()({App:{marginTop:"70vh"}})(function(e){var t=e.classes;return i.a.createElement("div",{className:t.App},B.map(function(e){var t=e.leftImg,n=e.rightImg,a=e.steps,r=p()();return i.a.createElement(G,{key:r,id:r,leftImg:t,rightImg:n,steps:P(a)})}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},20:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a);t.default=function(e){var t=e.dims,a=e.name,r=e.leftSide,c=void 0!==r&&r,s=t.leftX,o=t.rightX,l=t.y,m=t.width,h=t.height;return i.a.createElement("image",{x:c?s:o,y:l,width:m,height:h,xlinkHref:n(119)("".concat("./imageAssets","/").concat(a))})}},21:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(3),c=n.n(r);t.default=c()({mask:{fill:"#000",fillOpacity:.35}})(function(e){var t=e.classes,n=e.dims,a=n.leftX,r=n.y,c=n.width,s=n.height;return i.a.createElement("rect",{className:t.mask,x:a,y:r,width:2*c,height:s})})},4:function(e,t,n){"use strict";n.r(t);var a=n(20);n.d(t,"Image",function(){return a.default});var i=n(21);n.d(t,"ImageVeil",function(){return i.default})},54:function(e,t,n){e.exports=n(122)}},[[54,1,2]]]);
//# sourceMappingURL=main.3bbd96c8.chunk.js.map