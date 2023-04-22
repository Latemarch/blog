"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6066],{6066:function(e,t,n){function i(e){var t=e.statementIndentUnit,n=e.dontAlignCalls,i=e.noIndentKeywords||[],r=e.multiLineStrings,a=e.hooks||{};function o(e){for(var t={},n=e.split(" "),i=0;i<n.length;++i)t[n[i]]=!0;return t}var l,s,c=o("accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor"),u=/[\+\-\*\/!~&|^%=?:]/,d=/[\[\]{}()]/,f=/\d[0-9_]*/,p=/\d*\s*'s?d\s*\d[0-9_]*/i,m=/\d*\s*'s?b\s*[xz01][xz01_]*/i,v=/\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i,g=/\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i,h=/(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i,k=/^((\w+)|[)}\]])/,y=/[)}\]]/,b=o("case checker class clocking config function generate interface module package primitive program property specify sequence table task"),w={};for(var _ in b)w[_]="end"+_;for(var x in w.begin="end",w.casex="endcase",w.casez="endcase",w.do="while",w.fork="join;join_any;join_none",w.covergroup="endgroup",i){_=i[x];w[_]&&(w[_]=void 0)}var z=o("always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while");function I(e,t){var n,i,o=e.peek();if(a[o]&&0!=(n=a[o](e,t)))return n;if(a.tokenBase&&0!=(n=a.tokenBase(e,t)))return n;if(/[,;:\.]/.test(o))return l=e.next(),null;if(d.test(o))return l=e.next(),"bracket";if("`"==o)return e.next(),e.eatWhile(/[\w\$_]/)?"def":null;if("$"==o)return e.next(),e.eatWhile(/[\w\$_]/)?"meta":null;if("#"==o)return e.next(),e.eatWhile(/[\d_.]/),"def";if('"'==o)return e.next(),t.tokenize=(i=o,function(e,t){for(var n,a=!1,o=!1;null!=(n=e.next());){if(n==i&&!a){o=!0;break}a=!a&&"\\"==n}return(o||!a&&!r)&&(t.tokenize=I),"string"}),t.tokenize(e,t);if("/"==o){if(e.next(),e.eat("*"))return t.tokenize=C,C(e,t);if(e.eat("/"))return e.skipToEnd(),"comment";e.backUp(1)}if(e.match(h)||e.match(p)||e.match(m)||e.match(v)||e.match(g)||e.match(f)||e.match(h))return"number";if(e.eatWhile(u))return"meta";if(e.eatWhile(/[\w\$_]/)){var k=e.current();return c[k]?(w[k]&&(l="newblock"),z[k]&&(l="newstatement"),s=k,"keyword"):"variable"}return e.next(),null}function C(e,t){for(var n,i=!1;n=e.next();){if("/"==n&&i){t.tokenize=I;break}i="*"==n}return"comment"}function S(e,t,n,i,r){this.indented=e,this.column=t,this.type=n,this.align=i,this.prev=r}function j(e,t,n){var i=new S(e.indented,t,n,null,e.context);return e.context=i}function N(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}function $(e,t){if(e==t)return!0;var n=t.split(";");for(var i in n)if(e==n[i])return!0;return!1}return{name:"verilog",startState:function(e){var t={tokenize:null,context:new S(-e,0,"top",!1),indented:0,startOfLine:!0};return a.startState&&a.startState(t),t},token:function(e,t){var n,i=t.context;if((e.sol()&&(null==i.align&&(i.align=!1),t.indented=e.indentation(),t.startOfLine=!0),a.token)&&void 0!==(n=a.token(e,t)))return n;if(e.eatSpace())return null;if(l=null,s=null,"comment"==(n=(t.tokenize||I)(e,t))||"meta"==n||"variable"==n)return n;if(null==i.align&&(i.align=!0),l==i.type)N(t);else if(";"==l&&"statement"==i.type||i.type&&$(s,i.type))for(i=N(t);i&&"statement"==i.type;)i=N(t);else if("{"==l)j(t,e.column(),"}");else if("["==l)j(t,e.column(),"]");else if("("==l)j(t,e.column(),")");else if(i&&"endcase"==i.type&&":"==l)j(t,e.column(),"statement");else if("newstatement"==l)j(t,e.column(),"statement");else if("newblock"==l)if("function"!=s||!i||"statement"!=i.type&&"endgroup"!=i.type)if("task"==s&&i&&"statement"==i.type);else{var r=w[s];j(t,e.column(),r)}else;return t.startOfLine=!1,n},indent:function(e,i,r){if(e.tokenize!=I&&null!=e.tokenize)return null;if(a.indent){var o=a.indent(e);if(o>=0)return o}var l=e.context,s=i&&i.charAt(0);"statement"==l.type&&"}"==s&&(l=l.prev);var c=!1,u=i.match(k);return u&&(c=$(u[0],l.type)),"statement"==l.type?l.indented+("{"==s?0:t||r.unit):y.test(l.type)&&l.align&&!n?l.column+(c?0:1):")"!=l.type||c?l.indented+(c?0:r.unit):l.indented+(t||r.unit)},languageData:{indentOnInput:function(){var e=[];for(var t in w)if(w[t]){var n=w[t].split(";");for(var i in n)e.push(n[i])}return new RegExp("[{}()\\[\\]]|("+e.join("|")+")$")}(),commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}}}n.r(t),n.d(t,{tlv:function(){return u},verilog:function(){return r}});var r=i({}),a={"|":"link",">":"property",$:"variable",$$:"variable","?$":"qualifier","?*":"qualifier","-":"contentSeparator","/":"property","/-":"property","@":"variableName.special","@-":"variableName.special","@++":"variableName.special","@+=":"variableName.special","@+=-":"variableName.special","@--":"variableName.special","@-=":"variableName.special","%+":"tag","%-":"tag","%":"tag",">>":"tag","<<":"tag","<>":"tag","#":"tag","^":"attribute","^^":"attribute","^!":"attribute","*":"variable","**":"variable","\\":"keyword",'"':"comment"},o={"/":"beh-hier",">":"beh-hier","-":"phys-hier","|":"pipe","?":"when","@":"stage","\\":"keyword"},l=/^([~!@#\$%\^&\*-\+=\?\/\\\|'"<>]+)([\d\w_]*)/,s=/^[! ] */,c=/^\/[\/\*]/,u=i({hooks:{electricInput:!1,token:function(e,t){var n=void 0;if(e.sol()&&!t.tlvInBlockComment){"\\"==e.peek()&&(n="def",e.skipToEnd(),e.string.match(/\\SV/)?t.tlvCodeActive=!1:e.string.match(/\\TLV/)&&(t.tlvCodeActive=!0)),t.tlvCodeActive&&0==e.pos&&0==t.indented&&(m=e.match(s,!1))&&(t.indented=m[0].length);var i=t.indented,r=i/3;if(r<=t.tlvIndentationStyle.length){var u=e.string.length==i,d=3*r;if(d<e.string.length){var f=e.string.slice(d),p=f[0];o[p]&&(m=f.match(l))&&a[m[1]]&&(i+=3,"\\"==p&&d>0||(t.tlvIndentationStyle[r]=o[p],r++))}if(!u)for(;t.tlvIndentationStyle.length>r;)t.tlvIndentationStyle.pop()}t.tlvNextIndent=i}if(t.tlvCodeActive){var m;if(void 0!==n);else if(t.tlvInBlockComment)e.match(/^.*?\*\//)?t.tlvInBlockComment=!1:e.skipToEnd(),n="comment";else if((m=e.match(c))&&!t.tlvInBlockComment)"//"==m[0]?e.skipToEnd():t.tlvInBlockComment=!0,n="comment";else if(m=e.match(l)){var v=m[1],g=m[2];a.hasOwnProperty(v)&&(g.length>0||e.eol())?n=a[v]:e.backUp(e.current().length-1)}else e.match(/^\t+/)?n="invalid":e.match(/^[\[\]{}\(\);\:]+/)?n="meta":(m=e.match(/^[mM]4([\+_])?[\w\d_]*/))?n="+"==m[1]?"keyword.special":"keyword":e.match(/^ +/)?e.eol()&&(n="error"):e.match(/^[\w\d_]+/)?n="number":e.next()}else e.match(/^[mM]4([\w\d_]*)/)&&(n="keyword");return n},indent:function(e){return 1==e.tlvCodeActive?e.tlvNextIndent:-1},startState:function(e){e.tlvIndentationStyle=[],e.tlvCodeActive=!0,e.tlvNextIndent=-1,e.tlvInBlockComment=!1}}})}}]);
//# sourceMappingURL=6066.692d37ce.chunk.js.map