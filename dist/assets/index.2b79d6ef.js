var xe=Object.defineProperty,ye=Object.defineProperties;var Ne=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var ee=(o,t,s)=>t in o?xe(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s,w=(o,t)=>{for(var s in t||(t={}))we.call(t,s)&&ee(o,s,t[s]);if(Y)for(var s of Y(t))Se.call(t,s)&&ee(o,s,t[s]);return o},F=(o,t)=>ye(o,Ne(t));import{s as S,S as re,r as p,j as r,a as e,N as te,B as v,D as Ce,b as Pe,F as z,c as I,I as Ee,P as ke,d as Fe,u as oe,e as ae,C as R,f as k,g as b,h as ie,M as De,O as Le,i as _e,R as j,T as Te,k as Ie,l as Ae,m as M,n as Re,o as se,p as je,q as Oe,t as Me,v as $e,w as O,x as Ue,E as qe}from"./vendor.bc8296ee.js";const He=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}};He();const ze=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 2rem;
  width: 100%;
  height: fit-content;
  background: white;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-grow: 1;
  }

  ul {
    padding-inline-start: 0;
    display: none;
    flex-grow: 2;
    align-self: center;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    a {
      text-decoration: none;
    }
  }

  .custom-children {
    display: flex;
    * {
      font-size: 1.3rem;
    }
  }

  @media (min-width: 700px) {
    .custom-children {
      display: none;
    }

    ul {
      display: flex;
    }
  }
`,ne=S.img`
  width: ${o=>o.size||"100%"};
  height: fit-content;
`,Be=S(re)`
  .p-sidebar-content {
    display: grid;
    place-items: start center;

    ul {
      display: grid;
      place-items: center;
      list-style: none;
      grid-gap: 2rem;
      padding-inline-start: 0;
      h2 {
        display: flex;
        gap: 1rem;
        place-items: center;
      }
      a {
        width: 100%;
        text-decoration: none;
        li {
          display: flex;
          justify-content: center;
          gap: 1rem;
          background-color: var(--primary-color);
          padding: 1rem;
          color: white;
          width: 100%;
          transition: all 0.2s ease-in-out;
          border-radius: 5px;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
`,W=({logo:o,brandTitle:t,logoSize:s,links:c,customMenu:a,additionalItem:i})=>{const d=y=>y.map((u,g)=>e(te,{to:u.route,children:r("li",{children:[e("i",{className:u.icon||""}),u.label]})},g)),[n,h]=p.exports.useState(!1),x=()=>r("div",{children:[e(v,{icon:"pi pi-bars",onClick:()=>h(!0),className:"p-mr-2"}),e(Be,{visible:n,fullScreen:!0,onHide:()=>h(!1),children:r("ul",{children:[r("h2",{children:[e(ne,{src:o,size:s}),"Genios"]}),d(c)||""]})})]});return r(ze,{children:[r("div",{className:"brand",children:[e("a",{href:"/",children:e(ne,{src:o,size:s})}),e("h3",{children:t||""})]}),e("ul",{children:c?d(c):""}),e("div",{className:"custom-children",children:a||x()}),i||""]})},Ge=S.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 2rem;
  padding: 6rem 2rem;
  height: min-content;

  .hero-info {
    display: grid;
    grid-gap: 1rem;
  }

  .hero-info__title {
    color: var(--primary);
  }

  .hero-info__paragraph {
    font-size: 1.3rem;
  }

  .hero-image {
    justify-self: end;
    width: 70%;
  }

  .button {
    background: var(--accent);
    padding: 1rem;
    color: white;
    border: none;
    border-radius: 5.76px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
  }
`,Je=({title:o,text:t,image:s})=>r(Ge,{children:[r("div",{className:"hero-info",children:[e("h1",{className:"hero-info__title",children:o}),e("p",{className:"hero-info__paragraph",children:t}),e("form",{children:e(te,{to:"./catalog",className:"button",children:"Ver cat\xE1logo"})})]}),e("img",{src:s,alt:"hero image",className:"hero-image"})]});var Ve="/assets/heroImage.e5da6c42.png",B="/assets/logo.3a5ee6e9.svg";const We="https://genios-softgac-server.herokuapp.com";var G={API_URL:We};const Ze=()=>r("div",{children:[e(W,{logo:B,brandTitle:"Genios aprende jugando",logoSize:"50px",links:[{label:"ver cat\xE1logo",route:"/catalog",icon:"pi pi-shopping-bag"},{label:"Iniciar Sesi\xF3n",route:"/login",icon:"pi pi-user"}]}),e(Je,{title:"GENIOS APRENDE JUGANDO",text:" Pagina inicial de la empresa, est\xE1 p\xE1gina es provisional y mejorar\xE1 su dise\xF1o en el futuro. En la siguiente lista encuentras v\xEDnculos r\xE1pidos a los prototipos de interfaz.",image:Ve})]}),Z=(o,t)=>{document.addEventListener(o,t)},K=(o,t)=>{document.removeEventListener(o,t)},Q=(o,t)=>{const s=new CustomEvent(o,{detail:t});document.dispatchEvent(s)},Ke=S.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  place-items: center;
  padding: 0.5rem;

  & * {
    margin: 0;
    padding: 0;
  }

  .product-detail {
    position: relative;
    display: grid;
    gap: 0.5rem;

    &-header,
    &-footer {
      display: flex;
      place-items: center;
    }

    &-footer {
      gap: 0.5rem;

      i {
        cursor: pointer;
        color: var(--pink-500);
        transition: color 0.3s ease-in-out;
        &:hover {
          color: var(--pink-800);
        }
      }
    }
  }

  .product-category {
    display: flex;
    place-items: center;
    gap: 1rem;
  }
`,Qe=o=>{const t=()=>{Q("on-delete-product",o.id)};return r(Ke,{className:"product-item",children:[e("div",{className:"product-image",style:{backgroundImage:`url(${o.image})`,backgroundSize:"contain",width:"100px",height:"100px",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),r("div",{className:"product-detail",children:[e("section",{className:"product-detail-header",children:e("strong",{children:o.name})}),r("div",{className:"product-category",children:[e("i",{className:"pi pi-tag product-category-icon"}),e("p",{className:"product-category-text",children:o.category})]}),r("div",{className:"product-detail-footer",children:[r("p",{className:"product-price",children:["$ ",o.price]}),e("i",{className:"pi pi-trash",onClick:t})]})]})]})},Xe=S(Ce)`
  .p-datascroller-content {
    padding: 0.2rem;
  }
  .p-datascroller-list {
    display: grid;
    gap: 0.3rem;
  }
`,Ye=S(re)`
  .p-sidebar-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`,er=()=>{const[o,t]=p.exports.useState(!1);p.exports.useState(!1);const[s,c]=p.exports.useState(0),[a,i]=p.exports.useState([]);o&&(document.querySelector("body").style.overflow="hidden");const d=()=>a.length?a.reduce((g,C)=>g+C.price,0):void 0,n=u=>{const g=u.detail;if(a.some(P=>P.id===g.id))return;const C=[...a,g];i(C)},h=()=>{t(!0),document.querySelector("body").style.overflow="hidden"};o||(document.querySelector("body").style.overflow="auto");const x=u=>{const g=u.detail,C=a.filter(P=>P.id!==g);i(C)},y=()=>{const u=a.map(g=>g.id);console.log("Lista de Ids para orden",u)};return p.exports.useEffect(()=>(Z("addProduct:click",n),Z("on-delete-product",x),c(d()),()=>{K("addProduct:click",n),K("on-delete-product",x)}),[n,x]),r("div",{children:[e(v,{icon:"pi pi-shopping-cart",label:"carrito",badge:a.length,onClick:h}),r(Ye,{position:"right",visible:o,onHide:()=>t(!1),children:[e("h2",{style:{margin:"0",padding:"0"},children:"Mi Carrito"}),r("span",{children:[e("strong",{children:"# Productos: "})," ",a.length]}),e(Xe,{className:"data-scroller",value:a,itemTemplate:Qe,rows:5,inline:!0,scrollHeight:"500px",emptyMessage:"No hay productos en el carrito."}),r("p",{className:"cart-total",children:[e("strong",{children:"TOTAL:"})," $",s]}),e(v,{label:"Hacer Compra",onClick:y})]})]})},rr=S.div`
  position: relative;
  display: grid;
  grid-gap: 1rem;
  box-shadow: 0px 4px 30px 0px rgba(104, 117, 130, 0.14);
  padding: 1rem;
  border: 1px solid rgba(227, 227, 227, 1);
  border-radius: 5px;
  max-width: 100%;
  cursor: pointer;
  width: 100%;
  height: 350px;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.01);
    border: 1px solid lightgray;
  }

  .product-card__image {
    background-image: url('${o=>o.image}');
    height: 180px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .product-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .product-review {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .product-name {
    font-size: 1rem;
  }
  .p-button {
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
  .p-button.p-button-icon-only {
    padding: 0;
  }
`,tr=({name:o,price:t,image:s,data:c})=>r(rr,{onClick:d=>{d.detail=c.id,Q("productDetail:click",d.detail)},className:"card-container",image:s,children:[e("div",{className:"product-card__image"}),r("div",{className:"product-info",children:[r("div",{children:[e("h2",{className:"product-name",children:o}),r("p",{className:"product-price",children:[e("strong",{children:"Price: "}),t]})]}),e(v,{icon:"pi pi-plus",className:"add-cart p-button-rounded",tooltip:"Agregar producto al carrito",onClick:d=>{d.stopPropagation();const n=d.target.closest(".add-cart");Pe(n,{transform:["scale(1.1)","scale(1)"]},{duration:.4}),d.detail={id:c.id,image:c.foto,name:c.nombre,price:c.precio,description:c.descripcion,reference:c.referencia,category:c.categoria,dimensions:c.dimensiones},Q("addProduct:click",d.detail)}})]})]}),or=S.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 1rem;
`,ar=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`,ir=({product:o})=>r(ar,{children:[e(Ee,{src:o.foto,width:"200",preview:!0}),r("div",{className:"product-detail-info",children:[e("h2",{children:o.nombre}),r("p",{children:[e("strong",{children:"Descripci\xF3n:"})," ",o.descripcion]}),r("p",{children:[" ",e("strong",{children:"Categor\xEDa:"})," ",o.categoria]}),r("p",{children:[e("strong",{children:"Referencia: "})," ",o.referencia]}),r("p",{children:["$",o.precio]})]})]}),sr=({productList:o})=>{const[t,s]=p.exports.useState({}),[c,a]=p.exports.useState(!1),i=n=>{a(!0),s(o.filter(h=>h.id===n.detail)[0])};return p.exports.useEffect(()=>(Z("productDetail:click",i),()=>{K("productDetail:click",i)}),[i]),r(z,{children:[e(or,{className:"product-grid",children:(n=>n.map(h=>e(tr,{name:h.nombre,price:h.precio,image:h.foto,data:h},h.id)))(o)}),e(I,{style:{width:"35vw",minWidth:"300px"},header:"Detalle de producto",visible:c,draggable:!1,dismissableMask:!0,modal:!0,onHide:()=>a(!1),children:e(ir,{product:t})})]})},nr=o=>{const t=o||6,[s,c]=p.exports.useState(0),a=u=>{c(u.first)},[i,d]=p.exports.useState(null),[n,h]=p.exports.useState(!1),[x,y]=p.exports.useState([]);if(console.log("Product list ",x),p.exports.useEffect(()=>{fetch(`${G.API_URL}/products`).then(u=>u.json()).then(u=>{h(!0),y(u)})},[]),i)console.error(i.message);else if(n){const u=x.slice(s,s+t);return r("div",{children:[e(sr,{productList:u}),e(ke,{first:s,rows:t,totalRecords:x.length,onPageChange:a})]})}else return e("h1",{children:"Loading products..."})},lr=()=>{const o=[{label:"home",route:"/",icon:"pi pi-shopping-bag"},{label:"Iniciar Sesi\xF3n",route:"/login",icon:"pi pi-user"}],[t,s]=p.exports.useState(null);return r("div",{children:[e(W,{logo:B,brandTitle:"Genios aprende jugando",logoSize:"50px",links:o,additionalItem:e(er,{})}),e(Fe,{style:{margin:"1rem"},value:t,options:[{name:"Muebles",code:"M"},{name:"Juguetes",code:"J"}],onChange:i=>{s(i.value)},optionLabel:"name",placeholder:"Seleccionar Categor\xEDa"}),nr(12)]})},cr=()=>r("div",{children:[e("h1",{children:"Esto es el checkout o p\xE1gina para compra"}),e("a",{href:"/catalog",children:"Volver al cat\xE1logo"})]}),dr=S.div`
  display: grid;
  place-items: center;

  .login-form__container {
    display: grid;
    height: -webkit-fill-available;
    padding: 3rem 1rem 1rem;

    .login-form__form {
      all: inherit;
      gap: 1.5rem;
    }
  }
`,pr=async(o,t)=>{const s=G.API_URL;let c={Accept:"*/*","Content-Type":"application/json"},a=JSON.stringify({email:o,password:t}),i={};return await fetch(`${s}/users/login/`,{method:"POST",body:a,headers:c}).then(d=>d.ok?d.json():d.text().then(n=>{throw new Error(n)})).then(d=>{i=d}).catch(d=>{i=d}),i},ur=()=>{const[o,t]=p.exports.useState(!1),[s,c]=p.exports.useState(!1),[a,i]=p.exports.useState(""),[d,n]=p.exports.useState({}),h={email:"",password:""},{control:x,formState:{errors:y},handleSubmit:u,reset:g}=oe({defaultValues:h}),C=f=>{pr(f.email,f.password).then(E=>{if(!Object.keys(E).length){console.log(E);const m=JSON.parse(E.message);m.password?(i(`Password Error: ${m.password[0]}`),c(!0)):(i(m.non_field_errors[0]),c(!0));return}n(E.user),localStorage.setItem("login-data",JSON.stringify(E.user)),t(!0),g()})},P=f=>y[f]&&e("small",{className:"p-error",children:y[f].message}),D=ae(),A=()=>{D("/admin/product-admin"),t(!1)},L=e("div",{className:"p-d-flex p-jc-center",children:e(v,{label:"OK",className:"p-button-text",autoFocus:!0,onClick:A})});return p.exports.useEffect(()=>{!JSON.parse(localStorage.getItem("login-data"))||A()}),r(z,{children:[e(I,{visible:o,onHide:()=>t(!1),position:"center",footer:L,showHeader:!1,breakpoints:{"960px":"80vw"},style:{width:"30vw"},children:r("div",{style:{padding:"1rem"},className:"p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3",children:[e("i",{className:"pi pi-check-circle",style:{fontSize:"5rem",color:"var(--green-500)"}}),r("h5",{children:[" Bienvenid@ ",d.first_name]})]})}),e(I,{visible:s,onHide:()=>c(!1),position:"center",breakpoints:{"960px":"80vw"},style:{width:"30vw"},children:r("div",{style:{display:"grid",gridAutoFlow:"column",placeItems:"center",gap:"1rem"},children:[e("i",{style:{fontSize:"3rem",color:"var(--pink-500)"},className:"pi pi-info-circle"}),r("h5",{children:[a," "]})]})}),e("div",{className:"login-form__container",children:r("form",{onSubmit:u(C),className:"p-fluid login-form__form",children:[e("h1",{children:"Iniciar Sesi\xF3n"}),r("div",{className:"p-field",children:[r("span",{className:"p-float-label",children:[e(R,{name:"email",control:x,rules:{required:"El correo es obligatorio.",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Correo no v\xE1lido . E.g. ejemplo@email.com"}},render:({field:f,fieldState:_})=>e(k,F(w({id:f.email},f),{autoFocus:!0,className:b({"p-invalid":_.invalid})}))}),e("label",{htmlFor:"email",className:b({"p-error":!!y.email}),children:"Email*"})]}),P("email")]}),r("div",{className:"p-field",children:[r("span",{className:"p-float-label",children:[e(R,{name:"password",control:x,rules:{required:"La contrase\xF1a es obligatoria."},render:({field:f,fieldState:_})=>e(ie,F(w({id:f.name},f),{className:b({"p-invalid":_.invalid}),feedback:!1}))}),e("label",{htmlFor:"password",className:b({"p-error":y.password}),children:"Contrase\xF1a*"})]}),P("password")]}),e(v,{type:"submit",label:"Submit",className:"p-mt-2"})]})})]})},mr=()=>r(dr,{children:[e(W,{logo:B,brandTitle:"Genios aprende jugando",logoSize:"50px",links:[{label:"home",route:"/",icon:"pi pi-shopping-bag"},{label:"catalogo",route:"/catalog",icon:"pi pi-shopping-bag"}]}),e(ur,{})]}),hr=S.div`
  .admin-container {
    padding: 1rem;
  }

  .p-menubar {
    gap: 1rem;
    justify-content: space-between;
  }

  .p-menubar-start {
    display: flex;
    gap: 1rem;
    img {
      width: 40px;
    }
  }
`,gr=()=>{const o=localStorage.getItem("login-data"),t=ae(),s=d=>{_e({target:d.currentTarget,message:"\xBF Est\xE1 seguro de cerrar la sesi\xF3n ?",icon:"pi pi-exclamation-triangle",accept:()=>c()})},c=()=>{t("/"),localStorage.removeItem("login-data"),window.removeEventListener("popstate",()=>{history.pushState(null,document.title,location.href)})},a=[{label:"Registrar Usuarios",icon:"pi pi-fw pi-user",command:()=>{t("/admin/user-admin")}},{label:"Productos",icon:"pi pi-fw pi-shopping-bag",command:()=>{t("/admin/product-admin")}},{label:"Cerrar Sesi\xF3n",icon:"pi pi-fw pi-external-link",command:d=>{s(d.originalEvent)}}],i=()=>r(z,{children:[e("img",{src:B,alt:"Brand"}),e("h4",{children:"Genios SoftGAC"})]});return p.exports.useEffect(()=>{if(!o){t("/");return}history.pushState(null,document.title,location.href),window.addEventListener("popstate",()=>{history.pushState(null,document.title,location.href)})},[]),r(hr,{children:[e(De,{model:a,start:i}),e("div",{className:"admin-container",children:e(Le,{})})]})},J=G.API_URL;class fr{getProducts(){return fetch(`${J}/products`).then(t=>t.json()).then(t=>t)}deleteProduct(t){return fetch(`${J}/products/${t}`,{method:"DELETE"}).then(s=>s.text()).then(s=>s)}postNewProduct(t){const s={Accept:"*/*","Content-Type":"application/json"},c=JSON.stringify(t);return fetch(`${J}/products/`,{method:"POST",body:c,headers:s}).then(a=>a.text()).then(a=>a)}updateProduct(t,s){const c={Accept:"*/*","Content-Type":"application/json"},a=JSON.stringify(t);return console.log("update--->",a),fetch(`${J}/products/${s}`,{method:"PUT",body:a,headers:c}).then(i=>i.text()).then(i=>i)}}const br=()=>{let o={nombre:"",foto:"",descripcion:"",categoria:null,precio:0,dimensiones:"",referencia:""};const[t,s]=p.exports.useState(null),[c,a]=p.exports.useState(!1),[i,d]=p.exports.useState(!1);p.exports.useState(!1);const[n,h]=p.exports.useState(o),[x,y]=p.exports.useState(null),[u,g]=p.exports.useState(!1),[C,P]=p.exports.useState(null),D=p.exports.useRef(null),A=p.exports.useRef(null),L=new fr,f=()=>L.getProducts().then(l=>{s(l)}),_=()=>{h(o),g(!1),a(!0)},E=()=>{g(!1),a(!1)},m=()=>{d(!1)},N=()=>{if(g(!0),n.nombre.trim()){[...t];let l=w({},n);n.id?(delete l.id,L.updateProduct(l,n.id),f(),D.current.show({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(L.postNewProduct(l),D.current.show({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),a(!1),h(o),setTimeout(()=>{f()},1e3)}},q=l=>{h(w({},l)),a(!0)},H=l=>{h(l),d(!0)},le=()=>{L.deleteProduct(n.id),d(!1),D.current.show({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})},ce=()=>{A.current.exportCSV()},X=l=>{let T=w({},n);T.categoria=l.value,h(T)},$=(l,T)=>{const V=l.target&&l.target.value||"";let U=w({},n);U[`${T}`]=V,h(U)},de=(l,T)=>{const V=l.value||0;let U=w({},n);U[`${T}`]=V,h(U)};p.exports.useEffect(()=>(f(),()=>!1),[]);const pe=()=>e(j.Fragment,{children:e(v,{label:"Nuevo",icon:"pi pi-plus",className:"p-button-success mr-2",onClick:_})}),ue=()=>e(j.Fragment,{children:e(v,{label:"Exportar",icon:"pi pi-upload",className:"p-button-help",onClick:ce})}),me=l=>e("img",{src:l.foto,onError:T=>T.target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png",alt:l.foto,className:"product-image"}),he=l=>l.precio,ge=l=>e(j.Fragment,{children:r("div",{className:"product-actions",children:[e(v,{icon:"pi pi-pencil",className:"p-button-rounded p-button-success mr-2",onClick:()=>q(l)}),e(v,{icon:"pi pi-trash",className:"p-button-rounded p-button-danger",onClick:()=>H(l)})]})}),fe=r("div",{className:"table-header",children:[e("h5",{className:"mx-0 my-1",children:"Gestionar Productos"}),e(v,{label:"Refrescar",icon:"pi pi-refresh",className:"p-button-outlined p-button-help",tooltip:"Si no aparece su producto actualize aqu\xED.",tooltipOptions:{position:"bottom",mouseTrack:!0,mouseTrackTop:15},onClick:()=>f()}),r("span",{className:"p-input-icon-left",children:[e("i",{className:"pi pi-search"}),e(k,{type:"search",onInput:l=>P(l.target.value),placeholder:"Buscar..."})]})]}),be=r(j.Fragment,{children:[e(v,{label:"Cancelar",icon:"pi pi-times",className:"p-button-text",onClick:E}),e(v,{label:"Guardar",icon:"pi pi-check",className:"p-button-text",type:"submit",form:"product-form"})]}),ve=r(j.Fragment,{children:[e(v,{label:"No",icon:"pi pi-times",className:"p-button-text",onClick:m}),e(v,{label:"Si",icon:"pi pi-check",className:"p-button-text",onClick:le})]});return r("div",{className:"datatable-crud-demo",children:[e(Te,{ref:D}),r("div",{className:"card",children:[e(Ie,{className:"mb-4",left:pe,right:ue}),r(Ae,{ref:A,value:t,selection:x,onSelectionChange:l=>y(l.value),dataKey:"id",paginator:!0,rows:6,rowsPerPageOptions:[6,8],paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} productos",globalFilter:C,header:fe,responsiveLayout:"scroll",emptyMessage:"No hay productos a\xFAn",children:[e(M,{field:"id",header:"Id",sortable:!0,style:{minWidth:"12rem"}}),e(M,{field:"nombre",header:"Nombre",sortable:!0,style:{minWidth:"16rem"}}),e(M,{field:"imagen",header:"Imagen",body:me}),e(M,{field:"precio",header:"Precio",body:he,sortable:!0,style:{minWidth:"8rem"}}),e(M,{field:"categoria",header:"Categor\xEDa",sortable:!0,style:{minWidth:"10rem"}}),e(M,{body:ge,exportable:!1,style:{minWidth:"8rem"}})]})]}),e(I,{visible:c,style:{width:"450px"},header:"Detalle de producto",modal:!0,className:"p-fluid",footer:be,onHide:E,children:r("form",{id:"product-form",onSubmit:l=>{l.preventDefault(),N()},children:[r("div",{className:"field",children:[e("label",{htmlFor:"name",children:"Nombre"}),e(k,{id:"nombre",value:n.nombre,onChange:l=>$(l,"nombre"),required:!0,autoFocus:!0,className:b({"p-invalid":u&&!n.nombre})}),u&&!n.nombre&&e("small",{className:"p-error",children:"Name is required."})]}),n.foto&&e("img",{style:{width:"100px"},src:n.foto,onError:l=>l.target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png",alt:n.foto,className:"product-image block m-auto pb-3"}),r("div",{className:"field",children:[e("label",{htmlFor:"name",children:"Foto"}),e(k,{id:"foto",value:n.foto,onChange:l=>$(l,"foto"),required:!0,autoFocus:!0,className:b({"p-invalid":u&&!n.foto})}),u&&!n.foto&&e("small",{className:"p-error",children:"La foto es obligatoria."})]}),r("div",{className:"field",children:[e("label",{htmlFor:"description",children:"Descripci\xF3n"}),e(Re,{id:"descripcion",value:n.descripcion,onChange:l=>$(l,"descripcion"),required:!0,rows:3,cols:20})]}),r("div",{className:"field",children:[e("label",{htmlFor:"name",children:"Dimensiones"}),e(k,{id:"dimensiones",value:n.dimensiones,onChange:l=>$(l,"dimensiones"),required:!0,autoFocus:!0,className:b({"p-invalid":u&&!n.dimensiones})}),u&&!n.dimensiones&&e("small",{className:"p-error",children:"Las dimensiones son obligatorias."})]}),r("div",{className:"field",children:[e("label",{htmlFor:"name",children:"Referencia"}),e(k,{id:"referencia",value:n.referencia,onChange:l=>$(l,"referencia"),required:!0,autoFocus:!0,className:b({"p-invalid":u&&!n.referencia})}),u&&!n.referencia&&e("small",{className:"p-error",children:"La referencia es obligatoria."})]}),r("div",{className:"field",children:[e("label",{className:"mb-3",children:"Categor\xEDa"}),r("div",{className:"formgrid grid",children:[r("div",{className:"field-radiobutton col-6",children:[e(se,{inputId:"categoria1",name:"categoria",value:"juguetes",onChange:X,checked:n.categoria==="juguetes"}),e("label",{htmlFor:"category1",children:"Juguetes"})]}),r("div",{className:"field-radiobutton col-6",children:[e(se,{inputId:"categoria2",name:"categoria",value:"muebles",onChange:X,checked:n.categoria==="muebles"}),e("label",{htmlFor:"category2",children:"Muebles"})]})]})]}),e("div",{className:"formgrid grid",children:r("div",{className:"field col",children:[e("label",{htmlFor:"price",children:"Precio"}),e(je,{id:"precio",value:n.precio,onValueChange:l=>de(l,"precio"),mode:"currency",currency:"COP",locale:"en-US"})]})})]})}),e(I,{visible:i,style:{width:"450px"},header:"Confirmar",modal:!0,footer:ve,onHide:m,children:r("div",{className:"confirmation-content",children:[e("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),n&&r("span",{children:["\xBF Est\xE1 seguro de que desea eliminar ",e("b",{children:n.nombre}),"?"]})]})})]})};class vr{registerUser(t){const s=G.API_URL,c={Accept:"*/*"},a=new FormData;return Object.keys(t).forEach(i=>a.append(i,t[i])),a.append("username",`${t.first_name}${t.last_name}`),a.append("password_confirmation",t.password),fetch(`${s}/users/signup/`,{method:"POST",body:a,headers:c}).then(i=>i.ok?i.text():i.text().then(d=>{throw new Error(d)})).then(i=>i).catch(i=>i)}}const xr=()=>{const[o,t]=p.exports.useState(!1),[s,c]=p.exports.useState(!1),[a,i]=p.exports.useState(""),[d,n]=p.exports.useState({visible:!1,message:""}),[h,x]=p.exports.useState({});let y={email:"",first_name:"",last_name:"",phone:"",password:""};const{control:u,formState:{errors:g},handleSubmit:C,reset:P}=oe({defaultValues:y}),D=new vr,A="http://ec2-54-233-147-49.sa-east-1.compute.amazonaws.com:8000/admin",L=m=>{D.registerUser(m).then(N=>{if(N.message){const q=JSON.parse(N.message);Object.keys(q).forEach(H=>{i(`${H} ${q[H][0]}`)}),c(!0);return}n({visible:!0,message:"Usuario creado exitosamente"})}),x(m),P()},f=m=>g[m]&&e("small",{className:"p-error",children:g[m].message}),_=e("h6",{children:"Crea una contrase\xF1a"}),E=r(j.Fragment,{children:[e(Oe,{}),e("p",{className:"mt-2",children:"Sugerencias"}),r("ul",{className:"pl-2 ml-2 mt-0",style:{lineHeight:"1.5"},children:[e("li",{children:"Al menos una min\xFAscula"}),e("li",{children:"Al menos una may\xFAscula"}),e("li",{children:"Al menos un num\xE9rico"}),e("li",{children:"M\xEDnimo 8 caracteres."})]})]});return r(z,{children:[r("div",{className:"user-form-titles",children:[e("h1",{children:"Registro de usuario"}),e(v,{label:"Crear nuevo usuario",onClick:()=>t(!0),icon:"pi pi-plus"}),r("p",{children:["Si tiene permisos de super usuario,",e("br",{}),"puede administrar los usuarios"," ",e("a",{href:A,target:"_blank",children:"aqu\xED"})]})]}),e(I,{visible:o,style:{width:"450px"},header:"Crear nuevo usuario",modal:!0,className:"p-fluid",onHide:()=>t(!1),children:r("form",{onSubmit:C(L),className:"user-form p-fluid",children:[r("div",{className:"p-field",children:[r("span",{className:"p-float-label",children:[e(R,{name:"email",control:u,rules:{required:"El correo es obligatorio.",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Correo no v\xE1lido . E.g. ejemplo@email.com"}},render:({field:m,fieldState:N})=>e(k,F(w({id:m.email},m),{autoFocus:!0,className:b({"p-invalid":N.invalid})}))}),e("label",{htmlFor:"email",className:b({"p-error":!!g.email}),children:"Email*"})]}),f("email")]}),r("div",{className:"field",children:[r("span",{className:"p-float-label",children:[e(R,{name:"first_name",control:u,rules:{required:"El Primer nombre es obligatorio."},render:({field:m,fieldState:N})=>e(k,F(w({id:m.first_name},m),{autoFocus:!0,className:b({"p-invalid":N.invalid})}))}),e("label",{htmlFor:"first_name",className:b({"p-error":g.first_name}),children:"Primer Nombre*"})]}),f("first_name")]}),r("div",{className:"field",children:[r("span",{className:"p-float-label",children:[e(R,{name:"last_name",control:u,rules:{required:"El apellido es obligatorio."},render:({field:m,fieldState:N})=>e(k,F(w({id:m.last_name},m),{autoFocus:!0,className:b({"p-invalid":N.invalid})}))}),e("label",{htmlFor:"apellido_name",className:b({"p-error":g.last_name}),children:"Apellido*"})]}),f("second_name")]}),r("div",{className:"field",children:[r("span",{className:"p-float-label",children:[e(R,{name:"phone",control:u,rules:{required:"El tel\xE9fono es obligatorio."},render:({field:m,fieldState:N})=>e(k,F(w({id:m.phone},m),{autoFocus:!0,className:b({"p-invalid":N.invalid})}))}),e("label",{htmlFor:"phone",className:b({"p-error":g.phone}),children:"Tel\xE9fono*"})]}),f("phone")]}),r("div",{className:"field",children:[r("span",{className:"p-float-label",children:[e(R,{name:"password",control:u,rules:{required:"La contrase\xF1a es obligatoria"},render:({field:m,fieldState:N})=>e(ie,F(w({id:m.name},m),{toggleMask:!0,className:b({"p-invalid":N.invalid}),header:_,footer:E}))}),e("label",{htmlFor:"password",className:b({"p-error":g.password}),children:"Contrase\xF1a*"})]}),f("password")]}),e(v,{type:"submit",label:"Crear Usuario"})]})}),e(I,{visible:s,header:"ERROR DE REGISTRO",modal:!0,onHide:()=>c(!1),children:e("p",{children:a})}),e(I,{visible:d.visible,modal:!0,onHide:()=>n(F(w({},d),{visible:!1})),children:e("p",{children:d.message})})]})},yr=()=>{const o=t=>{t.preventDefault(),t.returnValue=""};return p.exports.useEffect(()=>(window.addEventListener("beforeunload",o),()=>{window.removeEventListener("beforeunload",o)}),[]),e("div",{className:"App",children:e(Me,{children:r($e,{children:[e(O,{path:"/login",element:e(mr,{})}),e(O,{path:"/",element:e(Ze,{})}),e(O,{path:"/catalog",element:e(lr,{})}),e(O,{path:"/checkout",element:e(cr,{})}),r(O,{path:"/admin/",element:e(gr,{}),children:[e(O,{path:"/admin/user-admin",element:e(xr,{})}),e(O,{path:"/admin/product-admin",element:e(br,{})})]})]})})})};function Nr({error:o,resetErrorBoundary:t}){return r("div",{role:"alert",children:[e("p",{children:"Something went wrong:"}),e("pre",{children:o.message}),e("button",{onClick:t,children:"Try again"})]})}Ue.render(e(j.StrictMode,{children:e(qe,{FallbackComponent:Nr,onError:(o,t)=>console.error({error:o,errorInfo:t}),children:e(yr,{})})}),document.getElementById("root"));
