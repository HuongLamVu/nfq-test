(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){},38:function(e,t,a){e.exports=a(66)},47:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),i=a.n(o),l=a(14),c=(a(47),a(18)),s=a(36),u=a.n(s),m=a(11),d=a(7),p="UPDATE_COLLECTION",f="TOGGLE_FAVORITE_COLLECTION",h="DELETE_COLLECTION_ITEM",v="UPDATE_FILTER_SORT",g="PAGE_GOTO",b="PAGE_FIRST",E="PAGE_LAST",O="PAGE_PREVIOUS",y="PAGE_NEXT",C="PAGE_SIZE",j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case f:return Object(d.a)({},e,{favorite:!e.favorite});default:return e}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(d.a)({},e,Object(m.a)({},t.id,t.item));case f:return Object(d.a)({},e,Object(m.a)({},t.id,j(e[t.id],t)));case h:var a=Object(d.a)({},e);return delete a[t.id],a;default:return e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"",date:"",favorite:"",sort:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(d.a)({},e,Object(m.a)({},t.name,t.value));default:return e}},w={VIDEO:"video",IMAGE:"image",AUDIO:"audio"},N={FAVORITE:!0,UN_FAVORITE:!1},k={DATE:"date",TITLE:"title"},A=[{label:"Default",value:""},{label:"Title",value:k.TITLE},{label:"Date",value:k.DATE}],T=[{label:"All",value:""},{label:"Image",value:w.IMAGE},{label:"Video",value:w.VIDEO},{label:"Audio",value:w.AUDIO}],P=[{label:"All",value:""},{label:"Favorite",value:N.FAVORITE},{label:"Non favorite",value:N.UN_FAVORITE}],V=15,F={currentPage:1,size:12},D=Object(c.b)({collection:_,filter:I,paging:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(d.a)({},e,{currentPage:t.currentPage});case y:return Object(d.a)({},e,{currentPage:e.currentPage+1});case O:return e.currentPage>1?Object(d.a)({},e,{currentPage:e.currentPage-1}):e;case v:case b:return Object(d.a)({},e,{currentPage:1});case E:return Object(d.a)({},e,{currentPage:0});case C:return Object(d.a)({},e,{size:t.size});default:return e}}}),x=(0,c.c)(u()("collection")),S=Object(c.d)(D,x),R=a(1),M=a(2),U=a(5),L=a(4),G=a(6),q=a(17),B=a(19),z=a(8),H=a.n(z),W=(a(52),function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(U.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).onClickBtn=function(){a.props.onClick&&a.props.onClick()},a}return Object(G.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this,t=this.props.props;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("button",{className:H()({btn:!0,"btn-primary":"primary"===t.type,"btn-secondary":"secondary"===t.type,"btn-danger":"danger"===t.type,"btn-default":!t.type||"default"===t.type,"btn-outline":"outline"===t.type,"btn-primary-color":"primary-color"===t.type,"btn--full-width":!!t.fullWidth}),onClick:function(){return e.onClickBtn()}},t.icon&&r.a.createElement("span",{className:"icon-".concat(t.icon)}),t.title&&r.a.createElement("span",{className:"btn__title"},t.title)))}}]),t}(n.Component)),K=(a(53),function(e){function t(){return Object(R.a)(this,t),Object(U.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(G.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.source,n=a&&{backgroundImage:"url('".concat(a,"')")},o={thumbnail__img:!0,"thumbnail__img--audio":"audio"===t};return r.a.createElement("div",{className:"thumbnail"},r.a.createElement("div",{className:H()(o),style:n}),"video"===t&&r.a.createElement("span",{className:"thumbnail__play"},r.a.createElement("span",{className:"icon-play"})))}}]),t}(n.Component)),J=a(27),X=a.n(J);function Z(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:7;if(0===e)return[1];var r,o=(r=Math.ceil(e/t),Array.apply(null,{length:r}).map(Number.call,Number)).map(function(e){return e+1}),i=o.length+1,l=Math.floor(n/2),c=n-l;return a<c?o.slice(0,n):a>i-l?o.slice(i-n,i):o.slice(a-c,a+l)}function $(e,t){return Math.ceil(e/t)}a(55);var Q=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(U.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).changeFavorite=function(e){a.props.toggleFavorite(e)},a.removeItem=function(e){a.props.removeItem(e)},a.editItem=function(e){a.props.editItem(e)},a.onAddItem=function(e){a.props.onAddItem(e)},a}return Object(G.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props,n=a.data,o=a.isAddNew;return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"item__media"},r.a.createElement("a",{href:"#"},n.preview&&r.a.createElement(K,{type:n.mediaType,source:n.preview}))),r.a.createElement("div",{className:"item__date"},r.a.createElement("span",null,(e=n.createdAt,X()(e).format("ll")))),r.a.createElement("h3",{className:"item__title"},n.title),r.a.createElement("div",{className:"item__description"},n.description),r.a.createElement("div",{className:"item__buttons"},o?r.a.createElement(W,{props:{title:"Add to collection",icon:"add",type:"default",fullWidth:!0},onClick:function(){return t.onAddItem(n)}}):r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{props:{title:"",icon:n.favorite?"heart-filled":"heart",type:"default"},onClick:function(){return t.changeFavorite(n.id)}}),r.a.createElement(W,{props:{title:"",icon:"trash-bin",type:"default"},onClick:function(){return t.removeItem(n.id)}}),r.a.createElement(W,{props:{icon:"pen",type:"default"},onClick:function(){return t.editItem(n.id)}})))))}}]),t}(n.Component),Y=(a(33),function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(U.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(o)))).state={filled:a.props.defaultValue||a.props.value,textInput:r.a.createRef(),value:a.props.defaultValue||a.props.value,inValid:!(a.props.defaultValue||a.props.value)},a.onChange=function(e){var t=a.state.filled,n=e.target.value,r=!!a.props.required&&""===n;!t&&n?a.setState({filled:!0,value:n,inValid:r}):""===n&&a.setState({filled:!1,value:n,inValid:r}),a.props.onChangeData&&a.props.onChangeData(e.target.name,n,r)},a.onKeyPress=function(e){13!==e.which&&13!==e.keyCode||a.props.onChange&&a.props.onChange(e.target.value)},a}return Object(G.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.type,n=t.defaultValue,o=t.label,i=t.placeHolder,l=t.name,c=t.value,s=t.required,u=t.showInvalidField,m=this.state.inValid,d={filled:this.state.filled||"date"===a,"form-element__input":!0,"form-element__input--textarea":"textarea"===a,"form-element__input--invalid":u&&m};return r.a.createElement("div",{className:"form-element"},"input"===a&&r.a.createElement("input",{className:H()(d),type:"text",defaultValue:n,placeholder:!o&&i?i:null,name:l,value:c,onChange:function(t){return e.onChange(t)},onKeyPress:function(t){return e.onKeyPress(t)},ref:this.state.textInput}),"textarea"===a&&r.a.createElement("textarea",{className:H()(d),name:l,type:"text",defaultValue:n,value:c,onChange:function(t){return e.onChange(t)}}),"date"===a&&r.a.createElement("input",{className:H()(d),type:"date",defaultValue:n,placeholder:!o&&i?i:null,name:l,value:c,onChange:function(t){return e.onChange(t)},onKeyPress:function(t){return e.onKeyPress(t)},ref:this.state.textInput}),o&&r.a.createElement("label",{className:"form-element__label",onClick:function(){return e.state.textInput.current.focus()}},o,s&&r.a.createElement("span",{className:"required"},"*")))}}]),t}(n.Component)),ee=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(U.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(o)))).state={filled:!1,textInput:r.a.createRef(),value:a.props.defaultValue||"",title:""},a.onChangeOption=function(e){var t=a.state.value;if(e.value!==t){a.setState({value:e.value,title:e.label});var n=a.props.name;a.props.onChangeData&&a.props.onChangeData(n,e.value)}},a}return Object(G.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.value,t=this.props.options.find(function(t){return t.value===e});t&&this.setState({title:t.label})}},{key:"render",value:function(){var e=this,t=this.props,a=t.options,n=t.label,o=t.name,i=this.state,l=i.value,c=i.title;return r.a.createElement("div",{className:"form-element"},r.a.createElement("input",{className:"hidden",type:"text",name:o,value:l,onChange:function(t){return e.onChange(t)}}),r.a.createElement("button",{className:H()({filled:!0,"form-element__input":!0})},c),r.a.createElement("ul",{className:"form-element__dropdown"},a.map(function(t,a){return r.a.createElement("li",{key:a,className:H()({active:l===t.value}),onMouseDown:function(){return e.onChangeOption(t)}},t.label)})),r.a.createElement("span",{className:"icon-dropdown"}),r.a.createElement("label",{className:"form-element__label",onClick:function(){return e.state.textInput.current.focus()}},n))}}]),t}(n.Component);var te=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(U.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).state={type:"",date:"",favorite:"",sort:""},a.onChangeValue=function(e,t){var n=a.props.updateFilter;a.setState(Object(m.a)({},e,t)),n(e,t)},a}return Object(G.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.state,t=e.type,a=e.date,n=e.favorite,o=e.sort;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6 col-md-3"},r.a.createElement(ee,{options:T,label:"Type",name:"type",onChangeData:this.onChangeValue,value:t})),r.a.createElement("div",{className:"col-sm-6 col-md-3"},r.a.createElement(Y,{type:"date",label:"Date",name:"date",title:"Date",onChangeData:this.onChangeValue,value:a})),r.a.createElement("div",{className:"col-sm-6 col-md-3"},r.a.createElement(ee,{options:P,label:"Favorite",name:"favorite",onChangeData:this.onChangeValue,value:n})),r.a.createElement("div",{className:"col-sm-6 col-md-3"},r.a.createElement(ee,{options:A,label:"Sort By",name:"sort",onChangeData:this.onChangeValue,value:o})))}}]),t}(n.Component),ae=Object(l.b)(function(e){return{collection:e.collection,filter:e.filter}},function(e){return{updateFilter:function(t,a){return e(function(e,t){return{type:v,name:e,value:t}}(t,a))}}})(te),ne=(a(34),[{label:"Video",value:"video"},{label:"Image",value:"image"}]),re=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(U.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).onCloseModal=function(){a.props.onCloseModal(!1)},a.saveData=function(){a.props.saveData()},a.onChangeValue=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];a.props.onChangeData(e,t,n)},a}return Object(G.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this,t={modal:!0,"modal-open":this.props.isOpen},a=this.props,n=a.data,o=a.modalTitle,i=a.buttonInfo,l=a.showInvalidField;return r.a.createElement("div",{className:H()(t),tabIndex:"-1",role:"dialog"},n&&r.a.createElement("div",{className:"modal-dialog modal-dialog--lg",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},o),r.a.createElement(W,{props:{icon:"close",type:"outline"},onClick:function(){return e.onCloseModal()}})),r.a.createElement("div",{className:"modal-body"},r.a.createElement(Y,{type:"input",defaultValue:n.title,label:"Title",name:"title",onChangeData:this.onChangeValue}),r.a.createElement(Y,{type:"textarea",defaultValue:n.description,label:"Description",name:"description",onChangeData:this.onChangeValue}),r.a.createElement(ee,{defaultValue:n.mediaType,label:"Type",options:ne,name:"mediaType",onChangeData:this.onChangeValue}),r.a.createElement(Y,{type:"input",defaultValue:n.preview,required:!0,label:"Link preview image url",name:"preview",showInvalidField:l,onChangeData:this.onChangeValue}),r.a.createElement(Y,{type:"input",defaultValue:n.href,required:!0,label:"Link title url",name:"href",showInvalidField:l,onChangeData:this.onChangeValue})),r.a.createElement("div",{className:"modal-footer"},r.a.createElement(W,{props:i,onClick:this.saveData})))))}}]),t}(n.Component),oe=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(U.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).onCloseModal=function(){a.props.onCloseModal()},a.removeItem=function(){a.props.removeItem()},a}return Object(G.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this,t={modal:!0,"modal-open":this.props.isOpen};return r.a.createElement("div",{className:H()(t),tabIndex:"-1",role:"dialog"},r.a.createElement("div",{className:"modal-dialog modal-sm",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement(W,{props:{icon:"close",type:"outline",title:""},onClick:function(){return e.onCloseModal()}})),r.a.createElement("div",{className:"modal-body"},r.a.createElement("h4",{className:"modal-body__title"},"Do you want to remove this item?")),r.a.createElement("div",{className:"modal-footer"},r.a.createElement(W,{props:{type:"danger",title:"Remove"},onClick:this.removeItem}),r.a.createElement(W,{props:{type:"default",title:"Cancel"},onClick:this.onCloseModal})))))}}]),t}(n.Component),ie=(a(56),function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(U.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).gotoPage=function(e){a.props.gotoPage(e)},a}return Object(G.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.total,n=t.currentPage,o=t.pages,i=void 0===o?[]:o,l=t.lastPage,c=t.itemPerPage,s=void 0===c?0:c,u=(n-1)*s+1,m=Math.min(u+s-1,a),d={pagination:!0,"justify-content-end":a>0};return r.a.createElement("div",{className:H()(d)},r.a.createElement("div",{className:"pagination__wrapper"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"pagination__desc"},"Showing item from ",u," - ",m," of ",a," item/s"),r.a.createElement("ul",{className:"pagination__number"},1!==n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"pagination__item"},r.a.createElement("a",{className:"pagination__link","aria-label":"First",href:"javascript:void(0)",onClick:function(){return e.gotoPage(1)}}," ","<<")),r.a.createElement("li",{className:"pagination__item"},r.a.createElement("a",{className:"pagination__link","aria-label":"Previous",href:"javascript:void(0)",onClick:function(){return e.gotoPage(n-1)}},"<"))),i&&i.map(function(t,a){return r.a.createElement("li",{className:H()({pagination__item:!0,active:t===n}),key:a},r.a.createElement("a",{className:"pagination__link",href:"javascript:void(0)",disabled:t===n,onClick:function(){return e.gotoPage(t)}},t))}),n!==l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("a",{className:"pagination__link",href:"javascript:void(0)",onClick:function(){return e.gotoPage(n+1)}},">")),r.a.createElement("li",null,r.a.createElement("a",{className:"pagination__link",href:"javascript:void(0)",onClick:function(){return e.gotoPage(l)}},">>"))))):r.a.createElement("p",{className:"pagination__desc"},"There no item to show")))}}]),t}(n.Component));function le(e,t){return{type:p,id:e,item:t}}a(57);var ce=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(U.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).state={isOpenConfirm:!1,isOpen:!1,itemToUpdate:null,itemIdToRemove:null,inValidField:!1,showInvalidField:!1},a.showConfirmToRemoveItem=function(e){a.setState({isOpenConfirm:!0,itemIdToRemove:e})},a.removeItem=function(){var e=a.props.removeItem,t=a.state.itemIdToRemove;a.setState({isOpenConfirm:!1,itemIdToRemove:null}),e(t)},a.editItemBeforeUpdate=function(e){a.setState({isOpen:!0,itemToUpdate:Object(d.a)({},e)})},a.onCloseModal=function(){a.setState({isOpen:!1,itemToUpdate:null})},a.onCloseConfirmModal=function(){a.setState({isOpenConfirm:!1,itemIdToRemove:null})},a.updateCollectionItem=function(){var e=a.props.updateItemToCollection,t=a.state,n=t.itemToUpdate,r=t.inValidField;r?a.setState({showInvalidField:r}):(e(Object(d.a)({},n)),a.setState({isOpen:!1,itemToUpdate:null,showInvalidField:!1}))},a.onChangeValue=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=a.state.itemToUpdate;a.setState({itemToUpdate:Object(d.a)({},r,Object(m.a)({},e,t)),inValidField:n})},a}return Object(G.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.collection,n=t.toggleFavorite,o=t.total,i=t.paging,l=i.currentPage,c=i.size,s=t.gotoPage,u=this.state,m=u.isOpen,d=u.isOpenConfirm,p=u.itemToUpdate,f=u.showInvalidField,h=Z(o,c,l),v=$(o,12);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"collection"},r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"collection__header"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"collection__title"},"NASA Collection")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"text-right"},r.a.createElement(q.b,{to:"/search-collection"},r.a.createElement(W,{props:{icon:"add",type:"primary",title:"Add new item"}})))))),r.a.createElement("div",{className:"collection__filter"},r.a.createElement(ae,null)),r.a.createElement(ie,{total:o,pages:h,currentPage:l,lastPage:v,itemPerPage:12,gotoPage:s}),r.a.createElement("div",{className:"row"},a&&a.map(function(t){return r.a.createElement("div",{key:t.id,className:"col col-md-4"},r.a.createElement(Q,{data:t,toggleFavorite:n,removeItem:e.showConfirmToRemoveItem,editItem:function(){return e.editItemBeforeUpdate(t)}}))})))),r.a.createElement(re,{onCloseModal:this.onCloseModal,isOpen:m,data:p,saveData:this.updateCollectionItem,onChangeData:this.onChangeValue,modalTitle:"Edit",buttonInfo:{icon:"check",title:"Save",type:"primary"},showInvalidField:f}),r.a.createElement(oe,{isOpen:d,onCloseModal:this.onCloseConfirmModal,removeItem:this.removeItem}))}}]),t}(n.Component),se=Object(l.b)(function(e){var t=e.collection,a=e.filter,n=e.paging;return Object(d.a)({},function(e,t,a){if(e=Object.keys(e).map(function(t){return e[t]}),a){if(a.date){var n=X()(a.date);e=e.filter(function(e){return n.isSame(e.createdAt,"day")})}switch(a.type){case w.VIDEO:e=e.filter(function(e){return"video"===e.mediaType});break;case w.IMAGE:e=e.filter(function(e){return"image"===e.mediaType})}switch(a.favorite){case N.FAVORITE:e=e.filter(function(e){return e.favorite});break;case N.UN_FAVORITE:e=e.filter(function(e){return!e.favorite})}}var r=e.length;switch(a.sort){case k.TITLE:e.sort(function(e,t){return e.title.toLowerCase().localeCompare(t.title.toLowerCase())});break;case k.DATE:e.sort(function(e,t){return e.createdAt.toLowerCase().localeCompare(t.createdAt.toLowerCase())})}return t&&(e=e.slice((t.currentPage-1)*t.size,t.currentPage*t.size)),{collection:e,total:r}}(t,n,a),{paging:n,filter:a})},function(e){return{toggleFavorite:function(t){return e(function(e){return{type:f,id:e}}(t))},removeItem:function(t){return e(function(e){return{type:h,id:e}}(t))},updateItemToCollection:function(t){return e(le(t.id,t))},gotoPage:function(t){return e(function(e){return{type:g,currentPage:e}}(t))}}})(ce),ue=a(16),me=a.n(ue),de=a(20),pe=a(30),fe=a(29);function he(e){return ve.apply(this,arguments)}function ve(){return(ve=Object(de.a)(me.a.mark(function e(t){var a,n,r,o=arguments;return me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=o.length>1&&void 0!==o[1]?o[1]:1,t){e.next=3;break}return e.abrupt("return",{items:[]});case 3:return e.next=5,fetch("https://images-api.nasa.gov/search?q=".concat(encodeURIComponent(t)).concat(a<2?"":"&page=".concat(a)));case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",{items:r.collection.items.map(function(e){var t=e.href,a=Object(pe.a)(e.data,1)[0],n=a.nasa_id,r=a.title,o=a.media_type,i=a.date_created,l=a.description,c=e.links;return{id:n,href:t,title:r,description:l,mediaType:o,preview:c&&c.find(function(e){return"preview"===e.rel}).href,createdAt:i}}),totalHits:r.collection.metadata.total_hits});case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}var ge=function(){function e(t){Object(R.a)(this,e),this._items={},this._size=V,this._query=t}return Object(M.a)(e,[{key:"getPage",value:function(){var t=Object(de.a)(me.a.mark(function t(){var a,n,r,o,i,l,c,s,u,m,d,p,f,h=this,v=arguments;return me.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=v.length>0&&void 0!==v[0]?v[0]:1,n=e.getPageNeeded(a,this._size),r=n.start,o=n.pages,i=!0,l=!1,c=void 0,t.prev=5,s=o[Symbol.iterator]();case 7:if(i=(u=s.next()).done){t.next=26;break}if(m=u.value,!this._items[m]){t.next=11;break}return t.abrupt("continue",23);case 11:if(!(this._count&&m>this._count/100+1)){t.next=15;break}t.t0=[],t.next=18;break;case 15:return t.next=17,he(this._query,m);case 17:t.t0=t.sent;case 18:d=t.t0,p=d.items,f=d.totalHits,this._count=this._count||Math.min(f,1e4),this._items[m]=p;case 23:i=!0,t.next=7;break;case 26:t.next=32;break;case 28:t.prev=28,t.t1=t.catch(5),l=!0,c=t.t1;case 32:t.prev=32,t.prev=33,i||null==s.return||s.return();case 35:if(t.prev=35,!l){t.next=38;break}throw c;case 38:return t.finish(35);case 39:return t.finish(32);case 40:return t.abrupt("return",{items:o.reduce(function(e,t){return[].concat(Object(fe.a)(e),Object(fe.a)(h._items[t]))},[]).slice(r,r+this._size),totalHits:this._count});case 41:case"end":return t.stop()}},t,this,[[5,28,32,40],[33,,35,39]])}));return function(){return t.apply(this,arguments)}}()}],[{key:"getPageNeeded",value:function(e,t){var a,n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,o=[~~((a=(e-1)*t)/(n=r)),a%n],i=Object(pe.a)(o,2),l=i[0],c=i[1],s=[l+1];return c>r-t&&s.push(l+2),{start:c,pages:s}}}]),e}(),be=(a(64),function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(U.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).state={resultItems:[],collectionItemToAdd:null,searching:!1,searchValue:"",totalHits:"",isOpen:!1,pages:[],currentPage:0,inValidField:!1,showInvalidField:!1},a.searchData=function(){var e=Object(de.a)(me.a.mark(function e(t){return me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return a.setState({searchValue:t}),e.abrupt("return");case 3:return e.prev=3,a.setState({searching:!0,searchValue:t}),a.nasaSearchAdapter=new ge(t),e.next=8,a.gotoPage(1);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log("Search false ",e.t0);case 13:case"end":return e.stop()}},e,null,[[3,10]])}));return function(t){return e.apply(this,arguments)}}(),a.gotoPage=function(){var e=Object(de.a)(me.a.mark(function e(t){var n,r,o,i;return me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.nasaSearchAdapter.getPage(t);case 3:n=e.sent,r=n.items,o=n.totalHits,i=Z(o,V,t),a.setState({searching:!1,resultItems:r,pages:i,currentPage:t,totalHits:o}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert("ERROR: ".concat(e.t0.message));case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),a.editBeforeAddItem=function(e){a.setState({collectionItemToAdd:e,isOpen:!0})},a.onCloseModal=function(){a.setState({isOpen:!1,collectionItemToAdd:null})},a.addCollectionItem=function(){var e=a.state,t=e.collectionItemToAdd,n=e.inValidField,r=a.props.addItemToCollection;n?a.setState({showInvalidField:n}):(r(t),a.setState({isOpen:!1,collectionItemToAdd:null,showInvalidField:!1}))},a.onChangeValue=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(d.a)({},a.state.collectionItemToAdd);r[e]=t,a.setState({collectionItemToAdd:r,inValidField:n})},a}return Object(G.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.resultItems,n=t.searching,o=t.searchValue,i=t.isOpen,l=t.totalHits,c=t.pages,s=t.currentPage,u=t.collectionItemToAdd,m=t.showInvalidField,d=$(l,V);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"search__header"},r.a.createElement(q.b,{to:"/"},r.a.createElement(W,{props:{icon:"back",title:"Back to Collection",type:"primary-color"}})),r.a.createElement("div",{className:"search__title"},"Search From NASA"),r.a.createElement("div",{className:"search__input"},r.a.createElement(Y,{type:"input",placeHolder:"Type something to search...",onChange:this.searchData}))),r.a.createElement("div",{className:"search-result"},n&&r.a.createElement("p",{className:"search-result__searching"},"Searching..."),""!==l&&!n&&r.a.createElement("p",{className:"search-result__searching"},l,' result for "',o,'"'),l?r.a.createElement(ie,{total:l,pages:c,currentPage:s,lastPage:d,itemPerPage:V,gotoPage:this.gotoPage}):"",r.a.createElement("div",{className:"row"},a&&a.map(function(t){return r.a.createElement("div",{key:t.id,className:"col col-md-4"},r.a.createElement(Q,{data:t,onAddItem:e.editBeforeAddItem,isAddNew:!0}))}))))),r.a.createElement(re,{onCloseModal:this.onCloseModal,isOpen:i,data:u,saveData:this.addCollectionItem,onChangeData:this.onChangeValue,modalTitle:"Add to collection",buttonInfo:{icon:"check",title:"Add to collection",type:"primary"},showInvalidField:m}))}}]),t}(n.Component)),Ee=Object(B.d)(Object(l.b)(function(e){return{collection:e.collection}},function(e){return{addItemToCollection:function(t){return e(le(t.id,t))}}})(be)),Oe=(a(65),function(e){function t(){return Object(R.a)(this,t),Object(U.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(G.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(q.a,{basename:"/nfq-test"},r.a.createElement(B.a,{exact:!0,path:"/",component:se}),r.a.createElement(B.a,{path:"/search-collection",component:Ee})))}}]),t}(n.Component)),ye=Object(l.b)(function(){return{}})(Oe),Ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function je(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(l.a,{store:S},r.a.createElement(ye,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/nfq-test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/nfq-test","/service-worker.js");Ce?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):je(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):je(t,e)})}}()}},[[38,1,2]]]);
//# sourceMappingURL=main.f9aab798.chunk.js.map