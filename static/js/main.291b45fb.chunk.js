(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),l=n(8),s=n.n(l),o=(n(14),n(1)),c=n(2),i=n(4),u=n(3),p=n(5),b=n(6),h=function(t){var e=t.props;return r.a.createElement("ul",null,e.map((function(t,e){return r.a.createElement("li",{key:e},t)})))},m=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={list:n.props.goodsList},n.reverseClick=function(){n.setState({list:n.props.goodsList.reverse()})},n.sortlength=function(){n.setState({list:Object(b.a)(n.props.goodsList).sort((function(t,e){return e.length-t.length}))})},n.sortAlphb=function(){n.setState({list:Object(b.a)(n.props.goodsList).sort()})},n.reset=function(){n.setState({list:n.props.goodsList})},n.selectNum=function(t){var e=+t+1,a=Object(b.a)(n.state.list).slice(0,e);n.setState({list:a})},n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:this.reverseClick},"Reverse"),r.a.createElement("button",{type:"button",onClick:this.sortlength},"Sort by length"),r.a.createElement("button",{type:"button",onClick:this.sortAlphb},"Sort alphabetically"),r.a.createElement("button",{type:"button",onClick:this.reset},"Reset"),r.a.createElement("select",{onChange:function(e){return t.selectNum(e.target.value)}},this.state.list.map((function(t,e){return r.a.createElement("option",{value:e,selected:!0},e+1)}))),r.a.createElement(h,{list:this.state.list}))}}]),e}(r.a.Component),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=function(){return r.a.createElement("div",null,r.a.createElement(m,{goodsList:f}))},E=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={buttonVisible:!0},n.handleClick=function(){n.setState({buttonVisible:!1})},n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.buttonVisible?r.a.createElement("button",{type:"button",onClick:this.handleClick},"Start"):r.a.createElement(g,null))}}]),e}(r.a.Component),d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Goods"),r.a.createElement(E,null))};s.a.render(r.a.createElement(d,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.291b45fb.chunk.js.map