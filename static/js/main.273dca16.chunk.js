(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(30)},,,,,,function(e,t,a){},,function(e,t,a){var c={"./crystals1.jpg":18,"./crystals10.jpg":19,"./crystals11.jpg":20,"./crystals12.jpg":21,"./crystals2.jpg":22,"./crystals3.jpg":23,"./crystals4.jpg":24,"./crystals5.jpg":25,"./crystals6.jpg":26,"./crystals7.jpg":27,"./crystals8.jpg":28,"./crystals9.jpg":29};function r(e){var t=s(e);return a(t)}function s(e){var t=c[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(c)},r.resolve=s,e.exports=r,r.id=17},function(e,t,a){e.exports=a.p+"static/media/crystals1.0ef21b22.jpg"},function(e,t,a){e.exports=a.p+"static/media/crystals10.28616a52.jpg"},function(e,t,a){e.exports=a.p+"static/media/crystals11.714315b5.jpg"},function(e,t,a){e.exports=a.p+"static/media/crystals12.ab99c034.jpg"},function(e,t,a){e.exports=a.p+"static/media/crystals2.ef1f852c.jpg"},function(e,t,a){e.exports=a.p+"static/media/crystals3.28d73cdd.jpg"},function(e,t,a){e.exports=a.p+"static/media/crystals4.684712cc.jpg"},function(e,t,a){e.exports=a.p+"static/media/crystals5.6f9cc163.jpg"},function(e,t,a){e.exports=a.p+"static/media/crystals6.01f8456e.jpg"},function(e,t,a){e.exports=a.p+"static/media/crystals7.8a38f13d.jpg"},function(e,t,a){e.exports=a.p+"static/media/crystals8.9ab7e0f6.jpg"},function(e,t,a){e.exports=a.p+"static/media/crystals9.49d51fba.jpg"},function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),s=a(2),n=a.n(s),i=a(6),o=a(3),l=a(4),m=a(7),u=a(5),d=a(8),p=(a(15),function(){return r.a.createElement("div",null,r.a.createElement("h1",null," Crystal Memory Game: ",r.a.createElement("div",{className:"special-class"},"Avoid Clicking Same Image Twice To Win Points! ")))}),f=function(e){return r.a.createElement("div",null,r.a.createElement("h2",{className:"score-info"},"Current Score: ",e.currentScore," | Top Score: ",e.topScore))},g=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{onClick:function(){return e.handleImgClick(e.id)},score:e.score,src:e.image,alt:e.info}))},y=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"custom-footer ui inverted vertical footer segment"},r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{className:"ui stackable inverted divided equal height stackable grid"},r.a.createElement("div",{className:"three wide column"},r.a.createElement("h4",{className:"ui inverted header"},"Links"),r.a.createElement("div",{className:"ui inverted link list"},r.a.createElement("a",{href:"https://www.stmoore.net",className:"item"},"Portfolio"),r.a.createElement("a",{href:"http://www.github.com/melissaintrees",className:"item"},"GitHub"),r.a.createElement("a",{href:"http://www.linkedin.com/in/melissastmoore",className:"item"},"LinkedIn"),r.a.createElement("a",{href:"mailto:melissaintrees@gmail.com",className:"item"},"Say Hello"))),r.a.createElement("div",{className:"seven wide column"},r.a.createElement("h4",{className:"ui inverted header"},"Game made with React by Melissa St Moore | 2019"),r.a.createElement("p",null,"Images were originally hosted on Pinterest and are for demo purposes only."))))))};var v=function(e){var t={};return e.keys().map(function(a){return t[a.replace("./","")]=e(a)}),t}(a(17)),h=[];for(var j in v)h.push(v[j]);var E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={images:[],score:0,topScore:0,clickedImages:[]},a.handleImgClick=function(e){var t=a.state,c=t.score,r=t.clickedImages,s=t.images;r.indexOf(e)<0?a.setState({score:c+1,clickedImages:[].concat(Object(i.a)(r),[e]),images:s.sort(function(){return Math.random()-.5})}):(a.state.score>a.state.topScore&&a.setState({topScore:a.state.score}),a.setState({score:0,clickedImages:[]})),12===c&&a.setState({score:1})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({images:h})}},{key:"randomShuffle",value:function(){this.state.images.sort(function(){return Math.random()-.5})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(f,{currentScore:this.state.score,topScore:this.state.topScore}),r.a.createElement("div",{className:"ui grid custom-grid"},r.a.createElement("div",{className:"ui cards centered"},this.state.images.map(function(t){return r.a.createElement(g,{handleImgClick:e.handleImgClick,image:t,key:t,id:t,info:"crystal spread number ".concat(t)})}))),r.a.createElement(y,null))}}]),t}(r.a.Component);n.a.render(r.a.createElement(E,null),document.querySelector("#root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.273dca16.chunk.js.map