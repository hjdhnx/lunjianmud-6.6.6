function play_skill_7(){
$('span.out').last().append('<span style="color:red">【道长刷气诀>>>></span><span style="color:#FFFF00">一式破万法】</span><span style="color:rgb(205, 0, 205)">你使出了道长刷气诀，淡淡云雾霞光在周身闪烁明灭，仙光清气不断荡漾开来，与九州地脉之中的浩瀚灵机融为一体，转化成一种至高无上的力量！！！</span>')
var a=g_obj_map.get("msg_vs_info");
var b=g_obj_map.get('msg_attrs').get("id");
var c=[];
var d='';
for(var i=1;i<9;i++){
if(a.get("vs1_name"+i)&&a.get("vs1_pos"+i)==b){
	for(var i=1;i<9;i++){
		if(a.get("vs2_name"+i)){
			d=a.get("vs2_pos"+i);
			break;
		}
	}
break;
}
if(a.get("vs2_name"+i)&&a.get("vs2_pos"+i)==b){
for(var i=1;i<9;i++){
		if(a.get("vs1_name"+i)){
			d=a.get("vs1_pos"+i);
			break;
		}
	}
break;
}
}
clickButton('escape');
if(d!=''){
clickButton('kill '+d);
}
}

function play_skill_8(){
	if(typeof sessionStorage.en_skill=='undefined'){
		sessionStorage.en_skill=0;
	}
	sessionStorage.en_skill++;
	clickButton('enable mapped_skills restore go '+sessionStorage.en_skill);
	setTimeout(function(){clickButton('combat_chat');clickButton('quit_chat');},500);
	console.log('使用袖里乾坤功成功更换为第'+sessionStorage.en_skill+'套技能');
	if(sessionStorage.en_skill==3){
		sessionStorage.en_skill=0;
		var a=new webSocketMsg();
		a.refresh_skill_button();
	}
}


var encode_version = 'sojson.v5', zmcdk = '__0x2f4ac',  __0x2f4ac=['K8KpMsOYwooiw4VJYw==','wqbCvkkVwr1FIy7Cig==','56SN5byN4piT5L2F5YWYFuiNiuaHt+aDnOeYpeeZtOS6osKo57uT57W05L2e6IiOw7DmlrXlpqrluYnil43nu7Dntbw=','6Z6Y6b2/5L+DY+mdheS5iumXnRzmtqTopKI='];(function(_0x4b4f3f,_0x3bba90){var _0x5cef34=function(_0x1cc7e2){while(--_0x1cc7e2){_0x4b4f3f['push'](_0x4b4f3f['shift']());}};_0x5cef34(++_0x3bba90);}(__0x2f4ac,0x78));var _0x42e2=function(_0xdec86e,_0x14d758){_0xdec86e=_0xdec86e-0x0;var _0x133f66=__0x2f4ac[_0xdec86e];if(_0x42e2['initialized']===undefined){(function(){var _0x1f0c6=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xdf9f6e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1f0c6['atob']||(_0x1f0c6['atob']=function(_0xaaa3e9){var _0x566141=String(_0xaaa3e9)['replace'](/=+$/,'');for(var _0x3343c5=0x0,_0x5b2eaf,_0x3806d3,_0x46f204=0x0,_0x5d8f25='';_0x3806d3=_0x566141['charAt'](_0x46f204++);~_0x3806d3&&(_0x5b2eaf=_0x3343c5%0x4?_0x5b2eaf*0x40+_0x3806d3:_0x3806d3,_0x3343c5++%0x4)?_0x5d8f25+=String['fromCharCode'](0xff&_0x5b2eaf>>(-0x2*_0x3343c5&0x6)):0x0){_0x3806d3=_0xdf9f6e['indexOf'](_0x3806d3);}return _0x5d8f25;});}());var _0x3177ac=function(_0x46ae9e,_0x22bebd){var _0x4c0532=[],_0x454407=0x0,_0x64ecc3,_0x13158c='',_0x4e15cf='';_0x46ae9e=atob(_0x46ae9e);for(var _0x26eb35=0x0,_0x45124a=_0x46ae9e['length'];_0x26eb35<_0x45124a;_0x26eb35++){_0x4e15cf+='%'+('00'+_0x46ae9e['charCodeAt'](_0x26eb35)['toString'](0x10))['slice'](-0x2);}_0x46ae9e=decodeURIComponent(_0x4e15cf);for(var _0x18f4a2=0x0;_0x18f4a2<0x100;_0x18f4a2++){_0x4c0532[_0x18f4a2]=_0x18f4a2;}for(_0x18f4a2=0x0;_0x18f4a2<0x100;_0x18f4a2++){_0x454407=(_0x454407+_0x4c0532[_0x18f4a2]+_0x22bebd['charCodeAt'](_0x18f4a2%_0x22bebd['length']))%0x100;_0x64ecc3=_0x4c0532[_0x18f4a2];_0x4c0532[_0x18f4a2]=_0x4c0532[_0x454407];_0x4c0532[_0x454407]=_0x64ecc3;}_0x18f4a2=0x0;_0x454407=0x0;for(var _0x2f405f=0x0;_0x2f405f<_0x46ae9e['length'];_0x2f405f++){_0x18f4a2=(_0x18f4a2+0x1)%0x100;_0x454407=(_0x454407+_0x4c0532[_0x18f4a2])%0x100;_0x64ecc3=_0x4c0532[_0x18f4a2];_0x4c0532[_0x18f4a2]=_0x4c0532[_0x454407];_0x4c0532[_0x454407]=_0x64ecc3;_0x13158c+=String['fromCharCode'](_0x46ae9e['charCodeAt'](_0x2f405f)^_0x4c0532[(_0x4c0532[_0x18f4a2]+_0x4c0532[_0x454407])%0x100]);}return _0x13158c;};_0x42e2['rc4']=_0x3177ac;_0x42e2['data']={};_0x42e2['initialized']=!![];}var _0x194fcd=_0x42e2['data'][_0xdec86e];if(_0x194fcd===undefined){if(_0x42e2['once']===undefined){_0x42e2['once']=!![];}_0x133f66=_0x42e2['rc4'](_0x133f66,_0x14d758);_0x42e2['data'][_0xdec86e]=_0x133f66;}else{_0x133f66=_0x194fcd;}return _0x133f66;};if(typeof encode_version!==_0x42e2('0x0','2R56')&&encode_version===_0x42e2('0x1','2CGW')){var dreamuser1=_0x42e2('0x2','AC2*');var clanpermission=_0x42e2('0x3','o@gE');}else{alert('不能删除sojson.v5');};encode_version = 'sojson.v5';