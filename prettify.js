var prettyPrintOne,prettyPrint,IN_GLOBAL_SCOPE=!0;window.PR_SHOULD_USE_CONTINUATION=!0,function(){function E(a){function i(a){var c,b=a.charCodeAt(0);return 92!==b?b:(c=a.charAt(1),b=h[c],b?b:c>="0"&&"7">=c?parseInt(a.substring(1),8):"u"===c||"x"===c?parseInt(a.substring(2),16):a.charCodeAt(1))}function j(a){if(32>a)return(16>a?"\\x0":"\\x")+a.toString(16);var b=String.fromCharCode(a);return"\\"===b||"-"===b||"]"===b||"^"===b?"\\"+b:b}function k(a){var f,g,h,k,l,m,n,o,b=a.substring(1,a.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),c=[],d="^"===b[0],e=["["];for(d&&e.push("^"),f=d?1:0,g=b.length;g>f;++f)h=b[f],/\\[bdsw]/i.test(h)?e.push(h):(k=i(h),g>f+2&&"-"===b[f+1]?(l=i(b[f+2]),f+=2):l=k,c.push([k,l]),65>l||k>122||(65>l||k>90||c.push([32|Math.max(65,k),32|Math.min(l,90)]),97>l||k>122||c.push([-33&Math.max(97,k),-33&Math.min(l,122)])));for(c.sort(function(a,b){return a[0]-b[0]||b[1]-a[1]}),m=[],n=[],f=0;f<c.length;++f)o=c[f],o[0]<=n[1]+1?n[1]=Math.max(n[1],o[1]):m.push(n=o);for(f=0;f<m.length;++f)o=m[f],e.push(j(o[0])),o[1]>o[0]&&(o[1]+1>o[0]&&e.push("-"),e.push(j(o[1])));return e.push("]"),e.join("")}function l(a){var g,h,i,l,m,d=a.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),e=d.length,f=[];for(g=0,h=0;e>g;++g)i=d[g],"("===i?++h:"\\"===i.charAt(0)&&(l=+i.substring(1),l&&(h>=l?f[l]=-1:d[g]=j(l)));for(g=1;g<f.length;++g)-1===f[g]&&(f[g]=++b);for(g=0,h=0;e>g;++g)i=d[g],"("===i?(++h,f[h]||(d[g]="(?:")):"\\"===i.charAt(0)&&(l=+i.substring(1),l&&h>=l&&(d[g]="\\"+f[l]));for(g=0;e>g;++g)"^"===d[g]&&"^"!==d[g+1]&&(d[g]="");if(a.ignoreCase&&c)for(g=0;e>g;++g)i=d[g],m=i.charAt(0),i.length>=2&&"["===m?d[g]=k(i):"\\"!==m&&(d[g]=i.replace(/[a-zA-Z]/g,function(a){var b=a.charCodeAt(0);return"["+String.fromCharCode(-33&b,32|b)+"]"}));return d.join("")}var e,f,g,h,m,b=0,c=!1,d=!1;for(e=0,f=a.length;f>e;++e)if(g=a[e],g.ignoreCase)d=!0;else if(/[a-z]/i.test(g.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){c=!0,d=!1;break}for(h={b:8,t:9,n:10,v:11,f:12,r:13},m=[],e=0,f=a.length;f>e;++e){if(g=a[e],g.global||g.multiline)throw new Error(""+g);m.push("(?:"+l(g)+")")}return new RegExp(m.join("|"),d?"gi":"g")}function F(a,b){function h(a){var j,k,l,i=a.nodeType;if(1==i){if(c.test(a.className))return;for(j=a.firstChild;j;j=j.nextSibling)h(j);k=a.nodeName.toLowerCase(),("br"===k||"li"===k)&&(d[g]="\n",f[g<<1]=e++,f[1|g++<<1]=a)}else(3==i||4==i)&&(l=a.nodeValue,l.length&&(l=b?l.replace(/\r\n?/g,"\n"):l.replace(/[ \t\r\n]+/g," "),d[g]=l,f[g<<1]=e,e+=l.length,f[1|g++<<1]=a))}var c=/(?:^|\s)nocode(?:\s|$)/,d=[],e=0,f=[],g=0;return h(a),{sourceCode:d.join("").replace(/\n$/,""),spans:f}}function G(a,b,c,d){if(b){var e={sourceCode:b,basePos:a};c(e),d.push.apply(d,e.decorations)}}function I(a){var c,d,b=void 0;for(c=a.firstChild;c;c=c.nextSibling)d=c.nodeType,b=1===d?b?a:c:3===d?H.test(c.nodeValue)?a:b:b;return b===a?void 0:b}function J(a,b){var d,e,f,c={};return function(){var h,i,j,k,l,m,n,e=a.concat(b),f=[],g={};for(h=0,i=e.length;i>h;++h){if(j=e[h],k=j[3])for(l=k.length;--l>=0;)c[k.charAt(l)]=j;m=j[1],n=""+m,g.hasOwnProperty(n)||(f.push(m),g[n]=null)}f.push(/[\0-\uffff]/),d=E(f)}(),e=b.length,f=function(a){var m,n,o,p,q,r,s,t,u,v,x,y,A,g=a.sourceCode,h=a.basePos,i=[h,w],j=0,k=g.match(d)||[],l={};for(m=0,n=k.length;n>m;++m){if(o=k[m],p=l[o],q=void 0,"string"==typeof p)r=!1;else{if(s=c[o.charAt(0)])q=o.match(s[1]),p=s[0];else{for(t=0;e>t;++t)if(s=b[t],q=o.match(s[1])){p=s[0];break}q||(p=w)}r=p.length>=5&&"lang-"===p.substring(0,5),!r||q&&"string"==typeof q[1]||(r=!1,p=z),r||(l[o]=p)}u=j,j+=o.length,r?(v=q[1],x=o.indexOf(v),y=x+v.length,q[2]&&(y=o.length-q[2].length,x=y-v.length),A=p.substring(5),G(h+u,o.substring(0,x),f,i),G(h+u+x,v,Q(A,v),i),G(h+u+y,o.substring(y),f,i)):i.push(h+u,p)}a.decorations=i}}function K(a){var d,e,f,g,h,i,j,k,b=[],c=[];return a.tripleQuotedStrings?b.push([q,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):a.multiLineStrings?b.push([q,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):b.push([q,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),a.verbatimStrings&&c.push([q,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]),d=a.hashComments,d&&(a.cStyleComments?(d>1?b.push([s,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):b.push([s,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),c.push([q,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):b.push([s,/^#[^\r\n]*/,null,"#"])),a.cStyleComments&&(c.push([s,/^\/\/[^\r\n]*/,null]),c.push([s,/^\/\*[\s\S]*?(?:\*\/|$)/,null])),e=a.regexLiterals,e&&(f=e>1?"":"\n\r",g=f?".":"[\\S\\s]",h="/(?=[^/*"+f+"])"+"(?:[^/\\x5B\\x5C"+f+"]"+"|\\x5C"+g+"|\\x5B(?:[^\\x5C\\x5D"+f+"]"+"|\\x5C"+g+")*(?:\\x5D|$))+"+"/",c.push(["lang-regex",RegExp("^"+D+"("+h+")")])),i=a.types,i&&c.push([t,i]),j=(""+a.keywords).replace(/^ | $/g,""),j.length&&c.push([r,new RegExp("^(?:"+j.replace(/[\s,]+/g,"|")+")\\b"),null]),b.push([w,/^\s+/,null," \r\n	 "]),k="^.[^\\s\\w.$@'\"`/\\\\]*",a.regexLiterals&&(k+="(?!s*/)"),c.push([u,/^@[a-z_$][a-z_$@0-9]*/i,null],[t,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[w,/^[a-z_$][a-z_$@0-9]*/i,null],[u,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[w,/^\\[\s\S]?/,null],[v,new RegExp(k),null]),J(b,c)}function M(a,b,c){function i(a){var g,h,k,l,m,n,b=a.nodeType;if(1!=b||d.test(a.className))3!=b&&4!=b||!c||(h=a.nodeValue,k=h.match(e),k&&(l=h.substring(0,k.index),a.nodeValue=l,m=h.substring(k.index+k[0].length),m&&(n=a.parentNode,n.insertBefore(f.createTextNode(m),a.nextSibling)),j(a),l||a.parentNode.removeChild(a)));else if("br"===a.nodeName)j(a),a.parentNode&&a.parentNode.removeChild(a);else for(g=a.firstChild;g;g=g.nextSibling)i(g)}function j(a){function b(a,c){var f,g,h,d=c?a.cloneNode(!1):a,e=a.parentNode;if(e)for(f=b(e,1),g=a.nextSibling,f.appendChild(d),h=g;h;h=g)g=h.nextSibling,f.appendChild(h);return d}for(var c,d;!a.nextSibling;)if(a=a.parentNode,!a)return;for(c=b(a.nextSibling,0);(d=c.parentNode)&&1===d.nodeType;)c=d;h.push(c)}for(var h,k,l,m,n,d=/(?:^|\s)nocode(?:\s|$)/,e=/\r\n?|\n/,f=a.ownerDocument,g=f.createElement("li");a.firstChild;)g.appendChild(a.firstChild);for(h=[g],k=0;k<h.length;++k)i(h[k]);for(b===(0|b)&&h[0].setAttribute("value",b),l=f.createElement("ol"),l.className="linenums",m=Math.max(0,0|b-1)||0,k=0,n=h.length;n>k;++k)g=h[k],g.className="L"+(k+m)%10,g.firstChild||g.appendChild(f.createTextNode(" ")),l.appendChild(g);a.appendChild(l)}function N(a){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,v,w,x,y,z,A,B,b=/\bMSIE\s(\d+)/.exec(navigator.userAgent);for(b=b&&+b[1]<=8,c=/\n/g,d=a.sourceCode,e=d.length,f=0,g=a.spans,h=g.length,i=0,j=a.decorations,k=j.length,l=0,j[k]=e,n=m=0;k>n;)j[n]!==j[n+2]?(j[m++]=j[n++],j[m++]=j[n++]):n+=2;for(k=m,n=m=0;k>n;){for(o=j[n],p=j[n+1],q=n+2;k>=q+2&&j[q+1]===p;)q+=2;j[m++]=o,j[m++]=p,n=q}k=j.length=m,r=a.sourceNode,r&&(s=r.style.display,r.style.display="none");try{for(;h>i;)g[i],v=g[i+2]||e,w=j[l+2]||e,q=Math.min(v,w),x=g[i+1],1!==x.nodeType&&(y=d.substring(f,q))&&(b&&(y=y.replace(c,"\r")),x.nodeValue=y,z=x.ownerDocument,A=z.createElement("span"),A.className=j[l+1],B=x.parentNode,B.replaceChild(A,x),A.appendChild(x),v>f&&(g[i+1]=x=z.createTextNode(d.substring(q,v)),B.insertBefore(x,A.nextSibling))),f=q,f>=v&&(i+=2),f>=w&&(l+=2)}finally{r&&(r.style.display=s)}}function P(b,c){var d,e;for(d=c.length;--d>=0;)e=c[d],O.hasOwnProperty(e)?a.console&&console.warn("cannot override language handler %s",e):O[e]=b}function Q(a,b){return a&&O.hasOwnProperty(a)||(a=/^\s*</.test(b)?"default-markup":"default-code"),O[a]}function R(b){var d,e,c=b.langExtension;try{d=F(b.sourceNode,b.pre),e=d.sourceCode,b.sourceCode=e,b.spans=d.spans,b.basePos=0,Q(c,e)(b),N(b)}catch(f){a.console&&console.log(f&&f.stack||f)}}function S(a,b,c){var e,d=document.createElement("div");return d.innerHTML="<pre>"+a+"</pre>",d=d.firstChild,c&&M(d,c,!0),e={langExtension:b,numberLines:c,sourceNode:d,pre:1},R(e),d.innerHTML}function T(b,c){function f(a){return d.getElementsByTagName(a)}function v(){for(var d,f,g,i,j,k,w,x,y,z,A,B,C,D,E,F,c=a.PR_SHOULD_USE_CONTINUATION?l.now()+250:1/0;m<h.length&&l.now()<c;m++){for(d=h[m],f=u,g=d;(g=g.previousSibling)&&(i=g.nodeType,j=(7===i||8===i)&&g.nodeValue,j?/^\??prettify\b/.test(j):3===i&&!/\S/.test(g.nodeValue));)if(j){f={},j.replace(/\b(\w+)=([\w:.%+-]+)/g,function(a,b,c){f[b]=c});break}if(k=d.className,(f!==u||p.test(k))&&!q.test(k)){for(w=!1,x=d.parentNode;x;x=x.parentNode)if(y=x.tagName,t.test(y)&&x.className&&p.test(x.className)){w=!0;break}w||(d.className+=" prettyprinted",z=f.lang,z||(z=k.match(o),!z&&(A=I(d))&&s.test(A.tagName)&&(z=A.className.match(o)),z&&(z=z[1])),r.test(d.tagName)?B=1:(C=d.currentStyle,D=e.defaultView,E=C?C.whiteSpace:D&&D.getComputedStyle?D.getComputedStyle(d,null).getPropertyValue("white-space"):0,B=E&&"pre"===E.substring(0,3)),F=f.linenums,(F="true"===F||+F)||(F=k.match(/\blinenums\b(?::(\d+))?/),F=F?F[1]&&F[1].length?+F[1]:!0:!1),F&&M(d,F,B),n={langExtension:z,sourceNode:d,numberLines:F,pre:B},R(n))}}m<h.length?setTimeout(v,250):"function"==typeof b&&b()}var i,j,k,l,m,n,o,p,q,r,s,t,u,d=c||document.body,e=d.ownerDocument||document,g=[f("pre"),f("code"),f("xmp")],h=[];for(i=0;i<g.length;++i)for(j=0,k=g[i].length;k>j;++j)h.push(g[i][j]);g=null,l=Date,l.now||(l={now:function(){return+new Date}}),m=0,o=/\blang(?:uage)?-([\w.]+)(?!\S)/,p=/\bprettyprint\b/,q=/\bprettyprinted\b/,r=/pre|xmp/i,s=/^code$/i,t=/^(?:pre|code|xmp)$/i,u={},v()}var U,a=window,b=["break,continue,do,else,for,if,return,while"],c=[b,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],d=[c,"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],e=[d,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],f=[d,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],g=[f,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],h="all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",i=[d,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],j="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",k=[b,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],l=[b,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],m=[b,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],n=[b,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],o=[e,g,i,j,k,l,n],p=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,q="str",r="kwd",s="com",t="typ",u="lit",v="pun",w="pln",x="tag",y="dec",z="src",A="atn",B="atv",C="nocode",D="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*",H=/\S/,L=K({keywords:o,hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),O={};P(L,["default-code"]),P(J([],[[w,/^[^<?]+/],[y,/^<!\w[^>]*(?:>|$)/],[s,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[v,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),P(J([[w,/^[\s]+/,null," 	\r\n"],[B,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[x,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[A,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[v,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),P(J([],[[B,/^[\s\S]+/]]),["uq.val"]),P(K({keywords:e,hashComments:!0,cStyleComments:!0,types:p}),["c","cc","cpp","cxx","cyc","m"]),P(K({keywords:"null,true,false"}),["json"]),P(K({keywords:g,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:p}),["cs"]),P(K({keywords:f,cStyleComments:!0}),["java"]),P(K({keywords:n,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),P(K({keywords:k,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),P(K({keywords:j,hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),P(K({keywords:l,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),P(K({keywords:i,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]),P(K({keywords:h,hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),P(K({keywords:m,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]),P(J([],[[q,/^[\s\S]+/]]),["regex"]),P(J([[w,/^[ \t\r\n\f]+/,null," 	\r\n\f"]],[[q,/^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/,null],[q,/^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/,null],["lang-css-str",/^url\(([^\)\"\']+)\)/i],[r,/^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i,null],["lang-css-kw",/^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],[s,/^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],[s,/^(?:<!--|-->)/],[u,/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],[u,/^#(?:[0-9a-f]{3}){1,2}\b/i],[w,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],[v,/^[^\s\w\'\"]+/]]),["css"]),P(J([],[[r,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]]),["css-kw"]),P(J([],[[q,/^[^\)\"\']+/]]),["css-str"]),U=a.PR={createSimpleLexer:J,registerLangHandler:P,sourceDecorator:K,PR_ATTRIB_NAME:A,PR_ATTRIB_VALUE:B,PR_COMMENT:s,PR_DECLARATION:y,PR_KEYWORD:r,PR_LITERAL:u,PR_NOCODE:C,PR_PLAIN:w,PR_PUNCTUATION:v,PR_SOURCE:z,PR_STRING:q,PR_TAG:x,PR_TYPE:t,prettyPrintOne:IN_GLOBAL_SCOPE?a.prettyPrintOne=S:prettyPrintOne=S,prettyPrint:prettyPrint=IN_GLOBAL_SCOPE?a.prettyPrint=T:prettyPrint=T},"function"==typeof define&&define.amd&&define("google-code-prettify",[],function(){return U})}(),window.onload=function(){prettyPrint()};
