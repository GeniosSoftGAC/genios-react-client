var Se=Object.defineProperty,we=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var Pe=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var re=(a,t,s)=>t in a?Se(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,w=(a,t)=>{for(var s in t||(t={}))Pe.call(t,s)&&re(a,s,t[s]);if(ee)for(var s of ee(t))Ee.call(t,s)&&re(a,s,t[s]);return a},D=(a,t)=>we(a,Ce(t));import{s as P,S as te,r as p,j as r,a as e,N as ae,B as N,D as Fe,b as ke,F as z,c as I,I as De,P as Le,d as _e,u as oe,e as ie,C as A,f as k,g as y,h as se,M as Ie,O as Ae,i as Te,R as T,T as Re,k as je,l as Oe,m as O,n as Me,o as ne,p as $e,q as Ue,t as qe,v as He,w as R,x as Be,E as ze}from"./vendor.bc8296ee.js";const Ge=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}};Ge();const Je=P.div`
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
`,le=P.img`
  width: ${a=>a.size||"100%"};
  height: fit-content;
`,We=P(te)`
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
`,V=({logo:a,brandTitle:t,logoSize:s,links:c,customMenu:o,additionalItem:i})=>{const d=b=>b.map((u,h)=>e(ae,{to:u.route,children:r("li",{children:[e("i",{className:u.icon||""}),u.label]})},h)),[g,v]=p.exports.useState(!1),l=()=>r("div",{children:[e(N,{icon:"pi pi-bars",onClick:()=>v(!0),className:"p-mr-2"}),e(We,{visible:g,fullScreen:!0,onHide:()=>v(!1),children:r("ul",{children:[r("h2",{children:[e(le,{src:a,size:s}),"Genios"]}),d(c)||""]})})]});return r(Je,{children:[r("div",{className:"brand",children:[e("a",{href:"/",children:e(le,{src:a,size:s})}),e("h3",{children:t||""})]}),e("ul",{children:c?d(c):""}),e("div",{className:"custom-children",children:o||l()}),i||""]})},Ve=P.div`
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
`,Ze=({title:a,text:t,image:s})=>r(Ve,{children:[r("div",{className:"hero-info",children:[e("h1",{className:"hero-info__title",children:a}),e("p",{className:"hero-info__paragraph",children:t}),e("form",{children:e(ae,{to:"./catalog",className:"button",children:"Ver cat\xE1logo"})})]}),e("img",{src:s,alt:"hero image",className:"hero-image"})]});var Ke="/assets/heroImage.e5da6c42.png",G="/assets/logo.3a5ee6e9.svg";const Qe="//54.233.147.49:8001";var B={API_URL:Qe};const Xe=()=>r("div",{children:[e(V,{logo:G,brandTitle:"Genios aprende jugando",logoSize:"50px",links:[{label:"ver cat\xE1logo",route:"/catalog",icon:"pi pi-shopping-bag"},{label:"Iniciar Sesi\xF3n",route:"/login",icon:"pi pi-user"}]}),e(Ze,{title:"GENIOS APRENDE JUGANDO",text:" Pagina inicial de la empresa, est\xE1 p\xE1gina es provisional y mejorar\xE1 su dise\xF1o en el futuro. En la siguiente lista encuentras v\xEDnculos r\xE1pidos a los prototipos de interfaz.",image:Ke})]}),Z=(a,t)=>{document.addEventListener(a,t)},K=(a,t)=>{document.removeEventListener(a,t)},Q=(a,t)=>{const s=new CustomEvent(a,{detail:t});document.dispatchEvent(s)},Ye=P.div`
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
`,er=a=>{const t=()=>{Q("on-delete-product",a.id)};return r(Ye,{className:"product-item",children:[e("div",{className:"product-image",style:{backgroundImage:`url(${a.image})`,backgroundSize:"contain",width:"100px",height:"100px",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),r("div",{className:"product-detail",children:[e("section",{className:"product-detail-header",children:e("strong",{children:a.name})}),r("div",{className:"product-category",children:[e("i",{className:"pi pi-tag product-category-icon"}),e("p",{className:"product-category-text",children:a.category})]}),r("div",{className:"product-detail-footer",children:[r("p",{className:"product-price",children:["$ ",a.price]}),e("i",{className:"pi pi-trash",onClick:t})]})]})]})},rr=P(Fe)`
  .p-datascroller-content {
    padding: 0.2rem;
  }
  .p-datascroller-list {
    display: grid;
    gap: 0.3rem;
  }
`,tr=P(te)`
  .p-sidebar-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`,ar=()=>{const[a,t]=p.exports.useState(!1);p.exports.useState(!1);const[s,c]=p.exports.useState(0),[o,i]=p.exports.useState([]);a&&(document.querySelector("body").style.overflow="hidden");const d=()=>o.length?o.reduce((h,x)=>h+x.price,0):void 0,g=u=>{const h=u.detail;if(o.some(C=>C.id===h.id))return;const x=[...o,h];i(x)},v=()=>{t(!0),document.querySelector("body").style.overflow="hidden"};a||(document.querySelector("body").style.overflow="auto");const l=u=>{const h=u.detail,x=o.filter(C=>C.id!==h);i(x)},b=()=>{const u=o.map(h=>h.id);console.log("Lista de Ids para orden",u)};return p.exports.useEffect(()=>(Z("addProduct:click",g),Z("on-delete-product",l),c(d()),()=>{K("addProduct:click",g),K("on-delete-product",l)}),[g,l]),r("div",{children:[e(N,{icon:"pi pi-shopping-cart",label:"carrito",badge:o.length,onClick:v}),r(tr,{position:"right",visible:a,onHide:()=>t(!1),children:[e("h2",{style:{margin:"0",padding:"0"},children:"Mi Carrito"}),r("span",{children:[e("strong",{children:"# Productos: "})," ",o.length]}),e(rr,{className:"data-scroller",value:o,itemTemplate:er,rows:5,inline:!0,scrollHeight:"500px",emptyMessage:"No hay productos en el carrito."}),r("p",{className:"cart-total",children:[e("strong",{children:"TOTAL:"})," $",s]}),e(N,{label:"Hacer Compra",onClick:b})]})]})},or=P.div`
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
    background-image: url('${a=>a.image}');
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
    font-size: 1.2rem;
  }
`,ir=({name:a,price:t,image:s,data:c})=>r(or,{onClick:d=>{d.detail=c.id,Q("productDetail:click",d.detail)},className:"card-container",image:s,children:[e("div",{className:"product-card__image"}),r("div",{className:"product-info",children:[r("div",{children:[e("h2",{className:"product-name",children:a}),r("p",{className:"product-price",children:[e("strong",{children:"Price: "}),t]})]}),e(N,{icon:"pi pi-plus",className:"add-cart p-button-rounded",onClick:d=>{d.stopPropagation();const g=d.target.closest(".add-cart");ke(g,{transform:["scale(1.1)","scale(1)"]},{duration:.4}),d.detail={id:c.id,image:c.foto,name:c.nombre,price:c.precio,description:c.descripcion,reference:c.referencia,category:c.categoria,dimensions:c.dimensiones},Q("addProduct:click",d.detail)}})]})]}),sr=P.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 1rem;
`,nr=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`,lr=({product:a})=>r(nr,{children:[e(De,{src:a.foto,width:"200",preview:!0}),r("div",{className:"product-detail-info",children:[e("h2",{children:a.nombre}),r("p",{children:[e("strong",{children:"Descripci\xF3n:"})," ",a.descripcion]}),r("p",{children:[" ",e("strong",{children:"Categor\xEDa:"})," ",a.categoria]}),r("p",{children:[e("strong",{children:"Referencia: "})," ",a.referencia]}),r("p",{children:["$",a.precio]})]})]}),cr=({productList:a})=>{const[t,s]=p.exports.useState({}),[c,o]=p.exports.useState(!1),i=g=>{o(!0),s(a.filter(v=>v.id===g.detail)[0])};return p.exports.useEffect(()=>(Z("productDetail:click",i),()=>{K("productDetail:click",i)}),[i]),r(z,{children:[e(sr,{className:"product-grid",children:(g=>g.map(v=>e(ir,{name:v.nombre,price:v.precio,image:v.foto,data:v},v.id)))(a)}),e(I,{style:{width:"35vw",minWidth:"300px"},header:"Detalle de producto",visible:c,draggable:!1,dismissableMask:!0,modal:!0,onHide:()=>o(!1),children:e(lr,{product:t})})]})},dr=a=>{const t=a||6,[s,c]=p.exports.useState(0),o=u=>{c(u.first)},[i,d]=p.exports.useState(null),[g,v]=p.exports.useState(!1),[l,b]=p.exports.useState([]);if(p.exports.useEffect(()=>{fetch(`${B.API_URL}/products`).then(u=>u.json()).then(u=>{v(!0),b(u)})},[]),i)console.error(i.message);else if(g){const u=l.slice(s,s+t);return r("div",{children:[e(cr,{productList:u}),e(Le,{first:s,rows:t,totalRecords:l.length,onPageChange:o})]})}else return e("h1",{children:"Loading products..."})},pr=()=>{const a=[{label:"home",route:"/",icon:"pi pi-shopping-bag"},{label:"Iniciar Sesi\xF3n",route:"/login",icon:"pi pi-user"}],[t,s]=p.exports.useState(null);return r("div",{children:[e(V,{logo:G,brandTitle:"Genios aprende jugando",logoSize:"50px",links:a,additionalItem:e(ar,{})}),e(_e,{style:{margin:"1rem"},value:t,options:[{name:"Muebles",code:"M"},{name:"Juguetes",code:"J"}],onChange:i=>{s(i.value)},optionLabel:"name",placeholder:"Seleccionar Categor\xEDa"}),dr(12)]})},ur=()=>r("div",{children:[e("h1",{children:"Esto es el checkout o p\xE1gina para compra"}),e("a",{href:"/catalog",children:"Volver al cat\xE1logo"})]}),mr=P.div`
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
`,hr=async(a,t)=>{const s=B.API_URL;let c={Accept:"*/*","Content-Type":"application/json"},o=JSON.stringify({email:a,password:t}),i={};return await fetch(`${s}/users/login/`,{method:"POST",body:o,headers:c}).then(d=>d.ok?d.json():d.text().then(g=>{throw new Error(g)})).then(d=>{i=d}).catch(d=>{i=d}),i},gr=()=>{const[a,t]=p.exports.useState(!1),[s,c]=p.exports.useState(!1),[o,i]=p.exports.useState(""),[d,g]=p.exports.useState({}),v={email:"",password:""},{control:l,formState:{errors:b},handleSubmit:u,reset:h}=oe({defaultValues:v}),x=f=>{hr(f.email,f.password).then(F=>{if(!Object.keys(F).length){console.log(F);const m=JSON.parse(F.message);m.password?(i(`Password Error: ${m.password[0]}`),c(!0)):(i(m.non_field_errors[0]),c(!0));return}g(F.user),localStorage.setItem("login-data",JSON.stringify(F.user)),t(!0),h()})},C=f=>b[f]&&e("small",{className:"p-error",children:b[f].message}),M=ie(),j=()=>{M("/admin/product-admin"),t(!1)},L=e("div",{className:"p-d-flex p-jc-center",children:e(N,{label:"OK",className:"p-button-text",autoFocus:!0,onClick:j})});return p.exports.useEffect(()=>{!JSON.parse(localStorage.getItem("login-data"))||j()}),r(z,{children:[e(I,{visible:a,onHide:()=>t(!1),position:"center",footer:L,showHeader:!1,breakpoints:{"960px":"80vw"},style:{width:"30vw"},children:r("div",{style:{padding:"1rem"},className:"p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3",children:[e("i",{className:"pi pi-check-circle",style:{fontSize:"5rem",color:"var(--green-500)"}}),r("h5",{children:[" Bienvenid@ ",d.first_name]})]})}),e(I,{visible:s,onHide:()=>c(!1),position:"center",breakpoints:{"960px":"80vw"},style:{width:"30vw"},children:r("div",{style:{display:"grid",gridAutoFlow:"column",placeItems:"center",gap:"1rem"},children:[e("i",{style:{fontSize:"3rem",color:"var(--pink-500)"},className:"pi pi-info-circle"}),r("h5",{children:[o," "]})]})}),e("div",{className:"login-form__container",children:r("form",{onSubmit:u(x),className:"p-fluid login-form__form",children:[e("h1",{children:"Iniciar Sesi\xF3n"}),r("div",{className:"p-field",children:[r("span",{className:"p-float-label",children:[e(A,{name:"email",control:l,rules:{required:"El correo es obligatorio.",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Correo no v\xE1lido . E.g. ejemplo@email.com"}},render:({field:f,fieldState:E})=>e(k,D(w({id:f.email},f),{autoFocus:!0,className:y({"p-invalid":E.invalid})}))}),e("label",{htmlFor:"email",className:y({"p-error":!!b.email}),children:"Email*"})]}),C("email")]}),r("div",{className:"p-field",children:[r("span",{className:"p-float-label",children:[e(A,{name:"password",control:l,rules:{required:"La contrase\xF1a es obligatoria."},render:({field:f,fieldState:E})=>e(se,D(w({id:f.name},f),{className:y({"p-invalid":E.invalid}),feedback:!1}))}),e("label",{htmlFor:"password",className:y({"p-error":b.password}),children:"Contrase\xF1a*"})]}),C("password")]}),e(N,{type:"submit",label:"Submit",className:"p-mt-2"})]})})]})},fr=()=>r(mr,{children:[e(V,{logo:G,brandTitle:"Genios aprende jugando",logoSize:"50px",links:[{label:"home",route:"/",icon:"pi pi-shopping-bag"},{label:"catalogo",route:"/catalog",icon:"pi pi-shopping-bag"}]}),e(gr,{})]}),br=P.div`
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
`,vr=()=>{const a=localStorage.getItem("login-data"),t=ie(),s=d=>{Te({target:d.currentTarget,message:"\xBF Est\xE1 seguro de cerrar la sesi\xF3n ?",icon:"pi pi-exclamation-triangle",accept:()=>c()})},c=()=>{t("/"),localStorage.removeItem("login-data"),window.removeEventListener("popstate",()=>{history.pushState(null,document.title,location.href)})},o=[{label:"Registrar Usuarios",icon:"pi pi-fw pi-user",command:()=>{t("/admin/user-admin")}},{label:"Productos",icon:"pi pi-fw pi-shopping-bag",command:()=>{t("/admin/product-admin")}},{label:"Cerrar Sesi\xF3n",icon:"pi pi-fw pi-external-link",command:d=>{s(d.originalEvent)}}],i=()=>r(z,{children:[e("img",{src:G,alt:"Brand"}),e("h4",{children:"Genios SoftGAC"})]});return p.exports.useEffect(()=>{if(!a){t("/");return}history.pushState(null,document.title,location.href),window.addEventListener("popstate",()=>{history.pushState(null,document.title,location.href)})},[]),r(br,{children:[e(Ie,{model:o,start:i}),e("div",{className:"admin-container",children:e(Ae,{})})]})},J=B.API_URL;class xr{getProducts(){return fetch(`${J}/products`).then(t=>t.json()).then(t=>t)}deleteProduct(t){return fetch(`${J}/products/${t}`,{method:"DELETE"}).then(s=>s.text()).then(s=>s)}postNewProduct(t){const s={Accept:"*/*","Content-Type":"application/json"},c=JSON.stringify(t);return fetch(`${J}/products/`,{method:"POST",body:c,headers:s}).then(o=>o.text()).then(o=>o)}updateProduct(t,s){const c={Accept:"*/*","Content-Type":"application/json"},o=JSON.stringify(t);return console.log("update--->",o),fetch(`${J}/products/${s}`,{method:"PUT",body:o,headers:c}).then(i=>i.text()).then(i=>i)}}const yr=()=>{let a={nombre:"",foto:"",descripcion:"",categoria:null,precio:0,dimensiones:"",referencia:""};const[t,s]=p.exports.useState(null),[c,o]=p.exports.useState(!1),[i,d]=p.exports.useState(!1),[g,v]=p.exports.useState(!1),[l,b]=p.exports.useState(a),[u,h]=p.exports.useState(null),[x,C]=p.exports.useState(!1),[M,j]=p.exports.useState(null),L=p.exports.useRef(null),f=p.exports.useRef(null),E=new xr,F=()=>E.getProducts().then(n=>{s(n)}),m=()=>{b(a),C(!1),o(!0)},S=()=>{C(!1),o(!1)},$=()=>{d(!1)},U=()=>{if(C(!0),l.nombre.trim()){[...t];let n=w({},l);l.id?(delete n.id,E.updateProduct(n,l.id),F(),L.current.show({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(E.postNewProduct(n),L.current.show({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),o(!1),b(a)}},ce=n=>{b(w({},n)),o(!0)},de=n=>{b(n),d(!0)},X=()=>{E.deleteProduct(l.id),d(!1),L.current.show({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})},pe=()=>{f.current.exportCSV()},ue=()=>{v(!0)},Y=n=>{let _=w({},l);_.categoria=n.value,b(_)},q=(n,_)=>{const W=n.target&&n.target.value||"";let H=w({},l);H[`${_}`]=W,b(H)},me=(n,_)=>{const W=n.value||0;let H=w({},l);H[`${_}`]=W,b(H)};p.exports.useEffect(()=>(F(),()=>!1),[X,U]);const he=()=>r(T.Fragment,{children:[e(N,{label:"Nuevo",icon:"pi pi-plus",className:"p-button-success mr-2",onClick:m}),e(N,{label:"Eliminar",icon:"pi pi-trash",className:"p-button-danger",onClick:ue,disabled:!u||!u.length})]}),ge=()=>e(T.Fragment,{children:e(N,{label:"Exportar",icon:"pi pi-upload",className:"p-button-help",onClick:pe})}),fe=n=>e("img",{src:n.foto,onError:_=>_.target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png",alt:n.foto,className:"product-image"}),be=n=>n.precio,ve=n=>e(T.Fragment,{children:r("div",{className:"product-actions",children:[e(N,{icon:"pi pi-pencil",className:"p-button-rounded p-button-success mr-2",onClick:()=>ce(n)}),e(N,{icon:"pi pi-trash",className:"p-button-rounded p-button-danger",onClick:()=>de(n)})]})}),xe=r("div",{className:"table-header",children:[e("h5",{className:"mx-0 my-1",children:"Gestionar Productos"}),r("span",{className:"p-input-icon-left",children:[e("i",{className:"pi pi-search"}),e(k,{type:"search",onInput:n=>j(n.target.value),placeholder:"Buscar..."})]})]}),ye=r(T.Fragment,{children:[e(N,{label:"Cancelar",icon:"pi pi-times",className:"p-button-text",onClick:S}),e(N,{label:"Guardar",icon:"pi pi-check",className:"p-button-text",type:"submit",form:"product-form"})]}),Ne=r(T.Fragment,{children:[e(N,{label:"No",icon:"pi pi-times",className:"p-button-text",onClick:$}),e(N,{label:"Si",icon:"pi pi-check",className:"p-button-text",onClick:X})]});return r("div",{className:"datatable-crud-demo",children:[e(Re,{ref:L}),r("div",{className:"card",children:[e(je,{className:"mb-4",left:he,right:ge}),r(Oe,{ref:f,value:t,selection:u,onSelectionChange:n=>h(n.value),dataKey:"id",paginator:!0,rows:6,rowsPerPageOptions:[6,8],paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} productos",globalFilter:M,header:xe,responsiveLayout:"scroll",emptyMessage:"No hay productos a\xFAn",children:[e(O,{field:"id",header:"Id",sortable:!0,style:{minWidth:"12rem"}}),e(O,{field:"nombre",header:"Nombre",sortable:!0,style:{minWidth:"16rem"}}),e(O,{field:"imagen",header:"Imagen",body:fe}),e(O,{field:"precio",header:"Precio",body:be,sortable:!0,style:{minWidth:"8rem"}}),e(O,{field:"categoria",header:"Categor\xEDa",sortable:!0,style:{minWidth:"10rem"}}),e(O,{body:ve,exportable:!1,style:{minWidth:"8rem"}})]})]}),e(I,{visible:c,style:{width:"450px"},header:"Detalle de producto",modal:!0,className:"p-fluid",footer:ye,onHide:S,children:r("form",{id:"product-form",onSubmit:n=>{n.preventDefault(),U()},children:[r("div",{className:"field",children:[e("label",{htmlFor:"name",children:"Nombre"}),e(k,{id:"nombre",value:l.nombre,onChange:n=>q(n,"nombre"),required:!0,autoFocus:!0,className:y({"p-invalid":x&&!l.nombre})}),x&&!l.nombre&&e("small",{className:"p-error",children:"Name is required."})]}),l.foto&&e("img",{style:{width:"100px"},src:l.foto,onError:n=>n.target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png",alt:l.foto,className:"product-image block m-auto pb-3"}),r("div",{className:"field",children:[e("label",{htmlFor:"name",children:"Foto"}),e(k,{id:"foto",value:l.foto,onChange:n=>q(n,"foto"),required:!0,autoFocus:!0,className:y({"p-invalid":x&&!l.foto})}),x&&!l.foto&&e("small",{className:"p-error",children:"La foto es obligatoria."})]}),r("div",{className:"field",children:[e("label",{htmlFor:"description",children:"Descripci\xF3n"}),e(Me,{id:"descripcion",value:l.descripcion,onChange:n=>q(n,"descripcion"),required:!0,rows:3,cols:20})]}),r("div",{className:"field",children:[e("label",{htmlFor:"name",children:"Dimensiones"}),e(k,{id:"dimensiones",value:l.dimensiones,onChange:n=>q(n,"dimensiones"),required:!0,autoFocus:!0,className:y({"p-invalid":x&&!l.dimensiones})}),x&&!l.dimensiones&&e("small",{className:"p-error",children:"Las dimensiones son obligatorias."})]}),r("div",{className:"field",children:[e("label",{htmlFor:"name",children:"Referencia"}),e(k,{id:"referencia",value:l.referencia,onChange:n=>q(n,"referencia"),required:!0,autoFocus:!0,className:y({"p-invalid":x&&!l.referencia})}),x&&!l.referencia&&e("small",{className:"p-error",children:"La referencia es obligatoria."})]}),r("div",{className:"field",children:[e("label",{className:"mb-3",children:"Categor\xEDa"}),r("div",{className:"formgrid grid",children:[r("div",{className:"field-radiobutton col-6",children:[e(ne,{inputId:"categoria1",name:"categoria",value:"juguetes",onChange:Y,checked:l.categoria==="juguetes"}),e("label",{htmlFor:"category1",children:"Juguetes"})]}),r("div",{className:"field-radiobutton col-6",children:[e(ne,{inputId:"categoria2",name:"categoria",value:"muebles",onChange:Y,checked:l.categoria==="muebles"}),e("label",{htmlFor:"category2",children:"Muebles"})]})]})]}),e("div",{className:"formgrid grid",children:r("div",{className:"field col",children:[e("label",{htmlFor:"price",children:"Precio"}),e($e,{id:"precio",value:l.precio,onValueChange:n=>me(n,"precio"),mode:"currency",currency:"COP",locale:"en-US"})]})})]})}),e(I,{visible:i,style:{width:"450px"},header:"Confirmar",modal:!0,footer:Ne,onHide:$,children:r("div",{className:"confirmation-content",children:[e("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),l&&r("span",{children:["\xBF Est\xE1 seguro de que desea eliminar ",e("b",{children:l.nombre}),"?"]})]})})]})};class Nr{registerUser(t){const s=B.API_URL,c={Accept:"*/*"},o=new FormData;return Object.keys(t).forEach(i=>o.append(i,t[i])),o.append("username",`${t.first_name}${t.last_name}`),o.append("password_confirmation",t.password),fetch(`${s}/users/signup/`,{method:"POST",body:o,headers:c}).then(i=>i.ok?i.text():i.text().then(d=>{throw new Error(d)})).then(i=>i).catch(i=>i)}}const Sr=()=>{const[a,t]=p.exports.useState(!1),[s,c]=p.exports.useState(!1),[o,i]=p.exports.useState(""),[d,g]=p.exports.useState({visible:!1,message:""}),[v,l]=p.exports.useState({});let b={email:"",first_name:"",last_name:"",phone:"",password:""};const{control:u,formState:{errors:h},handleSubmit:x,reset:C}=oe({defaultValues:b}),M=new Nr,j=`${B.API_URL}/admin`,L=m=>{M.registerUser(m).then(S=>{if(S.message){const $=JSON.parse(S.message);Object.keys($).forEach(U=>{i(`${U} ${$[U][0]}`)}),c(!0);return}g({visible:!0,message:"Usuario creado exitosamente"})}),l(m),C()},f=m=>h[m]&&e("small",{className:"p-error",children:h[m].message}),E=e("h6",{children:"Crea una contrase\xF1a"}),F=r(T.Fragment,{children:[e(Ue,{}),e("p",{className:"mt-2",children:"Sugerencias"}),r("ul",{className:"pl-2 ml-2 mt-0",style:{lineHeight:"1.5"},children:[e("li",{children:"Al menos una min\xFAscula"}),e("li",{children:"Al menos una may\xFAscula"}),e("li",{children:"Al menos un num\xE9rico"}),e("li",{children:"M\xEDnimo 8 caracteres."})]})]});return r(z,{children:[r("div",{className:"user-form-titles",children:[e("h1",{children:"Registro de usuario"}),e(N,{label:"Crear nuevo usuario",onClick:()=>t(!0),icon:"pi pi-plus"}),r("p",{children:["Si tiene permisos de super usuario,",e("br",{}),"puede administrar los usuarios"," ",e("a",{href:j,target:"_blank",children:"aqu\xED"})]})]}),e(I,{visible:a,style:{width:"450px"},header:"Crear nuevo usuario",modal:!0,className:"p-fluid",onHide:()=>t(!1),children:r("form",{onSubmit:x(L),className:"user-form p-fluid",children:[r("div",{className:"p-field",children:[r("span",{className:"p-float-label",children:[e(A,{name:"email",control:u,rules:{required:"El correo es obligatorio.",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Correo no v\xE1lido . E.g. ejemplo@email.com"}},render:({field:m,fieldState:S})=>e(k,D(w({id:m.email},m),{autoFocus:!0,className:y({"p-invalid":S.invalid})}))}),e("label",{htmlFor:"email",className:y({"p-error":!!h.email}),children:"Email*"})]}),f("email")]}),r("div",{className:"field",children:[r("span",{className:"p-float-label",children:[e(A,{name:"first_name",control:u,rules:{required:"El Primer nombre es obligatorio."},render:({field:m,fieldState:S})=>e(k,D(w({id:m.first_name},m),{autoFocus:!0,className:y({"p-invalid":S.invalid})}))}),e("label",{htmlFor:"first_name",className:y({"p-error":h.first_name}),children:"Primer Nombre*"})]}),f("first_name")]}),r("div",{className:"field",children:[r("span",{className:"p-float-label",children:[e(A,{name:"last_name",control:u,rules:{required:"El apellido es obligatorio."},render:({field:m,fieldState:S})=>e(k,D(w({id:m.last_name},m),{autoFocus:!0,className:y({"p-invalid":S.invalid})}))}),e("label",{htmlFor:"apellido_name",className:y({"p-error":h.last_name}),children:"Apellido*"})]}),f("second_name")]}),r("div",{className:"field",children:[r("span",{className:"p-float-label",children:[e(A,{name:"phone",control:u,rules:{required:"El tel\xE9fono es obligatorio."},render:({field:m,fieldState:S})=>e(k,D(w({id:m.phone},m),{autoFocus:!0,className:y({"p-invalid":S.invalid})}))}),e("label",{htmlFor:"phone",className:y({"p-error":h.phone}),children:"Tel\xE9fono*"})]}),f("phone")]}),r("div",{className:"field",children:[r("span",{className:"p-float-label",children:[e(A,{name:"password",control:u,rules:{required:"La contrase\xF1a es obligatoria"},render:({field:m,fieldState:S})=>e(se,D(w({id:m.name},m),{toggleMask:!0,className:y({"p-invalid":S.invalid}),header:E,footer:F}))}),e("label",{htmlFor:"password",className:y({"p-error":h.password}),children:"Contrase\xF1a*"})]}),f("password")]}),e(N,{type:"submit",label:"Crear Usuario"})]})}),e(I,{visible:s,header:"ERROR DE REGISTRO",modal:!0,onHide:()=>c(!1),children:e("p",{children:o})}),e(I,{visible:d.visible,modal:!0,onHide:()=>g(D(w({},d),{visible:!1})),children:e("p",{children:d.message})})]})},wr=()=>e("div",{className:"App",children:e(qe,{children:r(He,{children:[e(R,{path:"/login",element:e(fr,{})}),e(R,{path:"/",element:e(Xe,{})}),e(R,{path:"/catalog",element:e(pr,{})}),e(R,{path:"/checkout",element:e(ur,{})}),r(R,{path:"/admin/",element:e(vr,{}),children:[e(R,{path:"/admin/user-admin",element:e(Sr,{})}),e(R,{path:"/admin/product-admin",element:e(yr,{})})]})]})})});function Cr({error:a,resetErrorBoundary:t}){return r("div",{role:"alert",children:[e("p",{children:"Something went wrong:"}),e("pre",{children:a.message}),e("button",{onClick:t,children:"Try again"})]})}Be.render(e(T.StrictMode,{children:e(ze,{FallbackComponent:Cr,onError:(a,t)=>console.error({error:a,errorInfo:t}),children:e(wr,{})})}),document.getElementById("root"));
