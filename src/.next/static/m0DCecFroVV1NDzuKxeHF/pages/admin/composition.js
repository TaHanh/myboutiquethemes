(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"2l1p":function(e,t,a){"use strict";a.r(t);var c=a("fFdx"),n=a.n(c),s=a("CafY"),o=a("mXGw"),l=a("czhI"),r=a.n(l),i=a("4/PI"),m=(a("v1MJ"),a("rOcY")),p=a.n(m);a("sucu");function u(e){var[t,a]=Object(o.useState)([]),[c,n]=Object(o.useState)(""),[l,m]=Object(o.useState)(!1);Object(o.useEffect)(()=>{a(e.compositions)},[]);var u=(e,c)=>{switch(console.log(e,c),e){case"POST_COMPOSITON":""!=c?(m(!0),r.a.post(p.a.host.base+p.a.path.base.compositions,{name:c}).then(e=>{var c=t.unshift(e.data);a(c),console.log("POST_COMPOSITON",e),i.b.success("Success !",{autoClose:3e3})}).catch(e=>{console.log("POST_COMPOSITON",e),i.b.error("Error !",{autoClose:3e3})}).finally(e=>{m(!1)})):i.b.error("B\u1ea1n ch\u01b0a nh\u1eadp th\xe0nh ph\u1ea7n !",{autoClose:3e3});break;case"DELETE":m(!0),r.a.delete(p.a.host.base+p.a.path.base.compositions+c.item.id).then(e=>{t.splice(c.index,1),a(t),i.b.success("Success !",{autoClose:3e3})}).catch(e=>{console.log("POST_COMPOSITON",e),i.b.error("Error !",{autoClose:3e3})}).finally(e=>{m(!1)})}};return React.createElement(s.a,{title:"Th\xe0nh ph\u1ea7n"},React.createElement("div",{className:"composition px-md-4 px-3"},React.createElement("div",{className:"py-md-5 pb-5"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-12"},React.createElement("h5",null,"Th\xe0nh ph\u1ea7n"),React.createElement("input",{type:"text",className:"form-control",multiple:!0,value:c,onChange:e=>{(e=>{n(e.target.value)})(e)},onKeyPress:e=>{"Enter"==e.key&&u("POST_COMPOSITON",c)}})))),React.createElement("div",{className:"row"},e.compositions&&e.compositions.map((e,t)=>React.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 col-12"},React.createElement("li",{class:"list-group-item d-flex justify-content-between align-items-center px-3 my-3"},e.name,React.createElement("span",{class:"badge badge-danger cursor-pointer ml-2",onClick:()=>u("DELETE",{item:e,index:t})},React.createElement("span",{"aria-hidden":"true"},"\xd7")))))),React.createElement("div",{className:"row justify-content-center pt-5 mx-0"},l?React.createElement("div",{class:"spinner-border text-primary",role:"status"},React.createElement("span",{class:"sr-only"},"Loading...")):React.createElement("button",{type:"button",class:"btn btn-danger text-uppercase font-weight-bold",onClick:()=>u("POST_COMPOSITON",c)},"\u0110\u0103ng b\xe0i"))))}u.getInitialProps=n()((function*(){var e=yield r.a.get(p.a.host.base+p.a.path.base.compositions).catch(e=>console.log("Error: ",e.code));return{compositions:e&&e.data||[]}})),t.default=u},qfJO:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/composition",function(){return a("2l1p")}])}},[["qfJO",0,2,5,1,3,4,6]]]);