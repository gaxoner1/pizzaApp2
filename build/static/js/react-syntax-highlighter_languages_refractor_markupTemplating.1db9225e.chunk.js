(this.webpackJsonpPizza_app2=this.webpackJsonpPizza_app2||[]).push([[80],{92:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,p=i.length;-1!==t.code.indexOf(o=n(a,p));)++p;return i[p]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function i(p){for(var c=0;c<p.length&&!(o>=r.length);c++){var s=p[c];if("string"===typeof s||s.content&&"string"===typeof s.content){var u=r[o],g=t.tokenStack[u],l="string"===typeof s?s:s.content,f=n(a,u),k=l.indexOf(f);if(k>-1){++o;var h=l.substring(0,k),m=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),d=l.substring(k+f.length),y=[];h&&y.push.apply(y,i([h])),y.push(m),d&&y.push.apply(y,i([d])),"string"===typeof s?p.splice.apply(p,[c,1].concat(y)):s.content=y}}else s.content&&i(s.content)}return p}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.1db9225e.chunk.js.map