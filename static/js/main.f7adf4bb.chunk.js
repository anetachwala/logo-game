(this.webpackJsonpzoovu=this.webpackJsonpzoovu||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(8),s=n.n(i),d=(n(16),n(4)),o=n(5),l=n(7),j=n(6),u=(n(17),n(18),n(2)),b=(n(19),n(20),n(1)),p=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.provided,n=e.innerRef;return Object(b.jsx)("div",Object(u.a)(Object(u.a)(Object(u.a)({},t.draggableProps),t.dragHandleProps),{},{ref:n,children:Object(b.jsx)("img",{className:"Card--img",src:this.props.img})}))}}]),n}(r.Component),m=n(3),h=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).componentDidMount=function(){r.randomCards()},r.randomCards=function(){for(var e=[],t=[{id:1,img:"https://anetachwala.github.io/logo-game/z.svg"},{id:2,img:"./o.svg"},{id:3,img:"o.svg"},{id:4,img:"v.svg"},{id:5,img:"u.svg"}];t.length;){var n=Math.floor(Math.random()*t.length),a=t.splice(n,1)[0];e.push(a),r.setState({cards:e})}},r.startCountOnClick=function(){0===r.state.sec&&(r.startCountUp(),r.setState({startGame:!0}))},r.startCountUp=function(){a=setInterval(r.countUp,1e3)},r.countUp=function(){r.setState({sec:r.state.sec+1}),r.state.startAgain&&clearInterval(a)},r.onDragEnd=function(e){var t=r.state,n=t.cards;if(e.destination&&e.source.droppableId!==e.destination.droppableId){var a=n[e.source.index],c=e.destination.droppableId,i=Object(u.a)({},t.cardContainer),s=function(){var e=r.state;e.cards.length||(1!==e.cardContainer[6].id||2!==e.cardContainer[7].id&&3!==e.cardContainer[7].id||2!==e.cardContainer[8].id&&3!==e.cardContainer[8].id||4!==e.cardContainer[9].id||5!==e.cardContainer[10].id?console.log("no",r.state):r.setState({scores:e.sec,sec:void 0,gameWin:"You win!",startAgain:!0},(function(){setTimeout((function(){r.setState({sec:0,startGame:!1,cards:[],cardContainer:{6:{},7:{},8:{},9:{},10:{}},stop:!1,scores:0,startAgain:!1,gameWin:""},(function(){return r.randomCards()}))}),1e4)})))};if(Number(e.draggableId)>=6&&(0===Object.keys(t.cardContainer[c]).length?(i[c]=t.cardContainer[e.draggableId],i[e.draggableId]={},r.setState({cardContainer:i},(function(){return s()}))):0!==Object.keys(t.cardContainer[c]).length&&(i[c]=t.cardContainer[e.draggableId],i[e.draggableId]=t.cardContainer[c],r.setState({cardContainer:i},(function(){return s()})))),0===Object.keys(t.cardContainer[c]).length&&Number(e.draggableId)<6){n.splice(e.source.index,1);var d=Object(u.a)({},t.cardContainer);d[c]=a,r.setState({cardContainer:d,cards:n},(function(){return s()}))}}},r.state={sec:0,startGame:!1,cards:[],cardContainer:{6:{},7:{},8:{},9:{},10:{}},stop:!1,scores:0,startAgain:!1,gameWin:""},r}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"GameView",children:[Object(b.jsxs)("div",{className:"GameView--name_and_scores",children:[Object(b.jsxs)("h3",{children:["Good Luck, ",this.props.userName?this.props.userName:"my friend","! ",Object(b.jsx)("br",{})," ",Object(b.jsx)("span",{children:"Pick up the right cards"})," "]}),Object(b.jsx)("h1",{children:this.state.gameWin}),Object(b.jsxs)("h3",{children:[Object(b.jsx)("img",{src:"clock.svg"})," Your score: ",this.state.sec?this.state.sec:this.state.scores," seconds ",Object(b.jsx)("br",{})," ",Object(b.jsx)("span",{children:"The faster the better!"})," "]})]}),Object(b.jsxs)(m.a,{onDragEnd:this.onDragEnd,children:[Object(b.jsx)("div",{className:"GameView--cards",children:this.state.cards.map((function(t,n){return Object(b.jsx)(m.c,{droppableId:t.id.toString(),children:function(a){return Object(b.jsx)("div",Object(u.a)(Object(u.a)({onMouseDown:e.state.startGame?null:e.startCountOnClick,className:"GameView--Droppable",ref:a.innerRef},a.droppableProps),{},{children:Object(b.jsx)(m.b,{draggableId:t.id.toString(),index:n,children:function(e){return Object(b.jsx)(p,{img:t.img,innerRef:e.innerRef,provided:e})}})}))}},t.id)}))}),Object(b.jsx)("div",{className:"GameView--span",children:Object(b.jsx)("h3",{children:Object(b.jsx)("span",{children:"...and drop them here to make the logo great again!"})})}),Object(b.jsxs)("div",{className:"GameView--cards_containers",children:[Object(b.jsx)(m.c,{droppableId:"6",children:function(t){return Object(b.jsx)("div",Object(u.a)(Object(u.a)({className:"GameView--card_container",ref:t.innerRef},t.droppableProps),{},{children:e.state.cardContainer[6]?Object(b.jsx)(m.b,{draggableId:"6",index:0,children:function(t){return Object(b.jsx)(p,{img:e.state.cardContainer[6].img,innerRef:t.innerRef,provided:t})}}):null}))}}),Object(b.jsx)(m.c,{droppableId:"7",children:function(t){return Object(b.jsx)("div",Object(u.a)(Object(u.a)({className:"GameView--card_container",ref:t.innerRef},t.droppableProps),{},{children:e.state.cardContainer[7]?Object(b.jsx)(m.b,{draggableId:"7",index:1,children:function(t){return Object(b.jsx)(p,{img:e.state.cardContainer[7].img,innerRef:t.innerRef,provided:t})}}):null}))}}),Object(b.jsx)(m.c,{droppableId:"8",children:function(t){return Object(b.jsx)("div",Object(u.a)(Object(u.a)({className:"GameView--card_container",ref:t.innerRef},t.droppableProps),{},{children:e.state.cardContainer[8]?Object(b.jsx)(m.b,{draggableId:"8",index:2,children:function(t){return Object(b.jsx)(p,{img:e.state.cardContainer[8].img,innerRef:t.innerRef,provided:t})}}):null}))}}),Object(b.jsx)(m.c,{droppableId:"9",children:function(t){return Object(b.jsx)("div",Object(u.a)(Object(u.a)({className:"GameView--card_container",ref:t.innerRef},t.droppableProps),{},{children:e.state.cardContainer[9]?Object(b.jsx)(m.b,{draggableId:"9",index:3,children:function(t){return Object(b.jsx)(p,{img:e.state.cardContainer[9].img,innerRef:t.innerRef,provided:t})}}):null}))}}),Object(b.jsx)(m.c,{droppableId:"10",children:function(t){return Object(b.jsx)("div",Object(u.a)(Object(u.a)({className:"GameView--card_container",ref:t.innerRef},t.droppableProps),{},{children:e.state.cardContainer[10]?Object(b.jsx)(m.b,{draggableId:"10",index:4,children:function(t){return Object(b.jsx)(p,{img:e.state.cardContainer[10].img,innerRef:t.innerRef,provided:t})}}):null}))}})]})]})]})}}]),n}(r.Component),O=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){console.log(a.props)},a.onPressEnter=function(e){"Enter"===e.key&&a.fadeOutWelcome()},a.fadeOutWelcome=function(){a.setState({displayWelcome:!1})},a.updateInputValue=function(e){a.setState({userName:e.target.value})},a.state={displayWelcome:!0,userName:""},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:this.state.displayWelcome?Object(b.jsxs)("div",{className:"Welcome",children:[Object(b.jsx)("h2",{className:"Welcome--h2",children:"Hello friend, tell me your name..."}),Object(b.jsx)("input",{value:this.state.userName,onChange:this.updateInputValue,onKeyDown:this.onPressEnter,className:"Welcome--input",tabIndex:"-1",placeholder:"Your name here"}),Object(b.jsxs)("button",{className:"Welcome--button",onClick:this.fadeOutWelcome,children:["Let's go",Object(b.jsx)("img",{className:"arrow",src:"arrow.svg"})]})]}):Object(b.jsx)(h,{userName:this.state.userName})})}}]),n}(r.Component),g=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(O,{})})}}]),n}(r.Component);s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.f7adf4bb.chunk.js.map