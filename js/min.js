function isiPhone(){return-1!=navigator.platform.indexOf("iPhone")||-1!=navigator.platform.indexOf("iPod")}(function(a){a.fn.afterTransition=function(a){var d=this;d.on("webkitTransitionEnd mozTransitionEnd",function(){a();d.off("webkitTransitionEnd mozTransitionEnd")})}})(jQuery);(function(a){a.fn.freeze=function(){this.addClass("no-trans");return this}})(jQuery);(function(a){a.fn.unfreeze=function(){this.removeClass("no-trans");return this}})(jQuery);
(function(a,g){var d="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";a.fn.imagesLoaded=function(b){function j(){var e=a(h),d=a(l);f&&(l.length?f.reject(n,e,d):f.resolve(n));a.isFunction(b)&&b.call(p,n,e,d)}function k(h){m(h.target,"error"===h.type)}function m(e,b){e.src===d||-1!==a.inArray(e,q)||(q.push(e),b?l.push(e):h.push(e),a.data(e,"imagesLoaded",{isBroken:b,src:e.src}),r&&f.notifyWith(a(e),[b,n,a(h),a(l)]),n.length===q.length&&(setTimeout(j),n.unbind(".imagesLoaded",
k)))}var p=this,f=a.isFunction(a.Deferred)?a.Deferred():0,r=a.isFunction(f.notify),n=p.find("img").add(p.filter("img")),q=[],h=[],l=[];a.isPlainObject(b)&&a.each(b,function(h,a){if("callback"===h)b=a;else if(f)f[h](a)});n.length?n.bind("load.imagesLoaded error.imagesLoaded",k).each(function(h,l){var b=l.src,f=a.data(l,"imagesLoaded");if(f&&f.src===b)m(l,f.isBroken);else if(l.complete&&l.naturalWidth!==g)m(l,0===l.naturalWidth||0===l.naturalHeight);else if(l.readyState||l.complete)l.src=d,l.src=b}):
j();return f?f.promise(p):p}})(jQuery);(function(){var a=function(h,a){var e=h.style[a];h.currentStyle?e=h.currentStyle[a]:window.getComputedStyle&&(e=document.defaultView.getComputedStyle(h,null).getPropertyValue(a));if("auto"==e&&"cursor"==a)for(var b=["a"],d=0;d<b.length;d++)if(h.tagName.toLowerCase()==b[d])return"pointer";return e},g=function(h){if(f.prototype._singleton){h||(h=window.event);var a;this!==window?a=this:h.target?a=h.target:h.srcElement&&(a=h.srcElement);f.prototype._singleton.setCurrent(a)}},d=function(h,a){if(h.addClass)return h.addClass(a),
h;if(a&&"string"==typeof a){var e=(a||"").split(/\s+/);if(1===h.nodeType)if(h.className){for(var b=" "+h.className+" ",d=h.className,g=0,f=e.length;g<f;g++)0>b.indexOf(" "+e[g]+" ")&&(d+=" "+e[g]);h.className=d.replace(/^\s+|\s+$/g,"")}else h.className=a}return h},b=function(h,a){if(h.removeClass)return h.removeClass(a),h;if(a&&"string"==typeof a||void 0===a){var e=(a||"").split(/\s+/);if(1===h.nodeType&&h.className)if(a){for(var b=(" "+h.className+" ").replace(/[\n\t]/g," "),d=0,g=e.length;d<g;d++)b=
b.replace(" "+e[d]+" "," ");h.className=b.replace(/^\s+|\s+$/g,"")}else h.className=""}return h},j=function(a){return(0<=a.indexOf("?")?"&":"?")+"nocache="+(new Date).getTime()},k=function(a){var b=[];return a.trustedDomains&&("string"==typeof a.trustedDomains?b.push("trustedDomain="+a.trustedDomains):b.push("trustedDomain="+a.trustedDomains.join(","))),b.join("&")},m=function(a,b){if(b.indexOf)return b.indexOf(a);for(var e=0,d=b.length;e<d;e++)if(b[e]===a)return e;return-1},p=function(a){if("string"==
typeof a)throw new TypeError("ZeroClipboard doesn't accept query strings.");return a.length?a:[a]},f=function(a,b){a&&(f.prototype._singleton||this).glue(a);if(f.prototype._singleton)return f.prototype._singleton;f.prototype._singleton=this;this.options={};for(var e in q)this.options[e]=q[e];for(var d in b)this.options[d]=b[d];this.handlers={};f.detectFlashSupport()&&(e=f.prototype._singleton,e.htmlBridge=document.getElementById("global-zeroclipboard-html-bridge"),e.htmlBridge||(d='    <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">       <param name="movie" value="'+
e.options.moviePath+j(e.options.moviePath)+'"/>       <param name="allowScriptAccess" value="always" />       <param name="scale" value="exactfit">       <param name="loop" value="false" />       <param name="menu" value="false" />       <param name="quality" value="best" />       <param name="bgcolor" value="#ffffff" />       <param name="wmode" value="transparent"/>       <param name="flashvars" value="'+k(e.options)+'"/>       <embed src="'+e.options.moviePath+j(e.options.moviePath)+'"         loop="false" menu="false"         quality="best" bgcolor="#ffffff"         width="100%" height="100%"         name="global-zeroclipboard-flash-bridge"         allowScriptAccess="always"         allowFullScreen="false"         type="application/x-shockwave-flash"         wmode="transparent"         pluginspage="http://www.macromedia.com/go/getflashplayer"         flashvars="'+
k(e.options)+'"         scale="exactfit">       </embed>     </object>',e.htmlBridge=document.createElement("div"),e.htmlBridge.id="global-zeroclipboard-html-bridge",e.htmlBridge.setAttribute("class","global-zeroclipboard-container"),e.htmlBridge.setAttribute("data-clipboard-ready",!1),e.htmlBridge.style.position="absolute",e.htmlBridge.style.left="-9999px",e.htmlBridge.style.top="-9999px",e.htmlBridge.style.width="15px",e.htmlBridge.style.height="15px",e.htmlBridge.style.zIndex="9999",e.htmlBridge.innerHTML=
d,document.body.appendChild(e.htmlBridge)),e.flashBridge=document["global-zeroclipboard-flash-bridge"])},r,n=[];f.prototype.setCurrent=function(h){r=h;this.reposition();this.htmlBridge.setAttribute("data-clipboard-text",this.options.text||h.getAttribute("data-clipboard-text"));this.ready()&&this.flashBridge.setText(this.options.text||h.getAttribute("data-clipboard-text"));h.getAttribute("title")&&this.setTitle(h.getAttribute("title"));this.setHandCursor("pointer"==a(h,"cursor"))};f.prototype.setText=
function(a){a&&""!==a&&(this.options.text=a,this.ready()&&this.flashBridge.setText(a))};f.prototype.setTitle=function(a){a&&""!==a&&this.htmlBridge.setAttribute("title",a)};f.prototype.setSize=function(a,b){this.ready()&&this.flashBridge.setSize(a,b)};f.prototype.setHandCursor=function(a){this.ready()&&this.flashBridge.setHandCursor(a)};f.version="1.1.7";var q={moviePath:"ZeroClipboard.swf",trustedDomains:null,text:null,hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active"};f.setDefaults=
function(a){for(var b in a)q[b]=a[b]};f.destroy=function(){f.prototype._singleton.unglue(n);var a=f.prototype._singleton.htmlBridge;a.parentNode.removeChild(a);delete f.prototype._singleton};f.detectFlashSupport=function(){var a=!1;try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(a=!0)}catch(b){navigator.mimeTypes["application/x-shockwave-flash"]&&(a=!0)}return a};f.prototype.resetBridge=function(){this.htmlBridge.style.left="-9999px";this.htmlBridge.style.top="-9999px";this.htmlBridge.removeAttribute("title");
this.htmlBridge.removeAttribute("data-clipboard-text");b(r,this.options.activeClass);r=null;this.options.text=null};f.prototype.ready=function(){var a=this.htmlBridge.getAttribute("data-clipboard-ready");return"true"===a||!0===a};f.prototype.reposition=function(){if(!r)return!1;var b=r,d=0,e=0,g=b.width||b.offsetWidth||0,f=b.height||b.offsetHeight||0,k=9999,j=a(b,"zIndex");for(j&&"auto"!=j&&(k=parseInt(j,10));b;)var j=parseInt(a(b,"borderLeftWidth"),10),m=parseInt(a(b,"borderTopWidth"),10),d=d+(isNaN(b.offsetLeft)?
0:b.offsetLeft),d=d+(isNaN(j)?0:j),e=e+(isNaN(b.offsetTop)?0:b.offsetTop),e=e+(isNaN(m)?0:m),b=b.offsetParent;this.htmlBridge.style.top=e+"px";this.htmlBridge.style.left=d+"px";this.htmlBridge.style.width=g+"px";this.htmlBridge.style.height=f+"px";this.htmlBridge.style.zIndex=k+1;this.setSize(g,f)};f.dispatch=function(a,b){f.prototype._singleton.receiveEvent(a,b)};f.prototype.on=function(a,b){for(var d=a.toString().split(/\s/g),g=0;g<d.length;g++)a=d[g].toLowerCase().replace(/^on/,""),this.handlers[a]||
(this.handlers[a]=b);this.handlers.noflash&&!f.detectFlashSupport()&&this.receiveEvent("onNoFlash",null)};f.prototype.addEventListener=f.prototype.on;f.prototype.receiveEvent=function(a,g){a=a.toString().toLowerCase().replace(/^on/,"");var e=r;switch(a){case "load":if(g&&10>parseFloat(g.flashVersion.replace(",",".").replace(/[^0-9\.]/gi,""))){this.receiveEvent("onWrongFlash",{flashVersion:g.flashVersion});return}this.htmlBridge.setAttribute("data-clipboard-ready",!0);break;case "mouseover":d(e,this.options.hoverClass);
break;case "mouseout":b(e,this.options.hoverClass);this.resetBridge();break;case "mousedown":d(e,this.options.activeClass);break;case "mouseup":b(e,this.options.activeClass);break;case "complete":this.options.text=null}if(this.handlers[a]){var f=this.handlers[a];"function"==typeof f?f.call(e,this,g):"string"==typeof f&&window[f].call(e,this,g)}};f.prototype.glue=function(a){a=p(a);for(var b=0;b<a.length;b++)if(-1==m(a[b],n)){n.push(a[b]);var d=a[b],f=g;d.addEventListener?d.addEventListener("mouseover",
f,!1):d.attachEvent&&d.attachEvent("onmouseover",f)}};f.prototype.unglue=function(a){a=p(a);for(var b=0;b<a.length;b++){var d=a[b],f=g;d.removeEventListener?d.removeEventListener("mouseover",f,!1):d.detachEvent&&d.detachEvent("onmouseover",f);d=m(a[b],n);-1!=d&&n.splice(d,1)}};"undefined"!=typeof module?module.exports=f:window.ZeroClipboard=f})();function ContentGetter(){function a(){console.log(window.location.hash);""!==window.location.hash?(whichItem=window.location.hash.split("#"),whichItem=whichItem[1].replace("/",""),proj.viewItemPop(whichItem)):proj.clearItem()}function g(a){document.title="Evan Brooks \u2014 "+a}this.getItem=function(a,j,k){history.pushState({},"","#/"+a);url="/project/"+a+".md";g(j);$.ajax(url).done(function(a){a=d.makeHtml(a);k(a)}).error(function(){k("I don't have anything here right now. <a href='mailto:hello@evn.io?subject=I have a question%20'>Get in touch</a> if you have any questions.")})};
this.clearItem=function(){history.pushState({},"","/");g("Portfolio")};var d=new Showdown.converter({extensions:["showmore"]});this.listen=function(){window.addEventListener("popstate",a);-1<navigator.userAgent.toLowerCase().indexOf("firefox")&&a()}};function Lightbox(){var a,g=$(".lightbox"),d,b,j,k;this.viewImage=function(m){m.preventDefault();a=$(m.target);src=a.attr("src");b=a.width();d=a.height();j=a.position().top;k=a.position().left;endW=wind.width();endH=wind.height();nW=a.get(0).naturalWidth;nH=a.get(0).naturalHeight;marg=endH/2;nH<endH&&(marg=nH/2);g.find("img").attr("src",src);g.off().show().css({"-webkit-transition":"none",width:b,height:d,top:j,left:k}).fadeIn().css({"-webkit-transition":"all 0.3s",width:endW,height:endH,"margin-top":-1*
marg+"px",top:endH/2,left:0});a.addClass("being-viewed");body.addClass("viewing-lightbox")};this.clearImage=function(m){m.preventDefault();g.css({"margin-top":0,width:b,height:d,top:j,left:k,"-webkit-transform":"none"}).afterTransition(function(){a.removeClass("being-viewed");body.removeClass("viewing-lightbox");g.fadeOut()})}};window.Swipe=function(a,g){if(!a)return null;this.options=g||{};this.index=this.options.startSlide||0;this.speed=this.options.speed||300;this.callback=this.options.callback||function(){};this.delay=this.options.auto||0;this.container=a;this.element=this.container.children[0];this.container.style.overflow="hidden";this.element.style.listStyle="none";this.element.style.margin=0;this.setup();this.begin();this.element.addEventListener&&(this.element.addEventListener("touchstart",this,!1),this.element.addEventListener("touchmove",
this,!1),this.element.addEventListener("touchend",this,!1),this.element.addEventListener("touchcancel",this,!1),this.element.addEventListener("webkitTransitionEnd",this,!1),this.element.addEventListener("msTransitionEnd",this,!1),this.element.addEventListener("oTransitionEnd",this,!1),this.element.addEventListener("transitionend",this,!1),window.addEventListener("resize",this,!1))};
Swipe.prototype={setup:function(){this.slides=this.element.children;this.length=this.slides.length;if(2>this.length)return null;this.width=Math.ceil("getBoundingClientRect"in this.container?this.container.getBoundingClientRect().width:this.container.offsetWidth);if(!this.width)return null;this.container.style.visibility="hidden";this.element.style.width=Math.ceil(this.slides.length*this.width)+"px";for(var a=this.slides.length;a--;){var g=this.slides[a];g.style.width=this.width+"px";g.style.display=
"inline-block";g.style.verticalAlign="top"}this.slide(this.index,0);this.container.style.visibility="visible"},slide:function(a,g){var d=this.element.style;void 0==g&&(g=this.speed);d.webkitTransitionDuration=d.MozTransitionDuration=d.msTransitionDuration=d.OTransitionDuration=d.transitionDuration=g+"ms";d.MozTransform=d.webkitTransform="translate3d("+-(a*this.width)+"px,0,0)";d.msTransform=d.OTransform="translateX("+-(a*this.width)+"px)";this.index=a},getPos:function(){return this.index},prev:function(a){this.delay=
a||0;clearTimeout(this.interval);this.index?this.slide(this.index-1,this.speed):this.slide(this.length-1,this.speed)},next:function(a){this.delay=a||0;clearTimeout(this.interval);this.index<this.length-1?this.slide(this.index+1,this.speed):this.slide(0,this.speed)},begin:function(){var a=this;this.interval=this.delay?setTimeout(function(){a.next(a.delay)},this.delay):0},stop:function(){this.delay=0;clearTimeout(this.interval)},resume:function(){this.delay=this.options.auto||0;this.begin()},handleEvent:function(a){switch(a.type){case "touchstart":this.onTouchStart(a);
break;case "touchmove":this.onTouchMove(a);break;case "touchcancel":case "touchend":this.onTouchEnd(a);break;case "webkitTransitionEnd":case "msTransitionEnd":case "oTransitionEnd":case "transitionend":this.transitionEnd(a);break;case "resize":this.setup()}},transitionEnd:function(a){this.delay&&this.begin();this.callback(a,this.index,this.slides[this.index])},onTouchStart:function(a){this.start={pageX:a.touches[0].pageX,pageY:a.touches[0].pageY,time:Number(new Date)};this.isScrolling=void 0;this.deltaX=
0;this.element.style.MozTransitionDuration=this.element.style.webkitTransitionDuration=0;a.stopPropagation()},onTouchMove:function(a){1<a.touches.length||a.scale&&1!==a.scale||(this.deltaX=a.touches[0].pageX-this.start.pageX,"undefined"==typeof this.isScrolling&&(this.isScrolling=!!(this.isScrolling||Math.abs(this.deltaX)<Math.abs(a.touches[0].pageY-this.start.pageY))),this.isScrolling||(a.preventDefault(),clearTimeout(this.interval),this.deltaX/=!this.index&&0<this.deltaX||this.index==this.length-
1&&0>this.deltaX?Math.abs(this.deltaX)/this.width+1:1,this.element.style.MozTransform=this.element.style.webkitTransform="translate3d("+(this.deltaX-this.index*this.width)+"px,0,0)",a.stopPropagation()))},onTouchEnd:function(a){var g=250>Number(new Date)-this.start.time&&20<Math.abs(this.deltaX)||Math.abs(this.deltaX)>this.width/2,d=!this.index&&0<this.deltaX||this.index==this.length-1&&0>this.deltaX;this.isScrolling||this.slide(this.index+(g&&!d?0>this.deltaX?1:-1:0),this.speed);a.stopPropagation()}};var Showdown={extensions:{}},forEach=Showdown.forEach=function(a,g){if("function"==typeof a.forEach)a.forEach(g);else{var d,b=a.length;for(d=0;d<b;d++)g(a[d],d,a)}},stdExtName=function(a){return a.replace(/[_-]||\s/g,"").toLowerCase()};
Showdown.converter=function(a){var g,d,b,j=0,k=[],m=[];if("undefind"!=typeof module&&"undefined"!=typeof exports&&"undefind"!=typeof require){var p=require("fs");p&&(p=p.readdirSync((__dirname||".")+"/extensions").filter(function(a){return~a.indexOf(".js")}).map(function(a){return a.replace(/\.js$/,"")}),Showdown.forEach(p,function(a){var c=stdExtName(a);Showdown.extensions[c]=require("./extensions/"+a)}))}this.makeHtml=function(a){g={};d={};b=[];a=a.replace(/~/g,"~T");a=a.replace(/\$/g,"~D");a=a.replace(/\r\n/g,
"\n");a=a.replace(/\r/g,"\n");a="\n\n"+a+"\n\n";a=y(a);a=a.replace(/^[ \t]+$/mg,"");Showdown.forEach(k,function(c){a=r(c,a)});var c=a;a=(c+="~0",c=c.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(a,c,x){a=x;return a=w(a),a=y(a),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,""),a="<pre><code"+(c?' class="'+c+'"':"")+">"+a+"\n</code></pre>",s(a)}),c=c.replace(/~0/,""),c);c=a=n(a);return a=(c+="~0",c=c.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm,
function(a,c,x,b,e){return c=c.toLowerCase(),g[c]=D(x),b?b+e:(e&&(d[c]=e.replace(/"/g,"&quot;")),"")}),c=c.replace(/~0/,""),c),a=h(a),a=E(a),a=a.replace(/~D/g,"$$"),a=a.replace(/~T/g,"~"),Showdown.forEach(m,function(c){a=r(c,a)}),a};if(a&&a.extensions){var f=this;Showdown.forEach(a.extensions,function(a){"string"==typeof a&&(a=Showdown.extensions[stdExtName(a)]);if("function"!=typeof a)throw"Extension '"+a+"' could not be loaded.  It was either not found or is not a valid extension.";Showdown.forEach(a(f),
function(a){a.type?"language"===a.type||"lang"===a.type?k.push(a):("output"===a.type||"html"===a.type)&&m.push(a):m.push(a)})})}var r=function(a,c){if(a.regex)return c.replace(RegExp(a.regex,"g"),a.replace);if(a.filter)return a.filter(c)},n=function(a){a=a.replace(/\n/g,"\n\n");return a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,q),a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm,
q),a=a.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,q),a=a.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g,q),a=a.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,q),a=a.replace(/\n\n/g,"\n"),a},q=function(a,c){var d=c;return d=d.replace(/\n\n/g,"\n"),d=d.replace(/^\n/,""),d=d.replace(/\n+$/g,""),d="\n\n~K"+(b.push(d)-1)+"K\n\n",d},h=function(a){var c=a,d=function(a){return a.replace(/[^\w]/g,"").toLowerCase()};a=(c=c.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,
function(a,c){return s('<h1 id="'+d(c)+'">'+l(c)+"</h1>")}),c=c.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(a,c){return s('<h2 id="'+d(c)+'">'+l(c)+"</h2>")}),c=c.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(a,c,b){a=c.length;return s("<h"+a+' id="'+d(b)+'">'+l(b)+"</h"+a+">")}),c);c=s("<hr />");a=a.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,c);a=a.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,c);a=a.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm,c);c=a=C(a);c=a=(c+="~0",c=c.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,
function(a,c,b){a=c;return a=w(z(a)),a=y(a),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,""),a="<pre><code>"+a+"\n</code></pre>",s(a)+b}),c=c.replace(/~0/,""),c);a=(c=c.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,c){var b=c;return b=b.replace(/^[ \t]*>[ \t]?/gm,"~0"),b=b.replace(/~0/g,""),b=b.replace(/^[ \t]+$/gm,""),b=h(b),b=b.replace(/(^|\n)/g,"$1  "),b=b.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,c){var b=c;return b=b.replace(/^  /mg,"~0"),b=b.replace(/~0/g,""),b}),s("<blockquote>\n"+
b+"\n</blockquote>")}),c);a=n(a);for(var c=a.replace(/^\n+/g,""),c=c.replace(/\n+$/g,""),e=c.split(/\n{2,}/g),c=[],g=e.length,f=0;f<g;f++){var k=e[f];0<=k.search(/~K(\d+)K/g)?c.push(k):0<=k.search(/\S/)&&(k=l(k),k=k.replace(/^([ \t]*)/g,"<p>"),k+="</p>",c.push(k))}g=c.length;for(f=0;f<g;f++)for(;0<=c[f].search(/~K(\d+)K/);)e=b[RegExp.$1],e=e.replace(/\$/g,"$$$$"),c[f]=c[f].replace(/~K\d+K/,e);return a=c.join("\n\n"),a},l=function(a){var c=a,c=a=(c=c.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,
c,b,d){a=d;return a=a.replace(/^([ \t]*)/g,""),a=a.replace(/[ \t]*$/g,""),a=w(a),c+"<code>"+a+"</code>"}),c),c=a=(c=c.replace(/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi,function(a){a=a.replace(/(.)<\/?code>(?=.)/g,"$1`");return a=u(a,"\\`*_"),a}),c),c=a=(c=c.replace(/\\(\\)/g,A),c=c.replace(/\\([`*_{}\[\]()>#+-.!])/g,A),c),c=a=(c=c.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,B),c=c.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,B),c),c=a=
(c=c.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,e),c=c.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,e),c=c.replace(/(\[([^\[\]]+)\])()()()()()/g,e),c);a=(c=c.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi,'<a href="$1">$1</a>'),c=c.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,function(a,c){var b=E(c),d=[function(a){return"&#"+a.charCodeAt(0)+";"},function(a){return"&#x"+a.charCodeAt(0).toString(16)+
";"},function(a){return a}];return b="mailto:"+b,b=b.replace(/./g,function(a){if("@"==a)a=d[Math.floor(2*Math.random())](a);else if(":"!=a){var c=Math.random();a=0.9<c?d[2](a):0.45<c?d[1](a):d[0](a)}return a}),b='<a href="'+b+'">'+b+"</a>",b=b.replace(/">.+:/g,'">'),b}),c);c=a=D(a);return a=(c=c.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>"),c=c.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"),c),a=a.replace(/  +\n/g," <br />\n"),a},e=function(a,c,b,e,f,h,k,j){void 0==j&&(j=
"");a=e.toLowerCase();if(""==f)if(""==a&&(a=b.toLowerCase().replace(/ ?\n/g," ")),void 0!=g[a])f=g[a],void 0!=d[a]&&(j=d[a]);else{if(!(-1<c.search(/\(\s*\)$/m)))return c;f=""}f=u(f,"*_");c='<a href="'+f+'"';return""!=j&&(j=j.replace(/"/g,"&quot;"),j=u(j,"*_"),c+=' title="'+j+'"'),c+=">"+b+"</a>",c},B=function(a,c,b,e,f,h,k,j){a=b;e=e.toLowerCase();j||(j="");if(""==f){""==e&&(e=a.toLowerCase().replace(/ ?\n/g," "));if(void 0==g[e])return c;f=g[e];void 0!=d[e]&&(j=d[e])}a=a.replace(/"/g,"&quot;");f=
u(f,"*_");c='<img src="'+f+'" alt="'+a+'"';return j=j.replace(/"/g,"&quot;"),j=u(j,"*_"),c+=' title="'+j+'"',c+=" />",c},v,C=function(a){a+="~0";var c=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return j?a=a.replace(c,function(a,c,b){a=c;b=-1<b.search(/[*+-]/g)?"ul":"ol";a=a.replace(/\n{2,}/g,"\n\n\n");a=v(a);return a=a.replace(/\s+$/,""),a="<"+b+">"+a+"</"+b+">\n",a}):(c=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,
a=a.replace(c,function(a,c,b,d){a=b;d=-1<d.search(/[*+-]/g)?"ul":"ol";a=a.replace(/\n{2,}/g,"\n\n\n");a=v(a);return a=c+"<"+d+">\n"+a+"</"+d+">\n",a})),a=a.replace(/~0/,""),a};v=function(a){return j++,a=a.replace(/\n{2,}$/,"\n"),a+="~0",a=a.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,function(a,b,d,e,f){a=f;return b||-1<a.search(/\n{2,}/)?a=h(z(a)):(a=C(z(a)),a=a.replace(/\n$/,""),a=l(a)),"<li>"+a+"</li>\n"}),a=a.replace(/~0/g,""),j--,a};var s=
function(a){return a=a.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(b.push(a)-1)+"K\n\n"},w=function(a){return a=a.replace(/&/g,"&amp;"),a=a.replace(/</g,"&lt;"),a=a.replace(/>/g,"&gt;"),a=u(a,"*_{}[]\\",!1),a},D=function(a){return a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),a=a.replace(/<(?![a-z\/?\$!])/gi,"&lt;"),a},E=function(a){return a=a.replace(/~E(\d+)E/g,function(a,b){var d=parseInt(b);return String.fromCharCode(d)}),a},z=function(a){return a=a.replace(/^(\t|[ ]{1,4})/gm,"~0"),a=a.replace(/~0/g,
""),a},y=function(a){return a=a.replace(/\t(?=\t)/g,"    "),a=a.replace(/\t/g,"~A~B"),a=a.replace(/~B(.+?)~A/g,function(a,b){for(var d=b,e=4-d.length%4,f=0;f<e;f++)d+=" ";return d}),a=a.replace(/~A/g,"    "),a=a.replace(/~B/g,""),a},u=function(a,b,d){b="(["+b.replace(/([\[\]\\])/g,"\\$1")+"])";d&&(b="\\\\"+b);return a=a.replace(RegExp(b,"g"),A),a},A=function(a,b){return"~E"+b.charCodeAt(0)+"E"}};"undefined"!=typeof module&&(module.exports=Showdown);
"function"==typeof define&&define.amd&&define("showdown",function(){return Showdown});(function(){var a=function(){return[{type:"output",filter:function(a){return a.replace(/<p>%aside<\/p>/gi,function(){return"<aside>"})}},{type:"output",filter:function(a){return a.replace(/<p>%endaside<\/p>/gi,function(){return"</aside>"})}}]};"undefined"!==typeof window&&(window.Showdown&&window.Showdown.extensions)&&(window.Showdown.extensions.showmore=a);"undefined"!==typeof module&&(module.exports=a)})();var iphone=isiPhone(),wind=$(window),html=$("html"),index=$(".scroller"),body=$("body, html"),slide=$("article"),itemData=[],lb=new Lightbox,scroller=new Scroller,proj=new Projectbox(".project"),cont=new ContentGetter,spinner='<div id="spinner"><span></span><span></span><span></span></div>',ex='<div id="ex">\u2715</div>';bindHandlers();cont.listen();setupZClip();
function bindHandlers(){iphone||wind.scroll(scroller.scrolling);wind.resize(refresh);html.on("click","[data-item-name] b",proj.viewItemClick).on("click","[data-item-link]",proj.viewItemInterLink).on("click","#spinner, #ex, .project-back",proj.clearItemClick).on("click","[data-lightbox]",lb.viewImage).on("click",".lightbox, .lightbox-back .ex",lb.clearImage)}
function Scroller(){function a(){topScroll=wind.scrollTop();midScroll=topScroll+wind.height()/2;bottomScroll=topScroll+wind.height();var a=!1;$.each(itemData,function(d,b){a?(b.div.attr("data-position","below"),"undefined"!=typeof b.vid&&b.vid.pause()):(b.top<topScroll&&(b.div.attr("data-position","above"),"undefined"!=typeof b.vid&&b.vid.pause()),b.top>topScroll&&b.top<midScroll&&(b.div.attr("data-position","current"),"undefined"!=typeof b.vid&&b.vid.play(),a=!0))})}this.scrolling=a;refresh();a()}
function Projectbox(){function a(){j=b.attr("data-item-name");t=b.attr("data-title");d=$(b).siblings(".details");elparent=$(b).parent();elparent.addClass("loading "+j);d.before(spinner);b.before(ex);d.html("");cont.getItem(j,t,function(a){setTimeout(function(){d.css("height","1000px");d.afterTransition(function(){d.html(a);d.imagesLoaded(function(){d.freeze().css("height","auto").fadeIn().unfreeze();elparent.removeClass("loading");body.addClass("viewing-item");analytics.track("Viewed "+j);"function"==
typeof initiateProject&&initiateProject()})})},500)});b.html();b.width();b.height();b.offset();wind.scrollTop();b.offset();wind.scrollLeft();fS=b.css("font-size");fF=b.css("font-family");endL=wind.width()/10+"px";pos=b.parent().offset().top-1;body.animate({scrollTop:pos},200,function(){elparent.addClass("current")});body.afterTransition(function(){})}function g(a){"undefined"==typeof a&&(a=function(){});b&&(d.css("height",d.height()),d.html(""),d.removeAttr("style"),$("#spinner").remove(),$("#ex").remove(),
elparent.removeClass("current"),body.removeClass("viewing-item"),elparent.removeClass(j),setTimeout(function(){analytics.track("Closed "+j);refresh();a()},500))}var d,b,j;$(".project-main-figure");this.viewItemPop=function(d){null!==b&&g();b=$("[data-item-name = "+d+"]");1>b.length&&(b=$("#missing"));a()};this.viewItemInterLink=function(d){d.preventDefault();str=$(d.target).attr("data-item-link");analytics.track("Interlink to "+str);g(function(){b=$("[data-item-name = "+str+"]");a()})};this.viewItemClick=
function(d){d.preventDefault();null!==b&&g();b=$(d.target).parent();a()};this.clearItem=g;this.clearItemClick=function(a){a.preventDefault();body.animate({scrollTop:pos},200,function(){cont.clearItem();g(function(){})})}}function refresh(){$(".item figure").hide().fadeOut().show();itemData=[];$.each($(".item"),function(a,g){var d=$(g),b=d.find("video").get(0);itemData[a]={div:d,top:d.offset().top,bottom:d.offset().top+d.innerHeight(),vid:b}})}
function setupZClip(){ZeroClipboard.setDefaults({moviePath:"/js/zeroclip.swf"});var a=$("#copybtn"),g=new ZeroClipboard,d=$("#global-zeroclipboard-html-bridge").remove(),d=$(d).removeAttr("style").css({position:"absolute",left:"100%",top:"0",width:60+a.width()+"px",height:a.height()+"px","z-index":999});a.parent().before(d);g.on("load",function(){setTimeout(function(){g.setText(a.attr("data-clipboard-text"));a.parent().addClass("loaded");$(".flash-wrapper").on("click",function(a){a.preventDefault()})},
200)});g.on("complete",function(){a.parent().addClass("done open");setTimeout(function(){a.parent().removeClass("open")},2E3);setTimeout(function(){a.parent().removeClass("done")},2200);analytics.track("copied email")})};
