(this.webpackJsonpmusica=this.webpackJsonpmusica||[]).push([[0],{18:function(e,a,t){e.exports=t(42)},23:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(15),l=t.n(c),s=(t(23),t(4)),o=t.n(s),m=t(16),i=t(2),u=t(3),d=t(17),f=function(e){var a=e.setBusquedaLetra,t=Object(r.useState)({artista:"",cancion:""}),c=Object(i.a)(t,2),l=c[0],s=c[1],o=Object(r.useState)(!1),m=Object(i.a)(o,2),f=m[0],b=m[1],E=l.artista,p=l.cancion,h=function(e){s(Object(d.a)({},l,Object(u.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"bg-info"},f?n.a.createElement("p",{className:"alert alert-danger text-center p-2"},"Todos los campos son obligatorios"):null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==E.trim&&""!==p.trim()?(b(!1),a(l)):b(!0)},className:"col card text-white bg-transparent mb-5 pt-5 pb-2"},n.a.createElement("fieldset",null,n.a.createElement("legend",{className:"text-center"},"Buscador letras de canciones"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Artista"),n.a.createElement("input",{type:"text",className:"form-control",name:"artista",placeholder:"Nombre del artista",onChange:h,value:E}))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Cancion"),n.a.createElement("input",{type:"text",className:"form-control",name:"cancion",placeholder:"Nombre de la cancion",onChange:h,value:p})))),n.a.createElement("button",{className:"btn btn-primary float-right",type:"submit"},"Buscar"))))))},b=t(5),E=t.n(b),p=function(e){var a=e.letra;return a?n.a.createElement(r.Fragment,null,n.a.createElement("h2",null,"Letra Canci\xf3n"),n.a.createElement("p",{className:"letra"},a)):null},h=function(e){var a=e.informacion;if(0===Object.keys(a).length)return null;var t=a.strArtistThumb,r=a.strGenre,c=a.strBiographyES;return n.a.createElement("div",{className:"card border-light"},n.a.createElement("div",{className:"card-header bd-primary text-light font-weight-bold"},"Informacion del artista"),n.a.createElement("div",{className:"card-body"},n.a.createElement("img",{src:t,alt:"Logo Artista"}),n.a.createElement("p",{className:"card-text"},"G\xe9nero: ",r),n.a.createElement("h2",{className:"card-text"},"Biograf\xeda"),n.a.createElement("p",{className:"card-text"},c),n.a.createElement("p",{className:"card-text"},n.a.createElement("a",{href:"https://".concat(a.strFacebook),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-facebook"})),n.a.createElement("a",{href:"https://".concat(a.strTwitter),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-twitter"})),n.a.createElement("a",{href:"".concat(a.strLastFMChart),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-lastfm"})))))};var v=function(){var e=Object(r.useState)({}),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(r.useState)(""),s=Object(i.a)(l,2),u=s[0],d=s[1],b=Object(r.useState)({}),v=Object(i.a)(b,2),g=v[0],N=v[1],w=t.artista,j=t.cancion;return Object(r.useEffect)((function(){0!==Object.keys(t).length&&function(){var e=Object(m.a)(o.a.mark((function e(){var a,t,r,n,c,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.lyrics.ovh/v1/".concat(w,"/").concat(j),t="https://www.theaudiodb.com/api/v1/json/1/search.php?s=".concat(w),e.next=4,Promise.all([E.a.get(a),E.a.get(t)]);case 4:r=e.sent,n=Object(i.a)(r,2),c=n[0],l=n[1],d(c.data.lyrics),N(l.data.artists[0]);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t,g]),n.a.createElement(r.Fragment,null,n.a.createElement(f,{setBusquedaLetra:c}),n.a.createElement("div",{className:"container mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(h,{informacion:g})),n.a.createElement("div",{className:"col-md-6"},n.a.createElement(p,{letra:u})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.d3db6ff6.chunk.js.map