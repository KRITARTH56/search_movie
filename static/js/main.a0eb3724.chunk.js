(this.webpackJsonpreactlive=this.webpackJsonpreactlive||[]).push([[0],{15:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),i=s(8),r=s.n(i),n=(s(7),s(2)),o=s(3),h=s(5),p=s(4),l=s(0),d=function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"viewMovie",value:function(){var e="https://www.themoviedb.org/movie/"+this.props.movie.id;window.location.href=e}},{key:"render",value:function(){return Object(l.jsx)("div",{className:"cards",children:Object(l.jsxs)("div",{className:" card",children:[Object(l.jsx)("img",{alt:"mypic",width:"150",height:"300",className:"card_img",src:this.props.movie.poster_src}),Object(l.jsx)("h3",{className:"card_title",children:this.props.movie.title}),Object(l.jsx)("p",{className:"card_info",style:{paddingLeft:10},children:this.props.movie.overview}),Object(l.jsx)("input",{className:"button",type:"button",onClick:this.viewMovie.bind(this),value:"MORE"})]})},this.props.movie.id)}}]),s}(c.a.Component),v=s(9),m=s.n(v),u=function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state={},a.performSearch("avengers"),a}return Object(o.a)(s,[{key:"performSearch",value:function(e){var t=this,s="https://api.themoviedb.org/3/search/movie?query=marvel&api_key=1b5adf76a72a13bad99b8fc0c68cb085&query="+e;m.a.ajax({url:s,success:function(e){var s=e.results,a=[];s.forEach((function(e){e.poster_src="https://image.tmdb.org/t/p/w185"+e.poster_path,console.log(e.poster_path);var t=Object(l.jsx)(d,{movie:e},e.id);a.push(t)})),t.setState({rows:a})}})}},{key:"searchChangeHandler",value:function(e){var t=e.target.value;this.performSearch(t)}},{key:"render",value:function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"ting",children:[Object(l.jsx)("img",{alt:"my pic",className:"img",width:"50",height:"50",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlZEfieWR2cXzrpmOpKphcAYN4PXIDy3fEg&usqp=CAU"}),Object(l.jsx)("h1",{className:"h1",children:" Movie Review"})]}),Object(l.jsxs)("div",{class:"champ",children:[Object(l.jsx)("input",{type:"text",className:"search",placeholder:"Search Movie",onChange:this.searchChangeHandler.bind(this)}),this.state.rows]})]})})}}]),s}(a.Component);r.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))},7:function(e,t,s){}},[[15,1,2]]]);
//# sourceMappingURL=main.a0eb3724.chunk.js.map