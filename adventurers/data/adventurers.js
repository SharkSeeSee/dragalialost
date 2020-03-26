//筛选角色
function filterAll(adlist, raritys, elements, weapons, effects, resWords, isRestriction, isBreak) {
    // body...
    var result = [];

    if (raritys.length == 0) {
        raritys = ["5", "4", "3"];
    }

    if (elements.length == 0) {
        elements = ['Fire', 'Water', 'Wind', 'Light', 'Shadow'];
    }

    if (weapons.length == 0) {
        weapons = ['Sword', 'Blade', 'Dagger', 'Axe', 'Lance', 'Bow', 'Wand', 'Staff'];
    }

    if (resWords.length == 0) {
        resWords = ['ablilities_101', 'ablilities_102', 'ablilities_105', 'ablilities_109', 'ablilities_110', 'ablilities_114', 'ablilities_115', 'ablilities_118', 'ablilities_119'];
    }

    resWords = resExpand(resWords);

    console.log(resWords);

    for (var key in adlist) {

        if (raritys.indexOf(adlist[key].rarity.toString()) > -1 && weapons.indexOf(adlist[key].weapon) > -1 
            && elements.indexOf(adlist[key].element) > -1 && resWords.indexOf(adlist[key].ability2[0]) > -1) {

            result.push(adlist[key]);

        }
    }

    if (effects.length != 0) {
        for (var key in result) {
            for (var i = 0; i < effects.length; i++) {
                var teffect = result[key].skilleffects;
                if (teffect.indexOf(effects[i]) == -1) {
                    delete result[key];
                    break;
                }
            }
        }
    }

    if (isRestriction == true) {
        for (var key in result) {
            if (result[key].restriction == false) {
                delete result[key];
            }
        }
    }

    if (isBreak == true) {
        for (var key in result) {
            if (result[key].maxlevel != 100) {
                delete result[key];
            }
        }
    }

    return result;
}

function resExpand(resWords) {

    var result = [];

    for (var i = 0; i < resWords.length; i++) {
        switch (resWords[i]) {
            case 'ablilities_101':
                result.push('ablilities_101');
                result.push('ablilities_103');
                result.push('ablilities_104');
                break;
            case 'ablilities_102':
                result.push('ablilities_100');
                result.push('ablilities_102');
                result.push('ablilities_104');
                result.push('ablilities_107');
                break;
            case 'ablilities_105':
                result.push('ablilities_105');
                result.push('ablilities_106');
                result.push('ablilities_108');
                break;
            case 'ablilities_109':
                result.push('ablilities_109');
                result.push('ablilities_111');
                result.push('ablilities_112');
                break;
            case 'ablilities_110':
                result.push('ablilities_110');
                result.push('ablilities_111');
                result.push('ablilities_113');
                break;
            case 'ablilities_114':
                result.push('ablilities_114');
                result.push('ablilities_116');
                result.push('ablilities_117');
                break;
            case 'ablilities_115':
                result.push('ablilities_115');
                result.push('ablilities_117');
                break;
            case 'ablilities_118':
                result.push('ablilities_118');
                result.push('ablilities_120');
                result.push('ablilities_121');
                break;
            case 'ablilities_119':
                result.push('ablilities_119');
                result.push('ablilities_121');
                break;
        }
    }
    return result;
}
//抗性转换
function resfilter(adslist, resWords) {
    // body...
    const filterwords = {
        'ablilities_101': ['ablilities_101', 'ablilities_102'],
    }

    var result = [];



    for (var i = Things.length - 1; i >= 0; i--) {
        Things[i]
    }

    filterwords.filter
}

// 添加角色列表
function add_item(list, dragons, wyrmprints) {
    var div1 = document.getElementById('role-list');

    for (var key in list) {

        var div2 = document.createElement("div");

        div2.setAttribute('id', key);
        div2.setAttribute('class', 'item-content');

        div1.appendChild(div2);

        //图

        var div_left = document.createElement("div");

        var button1 = document.createElement('picture');

        button1.setAttribute('class', 'image-button');

        var source1 = document.createElement('source');

        source1.setAttribute('srcset', './images/adventures/' + list[key].image + '.webp');
        source1.setAttribute('type', 'image/webp');

        var img1 = document.createElement('img');

        img1.setAttribute('data-original', './images/adventures/' + list[key].image + '.png');
        img1.setAttribute('alt', list[key].name);
        img1.setAttribute('title', list[key].name);
        img1.setAttribute('loading', 'auto');

        button1.appendChild(source1);
        button1.appendChild(img1);

        div_left.appendChild(button1);

        //文
        var div_mid = document.createElement("div");
        div_mid.setAttribute('style', 'width:100px;height:auto;margin-top:5px;');

        var div3 = document.createElement("div");
        var div4 = document.createElement("div");

        div3.setAttribute('class', 'ads-name');
        div3.setAttribute('style', 'font-weight:600;text-align: left;margin:5px;');
        div3.innerText = list[key].name;

        div4.setAttribute('class', 'res-name');
        div4.setAttribute('style', 'text-align: left;margin:5px 5px 5px 5px;height:20px;');
        div4.innerText = list[key].res;

        div_mid.appendChild(div3);
        div_mid.appendChild(div4);

        //抗性 EX
        if (list[key].ability1 && list[key].ability2) {
            var div_ex = document.createElement("div");
            div_ex.setAttribute('class', 'ex-list');
            div_ex.setAttribute('style', 'width:100px;height:25px;display:flex;');

            var div_ex_1 = document.createElement("div");
            div_ex_1.setAttribute('class', 'ex-item');
            div_ex_1.setAttribute('style', 'width:25px;height:25px;');

            var ex_pic_1 = document.createElement('picture');
            ex_pic_1.setAttribute('style', 'width:25px;height:25px;');

            var ex_source_1 = document.createElement('source');

            ex_source_1.setAttribute('srcset', './images/other/' + list[key].ability1[0] + '.webp');
            ex_source_1.setAttribute('type', 'image/webp');

            var ex_img_1 = document.createElement('img');

            ex_img_1.setAttribute('data-original', './images/other/' + list[key].ability1[0] + '.png');
            ex_img_1.setAttribute('alt', list[key].ability1[1]);
            ex_img_1.setAttribute('title', list[key].ability1[1]);
            ex_img_1.setAttribute('loading', 'auto');

            ex_pic_1.appendChild(ex_source_1);
            ex_pic_1.appendChild(ex_img_1);
            div_ex_1.appendChild(ex_pic_1);

            var div_ex_2 = document.createElement("div");
            div_ex_2.setAttribute('class', 'ex-item');
            div_ex_2.setAttribute('style', 'width:25px;height:25px;margin-left:5px;');

            var ex_pic_2 = document.createElement('picture');
            ex_pic_2.setAttribute('style', 'width:25px;height:25px;');

            var ex_source_2 = document.createElement('source');

            ex_source_2.setAttribute('srcset', './images/other/' + list[key].ability2[0] + '.webp');
            ex_source_2.setAttribute('type', 'image/webp');

            var ex_img_2 = document.createElement('img');

            ex_img_2.setAttribute('data-original', './images/other/' + list[key].ability2[0] + '.png');
            ex_img_2.setAttribute('alt', list[key].ability2[1]);
            ex_img_2.setAttribute('title', list[key].ability2[1]);
            ex_img_2.setAttribute('loading', 'auto');

            ex_pic_2.appendChild(ex_source_2);
            ex_pic_2.appendChild(ex_img_2);
            div_ex_2.appendChild(ex_pic_2);

            div_ex.appendChild(div_ex_1);
            div_ex.appendChild(div_ex_2);
            div_mid.appendChild(div_ex);
        }

        var div_right = document.createElement("div");
        div_right.setAttribute('style', 'margin-top:5px;');

        var div5 = document.createElement("div");
        var div6 = document.createElement("div");

        if (list[key].restriction) {
            div5.setAttribute('class', 'restriction');
            div5.setAttribute('style', 'width:40px;height:20px;background-color:red;border-radius:5px;font-size:14px;color:white;text-align:center;line-height:20px;');
            div5.innerText = "限定";
        } else {
            div5.setAttribute('class', 'restriction');
            div5.setAttribute('style', 'width:40px;height:20px;background-color:#0099FF;border-radius:5px;font-size:14px;color:white;text-align:center;line-height:20px;');
            div5.innerText = "普池";
        }

        div_right.appendChild(div5);

        if (list[key].maxlevel == 100) {
            div6.setAttribute('class', 'maxlevel');
            div6.setAttribute('style', 'width:40px;height:20px;background-color:red;border-radius:5px;font-size:14px;color:white;text-align:center;line-height:20px;margin-top:10px;');
            div6.innerText = "70环";
            div_right.appendChild(div6);
        }

        div2.appendChild(div_left);
        div2.appendChild(div_mid);
        div2.appendChild(div_right);
    }

    $('img').lazyload({ effect: "fadeIn", threshold: 200, container: $("#role-list") });

    bindEvent(list, dragons, wyrmprints);

}

//绑定按键
function bindEvent(list, dragons, wyrmprints) {
    $(".item-content").unbind();

    $(".item-content").each(function(index, el) {
        el.onclick = function() {
            var rid = $(this).attr('id');
            swal({
                text: list[rid].name + "    昵称:" + list[rid].nickname,
                content: showAlertView(list[rid], dragons, wyrmprints),
            });
        }
    });
}

//弹出框
function showAlertView(keyDic, dragons, wyrmprints) {
    console.log(wyrmprints);
    // body...
    var tdiv = document.createElement('div');

    tdiv.setAttribute('class', 'alert-view');

    var ndiv = document.createElement('div');
    ndiv.setAttribute('style', 'display:flex;flex-direction:row;');
    tdiv.appendChild(ndiv);
    //推荐龙
    var bdiv_1 = document.createElement('div');
    bdiv_1.setAttribute('style', 'background-color:white;width:145px;height:120px;text-align:center;');

    var div_1 = document.createElement('div');
    div_1.setAttribute('style', 'font-size:16px;font-weight:bold;text-align:left;');
    div_1.innerText = '推荐龙:';

    var div_dragon = document.createElement('div');

    var pic_1 = document.createElement('picture');
    pic_1.setAttribute('style', 'width:100px;height:100px;');

    var source_1 = document.createElement('source');

    source_1.setAttribute('srcset', './images/dragon/' + dragons[keyDic.dragon].icon + '.webp');
    source_1.setAttribute('type', 'image/webp');

    var img_1 = document.createElement('img');

    img_1.setAttribute('src', './images/dragon/' + dragons[keyDic.dragon].icon + '.png');
    img_1.setAttribute('alt', dragons[keyDic.dragon].name);
    img_1.setAttribute('title', dragons[keyDic.dragon].name);
    img_1.setAttribute('loading', 'auto');
    img_1.setAttribute('style', 'width:100px;height:100px;');

    pic_1.appendChild(source_1);
    pic_1.appendChild(img_1);

    var div_d_text = document.createElement('div');
    div_d_text.setAttribute('style', 'text-align:center;');
    div_d_text.innerText = dragons[keyDic.dragon].name;

    div_dragon.appendChild(pic_1);
    div_dragon.appendChild(div_d_text);

    bdiv_1.appendChild(div_1);
    bdiv_1.appendChild(div_dragon);

    //推荐护符
    var bdiv_2 = document.createElement('div');
    bdiv_2.setAttribute('style', 'background-color:white;width:290px;height:120px;text-align:left;');

    var div_2 = document.createElement('div');
    div_2.setAttribute('style', 'font-size:16px;font-weight:bold;');
    div_2.innerText = '推荐护符(请根据实际变更):';

    var div_3 = document.createElement('div');
    //1号护符

    var div_hf_1 = document.createElement('div');
    div_hf_1.setAttribute('style', 'float:left;width:130px;text-align:center;');

    var pic_2 = document.createElement('picture');
    pic_2.setAttribute('style', 'width:100px;height:100px;');

    var source_2 = document.createElement('source');

    source_2.setAttribute('srcset', './images/hf/' + wyrmprints[keyDic.hf1].img + '.webp');
    source_2.setAttribute('type', 'image/webp');

    var img_2 = document.createElement('img');

    img_2.setAttribute('src', './images/hf/' + wyrmprints[keyDic.hf1].img + '.webp');
    img_2.setAttribute('alt', wyrmprints[keyDic.hf1].name);
    img_2.setAttribute('title', wyrmprints[keyDic.hf1].name);
    img_2.setAttribute('loading', 'auto');
    img_2.setAttribute('style', 'width:100px;height:100px;');

    pic_2.appendChild(source_2);
    pic_2.appendChild(img_2);

    var div_text_1 = document.createElement('div');
    div_text_1.setAttribute('style', 'text-align:center;');
    div_text_1.innerText = wyrmprints[keyDic.hf1].name;

    div_hf_1.appendChild(pic_2);
    div_hf_1.appendChild(div_text_1);

    //2号护符
    var div_hf_2 = document.createElement('div');
    div_hf_2.setAttribute('style', 'float:left;width:130px;text-align:center;margin-left:20px;');

    var pic_3 = document.createElement('picture');
    pic_3.setAttribute('style', 'width:100px;height:100px;');

    var source_3 = document.createElement('source');

    source_3.setAttribute('srcset', './images/hf/' + wyrmprints[keyDic.hf2].img + '.webp');
    source_3.setAttribute('type', 'image/webp');

    var img_3 = document.createElement('img');

    img_3.setAttribute('src', './images/hf/' + wyrmprints[keyDic.hf2].img + '.webp');
    img_3.setAttribute('alt', wyrmprints[keyDic.hf2].name);
    img_3.setAttribute('title', wyrmprints[keyDic.hf2].name);
    img_3.setAttribute('loading', 'auto');
    img_3.setAttribute('style', 'width:100px;height:100px;');

    pic_3.appendChild(source_3);
    pic_3.appendChild(img_3);

    var div_text_2 = document.createElement('div');
    div_text_2.setAttribute('style', 'text-align:center;');
    div_text_2.innerText = wyrmprints[keyDic.hf2].name;

    div_hf_2.appendChild(pic_3);
    div_hf_2.appendChild(div_text_2);

    div_3.appendChild(div_hf_1);
    div_3.appendChild(div_hf_2);

    bdiv_2.appendChild(div_2);
    bdiv_2.appendChild(div_3);

    ndiv.appendChild(bdiv_1);
    ndiv.appendChild(bdiv_2);
    //技能表格

    // var mtable = document.createElement('table');
    // mtable.setAttribute('style', 'margin-top:10px;');
    // mtable.setAttribute('border', '1');

    // var tr_1 = document.createElement('tr');
    // var tr_2 = document.createElement('tr');
    // var tr_3 = document.createElement('tr');
    // var tr_4 = document.createElement('tr');

    // mtable.appendChild(tr_1);
    // mtable.appendChild(tr_2);
    // mtable.appendChild(tr_3);
    // mtable.appendChild(tr_4);

    // var td_1 = document.createElement('td');
    // td_1.innerText = '技能一    Lv.Max';
    // td_1.setAttribute('width', '350px');
    // td_1.setAttribute('height', '30px');
    // td_1.setAttribute('align', 'left');
    // td_1.setAttribute('style', 'background-color:red;color:white;');

    // var td_2 = document.createElement('td');
    // td_2.setAttribute('width', '350px');
    // td_2.setAttribute('height', '100px');
    // td_2.setAttribute('align', 'left');
    // td_2.innerText = keyDic.skill1;

    // var td_3 = document.createElement('td');
    // td_3.innerText = '技能二    Lv.Max';
    // td_3.setAttribute('width', '350px');
    // td_3.setAttribute('height', '30px');
    // td_3.setAttribute('align', 'left');
    // td_3.setAttribute('style', 'background-color:red;color:white;');

    // var td_4 = document.createElement('td');
    // td_4.setAttribute('width', '350px');
    // td_4.setAttribute('height', '100px');
    // td_4.setAttribute('align', 'left');
    // td_4.innerText = keyDic.skill2;

    // tr_1.appendChild(td_1);
    // tr_2.appendChild(td_2);
    // tr_3.appendChild(td_3);
    // tr_4.appendChild(td_4);

    // tdiv.appendChild(mtable);

    return tdiv;

}

export function initAds(adventurers_3, adventurers_4, adventurers_5, dragons, wyrmprints) {

    var adventurers = Object.assign(adventurers_3, adventurers_4, adventurers_5);
    var weaponWords = [];
    var elementWords = [];
    var rarityWords = [];
    var effectWords = [];
    var resWords = [];
    var isRes = false;
    var isBreak = false;
    var result;

    add_item(adventurers, dragons, wyrmprints);

    $("input[name='Rarity']").each(function(index, el) {

        console.log($(this));
        $(this).on('change', function(event) {
            /* Act on the event */
            if ($(this).is(':checked')) {
                rarityWords.push($(this).attr('value'));
            } else {
                var t = $.inArray($(this).attr('value'), rarityWords);
                rarityWords.splice(t, 1);
            }
            result = filterAll(adventurers, rarityWords, elementWords, weaponWords, resWords, effectWords, isRes, isBreak);
            $('#role-list').empty();
            add_item(result, dragons, wyrmprints);
        });
    });

    $("input[name='Element']").each(function(index, el) {
        $(this).on('change', function(event) {
            /* Act on the event */
            if ($(this).is(':checked')) {
                elementWords.push($(this).attr('value'));
            } else {
                var t = $.inArray($(this).attr('value'), elementWords);
                elementWords.splice(t, 1);
            }
            result = filterAll(adventurers, rarityWords, elementWords, weaponWords, resWords, effectWords, isRes, isBreak);
            $('#role-list').empty();
            add_item(result, dragons, wyrmprints);
        });
    });

    $("input[name='Weapon']").each(function(index, el) {
        $(this).on('change', function(event) {
            /* Act on the event */
            if ($(this).is(':checked')) {
                weaponWords.push($(this).attr('value'));
            } else {
                var t = $.inArray($(this).attr('value'), weaponWords);
                weaponWords.splice(t, 1);
            }
            result = filterAll(adventurers, rarityWords, elementWords, weaponWords, resWords, effectWords, isRes, isBreak);
            $('#role-list').empty();
            add_item(result, dragons, wyrmprints);
        });
    });

    $("input[name='skilleffect']").each(function(index, el) {
        $(this).on('change', function(event) {
            if ($(this).is(':checked')) {
                effectWords.push($(this).attr('value'));
            } else {
                var t = $.inArray($(this).attr('value'), effectWords);
                effectWords.splice(t, 1);
            }
            result = filterAll(adventurers, rarityWords, elementWords, weaponWords, resWords, effectWords, isRes, isBreak);
            $('#role-list').empty();
            add_item(result, dragons, wyrmprints);
        });
    });

    $("input[name='Resistance']").each(function(index, el) {
        $(this).on('change', function(event) {
            if ($(this).is(':checked')) {
                resWords.push($(this).attr('value'));
            } else {
                var t = $.inArray($(this).attr('value'), resWords);
                resWords.splice(t, 1);
            }
            result = filterAll(adventurers, rarityWords, elementWords, weaponWords, effectWords, resWords, isRes, isBreak);
            $('#role-list').empty();
            add_item(result, dragons, wyrmprints);
        });
    });

    $("#checkbox_other_5").click(function(event) {
        /* Act on the event */
        isRes = $(this).is(':checked');
        result = filterAll(adventurers, rarityWords, elementWords, weaponWords, effectWords, isRes, isBreak);
        $('#role-list').empty();
        add_item(result, dragons, wyrmprints);
    });

    $("#checkbox_other_6").click(function(event) {
        /* Act on the event */
        isBreak = $(this).is(':checked');
        result = filterAll(adventurers, rarityWords, elementWords, weaponWords, effectWords, isRes, isBreak);
        $('#role-list').empty();
        add_item(result, dragons, wyrmprints);
    });


}