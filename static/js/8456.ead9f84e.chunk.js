"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8456],{8456:function(e,n,t){t.r(n),t.d(n,{dockerFile:function(){return k}});var r=t(2820),o="from",a=new RegExp("^(\\s*)\\b("+o+")\\b","i"),s=["run","cmd","entrypoint","shell"],l=new RegExp("^(\\s*)("+s.join("|")+")(\\s+\\[)","i"),i="expose",u=new RegExp("^(\\s*)("+i+")(\\s+)","i"),g="("+[o,i].concat(s).concat(["arg","from","maintainer","label","env","add","copy","volume","user","workdir","onbuild","stopsignal","healthcheck","shell"]).join("|")+")",d=new RegExp("^(\\s*)"+g+"(\\s*)(#.*)?$","i"),x=new RegExp("^(\\s*)"+g+"(\\s+)","i"),k=(0,r.Q)({start:[{regex:/^\s*#.*$/,sol:!0,token:"comment"},{regex:a,token:[null,"keyword"],sol:!0,next:"from"},{regex:d,token:[null,"keyword",null,"error"],sol:!0},{regex:l,token:[null,"keyword",null],sol:!0,next:"array"},{regex:u,token:[null,"keyword",null],sol:!0,next:"expose"},{regex:x,token:[null,"keyword",null],sol:!0,next:"arguments"},{regex:/./,token:null}],from:[{regex:/\s*$/,token:null,next:"start"},{regex:/(\s*)(#.*)$/,token:[null,"error"],next:"start"},{regex:/(\s*\S+\s+)(as)/i,token:[null,"keyword"],next:"start"},{token:null,next:"start"}],single:[{regex:/(?:[^\\']|\\.)/,token:"string"},{regex:/'/,token:"string",pop:!0}],double:[{regex:/(?:[^\\"]|\\.)/,token:"string"},{regex:/"/,token:"string",pop:!0}],array:[{regex:/\]/,token:null,next:"start"},{regex:/"(?:[^\\"]|\\.)*"?/,token:"string"}],expose:[{regex:/\d+$/,token:"number",next:"start"},{regex:/[^\d]+$/,token:null,next:"start"},{regex:/\d+/,token:"number"},{regex:/[^\d]+/,token:null},{token:null,next:"start"}],arguments:[{regex:/^\s*#.*$/,sol:!0,token:"comment"},{regex:/"(?:[^\\"]|\\.)*"?$/,token:"string",next:"start"},{regex:/"/,token:"string",push:"double"},{regex:/'(?:[^\\']|\\.)*'?$/,token:"string",next:"start"},{regex:/'/,token:"string",push:"single"},{regex:/[^#"']+[\\`]$/,token:null},{regex:/[^#"']+$/,token:null,next:"start"},{regex:/[^#"']+/,token:null},{token:null,next:"start"}],languageData:{commentTokens:{line:"#"}}})},2820:function(e,n,t){function r(e){o(e,"start");var n={},t=e.languageData||{},r=!1;for(var i in e)if(i!=t&&e.hasOwnProperty(i))for(var u=n[i]=[],g=e[i],d=0;d<g.length;d++){var x=g[d];u.push(new a(x,e)),(x.indent||x.dedent)&&(r=!0)}return{name:t.name,startState:function(){return{state:"start",pending:null,indent:r?[]:null}},copyState:function(e){var n={state:e.state,pending:e.pending,indent:e.indent&&e.indent.slice(0)};return e.stack&&(n.stack=e.stack.slice(0)),n},token:s(n),indent:l(n,t),languageData:t}}function o(e,n){if(!e.hasOwnProperty(n))throw new Error("Undefined state "+n+" in simple mode")}function a(e,n){(e.next||e.push)&&o(n,e.next||e.push),this.regex=function(e,n){if(!e)return/(?:)/;var t="";return e instanceof RegExp?(e.ignoreCase&&(t="i"),e=e.source):e=String(e),new RegExp((!1===n?"":"^")+"(?:"+e+")",t)}(e.regex),this.token=function(e){if(!e)return null;if(e.apply)return e;if("string"==typeof e)return e.replace(/\./g," ");for(var n=[],t=0;t<e.length;t++)n.push(e[t]&&e[t].replace(/\./g," "));return n}(e.token),this.data=e}function s(e){return function(n,t){if(t.pending){var r=t.pending.shift();return 0==t.pending.length&&(t.pending=null),n.pos+=r.text.length,r.token}for(var o=e[t.state],a=0;a<o.length;a++){var s=o[a],l=(!s.data.sol||n.sol())&&n.match(s.regex);if(l){s.data.next?t.state=s.data.next:s.data.push?((t.stack||(t.stack=[])).push(t.state),t.state=s.data.push):s.data.pop&&t.stack&&t.stack.length&&(t.state=t.stack.pop()),s.data.indent&&t.indent.push(n.indentation()+n.indentUnit),s.data.dedent&&t.indent.pop();var i=s.token;if(i&&i.apply&&(i=i(l)),l.length>2&&s.token&&"string"!=typeof s.token){t.pending=[];for(var u=2;u<l.length;u++)l[u]&&t.pending.push({text:l[u],token:s.token[u-1]});return n.backUp(l[0].length-(l[1]?l[1].length:0)),i[0]}return i&&i.join?i[0]:i}}return n.next(),null}}function l(e,n){return function(t,r){if(null==t.indent||n.dontIndentStates&&n.doneIndentState.indexOf(t.state)>-1)return null;var o=t.indent.length-1,a=e[t.state];e:for(;;){for(var s=0;s<a.length;s++){var l=a[s];if(l.data.dedent&&!1!==l.data.dedentIfLineStart){var i=l.regex.exec(r);if(i&&i[0]){o--,(l.next||l.push)&&(a=e[l.next||l.push]),r=r.slice(i[0].length);continue e}}}break}return o<0?0:t.indent[o]}}t.d(n,{Q:function(){return r}})}}]);
//# sourceMappingURL=8456.ead9f84e.chunk.js.map