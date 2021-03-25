(this["webpackJsonppixel-art-maker"]=this["webpackJsonppixel-art-maker"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r,o,c,i=n(0),s=n.n(i),a=n(12),l=n.n(a),d=(n(20),n(2)),u=n(3),h=n(5),j=n(4),b=(n(21),n(1)),p=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)("button",{type:"reset",onClick:this.props.resetGrid,id:"resetButton",children:"Reset"}),Object(b.jsxs)("div",{className:"row-column",children:[Object(b.jsx)("h3",{children:"Row"}),Object(b.jsx)("button",{onClick:this.props.decrementRow,children:"-"}),Object(b.jsx)("button",{onClick:this.props.incrementRow,children:"+"}),Object(b.jsx)("span",{children:10*this.props.setRowBadge}),Object(b.jsx)("h3",{children:"Column"}),Object(b.jsx)("button",{onClick:this.props.decrementCol,children:"-"}),Object(b.jsx)("button",{onClick:this.props.incrementCol,children:"+"}),Object(b.jsx)("span",{children:10*this.props.setColBadge})]})]})}}]),n}(i.Component),m=n(6),f=n(7),O=(n(23),f.a.div(r||(r=Object(m.a)(["\n  // regular CSS goes here :\n  // *Dynamic grid via dynamic 'styled-component'*\n  display: grid;\n  grid-template-columns: repeat(",", 10px);\n  grid-template-rows: repeat(",", 10px);\n  margin: 0 auto;\n  justify-content: center;\n  align-item: center;\n  margin-top: 20px;\n  cursor: cell;\n"])),(function(e){return e.numberOfColumns}),(function(e){return e.numberOfRows}))),C=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)(O,{numberOfColumns:10*this.props.columns,numberOfRows:10*this.props.rows,children:this.props.children})}}]),n}(i.Component),w=(n(26),Object(f.b)(o||(o=Object(m.a)(["\n0% {\n    background-color: #caffbf;\n    border-color: #06d6a0;\n    }\n    100% {\n      background-color#06d6a0: #06d6a0;\n      border-color: #06d6a0;\n    }"])))),v=f.a.div(c||(c=Object(m.a)(["\n  display: flex;\n  border: 1px solid #06d6a0;\n  background-color: #06d6a0;\n  animation-name: ",";\n  animation-duration: 100ms;\n  animation-fill-mode: backwards;\n  &:active,\n  &:focus,\n  &:hover {\n    animation-fill-mode: forwards;\n  }\n"])),w),x=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).stop=function(){document.getElementById(e.props.id).style.backgroundColor="#caffbf"},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)(v,{className:"cell",onClick:this.stop,id:this.props.id})}}]),n}(i.Component),g=(n(27),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={Row:0,Col:0,showGrid:!1,clearGrid:!1},e.incrementRowHandler=function(){var t=e.state.Row;t++,e.setState({Row:t})},e.decrementRowHandler=function(){var t=e.state.Row;0===t?e.setState({Row:t}):t>0&&(t-=1),e.setState({Row:t})},e.incrementColHandler=function(){var t=e.state.Col;t++,e.setState({Col:t})},e.decrementColHandler=function(){var t=e.state.Col;0===t?e.setState({Col:t}):t>0&&(t-=1),e.setState({Col:t})},e.resetGridHandler=function(){e.setState({Row:0}),e.setState({Col:0})},e.showGridHandler=function(){var t=e.state.showGrid;e.setState({showGrid:!t})},e.clearGrid=function(){var t=e.state.clearGrid;e.setState({clearGrid:!t})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=null,t=[];if(this.state.showGrid){for(var n=0;n<10*this.state.Row*(10*this.state.Col);n++)t.push(Object(b.jsx)(x,{id:n}));e=Object(b.jsx)("div",{children:Object(b.jsx)(C,{columns:this.state.Col,rows:this.state.Row,children:t})})}if(this.state.clearGrid){for(var r=0;r<10*this.state.Row*(10*this.state.Col);r++)t[r]=null;e=Object(b.jsx)("div",{children:Object(b.jsx)(C,{columns:this.state.Col,rows:this.state.Row,children:t})})}return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Pixel Art Maker"}),Object(b.jsx)(p,{incrementRow:this.incrementRowHandler,setRowBadge:this.state.Row,decrementRow:this.decrementRowHandler,incrementCol:this.incrementColHandler,setColBadge:this.state.Col,decrementCol:this.decrementColHandler,resetGrid:this.resetGridHandler}),Object(b.jsxs)("div",{className:"create-clear",children:[Object(b.jsx)("button",{onClick:this.showGridHandler,children:"Create"}),Object(b.jsx)("button",{onClick:this.clearGrid,children:"Clear"})]}),e]})}}]),n}(i.Component)),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),c(e),i(e)}))};l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),R()}},[[28,1,2]]]);
//# sourceMappingURL=main.6716219c.chunk.js.map