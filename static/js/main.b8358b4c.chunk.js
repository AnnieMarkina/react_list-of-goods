(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var a=n(0),l=n.n(a),r=n(8),o=n.n(r),c=n(1),i=n(2),s=n(4),u=n(3),h=n(5),p=n(6),b=function(t){var e=t.list;return l.a.createElement("ul",null,e.map((function(t,e){return l.a.createElement("li",{key:e},t)})))},m=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(l)))).state={list:n.props.goodsList},n.handleClick=function(){n.setState({list:n.props.goodsList.reverse()})},n.handleSortLength=function(){var t=Object(p.a)(n.props.goodsList).sort((function(t,e){return t.length-e.length}));n.setState({list:t})},n.handleSortAlphabetically=function(){n.setState({list:Object(p.a)(n.props.goodsList).sort()})},n.handleReset=function(){n.setState({list:n.props.goodsList})},n.handleSelectChange=function(t){var e=+t+1,a=Object(p.a)(n.state.list).slice(0,e);n.setState((function(t){return{list:a}}))},n}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this,e=this.state.list;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{type:"button",onClick:this.handleClick},"Reverse"),l.a.createElement("button",{type:"button",onClick:this.handleSortLength},"Sort by length"),l.a.createElement("button",{type:"button",onClick:this.handleSortAlphabetically},"Sort alphabetically"),l.a.createElement("button",{type:"button",onClick:this.handleReset},"Reset"),l.a.createElement("select",{onChange:function(e){return t.handleSelectChange(e.target.value)}},e.map((function(t,e){return l.a.createElement("option",{key:e,value:e},e+1)}))),l.a.createElement(b,{list:this.state.list}))}}]),e}(l.a.Component),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(){return l.a.createElement("div",null,l.a.createElement(m,{goodsList:d}))},g=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(l)))).state={buttonVisible:!0},n.handleClick=function(){n.setState({buttonVisible:!1})},n}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.state.buttonVisible?l.a.createElement("button",{type:"button",onClick:this.handleClick},"Start"):l.a.createElement(f,null))}}]),e}(l.a.Component),E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Goods"),l.a.createElement(g,null))};o.a.render(l.a.createElement(E,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.b8358b4c.chunk.js.map