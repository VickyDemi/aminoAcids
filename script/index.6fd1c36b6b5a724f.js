!function(){"use strict";var e={370:function(e){e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},649:function(e,t,n){e.exports=n.p+"img/main/bg_calc.jpg"},635:function(e,t,n){e.exports=n.p+"img/main/bg_result.jpg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"}(),n.b=document.baseURI||self.location.href,function(){var e,t,r,a,c,i,l,o=n(370),u=n.n(o),s=new URL(n(649),n.b),d=new URL(n(635),n.b);function f(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c,i,l=[],o=!0,u=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=c.call(n)).done)&&(l.push(r.value),l.length!==t);o=!0);}catch(e){u=!0,a=e}finally{try{if(!o&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}u()(s),u()(d),e={Ala:["Яйца (до 2 шт в сутки)","Кисломолочные продукты (творог 2-5%, натуральный йогурт, кефир, ряженка, молоко 2,5%, сметана до 15%, сливки 10%, белые сычужные сыры: адыгейский, сулугуни, брынза и др.)","Бобовые (соя, нут)","Мука (подсолнечная)","Рыба (скумбрия, желтохвост, анчоусы, нерка)","Мясные продукты (телятина, курица, индейка, кролик)"],Arg:["Орехи и семена (тыквенные семечки, конопляные семечки, кунжут, миндаль) – до 30 г в сутки","Мука (подсолнечная, кунжутная, арахисовая)","Кисломолочные продукты (творог 2-5%, натуральный йогурт, кефир, ряженка, молоко 2,5%, сметана до 15%, сливки 10%, белые сычужные сыры: адыгейский, сулугуни, брынза и др.)","Яйца (до 2 шт в сутки)","Бобовые (соя, нут)","Цельнозерновые (бурый рис, овес, гречиха)","Рыба (скумбрия, треска, судак, семга, сельдь)","Мясные продукты (курица, индейка, кролик)","Специи (сухой чеснок)"],Asp:["Яйца (до 2 шт в сутки)","Бобовые (соя, нут, горох, фасоль)","Орехи и семена (тыквенные семечки, конопляные семечки, арахис, кешью) – до 30 г в сутки","Специи (петрушка сушеная, базилик)","Рыба (горбуша, желтохвост, тилапия)"],Val:["Яйца (до 2 шт в сутки)","Мука (подсолнечная, соевая, кунжутная)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда)","Специи (петрушка сушеная, базилик)","Орехи и семена (конопляные семечки, тыквенные семечки, арахис, грецкий орех) – до 30 г в сутки","Мясные продукты (курица, индейка, кролик)","Рыба (желтохвост, анчоусы, нерка)"],Gly:["Яйца (до 2 шт в сутки)","Мясные продукты (курица, индейка, кролик)","Мука (подсолнечная, кунжутная, арахисовая)","Орехи и семена (конопляные семечки, арахис, тыквенные семечки, грецкий орех) – до 30 г в сутки","Морепродукты (осьминог, гребешки, каракатица)","Специи (петрушка сушеная)"],Glu:["Яйца (до 2 шт в сутки)","Мука (подсолнечная, кунжутная, арахисовая, соевая)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда)","Бобовые (соя, нут)","Орехи и семена (миндаль, тыквенные семечки, семечки подсолнуха) – до 30 г в сутки"],Leu:["Яйца (до 2 шт в сутки)","Мука (подсолнечная, кунжутная, арахисовая, соевая)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда)","Бобовые (соя, нут)","Икра (красная, черная)","Специи (петрушка сушеная)","Мясные продукты (курица, индейка, кролик)"],Ile:["Яйца (до 2 шт в сутки)","Мука (подсолнечная, кунжутная, арахисовая, соевая)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда)","Бобовые (соя, нут)","Икра (красная, черная)","Мясные продукты (курица, индейка, кролик)"],Lysine:["Яйца (до 2 шт в сутки)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда)","Мясные продукты (курица, индейка, кролик)","Рыба (желтохвост, анчоусы, нерка, форель, кета, палтус, семга, тилапия, минтай, сельдь, щука)"],Met:["Яйца (до 2 шт в сутки)","Орехи и семена (бразильский орех, конопляные семечки, кунжут) – до 30 г в сутки","Мука (подсолнечная, кунжутная, арахисовая, соевая)","Рыба (желтохвост, анчоусы, нерка)"],Orn:["Яйца (до 2 шт в сутки)","Орехи и семена (тыквенные семечки, арахис, кунжут, грецкий орех) – до 30 г в сутки","Рыба (желтохвост, анчоусы, нерка, тунец)","Кисломолочные продукты (творог 2-5%, натуральный йогурт, кефир, ряженка, молоко 2,5%, сметана до 15%, сливки 10%, белые сычужные сыры: адыгейский, сулугуни, брынза и др.)","Бобовые (соя, горох, нут)"],Pro:["Яйца (до 2 шт в сутки)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда, Тильзер, моцарелла)","Специи (базилик, семена горчицы, паприка, орегано)","Бобовые (соя, нут)"],Serine:["Яйца (до 2 шт в сутки)","Бобовые (соя, нут)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда, Тильзер)","Орехи и семена (конопляные семечки, тыквенные семечки, арахис, грецкий орех) – до 30 г в сутки"],Tyr:["Яйца (до 2 шт в сутки)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда, Тильзер)","Икра (красная, черная)"],Tryptophan:["Яйца (до 2 шт в сутки)","Мука (подсолнечная, кунжутная, арахисовая, соевая)","Бобовые (соя, нут)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда, Тильзер)","Орехи и семена (грецкий орех, тыквенные семечки) – до 30 г в сутки","Специи (петрушка сушеная)"],Phe:["Яйца (до 2 шт в сутки)","Мука (подсолнечная, кунжутная, арахисовая, соевая)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда, Тильзер)","Орехи и семена (грецкий орех, тыквенные семечки) – до 30 г в сутки"],Cit:["Орехи и семена (арахис, грецкий орех, тыквенные семечки) – до 30 г в сутки","Арбуз","Бобовые (соя, нут, фасоль)","Мясные продукты (курица, индейка, кролик)","Кисломолочные продукты (творог 2-5%, натуральный йогурт, кефир, ряженка, молоко 2,5%, сметана до 15%, сливки 10%, белые сычужные сыры: адыгейский, сулугуни, брынза и др.)"]},t=document.querySelectorAll(".header"),r=document.querySelector(".calculation-form"),a=document.querySelector(".calculation-result"),c=function(e){var n=document.querySelector(".header_result"),c=document.querySelector(".header_calc");t.forEach((function(e){e.classList.remove("header_active")})),[r].concat([a]).forEach((function(e){e.classList.remove("calculation_active")})),e?(n.classList.add("header_active"),a.classList.add("calculation_active")):(c.classList.add("header_active"),r.classList.add("calculation_active"),r.querySelectorAll("input").forEach((function(e){"text"===e.type?e.value="":e.checked=!1})),a.querySelector(".calculation-result__wrapper").innerHTML="")},i=function(t){var n={deficitName:[],deficitValue:[]},r=[];t.querySelectorAll("input").forEach((function(e){"text"===e.type?n[e.name]=e.value:e.checked&&(n.deficitValue.push(e.name),n.deficitName.push(e.value))})),a.querySelector(".calculation-result__wrapper").innerHTML='\n            <div class="calculation-info">\n                <div class="calculation-info__item">\n                    <label>Возраст пациента:</label>\n                    <div class="calculation-info__data_age">\n                        '.concat(""!==n.age?n.age+" лет":"Неизвестно",' \n                    </div>\n                </div>\n                <div class="calculation-info__item">\n                    <label>ИМТ:</label>\n                    <div class="calculation-info__data_index">\n                        ').concat(""!==n.index?n.index+" кг/м&#178;":"Неизвестно",' \n                    </div>\n                </div>\n            </div>\n            <div class="calculation-result-list">\n                <div class="calculation-result-list__title">\n                    <span>Дефицит:</span>\n                    \n                </div>\n            </div>\n        ');var c=document.createElement("div");c.classList.add("calculation-result-list__item");var i=document.createElement("ul");i.classList.add("calculation-result-list__names"),n.deficitName.forEach((function(e){var t=document.createElement("li");t.textContent=e,i.append(t)}));var o=document.createElement("div");o.classList.add("calculation-result__message"),o.textContent="Обогатите рацион следующими продуктами:";var u=document.createElement("ul");u.classList.add("calculation-result__products"),Object.keys(e).forEach((function(t){n.deficitValue.forEach((function(n){t===n&&r.push.apply(r,f(e[n]))}))})),function(e){var t={},n={};e.forEach((function(e){var r=e.match(/–[^)]+/),a=r?r[0]:"";if((e=e.replace(/–.*/,"")).includes("(")){var c=p(e.split(" ("),2),i=c[0],l=c[1];i=i.trim(),r&&!n[i]&&(n[i]=a.trim()),l=l.replace(")","").split(", "),t[i]||(t[i]=new Set),l.forEach((function(e){return t[i].add(e.trim())}))}else t[e]=new Set}));for(var r=[],a=0,c=Object.entries(t);a<c.length;a++){var i=p(c[a],2),l=i[0],o=i[1];if(o.size>0){var u="".concat(l," (").concat(f(o).join(", "),")");n[l]&&(u+=" ".concat(n[l])),r.push(u)}else r.push(l)}return r}(f(new Set(r))).forEach((function(e){var t=document.createElement("li");t.textContent="".concat(e,";"),u.append(t)})),u.before(o),a.querySelector(".calculation-result__wrapper .calculation-result-list__title").append(i),a.querySelector(".calculation-result__wrapper > .calculation-result-list").append(c),a.querySelector(".calculation-result__wrapper .calculation-result-list__item").append(u),a.querySelector(".calculation-result__reset").addEventListener("click",l)},l=function e(){c(!1),a.querySelector(".calculation-result__reset").removeEventListener("click",e)},r.addEventListener("submit",(function(e){e.preventDefault(),c(!0),i(e.currentTarget)}))}()}();