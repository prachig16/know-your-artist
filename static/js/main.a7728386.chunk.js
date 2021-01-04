(this["webpackJsonpknow-your-artist"]=this["webpackJsonpknow-your-artist"]||[]).push([[0],{30:function(t,e,s){},31:function(t,e,s){},48:function(t,e,s){},49:function(t,e,s){},54:function(t,e,s){"use strict";s.r(e);var a=s(1),i=s(4),r=s.n(i),c=s(23),n=s.n(c),l=(s(30),s(8)),h=s(9),o=s(11),j=s(10),b=(s(31),s(24)),p=s.n(b),d=(s(48),function(t){Object(o.a)(s,t);var e=Object(j.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(a.jsxs)(i.Fragment,{children:[Object(a.jsxs)("div",{className:"displayInfo",children:[Object(a.jsx)("figure",{children:Object(a.jsx)("img",{src:this.props.artistImg,alt:"default for the artist"})}),Object(a.jsxs)("section",{className:"socialInfo",children:[Object(a.jsxs)("ul",{className:"generalInfo",children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{className:"fas fa-headphones-alt"}),Object(a.jsx)("h4",{children:"Name:"})," ",this.props.artistName]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{className:"fas fa-headphones-alt"}),Object(a.jsx)("h4",{children:"Label: "}),this.props.artistLabel?this.props.artistLabel:"Not Available"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{className:"fas fa-headphones-alt"}),Object(a.jsx)("h4",{children:"Formed Year: "}),this.props.artistForm?this.props.artistForm:"Not Available"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{className:"fas fa-headphones-alt"}),Object(a.jsx)("h4",{children:"Style: "}),this.props.artistStyle?this.props.artistStyle:"Not Available"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{className:"fas fa-headphones-alt"}),Object(a.jsx)("h4",{children:"Genre: "}),this.props.artistGenre?this.props.artistGenre:"Not Available"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{className:"fas fa-headphones-alt"}),Object(a.jsx)("h4",{children:"Last FM Link: "}),this.props.artistLastFM?this.props.artistLastFM:"Not Available"]})]}),Object(a.jsx)("nav",{className:"socialMedia",children:Object(a.jsxs)("ul",{children:[""===this.props.artistFB?Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://www.facebook.com/",children:Object(a.jsx)("i",{className:"fab fa-facebook"})})}):Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:this.props.artistFB,children:Object(a.jsx)("i",{className:"fab fa-facebook"})})}),""===this.props.artistTwitter?Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://www.twitter.com/",children:Object(a.jsx)("i",{className:"fab fa-twitter-square"})})}):Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:this.props.artistTwitter,children:Object(a.jsx)("i",{className:"fab fa-twitter-square"})})}),""===this.props.artistWebsite?Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://www.google.com/",children:Object(a.jsx)("i",{className:"fas fa-laptop"})})}):Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:this.props.artistWebsite,children:Object(a.jsx)("i",{className:"fas fa-laptop"})})})]})})]})]}),Object(a.jsxs)("article",{children:[Object(a.jsx)("h3",{children:"Biography: "}),Object(a.jsx)("p",{children:this.props.artistBio})]})]})}}]),s}(i.Component)),u=(s(49),function(t){Object(o.a)(s,t);var e=Object(j.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("form",{action:"",children:[Object(a.jsx)("label",{htmlFor:"newChoice",className:"srOnly",children:"Type the name"}),Object(a.jsx)("input",{type:"text",id:"newChoice",placeholder:"Artist name..",required:!0,onChange:this.props.getInput}),Object(a.jsxs)("div",{className:"selectionButton",children:[Object(a.jsx)("button",{onClick:this.props.getSubmit,children:"Search"}),Object(a.jsx)("a",{href:"./index.html",children:Object(a.jsx)("i",{className:"fas fa-redo"})})]})]})}}]),s}(i.Component)),f=s(13);s(51);f.a.initializeApp({apiKey:"AIzaSyBxitI7WR5-FL5rHXE34cYiJaoA2BR6Wgs",authDomain:"know-your-artist-98df4.firebaseapp.com",databaseURL:"https://know-your-artist-98df4.firebaseio.com",projectId:"know-your-artist-98df4",storageBucket:"know-your-artist-98df4.appspot.com",messagingSenderId:"824222612452",appId:"1:824222612452:web:0a73ff59e1fe815249a5f1"});var O=f.a,m=function(t){Object(o.a)(s,t);var e=Object(j.a)(s);function s(){var t;return Object(l.a)(this,s),(t=e.call(this)).handleInputChange=function(e){t.setState({userSelection:e.target.value})},t.handleInputSubmit=function(e){e.preventDefault(),t.getArtistDetails(t.state.userSelection)},t.getArtistDetails=function(e){p()({url:"https://www.theaudiodb.com/api/v1/json/1/search.php",method:"GET",responseType:"json",params:{s:e}}).then((function(e){null!=e.data.artists?(t.setState({artistsInfo:e.data.artists}),t.pushTheInfo(t.state.artistsInfo[0])):alert("Artist not found! Check the spelling or spaces!")}))},t.pushTheInfo=function(e){var s=O.database().ref(),a=[],i={name:e.strArtist,image:e.strArtistThumb};a.push(i),s.push(a[0]),t.setState({searchedArtists:a})},t.state={artistsInfo:[],userSelection:"",searchedArtists:[],displaySearchResult:[]},t}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var t=this;O.database().ref().on("value",(function(e){var s=e.val(),a=[],i=[];for(var r in s){var c={image:s[r].image,name:s[r].name};a.push(c),i=a.reverse()}t.setState({displaySearchResult:i})}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("h1",{children:"Know your Artist!"}),Object(a.jsx)("button",{className:"goTop",children:Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("i",{className:"fas fa-chevron-circle-up"})})})]}),Object(a.jsxs)("main",{children:[Object(a.jsx)(u,{getInput:this.handleInputChange,getSubmit:this.handleInputSubmit}),Object(a.jsx)("section",{className:"displayArtistInfo",children:this.state.artistsInfo.map((function(t,e){return Object(a.jsx)(d,{artistImg:t.strArtistThumb,artistName:t.strArtist,artistLabel:t.strLabel,artistForm:t.intFormedYear,artistStyle:t.strStyle,artistGenre:t.strGenre,artistBio:t.strBiographyEN,artistFB:t.strFacebook,artistTwitter:t.strTwitter,artistWebsite:t.strWebsite,artistLastFM:t.strLastFMChart},e)}))}),Object(a.jsxs)("section",{className:"searchedInfo",children:[Object(a.jsx)("h2",{children:"Recent Searches:"}),Object(a.jsx)("ul",{children:0===this.state.displaySearchResult.length?Object(a.jsx)("p",{children:"No recent searches."}):this.state.displaySearchResult.map((function(t,e){return Object(a.jsxs)("li",{children:[Object(a.jsx)("img",{src:t.image,alt:"randomimage"}),Object(a.jsx)("p",{children:t.name})]},e)}))})]})]}),Object(a.jsx)("footer",{children:Object(a.jsxs)("p",{children:[" Copyright ",Object(a.jsx)("i",{className:"far fa-copyright"})," ",Object(a.jsx)("a",{href:"https://junocollege.com/",children:"2019 HackerYou"})," | Created by Prachi G."]})})]})}}]),s}(i.Component),x=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,55)).then((function(e){var s=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;s(t),a(t),i(t),r(t),c(t)}))};n.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),x()}},[[54,1,2]]]);
//# sourceMappingURL=main.a7728386.chunk.js.map