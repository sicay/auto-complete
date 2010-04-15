/*!
 * Auto Complete [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */ 
(function(j,S,i){function L(f,q){if(L.flag!==g){L.flag=g;M.bind("click.autoComplete",function(w){h.getFocus(g).trigger("autoComplete.document-click",[w])})}f=f.closest("form");var l=f.data("ac-inputs")||{},y;l[q]=g;f.data("ac-inputs",l);f.data("autoComplete")!==g&&f.data("autoComplete",g).bind("submit.autoComplete",function(w){return(y=h.getFocus(g)).length?y.triggerHandler("autoComplete.form-submit",[w,this]):g})}function da(f,q){h.remove(q);if(L.flag===g&&h.length===0){L.flag=n;M.unbind("click.autoComplete")}f=
f.closest("form");var l=f.data("ac-inputs")||{},y;l[q]=n;for(y in l)if(l.hasOwnProperty(y)&&l[y]===g)return;f.unbind("submit.autoComplete")}function Z(f,q){if(!j.isArray(q.supply))return[];f=-1;for(var l=q.supply.length,y=[],w;++f<l;){w=(w=q.supply[f])&&w.value?w:{value:w};y.push(w)}return y}j.fn.autoComplete=function(){var f=$.call(arguments),q=this,l=f.shift(),y=typeof l==="string",w,N;if(y)l=l.replace(ea,"-");f=h.arrayMethods[l]===g&&j.isArray(f[0])&&j.isArray(f[0][0])||f.length===1&&j.isArray(f[0])?
f[0]:f;w=y&&(h.handlerMethods[l]===-1||f.length<(h.handlerMethods[l]||0))?"triggerHandler":"trigger";return y?q[w]("autoComplete."+l,f):l&&l.preventDefault!==i?q.trigger(l,f):q.each(function(){if(j(N=this).data("autoComplete")!==g)fa(N,l)})};j.fn.bgiframe=j.fn.bgiframe?j.fn.bgiframe:j.fn.bgIframe?j.fn.bgIframe:function(){return this};var g=true,n=false,$=Array.prototype.slice,M=j(S.document),aa=j(),ea=/\./,ga=S.opera||/macintosh/i.test(S.navigator.userAgent)&&j.browser.mozilla,z="autoComplete_"+j.expando,
A={backspace:8,tab:9,enter:13,shift:16,space:32,pageup:33,pagedown:34,left:37,up:38,right:39,down:40},h=j.autoComplete={version:"[VERSION]",counter:0,length:0,stack:{},jqStack:{},order:[],hasFocus:n,keys:A,arrayMethods:{"button-supply":g,"direct-supply":g},handlerMethods:{option:2},focus:i,blur:i,getFocus:function(f){return!h.order[0]?f?aa:i:f?h.jqStack[h.order[0]]:h.stack[h.order[0]]},getPrevious:function(f){for(var q=0,l=h.order.length;++q<l;)if(h.order[q])return f?h.jqStack[h.order[q]]:h.stack[h.order[q]];
return f?aa:i},remove:function(f){for(var q=-1,l=h.order.length;++q<l;)if(h.order[q]===f)h.order[q]=i;h.length--;delete h.stack[f]},getAll:function(){for(var f=-1,q=h.counter,l=[];++f<q;)h.stack[f]&&l.push(h.stack[f]);return j(l)},defaults:{backwardsCompatible:n,ajax:"ajax.php",ajaxCache:j.ajaxSettings.cache,dataSupply:[],dataFn:i,formatSupply:i,list:"auto-complete-list",rollover:"auto-complete-list-rollover",width:i,striped:i,maxHeight:i,bgiframe:i,newList:n,postVar:"value",postData:{},postFormat:i,
minChars:1,maxItems:-1,maxRequests:0,maxRequestsDeep:n,requestType:"POST",inputControl:i,autoFill:n,nonInput:[A.shift,A.left,A.right],multiple:n,multipleSeparator:" ",onBlur:i,onFocus:i,onHide:i,onLoad:i,onMaxRequest:i,onRollover:i,onSelect:i,onShow:i,onListFormat:i,onSubmit:i,spinner:i,preventEnterSubmit:g,delay:0,useCache:g,cacheLimit:50}},fa=function(f,q){function l(b,a,d,m,C){if(a.maxRequestsDeep===g&&T>=a.maxRequests)return n;a.spinner&&a.spinner.call(f,b,{active:g,settings:a,cache:d,ul:e});
if(U)U=clearTimeout(U);if(a.delay>0&&C===i)return U=S.setTimeout(function(){l(b,a,d,m,g)},a.delay);V&&V.abort();if(a.useCache&&j.isArray(d.list[d.val]))return W(b,d.list[d.val],a,d,m);if(a.dataSupply.length)return y(b,a,d,m);if(a.maxRequests&&++T>=a.maxRequests){e.html("").hide(b);a.spinner&&a.spinner.call(f,b,{active:n,settings:a,cache:d,ul:e});if(a.onMaxRequest&&T===a.maxRequests)return a.onMaxRequest.apply(f,a.backwardsCompatible?[d.val,e,b,v,a,d]:[b,{search:d.val,val:v,settings:a,cache:d,ul:e}]);
return n}a.postData[a.postVar]=d.val;return V=j.ajax({type:a.requestType,url:a.ajax,cache:a.ajaxCache,dataType:"json",data:a.postFormat?a.postFormat.call(f,b,{data:a.postData,search:d.val,val:v,settings:a,cache:d,ul:e}):a.postData,success:function(E){W(b,E,a,d,m)},error:function(){e.html("").hide(b);a.spinner&&a.spinner.call(f,b,{active:n,settings:a,cache:d,ul:e})}})}function y(b,a,d,m){var C=[],E=[],O=j.isFunction(a.dataFn),J=O?i:new RegExp("^"+d.val,"i"),P=0,F,X=-1,ha=a.dataSupply.length;if(a.formatSupply)C=
a.formatSupply.call(f,b,{search:d.val,supply:a.dataSupply,settings:a,cache:d,ul:e});else for(;++X<ha;){F=(F=a.dataSupply[X])&&typeof F.value==="string"?F:{value:F};E=a.backwardsCompatible?[d.val,F.value,C,X,a.dataSupply,e,b,a,d]:[b,{search:d.val,entry:F.value,list:C,i:X,supply:a.dataSupply,settings:a,cache:d,ul:e}];if(O&&a.dataFn.apply(f,E)||!O&&F.value.match(J)){if(a.maxItems>-1&&++P>a.maxItems)break;C.push(F)}}return W(b,C,a,d,m)}function w(b){if(x){if(c.onSelect)c.onSelect.apply(f,c.backwardsCompatible?
[t,p,e,b,c,k]:[b,{data:t,li:p,settings:c,cache:k,ul:e}]);Q();v=s.val();if(o.type==="keydown")o["enter_"+z]=g;e.hide(b)}p=i}function N(b){p&&p.removeClass(c.rollover);e.show(b);p=G.eq(r).addClass(c.rollover);t=D[r];if(!p.length||!t)return n;Q(t.value);if(c.onRollover)c.onRollover.apply(f,c.backwardsCompatible?[t,p,e,b,c,k]:[b,{data:t,li:p,settings:c,cache:k,ul:e}]);b=r*K;if(b<I-R){I=b+R;e.scrollTop(b)}}function ba(b){p&&p.removeClass(c.rollover);e.show(b);p=G.eq(r).addClass(c.rollover);t=D[r];if(!p.length||
!t)return n;Q(t.value);var a=(r+1)*K;if(a>I)e.scrollTop((I=a)-R);if(c.onRollover)c.onRollover.apply(f,c.backwardsCompatible?[t,p,e,b,c,k]:[b,{data:t,li:p,settings:c,cache:k,ul:e}])}function ca(){var b=e.hide,a=e.show,d=e.data("ac-inputs")||{};if(!e[z]){e.hide=function(m,C,E){c.onHide&&x&&c.onHide.call(f,m,{ul:e,settings:c,cache:k});x=n;return b.call(e,C,E)};e.show=function(m,C,E){c.onShow&&!x&&c.onShow.call(f,m,{ul:e,settings:c,cache:k});x=g;return a.call(e,C,E)};e[z]=g}e.data("autoComplete")!==g&&
e.data("autoComplete",g).delegate("li","mouseenter.autoComplete",function(m){h.getFocus(g).trigger("autoComplete.ul-mouseenter",[m,this])}).bind("click.autoComplete",function(m){h.getFocus(g).trigger("autoComplete.ul-click",[m]);return n});d[B]=g;e.data("ac-inputs",d)}function Q(b){var a,d,m;if(b===i||b==="")a=d=s.val().length;else{if(H)b=v.substr(0,v.length-v.split(H).pop().length)+b+H;a=v.length;d=b.length;s.val(b)}if(!c.autoFill||a>d)return n;else if(f.createTextRange){m=f.createTextRange();if(b===
i)m.move("character",a);else{m.collapse(g);m.moveStart("character",a);m.moveEnd("character",d)}m.select()}else if(f.setSelectionRange)f.setSelectionRange(a,d);else if(f.selectionStart){f.selectionStart=a;f.selectionEnd=d}}function W(b,a,d,m,C){D=d.onLoad?d.onLoad.call(f,b,{list:a,settings:d,cache:m,ul:e}):a;d.spinner&&d.spinner.call(f,b,{active:n,settings:d,cache:m,ul:e});if(d.useCache&&!j.isArray(m.list[m.val])){m.length++;m.list[m.val]=a;if(d.cacheLimit!==-1&&m.length>d.cacheLimit){m.list={};m.length=
0}}if(!D||D.length<1)return e.html("").hide(b);r=-1;a=s.offset();var E=[],O=0,J=-1,P=n,F=D.length;if(d.onListFormat)d.onListFormat.call(f,b,{list:D,settings:d,cache:m,ul:e});else{for(;++J<F;)if(D[J].value){if(d.maxItems>-1&&++O>d.maxItems)break;E.push(d.striped&&P?'<li class="'+d.striped+'">':"<li>",D[J].display||D[J].value,"</li>");P=!P}e.html(E.join(""))}G=e.children("li");if(d.autoFill&&!C){r=0;t=D[0];Q(t.value);p=G.eq(0).addClass(d.rollover)}e.data("ac-input-index",B).scrollTop(0).css({top:a.top+
s.outerHeight(),left:a.left,width:d.width}).show(b);K=G.eq(0).outerHeight();if(d.maxHeight)e.css({height:K*G.length>d.maxHeight?d.maxHeight:"auto",overflow:"auto"});I=R=e.outerHeight();Y=K===0?0:Math.floor(I/K);o.timeStamp=(new Date).getTime()}h.length++;h.counter++;var s=j(f).attr("autocomplete","off"),u={},o={},v="",D=[],G={length:0},p,I,R,K,Y,x=n,U,V,r=-1,t,H,B=h.counter,T=0,k={length:0,val:i,list:{}},c=j.extend({width:s.outerWidth()},h.defaults,q||{},j.metadata?s.metadata():{}),e=!c.newList&&
M.find("ul."+c.list)[0]?M.find("ul."+c.list).eq(0).bgiframe(c.bgiframe):j("<ul/>").appendTo("body").addClass(c.list).bgiframe(c.bgiframe).hide().data("ac-selfmade",g);s.data("autoComplete",u={index:B,hasFocus:n,active:g,settings:c,initialSettings:j.extend(g,{},c)});j.browser.msie&&s.bind("keypress.autoComplete",function(b){if(!u.active)return g;if(b.keyCode===A.enter){var a=g;if(p&&p.hasClass(c.rollover)){a=c.preventEnterSubmit&&x?n:g;w(b)}else x&&e.hide(b);return a}});s.bind(ga?"keypress.autoComplete":
"keydown.autoComplete",function(b){if(!u.active)return g;var a=(o=b).keyCode,d=n;if(a===A.tab&&x)w(b);else if(a===A.enter){d=g;if(p&&p.hasClass(c.rollover)){d=c.preventEnterSubmit&&x?n:g;w(b)}else x&&e.hide(b)}else if(a===A.up&&x)if(r>0){r--;N(b)}else{r=-1;s.val(v);e.hide(b)}else if(a===A.down&&x){if(r<G.length-1){r++;ba(b)}}else if(a===A.pageup&&x){if(r>0){r-=Y;if(r<0)r=0;N(b)}}else if(a===A.pagedown&&x){if(r<G.length-1){r+=Y;if(r>G.length-1)r=G.length-1;ba(b)}}else if(c.nonInput&&j.inArray(a,c.nonInput)>
-1){e.html("").hide(b);d=g}else return g;o["keydown_"+z]=g;return d}).bind({"keyup.autoComplete":function(b){if(!u.active||o["keydown_"+z])return g;v=s.val();var a=(o=b).keyCode,d=H?v.split(H).pop():v;if(a!=A.enter){k.val=c.inputControl===i?d:c.inputControl.apply(f,c.backwardsCompatible?[d,a,e,b,c,k]:[b,{val:d,key:a,settings:c,cache:k,ul:e}]);if(k.val.length>=c.minChars)l(b,c,k,a===A.backspace||a===A.space);else a==A.backspace&&e.html("").hide(b)}},"blur.autoComplete":function(b){if(!u.active||x)return g;
h.order[0]!==i&&h.order.unshift(i);h.hasFocus=n;u.hasFocus=n;r=-1;e.hide(o=b);h.blur&&h.blur.call(f,b,{settings:c,cache:k,ul:e});if(c.onBlur)c.onBlur.apply(f,c.backwardsCompatible?[v,e,b,c,k]:[b,{val:v,settings:c,cache:k,ul:e}])},"focus.autoComplete":function(b,a){if(!u.active||u.hasFocus&&a===z||o["enter_"+z])return g;B!==e.data("ac-input-index")&&e.html("").hide(b);if(h.order[0]===i)if(h.order[1]===B)h.order.shift();else h.order[0]=B;else h.order[0]!=B&&h.order[1]!=B&&h.order.unshift(B);h.defaults.cacheLimit!==
-1&&h.order.length>h.defaults.cacheLimit&&h.order.pop();h.hasFocus=g;u.hasFocus=g;o=b;h.focus&&h.focus.call(f,b,{settings:c,cache:k,ul:e});if(c.onFocus)c.onFocus.apply(f,c.backwardsCompatible?[e,b,c,k]:[b,{settings:c,cache:k,ul:e}])},"autoComplete.document-click":function(b,a){if(u.active&&x&&(!o||a.timeStamp-o.timeStamp>200)&&j(a.target).closest("ul").data("ac-input-index")!==B){e.hide(o=a);s.blur()}},"autoComplete.form-submit":function(b,a,d){if(!u.active)return g;o=a;return c.preventEnterSubmit&&
(x||o["enter_"+z])?n:c.onSubmit===i?g:c.onSubmit.call(f,a,{form:d,settings:c,cache:k,ul:e})},"autoComplete.ul-mouseenter":function(b,a,d){p&&p.removeClass(c.rollover);p=j(d).addClass(c.rollover);r=G.index(d);t=D[r];I=e.scrollTop()+R;o=a;if(c.onRollover)c.onRollover.apply(f,c.backwardsCompatible?[t,p,e,a,c,k]:[a,{data:t,li:p,settings:c,cache:k,ul:e}])},"autoComplete.ul-click":function(b,a){s.trigger("focus",[z]);s.val(v===H?v.substr(0,v.length-v.split(H).pop().length)+t.value+H:t.value);e.hide(o=a);
Q();if(c.onSelect)c.onSelect.apply(f,c.backwardsCompatible?[t,p,e,a,c,k]:[a,{data:t,li:p,settings:c,cache:k,ul:e}])},"autoComplete.settings":function(b,a){if(!u.active)return g;var d;o=b;if(j.isFunction(a)){b=a.apply(f,c.backwardsCompatible?[c,k,e,b]:[b,{settings:c,cache:k,ul:e}]);if(j.isArray(b)&&b[0]!==i){j.extend(g,c,b[0]||c);j.extend(g,k,b[1]||k)}}else j.extend(g,c,a||{});e=!c.newList&&e.hasClass(c.list)?e:!c.newList&&(d=M.find("ul."+c.list).eq(0)).length?d.bgiframe(c.bgiframe):j("<ul/>").appendTo("body").addClass(c.list).bgiframe(c.bgiframe).hide().data("ac-selfmade",
g);ca();c.requestType=c.requestType.toUpperCase();H=c.multiple?c.multipleSeparator:i;u.settings=c},"autoComplete.flush":function(b,a){if(!u.active)return g;a||(T=0);k={length:0,val:i,list:{}};o=b},"autoComplete.button-ajax":function(b,a,d){if(!u.active)return g;if(typeof a==="string"){d=a;a={}}o=b;s.trigger("focus",[z]);k.val=d||"button-ajax_"+z;return l(b,j.extend(g,{},c,{maxItems:-1,postData:a||{}}),k)},"autoComplete.button-supply":function(b,a,d){if(!u.active)return g;if(typeof a==="string"){d=
a;a=i}o=b;s.trigger("focus",[z]);k.val=d||"button-supply_"+z;a=j.isArray(a)?a:c.dataSupply;return l(b,j.extend(g,{},c,{maxItems:-1,dataSupply:a,formatSupply:Z}),k)},"autoComplete.direct-supply":function(b,a,d){if(!u.active)return g;if(typeof a==="string"){d=a;a=i}o=b;s.trigger("focus",[z]);k.val=d||"direct-supply_"+z;a=j.isArray(a)&&a.length?a:c.dataSupply;return W(b,a,j.extend(g,{},c,{maxItems:-1,dataSupply:a,formatSupply:Z}),k)},"autoComplete.search":function(b,a){if(!u.active)return g;k.val=a||
"";return l(o=b,c,k)},"autoComplete.option":function(b,a,d){if(!u.active)return g;o=b;switch($.call(arguments).length){case 3:return c[a]=d;case 2:return a==="ul"?e:a==="cache"?k:a==="xhr"?V:a==="input"?s:c[a]||i;default:return c}},"autoComplete.enable":function(b){u.active=g;o=b},"autoComplete.disable":function(b){u.active=n;e.html("").hide(o=b)},"autoComplete.destroy":function(b){b=e.html("").hide(o=b).data("ac-inputs")||{};var a;s.removeData("autoComplete").unbind(".autoComplete autoComplete");
da(s,B);b[B]=i;for(a in b)if(b.hasOwnProperty(a)&&b[a]===g)return o;e.data("ac-selfmade")===g?e.remove():e.removeData("autoComplete").removeData("ac-input-index").removeData("ac-inputs")}});ca();c.requestType=c.requestType.toUpperCase();H=c.multiple?c.multipleSeparator:i;h.stack[B]=f;h.jqStack[B]=s;L(s,B)}})(jQuery,window||this);
