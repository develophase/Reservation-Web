(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{56:function(e,a,t){e.exports=t.p+"static/media/bg.2fd106bd.png"},91:function(e,a,t){"use strict";t.r(a);var s=t(0),r=t.n(s),o=t(70),n=t(71),l=t(72),c=t(73),m=t(74),i=t(75),d=t(76),h=t(77),p=t(78),u=t(79),g=t(48),w=t(80),E=t(81);const b="https://app.nocodb.com/api/v2/tables/m7vm0tg07gje478/records",y="2LDRJE3zbiKS_05EZ5as85ZghFLMWOrdBrU_kNDo",S=(e,a,t)=>"".concat(b,"?offset=").concat(e,"&limit=").concat(a,"&where=").concat(t);var N=t(56),P=t.n(N),f=t(89);t(57);a.default=class extends s.Component{constructor(e){super(e),this.state={phoneNumber:"",password:"",messageErrorPassword:"",messageErrorUsername:"",passwordTextType:"password",showEyeSlashPasswordIcon:!0,loading:!1,activePage:1,total:0,loadingData:!1,tableData:[]},this.handlePhoneNumber=(e=>{var a=e.target.value;""!==a&&this.setState({messageErrorUsername:""}),/^(0|08|08[0-9]{1,12})$/.test(a)&&this.setState({phoneNumber:e.target.value})}),this.handlePassword=(e=>{""!==e.target.value&&this.setState({messageErrorPassword:""}),this.setState({password:e.target.value})}),this.onHandleSubmit=(e=>{if(e.preventDefault(),this.validate()){this.setState({loading:!0});var a=this.state.phoneNumber,t=this.state.password;if(null!==a&&""!==a&&null!==t&&""!==t){const e={accept:"application/json","Content-Type":"application/json","xc-token":y},s="(Phone,eq,".concat(a,")~and(Password,eq,").concat(t,")"),r=S(0,1,s);Object(f.a)({method:"get",url:r,headers:e}).then(e=>{var a=e.data.list;this.setState({loading:!1}),0==a.length?alert("User tidak ditemukan, mohon cek nomor dan password anda"):(localStorage.setItem("Id",a[0].Id),localStorage.setItem("Name",a[0].Name),localStorage.setItem("Role",a[0].Role),localStorage.setItem("Username",a[0].Username),this.props.history.push("/"))}).catch(e=>{this.setState({loading:!1}),alert("username atau password tidak ditemukan")})}}}),this.validate=(()=>{let e=!0;var a=this.state.phoneNumber,t=this.state.password;return null!==a&&""!==a||(this.setState({messageErrorUsername:"Username Tidak Boleh Kosong"}),e=!1),null!==t&&""!==t||(this.setState({messageErrorPassword:"Password tidak boleh kosong"}),e=!1),e}),this.showPassword=(()=>{"password"===this.state.passwordTextType?this.setState({passwordTextType:"text",showEyeSlashPasswordIcon:!1}):this.setState({passwordTextType:"password",showEyeSlashPasswordIcon:!0})})}render(){return null!=localStorage.getItem("token")&&this.props.history.push("/"),r.a.createElement("div",{className:"app flex-row align-items-center"},r.a.createElement(o.a,null,r.a.createElement(n.a,{className:"justify-content-center"},r.a.createElement(l.a,{md:"8"},r.a.createElement(c.a,null,r.a.createElement(m.a,{className:"p-4"},r.a.createElement(i.a,null,r.a.createElement(d.a,{onSubmit:this.onHandleSubmit},r.a.createElement("h1",null,"Login"),r.a.createElement("p",{className:"text-muted"},"Sign In to your account"),r.a.createElement(h.a,{className:"mb-3"},r.a.createElement(p.a,null,r.a.createElement("i",{className:"icon-user"})),r.a.createElement(u.a,{type:"text",required:!0,onChange:this.handlePhoneNumber,placeholder:"Phone Number",autoComplete:"Phone Number"})),r.a.createElement("font",{color:"red"},this.state.messageErrorUsername),r.a.createElement(h.a,{className:"mb-4"},r.a.createElement(p.a,null,r.a.createElement("i",{className:"icon-lock"})),r.a.createElement(u.a,{type:this.state.passwordTextType,className:"border border-right-0",onChange:this.handlePassword,placeholder:"Password",autoComplete:"current-password"}),r.a.createElement(g.a,{className:"bg-transparent border border-left-0 solid transparent",onClick:this.showPassword},r.a.createElement("i",{className:"fa ".concat(this.state.showEyeSlashPasswordIcon?"fa-eye-slash":"fa-eye")}))),r.a.createElement("font",{color:"red"},this.state.messageErrorPassword),r.a.createElement(n.a,null,r.a.createElement(l.a,{xs:"6"},this.state.loading?r.a.createElement("span",null,r.a.createElement(w.a,{size:"sm",color:"primary"})," Logging in..."):r.a.createElement(g.a,{type:"submit",color:"primary",className:"px-4"},"Login")))))),r.a.createElement(m.a,{body:!0,className:"justify-content-center",style:{width:"44%",backgroundColor:"#0563B1"}},r.a.createElement(E.a,{src:P.a,alt:"Logo",style:{padding:"auto"}})))))))}}}}]);
//# sourceMappingURL=8.ba7b26b8.chunk.js.map