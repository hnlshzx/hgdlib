(function(){var j={bind:function(a){for(var b=arguments[1],c=[],d=2,i=arguments.length;d<i;d++)c.push(arguments[d]);return function(){for(var f=c.concat(),e=0,k=arguments.length;e<k;e++)f.push(arguments[e]);return a.apply(b||this,f)}},bindEvent:function(a){for(var b=arguments[1],c=[],d=2,i=arguments.length;d<i;d++)c.push(arguments[d]);return function(f){var e=c.concat();e.unshift(f||window.event);return a.apply(b||this,e)}}},g={on:document.addEventListener?function(a,b,c){a.addEventListener(b,c,false)}:
function(a,b,c){a.attachEvent("on"+b,c)},un:document.removeEventListener?function(a,b,c){a.removeEventListener(b,c,false)}:function(a,b,c){a.detachEvent("on"+b,c)},element:function(a){return a.target||a.srcElement}},l={pos:function(a){var b=0,c=0,d=document.documentElement,i=document.body,f=function(o,p){b+=o||0;c+=p||0};if(a==document.body)if(typeof window.pageYOffset=="number"){c=window.pageYOffset;b=window.pageXOffset}else if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){c=
document.body.scrollTop;b=document.body.scrollLeft}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){c=document.documentElement.scrollTop;b=document.documentElement.scrollLeft}}else if(a.getBoundingClientRect){a=a.getBoundingClientRect();f(a.left+Math.max(d.scrollLeft,i.scrollLeft)-d.clientLeft,a.top+Math.max(d.scrollTop,i.scrollTop)-d.clientTop)}else{var e=a.offsetParent,k=a.style.position=="fixed",m=a,h=a.parentNode;for(f(a.offsetLeft,a.offsetTop);e;){f(e.offsetLeft,
e.offsetTop);if(Como.Browser.firefox&&!/^t(able|d|h)$/i.test(e.tagName)||Como.Browser.safari)f(a.style.borderLeftWidth,a.style.borderTopWidth);if(!k&&e.style.position=="fixed")k=true;m=e.tagName.toLowerCase()=="body"?m:e;e=e.offsetParent}for(;h&&h.tagName&&!/^body|html$/i.test(h.tagName);){/^inline|table.*$/i.test(h.style.display)||f(-h.scrollLeft,-h.scrollTop);Como.Browser.firefox&&h.style.overflow!="visible"&&f(h.style.borderLeftWidth,h.style.borderTopWidth);h=h.parentNode}Como.Browser.firefox&&
m.style.position!="absolute"&&f(-i.offsetLeft,-i.offsetTop);k&&f(Math.max(d.scrollLeft,i.scrollLeft),Math.max(d.scrollTop,i.scrollTop))}return{left:b,top:c}},height:function(a,b){return typeof b=="undefined"?a.offsetHeight||(a.style.height?parseInt(a.style.height.replace("px","")):0):a.style.height=b+"px"},width:function(a,b){return typeof b=="undefined"?a.offsetWidth||(a.style.width?parseInt(a.style.width.replace("px","")):0):a.style.width=b+"px"}},n={init:function(){this._handler_hover=j.bindEvent(this.hover,
this);this._handler_out=j.bindEvent(this.out,this);for(var a=document.getElementsByTagName("img"),b=0,c=a.length;b<c;b++)this.initImage(a[b]);a=document.getElementsByTagName("embed");b=0;for(c=a.length;b<c;b++)this.initEmb(a[b])},initImage:function(a){if(a.width>300&&a.height>300){g.un(a,"mouseover",this._handler_hover);g.on(a,"mouseover",this._handler_hover);g.un(a,"mouseout",this._handler_out);g.on(a,"mouseout",this._handler_out)}},initEmb:function(a){var b=l.width(a),c=l.height(a);if(b>200||c>
200){a=a.parentNode;g.un(a,"mouseover",this._handler_hover);g.on(a,"mouseover",this._handler_hover);g.un(a,"mouseout",this._handler_out);g.on(a,"mouseout",this._handler_out)}},hover:function(a){var b=g.element(a);if(b){if(!this._tipEl){var c=document.createElement("div"),d=c.style;d.position="absolute";d.width="86px";d.height="0";d.cursor="pointer";d.zIndex="2147483647";d.background='transparent url("http://static.ikeepu.com/app/bm/autocheck.gif") no-repeat scroll 0 0';c.title="add to ikeepu";document.body.appendChild(c);
this._tipEl=c;g.on(this._tipEl,"click",j.bind(this.click,this))}c=l.pos(b);d=b.tagName.toLowerCase()=="img"?0:-25;this._tipEl.style.top=c.top+d+"px";this._tipEl.style.left=c.left+l.width(b)-86+"px";this._curEl=b;this.show(a)}},out:function(a){g.element(a)&&this._tipEl&&this.hide(a)},show:function(){if(!this.isShow){if(!this._handler_up)this._handler_up=j.bind(function(){if(this._curint>25)clearInterval(this._time_up);else{this._curint+=5;this._tipEl.style.height=this._curint+"px"}},this);this.isShow=
true;this._time_up&&clearInterval(this._time_up);this._time_down&&clearInterval(this._time_down);this._tipEl.style="0px";this._curint=0;this._time_up=setInterval(this._handler_up,20)}},hide:function(a){if(this.isShow){if(!this._handler_down)this._handler_down=j.bind(function(){if(this._curint<0)clearInterval(this._time_down);else{this._curint-=5;this._tipEl.style.height=this._curint+"px"}},this);if((a.relatedTarget?a.relatedTarget:a.type=="mouseout"?a.toElement:a.fromElement)!=this._tipEl){this.isShow=
false;this._time_up&&clearInterval(this._time_up);this._time_down&&clearInterval(this._time_down);this._tipEl.style="25px";this._curint=25;this._time_down=setInterval(this._handler_down,20)}}},click:function(){window.$ComoSelectEl=this._curEl;var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","http://static.ikeepu.com/app/bm/s.js");document.body.appendChild(a)}};document.location.host.indexOf("ikeepu.com")<0&&setTimeout(j.bind(n.init,n),1E3)})();
