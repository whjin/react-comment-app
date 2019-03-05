(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(28)},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),m=n.n(a),o=n(16),c=n.n(o),s=n(10),r=n(8),i=n(1),u=n(2),l=n(4),h=n(3),p=n(5),d=n(6),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={username:e.username,content:""},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.textarea.focus()}},{key:"handleUsernameBlur",value:function(e){this.props.onUserNameInputBlur&&this.props.onUserNameInputBlur(e.target.value)}},{key:"handleUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"handleContentChange",value:function(e){this.setState({content:e.target.value})}},{key:"handleSubmit",value:function(){this.props.onSubmit&&this.props.onSubmit({username:this.state.username,content:this.state.content,createdTime:+new Date}),this.setState({content:""})}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"comment-input"},m.a.createElement("div",{className:"comment-field"},m.a.createElement("span",{className:"comment-field-name"},"\u7528\u6237\u540d\uff1a"),m.a.createElement("div",{className:"comment-field-input"},m.a.createElement("input",{value:this.state.username,onBlur:this.handleUsernameBlur.bind(this),onChange:this.handleUsernameChange.bind(this)}))),m.a.createElement("div",{className:"comment-field"},m.a.createElement("span",{className:"comment-field-name"},"\u8bc4\u8bba\u5185\u5bb9\uff1a"),m.a.createElement("div",{className:"comment-field-input"},m.a.createElement("textarea",{ref:function(t){e.textarea=t},value:this.state.content,onChange:this.handleContentChange.bind(this)}))),m.a.createElement("div",{className:"comment-field-button"},m.a.createElement("button",{onClick:this.handleSubmit.bind(this)},"\u53d1\u5e03")))}}]),t}(a.Component);f.defaultProps={username:""};var b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).state={username:""},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this._loadUsername()}},{key:"_loadUsername",value:function(){var e=localStorage.getItem("username");e&&this.setState({username:e})}},{key:"_saveUsername",value:function(e){localStorage.setItem("username",e)}},{key:"handleSubmitComment",value:function(e){if(e){if(!e.username)return alert("\u8bf7\u8f93\u5165\u7528\u6237\u540d");if(!e.content)return alert("\u8bf7\u8f93\u5165\u8bc4\u8bba\u5185\u5bb9");var t=this.props.comments,n=[].concat(Object(d.a)(t),[e]);localStorage.setItem("comments",JSON.stringify(n)),this.props.onSubmit&&this.props.onSubmit(e)}}},{key:"render",value:function(){return m.a.createElement(f,{username:this.state.username,onUserNameInputBlur:this._saveUsername.bind(this),onSubmit:this.handleSubmitComment.bind(this)})}}]),t}(a.Component),v=Object(r.b)(function(e){return{comments:e.comments}},function(e){return{onSubmit:function(t){e(function(e){return{type:"ADD_COMMENT",comment:e}}(t))}}})(b),O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).state={timeString:""},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this._updateTimeString(),this._timer=setInterval(this._updateTimeString.bind(this),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this._timer)}},{key:"_updateTimeString",value:function(){var e=this.props.comment,t=(+Date.now()-e.createdTime)/1e3;this.setState({timeString:t>60?"".concat(Math.round(t/60)," \u5206\u949f\u524d"):"".concat(Math.round(Math.max(t,1))," \u79d2\u524d")})}},{key:"handleDeleteComment",value:function(){this.props.onDeleteComment&&this.props.onDeleteComment(this.props.index)}},{key:"_getProcessedContent",value:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"quot;").replace(/'/g,"&#039;").replace(/`([\S\s]+?)`/g,"<code>$1</code>")}},{key:"render",value:function(){var e=this.props.comment;return m.a.createElement("div",{className:"comment"},m.a.createElement("div",{className:"comment-user"},m.a.createElement("span",{className:"comment-username"},e.username),"\uff1a"),m.a.createElement("p",{dangerouslySetInnerHTML:{__html:this._getProcessedContent(e.content)}}),m.a.createElement("span",{className:"comment-createdtime"},this.state.timeString),m.a.createElement("span",{onClick:this.handleDeleteComment.bind(this),className:"comment-delete"},"\u5220\u9664"))}}]),t}(a.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleDeleteComment",value:function(e){this.props.onDeleteComment&&this.props.onDeleteComment(e)}},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,this.props.comments.map(function(t,n){return m.a.createElement(O,{comment:t,key:n,index:n,onDeleteComment:e.handleDeleteComment.bind(e)})}))}}]),t}(a.Component);C.defaultProps={comments:[]};var j=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this._loadComments()}},{key:"_loadComments",value:function(){var e=localStorage.getItem("comments");e=e?JSON.parse(e):[],this.props.initComments(e)}},{key:"handleDeleteComment",value:function(e){var t=this.props.comments,n=[].concat(Object(d.a)(t.slice(0,e)),Object(d.a)(t.slice(e+1)));localStorage.setItem("comments",JSON.stringify(n)),this.props.onDeleteComment&&this.props.onDeleteComment(e)}},{key:"render",value:function(){return m.a.createElement(C,{comments:this.props.comments,onDeleteComment:this.handleDeleteComment.bind(this)})}}]),t}(a.Component),E=Object(r.b)(function(e){return{comments:e.comments}},function(e){return{initComments:function(t){e(function(e){return{type:"INIT_COMMENTS",comments:e}}(t))},onDeleteComment:function(t){e(function(e){return{type:"DELETE_COMMENT",commentIndex:e}}(t))}}})(j),y=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"wrapper"},m.a.createElement(v,null),m.a.createElement(E,null))}}]),t}(a.Component),g=(n(27),Object(s.b)(function(e,t){switch(e||(e={comments:[]}),t.type){case"INIT_COMMENTS":return{comments:t.comments};case"ADD_COMMENT":return{comments:[].concat(Object(d.a)(e.comments),[t.comment])};case"DELETE_COMMENT":return{comments:[].concat(Object(d.a)(e.comments.slice(0,t.commentIndex)),Object(d.a)(e.comments.slice(t.commentIndex+1)))};default:return e}}));c.a.render(m.a.createElement(r.a,{store:g},m.a.createElement(y,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8fd6be0a.chunk.js.map