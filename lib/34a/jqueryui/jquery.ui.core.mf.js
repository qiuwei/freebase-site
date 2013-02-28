
/*
 * Copyright 2010, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Additional Licenses for Third Party components can be found here:
 * http://wiki.freebase.com/wiki/Freebase_Site_License
 *
 */
(function(a,g){function l(e){return!a(e).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(!a.ui.version){a.extend(a.ui,{version:"1.8.10",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,
PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});a.fn.extend({_focus:a.fn.focus,focus:function(e,c){return typeof e==="number"?this.each(function(){var b=this;setTimeout(function(){a(b).focus();c&&c.call(b)},e)}):this._focus.apply(this,arguments)},scrollParent:function(){var e;e=a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,
"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!e.length?a(document):e},zIndex:function(e){if(e!==g)return this.css("zIndex",e);if(this.length){e=a(this[0]);for(var c;e.length&&e[0]!==document;){c=e.css("position");
if(c==="absolute"||c==="relative"||c==="fixed"){c=parseInt(e.css("zIndex"),10);if(!isNaN(c)&&c!==0)return c}e=e.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});a.each(["Width","Height"],function(e,c){function b(h,i,m,n){a.each(d,function(){i-=parseFloat(a.curCSS(h,"padding"+this,true))||0;if(m)i-=parseFloat(a.curCSS(h,
"border"+this+"Width",true))||0;if(n)i-=parseFloat(a.curCSS(h,"margin"+this,true))||0});return i}var d=c==="Width"?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),j={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(h){if(h===g)return j["inner"+c].call(this);return this.each(function(){a(this).css(f,b(this,h)+"px")})};a.fn["outer"+c]=function(h,i){if(typeof h!=="number")return j["outer"+c].call(this,h);return this.each(function(){a(this).css(f,
b(this,h,true,i)+"px")})}});a.extend(a.expr[":"],{data:function(e,c,b){return!!a.data(e,b[3])},focusable:function(e){var c=e.nodeName.toLowerCase(),b=a.attr(e,"tabindex");if("area"===c){c=e.parentNode;b=c.name;if(!e.href||!b||c.nodeName.toLowerCase()!=="map")return false;e=a("img[usemap=#"+b+"]")[0];return!!e&&l(e)}return(/input|select|textarea|button|object/.test(c)?!e.disabled:"a"==c?e.href||!isNaN(b):!isNaN(b))&&l(e)},tabbable:function(e){var c=a.attr(e,"tabindex");return(isNaN(c)||c>=0)&&a(e).is(":focusable")}});
a(function(){var e=document.body,c=e.appendChild(c=document.createElement("div"));a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});a.support.minHeight=c.offsetHeight===100;a.support.selectstart="onselectstart"in c;e.removeChild(c).style.display="none"});a.extend(a.ui,{plugin:{add:function(e,c,b){e=a.ui[e].prototype;for(var d in b){e.plugins[d]=e.plugins[d]||[];e.plugins[d].push([c,b[d]])}},call:function(e,c,b){if((c=e.plugins[c])&&e.element[0].parentNode)for(var d=0;d<c.length;d++)e.options[c[d][0]]&&
c[d][1].apply(e.element,b)}},contains:function(e,c){return document.compareDocumentPosition?e.compareDocumentPosition(c)&16:e!==c&&e.contains(c)},hasScroll:function(e,c){if(a(e).css("overflow")==="hidden")return false;var b=c&&c==="left"?"scrollLeft":"scrollTop",d=false;if(e[b]>0)return true;e[b]=1;d=e[b]>0;e[b]=0;return d},isOverAxis:function(e,c,b){return e>c&&e<c+b},isOver:function(e,c,b,d,f,j){return a.ui.isOverAxis(e,b,f)&&a.ui.isOverAxis(c,d,j)}})}})(jQuery);
(function(a,g){if(a.cleanData){var l=a.cleanData;a.cleanData=function(c){for(var b=0,d;(d=c[b])!=null;b++)a(d).triggerHandler("remove");l(c)}}else{var e=a.fn.remove;a.fn.remove=function(c,b){return this.each(function(){if(!b)if(!c||a.filter(c,[this]).length)a("*",this).add([this]).each(function(){a(this).triggerHandler("remove")});return e.call(a(this),c,b)})}}a.widget=function(c,b,d){var f=c.split(".")[0],j;c=c.split(".")[1];j=f+"-"+c;if(!d){d=b;b=a.Widget}a.expr[":"][j]=function(h){return!!a.data(h,
c)};a[f]=a[f]||{};a[f][c]=function(h,i){arguments.length&&this._createWidget(h,i)};b=new b;b.options=a.extend(true,{},b.options);a[f][c].prototype=a.extend(true,b,{namespace:f,widgetName:c,widgetEventPrefix:a[f][c].prototype.widgetEventPrefix||c,widgetBaseClass:j},d);a.widget.bridge(c,a[f][c])};a.widget.bridge=function(c,b){a.fn[c]=function(d){var f=typeof d==="string",j=Array.prototype.slice.call(arguments,1),h=this;d=!f&&j.length?a.extend.apply(null,[true,d].concat(j)):d;if(f&&d.charAt(0)==="_")return h;
f?this.each(function(){var i=a.data(this,c),m=i&&a.isFunction(i[d])?i[d].apply(i,j):i;if(m!==i&&m!==g){h=m;return false}}):this.each(function(){var i=a.data(this,c);i?i.option(d||{})._init():a.data(this,c,new b(d,this))});return h}};a.Widget=function(c,b){arguments.length&&this._createWidget(c,b)};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(c,b){a.data(b,this.widgetName,this);this.element=a(b);this.options=a.extend(true,{},this.options,
this._getCreateOptions(),c);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(c,b){var d=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c==="string"){if(b===g)return this.options[c];d={};d[c]=b}this._setOptions(d);return this},_setOptions:function(c){var b=this;a.each(c,function(d,f){b._setOption(d,f)});return this},_setOption:function(c,b){this.options[c]=b;if(c==="disabled")this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",b);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(c,b,d){var f=this.options[c];b=a.Event(b);b.type=(c===this.widgetEventPrefix?c:this.widgetEventPrefix+c).toLowerCase();d=d||{};if(b.originalEvent){c=a.event.props.length;for(var j;c;){j=a.event.props[--c];b[j]=b.originalEvent[j]}}this.element.trigger(b,d);return!(a.isFunction(f)&&f.call(this.element[0],b,d)===false||b.isDefaultPrevented())}}})(jQuery);
(function(a){a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var g=this;this.element.bind("mousedown."+this.widgetName,function(l){return g._mouseDown(l)}).bind("click."+this.widgetName,function(l){if(true===a.data(l.target,g.widgetName+".preventClickEvent")){a.removeData(l.target,g.widgetName+".preventClickEvent");l.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(g){g.originalEvent=
g.originalEvent||{};if(!g.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(g);this._mouseDownEvent=g;var l=this,e=g.which==1,c=typeof this.options.cancel=="string"?a(g.target).parents().add(g.target).filter(this.options.cancel).length:false;if(!e||c||!this._mouseCapture(g))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){l.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(g)&&this._mouseDelayMet(g)){this._mouseStarted=
this._mouseStart(g)!==false;if(!this._mouseStarted){g.preventDefault();return true}}this._mouseMoveDelegate=function(b){return l._mouseMove(b)};this._mouseUpDelegate=function(b){return l._mouseUp(b)};a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);g.preventDefault();return g.originalEvent.mouseHandled=true}},_mouseMove:function(g){if(a.browser.msie&&!(document.documentMode>=9)&&!g.button)return this._mouseUp(g);if(this._mouseStarted){this._mouseDrag(g);
return g.preventDefault()}if(this._mouseDistanceMet(g)&&this._mouseDelayMet(g))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,g)!==false)?this._mouseDrag(g):this._mouseUp(g);return!this._mouseStarted},_mouseUp:function(g){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;g.target==this._mouseDownEvent.target&&a.data(g.target,this.widgetName+".preventClickEvent",
true);this._mouseStop(g)}return false},_mouseDistanceMet:function(g){return Math.max(Math.abs(this._mouseDownEvent.pageX-g.pageX),Math.abs(this._mouseDownEvent.pageY-g.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
(function(a){a.ui=a.ui||{};var g=/left|center|right/,l=/top|center|bottom/,e=a.fn.position,c=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return e.apply(this,arguments);b=a.extend({},b);var d=a(b.of),f=d[0],j=(b.collision||"flip").split(" "),h=b.offset?b.offset.split(" "):[0,0],i,m,n;if(f.nodeType===9){i=d.width();m=d.height();n={top:0,left:0}}else if(f.setTimeout){i=d.width();m=d.height();n={top:d.scrollTop(),left:d.scrollLeft()}}else if(f.preventDefault){b.at="left top";i=m=0;n={top:b.of.pageY,
left:b.of.pageX}}else{i=d.outerWidth();m=d.outerHeight();n=d.offset()}a.each(["my","at"],function(){var k=(b[this]||"").split(" ");if(k.length===1)k=g.test(k[0])?k.concat(["center"]):l.test(k[0])?["center"].concat(k):["center","center"];k[0]=g.test(k[0])?k[0]:"center";k[1]=l.test(k[1])?k[1]:"center";b[this]=k});if(j.length===1)j[1]=j[0];h[0]=parseInt(h[0],10)||0;if(h.length===1)h[1]=h[0];h[1]=parseInt(h[1],10)||0;if(b.at[0]==="right")n.left+=i;else if(b.at[0]==="center")n.left+=i/2;if(b.at[1]==="bottom")n.top+=
m;else if(b.at[1]==="center")n.top+=m/2;n.left+=h[0];n.top+=h[1];return this.each(function(){var k=a(this),p=k.outerWidth(),q=k.outerHeight(),r=parseInt(a.curCSS(this,"marginLeft",true))||0,s=parseInt(a.curCSS(this,"marginTop",true))||0,v=p+r+(parseInt(a.curCSS(this,"marginRight",true))||0),w=q+s+(parseInt(a.curCSS(this,"marginBottom",true))||0),o=a.extend({},n),t;if(b.my[0]==="right")o.left-=p;else if(b.my[0]==="center")o.left-=p/2;if(b.my[1]==="bottom")o.top-=q;else if(b.my[1]==="center")o.top-=
q/2;o.left=Math.round(o.left);o.top=Math.round(o.top);t={left:o.left-r,top:o.top-s};a.each(["left","top"],function(u,x){a.ui.position[j[u]]&&a.ui.position[j[u]][x](o,{targetWidth:i,targetHeight:m,elemWidth:p,elemHeight:q,collisionPosition:t,collisionWidth:v,collisionHeight:w,offset:h,my:b.my,at:b.at})});a.fn.bgiframe&&k.bgiframe();k.offset(a.extend(o,{using:b.using}))})};a.ui.position={fit:{left:function(b,d){var f=a(window);f=d.collisionPosition.left+d.collisionWidth-f.width()-f.scrollLeft();b.left=
f>0?b.left-f:Math.max(b.left-d.collisionPosition.left,b.left)},top:function(b,d){var f=a(window);f=d.collisionPosition.top+d.collisionHeight-f.height()-f.scrollTop();b.top=f>0?b.top-f:Math.max(b.top-d.collisionPosition.top,b.top)}},flip:{left:function(b,d){if(d.at[0]!=="center"){var f=a(window);f=d.collisionPosition.left+d.collisionWidth-f.width()-f.scrollLeft();var j=d.my[0]==="left"?-d.elemWidth:d.my[0]==="right"?d.elemWidth:0,h=d.at[0]==="left"?d.targetWidth:-d.targetWidth,i=-2*d.offset[0];b.left+=
d.collisionPosition.left<0?j+h+i:f>0?j+h+i:0}},top:function(b,d){if(d.at[1]!=="center"){var f=a(window);f=d.collisionPosition.top+d.collisionHeight-f.height()-f.scrollTop();var j=d.my[1]==="top"?-d.elemHeight:d.my[1]==="bottom"?d.elemHeight:0,h=d.at[1]==="top"?d.targetHeight:-d.targetHeight,i=-2*d.offset[1];b.top+=d.collisionPosition.top<0?j+h+i:f>0?j+h+i:0}}}};if(!a.offset.setOffset){a.offset.setOffset=function(b,d){if(/static/.test(a.curCSS(b,"position")))b.style.position="relative";var f=a(b),
j=f.offset(),h=parseInt(a.curCSS(b,"top",true),10)||0,i=parseInt(a.curCSS(b,"left",true),10)||0;j={top:d.top-j.top+h,left:d.left-j.left+i};"using"in d?d.using.call(b,j):f.css(j)};a.fn.offset=function(b){var d=this[0];if(!d||!d.ownerDocument)return null;if(b)return this.each(function(){a.offset.setOffset(this,b)});return c.call(this)}}})(jQuery);