(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{122:function(e,a,t){"use strict";var n=t(26),r=t(8),c=t(3),l=t.n(c),i=t(1),o=t.n(i),u=(t(16),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),m=function(e){var a,t=e.tag,c=e.className,i=e.type,m=Object(r.a)(e,["tag","className","type"]),s=l()(Object(n.a)({},i,!!i),c);return a=t||(!t&&u[i]?u[i]:"p"),o.a.createElement(a,Object.assign({},m,{className:s}))};m.defaultProps={type:"p"},a.a=m},123:function(e,a,t){"use strict";var n=t(8),r=t(1),c=t.n(r),l=(t(16),t(20)),i=t(130),o=t(131),u=t(122),m=l.a.create("page"),s=function(e){var a=e.title,t=e.breadcrumbs,r=e.tag,l=e.className,s=e.children,d=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),b=m.b("px-3",l);return c.a.createElement(r,Object.assign({className:b},d),c.a.createElement("div",{className:m.e("header")},a&&"string"===typeof a?c.a.createElement(u.a,{type:"h1",className:m.e("title")},a):a,t&&c.a.createElement(i.a,{className:m.e("breadcrumb")},c.a.createElement(o.a,null,"Home"),t.length&&t.map(function(e,a){var t=e.name,n=e.active;return c.a.createElement(o.a,{key:a,active:n},t)}))),s)};s.defaultProps={tag:"div",title:""},a.a=s},127:function(e,a,t){"use strict";t.d(a,"a",function(){return n}),t.d(a,"b",function(){return r});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"primary";return"undefined"===typeof window?null:window.getComputedStyle(document.documentElement).getPropertyValue("--".concat(e))},r=function(){return["primary","secondary","success","info","warning","danger"]}},143:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var n=t(193),r=t.n(n),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return r()().number({min:e,max:a})}},193:function(e,a,t){var n=t(194);e.exports=function(e,a){return a&&(Array.isArray(a)&&a.length?n.seed_array(a):n.seed(a)),this.number=function(e){"number"===typeof e&&(e={max:e}),"undefined"===typeof(e=e||{}).min&&(e.min=0),"undefined"===typeof e.max&&(e.max=99999),"undefined"===typeof e.precision&&(e.precision=1);var a=e.max;return a>=0&&(a+=e.precision),e.precision*Math.floor(n.rand(a/e.precision,e.min/e.precision))},this.arrayElement=function(a){return(a=a||["a","b","c"])[e.random.number({max:a.length-1})]},this.objectElement=function(a,t){a=a||{foo:"bar",too:"car"};var n=Object.keys(a),r=e.random.arrayElement(n);return"key"===t?r:a[r]},this.uuid=function(){var e=this;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var t=e.number({min:0,max:15});return("x"==a?t:3&t|8).toString(16)})},this.boolean=function(){return!!e.random.number(1)},this.word=function(a){var t=e.random.arrayElement(["commerce.department","commerce.productName","commerce.productAdjective","commerce.productMaterial","commerce.product","commerce.color","company.catchPhraseAdjective","company.catchPhraseDescriptor","company.catchPhraseNoun","company.bsAdjective","company.bsBuzz","company.bsNoun","address.streetSuffix","address.county","address.country","address.state","finance.accountName","finance.transactionType","finance.currencyName","hacker.noun","hacker.verb","hacker.adjective","hacker.ingverb","hacker.abbreviation","name.jobDescriptor","name.jobArea","name.jobType"]);return e.fake("{{"+t+"}}")},this.words=function(a){var t=[];"undefined"===typeof a&&(a=e.random.number({min:1,max:3}));for(var n=0;n<a;n++)t.push(e.random.word());return t.join(" ")},this.image=function(){return e.image.image()},this.locale=function(){return e.random.arrayElement(Object.keys(e.locales))},this.alphaNumeric=function(a){"undefined"===typeof a&&(a=1);for(var t="",n=0;n<a;n++)t+=e.random.arrayElement(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]);return t},this}},194:function(e,a){function t(){var e,a,t;e=624,a=397,t=2147483648;var n=new Array(e),r=625;function c(e){return e<0?(e^t)+t:e}function l(e,a){return c(e+a&4294967295)}function i(e,a){for(var t=0,n=0;n<32;++n)e>>>n&1&&(t=l(t,c(a<<n)));return t}this.init_genrand=function(a){for(n[0]=c(4294967295&a),r=1;r<e;r++)n[r]=l(i(1812433253,c(n[r-1]^n[r-1]>>>30)),r),n[r]=c(4294967295&n[r])},this.init_by_array=function(a,t){var r,o,u,m,s;for(this.init_genrand(19650218),r=1,o=0,u=e>t?e:t;u;u--)n[r]=l(l(c(n[r]^i(c(n[r-1]^n[r-1]>>>30),1664525)),a[o]),o),n[r]=c(4294967295&n[r]),o++,++r>=e&&(n[0]=n[623],r=1),o>=t&&(o=0);for(u=623;u;u--)n[r]=(m=c((dbg=n[r])^i(c(n[r-1]^n[r-1]>>>30),1566083941)))<(s=r)?c(4294967296-(s-m)&4294967295):m-s,n[r]=c(4294967295&n[r]),++r>=e&&(n[0]=n[623],r=1);n[0]=2147483648};var o=[0,2567483615];this.genrand_int32=function(){var l;if(r>=e){var i;for(625==r&&this.init_genrand(5489),i=0;i<227;i++)l=c(n[i]&t|2147483647&n[i+1]),n[i]=c(n[i+a]^l>>>1^o[1&l]);for(;i<623;i++)l=c(n[i]&t|2147483647&n[i+1]),n[i]=c(n[i+(a-e)]^l>>>1^o[1&l]);l=c(n[623]&t|2147483647&n[0]),n[623]=c(n[396]^l>>>1^o[1&l]),r=0}return l=c((l=n[r++])^l>>>11),l=c(l^l<<7&2636928640),l=c(l^l<<15&4022730752),l=c(l^l>>>18)},this.genrand_int31=function(){return this.genrand_int32()>>>1},this.genrand_real1=function(){return this.genrand_int32()*(1/4294967295)},this.genrand_real2=function(){return this.genrand_int32()*(1/4294967296)},this.genrand_real3=function(){return(this.genrand_int32()+.5)*(1/4294967296)},this.genrand_res53=function(){return(67108864*(this.genrand_int32()>>>5)+(this.genrand_int32()>>>6))*(1/9007199254740992)}}a.MersenneTwister19937=t;var n=new t;n.init_genrand((new Date).getTime()%1e9),a.rand=function(e,a){return void 0===e&&(a=0,e=32768),Math.floor(n.genrand_real2()*(e-a)+a)},a.seed=function(e){if("number"!=typeof e)throw new Error("seed(S) must take numeric argument; is "+typeof e);n.init_genrand(e)},a.seed_array=function(e){if("object"!=typeof e)throw new Error("seed_array(A) must take array of numbers; is "+typeof e);n.init_by_array(e)}},464:function(e,a,t){"use strict";t.r(a);var n=t(22),r=t(1),c=t.n(r),l=t(127),i=t(143),o=t(116),u=t(117),m=t(101),s=t(106),d=t(102),b=t(142),f=t(123),h=["January","February","March","April","May","June","July"],p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{labels:h,datasets:[Object(n.a)({label:"Dataset 1",backgroundColor:Object(l.a)("primary"),borderColor:Object(l.a)("primary"),borderWidth:1,data:[Object(i.a)(),Object(i.a)(),Object(i.a)(),Object(i.a)(),Object(i.a)(),Object(i.a)(),Object(i.a)()]},e),Object(n.a)({label:"Dataset 2",backgroundColor:Object(l.a)("secondary"),borderColor:Object(l.a)("secondary"),borderWidth:1,data:[Object(i.a)(),Object(i.a)(),Object(i.a)(),Object(i.a)(),Object(i.a)(),Object(i.a)(),Object(i.a)()]},a)]}},y=function(){return{datasets:[{data:[Object(i.a)(),Object(i.a)(),Object(i.a)(),Object(i.a)(),Object(i.a)()],backgroundColor:[Object(l.a)("primary"),Object(l.a)("secondary"),Object(l.a)("success"),Object(l.a)("info"),Object(l.a)("danger")],label:"Dataset 1"}],labels:["Data 1","Data 2","Data 3","Data 4","Data 5"]}};a.default=function(){return c.a.createElement(f.a,{title:"Charts",breadcrumbs:[{name:"Charts",active:!0}]},c.a.createElement(o.a,null,c.a.createElement(u.a,{xl:6,lg:12,md:12},c.a.createElement(m.a,null,c.a.createElement(s.a,null,"Bar"),c.a.createElement(d.a,null,c.a.createElement(b.Bar,{data:p()})))),c.a.createElement(u.a,{xl:6,lg:12,md:12},c.a.createElement(m.a,null,c.a.createElement(s.a,null,"Line"),c.a.createElement(d.a,null,c.a.createElement(b.Line,{data:p({fill:!1},{fill:!1})}))))),c.a.createElement(o.a,null,c.a.createElement(u.a,{xl:6,lg:12,md:12},c.a.createElement(m.a,null,c.a.createElement(s.a,null,"Stacked Line"),c.a.createElement(d.a,null,c.a.createElement(b.Line,{data:p(),options:{scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Month"}}],yAxes:[{stacked:!0,scaleLabel:{display:!0,labelString:"Value"}}]}}})))),c.a.createElement(u.a,{xl:6,lg:12,md:12},c.a.createElement(m.a,null,c.a.createElement(s.a,null,"Combo Bar / Line"),c.a.createElement(d.a,null,c.a.createElement(b.Bar,{data:p({type:"line",fill:!1})}))))),c.a.createElement(o.a,null,c.a.createElement(u.a,{xl:6,lg:12,md:12},c.a.createElement(m.a,null,c.a.createElement(s.a,null,"Pie"),c.a.createElement(d.a,null,c.a.createElement(b.Pie,{data:y()})))),c.a.createElement(u.a,{xl:6,lg:12,md:12},c.a.createElement(m.a,null,c.a.createElement(s.a,null,"Doughnut"),c.a.createElement(d.a,null,c.a.createElement(b.Doughnut,{data:y()}))))),c.a.createElement(o.a,null,c.a.createElement(u.a,{xl:6,lg:12,md:12},c.a.createElement(m.a,null,c.a.createElement(s.a,null,"Polar"),c.a.createElement(d.a,null,c.a.createElement(b.Polar,{data:y()})))),c.a.createElement(u.a,{xl:6,lg:12,md:12},c.a.createElement(m.a,null,c.a.createElement(s.a,null,"Radar"),c.a.createElement(d.a,null,c.a.createElement(b.Radar,{data:p()}))))))}}}]);
//# sourceMappingURL=17.7f31c891.chunk.js.map