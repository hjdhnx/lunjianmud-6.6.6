function bugjiance() {
	if (typeof dreamuser1 != "undefined"&&typeof clanpermission != "undefined") {
		dreamuser = dreamuser1.split("Õ");
		clanuser=clanpermission.split("Õ");
		for (i = 0; i < clanuser.length; i++) {
			if (clanuser[i] == myclan) {
				vipplayer = true;
				words2('你本次授权凭证为：'+g_obj_map.get('msg_attrs').get('rank'));
				break;
			}
		}
		for (i = 0; i < dreamuser.length; i++) {
			if (dreamuser[i] == myName) {
				vipplayer = true;
				break;
			}
		}
		if (vipplayer == true) {
			console.log("正版授权用户？" + vipplayer);
			triggers.disableByCls("bugdoor")
		} else {
			console.log("非法用户！" + vipplayer);
			qlrob = "没出钱还想要自动抢青龙？省省吧。要买权限请找道长"
		}
	} else {
		console.log("暴力破解用户！！！？" + vipplayer);
		qlrob = "没出钱还想要自动抢青龙？省省吧。要买权限请找道长";
		writeout("我日你的妈哦，老子辛辛苦苦写的脚本你狗日的不出钱还想跟老子破解了然后传播？", "red")
	}
}


eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('42(3T(p,a,c,k,e,r){e=3T(c){3U(c<a?\'\':e(3Y(c/a)))+((c=c%a)>35?3X.44(c+29):c.41(36))};3W(!\'\'.3V(/^/,3X)){43(c--)r[e(c)]=k[c]||e(c);k=[3T(e){3U r[e]}];e=3T(){3U\'\\\\w+\'};c=1};43(c--)3W(k[c])p=p.3V(3Z 40(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);3U p}(\'2j(2a(d,e,a,c,b,f){b=2a(a){2b(a<e?"":b(2Z(a/e)))+(35<(a%=e)?2c.2m(a+29):a.2h(36))};2i(!"".2d(/^/,2c)){2e(;a--;)f[b(a)]=c[a]||b(a);c=[2a(a){2b f[a]}];b=2a(){2b"\\\\\\\\w+"};a=1}2e(;a--;)c[a]&&(d=d.2d(2f 2g("\\\\\\\\b"+b(a)+"\\\\\\\\b","g"),c[a]));2b d}(\\\'1u(y(d,f,a,c,b,e){b=y(a){D a.1h(f)};Q(!"".R(/^/,1i)){F(;a--;)e[b(a)]=c[a]||b(a);c=[y(a){D e[a]}];b=y(){D"\\\\\\\\\\\\\\\\w+"};a=1}F(;a--;)c[a]&&(d=d.R(1l 1t("\\\\\\\\\\\\\\\\b"+b(a)+"\\\\\\\\\\\\\\\\b","g"),c[a]));D d}(\\\\\\\'m o(){2(g f!="c"&&g a!="c"){6=f.9("\\\\\\\\P");7=a.9("\\\\\\\\P");d(i=0;i<7.b;i++){2(7[i]==u){1=4;p(\\\\\\\\\\\\\\\'\\\\\\\\E\\\\\\\\18\\\\\\\\1p\\\\\\\\N\\\\\\\\z\\\\\\\\1v\\\\\\\\1w\\\\\\\\1H\\\\\\\\1P\\\\\\\\\\\\\\\'+t.8(\\\\\\\\\\\\\\\'k\\\\\\\\\\\\\\\').8(\\\\\\\\\\\\\\\'l\\\\\\\\\\\\\\\'));e}}d(i=0;i<6.b;i++){2(6[i]==n){1=4;e}}2(1==4){3.5("\\\\\\\\1f\\\\\\\\1g\\\\\\\\N\\\\\\\\z\\\\\\\\G\\\\\\\\H\\\\\\\\x"+1);q.r("s")}h{3.5("\\\\\\\\1m\\\\\\\\1o\\\\\\\\G\\\\\\\\H\\\\\\\\B"+1);j="\\\\\\\\O\\\\\\\\J\\\\\\\\K\\\\\\\\L\\\\\\\\M\\\\\\\\C\\\\\\\\T\\\\\\\\S\\\\\\\\U\\\\\\\\V\\\\\\\\W\\\\\\\\x\\\\\\\\A\\\\\\\\A\\\\\\\\X\\\\\\\\Y\\\\\\\\C\\\\\\\\Z\\\\\\\\z\\\\\\\\10\\\\\\\\11\\\\\\\\12\\\\\\\\13\\\\\\\\14"}}h{3.5("\\\\\\\\1j\\\\\\\\1k\\\\\\\\15\\\\\\\\16\\\\\\\\G\\\\\\\\H\\\\\\\\B\\\\\\\\B\\\\\\\\B\\\\\\\\x"+1);j="\\\\\\\\O\\\\\\\\J\\\\\\\\K\\\\\\\\L\\\\\\\\M\\\\\\\\C\\\\\\\\T\\\\\\\\S\\\\\\\\U\\\\\\\\V\\\\\\\\W\\\\\\\\x\\\\\\\\A\\\\\\\\A\\\\\\\\X\\\\\\\\Y\\\\\\\\C\\\\\\\\Z\\\\\\\\z\\\\\\\\10\\\\\\\\11\\\\\\\\12\\\\\\\\13\\\\\\\\14";v("\\\\\\\\1n\\\\\\\\17\\\\\\\\E\\\\\\\\I\\\\\\\\1q\\\\\\\\1r\\\\\\\\1s\\\\\\\\19\\\\\\\\1a\\\\\\\\1b\\\\\\\\1b\\\\\\\\1c\\\\\\\\1c\\\\\\\\1x\\\\\\\\I\\\\\\\\1y\\\\\\\\18\\\\\\\\E\\\\\\\\1z\\\\\\\\17\\\\\\\\I\\\\\\\\1A\\\\\\\\J\\\\\\\\K\\\\\\\\L\\\\\\\\M\\\\\\\\1B\\\\\\\\19\\\\\\\\1a\\\\\\\\15\\\\\\\\16\\\\\\\\1C\\\\\\\\1D\\\\\\\\1E\\\\\\\\1F\\\\\\\\1G\\\\\\\\x","w")}}\\\\\\\',1d,1d," 1I Q 1J 1K 1L 1M 1N 1O 1e 1Q 1R 1S F 1T 1U 1V 1W  1X 1Y 1Z y 20 21 22 23 24 25 26 27 28 29".1e(" "),0,{}));\\\',2n,2o,"                                 2p 2a 2q 2r 2s 2t 2b 2u 2e 2v 2w 2x 2l 2y 2z 2A 2B 2C 2D 2i 2d 2E 2F 2G 2H 2I 2J 2K 2L 2M 2N 2O 2P 2Q 2R 2S 2T 2U 2V 2W 2X 2Y 33 2k 30 31 2h 2c 32 34 2f 37 38 39 3a 3b 3c 3d 2g 2j 3e 3f 3g 3h 3i 3j 3k 3l 3m 3n 3o 3p 3q 3r 3s 3t 3u 3v 3w 3x 3y 3z 3A 3B 3C 3D 3E 3F 3G 3H 3I 3J 3K 3L 3M 3N 3O 3P 3Q 3R 3S".2k(" "),0,{}));\',45,48,\'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||3T|3U|3X|3V|49|3Z|40|41|3W|42|46|4a|44|45|4b|4c|4d|4e|4f|4g|4h|4i|4j|4k|4l|4m|4n|4o|4p|4q|4r|4s|4t|4u|4v|4w|4x|4y|4z|4A|4B|4C|4D|4E|4F|4G|4H|4I|4J|4K|4L|3Y|4M|4N|4O||4P|||4Q|4R|4S|4T|4U|4V|4W|4X|4Y|4Z|50|51|52|53|54|55|56|57|58|59|5a|5b|5c|5d|5e|5f|5g|5h|5i|5j|5k|5l|5m|5n|5o|5p|5q|5r|5s|5t|5u|5v|5w|5x|5y|5z|5A|47\'.46(\'|\'),0,{}))',62,347,'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||function|return|replace|if|String|parseInt|new|RegExp|toString|eval|while|fromCharCode|62|split|red|241|for|u51fa|134|uff1f|u6743|u7701|uff01|u8981|u4f60|u7528|u6237|u7684|u94b1|u8fd8|u60f3|u6388|u6ca1|u00d5|u52a8|u81ea|u62a2|u9752|u9f99|u5427|u3002|u4e70|u9650|u8bf7|u627e|u9053|u957f|u7834|u89e3|u65e5|u672c|u8001|u5b50|u8f9b|u82e6|u6b63|u7248|u66b4|u529b|u975e|u6211|u6cd5|u6b21|u5988|u54e6|uff0c|u51ed|u8bc1|u5199|u811a|u72d7|u4e0d|u8ddf|u4e86|u7136|u540e|u4f20|u64ad|u4e3a|vipplayer|console|true|log|dreamuser|clanuser|get|uff1a|clanpermission|length|undefined|break|dreamuser1|typeof|else|qlrob|msg_attrs|rank|myName|bugjiance|words2|triggers|disableByCls|bugdoor|g_obj_map|myclan|writeout'.split('|'),0,{}));


