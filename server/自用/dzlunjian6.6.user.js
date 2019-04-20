// ==UserScript==
// @name        道长论剑DZ正版
// @namespace    http://playdreamer.cn/
// @include      http://*.yytou.c*
// @version      6.6.6
// @description  道长发布的强大脚本，by道长论剑论坛。特别鸣谢虹雪恩新
// @author       道长
// @grant        none
// ==/UserScript==

/*青龙物品参考表
天寒：狂暴丹小还丹乾坤再造丹紫芝灵草天寒帽天寒戒天寒鞋天寒项链天寒手镯软甲衣金刚杖飞羽剑斩空刀拜月掌套金弹子新月棍白蟒鞭
残雪：疯魔杖毒龙鞭玉清棍生死符霹雳掌套血屠刀星河剑残雪帽残雪戒残雪鞋残雪手镯残雪项链金丝宝甲衣
明月：烈日棍西毒蛇杖冰魄银针碧磷鞭--倚天剑屠龙刀墨玄掌套明月帽明月鞋明月项链明月戒月光宝甲衣明月手镯星月大斧碧玉锤霸王枪
烈日：残阳棍伏虎杖暴雨梨花针七星鞭--诛仙剑斩神刀龙象拳套烈日帽烈日宝靴烈日宝链烈日宝戒日光宝甲衣烈日宝镯破冥斧撼魂锤赤焰枪
斩龙：开天宝棍达摩杖小李飞刀乌金玄火鞭--九天龙吟剑飞宇天怒刀天罡掌套斩龙帽斩龙宝靴斩龙宝链斩龙宝戒龙皮至尊甲衣斩龙宝镯天雷断龙斧烛幽鬼煞锤斩龙鎏金枪
胤天：胤天宝帽碎片胤天项链碎片胤天宝镯碎片胤天宝戒碎片胤天宝靴碎片胤天紫金衣碎片昊天龙旋铠碎片鱼肠碎片水羽云裳碎片奉天金带碎片凤羽乾坤盾碎片轩辕剑碎片破岳拳套碎片天雨玄镖碎片天神杖碎片轰天巨棍碎片神龙怒火鞭碎片雷霆诛神刀碎片胤武伏魔斧碎片九天灭世锤碎片玄冰凝魄枪碎片紫枫玉华环碎片
花草药材:彼岸花熙颜凤凰木洛神花君影草矢车菊忘忧草雪英夕雾草朝开暮落花晚香玉朽凌霄花百宜雪梅
*/
/*装备对应绝学备注
带棍子群伤为阵法伤害的(23.8%~29.75%)
带剑群伤为阵法伤害的(26.4%~33%)
带拳群伤为阵法伤害的(16.7%~20.9%)
对手无免伤全伤害如店小二逄义，帮副怪，直接取群伤最大值
对手有免伤如柳淳风，本7怪，闯楼怪，直接取群伤最小值
武器有剑（没剑有棍子稍微差点儿）与棍子组阵的实际单体伤害，等于阵法显示伤害的1.25倍，比如阵法显示打了4000w，实际造成的是5000w单体伤害
推荐玩法，武器带枪剑，阵法单体玩九天+燎原，附加群伤千影棍
很多技能玩枪棍的人，推荐带武器为枪剑，实测群伤为阵法伤害的1/4以上比枪棍还多点儿。枪拳群伤不行的，所以武器别带枪拳
玩棍剑的人，推荐不要玩棍拳，千影排云寒霜六脉，伤害太低了，不如千影九天寒霜棍+独孤或者真武
千影九天有暴击，黑字大概是原先的1.25倍伤害。同样属性，棍剑还没阵，棍拳有阵，经过对比，棍剑比棍拳多30%伤害
*/
buju='auto';//自定义布局右移变量（默认是自动适配，自定义请输入不带引号的数字比如100）
qlreq='----天雷断龙斧烛幽鬼煞锤斩龙鎏金枪星月大斧碧玉锤霸王枪破冥斧撼魂锤赤焰枪狂暴丹烈日棍西毒蛇杖冰魄银针碧磷鞭-倚天剑屠龙刀墨玄掌套明月帽明月鞋明月项链明月戒月光宝甲衣明月手镯烈日帽诛仙剑烈日宝戒烈日宝镯烈日宝靴烈日宝链伏虎仗七星鞭残阳棍达摩杖开天宝棍乌金玄火鞭日光宝甲衣胤天宝帽碎片胤天项链碎片胤天宝镯碎片胤天宝戒碎片胤天宝靴碎片胤天紫金衣碎片昊天龙旋铠碎片鱼肠碎片水羽云裳碎片奉天金带碎片凤羽乾坤盾碎片轩辕剑碎片破岳拳套碎片天雨玄镖碎片天神杖碎片轰天巨棍碎片神龙怒火鞭碎片雷霆诛神刀碎片胤武伏魔斧碎片九天灭世锤碎片玄冰凝魄枪碎片紫枫玉华环碎片彼岸花熙颜凤凰木洛神花君影草矢车菊忘忧草雪英夕雾草朝开暮落花晚香玉朽凌霄花百宜雪梅';
//青龙需求设置
kf_qlreq='九天龙吟剑飞宇天怒刀天罡掌套斩龙帽斩龙宝靴斩龙宝链斩龙宝戒龙皮至尊甲衣斩龙宝镯天雷断龙斧烛幽鬼煞锤斩龙鎏金枪天雷断龙斧烛幽鬼煞锤斩龙鎏金枪达摩杖开天宝棍乌金玄火鞭小李飞刀日光宝甲衣胤天宝帽碎片胤天项链碎片胤天宝镯碎片胤天宝戒碎片胤天宝靴碎片胤天紫金衣碎片昊天龙旋铠碎片鱼肠碎片水羽云裳碎片奉天金带碎片凤羽乾坤盾碎片轩辕剑碎片破岳拳套碎片天雨玄镖碎片天神杖碎片轰天巨棍碎片神龙怒火鞭碎片雷霆诛神刀碎片胤武伏魔斧碎片九天灭世锤碎片玄冰凝魄枪碎片紫枫玉华环碎片彼岸花熙颜凤凰木洛神花君影草矢车菊忘忧草雪英夕雾草朝开暮落花晚香玉朽凌霄花百宜雪梅';
//新开跨服青龙需求设置
enforcePoints = 1005;//加力点数设置
myForce = "道种心魔经";//回血内功设置
myDodge = "乾坤大挪移";//刷碎片轻功设置
ssp_site=1;//刷碎片地点设置（1234分别是醉汉，地痞，地痞，青竹蛇）
limitQixue = "180000";//出绝学时战斗中生命值低于该线自动使用内功回血
mySkillLists="九天龙吟剑法;排云掌法;雪饮狂刀";//出招表设置，可以只设置两个或者一个，两个的绝学阵
ai_chuzhao=0;//出绝学如果设置不对，自动切换成开出招
kgg_flag=0;//每次刷新网页默认会自动提示道长公告（0关闭）
quid1="11-15";//区段设置，若是新区只需要填新
ql_delay='18000';//青龙自定义延时，单位毫秒
jd_save=3000;//智能奇侠预留保底金锭（数量之下不会自动每次送15，但能执行出5次秘境模式）
skillset={//按号分类默认总设置（逗号与分号都是英文格式，从左往右逗号隔开依次是出招，内功，加力，回血下限，区段，智能奇侠预留金锭）
	"剑行":"排云掌法,茅山道术,200,10000,11-15,1000",
	"李逍遥_":"如来神掌;独孤九剑,茅山道术,700,30000,11-15,1000",
	"无☆风不起浪":"千影百伤棍;燎原百破,道种心魔经,1726,400000,51-55,默认",
	"道花1":"排云掌法,易筋经神功,500,30000,11-15,1000",
	"施工员":"九天龙吟剑法;排云掌法,道种心魔经,1425,240000,51-55,默认",
	"多☆情应笑我":"千影百伤棍;燎原百破,道种心魔经,1759,500000,51-55,默认",
	"范逸尘[84区]":"千影百伤棍;燎原百破,道种心魔经,1400,500000,1-5,默认",
	"独☆钓寒江雪":"覆雨剑法;如来神掌,道种心魔经,955,150000,1-5,默认",
	"飘过云朵":"千影百伤棍;燎原百破,道种心魔经,1937,600000,51-55,默认",
	"白大纯":"千影百伤棍;燎原百破,道种心魔经,1946,500000,51-55,默认",
};
skillset1={//按号分类默认设置一键换装的武器,分号前面的先穿，分号后面的后穿（暂只支持斩龙胤天的神兵武器）,撩奇侠的顺序（请注意武器分隔号是英文的分号，奇侠分隔号是中文的分号，武器和奇侠之间英文的逗号隔开）
	"无☆风不起浪":"玄冰凝魄枪;破岳掌套,默认",
	"多☆情应笑我":"玄冰凝魄枪;破岳掌套,步惊鸿；郭济；浪唤雨；火云邪神；逆风舞；穆妙羽；庞统；吴缜；王蓉；风南；狐苍雁；李宇飞；风行骓；护竺；玄月研；狼居胥；烈九州；宇文无敌；李玄霸；八部龙将；风无痕；厉沧若；夏岳卿；妙无心；巫夜姬",
	"范逸尘[84区]":"玄冰凝魄枪;破岳掌套,步惊鸿；郭济；浪唤雨；火云邪神；逆风舞；穆妙羽；庞统；吴缜；王蓉；风南；狐苍雁；李宇飞；风行骓；护竺；玄月研；狼居胥；烈九州；宇文无敌；李玄霸；八部龙将；风无痕；厉沧若；夏岳卿；妙无心；巫夜姬",
	"飘过云朵":"紫龙镇嶽枪;破岳掌套,默认",
	"白大纯":"紫龙镇嶽枪;天雨玄镖,默认",
	"施工员":"九天龙吟剑;天罡掌套,步惊鸿；郭济；浪唤雨；火云邪神；逆风舞；庞统；吴缜；王蓉；风南；狐苍雁；李宇飞；风行骓；护竺；玄月研；狼居胥；烈九州；穆妙羽；宇文无敌；李玄霸；八部龙将；风无痕；厉沧若；夏岳卿；妙无心；巫夜姬",
};
skillset2={//按号分类设置青龙杀人选项，托管选项,托管刷碎片地点,托管吃江湖令,托管吃帮派令,托管挂机铁血10分钟,青龙需求（0杀好1杀坏）
	"无☆风不起浪":"1,2,2,1,1,1,默认",
	"独☆钓寒江雪":"1,2,1,0,0,0,默认",
	"飘过云朵":"1,2,1,1,1,1,默认",
	"白大纯":"1,2,1,1,1,1,默认",
	"范逸尘[84区]":"1,2,4,0,0,1,默认",
	"多☆情应笑我":"1,2,3,1,1,1,默认",
	"剑行":"1,2,3,0,0,0,默认",
	"李逍遥_":"0,2,1,0,0,0,斩龙宝链斩龙宝靴斩龙宝戒天罡掌套小李飞刀星月大斧碧玉锤霸王枪破冥斧撼魂锤赤焰枪狂暴丹烈日棍冰魄银针碧磷鞭-倚天剑屠龙刀墨玄掌套明月帽明月鞋明月项链明月戒月光宝甲衣明月手镯烈日帽诛仙剑烈日宝戒烈日宝镯烈日宝靴烈日宝链伏虎仗七星鞭残阳棍彼岸花熙颜凤凰木洛神花君影草矢车菊忘忧草雪英夕雾草朝开暮落花晚香玉朽凌霄花百宜雪梅",
	"施工员":"1,2,4,0,0,0,天雷断龙斧烛幽鬼煞锤斩龙鎏金枪星月大斧碧玉锤霸王枪破冥斧撼魂锤赤焰枪狂暴丹烈日棍冰魄银针碧磷鞭-倚天剑屠龙刀墨玄掌套明月帽明月鞋明月项链明月戒月光宝甲衣明月手镯烈日帽诛仙剑烈日宝戒烈日宝镯烈日宝靴烈日宝链伏虎仗七星鞭残阳棍达摩杖开天宝棍乌金玄火鞭日光宝甲衣胤天宝帽碎片胤天项链碎片胤天宝镯碎片胤天宝戒碎片胤天宝靴碎片胤天紫金衣碎片昊天龙旋铠碎片鱼肠碎片水羽云裳碎片奉天金带碎片凤羽乾坤盾碎片轩辕剑碎片破岳拳套碎片天雨玄镖碎片天神杖碎片轰天巨棍碎片神龙怒火鞭碎片雷霆诛神刀碎片胤武伏魔斧碎片九天灭世锤碎片玄冰凝魄枪碎片紫枫玉华环碎片彼岸花熙颜凤凰木洛神花君影草矢车菊忘忧草雪英夕雾草朝开暮落花晚香玉朽凌霄花百宜雪梅",
	"道花1":"1,2,4,0,0,0,斩龙帽斩龙宝靴龙皮至尊甲衣斩龙宝镯天罡掌套小李飞刀星月大斧碧玉锤霸王枪破冥斧撼魂锤赤焰枪狂暴丹烈日棍冰魄银针碧磷鞭-倚天剑屠龙刀墨玄掌套明月帽明月鞋明月项链明月戒月光宝甲衣明月手镯烈日帽诛仙剑烈日宝戒烈日宝镯烈日宝靴烈日宝链伏虎仗七星鞭残阳棍彼岸花熙颜凤凰木洛神花君影草矢车菊忘忧草雪英夕雾草朝开暮落花晚香玉朽凌霄花百宜雪梅",
};
skillset3={//按号分类设置智能奇侠参数:智能奇侠顺序，智能奇侠模式，是否托管奇侠,是否智能换突破,换突破顺序参数,托管开青龙,托管开游侠
	"无☆风不起浪":"风南-妙无心-玄月研-八部龙将,0,1,1,千影百伤棍:40;九溪断月枪:40;破军棍诀:40;九天龙吟剑法:42;覆雨剑法:42,1,1",
	"独☆钓寒江雪":"步惊鸿-郭济-风无痕-宇文无敌,0,1,1,孔雀翎:20;天师灭神剑:13;幽影幻虚步:20,0,0",
	"多☆情应笑我":"庞统-玄月研-王蓉,0,1,1,九天龙吟剑法:42;覆雨剑法:40;排云掌法:40;如来神掌:40;金刚不坏功:7;九阳神功:9;太极神功:10;拈花解语鞭:20;捆仙鞭法:14;十怒绞龙索:20,1,1",
	"剑行":"默认,0,1,1,排云掌法:20;真武七截剑:13;如来神掌:20;霜寒十四棍:14;乾坤大挪移:15;易筋经神功:15,1,1",
	"李逍遥_":"默认,0,1,1,无相金刚掌:14;八荒功:15;九阴噬骨刀:15;真武七截剑:13,1,1",
	"道花1":"默认,0,1,1,排云掌法:20;黯然销魂掌:14;斗战棍典:15;易筋经神功:15,1,1",
	"施工员":"默认,0,1,1,霜寒十四棍:14;斗战棍典:15;真武七截剑:13;幽影幻虚步:20;九溪断月枪:20,0,0",
	"飘过云朵":"默认,0,1,1,九天龙吟剑法:42;覆雨剑法:40;破军棍诀:40;拈花解语鞭:40,1,1",
	"白大纯":"默认,0,1,1,孔雀翎:40;飞刀绝技:40;排云掌法:40;如来神掌:40,1,1",
	"范逸尘[84区]":"默认,0,1,1,碧血心法:15;天波九转:12;九天龙吟剑法:42;覆雨剑法:40;金刚不坏功:7;九阳神功:9;太极神功:10;真武七截剑:12;帝王剑法:10,0,0",
};
skillset4={//按号分类设置帮购物开关，帮购物清单
	"无☆风不起浪":"1,默认",
	"多☆情应笑我":"1,默认",
	"范逸尘[84区]":"1,默认",
	"飘过云朵":"1,空识卷轴;隐武竹筏",
	"白大纯":"1,空识卷轴;狗年礼券;隐武竹筏",
};
tuoguan=2;//可设置0，1，2；0表示关闭托管，1表示开启托管定时完成任务，2表示托管时自动进行的点vip操作会额外点掉钓鱼和排行榜
tuoguantime="6:5";//自动执行托管任务的24小时制时间（注意，时间设置的分钟数如果小于10，前面不用加0，比如3:08不对，应该3:8;托管功能只有授权用户可用，其他用户设置了也没用）
ql_killset = 1;// 托管模式青龙杀人选项 0为杀好人  1为杀恶人
vipzx=1;//默认定时早上5.55点正邪20次，0为关闭，1为点正，2为点邪
tupojiasu=1;//续突破是否使用加速卡，1表示续的时候顺带加速，0默认关闭加速。本功能暂在开发中,推荐在一江湖与一绝学双突时候开启
yc_flag=0;//远程控制开关，仅授权用户有效（0默认关闭，1默认开启）
buything=1;//是否每天定时自动使用开发者帮派购物功能（消耗帮派活跃度），0表示关闭定时自动，关闭后可在开发者选项手动使用
buythinglist='引路蜂;突破丹;保险卡;高级突破丹;谜题令;空识卷轴';//帮派购物清单(用分号隔开)
tg_pt=1;//托管模式是否每天自动完成拼图任务(0关闭,1只生效pintuhao里面的授权号，2生效所有挂此脚本的授权用户)
tg_ptdingshi='0;0:30;无☆风不起浪-多☆情应笑我';//定时独立托管拼图（开关,时间,角色）
tg_ql=1;//托管模式是否每天自动开青龙
tg_yx=1;//托管模式是否每天自动开游侠
tgeat_jhl=0;//托管模式是否每天自动吃江湖令
tgeat_bpl=1;//托管模式是否每天自动吃帮派令
tggj_tiexue=0;//托管铁血阿不烽火处挂机
pintuhao="施工员-无☆风不起浪-多☆情应笑我-飘过云朵";//托管拼图生效的号（英文-号隔开）
tg_rc=1;//托管模式是否每天自动购买日常任务（花费70元宝获得400w左右潜能）
pifu=0;//初始默认皮肤(0-4)
autozx="23:10;5:50;剑行;1";//自动刷正邪定时开启时间;定时关闭时间;刷正邪的号名字;0杀恶人，1杀好人
qxList_inputs = "步惊鸿；浪唤雨；逆风舞；庞统；火云邪神；郭济；吴缜；王蓉；风南；狐苍雁；李宇飞；风行骓；护竺；玄月研；狼居胥；烈九州；穆妙羽；宇文无敌；李玄霸；八部龙将；风无痕；厉沧若；夏岳卿；妙无心；巫夜姬";
//默认撩奇侠顺序
aiqx_order="郭济-火云邪神-风无痕-宇文无敌-厉沧若-穆妙羽-妙无心-八部龙将-巫夜姬-玄月研-夏岳卿-狼居胥-烈九州-李玄霸";//默认智能奇侠亲密顺序
ai_tupolist="九天龙吟剑法:21;如来神掌:20;排云掌法:20;道种心魔经:21;千影百伤棍:20;燎原百破:20;破军棍诀:20;";//智能换突破及默认次数设置
tf_killlist="段老大-二娘-岳老三-云老四,段老大";//逃犯需求：本服,跨服 （只设置恶人名字，杀人选项靠开逃犯开关控制）
ai_autotupo=0;//智能换突破开关
aiqx_mode=1;//默认智能奇侠模式：0表示出4次秘境，1表示出5次秘境
tg_qx=0;//默认托管模式是否智能奇侠
autoqixia="0,火云邪神,0,1";//默认：全自动奇侠开关,亲密奇侠名字,奇侠模式（0表示手动对话或者比试打奇侠小号1表示赠送1个金锭2表示全部送15金锭）,秘境触发次数(0表示4次1表示5次)
autopifu=1;//自动随时间换皮肤
banxiaohao="流浪-道花2-道花3-天下第1";//禁止自动打坐睡觉签到的号（可用于挂飞机本自动组队，避免自己跑出副本，也可用于打奇侠大号开奇侠自动切磋）
Enemylist = "[1]阿不;[1]魏娇;[1]绕指·云;[1]末日召唤;[1]抓狂;[1]绘羽;[1]~陌上花开~;[1]南英;[1]李寻花;[1]奈何离歌;[1]纵横老野猪;";//默认敌人设置
Friendlist = "[21]路人甲◆孤傲;[21]男主角◆番茄;[21]出品人◆风云;[21]临记◆卫芷泫;[21]制片人◆戏雨;[21]凌少;[21]空城◆旧梦;[21]春不老◆青木;[1]阿不;[1]纵横老野猪;[1]无头苍蝇;[1]欢乐剑客;[1]~陌上花开~;[1]李寻花;[1]凉城惜暖玉;[1]地府-摩诃王;[2]板砖;[2]陳小神;[7]小飞;[7]冷泉心影;[12]一炮泯恩仇;[1]寒夜·斩;[4]【人间】不舍;[1]魏娇;[4]十方禅师;[1]烽火戲诸侯;[4]【人间】雨修;";
//默认大佬，盟友设置
//注意：托管模式只对授权用户生效，会在指定时间完成托管任务过后，自动开启青龙游侠功能

//警告：以下区域不可改动！！！
var encode_version = 'sojson.v4';var __0x27f15=['JsOUw6PDtXTCjcKLFRzDjsOPdkPCpsOIMV8DwrzDkQnCpG3DqRzDmDtxQD89wrTDihw0DgxFNmTCusKyw7NPw5N1McOXbcK0IsO/wrVqSSxbw73Dl2pvwotVw5LCp8KgYsOlTGoSe8OMw5XCgTvCrsOCAsOaITTChcKqw74=','wrTDpEnCgE5OwpVuwqzDsSNP','Az04B0R1w7lH','M0rDmw==','wozDvMOZQkXDj2I=','wrUHw6wEwr8=','SgTCtsKEdcKDJ8Klwq9BQyfDvSoeH0M5wqsawrvCljFZw5XDuMOnHA8JWMO8dcOIw7XDhwJ5FUBtw7zCvsOqYn3CnQ7DsMKlZQYDw4fDpSFcwqfDtMK0wogTJcO5w70ywrYUw4dAwrzCpcKoPMKtwro/ZsKRw6NcKMO/cj1Dw5/CoMKSA0rDhT/DjAJ1LMKcw5/Dsl3DoTEOeUvDvMO8w5Qnw44FwqrDk8OtcMOZ','wpYiU8OOw4DCiV/DvCDChMOHfx0Zwo3DrcKcwo8CFydzw7gSw7LCiMOaw5TCn0jCusOLwqwuE37CmMKReCNawqgmcMK9wqTCiGPCn18pP3BSMWvDryBBw4DCjMOoAcOBw77DsMKEwp7CssKyDwXCnMKVwpEaw6/Dm2gHwrAawp8BwokqwrnDoATDuHtgwp5IXmxewqDDo8ODPw3DungqwqLDp2fCtWfCsCtkPAg2McKMVsK0w4kiw6DCuiPCkyovw4tnf1hpw4/CjR8WDGRuwoPDggFUw4dZw6DCssOJe8OrRcOcQcKDOkLCgS4gJ8O8w4fDqMOjw6HCp8KHw496w6tJGWjDssO9GMK/wrLDjWnDvcO0w4VOwr04w63CrcKowrjCisOhTT4iJzLDpjAfwoMrw4XCkhfCpsOTw4/DmcOFwprDri8nwonDnDgCe309Y8O9TiPDinvCnMOMGcKwQMKOwqhQHCkIR8KjLsKOwrldb1bDpC9SV1ZyJMO/NSvCuMO8UMO7VQ=='];(function(_0x328f05,_0xf5ee39){var _0x1fcbe0=function(_0x547cd7){while(--_0x547cd7){_0x328f05['push'](_0x328f05['shift']());}};_0x1fcbe0(++_0xf5ee39);}(__0x27f15,0x89));var _0x27a6=function(_0x546660,_0x9a0d19){_0x546660=_0x546660-0x0;var _0x568672=__0x27f15[_0x546660];if(_0x27a6['initialized']===undefined){(function(){var _0x1262ad=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x143873='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1262ad['atob']||(_0x1262ad['atob']=function(_0x14a439){var _0x1185c5=String(_0x14a439)['replace'](/=+$/,'');for(var _0x8c949a=0x0,_0x195835,_0x308dc7,_0x1f622e=0x0,_0x61a9ae='';_0x308dc7=_0x1185c5['charAt'](_0x1f622e++);~_0x308dc7&&(_0x195835=_0x8c949a%0x4?_0x195835*0x40+_0x308dc7:_0x308dc7,_0x8c949a++%0x4)?_0x61a9ae+=String['fromCharCode'](0xff&_0x195835>>(-0x2*_0x8c949a&0x6)):0x0){_0x308dc7=_0x143873['indexOf'](_0x308dc7);}return _0x61a9ae;});}());var _0x669305=function(_0x42fbf6,_0x17ce0a){var _0xdb20e1=[],_0xf8ead7=0x0,_0x43469f,_0xa6344e='',_0xd996b3='';_0x42fbf6=atob(_0x42fbf6);for(var _0x3b2fec=0x0,_0x41f193=_0x42fbf6['length'];_0x3b2fec<_0x41f193;_0x3b2fec++){_0xd996b3+='%'+('00'+_0x42fbf6['charCodeAt'](_0x3b2fec)['toString'](0x10))['slice'](-0x2);}_0x42fbf6=decodeURIComponent(_0xd996b3);for(var _0x3ebcbd=0x0;_0x3ebcbd<0x100;_0x3ebcbd++){_0xdb20e1[_0x3ebcbd]=_0x3ebcbd;}for(_0x3ebcbd=0x0;_0x3ebcbd<0x100;_0x3ebcbd++){_0xf8ead7=(_0xf8ead7+_0xdb20e1[_0x3ebcbd]+_0x17ce0a['charCodeAt'](_0x3ebcbd%_0x17ce0a['length']))%0x100;_0x43469f=_0xdb20e1[_0x3ebcbd];_0xdb20e1[_0x3ebcbd]=_0xdb20e1[_0xf8ead7];_0xdb20e1[_0xf8ead7]=_0x43469f;}_0x3ebcbd=0x0;_0xf8ead7=0x0;for(var _0x399d61=0x0;_0x399d61<_0x42fbf6['length'];_0x399d61++){_0x3ebcbd=(_0x3ebcbd+0x1)%0x100;_0xf8ead7=(_0xf8ead7+_0xdb20e1[_0x3ebcbd])%0x100;_0x43469f=_0xdb20e1[_0x3ebcbd];_0xdb20e1[_0x3ebcbd]=_0xdb20e1[_0xf8ead7];_0xdb20e1[_0xf8ead7]=_0x43469f;_0xa6344e+=String['fromCharCode'](_0x42fbf6['charCodeAt'](_0x399d61)^_0xdb20e1[(_0xdb20e1[_0x3ebcbd]+_0xdb20e1[_0xf8ead7])%0x100]);}return _0xa6344e;};_0x27a6['rc4']=_0x669305;_0x27a6['data']={};_0x27a6['initialized']=!![];}var _0x32d3ce=_0x27a6['data'][_0x546660];if(_0x32d3ce===undefined){if(_0x27a6['once']===undefined){_0x27a6['once']=!![];}_0x568672=_0x27a6['rc4'](_0x568672,_0x9a0d19);_0x27a6['data'][_0x546660]=_0x568672;}else{_0x568672=_0x32d3ce;}return _0x568672;};eval(function(_0x3c376c,_0x3714ca,_0x21c1ee,_0x10aaf6,_0x14f553,_0x2d0a19){_0x14f553=function(_0xe13677){return(_0xe13677<_0x3714ca?'':_0x14f553(parseInt(_0xe13677/_0x3714ca)))+((_0xe13677=_0xe13677%_0x3714ca)>0x23?String[_0x27a6('0x0','MF#m')](_0xe13677+0x1d):_0xe13677[_0x27a6('0x1','Nb%N')](0x24));};if(!''['replace'](/^/,String)){while(_0x21c1ee--)_0x2d0a19[_0x14f553(_0x21c1ee)]=_0x10aaf6[_0x21c1ee]||_0x14f553(_0x21c1ee);_0x10aaf6=[function(_0x49bfa4){return _0x2d0a19[_0x49bfa4];}];_0x14f553=function(){return _0x27a6('0x2','vYYw');};_0x21c1ee=0x1;};while(_0x21c1ee--)if(_0x10aaf6[_0x21c1ee])_0x3c376c=_0x3c376c[_0x27a6('0x3','7uBT')](new RegExp('\x5cb'+_0x14f553(_0x21c1ee)+'\x5cb','g'),_0x10aaf6[_0x21c1ee]);return _0x3c376c;}('2h(23(d,e,a,c,b,f){b=23(a){22(a<e?\x22\x22:b(2f(a/e)))+(2g<(a%=e)?27.28(a+29):a.2c(2d))};2e(!\x22\x22.26(/^/,27)){24(;a--;)f[b(a)]=c[a]||b(a);c=[23(a){22\x20f[a]}];b=23(){22\x22\x5c\x5cw+\x22};a=1}24(;a--;)c[a]&&(d=d.26(2a\x202b(\x22\x5c\x5cb\x22+b(a)+\x22\x5c\x5cb\x22,\x22g\x22),c[a]));22\x20d}(\x221H(1s(p,a,c,k,e,r){e=1s(c){1t(c<a?\x27\x27:e(1F(c/a)))+((c=c%a)>1G?1x.1y(c+1A):c.1D(1E))};1w(!\x27\x27.1v(/^/,1x)){1u(c--)r[e(c)]=k[c]||e(c);k=[1s(e){1t\x20r[e]}];e=1s(){1t\x27\x5c\x5c\x5c\x5cw+\x27};c=1};1u(c--)1w(k[c])p=p.1v(1B\x201C(\x27\x5c\x5c\x5c\x5cb\x27+e(c)+\x27\x5c\x5c\x5c\x5cb\x27,\x27g\x27),k[c]);1t\x20p}(\x2713(U(d,e,a,c,b,f){b=U(a){V(a<e?\x5c\x22\x5c\x22:b(1a(a/e)))+(17<(a%=e)?Y.14(a+1b):a.Z(18))};12(!\x5c\x22\x5c\x22.X(/^/,Y)){W(;a--;)f[b(a)]=c[a]||b(a);c=[U(a){V\x20f[a]}];b=U(){V\x5c\x22\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5cw+\x5c\x22};a=1}W(;a--;)c[a]&&(d=d.X(10\x2011(\x5c\x22\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5cb\x5c\x22+b(a)+\x5c\x22\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5cb\x5c\x22,\x5c\x22g\x5c\x22),c[a]));V\x20d}(\x5c\x22B(s(p,a,c,k,e,r){e=s(c){q\x20c.A(a)};t(!\x5c\x5c\x27\x5c\x5c\x27.u(/^/,v)){x(c--)r[e(c)]=k[c]||e(c);k=[s(e){q\x20r[e]}];e=s(){q\x5c\x5c\x27\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5cw+\x5c\x5c\x27};c=1};x(c--)t(k[c])p=p.u(C\x20D(\x5c\x5c\x27\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5cb\x5c\x5c\x27+e(c)+\x5c\x5c\x27\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5c\x5cb\x5c\x5c\x27,\x5c\x5c\x27g\x5c\x5c\x27),k[c]);q\x20p}(\x5c\x5c\x27d=7.3(\x5c\x5c\x5c\x5c\x5c\x22:\x5c\x5c\x5c\x5c\x5c\x22)[0];n=7.3(\x5c\x5c\x5c\x5c\x5c\x22:\x5c\x5c\x5c\x5c\x5c\x22)[1];f=\x5c\x5c\x5c\x5c\x5c\x22[\x5c\x5c\x5c\x5c\x5c\x22+g+\x5c\x5c\x5c\x5c\x5c\x22\x5c\x5c\x5c\x5c1d]\x5c\x5c\x5c\x5c\x5c\x22;h=\x5c\x5c\x5c\x5c\x5c\x22j\x5c\x5c\x5c\x5c\x5c\x22;k=l;9=b(a){a=e(a);4\x20c=5.6(a.2(0)-a.8);m(4\x20i=1;i<a.8;i++){c+=5.6(a.2(i)-c.2(i-1))}o\x20c}\x5c\x5c\x27,z,z,\x5c\x5c\x27||E|y|F|v|G|H|I|J||s||K|L|M|N|O||P|Q|R|S|T|q\x5c\x5c\x27.y(\x5c\x5c\x27|\x5c\x5c\x27),0,{}))\x5c\x22,15,15,\x5c\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20V\x20\x20U\x2012\x20X\x20Y\x20\x201c\x2016\x201e\x20Z\x2013\x2010\x2011\x201f\x201g\x2014\x201h\x201i\x201j\x201k\x201l\x201m\x201n\x201o\x201p\x201q\x201r\x20W\x2019\x5c\x22.16(\x5c\x22\x20\x5c\x22),0,{}));\x27,1I,1J,\x27||||||||||||||||||||||||||||||||||||||||||||||||||||||||1s|1t|1K|1v|1x|1D|1B|1C|1w|1H|1y|1L|1z|1G|1E|1M|1F|1A|1u|1N|1O|1P|1Q|1R|1S|1T|1U|1V|1W|1X|1Y|1Z|20|21\x27.1z(\x27|\x27),0,{}))\x22,2i,2l,\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2023\x2022\x202m\x2026\x202e\x2027\x2028\x202j\x2029\x202a\x202b\x202c\x202d\x202f\x202g\x202h\x202i\x202n\x2024\x202o\x202p\x202q\x2025\x202r\x202s\x202t\x202u\x202v\x202w\x202x\x202y\x202z\x202A\x202B\x202C\x202k\x22.2j(\x22\x20\x22),0,{}));',0x3e,0xa3,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||return|function|for||replace|String|fromCharCode||new|RegExp|toString|36|if|parseInt|35|eval|62|split|qlreq|126|while|90|56|tuoguanm|u533a|charCodeAt|var|tuoguantime|length|uncompile|tuoguanh|unescape|quid|quid1|myName|undefined|qlrob'[_0x27a6('0x4','joKb')]('|'),0x0,{}));eval(uncompile(_0x27a6('0x5','vYYw')));eval(uncompile(_0x27a6('0x6',']2Lj')));eval(uncompile(_0x27a6('0x7','31PS')));;encode_version = 'sojson.v4';