!function(){"use strict";var e,t,c,n,a,r,l,i,o,u,s={370:function(e){e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},649:function(e,t,c){e.exports=c.p+"img/main/bg_calc.jpg"},635:function(e,t,c){e.exports=c.p+"img/main/bg_result.jpg"}},d={};function f(e){var t=d[e];if(void 0!==t)return t.exports;var c=d[e]={exports:{}};return s[e](c,c.exports,f),c.exports}f.m=s,f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,{a:t}),t},f.d=function(e,t){for(var c in t)f.o(t,c)&&!f.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:t[c]})},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;f.g.importScripts&&(e=f.g.location+"");var t=f.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var c=t.getElementsByTagName("script");c.length&&(e=c[c.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),f.p=e+"../"}(),f.b=document.baseURI||self.location.href,l=f(370),i=f.n(l),o=new URL(f(649),f.b),u=new URL(f(635),f.b),i()(o),i()(u),e={Ala:["Яйца (до 2 шт в сутки)","Кисломолочные продукты (творог 2-5%, натуральный йогурт, кефир, ряженка, молоко 2,5%, сметана до 15%, сливки 10%, белые сычужные сыры – адыгейский, сулугуни, брынза и др.)","Бобовые (соя, нут)","Мука (подсолнечная)","Рыба (скумбрия, желтохвост, анчоусы, нерка)","Мясные продукты (телятина, курица, индейка, кролик)"],Arg:["Орехи и семена (тыквенные, конопляные семечки, кунжут, миндаль – до 30 г в сутки)","Мука (подсолнечная, кунжутная, арахисовая)","Кисломолочные продукты (творог 2-5%, натуральный йогурт, кефир, ряженка, молоко 2,5%, сметана до 15%, сливки 10%, белые сычужные сыры – адыгейский, сулугуни, брынза и др.)","Яйца (до 2 шт в сутки)","Бобовые (соя, нут)","Цельнозерновые (бурый рис, овес, гречиха)","Рыба (скумбрия, треска, судак, семга, сельдь и др.)","Мясные продукты (курица, индейка, кролик)","Специи (сухой чеснок)"],Asp:["Яйца (до 2 шт в сутки)","Бобовые (соя, нут, горох, фасоль)","Орехи и семена (тыквенные, конопляные семечки, арахис, кешью – до 30 г в сутки)","Специи (петрушка сушеная, базилик)","Рыба (горбуша, желтохвост, тилапия и др.)"],Val:["Яйца (до 2 шт в сутки)","Мука (подсолнечная, соевая, кунжутная)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда)","Специи (петрушка сушеная, базилик)","Орехи и семена (конопляные и тыквенные семечки, арахис, грецкий орех – до 30 г в сутки)","Мясные продукты (курица, индейка, кролик)","Рыба (желтохвост, анчоусы, нерка)"],Gly:["Яйца (до 2 шт в сутки)","Мясные продукты (курица, индейка, кролик)","Мука (подсолнечная, кунжутная, арахисовая)","Орехи и семена (конопляные и тыквенные семечки, арахис, грецкий орех – до 30 г в сутки)","Морепродукты (осьминог, гребешки, каракатица)","Специи (петрушка сушеная)"],Glu:["Яйца (до 2 шт в сутки)","Мука (подсолнечная, кунжутная, арахисовая, соевая)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда)","Бобовые (соя, нут)","Орехи и семена (миндаль, тыквенные семечки, семечки подсолнуха – до 30 г в сутки)"],Leu:["Яйца (до 2 шт в сутки)","Мука (подсолнечная, кунжутная, арахисовая, соевая)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда)","Бобовые (соя, нут)","Икра (красная, черная)","Специи (петрушка сушеная)","Мясные продукты (курица, индейка, кролик)"],Ile:["Яйца (до 2 шт в сутки)","Мука (подсолнечная, кунжутная, арахисовая, соевая)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда)","Бобовые (соя, нут)","Икра (красная, черная)","Мясные продукты (курица, индейка, кролик)"],Lysine:["Яйца (до 2 шт в сутки)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда)","Мясные продукты (курица, индейка, кролик)","Рыба (желтохвост, анчоусы, нерка, форель, кета, палтус, семга, тилапия, минтай, сельдь, щука)"],Met:["Яйца (до 2 шт в сутки)","Орехи и семена (бразильский орех, конопляные семечки, кунжут – до 30 г в сутки)","Мука (подсолнечная, кунжутная, арахисовая, соевая)","Рыба (желтохвост, анчоусы, нерка)"],Orn:["Яйца (до 2 шт в сутки)","Орехи и семена (тыквенные, арахис, кунжут, грецкий орех – до 30 г в сутки)","Рыба (желтохвост, анчоусы, нерка, тунец)","Кисломолочные продукты (творог 2-5%, натуральный йогурт, кефир, ряженка, молоко 2,5%, сметана до 15%, сливки 10%, белые сычужные сыры – адыгейский, сулугуни, брынза и др.)","Бобовые (соя, горох, нут)"],Pro:["Яйца (до 2 шт в сутки)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда, Тильзер, моцарелла)","Специи (базилик, семена горчицы, паприка, орегано)","Бобовые (соя, нут)"],Serine:["Яйца (до 2 шт в сутки)","Бобовые (соя, нут)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда, Тильзер)","Орехи и семена (конопляные и тыквенные семечки, арахис, грецкий орех – до 30 г в сутки)"],Tyr:["Яйца (до 2 шт в сутки)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда, Тильзер)","Икра (красная, черная)"],Tryptophan:["Яйца (до 2 шт в сутки)","Мука (подсолнечная, кунжутная, арахисовая, соевая)","Бобовые (соя, нут)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда, Тильзер)","Орехи и семена (грецкий орех, тыквенные семечки – до 30 г в сутки)","Специи (петрушка сушеная)"],Phe:["Яйца (до 2 шт в сутки)","Мука (подсолнечная, кунжутная, арахисовая, соевая)","Сыры (Пармезан, Грюер, швейцарский, Эдам, Гауда, Тильзер)","Орехи и семена (грецкий орех, тыквенные семечки – до 30 г в сутки)"],Cit:["Орехи и семена (арахис, грецкий орех, тыквенные семечки – до 30 г в сутки)","Арбуз","Бобовые (соя, нут, фасоль)","Мясные продукты (курица, индейка, кролик)","Кисломолочные продукты (творог 2-5%, натуральный йогурт, кефир, ряженка, молоко 2,5%, сметана до 15%, сливки 10%, белые сычужные сыры – адыгейский, сулугуни, брынза и др.)"]},t=document.querySelectorAll(".header"),c=document.querySelector(".calculation-form"),n=document.querySelector(".calculation-result"),a=function(e){var a=document.querySelector(".header_result"),r=document.querySelector(".header_calc");t.forEach((function(e){e.classList.remove("header_active")})),[c].concat([n]).forEach((function(e){e.classList.remove("calculation_active")})),e?(a.classList.add("header_active"),n.classList.add("calculation_active")):(r.classList.add("header_active"),c.classList.add("calculation_active"),c.querySelectorAll("input").forEach((function(e){"text"===e.type?e.value="":e.checked=!1})),n.querySelector(".calculation-result__wrapper").innerHTML="")},r=function e(){a(!1),n.querySelector(".calculation-result__reset").removeEventListener("click",e)},c.addEventListener("submit",(function(t){t.preventDefault(),a(!0);var c={deficitName:[],deficitValue:[]},l=[];t.currentTarget.querySelectorAll("input").forEach((function(e){"text"===e.type?c[e.name]=e.value:e.checked&&(c.deficitValue.push(e.name),c.deficitName.push(e.value))})),n.querySelector(".calculation-result__wrapper").innerHTML='\n            <div class="calculation-info">\n                <div class="calculation-info__item">\n                    <label>Возраст пациента:</label>\n                    <div class="calculation-info__data_age">\n                        '.concat(""!==c.age?c.age+" лет":"Неизвестно",' \n                    </div>\n                </div>\n                <div class="calculation-info__item">\n                    <label>ИМТ:</label>\n                    <div class="calculation-info__data_index">\n                        ').concat(""!==c.index?c.index+" кг/м&#178;":"Неизвестно",' \n                    </div>\n                </div>\n            </div>\n            <ol class="calculation-result-list"></ol>\n        '),c.deficitName.forEach((function(e){var t=document.createElement("li");t.classList.add("calculation-result-list__item"),t.textContent="Дефицит: ".concat(e),n.querySelector(".calculation-result__wrapper > .calculation-result-list").append(t)})),Object.keys(e).forEach((function(t){c.deficitValue.forEach((function(c){t===c&&l.push(e[c])}))})),n.querySelectorAll(".calculation-result__wrapper .calculation-result-list__item").forEach((function(e,t){var c=document.createElement("div"),n=document.createElement("ul");c.classList.add("calculation-result__message"),n.classList.add("calculation-result__products"),l[t].forEach((function(e){var t=document.createElement("li");t.textContent="".concat(e,";"),n.append(t)})),c.textContent="Обогатите рацион следующими продуктами:",e.append(n),n.before(c)})),n.querySelector(".calculation-result__reset").addEventListener("click",r)}))}();