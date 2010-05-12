/*
 * Auto Complete [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */ 
(function(h,S,j){function L(f,q){if(L.flag!==g){L.flag=g;T.bind("click.autoComplete",function(w){i.getFocus(g).trigger("autoComplete.document-click",[w])})}f=f.closest("form");var l,y;if(f.length<1)return f;l=h.data(f[0],"ac-inputs")||{};l[q]=g;h.data(f[0],"ac-inputs",l);if(h.data(f[0],"autoComplete")!==g){h.data(f[0],"autoComplete",g);f.bind("submit.autoComplete",function(w){return(y=i.getFocus(g)).length?y.triggerHandler("autoComplete.form-submit",[w,this]):g})}}function ga(f,q){i.remove(q);if(L.flag===
g&&i.length===0){L.flag=n;T.unbind("click.autoComplete")}f=f.closest("form");var l,y;if(!(f.length<1)){l=f.data("ac-inputs")||{};l[q]=n;for(y in l)if(l.hasOwnProperty(y)&&l[y]===g)return;f.unbind("submit.autoComplete")}}function $(f,q){if(!h.isArray(q.supply))return[];f=-1;for(var l=q.supply.length,y=[],w;++f<l;){w=(w=q.supply[f])&&w.value?w:{value:w};y.push(w)}return y}function aa(){return this}h.fn.autoComplete=function(){var f=ba.call(arguments),q=this,l=f.shift(),y=typeof l==="string",w,M;if(y)l=
l.replace(ha,"-");f=i.arrayMethods[l]===g&&h.isArray(f[0])&&h.isArray(f[0][0])||f.length===1&&h.isArray(f[0])?f[0]:f;w=y&&(i.handlerMethods[l]===-1||f.length<(i.handlerMethods[l]||0))?"triggerHandler":"trigger";return y?q[w]("autoComplete."+l,f):l&&l.preventDefault!==j?q.trigger(l,f):h.each(q,function(){if(h.data(M=this,"autoComplete")!==g)h.autoComplete(M,l)})};var g=true,n=false,ba=Array.prototype.slice,T=h(S.document),ca=h(),ha=/\./,ia=S.opera||/macintosh/i.test(S.navigator.userAgent)&&h.browser.mozilla,
z="autoComplete_"+h.expando,A={backspace:8,tab:9,enter:13,shift:16,space:32,pageup:33,pagedown:34,left:37,up:38,right:39,down:40},i={version:"[VERSION]",counter:0,length:0,stack:{},jqStack:{},order:[],hasFocus:n,keys:A,arrayMethods:{"button-supply":g,"direct-supply":g},handlerMethods:{option:2},focus:j,blur:j,getFocus:function(f){return!i.order[0]?f?ca:j:f?i.jqStack[i.order[0]]:i.stack[i.order[0]]},getPrevious:function(f){for(var q=0,l=i.order.length;++q<l;)if(i.order[q])return f?i.jqStack[i.order[q]]:
i.stack[i.order[q]];return f?ca:j},remove:function(f){for(var q=-1,l=i.order.length;++q<l;)if(i.order[q]===f)i.order[q]=j;i.length--;delete i.stack[f]},getAll:function(){for(var f=-1,q=i.counter,l=[];++f<q;)i.stack[f]&&l.push(i.stack[f]);return h(l)},defaults:{backwardsCompatible:n,ajax:"ajax.php",ajaxCache:h.ajaxSettings.cache,dataSupply:[],dataFn:j,formatSupply:j,list:"auto-complete-list",rollover:"auto-complete-list-rollover",width:j,striped:j,maxHeight:j,bgiframe:j,newList:n,postVar:"value",postData:{},
postFormat:j,minChars:1,maxItems:-1,maxRequests:0,maxRequestsDeep:n,requestType:"POST",inputControl:j,autoFill:n,nonInput:[A.shift,A.left,A.right],multiple:n,multipleSeparator:" ",onBlur:j,onFocus:j,onHide:j,onLoad:j,onMaxRequest:j,onRollover:j,onSelect:j,onShow:j,onListFormat:j,onSubmit:j,spinner:j,preventEnterSubmit:g,delay:0,useCache:g,cacheLimit:50}};h.autoComplete=function(f,q){function l(b,a,d,m,C){if(a.maxRequestsDeep===g&&U>=a.maxRequests)return n;a.spinner&&a.spinner.call(f,b,{active:g,settings:a,
cache:d,ul:e});if(V)V=clearTimeout(V);if(a.delay>0&&C===j)return V=S.setTimeout(function(){l(b,a,d,m,g)},a.delay);W&&W.abort();if(a.useCache&&h.isArray(d.list[d.val]))return X(b,d.list[d.val],a,d,m);if(a.dataSupply.length)return y(b,a,d,m);if(a.maxRequests&&++U>=a.maxRequests){e.html("").hide(b);a.spinner&&a.spinner.call(f,b,{active:n,settings:a,cache:d,ul:e});if(a.onMaxRequest&&U===a.maxRequests)return a.onMaxRequest.apply(f,a.backwardsCompatible?[d.val,e,b,v,a,d]:[b,{search:d.val,val:v,settings:a,
cache:d,ul:e}]);return n}a.postData[a.postVar]=d.val;return W=h.ajax({type:a.requestType,url:a.ajax,cache:a.ajaxCache,dataType:"json",data:a.postFormat?a.postFormat.call(f,b,{data:a.postData,search:d.val,val:v,settings:a,cache:d,ul:e}):a.postData,success:function(E){X(b,E,a,d,m)},error:function(){e.html("").hide(b);a.spinner&&a.spinner.call(f,b,{active:n,settings:a,cache:d,ul:e})}})}function y(b,a,d,m){var C=[],E=[],N=h.isFunction(a.dataFn),J=N?j:new RegExp("^"+d.val,"i"),O=0,F,Y=-1,ja=a.dataSupply.length;
if(a.formatSupply)C=a.formatSupply.call(f,b,{search:d.val,supply:a.dataSupply,settings:a,cache:d,ul:e});else for(;++Y<ja;){F=(F=a.dataSupply[Y])&&typeof F.value==="string"?F:{value:F};E=a.backwardsCompatible?[d.val,F.value,C,Y,a.dataSupply,e,b,a,d]:[b,{search:d.val,entry:F.value,list:C,i:Y,supply:a.dataSupply,settings:a,cache:d,ul:e}];if(N&&a.dataFn.apply(f,E)||!N&&F.value.match(J)){if(a.maxItems>-1&&++O>a.maxItems)break;C.push(F)}}return X(b,C,a,d,m)}function w(b){if(x){if(c.onSelect)c.onSelect.apply(f,
c.backwardsCompatible?[t,p,e,b,c,k]:[b,{data:t,li:p,settings:c,cache:k,ul:e}]);P();v=s.val();if(o.type==="keydown")o["enter_"+z]=g;e.hide(b)}p=j}function M(b){p&&p.removeClass(c.rollover);e.show(b);p=G.eq(r).addClass(c.rollover);t=D[r];if(!p.length||!t)return n;P(t.value);if(c.onRollover)c.onRollover.apply(f,c.backwardsCompatible?[t,p,e,b,c,k]:[b,{data:t,li:p,settings:c,cache:k,ul:e}]);b=r*K;if(b<I-Q){I=b+Q;e.scrollTop(b)}}function da(b){p&&p.removeClass(c.rollover);e.show(b);p=G.eq(r).addClass(c.rollover);
t=D[r];if(!p.length||!t)return n;P(t.value);var a=(r+1)*K;if(a>I)e.scrollTop((I=a)-Q);if(c.onRollover)c.onRollover.apply(f,c.backwardsCompatible?[t,p,e,b,c,k]:[b,{data:t,li:p,settings:c,cache:k,ul:e}])}function ea(){var b=e.hide,a=e.show,d=h.data(e[0],"ac-inputs")||{};if(!e[z]){e.hide=function(m,C,E){c.onHide&&x&&c.onHide.call(f,m,{ul:e,settings:c,cache:k});x=n;return b.call(e,C,E)};e.show=function(m,C,E){c.onShow&&!x&&c.onShow.call(f,m,{ul:e,settings:c,cache:k});x=g;return a.call(e,C,E)};e[z]=g}if(h.data(e[0],
"autoComplete")!==g){h.data(e[0],"autoComplete",g);e.delegate("li","mouseenter.autoComplete",function(m){i.getFocus(g).trigger("autoComplete.ul-mouseenter",[m,this])}).bind("click.autoComplete",function(m){i.getFocus(g).trigger("autoComplete.ul-click",[m]);return n})}d[B]=g;h.data(e[0],"ac-inputs",d)}function P(b){var a,d,m;if(b===j||b==="")a=d=s.val().length;else{if(H)b=v.substr(0,v.length-v.split(H).pop().length)+b+H;a=v.length;d=b.length;s.val(b)}if(!c.autoFill||a>d)return n;else if(f.createTextRange){m=
f.createTextRange();if(b===j)m.move("character",a);else{m.collapse(g);m.moveStart("character",a);m.moveEnd("character",d)}m.select()}else if(f.setSelectionRange)f.setSelectionRange(a,d);else if(f.selectionStart){f.selectionStart=a;f.selectionEnd=d}}function X(b,a,d,m,C){D=d.onLoad?d.onLoad.call(f,b,{list:a,settings:d,cache:m,ul:e}):a;d.spinner&&d.spinner.call(f,b,{active:n,settings:d,cache:m,ul:e});if(d.useCache&&!h.isArray(m.list[m.val])){m.length++;m.list[m.val]=a;if(d.cacheLimit!==-1&&m.length>
d.cacheLimit){m.list={};m.length=0}}if(!D||D.length<1)return e.html("").hide(b);r=-1;a=s.offset();var E=[],N=0,J=-1,O=n,F=D.length;if(d.onListFormat)d.onListFormat.call(f,b,{list:D,settings:d,cache:m,ul:e});else{for(;++J<F;)if(D[J].value){if(d.maxItems>-1&&++N>d.maxItems)break;E.push(d.striped&&O?'<li class="'+d.striped+'">':"<li>",D[J].display||D[J].value,"</li>");O=!O}e.html(E.join(""))}G=e.children("li");h.data(e[0],"ac-input-index",B);if(d.autoFill&&!C){r=0;t=D[0];P(t.value);p=G.eq(0).addClass(d.rollover)}e.scrollTop(0).css({top:a.top+
s.outerHeight(),left:a.left,width:d.width}).show(b);K=G.eq(0).outerHeight();if(d.maxHeight)e.css({height:K*G.length>d.maxHeight?d.maxHeight:"auto",overflow:"auto"});I=Q=e.outerHeight();Z=K===0?0:Math.floor(I/K);o.timeStamp=(new Date).getTime()}i.length++;i.counter++;var s=h(f).attr("autocomplete","off"),fa,u={},o={},v="",D=[],G={length:0},p,I,Q,K,Z,x=n,V,W,r=-1,t,H,B=i.counter,U=0,R=h.fn.bgiframe||h.fn.bgIframe||aa,k={length:0,val:j,list:{}},c=h.extend({width:s.outerWidth()},i.defaults,q||{},h.metadata?
s.metadata():{}),e=!c.newList&&(fa=T.find("ul."+c.list).eq(0)).length?R.call(fa,c.bgiframe):R.call(h("<ul/>").appendTo("body").addClass(c.list).hide().data("ac-selfmade",g),c.bgiframe);h.data(f,"autoComplete",u={index:B,hasFocus:n,active:g,settings:c,initialSettings:h.extend(g,{},c)});h.browser.msie&&s.bind("keypress.autoComplete",function(b){if(!u.active)return g;if(b.keyCode===A.enter){var a=g;if(p&&p.hasClass(c.rollover)){a=c.preventEnterSubmit&&x?n:g;w(b)}else x&&e.hide(b);return a}});s.bind(ia?
"keypress.autoComplete":"keydown.autoComplete",function(b){if(!u.active)return g;var a=(o=b).keyCode,d=n;if(a===A.tab&&x)w(b);else if(a===A.enter){d=g;if(p&&p.hasClass(c.rollover)){d=c.preventEnterSubmit&&x?n:g;w(b)}else x&&e.hide(b)}else if(a===A.up&&x)if(r>0){r--;M(b)}else{r=-1;s.val(v);e.hide(b)}else if(a===A.down&&x){if(r<G.length-1){r++;da(b)}}else if(a===A.pageup&&x){if(r>0){r-=Z;if(r<0)r=0;M(b)}}else if(a===A.pagedown&&x){if(r<G.length-1){r+=Z;if(r>G.length-1)r=G.length-1;da(b)}}else if(c.nonInput&&
h.inArray(a,c.nonInput)>-1){e.html("").hide(b);d=g}else return g;o["keydown_"+z]=g;return d}).bind({"keyup.autoComplete":function(b){if(!u.active||o["keydown_"+z])return g;v=s.val();var a=(o=b).keyCode,d=H?v.split(H).pop():v;if(a!=A.enter){k.val=c.inputControl===j?d:c.inputControl.apply(f,c.backwardsCompatible?[d,a,e,b,c,k]:[b,{val:d,key:a,settings:c,cache:k,ul:e}]);if(k.val.length>=c.minChars)l(b,c,k,a===A.backspace||a===A.space);else a==A.backspace&&e.html("").hide(b)}},"blur.autoComplete":function(b){if(!u.active||
x)return g;i.order[0]!==j&&i.order.unshift(j);i.hasFocus=n;u.hasFocus=n;r=-1;e.hide(o=b);i.blur&&i.blur.call(f,b,{settings:c,cache:k,ul:e});if(c.onBlur)c.onBlur.apply(f,c.backwardsCompatible?[v,e,b,c,k]:[b,{val:v,settings:c,cache:k,ul:e}])},"focus.autoComplete":function(b,a){if(!u.active||u.hasFocus&&a===z||o["enter_"+z])return g;B!==h.data(e[0],"ac-input-index")&&e.html("").hide(b);if(i.order[0]===j)if(i.order[1]===B)i.order.shift();else i.order[0]=B;else i.order[0]!=B&&i.order[1]!=B&&i.order.unshift(B);
i.defaults.cacheLimit!==-1&&i.order.length>i.defaults.cacheLimit&&i.order.pop();i.hasFocus=g;u.hasFocus=g;o=b;i.focus&&i.focus.call(f,b,{settings:c,cache:k,ul:e});if(c.onFocus)c.onFocus.apply(f,c.backwardsCompatible?[e,b,c,k]:[b,{settings:c,cache:k,ul:e}])},"autoComplete.document-click":function(b,a){if(u.active&&x&&(!o||a.timeStamp-o.timeStamp>200)&&h.data(h(a.target).closest("ul")[0],"ac-input-index")!==B){e.hide(o=a);s.blur()}},"autoComplete.form-submit":function(b,a,d){if(!u.active)return g;o=
a;return c.preventEnterSubmit&&(x||o["enter_"+z])?n:c.onSubmit===j?g:c.onSubmit.call(f,a,{form:d,settings:c,cache:k,ul:e})},"autoComplete.ul-mouseenter":function(b,a,d){p&&p.removeClass(c.rollover);p=h(d).addClass(c.rollover);r=G.index(d);t=D[r];I=e.scrollTop()+Q;o=a;if(c.onRollover)c.onRollover.apply(f,c.backwardsCompatible?[t,p,e,a,c,k]:[a,{data:t,li:p,settings:c,cache:k,ul:e}])},"autoComplete.ul-click":function(b,a){s.trigger("focus",[z]);s.val(v===H?v.substr(0,v.length-v.split(H).pop().length)+
t.value+H:t.value);e.hide(o=a);P();if(c.onSelect)c.onSelect.apply(f,c.backwardsCompatible?[t,p,e,a,c,k]:[a,{data:t,li:p,settings:c,cache:k,ul:e}])},"autoComplete.settings":function(b,a){if(!u.active)return g;var d;o=b;if(h.isFunction(a)){b=a.apply(f,c.backwardsCompatible?[c,k,e,b]:[b,{settings:c,cache:k,ul:e}]);if(h.isArray(b)&&b[0]!==j){h.extend(g,c,b[0]||c);h.extend(g,k,b[1]||k)}}else h.extend(g,c,a||{});R=h.fn.bgiframe||h.fn.bgIframe||aa;e=!c.newList&&e.hasClass(c.list)?e:!c.newList&&(d=T.find("ul."+
c.list).eq(0)).length?R.call(d,c.bgiframe):R.call(h("<ul/>").appendTo("body").addClass(c.list).hide().data("ac-selfmade",g),c.bgiframe);ea();c.requestType=c.requestType.toUpperCase();H=c.multiple?c.multipleSeparator:j;u.settings=c},"autoComplete.flush":function(b,a){if(!u.active)return g;a||(U=0);k={length:0,val:j,list:{}};o=b},"autoComplete.button-ajax":function(b,a,d){if(!u.active)return g;if(typeof a==="string"){d=a;a={}}o=b;s.trigger("focus",[z]);k.val=d||"button-ajax_"+z;return l(b,h.extend(g,
{},c,{maxItems:-1,postData:a||{}}),k)},"autoComplete.button-supply":function(b,a,d){if(!u.active)return g;if(typeof a==="string"){d=a;a=j}o=b;s.trigger("focus",[z]);k.val=d||"button-supply_"+z;a=h.isArray(a)?a:c.dataSupply;return l(b,h.extend(g,{},c,{maxItems:-1,dataSupply:a,formatSupply:$}),k)},"autoComplete.direct-supply":function(b,a,d){if(!u.active)return g;if(typeof a==="string"){d=a;a=j}o=b;s.trigger("focus",[z]);k.val=d||"direct-supply_"+z;a=h.isArray(a)&&a.length?a:c.dataSupply;return X(b,
a,h.extend(g,{},c,{maxItems:-1,dataSupply:a,formatSupply:$}),k)},"autoComplete.search":function(b,a){if(!u.active)return g;k.val=a||"";return l(o=b,c,k)},"autoComplete.option":function(b,a,d){if(!u.active)return g;o=b;switch(ba.call(arguments).length){case 3:return c[a]=d;case 2:return a==="ul"?e:a==="cache"?k:a==="xhr"?W:a==="input"?s:c[a]||j;default:return c}},"autoComplete.enable":function(b){u.active=g;o=b},"autoComplete.disable":function(b){u.active=n;e.html("").hide(o=b)},"autoComplete.destroy":function(b){b=
h.data(e.html("").hide(o=b)[0],"ac-inputs")||{};var a;s.removeData("autoComplete").unbind(".autoComplete autoComplete");ga(s,B);b[B]=j;for(a in b)if(b.hasOwnProperty(a)&&b[a]===g)return o;h.data(e[0],"ac-selfmade")===g?e.remove():e.removeData("autoComplete").removeData("ac-input-index").removeData("ac-inputs")}});ea();c.requestType=c.requestType.toUpperCase();H=c.multiple?c.multipleSeparator:j;i.stack[B]=f;i.jqStack[B]=s;L(s,B)};i=h.extend(h.autoComplete,i)})(jQuery,window||this);
