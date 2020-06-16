(this["webpackJsonphw-03-image-finder-ver-02"]=this["webpackJsonphw-03-image-finder-ver-02"]||[]).push([[0],{20:function(e,a,t){e.exports=t(71)},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(17),c=t.n(o),l=t(7),i=t(3),s=t(4),m=t(6),u=t(5),h=t(18),g=t.n(h),d=(t(46),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={search:""},e.handleChange=function(a){var t=a.target.value;e.setState({search:t})},e.handleSubmit=function(a){a.preventDefault(),e.props.onSubmit(e.state.search),e.setState({search:""})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state.search;return r.a.createElement("form",{className:"SearchForm",onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:"SearchFormButton"},r.a.createElement("span",{className:"SearchFormButtonLabel"},"Search")),r.a.createElement("input",{name:"search",className:"SearchFormInput",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange,value:e}))}}]),t}(n.Component)),f=(t(47),function(e){var a=e.onSubmit;return r.a.createElement("header",{className:"Searchbar"},r.a.createElement(d,{onSubmit:a}))}),p=(t(48),function(e){var a=e.images,t=e.onClick;return r.a.createElement(r.a.Fragment,null,a.map((function(e){var a=e.id,n=e.webformatURL,o=e.largeImageURL;return r.a.createElement("li",{className:"ImageGalleryItem",key:a},r.a.createElement("img",{className:"ImageGalleryItemImage",src:n,alt:"picter",onClick:function(){return t(o)}}))})))}),v=(t(49),function(e){var a=e.images,t=e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"ImageGallery"},r.a.createElement(p,{images:a,onClick:t})))}),y=(t(50),function(e){var a=e.loadMore;return r.a.createElement("button",{className:"Button",type:"button",onClick:a},"Load more")}),b=(t(51),function(e){var a=e.largeImageURL,t=e.closeModal;return r.a.createElement("div",{className:"Overlay",onClick:t},r.a.createElement("div",{className:"Modal"},r.a.createElement("img",{src:a,alt:"img"})))}),E=t(19),I=t.n(E),S={page:1,perPage:12,fetchImages:function(e){var a="&q=".concat(e,"&page=").concat(this.page,"&per_page=").concat(this.perPage,"&image_type=all&orientation=horizontal");return I.a.get("https://pixabay.com/api/?key=16116679-c72078e20d7f40e9b0a227bf4"+a)}},w=(t(69),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={images:[],isLoading:!1,error:null,query:"",modalIsOpen:!1,largeImageURL:""},e.fetchImages=function(a){e.setState({isLoading:!0,query:a,images:[]}),S.fetchImages(a).then((function(a){var t=a.data;return e.setState({images:Object(l.a)(t.hits)})})).catch((function(a){return e.setState({error:a})})).finally((function(){e.setState({isLoading:!1})}))},e.handleLoadMoreImages=function(){e.setState({isLoading:!0}),S.fetchImages(e.state.query).then((function(a){var t=a.data;e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t.hits))}})),e.windowScrollTo()})).catch((function(e){return console.error(e)})).finally((function(){return e.setState({isLoading:!1})}))},e.handleModalOpen=function(a){e.setState({modalIsOpen:!0,largeImageURL:a})},e.handleCloseModal=function(a){"Overlay"===a.target.className&&e.closeModal()},e.handleKeyPress=function(a){"Escape"===a.code&&e.closeModal()},e.closeModal=function(){e.setState({modalIsOpen:!1,largeImageURL:""})},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.state.query&&this.fetchImages(),window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"windowScrollTo",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.isLoading,n=e.error,o=e.modalIsOpen,c=e.largeImageURL;return r.a.createElement("div",{className:"App"},r.a.createElement(f,{onSubmit:this.fetchImages}),n&&r.a.createElement("p",null,"Whoops, somthing went wrong: ",n.message),a.length>0&&r.a.createElement(v,{images:a,onClick:this.handleModalOpen}),t&&r.a.createElement("div",{className:"loader"},r.a.createElement(g.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})),a.length>0&&r.a.createElement(y,{loadMore:this.handleLoadMoreImages}),!!o&&r.a.createElement(b,{largeImageURL:c,closeModal:this.handleCloseModal}))}}]),t}(n.Component));t(70);c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.67db7ec1.chunk.js.map