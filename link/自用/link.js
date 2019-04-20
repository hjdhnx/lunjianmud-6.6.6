//下面部分直接加密混淆
tuoguanh=tuoguantime.split(":")[0];
tuoguanm=tuoguantime.split(":")[1];
quid="["+quid1+"区]";
myName="undefined"; 
qlrob=qlreq;
uncompile=function(code)  
{  
   code=unescape(code);  
   var c=String.fromCharCode(code.charCodeAt(0)-code.length);  
   for(var i=1;i<code.length;i++){  
   c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1));  
   }  
   return c;  
}
//上面部分直接加密混淆
/*
compile=function(code)//加密
{    
   var c=String.fromCharCode(code.charCodeAt(0)+code.length);  
   for(var i=1;i<code.length;i++){  
   c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));  
   }  
   console.log(escape(c));  
}
//compile("s.setAttribute('src', 'http://playdreamer.cn/pan/uploads/legend/6.6/dzlunjian6.6installnew.js');");
compile('window.open("http://playdreamer.cn/pan/uploads/legend/6.6/dzlunjian6.6.user.js");');
*/


/*
var s = document.createElement('script');
s.setAttribute('src', 'http://playdreamer.cn/pan/uploads/legend/6.6/dzlunjian6.6installnew.js');
document.head.appendChild(s);
*/

/*
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2h(23(d,e,a,c,b,f){b=23(a){22(a<e?"":b(2f(a/e)))+(2g<(a%=e)?27.28(a+29):a.2c(2d))};2e(!"".26(/^/,27)){24(;a--;)f[b(a)]=c[a]||b(a);c=[23(a){22 f[a]}];b=23(){22"\\\\w+"};a=1}24(;a--;)c[a]&&(d=d.26(2a 2b("\\\\b"+b(a)+"\\\\b","g"),c[a]));22 d}("1H(1s(p,a,c,k,e,r){e=1s(c){1t(c<a?\'\':e(1F(c/a)))+((c=c%a)>1G?1x.1y(c+1A):c.1D(1E))};1w(!\'\'.1v(/^/,1x)){1u(c--)r[e(c)]=k[c]||e(c);k=[1s(e){1t r[e]}];e=1s(){1t\'\\\\\\\\w+\'};c=1};1u(c--)1w(k[c])p=p.1v(1B 1C(\'\\\\\\\\b\'+e(c)+\'\\\\\\\\b\',\'g\'),k[c]);1t p}(\'13(U(d,e,a,c,b,f){b=U(a){V(a<e?\\"\\":b(1a(a/e)))+(17<(a%=e)?Y.14(a+1b):a.Z(18))};12(!\\"\\".X(/^/,Y)){W(;a--;)f[b(a)]=c[a]||b(a);c=[U(a){V f[a]}];b=U(){V\\"\\\\\\\\\\\\\\\\w+\\"};a=1}W(;a--;)c[a]&&(d=d.X(10 11(\\"\\\\\\\\\\\\\\\\b\\"+b(a)+\\"\\\\\\\\\\\\\\\\b\\",\\"g\\"),c[a]));V d}(\\"B(s(p,a,c,k,e,r){e=s(c){q c.A(a)};t(!\\\\\'\\\\\'.u(/^/,v)){x(c--)r[e(c)]=k[c]||e(c);k=[s(e){q r[e]}];e=s(){q\\\\\'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\w+\\\\\'};c=1};x(c--)t(k[c])p=p.u(C D(\\\\\'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\b\\\\\'+e(c)+\\\\\'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\b\\\\\',\\\\\'g\\\\\'),k[c]);q p}(\\\\\'d=7.3(\\\\\\\\\\":\\\\\\\\\\")[0];n=7.3(\\\\\\\\\\":\\\\\\\\\\")[1];f=\\\\\\\\\\"[\\\\\\\\\\"+g+\\\\\\\\\\"\\\\\\\\1d]\\\\\\\\\\";h=\\\\\\\\\\"j\\\\\\\\\\";k=l;9=b(a){a=e(a);4 c=5.6(a.2(0)-a.8);m(4 i=1;i<a.8;i++){c+=5.6(a.2(i)-c.2(i-1))}o c}\\\\\',z,z,\\\\\'||E|y|F|v|G|H|I|J||s||K|L|M|N|O||P|Q|R|S|T|q\\\\\'.y(\\\\\'|\\\\\'),0,{}))\\",15,15,\\"                          V  U 12 X Y  1c 16 1e Z 13 10 11 1f 1g 14 1h 1i 1j 1k 1l 1m 1n 1o 1p 1q 1r W 19\\".16(\\" \\"),0,{}));\',1I,1J,\'||||||||||||||||||||||||||||||||||||||||||||||||||||||||1s|1t|1K|1v|1x|1D|1B|1C|1w|1H|1y|1L|1z|1G|1E|1M|1F|1A|1u|1N|1O|1P|1Q|1R|1S|1T|1U|1V|1W|1X|1Y|1Z|20|21\'.1z(\'|\'),0,{}))",2i,2l,"                                                                                          23 22 2m 26 2e 27 28 2j 29 2a 2b 2c 2d 2f 2g 2h 2i 2n 24 2o 2p 2q 25 2r 2s 2t 2u 2v 2w 2x 2y 2z 2A 2B 2C 2k".2j(" "),0,{}));',62,163,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||return|function|for||replace|String|fromCharCode||new|RegExp|toString|36|if|parseInt|35|eval|62|split|qlreq|126|while|90|56|tuoguanm|u533a|charCodeAt|var|tuoguantime|length|uncompile|tuoguanh|unescape|quid|quid1|myName|undefined|qlrob'.split('|'),0,{}));

eval(uncompile("%9F%D7%D3%92%93%93%5D%5D%84%D3%D2%D8%E2%D2%D3%E2%A2%91%D5%D7%C6%D5%D9%AA%B1%D1%D2%D2%D3%E2%9CO%9A%D6%D5%DB%D9%E4%9BPd"));
eval(uncompile("%D3%A1%A1%D8%D9%B5%B5%E8%E6%DB%CB%D7%E9%D9%8DO%9A%E5%D5%8ASLG%8F%DC%E8%E4%AAi%5E%9F%DC%CD%DA%DD%D6%D7%C6%CE%D2%D7%A0%91%D1%9D%9F%D1%CF%9D%A4%E5%DC%DB%D0%C5%D7%A2%9B%D1%CC%CC%D3%D2%93edde%93%DE%E6%E1%E3%D8%D3%CA%CF%A4dd%9F%D7%E1%E7%D5%CD%D8%DA%D3%DC%A5%98%DD%9APd"));
eval(uncompile("%81%D3%D2%D8%E2%D2%D3%E2%A2%96%CD%C6%C5%92%8F%D1%E0%D5%D3%D2%A7%AB%D1%D5%D0%8C%9B%9Cd"));
---update---
eval(uncompile("%C8%E0%D7%D2%D3%E6%A5%9D%DF%D5%D3%96J%8A%DC%E8%E4%AAi%5E%9F%DC%CD%DA%DD%D6%D7%C6%CE%D2%D7%A0%91%D1%9D%9F%D1%CF%9D%A4%E5%DC%DB%D0%C5%D7%A2%9B%D1%CC%CC%D3%D2%93edde%93%DE%E6%E1%E3%D8%D3%CA%CF%A4ddd%A3%E8%D8%D7%A0%98%DD%95Kd"));

*/


//上面部分eval格式放到user.js里