(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(e,t,n){"use strict";n.r(t);n("hi3g"),n("lYjL"),n("IlJM"),n("RtS0"),n("IvQZ"),n("8cZI"),n("lmye"),n("D/wG"),n("JBxO"),n("FdtR"),n("Muwe"),n("4NM0"),n("y89P"),n("SgDD"),n("3dw1");var a,r,o="https://api.themoviedb.org/3",i="https://image.tmdb.org/t/p/w500/",c="ca745db198ca3fbe8342f07480e09405",s="https://c4.wallpaperflare.com/wallpaper/198/872/888/numbers-404-not-found-simple-background-minimalism-wallpaper-preview.jpg",l="regular",d="pro",u=document.querySelector("ul.movies"),m=document.querySelector("p.search-form__error"),v=[],p=1,h=function(e){var t=e.results,n=document.createDocumentFragment();t.forEach((function(e){var t,a,r,o,c,l,d=e.poster_path?i+e.poster_path:s,u=e.release_date.substring(0,4).trim(),m=e.original_title+" ("+u+")",v=(t=d,a=m,r=e.id,o=document.createElement("li"),c=document.createElement("p"),l=document.createElement("img"),o.className="movies__item",c.className="movies__title",l.className="movies__image",l.setAttribute("src",t),c.textContent=a,o.append(c),o.append(l),o.addEventListener("click",(function(){x(r,!1)})),o);n.appendChild(v)})),u.append(n),v=e},f=function(){m.classList.replace("search-form__error--visibale","search-form__error--hidden"),fetch(o+"/movie/popular?api_key="+c+"&language=en-US&page="+p).then((function(e){return e.json()})).then(h).catch(console.log)};fetch(o+"/genre/movie/list?api_key="+c+"&language=en-US").then((function(e){return e.json()})).then((function(e){a=e.genres})).catch(console.log),f();var g=" ",y=document.querySelector(".search-form"),_=document.querySelector(".search-form__input"),L=document.querySelector(".page-counter__wrapper"),S=(document.querySelector('[data-action="previous"]'),document.querySelector('[data-action="next"]'),document.querySelector(".btn_page-number")),b=localStorage.getItem("version");function w(e,t){if(void 0===t&&(t=1),1===t&&(S.textContent=t,p=t),!(p<1))return fetch(o+"/search/movie?api_key="+c+"&language=en-US&page="+p+"&include_adult=false&query="+e).then((function(e){return e.json()})).then((function(e){if(1===p||p<1?C.prevBtn.classList.add("hidden"):C.prevBtn.classList.remove("hidden"),p===e.total_pages?C.nextBtn.classList.add("hidden"):C.nextBtn.classList.remove("hidden"),0===e.results.length)return m.classList.replace("search-form__error--hidden","search-form__error--visibale"),void f();h(e),"pro"===b&&(p=1,B())})).catch((function(e){return console.log(e)}));S.textContent=1}function q(e){if(u.innerHTML="","page-counter__btn-previous"===e.target.id){if(1===p)return;p-=1,S.textContent=p,w(g,p)}else if("page-counter__btn-next"===e.target.id){if(p>=v.total_pages)return;++p,S.textContent=p,w(g,p)}1===p||p<1?C.prevBtn.classList.add("display-none"):C.prevBtn.classList.remove("display-none"),window.scrollBy(0,-window.innerHeight)}function B(){L.classList.add("hidden");new IntersectionObserver((function(e,t){e.forEach((function(n){n.isIntersecting&&(w(g,++p),e.length<20&&t.disconnect())}))}),{root:null,rootMargin:"0px",threshold:.5}).observe(u.lastChild)}y.addEventListener("submit",(function(e){if(e.preventDefault(),g=_.value.trim(),y.reset(),m.classList.replace("search-form__error--visibale","search-form__error--hidden"),""===g)return void f();u.innerHTML="",w(g)})),L.addEventListener("click",q);var k={},C={logoRef:document.querySelector(".js-logo"),homeBtn:document.querySelector('button[data-action="btn-home"]'),libraryBtn:document.querySelector('button[data-action="btn-library"]'),detailsPage:document.querySelector(".js-details-page"),detailsPageVideoId:document.querySelector(".js-video"),homePage:document.querySelector(".js-home-page"),libraryPage:document.querySelector(".js-library-page"),addBtnWatched:document.querySelector('button[data-add="btn-watched"]'),addBtnQueue:document.querySelector('button[data-add="btn-queue"]'),prevBtn:document.querySelector('button[data-action="previous"]'),nextBtn:document.querySelector('button[data-action="next"]'),watchedBtn:document.querySelector('button[data-action="btn-watched"]'),queueBtn:document.querySelector('button[data-action="btn-queue"]')};function E(){window.scrollBy(0,-window.innerHeight),C.homeBtn.classList.add("onClick"),C.libraryBtn.classList.remove("onClick"),C.homePage.classList.remove("visually-hidden"),C.detailsPage.classList.add("visually-hidden"),C.libraryPage.classList.add("visually-hidden"),C.prevBtn.addEventListener("click",q),C.nextBtn.addEventListener("click",q),C.watchedBtn.removeEventListener("click",V),C.queueBtn.removeEventListener("click",U),C.addBtnWatched.removeEventListener("click",V),C.addBtnQueue.removeEventListener("click",U)}function x(e,t){if(window.scrollBy(0,-window.innerHeight),C.homeBtn.classList.remove("onClick"),C.libraryBtn.classList.remove("onClick"),"IMG"===event.target.nodeName){var n,o=e,i=v.results;if(t){var l=[].concat(JSON.parse(localStorage.getItem("filmQueue")),JSON.parse(localStorage.getItem("filmWatched")));k=l.find((function(e){return e.id===o}))}else k=i.find((function(e){return e.id===o}));!function(e){var t=e.poster_path?"https://image.tmdb.org/t/p/w500/"+e.poster_path:s;j.src=t,J.textContent=e.title,P.textContent=e.vote_average+" / "+e.vote_count,Q.textContent=e.popularity,O.textContent=e.title,M.textContent=e.overview;var n=[];e.genre_ids.filter((function(e){return a.filter((function(t){return t.id===e})).forEach((function(e){return n.push(e.name)}))})),W.textContent=n.join(", "),D()}(k),C.detailsPage.classList.remove("visually-hidden"),C.libraryPage.classList.add("visually-hidden"),C.homePage.classList.add("visually-hidden"),C.addBtnWatched.addEventListener("click",A),C.addBtnQueue.addEventListener("click",H),L.removeEventListener("click",q),C.watchedBtn.removeEventListener("click",V),C.queueBtn.removeEventListener("click",U),b===d&&(C.detailsPageVideoId.innerHTML="",fetch("https://api.themoviedb.org/3/movie/"+e+"/videos?api_key="+c+"&language=en-US").then((function(e){return e.json()})).then((function(e){var t=e.results;r=t.map((function(e){return e.key})),n=function(e,t){void 0===t&&(t={});var n=document.createElement(e);for(var a in t)n.setAttribute(a,t[a]);return n}("iframe",{class:"js-video__iframe",id:"ytplayer",type:"text/html",width:"450",height:"300",src:"http://www.youtube.com/embed/"+r+"?autoplay=0&origin=http://example.com",frameborder:"0"}),C.detailsPageVideoId.appendChild(n)})).catch((function(e){return console.log(e)})))}}C.logoRef.addEventListener("click",E),C.homeBtn.addEventListener("click",E),C.libraryBtn.addEventListener("click",(function(){window.scrollBy(0,-window.innerHeight),C.homeBtn.classList.remove("onClick"),C.libraryBtn.classList.add("onClick"),C.libraryPage.classList.remove("visually-hidden"),C.detailsPage.classList.add("visually-hidden"),C.homePage.classList.add("visually-hidden"),C.watchedBtn.addEventListener("click",V),C.queueBtn.addEventListener("click",U),V(),L.removeEventListener("click",q),C.addBtnWatched.removeEventListener("click",A),C.addBtnQueue.removeEventListener("click",H)}));var I=document.querySelector(".add-btn_watched"),N=document.querySelector(".add-btn_queue"),j=document.querySelector(".details-page__image"),J=document.querySelector(".title_original"),P=document.querySelector(".about-list__descr_votes"),Q=document.querySelector(".about-list__descr_popularity"),O=document.querySelector(".about-list__descr_title"),W=document.querySelector(".about-list__descr_genre"),M=document.querySelector(".plot__descr");function D(){var e=(JSON.parse(localStorage.getItem("filmQueue"))||[]).map((function(e){return e.id})),t=(JSON.parse(localStorage.getItem("filmWatched"))||[]).map((function(e){return e.id}));e.includes(k.id)?(N.textContent="Delete from queue",localStorage.setItem("filmQueueBtnStatus",N.textContent)):(N.textContent="Add to queue",localStorage.setItem("filmQueueBtnStatus",N.textContent)),t.includes(k.id)?(I.textContent="Delete from watched",localStorage.setItem("filmWatchedBtnStatus",I.textContent)):(I.textContent="Add to watched",localStorage.setItem("filmWatchedBtnStatus",I.textContent))}function H(){var e=JSON.parse(localStorage.getItem("filmQueue"))||[];e.map((function(e){return e.id})).includes(k.id)?(e=e.filter((function(e){return e.id!==k.id})),localStorage.setItem("filmQueue",JSON.stringify(e))):(e.push(k),localStorage.setItem("filmQueue",JSON.stringify(e))),D()}function A(){var e=JSON.parse(localStorage.getItem("filmWatched"))||[];e.map((function(e){return e.id})).includes(k.id)?(e=e.filter((function(e){return e.id!==k.id})),localStorage.setItem("filmWatched",JSON.stringify(e))):(e.push(k),localStorage.setItem("filmWatched",JSON.stringify(e))),D()}var T=document.querySelector("ul.library-list"),F=function(e,t,n,a){var r=document.createElement("li"),o=document.createElement("p"),c=document.createElement("img"),s=document.createElement("span");return r.className="movies__item",o.className="movies__title ",s.className="movies__item-rating",c.className="movies__image",c.setAttribute("src",i+e),o.textContent=t,s.textContent=a,r.append(o),r.append(c),r.append(s),r.addEventListener("click",(function(){x(n,!0)})),r};function R(e){switch(e){case"queue":C.watchedBtn.classList.contains("onClickLibrary")&&C.watchedBtn.classList.remove("onClickLibrary"),C.queueBtn.classList.add("onClickLibrary");break;case"watched":C.queueBtn.classList.contains("onClickLibrary")&&C.queueBtn.classList.remove("onClickLibrary"),C.watchedBtn.classList.add("onClickLibrary")}}function U(){R("queue"),T.innerHTML="";var e=document.createDocumentFragment(),t=JSON.parse(localStorage.getItem("filmQueue"));if(t&&t.length>0)t.forEach((function(t){var n=F(t.poster_path,t.original_title,t.id,t.vote_average);e.appendChild(n)}));else{var n=document.createElement("p");n.className="movies__not-found",n.textContent="You do not have to queue movies to watch.Add them",e.append(n)}T.append(e)}function V(){R("watched"),T.innerHTML="";var e=document.createDocumentFragment(),t=JSON.parse(localStorage.getItem("filmWatched"));if(t&&t.length>0)t.forEach((function(t){var n=F(t.poster_path,t.original_title,t.id,t.vote_average);e.appendChild(n)}));else{var n=document.createElement("p");n.className="movies__not-found",n.textContent="You do not have to queue movies to watch.Add them",e.append(n)}T.append(e)}var Y=l,G=document.querySelector("body"),Z=document.querySelector("input.js-switch-input"),z=document.querySelector("ul.features"),K=document.querySelector(".js-video");G.classList.add(b||Y),z.classList.add(b||Y),b===l&&Z.setAttribute("checked",!0);Z.addEventListener("change",(function(){return location.reload(),G.classList.contains(l)?(G.classList.replace(l,d),K.classList.remove("visually-hidden"),z.classList.replace(l,d),localStorage.setItem("version",d),void(b=d)):G.classList.contains(d)?(G.classList.replace(d,l),K.classList.add("visually-hidden"),z.classList.replace(d,l),localStorage.setItem("version",l),void(b=l)):void 0}));n("yjly")},yjly:function(e,t,n){}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.b938523bcf806e55b247.js.map