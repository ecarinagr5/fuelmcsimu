(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{141:function(e,a){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},167:function(e,a,t){"use strict";a.__esModule=!0,a.default=function(e,a){return e.classList?!!a&&e.classList.contains(a):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+a+" ")},e.exports=a.default},180:function(e,a,t){"use strict";var l=t(141);a.__esModule=!0,a.default=function(e,a){e.classList?e.classList.add(a):(0,c.default)(e,a)||("string"===typeof e.className?e.className=e.className+" "+a:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+a))};var c=l(t(167));e.exports=a.default},181:function(e,a,t){"use strict";function l(e,a){return e.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,a){e.classList?e.classList.remove(a):"string"===typeof e.className?e.className=l(e.className,a):e.setAttribute("class",l(e.className&&e.className.baseVal||"",a))}},483:function(e,a,t){"use strict";t.r(a);var l=t(9),c=t(10),n=t(12),r=t(11),s=t(13),m=t(23),E=(t(22),t(43),t(143),t(144),t(126)),i=(t(145),t(146),t(147),t(137),t(135),t(174)),d=(t(136),t(163)),N=t(164),h=t.n(N),o=(t(165),t(148),t(1)),x=t.n(o),g=(t(151),t(177),t(118)),p=t(119),b=t(103),u=t(104),A=t(64),v=t(421),y=t(128),P=new Date,M=(new Date(P.getFullYear(),P.getMonth(),P.getDate()-7),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(n.a)(this,Object(r.a)(a).call(this,e))).state={selectAll:!1,simular:!1},t.selectAll=t.selectAll.bind(Object(m.a)(Object(m.a)(t))),t.handleClick=t.handleClick.bind(Object(m.a)(Object(m.a)(t))),t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"selectAll",value:function(){this.setState({selectAll:!this.state.selectAll})}},{key:"handleClick",value:function(){this.setState({simular:!0})}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){Object(y.a)("primary"),Object(y.a)("secondary");return x.a.createElement(E.a,null,x.a.createElement(g.a,null,x.a.createElement(p.a,null,x.a.createElement(d.a,null),x.a.createElement(b.a,{className:"mb-3"},x.a.createElement(u.a,null,x.a.createElement(p.a,{md:3,className:"container-btn-masiva"},x.a.createElement(A.a,{color:"primary btn-barra-simular"},"SIMULACI\xd3N MASIVA"),x.a.createElement(A.a,{color:"primary btn-barra-simular"},"ACEPTAR \xa0",x.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-calendar2-event",viewBox:"0 0 16 16"},x.a.createElement("path",{d:"M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"}),x.a.createElement("path",{d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"}),x.a.createElement("path",{d:"M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"})))),x.a.createElement(i.Tabs,{headerStyle:{fontWeight:"bold"},activeHeaderStyle:{color:"black"}},x.a.createElement(i.Tab,{label:"Diesel"},x.a.createElement(v.a,{responsive:!0},x.a.createElement("thead",null,x.a.createElement("tr",null,x.a.createElement("th",{className:"text-center header-table"},"All ",x.a.createElement("input",{type:"radio",onChange:this.selectAll})),x.a.createElement("th",{className:"text-center header-table"},"EMPRESA"),x.a.createElement("th",{className:"text-center header-table"},"NEGOCIO"),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"PRECIO DE COMPRA HOY"),x.a.createElement("span",{className:"detail"},"Precio de venta TAR de Suministro")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"DIFERENCIA HOY Y MA\xd1ANA"),x.a.createElement("span",{className:"detail"},"Diferencia Hoy y Ma\xf1ana")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"PVP PROMEDIO DE LA COMPETENCIA"),x.a.createElement("span",{className:"detail"},"Precio de venta promedio de la competencia")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"PVP M\xc1XIMA DE LA COMPETENCIA"),x.a.createElement("span",{className:"detail"},"Precio de venta m\xe1ximo de la competencia")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"PVP M\xcdNIMO DE LA COMPETENCIA"),x.a.createElement("span",{className:"detail"},"Precio de venta m\xednimo de la competencia")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"PVP COMPETENCIA ESTRAT\xc9GICA"),x.a.createElement("span",{className:"detail"},"*")),x.a.createElement("th",{className:"text-center header-table"},"PVP RECOMENDADO"),x.a.createElement("th",{className:"text-center header-table"},"PVP SELECCIONADO"),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"MARGEN TE\xd3RICO"),x.a.createElement("span",{className:"detail"},"Dif. Precio de compra de hoy/ ma\xf1ana y precio seleccionado")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"MARGEN REAL"),x.a.createElement("span",{className:"detail"},"Dif. \xdaltima compra y precio seleccionado")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"DIFERENCIA VOLUMEN"),x.a.createElement("span",{className:"detail"},"Diferencia de volumen promedio del mes, con volumen objetivo")),x.a.createElement("th",{className:"text-center header-table"},"UTILIDAD TOTAL"),x.a.createElement("th",{className:"text-center header-table"}),x.a.createElement("th",{className:"text-center header-table"}))),x.a.createElement("tbody",null,x.a.createElement("tr",null,x.a.createElement("td",{className:"text-center color-blue"}," ",x.a.createElement("input",{type:"radio",id:"",name:"",value:"dewey"})),x.a.createElement("td",{className:"text-left"},"Servicio Aztecas"),x.a.createElement("td",{className:"text-center"}," B"),x.a.createElement("td",{className:"text-center"},"$13.5"),x.a.createElement("td",{className:"text-center"},"$15.6"),x.a.createElement("td",{className:"text-center"},"$12.2"),x.a.createElement("td",{className:"text-center"},"$15.3"),x.a.createElement("td",{className:"text-center"},"$12.2"),x.a.createElement("td",{className:"text-center"},"$13.3"),x.a.createElement("td",{className:"text-center"},"$15.2"),x.a.createElement("td",{className:"text-center bg-gray-light"},"$13.2"),x.a.createElement("td",{className:"text-center bg-gray-light"}," $ ",this.state.simular?x.a.createElement("input",{type:"number",className:"input-simulacion",placeholder:"12"}):12),x.a.createElement("td",{className:"text-center bg-gray-light"}," 16.8% "),x.a.createElement("td",{className:"text-center bg-gray-light"}," 250 lts"),x.a.createElement("td",{className:"text-center bg-gray-light"},"$10,4423"),x.a.createElement("td",{className:"text-center"},x.a.createElement("a",{href:"/#ServicioAztecas",target:"_self"},x.a.createElement("img",{src:h.a,alt:"ver",className:"ver-dashboard"}))),x.a.createElement("td",{className:"text-center"},x.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16",onClick:this.handleClick},x.a.createElement("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})))),x.a.createElement("tr",null,x.a.createElement("td",{className:"text-center color-blue"}," ",x.a.createElement("input",{type:"radio",id:"",name:"",value:"dewey"})),x.a.createElement("td",{className:"text-left"},"Servicio Neza"),x.a.createElement("td",{className:"text-center"}," A"),x.a.createElement("td",{className:"text-center"},"$13.5"),x.a.createElement("td",{className:"text-center"},"$12.2"),x.a.createElement("td",{className:"text-center"},"$13.6 "),x.a.createElement("td",{className:"text-center"},"$13.2 "),x.a.createElement("td",{className:"text-center"},"$12.2"),x.a.createElement("td",{className:"text-center"},"$13.3"),x.a.createElement("td",{className:"text-center"},"$15.23"),x.a.createElement("td",{className:"text-center bg-gray-light"},"$11.2"),x.a.createElement("td",{className:"text-center bg-gray-light"}," $ ",this.state.simular?x.a.createElement("input",{type:"number",className:"input-simulacion",placeholder:"12"}):12),x.a.createElement("td",{className:"text-center bg-gray-light"},"  12.8% "),x.a.createElement("td",{className:"text-center bg-gray-light"}," 150 lts"),x.a.createElement("td",{className:"text-center bg-gray-light"},"$20,4423"),x.a.createElement("td",{className:"text-center color-red"}," ",x.a.createElement("a",{href:"/#ServicoNeza",target:"_self"},x.a.createElement("img",{src:h.a,alt:"ver",className:"ver-dashboard"}))),x.a.createElement("td",{className:"text-center"},x.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},x.a.createElement("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})))),x.a.createElement("tr",null,x.a.createElement("td",{className:"text-center color-blue"}," ",x.a.createElement("input",{type:"radio",id:"",name:"",value:"dewey"})),x.a.createElement("td",{className:"text-left"},"Servicio Atizap\xe1n"),x.a.createElement("td",{className:"text-center"}," A"),x.a.createElement("td",{className:"text-center"},"$13.5"),x.a.createElement("td",{className:"text-center"},"$12.2"),x.a.createElement("td",{className:"text-center"},"$13.6 "),x.a.createElement("td",{className:"text-center"},"$13.2 "),x.a.createElement("td",{className:"text-center"},"$12.2"),x.a.createElement("td",{className:"text-center"},"$13.3"),x.a.createElement("td",{className:"text-center"},"$15.23"),x.a.createElement("td",{className:"text-center bg-gray-light"},"$11.2"),x.a.createElement("td",{className:"text-center bg-gray-light"}," $ ",this.state.simular?x.a.createElement("input",{type:"number",className:"input-simulacion",placeholder:"12"}):12),x.a.createElement("td",{className:"text-center bg-gray-light"},"  12.8% "),x.a.createElement("td",{className:"text-center bg-gray-light"}," 150 lts"),x.a.createElement("td",{className:"text-center bg-gray-light"},"$20,4423"),x.a.createElement("td",{className:"text-center color-red"}," ",x.a.createElement("a",{href:"/#ServicoNeza",target:"_self"},x.a.createElement("img",{src:h.a,alt:"ver",className:"ver-dashboard"}))),x.a.createElement("td",{className:"text-center"},x.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},x.a.createElement("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})))),x.a.createElement("tr",null,x.a.createElement("td",{className:"text-center color-blue"}," ",x.a.createElement("input",{type:"radio",id:"",name:"",value:"dewey"})),x.a.createElement("td",{className:"text-left"},"Servico Tlalnepantla"),x.a.createElement("td",{className:"text-center"}," A"),x.a.createElement("td",{className:"text-center"},"$13.5"),x.a.createElement("td",{className:"text-center"},"$12.2"),x.a.createElement("td",{className:"text-center"},"$13.6 "),x.a.createElement("td",{className:"text-center"},"$13.2 "),x.a.createElement("td",{className:"text-center"},"$12.2"),x.a.createElement("td",{className:"text-center"},"$13.3"),x.a.createElement("td",{className:"text-center"},"$15.23"),x.a.createElement("td",{className:"text-center bg-gray-light"},"$11.2"),x.a.createElement("td",{className:"text-center bg-gray-light"}," $ ",this.state.simular?x.a.createElement("input",{type:"number",className:"input-simulacion",placeholder:"12"}):12),x.a.createElement("td",{className:"text-center bg-gray-light"},"  12.8% "),x.a.createElement("td",{className:"text-center bg-gray-light"}," 150 lts"),x.a.createElement("td",{className:"text-center bg-gray-light"},"$20,4423"),x.a.createElement("td",{className:"text-center color-red"}," ",x.a.createElement("a",{href:"/#ServicoNeza",target:"_self"},x.a.createElement("img",{src:h.a,alt:"ver",className:"ver-dashboard"}))),x.a.createElement("td",{className:"text-center"},x.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},x.a.createElement("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"}))))))),x.a.createElement(i.Tab,{label:"< 92"},x.a.createElement(v.a,{responsive:!0},x.a.createElement("thead",null,x.a.createElement("tr",null,x.a.createElement("th",{className:"text-center header-table"},"All ",x.a.createElement("input",{type:"radio",onChange:this.selectAll})),x.a.createElement("th",{className:"text-center header-table"},"EMPRESA"),x.a.createElement("th",{className:"text-center header-table"},"NEGOCIO"),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"PRECIO DE COMPRA HOY"),x.a.createElement("span",{className:"detail"},"Precio de venta TAR de Suministro")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"DIFERENCIA HOY Y MA\xd1ANA"),x.a.createElement("span",{className:"detail"},"Diferencia Hoy y Ma\xf1ana")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"PVP PROMEDIO DE LA COMPETENCIA"),x.a.createElement("span",{className:"detail"},"Precio de venta promedio de la competencia")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"PVP M\xc1XIMA DE LA COMPETENCIA"),x.a.createElement("span",{className:"detail"},"Precio de venta m\xe1ximo de la competencia")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"PVP M\xcdNIMO DE LA COMPETENCIA"),x.a.createElement("span",{className:"detail"},"Precio de venta m\xednimo de la competencia")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"PVP COMPETENCIA ESTRAT\xc9GICA"),x.a.createElement("span",{className:"detail"},"*")),x.a.createElement("th",{className:"text-center header-table"},"PVP RECOMENDADO"),x.a.createElement("th",{className:"text-center header-table"},"PVP SELECCIONADO"),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"MARGEN TE\xd3RICO"),x.a.createElement("span",{className:"detail"},"Dif. Precio de compra de hoy/ ma\xf1ana y precio seleccionado")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"MARGEN REAL"),x.a.createElement("span",{className:"detail"},"Dif. \xdaltima compra y precio seleccionado")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"DIFERENCIA VOLUMEN"),x.a.createElement("span",{className:"detail"},"Diferencia de volumen promedio del mes, con volumen objetivo")),x.a.createElement("th",{className:"text-center header-table"},"UTILIDAD TOTAL"),x.a.createElement("th",{className:"text-center header-table"}),x.a.createElement("th",{className:"text-center header-table"}))),x.a.createElement("tbody",null,x.a.createElement("tr",null,x.a.createElement("td",{className:"text-center color-blue"}," ",x.a.createElement("input",{type:"radio",id:"",name:"",value:"dewey"})),x.a.createElement("td",{className:"text-center"},"Azcapotzalco"),x.a.createElement("td",{className:"text-center"},"$15.2"),x.a.createElement("td",{className:"text-center"},"$13.5"),x.a.createElement("td",{className:"text-center"},"$15.5"),x.a.createElement("td",{className:"text-center"},"$12.2"),x.a.createElement("td",{className:"text-center"},"$13.6 "),x.a.createElement("td",{className:"text-center"},"$13.2 "),x.a.createElement("td",{className:"text-center"},"$13.3"),x.a.createElement("td",{className:"text-center"},"$12.23"),x.a.createElement("td",{className:"text-center bg-gray-light"},"$13.2"),x.a.createElement("td",{className:"text-center bg-gray-light"},"$12"),x.a.createElement("td",{className:"text-center bg-gray-light"},"$12"),x.a.createElement("td",{className:"text-center bg-gray-light"},"$12.2"),x.a.createElement("td",{className:"text-center bg-gray-light bg-redb"},"$1.4"),x.a.createElement("td",{className:"text-center color-red"}," ",x.a.createElement("a",{href:"estacion#Azcapotzalco",target:"_self"},x.a.createElement("img",{src:h.a,alt:"ver",className:"ver-dashboard"}))),x.a.createElement("td",{className:"text-center"},x.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},x.a.createElement("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"}))))))),x.a.createElement(i.Tab,{label:"> 92"},x.a.createElement(v.a,{responsive:!0},x.a.createElement("thead",null,x.a.createElement("tr",null,x.a.createElement("th",{className:"text-center header-table"},"All ",x.a.createElement("input",{type:"radio",onChange:this.selectAll})),x.a.createElement("th",{className:"text-center header-table"},"EMPRESA"),x.a.createElement("th",{className:"text-center header-table"},"NEGOCIO"),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"PRECIO DE COMPRA HOY"),x.a.createElement("span",{className:"detail"},"Precio de venta TAR de Suministro")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"DIFERENCIA HOY Y MA\xd1ANA"),x.a.createElement("span",{className:"detail"},"Diferencia Hoy y Ma\xf1ana")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"PVP PROMEDIO DE LA COMPETENCIA"),x.a.createElement("span",{className:"detail"},"Precio de venta promedio de la competencia")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"PVP M\xc1XIMA DE LA COMPETENCIA"),x.a.createElement("span",{className:"detail"},"Precio de venta m\xe1ximo de la competencia")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"PVP M\xcdNIMO DE LA COMPETENCIA"),x.a.createElement("span",{className:"detail"},"Precio de venta m\xednimo de la competencia")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"PVP COMPETENCIA ESTRAT\xc9GICA"),x.a.createElement("span",{className:"detail"},"*")),x.a.createElement("th",{className:"text-center header-table"},"PVP RECOMENDADO"),x.a.createElement("th",{className:"text-center header-table"},"PVP SELECCIONADO"),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"MARGEN TE\xd3RICO"),x.a.createElement("span",{className:"detail"},"Dif. Precio de compra de hoy/ ma\xf1ana y precio seleccionado")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"MARGEN REAL"),x.a.createElement("span",{className:"detail"},"Dif. \xdaltima compra y precio seleccionado")),x.a.createElement("th",{className:"text-center header-table"},x.a.createElement("span",{className:"meaning"},"DIFERENCIA VOLUMEN"),x.a.createElement("span",{className:"detail"},"Diferencia de volumen promedio del mes, con volumen objetivo")),x.a.createElement("th",{className:"text-center header-table"},"UTILIDAD TOTAL"),x.a.createElement("th",{className:"text-center header-table"}),x.a.createElement("th",{className:"text-center header-table"}))),x.a.createElement("tbody",null,x.a.createElement("tr",null,x.a.createElement("td",{className:"text-center color-blue"}," ",x.a.createElement("input",{type:"radio",id:"",name:"",value:"dewey"})),x.a.createElement("td",{className:"text-center"},"Naucalpan"),x.a.createElement("td",{className:"text-center"}," 15.2"),x.a.createElement("td",{className:"text-center"}," 13.5"),x.a.createElement("td",{className:"text-center"},"15.5"),x.a.createElement("td",{className:"text-center"}," 13.6 "),x.a.createElement("td",{className:"text-center"},"15.6"),x.a.createElement("td",{className:"text-center"},"15.2"),x.a.createElement("td",{className:"text-center"}," 12.23"),x.a.createElement("td",{className:"text-center"}," 13.2"),x.a.createElement("td",{className:"text-center bg-gray-light"},"13.2"),x.a.createElement("td",{className:"text-center bg-gray-light"}," 12"),x.a.createElement("td",{className:"text-center bg-gray-light"}," 12"),x.a.createElement("td",{className:"text-center bg-gray-light"}," 1.3"),x.a.createElement("td",{className:"text-center bg-gray-light"},"1.5"),x.a.createElement("td",{className:"text-center color-red"}," ",x.a.createElement("a",{href:"estacion#Naucalpan",target:"_self"}," ",x.a.createElement("img",{src:h.a,alt:"ver",className:"ver-dashboard"}))),x.a.createElement("td",{className:"text-center"},x.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},x.a.createElement("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})))))))))))),x.a.createElement(g.a,null))}}]),a}(x.a.Component));a.default=M}}]);
//# sourceMappingURL=23.926c4283.chunk.js.map