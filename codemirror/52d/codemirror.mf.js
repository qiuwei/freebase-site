
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
var CodeMirrorConfig=window.CodeMirrorConfig||{},CodeMirror=function(){function C(a,b){for(var c in b)a.hasOwnProperty(c)||(a[c]=b[c])}function D(a,b){for(var c=0;c<a.length;c++)b(a[c])}function E(a,b){var c=document.createElement("DIV"),e=document.createElement("DIV");c.style.position="absolute";c.style.height="100%";if(c.style.setExpression)try{c.style.setExpression("height","this.previousSibling.offsetHeight + 'px'")}catch(g){}c.style.top="0px";c.style.left="0px";c.style.overflow="hidden";a.appendChild(c);
e.className="CodeMirror-line-numbers";c.appendChild(e);e.innerHTML="<div>"+b+"</div>";return c}function F(a){if(typeof a.parserfile=="string")a.parserfile=[a.parserfile];if(typeof a.basefiles=="string")a.basefiles=[a.basefiles];if(typeof a.stylesheet=="string")a.stylesheet=[a.stylesheet];var b=['<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head>'];b.push('<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7"/>');D(a.stylesheet,function(c){b.push('<link rel="stylesheet" type="text/css" href="'+
c+'"/>')});D(a.basefiles.concat(a.parserfile),function(c){/^https?:/.test(c)||(c=a.path+c);b.push('<script type="text/javascript" src="'+c+'"><\/script>')});b.push('</head><body style="border-width: 0;" class="editbox" spellcheck="'+(a.disableSpellcheck?"false":"true")+'"></body></html>');return b.join("")}function s(a,b){this.options=b=b||{};C(b,CodeMirrorConfig);if(b.dumbTabs)b.tabMode="spaces";else if(b.normalTab)b.tabMode="default";var c=this.frame=document.createElement("IFRAME");if(b.iframeClass)c.className=
b.iframeClass;c.frameBorder=0;c.style.border="0";c.style.width="100%";c.style.height="100%";c.style.display="block";var e=this.wrapping=document.createElement("DIV");e.style.position="relative";e.className="CodeMirror-wrapping";e.style.width=b.width;e.style.height=b.height=="dynamic"?b.minHeight+"px":b.height;var g=this.textareaHack=document.createElement("TEXTAREA");e.appendChild(g);g.style.position="absolute";g.style.left="-10000px";g.style.width="10px";c.CodeMirror=this;if(b.domain&&G){this.html=
F(b);c.src="javascript:(function(){document.open();"+(b.domain?'document.domain="'+b.domain+'";':"")+"document.write(window.frameElement.CodeMirror.html);document.close();})()"}else c.src="javascript:;";a.appendChild?a.appendChild(e):a(e);e.appendChild(c);if(b.lineNumbers)this.lineNumbers=E(e,b.firstLineNumber);this.win=c.contentWindow;if(!b.domain||!G){this.win.document.open();this.win.document.write(F(b));this.win.document.close()}}C(CodeMirrorConfig,{stylesheet:[],path:"",parserfile:[],basefiles:["util.js",
"stringstream.js","select.js","undo.js","editor.js","tokenize.js"],iframeClass:null,passDelay:200,passTime:50,lineNumberDelay:200,lineNumberTime:50,continuousScanning:false,saveFunction:null,onChange:null,undoDepth:50,undoDelay:800,disableSpellcheck:true,textWrapping:true,readOnly:false,width:"",height:"300px",minHeight:100,autoMatchParens:false,parserConfig:null,tabMode:"indent",enterMode:"indent",electricChars:true,reindentOnLoad:false,activeTokens:null,cursorActivity:null,lineNumbers:false,firstLineNumber:1,
indentUnit:2,domain:null});var G=document.selection&&window.ActiveXObject&&/MSIE/.test(navigator.userAgent);s.prototype={init:function(){this.options.initCallback&&this.options.initCallback(this);this.options.lineNumbers&&this.activateLineNumbers();this.options.reindentOnLoad&&this.reindent();this.options.height=="dynamic"&&this.setDynamicHeight()},getCode:function(){return this.editor.getCode()},setCode:function(a){this.editor.importCode(a)},selection:function(){this.focusIfIE();return this.editor.selectedText()},
reindent:function(){this.editor.reindent()},reindentSelection:function(){this.focusIfIE();this.editor.reindentSelection(null)},focusIfIE:function(){this.win.select.ie_selection&&this.focus()},focus:function(){this.win.focus();this.editor.selectionSnapshot&&this.win.select.setBookmark(this.win.document.body,this.editor.selectionSnapshot)},replaceSelection:function(a){this.focus();this.editor.replaceSelection(a);return true},replaceChars:function(a,b,c){this.editor.replaceChars(a,b,c)},getSearchCursor:function(a,
b,c){return this.editor.getSearchCursor(a,b,c)},undo:function(){this.editor.history.undo()},redo:function(){this.editor.history.redo()},historySize:function(){return this.editor.history.historySize()},clearHistory:function(){this.editor.history.clear()},grabKeys:function(a,b){this.editor.grabKeys(a,b)},ungrabKeys:function(){this.editor.ungrabKeys()},setParser:function(a,b){this.editor.setParser(a,b)},setSpellcheck:function(a){this.win.document.body.spellcheck=a},setStylesheet:function(a){if(typeof a===
"string")a=[a];for(var b={},c={},e=this.win.document.getElementsByTagName("link"),g=0,d;d=e[g];g++)if(d.rel.indexOf("stylesheet")!==-1)for(var f=0;f<a.length;f++){var m=a[f];if(d.href.substring(d.href.length-m.length)===m){b[d.href]=true;c[m]=true}}for(g=0;d=e[g];g++)if(d.rel.indexOf("stylesheet")!==-1)d.disabled=!(d.href in b);for(f=0;f<a.length;f++){m=a[f];if(!(m in c)){d=this.win.document.createElement("link");d.rel="stylesheet";d.type="text/css";d.href=m;this.win.document.getElementsByTagName("head")[0].appendChild(d)}}},
setTextWrapping:function(a){if(a!=this.options.textWrapping){this.win.document.body.style.whiteSpace=a?"":"nowrap";this.options.textWrapping=a;if(this.lineNumbers){this.setLineNumbers(false);this.setLineNumbers(true)}}},setIndentUnit:function(a){this.win.indentUnit=a},setUndoDepth:function(a){this.editor.history.maxDepth=a},setTabMode:function(a){this.options.tabMode=a},setEnterMode:function(a){this.options.enterMode=a},setLineNumbers:function(a){if(a&&!this.lineNumbers){this.lineNumbers=E(this.wrapping,
this.options.firstLineNumber);this.activateLineNumbers()}else if(!a&&this.lineNumbers){this.wrapping.removeChild(this.lineNumbers);this.wrapping.style.paddingLeft="";this.lineNumbers=null}},cursorPosition:function(a){this.focusIfIE();return this.editor.cursorPosition(a)},firstLine:function(){return this.editor.firstLine()},lastLine:function(){return this.editor.lastLine()},nextLine:function(a){return this.editor.nextLine(a)},prevLine:function(a){return this.editor.prevLine(a)},lineContent:function(a){return this.editor.lineContent(a)},
setLineContent:function(a,b){this.editor.setLineContent(a,b)},removeLine:function(a){this.editor.removeLine(a)},insertIntoLine:function(a,b,c){this.editor.insertIntoLine(a,b,c)},selectLines:function(a,b,c,e){this.win.focus();this.editor.selectLines(a,b,c,e)},nthLine:function(a){for(var b=this.firstLine();a>1&&b!==false;a--)b=this.nextLine(b);return b},lineNumber:function(a){for(var b=0;a!==false;){b++;a=this.prevLine(a)}return b},jumpToLine:function(a){if(typeof a=="number")a=this.nthLine(a);this.selectLines(a,
0);this.win.focus()},currentLine:function(){return this.lineNumber(this.cursorLine())},cursorLine:function(){return this.cursorPosition().line},cursorCoords:function(a){return this.editor.cursorCoords(a)},activateLineNumbers:function(){function a(){if(d.offsetWidth!=0){for(var h=d;h.parentNode;h=h.parentNode);if(!i.parentNode||h!=document||!f.Editor){try{x()}catch(o){}clearInterval(I)}else if(i.offsetWidth!=y){y=i.offsetWidth;d.parentNode.style.paddingLeft=y+"px"}}}function b(){i.scrollTop=p.scrollTop||
m.documentElement.scrollTop||0}function c(h){var o=j.firstChild.offsetHeight;if(o!=0){o=Math.ceil((50+Math.max(p.offsetHeight,Math.max(d.offsetHeight,p.scrollHeight||0)))/o);for(var r=j.childNodes.length;r<=o;r++){var v=document.createElement("DIV");v.appendChild(document.createTextNode(h?String(r+k.options.firstLineNumber):"\u00a0"));j.appendChild(v)}}}function e(){function h(){c(true);b()}k.updateNumbers=h;var o=f.addEventHandler(f,"scroll",b,true),r=f.addEventHandler(f,"resize",h,true);x=function(){o();
r();if(k.updateNumbers==h)k.updateNumbers=null};h()}function g(){function h(n,z){q||(q=j.appendChild(document.createElement("DIV")));H&&H(q,z,n);t.push(q);t.push(n);A=q.offsetHeight+q.offsetTop;q=q.nextSibling}function o(){for(var n=0;n<t.length;n+=2)t[n].innerHTML=t[n+1];t=[]}function r(){if(!(!j.parentNode||j.parentNode!=k.lineNumbers)){for(var n=(new Date).getTime()+k.options.lineNumberTime;l;){for(h(B++,l.previousSibling);l&&!f.isBR(l);l=l.nextSibling)for(var z=l.offsetTop+l.offsetHeight;j.offsetHeight&&
z-3>A;)h("&nbsp;");if(l)l=l.nextSibling;if((new Date).getTime()>n){o();u=setTimeout(r,k.options.lineNumberDelay);return}}for(;q;)h(B++);o();b()}}function v(n){b();c(n);l=p.firstChild;q=j.firstChild;A=0;B=k.options.firstLineNumber;r()}function w(){u&&clearTimeout(u);if(k.editor.allClean())v();else u=setTimeout(w,200)}var l,q,B,A,t=[],H=k.options.styleNumbers;v(true);var u=null;k.updateNumbers=w;var J=f.addEventHandler(f,"scroll",b,true),K=f.addEventHandler(f,"resize",w,true);x=function(){u&&clearTimeout(u);
if(k.updateNumbers==w)k.updateNumbers=null;J();K()}}var d=this.frame,f=d.contentWindow,m=f.document,p=m.body,i=this.lineNumbers,j=i.firstChild,k=this,y=null,x=function(){};a();var I=setInterval(a,500);(this.options.textWrapping||this.options.styleNumbers?g:e)()},setDynamicHeight:function(){function a(){for(var p=0,i=g.lastChild,j;i&&e.isBR(i);){i.hackBR||p++;i=i.previousSibling}if(i){d=i.offsetHeight;j=i.offsetTop+(1+p)*d}else if(d)j=p*d;if(j)b.wrapping.style.height=Math.max(m+j,b.options.minHeight)+
"px"}var b=this,c=b.options.cursorActivity,e=b.win,g=e.document.body,d=null,f=null,m=2*b.frame.offsetTop;g.style.overflowY="hidden";e.document.documentElement.style.overflowY="hidden";this.frame.scrolling="no";setTimeout(a,300);b.options.cursorActivity=function(p){c&&c(p);clearTimeout(f);f=setTimeout(a,100)}}};s.InvalidLineHandle={toString:function(){return"CodeMirror.InvalidLineHandle"}};s.replace=function(a){if(typeof a=="string")a=document.getElementById(a);return function(b){a.parentNode.replaceChild(b,
a)}};s.fromTextArea=function(a,b){if(typeof a=="string")a=document.getElementById(a);b=b||{};if(a.style.width&&b.width==null)b.width=a.style.width;if(a.style.height&&b.height==null)b.height=a.style.height;if(b.content==null)b.content=a.value;if(a.form){var c=function(){a.value=d.getCode()};typeof a.form.addEventListener=="function"?a.form.addEventListener("submit",c,false):a.form.attachEvent("onsubmit",c);var e=a.form.submit,g=function(){c();a.form.submit=e;a.form.submit();a.form.submit=g};a.form.submit=
g}a.style.display="none";var d=new s(function(f){a.nextSibling?a.parentNode.insertBefore(f,a.nextSibling):a.parentNode.appendChild(f)},b);d.toTextArea=function(){a.parentNode.removeChild(d.wrapping);a.style.display="";if(a.form){a.form.submit=e;typeof a.form.removeEventListener=="function"?a.form.removeEventListener("submit",c,false):a.form.detachEvent("onsubmit",c)}};return d};s.isProbablySupported=function(){var a;return window.opera?Number(window.opera.version())>=9.52:/Apple Computers, Inc/.test(navigator.vendor)&&
(a=navigator.userAgent.match(/Version\/(\d+(?:\.\d+)?)\./))?Number(a[1])>=3:document.selection&&window.ActiveXObject&&(a=navigator.userAgent.match(/MSIE (\d+(?:\.\d*)?)\b/))?Number(a[1])>=6:(a=navigator.userAgent.match(/gecko\/(\d{8})/i))?Number(a[1])>=20050901:(a=navigator.userAgent.match(/AppleWebKit\/(\d+)/))?Number(a[1])>=525:null};return s}();
