(this["webpackJsonpstacks-auth"]=this["webpackJsonpstacks-auth"]||[]).push([[0],{249:function(e,t){},290:function(e,t,i){},297:function(e,t){},299:function(e,t){},330:function(e,t){},331:function(e,t){},336:function(e,t){},338:function(e,t){},345:function(e,t){},364:function(e,t){},448:function(e,t){},455:function(e,t){},590:function(e,t){},592:function(e,t,i){var n={"./connect-modal.entry.js":[605,4]};function a(e){if(!i.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return i.e(t[1]).then((function(){return i(a)}))}a.keys=function(){return Object.keys(n)},a.id=592,e.exports=a},597:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),s=i(32),r=i.n(s),o=(i(290),i(23)),c=i(657),l=i(652),d=i(53),h=i(626),u=i(650),p=i(598),j=i(76),m=i(645),g=i(640),x=i(641),b=i(601),f=i(65),O=i(638),v=i(646),C=i(639),y=i(647),w=i(656),S=i(599),k=i(635),D=i(64),I=i(175),L=i(267),E=i(91),B=i(268),T=i.n(B),R=i(269),z=i.n(R),F=i(649),K=i(630),U=i(631),M=i(632),P=i(633),A=i(654),N=i(634),G=i(270),$=i.n(G),_=i(4);const H=o.a.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`,J=o.a.div`
    justify-content: space-between;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 1fr auto;
    h2 {
      text-overflow: ellipsis;
      overflow: hidden;
    }
`,V=o.a.div`
    display: flex;
    height: 3px;
    overflow: hidden;
    font-size: 0.60938rem;
    background-color: #EBF0FF;
`,W=o.a.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    transition: width 0.6s ease;
    background-color: #2952CC;
`;class q extends n.Component{constructor(e){super(e),this.state={token:null,timeRemaining:null},this.iconBgColor="#8f95b2"}async copyToClipboard(){await $()(this.state.token),v.a.success("Token copied to clipboard")}updateToken(){const{secretKey:e}=this.props.data,t=E.authenticator.generate(e),i=E.authenticator.timeRemaining();this.setState({token:t,timeRemaining:i}),this.timer=setTimeout(this.updateToken.bind(this),1e3)}render(){const{id:e,user:t,service:i}=this.props.data,{token:n,timeRemaining:a}=this.state;return Object(_.jsxs)(d.a,{elevation:1,hoverElevation:2,backgroundColor:"white",padding:20,children:[Object(_.jsxs)(J,{children:[Object(_.jsxs)(p.a,{children:[i," (",t,")"]}),Object(_.jsx)(l.a,{position:h.a.BOTTOM_LEFT,content:t=>{let{close:i}=t;return Object(_.jsxs)(m.a,{children:[Object(_.jsxs)(m.a.Group,{children:[Object(_.jsx)(m.a.Item,{icon:K.a,onSelect:()=>{this.props.onDetail(e),i()},children:"View"}),Object(_.jsx)(m.a.Item,{icon:U.a,onSelect:()=>{this.props.onEdit(e),i()},children:"Edit"})]}),Object(_.jsx)(m.a.Divider,{}),Object(_.jsx)(m.a.Group,{children:Object(_.jsx)(m.a.Item,{icon:M.a,intent:"danger",onSelect:()=>{this.props.onRemove(e),i()},children:"Remove"})})]})},children:Object(_.jsx)(P.a,{color:this.iconBgColor})})]}),Object(_.jsxs)(H,{children:[Object(_.jsx)(p.a,{is:"h1",size:900,children:n}),Object(_.jsx)(A.a,{content:"Copy to clipboard",position:h.a.RIGHT,children:Object(_.jsx)(N.a,{color:this.iconBgColor,marginLeft:10,onClick:this.copyToClipboard.bind(this)})})]}),Object(_.jsxs)(S.a,{color:"muted",marginBottom:5,children:["Your token expires in ",Object(_.jsxs)(k.a,{children:[a,"s"]})]}),Object(_.jsx)(V,{children:Object(_.jsx)(W,{style:{width:Math.round(a/30*100)+"%"}})})]})}componentDidMount(){this.updateToken()}componentWillUnmount(){clearTimeout(this.timer)}}q.defaultProps={data:{id:null,user:"",service:"",secretKey:""},onEdit:()=>{},onRemove:()=>{},onDetail:()=>{}};var Y=q,X=i(644),Q=i(276),Z=i(642),ee=i(648),te=i(643),ie=i.p+"static/media/logo.21c9f637.svg";const ne=new Q.a(["store_write","publish_data"]),ae=new Z.a({appConfig:ne});function se(){return ae.loadUserData()}const re=new X.a({userSession:ae}),oe="cards.json",ce=[],le=async e=>{await re.putFile(oe,JSON.stringify(e))},de=o.a.div`
    display: flex;
    flex-grow: 1;
`,he=Object(o.a)(de)`
    flex-direction: column;
`,ue=Object(o.a)(de)`
    align-self: center;
    justify-content: center;
`,pe=o.a.div`
    display: grid;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    margin-bottom: 15px;

    ${D.mediaBreakpointOnlySm`
        grid-template-columns: repeat(2, calc(50% - 7.5px));
    `};

    ${D.mediaBreakpointOnlyMd`
        grid-template-columns: repeat(3, calc(33.33% - 10px));
    `};

    ${D.mediaBreakpointOnlyLg`
        grid-template-columns: repeat(4, calc(25% - 11.25px));
    `};

    ${D.mediaBreakpointOnlyXl`
        grid-template-columns: repeat(5, calc(20% - 12px));
    `};
`,je=o.a.div`
    display: grid;
    grid-column-gap: 15px;
    grid-row-gap: 5px;
    grid-template-columns: 30% calc(70% - 15px);
    background-color: #fff;
    padding: 15px;
`,me=o.a.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px dashed #edeff5;
    min-height: 142px;
`,ge=Object(I.b)((e=>Object(_.jsx)(Y,{...e}))),xe=Object(I.a)((e=>{let{items:t,onAdd:i,onDetail:n,onEdit:a,onRemove:s}=e;return Object(_.jsxs)(pe,{children:[t.map(((e,t)=>Object(_.jsx)(ge,{index:t,data:e,onDetail:n,onEdit:a,onRemove:s},`item-${t}`))),Object(_.jsx)(me,{children:Object(_.jsx)(f.a,{iconBefore:O.a,marginRight:12,onClick:i,children:"Add secret"})})]})}));class be extends n.Component{constructor(e){super(e),this.state={cards:[],isLoading:!1,dialog:{services:["Binance","Coinlist","Huobi","Bittrex","Kraken","Poloniex","Xapo","LocalBitcoins","Bitstamp","Bitfinex"],placeholder:null,isShown:!1,isLoading:!1,edit:null,value:"",service:"",secretKey:""},detail:{isShown:!1,card:{}}},this.handleInputChange=this.handleInputChange.bind(this),this.handleDialogOpenComplete=this.handleDialogOpenComplete.bind(this),this.handleDialogCloseComplete=this.handleDialogCloseComplete.bind(this),this.handleCardDetail=this.handleCardDetail.bind(this),this.handleCardEdit=this.handleCardEdit.bind(this),this.handleCardRemove=this.handleCardRemove.bind(this),this.handleSortEnd=this.handleSortEnd.bind(this),this.saveCard=this.saveCard.bind(this)}handleInputChange(e){const t=e.target;this.setState({dialog:{...this.state.dialog,[t.name]:t.value}})}handleCardDetail(e){const t=this.state.cards.find((t=>t.id===e));this.setState({detail:{...this.state.detail,isShown:!0,card:t,otpauth:E.authenticator.keyuri(t.user,t.service,t.secretKey)}})}handleCardEdit(e){const t=this.state.cards.find((t=>t.id===e));this.setState({dialog:{...this.state.dialog,isShown:!0,edit:e,user:t.user,service:t.service,secretKey:t.secretKey}})}async handleCardRemove(e){let{cards:t}=this.state;const i=t.findIndex((t=>t.id===e));i>-1&&(t.splice(i,1),this.setState({cards:t}),await le(t),v.a.success("Card deleted successfully"))}async fetchData(){this.setState({isLoading:!0});const e=await(async()=>{try{const e=await re.getFile(oe);return e?JSON.parse(e):ce}catch(e){return ce}})();this.setState({cards:e,isLoading:!1})}async saveCard(){const{dialog:e}=this.state;let t=this.state.cards;this.setState({dialog:{...e,isLoading:!0}});let i={id:e.edit||Object(F.a)(),user:e.user.trim(),service:e.service.trim(),secretKey:e.secretKey.trim(),createdAt:Date.now()};if(e.edit){const n=t.findIndex((t=>t.id===e.edit));n>-1&&(t[n]=i)}else t.push(i);await le(t),this.setState({cardIndex:i.id,cards:t,dialog:{...e,isShown:!1,isLoading:!1,edit:null,user:"",service:"",secretKey:""}}),v.a.success("Card successfully added")}handleDialogOpenComplete(){const{services:e}=this.state.dialog,t=e[Math.floor(Math.random()*e.length)];this.setState({dialog:{...this.state.dialog,placeholder:t}})}handleDialogCloseComplete(){let e=this.state.dialog;e.edit&&(e={...e,edit:null,user:"",service:"",secretKey:""}),this.setState({dialog:{...e,isShown:!1,isLoading:!1}})}async handleSortEnd(e){let{oldIndex:t,newIndex:i}=e,n=Object(L.a)(this.state.cards,t,i);this.setState({cards:n}),await le(n)}render(){const{dialog:e,cards:t,detail:i}=this.state,{filter:n}=this.props,a=t.filter((e=>e.user.toLowerCase().includes(n)||e.service.toLowerCase().includes(n)));return this.state.isLoading?Object(_.jsx)(ue,{children:Object(_.jsx)(b.a,{})}):Object(_.jsxs)(he,{children:[Object(_.jsx)(p.a,{is:"h1",size:700,marginBottom:20,children:"Authentication cards"}),Object(_.jsx)(xe,{items:a,onAdd:()=>this.setState({dialog:{...e,isShown:!0}}),onDetail:this.handleCardDetail,onEdit:this.handleCardEdit,onRemove:this.handleCardRemove,onSortEnd:this.handleSortEnd,axis:"xy",pressDelay:200}),Object(_.jsxs)(C.a,{width:400,isShown:e.isShown,title:(e.edit?"Edit":"Add")+" secret",onOpenComplete:this.handleDialogOpenComplete,onCloseComplete:this.handleDialogCloseComplete,isConfirmLoading:e.isLoading,onConfirm:this.saveCard.bind(this),confirmLabel:e.isLoading?"Loading...":"Save",isConfirmDisabled:!e.user||!e.service||!e.secretKey,children:[Object(_.jsx)(y.a,{name:"user",label:"User name",required:!0,placeholder:"for example, Elon Must or user@domain.com",defaultValue:e.user,onChange:this.handleInputChange}),Object(_.jsx)(y.a,{name:"service",label:"Service name",required:!0,placeholder:e.placeholder,defaultValue:e.service,onChange:this.handleInputChange}),Object(_.jsx)(y.a,{name:"secretKey",label:"Secret key",required:!0,placeholder:"Enter secret key",defaultValue:e.secretKey,onChange:this.handleInputChange})]}),Object(_.jsxs)(w.a,{isShown:i.isShown,onCloseComplete:()=>this.setState({detail:{...i,isShown:!1}}),containerProps:{display:"flex",flex:"1",flexDirection:"column"},width:400,children:[Object(_.jsx)(d.a,{zIndex:1,flexShrink:0,elevation:0,backgroundColor:"white",padding:15,children:Object(_.jsx)(p.a,{size:600,children:"Card details"})}),Object(_.jsxs)(d.a,{display:"flex",flex:"1",flexDirection:"column",overflowY:"scroll",background:"tint1",padding:15,children:[Object(_.jsxs)(je,{children:[Object(_.jsx)(S.a,{children:"id:"}),Object(_.jsx)(k.a,{children:i.card.id}),Object(_.jsx)(S.a,{children:"created at:"}),Object(_.jsx)(k.a,{children:Object(_.jsx)(z.a,{unix:!0,format:"LLL",children:i.card.createdAt/1e3})}),Object(_.jsx)(S.a,{children:"user:"}),Object(_.jsx)(k.a,{children:i.card.user}),Object(_.jsx)(S.a,{children:"service:"}),Object(_.jsx)(k.a,{children:i.card.service}),Object(_.jsx)(S.a,{children:"secret key:"}),Object(_.jsx)(k.a,{children:i.card.secretKey})]}),Object(_.jsx)(d.a,{display:"flex",flexGrow:1,alignItems:"center",justifyContent:"center",children:Object(_.jsx)(T.a,{value:i.otpauth,level:"H",size:256})})]})]})]})}componentDidMount(){this.fetchData()}}const fe=o.a.div`
    flex-grow: 1;
    padding: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`,Oe=o.a.div`
    display: flex;
    //position: relative;
    //z-index: 100;
    background-color: #fff;
    padding: 15px;

    ${D.mediaBreakpointUpLg`border-bottom: 1px solid transparent;`}
`,ve="https://s3.amazonaws.com/onename/avatar-placeholder.png",Ce=o.a.footer`
  display: flex;
  height: 40px;
  border-top: 1px solid #ced4da;
  padding: 0 15px;
  align-items: center;
  justify-content: space-between;
`;class ye extends n.Component{constructor(e){super(e),this.state={person:{name:()=>"Anonymous",avatarUrl:()=>ve},username:"",filter:""},this.year=(new Date).getFullYear()}render(){const{handleSignOut:e}=this.props,{person:t,username:i,filter:n}=this.state;return ae.isSignInPending()?Object(_.jsx)(b.a,{}):Object(_.jsxs)(fe,{children:[Object(_.jsxs)(Oe,{children:[Object(_.jsx)(c.a,{placeholder:"Filter cards...",width:"100%",height:40,marginRight:15,onChange:e=>this.setState({filter:e.target.value}),value:this.state.filter}),Object(_.jsx)(l.a,{content:()=>Object(_.jsxs)(d.a,{position:h.a.BOTTOM_RIGHT,minWidth:240,children:[Object(_.jsxs)(d.a,{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",border:"none",marginTop:15,marginBottom:15,children:[Object(_.jsx)(u.a,{src:t.avatarUrl()?t.avatarUrl():ve,name:t.name()?t.name():"Nameless Person",size:80}),Object(_.jsx)(p.a,{is:"h3",marginTop:15,children:t.name()?t.name():"Nameless Person"}),Object(_.jsx)(j.a,{size:300,children:i})]}),Object(_.jsxs)(m.a,{children:[Object(_.jsx)(m.a.Divider,{}),Object(_.jsx)(m.a.Group,{children:Object(_.jsx)(m.a.Item,{icon:g.a,onSelect:e.bind(this),children:"Sign out"})})]})]}),children:Object(_.jsx)(u.a,{src:t.avatarUrl()?t.avatarUrl():ve,name:t.name()?t.name():"Nameless Person",size:40})})]}),Object(_.jsx)(d.a,{flexGrow:1,padding:15,display:"flex",children:Object(_.jsx)(be,{filter:n})}),Object(_.jsxs)(Ce,{children:[Object(_.jsxs)(j.a,{size:300,children:["\xa9 ",this.year," Khalik Faradzhli"]}),Object(_.jsxs)(j.a,{size:300,children:["Designed by: ",Object(_.jsx)(x.a,{size:300,href:"https://evergreen.segment.com/",children:"Evergreen React UI Framework"})]})]})]})}componentWillMount(){this.setState({person:new te.a(se().profile),username:se().username})}}const we=Object(o.a)((e=>{let{className:t,alt:i}=e;return Object(_.jsx)("img",{src:ie,className:t,alt:i})}))`
    height: 10vmin;
    margin-bottom: 1.25rem;
`;function Se(){return Object(_.jsx)(d.a,{clearfix:!0,children:Object(_.jsxs)(d.a,{elevation:1,float:"left",width:360,margin:24,padding:24,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor:"white",children:[Object(_.jsx)(we,{alt:"Stacks Authenticator"}),Object(_.jsx)(p.a,{is:"h1",size:800,children:"Stacks Authenticator"}),Object(_.jsx)(j.a,{marginTop:16,children:"Please sign in to continue"}),Object(_.jsx)(f.a,{appearance:"primary",height:40,marginTop:16,iconBefore:"log-in",onClick:()=>{Object(ee.a)({appDetails:{name:"Stacks auth",icon:window.location.origin+ie},redirectTo:"/",onFinish:()=>{window.location.reload()},userSession:ae})},children:"Sigh In with Hiro wallet"})]})})}class ke extends n.Component{constructor(){super(...arguments),this.state={userData:null}}handleSignOut(e){e.preventDefault(),this.setState({userData:null}),ae.signUserOut(window.location.origin)}render(){return ae.isUserSignedIn()?Object(_.jsx)(ye,{handleSignOut:this.handleSignOut}):Object(_.jsx)(Se,{})}componentWillMount(){ae.isSignInPending()?ae.handlePendingSignIn().then((e=>{window.history.replaceState({},document.title,"/"),this.setState({userData:e})})):ae.isUserSignedIn()&&this.setState({userData:se()})}}var De=e=>{e&&e instanceof Function&&i.e(6).then(i.bind(null,660)).then((t=>{let{getCLS:i,getFID:n,getFCP:a,getLCP:s,getTTFB:r}=t;i(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(ke,{})}),document.getElementById("root")),De()}},[[597,2,3]]]);
//# sourceMappingURL=main.ec68a3ff.chunk.js.map