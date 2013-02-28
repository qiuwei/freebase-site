
/*
 * Copyright 2012, Google Inc.
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
/*
 
 jQuery Tools @VERSION Tabs- The basics of UI design.

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/tabs/

 Since: November 2008
 Date: @DATE 
*/
(function(c){function i(e,b,f){var d=this,g=e.add(this),h=e.find(f.tabs),j=b.jquery?b:e.children(b),i;h.length||(h=e.children());j.length||(j=e.parent().find(b));j.length||(j=c(b));c.extend(this,{click:function(b,e){var n=h.eq(b);"string"==typeof b&&b.replace("#","")&&(b=b.replace(/([\"\#\$\%\&\'\(\)\*\+\,\.\/\:\;\<\=\>\?\@\[\\\]\^\`\{\|\}\~])/g,"\\$1"),n=h.filter("[href*="+b.replace("#","")+"]"),b=Math.max(h.index(n),0));if(f.rotate){var t=h.length-1;if(0>b)return d.click(t,e);if(b>t)return d.click(0,
e)}if(!n.length){if(0<=i)return d;b=f.initialIndex;n=h.eq(b)}if(b===i)return d;e=e||c.Event();e.type="onBeforeClick";g.trigger(e,[b]);if(!e.isDefaultPrevented())return a[f.effect].call(d,b,function(){e.type="onClick";g.trigger(e,[b])}),i=b,h.removeClass(f.current),n.addClass(f.current),d},getConf:function(){return f},getTabs:function(){return h},getPanes:function(){return j},getCurrentPane:function(){return j.eq(i)},getCurrentTab:function(){return h.eq(i)},getIndex:function(){return i},next:function(){return d.click(i+
1)},prev:function(){return d.click(i-1)},destroy:function(){h.unbind(f.event).removeClass(f.current);j.find("a[href^=#]").unbind("click.T");return d}});c.each(["onBeforeClick","onClick"],function(a,b){c.isFunction(f[b])&&c(d).bind(b,f[b]);d[b]=function(a){c(d).bind(b,a);return d}});f.history&&c.fn.history&&(c.tools.history.init(h),f.event="history");h.each(function(b){c(this).bind(f.event,function(a){d.click(b,a);return a.preventDefault()})});j.find("a[href^=#]").bind("click.T",function(b){d.click(c(this).attr("href"),
b)});location.hash?d.click(location.hash):(0===f.initialIndex||0<f.initialIndex)&&d.click(f.initialIndex)}c.tools=c.tools||{version:"@VERSION"};c.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:!1,history:!1},addEffect:function(c,b){a[c]=b}};var a={"default":function(a,b){this.getPanes().hide().eq(a).show();b.call()},fade:function(a,b){var c=this.getConf(),d=c.fadeOutSpeed,g=this.getPanes();d?g.fadeOut(d):g.hide();g.eq(a).fadeIn(c.fadeInSpeed,
b)},slide:function(a,b){this.getPanes().slideUp(200);this.getPanes().eq(a).slideDown(400,b)},ajax:function(a,b){this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"),b)}},g;c.tools.tabs.addEffect("horizontal",function(a,b){g||(g=this.getPanes().eq(0).width());this.getCurrentPane().animate({width:0},function(){c(this).hide()});this.getPanes().eq(a).animate({width:g},function(){c(this).show();b.call()})});c.fn.tabs=function(a,b){var f=this.data("tabs");f&&(f.destroy(),this.removeData("tabs"));
c.isFunction(b)&&(b={onBeforeClick:b});b=c.extend({},c.tools.tabs.conf,b);this.each(function(){f=new i(c(this),a,b);c(this).data("tabs",f)});return b.api?f:this}})(jQuery);
(function(c){function i(){if(c.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(a):window.opera&&window.opera.postError&&window.opera.postError(a)}}c.fn.ajaxSubmit=function(a){function g(){function b(){var a=h.attr("target"),l=h.attr("action");e.setAttribute("target",g);"POST"!=e.getAttribute("method")&&e.setAttribute("method","POST");e.getAttribute("action")!=d.url&&e.setAttribute("action",d.url);d.skipEncodingOverride||
h.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});d.timeout&&setTimeout(function(){u=!0;f()},d.timeout);var i=[];try{if(d.extraData)for(var k in d.extraData)i.push(c('<input type="hidden" name="'+k+'" value="'+d.extraData[k]+'" />').appendTo(e)[0]);j.appendTo("body");j.data("form-plugin-onload",f);e.submit()}finally{e.setAttribute("action",l),a?e.setAttribute("target",a):h.removeAttr("target"),c(i).remove()}}function f(){if(!v){j.removeData("form-plugin-onload");var a=!0;try{if(u)throw"timeout";
m=o.contentWindow?o.contentWindow.document:o.contentDocument?o.contentDocument:o.document;var b="xml"==d.dataType||m.XMLDocument||c.isXMLDoc(m);i("isXml="+b);if(!b&&(window.opera&&(null==m.body||""==m.body.innerHTML))&&--s){i("requeing onLoad callback, DOM not available");setTimeout(f,250);return}v=!0;k.responseText=m.documentElement?m.documentElement.innerHTML:null;k.responseXML=m.XMLDocument?m.XMLDocument:m;k.getResponseHeader=function(a){return{"content-type":d.dataType}[a]};var e=/(json|script)/.test(d.dataType);
if(e||d.textarea){var g=m.getElementsByTagName("textarea")[0];if(g)k.responseText=g.value;else if(e){var h=m.getElementsByTagName("pre")[0];h&&(k.responseText=h.innerHTML)}}else if("xml"==d.dataType&&!k.responseXML&&null!=k.responseText){var b=k,l=k.responseText,e=void 0;window.ActiveXObject?(e=new ActiveXObject("Microsoft.XMLDOM"),e.async="false",e.loadXML(l)):e=(new DOMParser).parseFromString(l,"text/xml");b.responseXML=e&&e.documentElement&&"parsererror"!=e.documentElement.tagName?e:null}w=c.httpData(k,
d.dataType)}catch(n){i("error caught:",n),a=!1,k.error=n,c.handleError(d,k,"error",n)}a&&(d.success.call(d.context,w,"success",k),p&&c.event.trigger("ajaxSuccess",[k,d]));p&&c.event.trigger("ajaxComplete",[k,d]);p&&!--c.active&&c.event.trigger("ajaxStop");d.complete&&d.complete.call(d.context,k,a?"success":"error");setTimeout(function(){j.removeData("form-plugin-onload");j.remove();k.responseXML=null},100)}}var e=h[0];if(c(":input[name=submit],:input[id=submit]",e).length)alert('Error: Form elements must not have name or id of "submit".');
else{var d=c.extend(!0,{},c.ajaxSettings,a);d.context=d.context||d;var g="jqFormIO"+(new Date).getTime(),l="_"+g;window[l]=function(){var a=j.data("form-plugin-onload");if(a){a();window[l]=void 0;try{delete window[l]}catch(b){}}};var j=c('<iframe id="'+g+'" name="'+g+'" src="'+d.iframeSrc+'" onload="window[\'_\'+this.id]()" />'),o=j[0];j.css({position:"absolute",top:"-1000px",left:"-1000px"});var k={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},
getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){this.aborted=1;j.attr("src",d.iframeSrc)}},p=d.global;p&&!c.active++&&c.event.trigger("ajaxStart");p&&c.event.trigger("ajaxSend",[k,d]);if(d.beforeSend&&!1===d.beforeSend.call(d.context,k,d))d.global&&c.active--;else if(!k.aborted){var v=!1,u=0,q=e.clk;if(q){var r=q.name;r&&!q.disabled&&(d.extraData=d.extraData||{},d.extraData[r]=q.value,"image"==q.type&&(d.extraData[r+".x"]=e.clk_x,d.extraData[r+".y"]=e.clk_y))}d.forceSync?
b():setTimeout(b,10);var w,m,s=50}}}if(!this.length)return i("ajaxSubmit: skipping submit process - no element selected"),this;"function"==typeof a&&(a={success:a});var e=c.trim(this.attr("action"));e&&(e=(e.match(/^([^#]+)/)||[])[1]);e=e||window.location.href||"";a=c.extend(!0,{url:e,type:this.attr("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a);e={};this.trigger("form-pre-serialize",[this,a,e]);if(e.veto)return i("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),
this;if(a.beforeSerialize&&!1===a.beforeSerialize(this,a))return i("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var b,f,d=this.formToArray(a.semantic);if(a.data)for(b in a.extraData=a.data,a.data)if(a.data[b]instanceof Array)for(var l in a.data[b])d.push({name:b,value:a.data[b][l]});else f=a.data[b],f=c.isFunction(f)?f():f,d.push({name:b,value:f});if(a.beforeSubmit&&!1===a.beforeSubmit(d,this,a))return i("ajaxSubmit: submit aborted via beforeSubmit callback"),this;this.trigger("form-submit-validate",
[d,this,a,e]);if(e.veto)return i("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;b=c.param(d);"GET"==a.type.toUpperCase()?(a.url+=(0<=a.url.indexOf("?")?"&":"?")+b,a.data=null):a.data=b;var h=this,j=[];a.resetForm&&j.push(function(){h.resetForm()});a.clearForm&&j.push(function(){h.clearForm()});if(!a.dataType&&a.target){var s=a.success||function(){};j.push(function(b){var d=a.replaceTarget?"replaceWith":"html";c(a.target)[d](b).each(s,arguments)})}else a.success&&j.push(a.success);
a.success=function(b,d,c){for(var e=a.context||a,f=0,g=j.length;f<g;f++)j[f].apply(e,[b,d,c||h,h])};b=0<c("input:file",this).length;l="multipart/form-data"==h.attr("enctype")||"multipart/form-data"==h.attr("encoding");!1!==a.iframe&&(b||a.iframe||l)?a.closeKeepAlive?c.get(a.closeKeepAlive,g):g():c.ajax(a);this.trigger("form-submit-notify",[this,a]);return this};c.fn.ajaxForm=function(a){if(0===this.length){var g=this.selector,e=this.context;if(!c.isReady&&g)return i("DOM not ready, queuing ajaxForm"),
c(function(){c(g,e).ajaxForm(a)}),this;i("terminating; zero elements found by selector"+(c.isReady?"":" (DOM not ready)"));return this}return this.ajaxFormUnbind().bind("submit.form-plugin",function(b){b.isDefaultPrevented()||(b.preventDefault(),c(this).ajaxSubmit(a))}).bind("click.form-plugin",function(a){var f=a.target,d=c(f);if(!d.is(":submit,input:image")){f=d.closest(":submit");if(0==f.length)return;f=f[0]}var e=this;e.clk=f;"image"==f.type&&(void 0!=a.offsetX?(e.clk_x=a.offsetX,e.clk_y=a.offsetY):
"function"==typeof c.fn.offset?(d=d.offset(),e.clk_x=a.pageX-d.left,e.clk_y=a.pageY-d.top):(e.clk_x=a.pageX-f.offsetLeft,e.clk_y=a.pageY-f.offsetTop));setTimeout(function(){e.clk=e.clk_x=e.clk_y=null},100)})};c.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};c.fn.formToArray=function(a){var g=[];if(0===this.length)return g;var e=this[0],b=a?e.getElementsByTagName("*"):e.elements;if(!b)return g;var f,d,i,h;f=0;for(max=b.length;f<max;f++)if(d=b[f],i=d.name)if(a&&
e.clk&&"image"==d.type)!d.disabled&&e.clk==d&&(g.push({name:i,value:c(d).val()}),g.push({name:i+".x",value:e.clk_x},{name:i+".y",value:e.clk_y}));else if((h=c.fieldValue(d,!0))&&h.constructor==Array){d=0;for(jmax=h.length;d<jmax;d++)g.push({name:i,value:h[d]})}else null!==h&&"undefined"!=typeof h&&g.push({name:i,value:h});if(!a&&e.clk&&(a=c(e.clk),b=a[0],(i=b.name)&&!b.disabled&&"image"==b.type))g.push({name:i,value:a.val()}),g.push({name:i+".x",value:e.clk_x},{name:i+".y",value:e.clk_y});return g};
c.fn.formSerialize=function(a){return c.param(this.formToArray(a))};c.fn.fieldSerialize=function(a){var g=[];this.each(function(){var e=this.name;if(e){var b=c.fieldValue(this,a);if(b&&b.constructor==Array)for(var f=0,d=b.length;f<d;f++)g.push({name:e,value:b[f]});else null!==b&&"undefined"!=typeof b&&g.push({name:this.name,value:b})}});return c.param(g)};c.fn.fieldValue=function(a){for(var g=[],e=0,b=this.length;e<b;e++){var f=c.fieldValue(this[e],a);null===f||("undefined"==typeof f||f.constructor==
Array&&!f.length)||(f.constructor==Array?c.merge(g,f):g.push(f))}return g};c.fieldValue=function(a,g){var e=a.name,b=a.type,f=a.tagName.toLowerCase();void 0===g&&(g=!0);if(g&&(!e||a.disabled||"reset"==b||"button"==b||("checkbox"==b||"radio"==b)&&!a.checked||("submit"==b||"image"==b)&&a.form&&a.form.clk!=a||"select"==f&&-1==a.selectedIndex))return null;if("select"==f){var d=a.selectedIndex;if(0>d)return null;for(var e=[],f=a.options,i=(b="select-one"==b)?d+1:f.length,d=b?d:0;d<i;d++){var h=f[d];if(h.selected){var j=
h.value;j||(j=h.attributes&&h.attributes.value&&!h.attributes.value.specified?h.text:h.value);if(b)return j;e.push(j)}}return e}return c(a).val()};c.fn.clearForm=function(){return this.each(function(){c("input,select,textarea",this).clearFields()})};c.fn.clearFields=c.fn.clearInputs=function(){return this.each(function(){var a=this.type,c=this.tagName.toLowerCase();"text"==a||"password"==a||"textarea"==c?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==c&&(this.selectedIndex=-1)})};
c.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})};c.fn.enable=function(a){void 0===a&&(a=!0);return this.each(function(){this.disabled=!a})};c.fn.selected=function(a){void 0===a&&(a=!0);return this.each(function(){var g=this.type;"checkbox"==g||"radio"==g?this.checked=a:"option"==this.tagName.toLowerCase()&&(g=c(this).parent("select"),a&&(g[0]&&"select-one"==g[0].type)&&g.find("option").selected(!1),
this.selected=a)})}})(jQuery);
(function(c,i){i.register={};i.register.display_form_errors=function(a,g){c.each(g.messages,function(c,b){var f=b.code.match(/^\/api\/status\/error\/invalid\/(.*)(\/.*)?/);f&&(f=f[1],console.log(a,a.find("input")),f=a.find("input[name="+f+"]:first"),console.log(f),f.length&&(f.addClass("error"),f.siblings(".input-help:first").hide(),f=f.siblings(".input-error:first"),f.length&&(f.text(b.message),f.show())))})};i.register.init=function(){c("#register-accordion").tabs("#register-accordion div.pane",{tabs:"h2",
effect:"slide",initialIndex:null});c("form").each(function(a,g){var e=c(g);e.ajaxForm({dataType:"json",success:function(a){c("#registration").html(a.result.html)},error:function(a){a=JSON.parse(a.responseText);i.register.display_form_errors(e,a)}})});c("form input").change(function(){var a=c(this);a.removeClass("error");a.siblings(".input-error:first").hide();a.siblings(".input-help:first").show()})};setTimeout(i.register.init,0)})(jQuery,window.freebase);