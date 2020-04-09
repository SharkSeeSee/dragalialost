import _ from 'lodash';
import $ from 'expose-loader?$!jquery';
import wyrmprints from './wyrmprints.js';
import dragons from './dragons.js';
import adventurers_5 from './adventurers_5.js';
import adventurers_4 from './adventurers_4.js';
import adventurers_3 from './adventurers_3.js';
import '../styles/adventurers.css';

var isWebp = false;
//筛选角色
function filterAll(adlist, raritys, elements, weapons, effects, resWords, isRestriction, isBreak) {
    // body...
    var filterResult = {};

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

    for (var key in adlist) {

        if (raritys.indexOf(adlist[key].rarity.toString()) > -1 && weapons.indexOf(adlist[key].weapon) > -1 &&
            elements.indexOf(adlist[key].element) > -1 && (resWords.indexOf(adlist[key].ability2[0]) > -1 || resWords.indexOf(adlist[key].ability3[0]) > -1)) {

            filterResult[key] = adlist[key];

        }
    }

    if (effects.length != 0) {
        for (var key in filterResult) {
            for (var i = 0; i < effects.length; i++) {
                var teffect = filterResult[key].skilleffects;
                if (teffect.indexOf(effects[i]) == -1) {
                    delete filterResult[key];
                    break;
                }
            }
        }
    }

    if (isRestriction == true) {
        for (var key in filterResult) {
            if (filterResult[key].restriction == false) {
                delete filterResult[key];
            }
        }
    }

    if (isBreak == true) {
        for (var key in filterResult) {
            if (filterResult[key].maxlevel != 100) {
                delete filterResult[key];
            }
        }
    }

    return filterResult;
}

function searchInputText(filterArray, searchText) {
    if (searchText.length == 0) {
        return result;
    }

    var filterResult = {};

    for (var key in filterArray) {
        var pinyin = makePy(filterArray[key].name)[0].toLowerCase();
        //console.log(filterArray[key].name + ':' + pinyin);
        if ((filterArray[key].name).indexOf(searchText) > -1 || pinyin.indexOf(searchText.toLowerCase()) > -1) {
            filterResult[key] = filterArray[key];
        }
    }

    return filterResult;
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
                result.push('ablilities_108');
                break;
            case 'ablilities_105':
                result.push('ablilities_105');
                result.push('ablilities_106');
                result.push('ablilities_108');
                result.push('ablilities_122');
                result.push('ablilities_123');
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

//弹出框
function showAlertView(ads) {
    // body...
    var tdiv = document.createElement('div');

    tdiv.setAttribute('class', 'alert-view');

    var ndiv = document.createElement('div');
    ndiv.setAttribute('style', 'display:flex;flex-direction:row;');
    tdiv.appendChild(ndiv);
    //推荐龙
    var bdiv_1 = document.createElement('div');
    bdiv_1.setAttribute('style', 'background-color:white;width:9rem;height:7.5rem;text-align:center;');

    var div_1 = document.createElement('div');
    div_1.setAttribute('style', 'font-size:16px;text-align:left;');
    div_1.innerText = '推荐龙:';

    var div_dragon = document.createElement('div');

    var pic_1 = document.createElement('picture');
    pic_1.setAttribute('style', 'width:6.25rem;height:6.25rem;');

    var source_1 = document.createElement('source');

    source_1.setAttribute('srcset', '/dragalialost/public/images/dragon/' + dragons[ads.dragon].icon + '.webp');
    source_1.setAttribute('type', 'image/webp');

    var img_1 = document.createElement('img');

    img_1.setAttribute('src', '/dragalialost/public/images/dragon/' + dragons[ads.dragon].icon + '.png');
    img_1.setAttribute('alt', dragons[ads.dragon].name);
    img_1.setAttribute('title', dragons[ads.dragon].name);
    img_1.setAttribute('loading', 'auto');
    img_1.setAttribute('style', 'width:6.25rem;height:6.25rem;');

    pic_1.appendChild(source_1);
    pic_1.appendChild(img_1);

    var div_d_text = document.createElement('div');
    div_d_text.setAttribute('style', 'text-align:center;');
    div_d_text.innerText = dragons[ads.dragon].name;

    div_dragon.appendChild(pic_1);
    div_dragon.appendChild(div_d_text);

    bdiv_1.appendChild(div_1);
    bdiv_1.appendChild(div_dragon);

    //推荐护符
    var bdiv_2 = document.createElement('div');
    bdiv_2.setAttribute('style', 'background-color:white;width:auto;height:7.5rem;text-align:left;');

    var div_2 = document.createElement('div');
    div_2.setAttribute('style', 'font-size:16px;');
    div_2.innerText = '推荐护符(请根据实际变更):';

    var div_3 = document.createElement('div');
    //1号护符

    var div_hf_1 = document.createElement('div');
    div_hf_1.setAttribute('style', 'float:left;width:8.125rem;text-align:center;');

    var pic_2 = document.createElement('picture');
    pic_2.setAttribute('style', 'width:6.25rem;height:6.25rem;');

    var source_2 = document.createElement('source');

    source_2.setAttribute('srcset', '/dragalialost/public/images/hf/' + wyrmprints[ads.hf1].img + '.webp');
    source_2.setAttribute('type', 'image/webp');

    var img_2 = document.createElement('img');

    img_2.setAttribute('src', '/dragalialost/public/images/hf/' + wyrmprints[ads.hf1].img + '.png');
    img_2.setAttribute('alt', wyrmprints[ads.hf1].name);
    img_2.setAttribute('title', wyrmprints[ads.hf1].name);
    img_2.setAttribute('loading', 'auto');
    img_2.setAttribute('style', 'width:6.25rem;height:6.25rem;');

    pic_2.appendChild(source_2);
    pic_2.appendChild(img_2);

    var div_text_1 = document.createElement('div');
    div_text_1.setAttribute('style', 'text-align:center;');
    div_text_1.innerText = wyrmprints[ads.hf1].name;

    div_hf_1.appendChild(pic_2);
    div_hf_1.appendChild(div_text_1);

    //2号护符
    var div_hf_2 = document.createElement('div');
    div_hf_2.setAttribute('style', 'float:left;width:8.125rem;text-align:center;margin-left:1.25rem;');

    var pic_3 = document.createElement('picture');
    pic_3.setAttribute('style', 'width:6.25rem;height:6.25rem;');

    var source_3 = document.createElement('source');

    source_3.setAttribute('srcset', '/dragalialost/public/images/hf/' + wyrmprints[ads.hf2].img + '.webp');
    source_3.setAttribute('type', 'image/webp');

    var img_3 = document.createElement('img');

    img_3.setAttribute('src', '/dragalialost/public/images/hf/' + wyrmprints[ads.hf2].img + '.png');
    img_3.setAttribute('alt', wyrmprints[ads.hf2].name);
    img_3.setAttribute('title', wyrmprints[ads.hf2].name);
    img_3.setAttribute('loading', 'auto');
    img_3.setAttribute('style', 'width:6.25rem;height:6.25rem;');

    pic_3.appendChild(source_3);
    pic_3.appendChild(img_3);

    var div_text_2 = document.createElement('div');
    div_text_2.setAttribute('style', 'text-align:center;');
    div_text_2.innerText = wyrmprints[ads.hf2].name;

    div_hf_2.appendChild(pic_3);
    div_hf_2.appendChild(div_text_2);

    div_3.appendChild(div_hf_1);
    div_3.appendChild(div_hf_2);

    bdiv_2.appendChild(div_2);
    bdiv_2.appendChild(div_3);

    ndiv.appendChild(bdiv_1);
    ndiv.appendChild(bdiv_2);
    //技能表格
    return tdiv;
}

export function initAds() {

    var adventurers = Object.assign(adventurers_3, adventurers_4, adventurers_5);
    var weaponWords = [];
    var elementWords = [];
    var rarityWords = [];
    var effectWords = [];
    var resWords = [];
    var isRes = false;
    var isBreak = false;
    var result = [];

    vm.adsList = adventurers;
    check_webp_feature(picture_lazyload);

    vm.bindEvent = function(ads) {
        // body...
        swal({
            text: ads.name + "    昵称:" + ads.nickname,
            content: showAlertView(ads),
        });
    }

    $("input[name='Rarity']").each(function(index, el) {
        $(this).on('change', function(event) {
            /* Act on the event */
            if ($(this).is(':checked')) {
                rarityWords.push($(this).attr('value'));
            } else {
                var t = $.inArray($(this).attr('value'), rarityWords);
                rarityWords.splice(t, 1);
            }

            vm.adsList = filterAll(adventurers, rarityWords, elementWords, weaponWords, effectWords, resWords, isRes, isBreak);
            $("#role-list picture").attr('class', 'lazy');
            check_webp_feature(picture_lazyload);

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
            vm.adsList = filterAll(adventurers, rarityWords, elementWords, weaponWords, effectWords, resWords, isRes, isBreak);
            $("#role-list picture").attr('class', 'lazy');
            check_webp_feature(picture_lazyload);
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
            vm.adsList = filterAll(adventurers, rarityWords, elementWords, weaponWords, effectWords, resWords, isRes, isBreak);
            $("#role-list picture").attr('class', 'lazy');
            check_webp_feature(picture_lazyload);
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
            vm.adsList = filterAll(adventurers, rarityWords, elementWords, weaponWords, effectWords, resWords, isRes, isBreak);
            $("#role-list picture").attr('class', 'lazy');
            check_webp_feature(picture_lazyload);
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
            vm.adsList = filterAll(adventurers, rarityWords, elementWords, weaponWords, effectWords, resWords, isRes, isBreak);
            $("#role-list picture").attr('class', 'lazy');
            check_webp_feature(picture_lazyload);
        });
    });

    $("#checkbox_other_5").click(function(event) {
        /* Act on the event */
        isRes = $(this).is(':checked');
        vm.adsList = filterAll(adventurers, rarityWords, elementWords, weaponWords, effectWords, resWords, isRes, isBreak);
        $("#role-list picture").attr('class', 'lazy');
        check_webp_feature(picture_lazyload);
    });

    $("#checkbox_other_6").click(function(event) {
        /* Act on the event */
        isBreak = $(this).is(':checked');
        vm.adsList = filterAll(adventurers, rarityWords, elementWords, weaponWords, effectWords, resWords, isRes, isBreak);
        $("#role-list picture").attr('class', 'lazy');
        check_webp_feature(picture_lazyload);
    });

    $("#searchInput").on('input', function(event) {
        event.preventDefault();

        /* Act on the event */
        if ($(this).val().length == 0) {
            vm.adsList = filterAll(adventurers, rarityWords, elementWords, weaponWords, effectWords, resWords, isRes, isBreak);
            $("#role-list picture").attr('class', 'lazy');
            check_webp_feature(picture_lazyload);
        } else {
            var arr = filterAll(adventurers, rarityWords, elementWords, weaponWords, effectWords, resWords, isRes, isBreak);
            arr = searchInputText(arr, $(this).val());
            vm.adsList = arr;
            $("#role-list picture").attr('class', 'lazy');
            check_webp_feature(picture_lazyload);
        }

    });

    $("#clearButton").click(function(event) {
        /* Act on the event */
        if ($("#searchInput").val().length == 0) {
            return;
        }
        $("#searchInput").val("");
        vm.adsList = filterAll(adventurers, rarityWords, elementWords, weaponWords, effectWords, resWords, isRes, isBreak);
        $("#role-list picture").attr('class', 'lazy');
        check_webp_feature(picture_lazyload);
    });
}

$(document).ready(function() {
    // 开始写 jQuery 代码..
    initAds();
    $("#role-list").scroll(function() {
        picture_lazyload(isWebp);;
    });

});

// 图片懒加载 预加载
var imageCacheArray = new Array();

function check_webp_feature(callback) {
    // body...

    var img = new Image();
    img.onload = function() {
        var result = (img.width > 0) && (img.height > 0);
        isWebp = result;
        callback(result);
    };
    img.onerror = function() {
        callback(false);
    };
    img.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
}

function picture_lazyload(isSupportWebp) {
    // body...
    var scrollTop = $("#role-list").scrollTop();
    var scrollheight = $("#role-list").height();

    $('.lazy').each(function(index, el) {

        var a = el.offsetTop;
        if (a >= scrollTop && a < (scrollTop + scrollheight)) {

            var keyID = $(this).attr('id');
            var children_source = $(this).children('source');
            var children_img = $(this).children('img');

            if (isSupportWebp) {
                if (imageCacheArray[keyID]) {
                    children_source.attr('srcset', imageCacheArray[keyID].src);
                } else {
                    var tempImage = new Image();
                    tempImage.src = $(this).children('source').attr("data-src");
                    tempImage.onload = function() {
                        imageCacheArray[keyID] = tempImage;
                        children_source.attr('srcset', tempImage.src);
                    }
                }
            } else {
                if (imageCacheArray[keyID]) {
                    children_img.attr('src', imageCacheArray[keyID].src);
                } else {
                    var tempImage = new Image();
                    tempImage.src = $(this).children('img').attr("data-src");
                    tempImage.onload = function() {
                        imageCacheArray[keyID] = tempImage;
                        children_img.attr('src', tempImage.src);
                    }
                }
            }
            $(this).removeClass('lazy');
        }
    });
}