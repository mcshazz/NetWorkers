(window.webpackJsonpworkingplaygroundd=window.webpackJsonpworkingplaygroundd||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/accountant3.35479836.jpg"},101:function(e,t,a){e.exports=a.p+"static/media/networking.30fc6ca6.png"},104:function(e,t,a){e.exports=a(206)},109:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),i=a.n(r),c=(a(109),a(70),a(12)),o=a(13),s=a(15),m=a(14),u=a(16),d=a(27),p=a.n(d),g=(a(38),a(6)),h=a(86),b=a.n(h),E=a(87),f=a.n(E),y=a(88),w=a.n(y),v=a(89),j=a.n(v),I=a(90),O=a.n(I),N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onSlideChange",value:function(e){console.log("Item`s position during a change: ",e.item),console.log("Slide`s position during a change: ",e.slide)}},{key:"onSlideChanged",value:function(e){console.log("Item`s position after changes: ",e.item),console.log("Slide`s position after changes: ",e.slide)}},{key:"render",value:function(){return l.a.createElement("div",{className:"mainCarouselWrapper"},l.a.createElement(p.a,{duration:400,autoPlay:!0,startIndex:3,fadeOutAnimation:!0,mouseDragEnabled:!0,playButtonEnabled:!0,responsive:{0:{items:1},600:{items:1},900:{items:2},1024:{items:3}},autoPlayInterval:2e3,autoPlayDirection:"rtl",autoPlayActionDisabled:!0,onSlideChange:this.onSlideChange,onSlideChanged:this.onSlideChanged},l.a.createElement("div",{className:"Mypicsclass"},l.a.createElement(g.b,{to:"/designers"},l.a.createElement("figure",null,l.a.createElement("img",{className:"carimages",src:O.a,alt:"designer"}),l.a.createElement("figcaption",null,"Designer")))),l.a.createElement("div",{className:"Mypicsclass"},l.a.createElement(g.b,{to:"/builders"},l.a.createElement("figure",null,l.a.createElement("img",{className:"carimages",src:w.a,alt:"builder"}),l.a.createElement("figcaption",null,"Builders")))),l.a.createElement("div",{className:"Mypicsclass"},l.a.createElement(g.b,{to:"/about"},l.a.createElement("figure",null,l.a.createElement("img",{className:"carimages",src:j.a,alt:"chef"}),l.a.createElement("figcaption",null,"Chef")))),l.a.createElement("div",{className:"Mypicsclass"},l.a.createElement(g.b,{to:"/about"},l.a.createElement("figure",null,l.a.createElement("img",{className:"carimages",src:f.a,alt:"accountant"}),l.a.createElement("figcaption",null,"Accountant")))),l.a.createElement("div",{className:"Mypicsclass"},l.a.createElement(g.b,{to:"/about"},l.a.createElement("figure",null,l.a.createElement("img",{className:"carimages",src:b.a,alt:"clown"}),l.a.createElement("figcaption",null,"Clown"))))))}}]),t}(l.a.Component),k=a(17),x=a(68),C=a(92),M=a(44),S=a(26),B=a(10),T=a(33),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).scrollToTop=a.scrollToTop.bind(Object(S.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){B.Events.scrollEvent.register("begin",(function(){console.log("begin",arguments)})),B.Events.scrollEvent.register("end",(function(){console.log("end",arguments)}))}},{key:"scrollToTop",value:function(){B.animateScroll.scrollToTop()}},{key:"scrollToBottom",value:function(){B.animateScroll.scrollToBottom()}},{key:"scrollTo",value:function(){B.scroller.scrollTo("myel",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"scrollToWithContainer",value:function(){new Promise((function(e,t){B.Events.scrollEvent.register("end",(function(){e(),B.Events.scrollEvent.remove("end")})),B.scroller.scrollTo("scroll-container",{duration:800,delay:0,smooth:"easeInOutQuart"})})).then((function(){return B.scroller.scrollTo("scroll-container-second-element",{duration:800,delay:0,smooth:"easeInOutQuart",containerId:"scroll-container"})}))}},{key:"componentWillUnmount",value:function(){B.Events.scrollEvent.remove("begin"),B.Events.scrollEvent.remove("end")}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"bouncer"},l.a.createElement("a",{to:"myel",onClick:function(){return e.scrollTo()}},l.a.createElement(T.a,{icon:"chevron-down",style:{color:"#2976B4"}}))))}}]),t}(l.a.Component);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _(e){var t=e.iswhom,a=Object(n.useState)(0),r=Object(x.a)(a,2),i=r[0],c=r[1],o=Object(n.useState)(!1),s=Object(x.a)(o,2),m=s[0],u=s[1],d=Object(n.useCallback)((function(e,t){t.photo;var a=t.index;c(a),u(!0)}),[]);return l.a.createElement("div",{className:"Lwrapperdiv"},l.a.createElement("div",{className:"colmdiv"},l.a.createElement(C.a,{photos:t,onClick:d}),l.a.createElement(M.b,null,m?l.a.createElement(M.a,{onClose:function(){c(0),u(!1)}},l.a.createElement(M.c,{currentIndex:i,views:t.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(k.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{srcset:e.srcSet,caption:e.title})}))})):null)))}var W=[{src:"https://jnqf0ri191-flywheel.netdna-ssl.com/wp-content/uploads/2018/05/Jimi_Hendrix_by_MonsterOfTheID.jpg",width:1,height:1},{src:"https://jnqf0ri191-flywheel.netdna-ssl.com/wp-content/uploads/2018/05/Michael_Jackson_The_King_by_Victor_Cavalera.jpg",width:1,height:1},{src:"https://jnqf0ri191-flywheel.netdna-ssl.com/wp-content/uploads/2018/05/Just_Smile_by_Dark83.jpg",width:1,height:1},{src:"https://jnqf0ri191-flywheel.netdna-ssl.com/wp-content/uploads/2018/05/Future_Reflections_by_Patrick_Monkel.jpg",width:1,height:1}],J=[{src:"http://www.i-maxinfotech.com/images/Graphic-Design..jpg",width:1,height:1},{src:"http://fc06.deviantart.net/fs71/f/2010/209/e/d/Graphic_Design_by_DaNNyTR.jpg",width:1,height:1},{src:"https://www.prestigeacademy.co.za/wp-content/uploads/2018/11/011-Graphic-Design-1.jpg",width:1,height:1},{src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f91b7c0-fa6f-4cfd-9a5d-639a7e206906/ddd42kl-b63ebf2f-e350-4291-a471-4fa5f1dcb7a9.jpg/v1/fill/w_900,h_567,q_75,strp/before_you_start_a_war_by_kawacy_ddd42kl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTY3IiwicGF0aCI6IlwvZlwvMWY5MWI3YzAtZmE2Zi00Y2ZkLTlhNWQtNjM5YTdlMjA2OTA2XC9kZGQ0MmtsLWI2M2ViZjJmLWUzNTAtNDI5MS1hNDcxLTRmYTVmMWRjYjdhOS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Bl6lttcN5GpFZ3YlPJE9TUsG7wxtSuG8dhFxHFDc5xI",width:1,height:1}],H=[{src:"https://www.bing.com/th?id=OIP.K_9cI1IGRpAto6KlWd0xuAHaEK&pid=Api&rs=1",width:1,height:1,key:"hehe"},{src:"http://fc06.deviantart.net/fs71/f/2012/285/4/2/bird_chimera_by_metalparts-d5hleav.jpg",width:1,height:1,key:"lol"},{src:"https://s.ecrater.com/stores/435134/5b456677e30f2_435134b.jpg",width:1,height:1,key:"blah"},{src:"http://www.nbn.org.il/wp-content/uploads/2010/04/graphicdesign-cropped.jpg",width:1,height:1,key:"hjj"}],P=[{src:"https://images.unsplash.com/photo-1552903023-dc7b4c9fa5bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",width:1,height:1},{src:"https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",width:1,height:1},{src:"https://images.unsplash.com/photo-1508330570239-ce7cabceee22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2312&q=80",width:1,height:1},{src:"http://maineconstructioncompany.com/wp-content/uploads/2016/10/QW-House_01.jpg",width:1,height:1}],z=[{src:"https://images.unsplash.com/photo-1543525324-9146d43c2a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",width:1,height:1},{src:"https://images.unsplash.com/photo-1551711974-faf378be34b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",width:1,height:1},{src:"https://images.unsplash.com/photo-1558464678-2f1570e8d60e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=955&q=80",width:1,height:1},{src:"https://images.unsplash.com/photo-1482731215275-a1f151646268?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",width:1,height:1}],Q=[{src:"https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",width:1,height:1,key:"hehe"},{src:"./b1.jpg",width:1,height:1,key:"lol"},{src:"./b2.jpg",width:1,height:1,key:"blah"},{src:"./b3.jpg",width:1,height:1,key:"hjj"}];var G=function(e){var t=e.iswho;return"Mark"===t?l.a.createElement(_,{iswhom:P}):"Bob"===t?l.a.createElement(_,{iswhom:z}):"Alan"===t?l.a.createElement(_,{iswhom:Q}):"designer1"===t?l.a.createElement(_,{iswhom:W}):"designer2"===t?l.a.createElement(_,{iswhom:J}):"designer3"===t?l.a.createElement(_,{iswhom:H}):void 0},F=a(35);var Y=function(e){return l.a.createElement("ul",{style:{fontWeight:"900"}},"First Name: ",l.a.createElement("span",{className:"light"},e.bio.firstName)," ",l.a.createElement("br",null),"Last Name: ",l.a.createElement("span",{className:"light"}," ",e.bio.lastName," "),l.a.createElement("br",null),"Rating: ",e.bio.rating," ",l.a.createElement("br",null),"Phone: ",l.a.createElement("span",{className:"light"}," ",e.bio.phone),l.a.createElement("br",null),"E-Mail: ",l.a.createElement("span",{className:"light"},e.bio.email),l.a.createElement("br",null),l.a.createElement("div",{className:"bouncercontainer"},l.a.createElement(D,null)),l.a.createElement("br",null),e.bio.blurb,l.a.createElement("br",null))},q=a(42),Z=a.n(q),X=a(61),L=a.n(X),V=a(62),R=a.n(V),K=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).items=[1,2,3,4,5],a.state={currentIndex:0,responsive:{1024:{items:1}},galleryItems:a.galleryItems()},a.slideTo=function(e){return a.setState({currentIndex:e})},a.onSlideChanged=function(e){return a.setState({currentIndex:e.item})},a.slideNext=function(){return a.setState({currentIndex:a.state.currentIndex+1})},a.slidePrev=function(){return a.setState({currentIndex:a.state.currentIndex-1})},a.thumbItem=function(e,t){return l.a.createElement("span",{onClick:function(){return a.slideTo(t)}})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onInitialized",value:function(e){i.a.render(l.a.createElement(Y,{bio:{firstName:"Mark",lastName:"Doe",rating:"\u2b50 \u2b50",phone:"605 784 8001",email:"Mark@gmail.com",blurb:"Hey I'm Mark and welcome to my bio"}}),document.getElementById("bioelement")),i.a.render(l.a.createElement(G,{iswho:"Mark"}),document.getElementById("mybotelement"))}},{key:"onSlideChange",value:function(e){console.log("Item`s position during a change: ",e.item),2===e.item?(console.log("now its Mark"),i.a.render(l.a.createElement(Y,{bio:{firstName:"Mark",lastName:"Doe",rating:"\u2b50 \u2b50",phone:"605 784 8001",email:"Mark@gmail.com",blurb:["Hey there, I'm Mark and I'd love to come and help with your building project.",l.a.createElement("br",null),"I have over 20 years experience in the building industry,",l.a.createElement("br",null),"both commercial and residential.",l.a.createElement("br",null),"I run my own company called LandMark Construction and we've",l.a.createElement("br",null),"built some of the most visually appealing houses in the neighbourhood",l.a.createElement("br",null),"Check out my portfolio and testimonals to see for yourself!"]}}),document.getElementById("bioelement")),i.a.render(l.a.createElement(G,{iswho:"Mark"}),document.getElementById("mybotelement"))):0===e.item?(console.log("now its Bob"),i.a.render(l.a.createElement(Y,{bio:{firstName:"Bob",lastName:"Smith",rating:"\u2b50 \u2b50 \u2b50 \u2b50",phone:"086 779 0230",email:"bob@gmail.com",blurb:"Hey I'm Bob and welcome to my bio"}}),document.getElementById("bioelement")),i.a.render(l.a.createElement(G,{iswho:"Bob"}),document.getElementById("mybotelement"))):1===e.item&&(console.log("now its Al"),i.a.render(l.a.createElement(Y,{bio:{firstName:"Alan",lastName:"Johnson",rating:"\u2b50 ",phone:"778 768 9982",email:"al@gmail.com",blurb:"Hey I'm Al and welcome to my bio"}}),document.getElementById("bioelement")),i.a.render(l.a.createElement(G,{iswho:"Alan"}),document.getElementById("mybotelement")))}},{key:"galleryItems",value:function(){return this.items.map((function(e){return l.a.createElement("h2",{key:e}," ",e)}))}},{key:"render",value:function(){var e,t=this,a=this.state,n=a.galleryItems,r=a.responsive,i=a.currentIndex;return l.a.createElement("div",null,l.a.createElement(p.a,(e={dotsDisabled:!0,buttonsDisabled:!1,items:n,responsive:r,slideToIndex:i,onSlideChanged:this.onSlideChanged,onSlideChange:this.onSlideChange},Object(k.a)(e,"items",this.state.galleryItems),Object(k.a)(e,"ref",(function(e){return t.Carousel=e})),Object(k.a)(e,"onInitialized",this.onInitialized),e),l.a.createElement("div",{className:"Mypicsclass"},l.a.createElement("figure",null,l.a.createElement("img",{className:"carimages",src:Z.a,alt:"Mark"}),l.a.createElement("figcaption",null," Markoo "))),l.a.createElement("div",{className:"Mypicsclass"},l.a.createElement("figure",null,l.a.createElement("img",{className:"carimages",src:L.a,alt:"Bob"}),l.a.createElement("figcaption",null," Bob"))),l.a.createElement("div",{className:"Mypicsclass"},l.a.createElement("figure",null,l.a.createElement("img",{className:"carimages",src:R.a,alt:"Alan"}),l.a.createElement("figcaption",null," Alan")))),l.a.createElement("div",{id:"bioelement"}),l.a.createElement("div",{id:"mybotelement"}),l.a.createElement(B.Element,{name:"myel",className:"element"}))}}]),t}(l.a.Component),U=a(95),$=a.n(U),ee=a(96),te=a.n(ee),ae=a(97),ne=a.n(ae),le=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).items=[1,2,3,4,5],a.state={currentIndex:0,responsive:{1024:{items:1}},galleryItems:a.galleryItems()},a.slideTo=function(e){return a.setState({currentIndex:e})},a.onSlideChanged=function(e){return a.setState({currentIndex:e.item})},a.slideNext=function(){return a.setState({currentIndex:a.state.currentIndex+1})},a.slidePrev=function(){return a.setState({currentIndex:a.state.currentIndex-1})},a.thumbItem=function(e,t){return l.a.createElement("span",{onClick:function(){return a.slideTo(t)}})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onInitialized",value:function(e){i.a.render(l.a.createElement(Y,{bio:{firstName:"Alaina",lastName:"Toop",rating:"\u2b50 \u2b50",phone:"605 784 8001",email:"A.toop@alainadesign.com",blurb:"Hey I'm Alaina and welcome to my bio"}}),document.getElementById("bioelement")),i.a.render(l.a.createElement(G,{iswho:"designer1"}),document.getElementById("mybotelement"))}},{key:"onSlideChange",value:function(e){console.log("Item`s position during a change: ",e.item),2===e.item?(console.log("now its Alaina"),i.a.render(l.a.createElement(Y,{bio:{firstName:"Alaina",lastName:"Toop",rating:"\u2b50 \u2b50",phone:"605 784 8001",email:"A.toop@alainadesign.com",blurb:"Hey I'm Alaina and welcome to my bio"}}),document.getElementById("bioelement")),i.a.render(l.a.createElement(G,{iswho:"designer1"}),document.getElementById("mybotelement"))):0===e.item?(console.log("now its Edward"),i.a.render(l.a.createElement(Y,{bio:{firstName:"Edward",lastName:"Smith",rating:"\u2b50 \u2b50 \u2b50 \u2b50",phone:"086 779 0230",email:"eddys@gmail.com",blurb:"Hey I'm Eddy and welcome to my bio"}}),document.getElementById("bioelement")),i.a.render(l.a.createElement(G,{iswho:"designer2"}),document.getElementById("mybotelement"))):1===e.item&&(console.log("now its Florence"),i.a.render(l.a.createElement(Y,{bio:{firstName:"Florence",lastName:"Johnson",rating:"\u2b50 ",phone:"778 768 9982",email:"florenceJ@gmail.com",blurb:"Hey I'm Florence and welcome to my bio"}}),document.getElementById("bioelement")),i.a.render(l.a.createElement(G,{iswho:"designer3"}),document.getElementById("mybotelement")))}},{key:"galleryItems",value:function(){return this.items.map((function(e){return l.a.createElement("h2",{key:e}," ",e)}))}},{key:"render",value:function(){var e,t=this,a=this.state,n=a.galleryItems,r=a.responsive,i=a.currentIndex;return l.a.createElement("div",null,l.a.createElement(p.a,(e={dotsDisabled:!0,buttonsDisabled:!1,items:n,responsive:r,slideToIndex:i,onSlideChanged:this.onSlideChanged,onSlideChange:this.onSlideChange},Object(k.a)(e,"items",this.state.galleryItems),Object(k.a)(e,"ref",(function(e){return t.Carousel=e})),Object(k.a)(e,"onInitialized",this.onInitialized),e),l.a.createElement("div",{className:"Mypicsclass"},l.a.createElement("figure",null,l.a.createElement("img",{className:"carimages",src:$.a,alt:"Alaina"}),l.a.createElement("figcaption",null," Alaina "))),l.a.createElement("div",{className:"Mypicsclass"},l.a.createElement("figure",null,l.a.createElement("img",{className:"carimages",src:te.a,alt:"Edward"}),l.a.createElement("figcaption",null," Edward"))),l.a.createElement("div",{className:"Mypicsclass"},l.a.createElement("figure",null,l.a.createElement("img",{className:"carimages",src:ne.a,alt:"Florence"}),l.a.createElement("figcaption",null," Florence ")))),l.a.createElement("div",{id:"bioelement"}),l.a.createElement("div",{id:"mybotelement"}),l.a.createElement(B.Element,{name:"myel",className:"element"}))}}]),t}(l.a.Component);var re=function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("img",{src:"https://tpm-inc.com/wp-content/uploads/under-construction-logo.gif"}),l.a.createElement((function(){return l.a.createElement("button",null,"Hello world")}),null),l.a.createElement("img",{src:"https://tpm-inc.com/wp-content/uploads/under-construction-logo.gif"}),l.a.createElement("img",{src:"https://tpm-inc.com/wp-content/uploads/under-construction-logo.gif"}),l.a.createElement("img",{src:"https://tpm-inc.com/wp-content/uploads/under-construction-logo.gif"}),l.a.createElement("img",{src:"https://tpm-inc.com/wp-content/uploads/under-construction-logo.gif"}))};var ie=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"About"),l.a.createElement("p",null,"Coming Soonhbkjbk!"),l.a.createElement("div",{className:"bouncer"}," V "),l.a.createElement("img",{src:"https://tpm-inc.com/wp-content/uploads/under-construction-logo.gif"}),l.a.createElement("img",{src:"https://tpm-inc.com/wp-content/uploads/under-construction-logo.gif"}),l.a.createElement("img",{src:"https://tpm-inc.com/wp-content/uploads/under-construction-logo.gif"}),l.a.createElement("div",{className:"myverybot"},"here's the bottom"),l.a.createElement(B.Element,{name:"test1",className:"element"},"test 1"))},ce=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).items=[1,2,3,4,5],a.state={currentIndex:0,responsive:{1024:{items:1}},galleryItems:a.galleryItems()},a.slideTo=function(e){return a.setState({currentIndex:e})},a.onSlideChanged=function(e){return a.setState({currentIndex:e.item})},a.slideNext=function(){return a.setState({currentIndex:a.state.currentIndex+1})},a.slidePrev=function(){return a.setState({currentIndex:a.state.currentIndex-1})},a.thumbItem=function(e,t){return l.a.createElement("span",{onClick:function(){return a.slideTo(t)}})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onSlideChange",value:function(e){console.log("Item`s position during a change: ",e.item),console.log("slide",e.slide)}},{key:"galleryItems",value:function(){return this.items.map((function(e){return l.a.createElement("h2",{key:e}," ",e)}))}},{key:"render",value:function(){var e,t=this,a=(this.props.whoseprofile,this.state),n=a.galleryItems,r=a.responsive,i=a.currentIndex;return l.a.createElement("div",null,l.a.createElement(p.a,(e={dotsDisabled:!0,buttonsDisabled:!1,items:n,responsive:r,slideToIndex:i,onSlideChanged:this.onSlideChanged},Object(k.a)(e,"items",this.state.galleryItems),Object(k.a)(e,"ref",(function(e){return t.Carousel=e})),Object(k.a)(e,"onSlideChange",this.onSlideChange),Object(k.a)(e,"onInitialized",this.onInitialized),e),l.a.createElement("div",{className:"Mypicsclass"},l.a.createElement("figure",null,l.a.createElement("img",{className:"carimages",src:this.props.profilepic1,alt:"profilepic1"}),l.a.createElement("figcaption",null," ",this.props.caption1," "))),l.a.createElement("div",{className:"Mypicsclass"},l.a.createElement("figure",null,l.a.createElement("img",{className:"carimages",src:this.props.profilepic2,alt:"profilepic2"}),l.a.createElement("figcaption",null," ",this.props.caption2))),l.a.createElement("div",{className:"Mypicsclass"},l.a.createElement("figure",null,l.a.createElement("img",{className:"carimages",src:this.props.profilepic3,alt:"profilepic3"}),l.a.createElement("figcaption",null," ",this.props.caption3)))),l.a.createElement("div",{id:"myelement"})," ",l.a.createElement("div",{id:"mybotelement"}),"  ")}}]),t}(l.a.Component),oe=a(98),se=a.n(oe),me=a(99),ue=a.n(me),de=a(100),pe=a.n(de);var ge=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Contact"),l.a.createElement(ce,{caption1:"Marco",caption2:"BigBob",caption3:"Alain",profilepic1:se.a,profilepic2:ue.a,profilepic3:pe.a,whoseprofile:"Mark"}))},he=a(101),be=a.n(he),Ee=a(207),fe=a(210),ye=a(209),we=a(208),ve=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(S.a)(a)),a.state={dropdownOpen:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))}},{key:"render",value:function(){return l.a.createElement(Ee.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle},l.a.createElement(fe.a,{style:{color:"#1B6EB0",backgroundColor:"white",margin:"0px",padding:"10px",border:"1px solid #1B6EB0"},caret:!0},"Find a Worker!"),l.a.createElement(ye.a,null,l.a.createElement(we.a,null,l.a.createElement(g.b,{to:"/"},"Accountant")),l.a.createElement(we.a,null,l.a.createElement(g.b,{to:"/"},"Barber")),l.a.createElement(we.a,null,l.a.createElement(g.b,{to:"/builders"},"Builder")),l.a.createElement(we.a,null,l.a.createElement(g.b,{to:"/"},"Chef")),l.a.createElement(we.a,null,l.a.createElement(g.b,{to:"/testpage"},"Clown")),l.a.createElement(we.a,null,l.a.createElement(g.b,{to:"/"},"Graphic Designer")),l.a.createElement(we.a,null,l.a.createElement(g.b,{to:"/"},"Painter")),l.a.createElement(we.a,null,l.a.createElement(g.b,{to:"/"},"Tattoo")),l.a.createElement(we.a,null,l.a.createElement(g.b,{to:"/"},"Web Dev"))))}}]),t}(l.a.Component),je=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(S.a)(a)),a.state={dropdownOpen:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))}},{key:"render",value:function(){return l.a.createElement(Ee.a,{direction:"down",size:"sm",isOpen:this.state.dropdownOpen,toggle:this.toggle}," ",l.a.createElement(fe.a,{caret:!0,style:{color:"#1B6EB0",backgroundColor:"white",margin:"0px",padding:"11px",height:"auto",border:"1px solid #1B6EB0"}},"\u2630"),l.a.createElement(ye.a,{right:!0}," ",l.a.createElement(we.a,null,l.a.createElement(g.b,{to:"/About"},"About")),l.a.createElement(we.a,null,l.a.createElement(g.b,{to:"/Contact"},"Contact"))))}}]),t}(l.a.Component),Ie=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Mynavbar"},l.a.createElement("div",{className:"logocontainer"},l.a.createElement(g.b,{to:"/"},l.a.createElement("img",{src:be.a,className:"logo",alt:"our logo"}))),l.a.createElement("div",{className:"dropbar"},l.a.createElement(ve,null)),l.a.createElement("div",{className:"hamburger"},l.a.createElement(je,null)))}}]),t}(l.a.Component),Oe=a(29),Ne=[l.a.createElement(Oe.a,{key:"home",exact:!0,path:"/",component:N}),l.a.createElement(Oe.a,{key:"about",path:"/about",component:ie}),l.a.createElement(Oe.a,{key:"contact",path:"/contact",component:ge}),l.a.createElement(Oe.a,{key:"builders",path:"/builders",component:K}),l.a.createElement(Oe.a,{key:"designers",path:"/designers",component:le}),l.a.createElement(Oe.a,{key:"testpage",path:"/testpage",component:re})];a(34).b.add(F.c,F.a,F.b);var ke=function(){return l.a.createElement(g.a,{basename:"/"},l.a.createElement("div",{className:"App"},l.a.createElement(Ie,null),l.a.createElement("div",{className:"Gallerywrapper"},Ne)))};i.a.render(l.a.createElement(ke,null),document.getElementById("root"))},42:function(e,t,a){e.exports=a.p+"static/media/mark.25a4c2ad.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/bob.6459d4aa.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/alan.2d872720.jpg"},86:function(e,t,a){e.exports=a.p+"static/media/clowns.5b7ed13c.jpeg"},87:function(e,t,a){e.exports=a.p+"static/media/accountants.8ab1b06c.jpg"},88:function(e,t,a){e.exports=a.p+"static/media/builders.1f256c7d.jpg"},89:function(e,t,a){e.exports=a.p+"static/media/chefs.2b895680.jpg"},90:function(e,t,a){e.exports=a.p+"static/media/designers.b8866604.jpg"},95:function(e,t,a){e.exports=a.p+"static/media/designer1.52a6499b.jpg"},96:function(e,t,a){e.exports=a.p+"static/media/designer2.5feea119.jpeg"},97:function(e,t,a){e.exports=a.p+"static/media/designer3.16773531.jpg"},98:function(e,t,a){e.exports=a.p+"static/media/accountant.dbefe1c7.jpeg"},99:function(e,t,a){e.exports=a.p+"static/media/accountant2.fff76ed3.jpg"}},[[104,1,2]]]);
//# sourceMappingURL=main.72d9165a.chunk.js.map