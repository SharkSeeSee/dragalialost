import _ from 'lodash';
import $ from 'expose-loader?$!jquery';
import wyrmprints from './wyrmprints.js';
import dragons from './dragons.js';
import adventurers_5 from './adventurers_5.js';
import adventurers_4 from './adventurers_4.js';
import adventurers_3 from './adventurers_3.js';
import '../styles/agito.css';

var isWebp = false;
var defaultPic = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAHlBMVEXMzMyWlpaxsbHFxcW3t7ejo6O+vr6qqqqmpqatra3LZGLaAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAY0lEQVRIie3MwQmAMAwF0BIpOEb4Lc3VGbKEV8EFenCSTiwUj1q86Ok/QiDk80MgIiL6jfYtNci7YJ/ruAVdC1AEJVrb63MwafaUXbLH6VgGja4GM4hhRtsGjT28jP9ERPSxE6UOCacylc9zAAAAAElFTkSuQmCC";
var adventurers = Object.assign(adventurers_5, adventurers_4, adventurers_3);

const agito_wind_advs = [{
        aid: '1010202',
        dragon: ['10002', '10006'],
        wyrmprint: ['10010', '10104']
    },
    {
        aid: '1010203',
        dragon: ['10002'],
        wyrmprint: ['10001', '10104']
    },
    {
        aid: '1010301',
        dragon: ['10009'],
        wyrmprint: ['10006', '10104']
    },
    {
        aid: '1010402',
        dragon: ['10003', '10006'],
        wyrmprint: ['10007', '10104']
    },
    {
        aid: '2010101',
        dragon: ['10002', '10003', '10006'],
        wyrmprint: ['10002', '10104']
    },
    {
        aid: '3010701',
        dragon: ['10002', '10006'],
        wyrmprint: ['10009', '10104']
    },
    {
        aid: '2010802',
        dragon: ['40002', '50002'],
        wyrmprint: ['10203', '10107']
    },
];

const agito_light_advs = [{
    aid: '1050102',
    dragon: ['50002'],
    wyrmprint: ['10002', '10111', '10205']
}, {
    aid: '1050201',
    dragon: ['50002'],
    wyrmprint: ['10001', '10111', '10205']
}, {
    aid: '1050301',
    dragon: ['50002', '50003'],
    wyrmprint: ['10114', '10111', '10205']
}, {
    aid: '1050401',
    dragon: ['50002', '50003'],
    wyrmprint: ['10007', '10111', '10205']
}, {
    aid: '1050501',
    dragon: ['50002'],
    wyrmprint: ['10001', '10111', '10205']
}, {
    aid: '1050601',
    dragon: ['50002'],
    wyrmprint: ['10003', '10111', '10205']
}, {
    aid: '1050702',
    dragon: ['50002'],
    wyrmprint: ['10009', '10111', '10205']
}, {
    aid: '2050501',
    dragon: ['50003'],
    wyrmprint: ['10010', '10111', '10209']
}, {
    aid: '2050801',
    dragon: ['50002', '40002'],
    wyrmprint: ['10203', '10118']
}];

var defaultImage = new Image();
defaultImage.src = defaultPic;

function addItems(adventurer, rDragons, rWyrmprints, tablename) {
    // body...
    var tr = document.createElement('tr');

    var td_0 = document.createElement('td');
    td_0.setAttribute('align', 'center');

    var pic_0 = document.createElement('picture');
    pic_0.setAttribute('class', 'lazy');
    pic_0.setAttribute('id', 'icon-' + adventurer.rid);

    var source_0 = document.createElement('source');
    source_0.setAttribute('srcset', defaultImage.src);
    source_0.setAttribute('data-src', '/dragalialost/public/images/adventures/' + adventurer.image + '.webp');
    source_0.setAttribute('type', 'image/webp');

    var img_0 = document.createElement('img');
    img_0.setAttribute('src', defaultImage.src);
    img_0.setAttribute('data-src', '/dragalialost/public/images/adventures/' + adventurer.image + '.png');
    img_0.setAttribute('style', 'width:80px;')
    img_0.setAttribute('alt', adventurer.name);
    img_0.setAttribute('title', adventurer.name);

    pic_0.appendChild(source_0);
    pic_0.appendChild(img_0);
    td_0.appendChild(pic_0);

    var td_1 = document.createElement('td');
    td_1.setAttribute('align', 'center');

    for (var i = 0; i < rDragons.length; i++) {

        var dragon_pic = document.createElement('picture');
        dragon_pic.setAttribute('class', 'lazy');
        dragon_pic.setAttribute('id', 'dragon-' + rDragons[i].mid);

        var dragon_source = document.createElement('source');
        dragon_source.setAttribute('srcset', defaultImage.src);
        dragon_source.setAttribute('data-src', '/dragalialost/public/images/dragon/' + rDragons[i].icon + '.webp');
        dragon_source.setAttribute('type', 'image/webp');

        var dragon_img = document.createElement('img');
        dragon_img.setAttribute('src', defaultImage.src);
        dragon_img.setAttribute('data-src', '/dragalialost/public/images/dragon/' + rDragons[i].icon + '.png');
        dragon_img.setAttribute('style', 'width:40px;margin:5px;')
        dragon_img.setAttribute('alt', rDragons[i].name);
        dragon_img.setAttribute('title', rDragons[i].name);

        dragon_pic.appendChild(dragon_source);
        dragon_pic.appendChild(dragon_img);
        td_1.appendChild(dragon_pic);

    }

    var td_2 = document.createElement('td');
    td_2.setAttribute('align', 'center');

    for (var i = 0; i < rWyrmprints.length; i++) {

        var wyr_pic = document.createElement('picture');
        wyr_pic.setAttribute('class', 'lazy');
        wyr_pic.setAttribute('id', 'wyr-' + rWyrmprints[i].wid);

        var wyr_source = document.createElement('source');
        wyr_source.setAttribute('srcset', defaultImage.src);
        wyr_source.setAttribute('data-src', '/dragalialost/public/images/hf/' + rWyrmprints[i].img + '.webp');
        wyr_source.setAttribute('type', 'image/webp');

        var wyr_img = document.createElement('img');
        wyr_img.setAttribute('src', defaultImage.src);
        wyr_img.setAttribute('data-src', '/dragalialost/public/images/hf/' + rWyrmprints[i].img + '.png');
        wyr_img.setAttribute('style', 'width:40px;margin:5px;')
        wyr_img.setAttribute('alt', rWyrmprints[i].name);
        wyr_img.setAttribute('title', rWyrmprints[i].name);

        wyr_pic.appendChild(wyr_source);
        wyr_pic.appendChild(wyr_img);
        td_2.appendChild(wyr_pic);

    }

    var td_3 = document.createElement('td');

    tr.appendChild(td_0);
    tr.appendChild(td_1);
    tr.appendChild(td_2);
    tr.appendChild(td_3);

    document.getElementById(tablename).appendChild(tr);
}

function initWindAgitoTeam() {

    for (var i = 0; i < agito_wind_advs.length; i++) {
        var aid = agito_wind_advs[i].aid;
        var rDragons = [];
        var rWyrmprints = [];

        for (var j = 0; j < agito_wind_advs[i].dragon.length; j++) {
            var tempDragon = agito_wind_advs[i].dragon[j];
            rDragons.push(dragons[tempDragon]);
        }

        for (var k = 0; k < agito_wind_advs[i].wyrmprint.length; k++) {
            var tempWyr = agito_wind_advs[i].wyrmprint[k];
            rWyrmprints.push(wyrmprints[tempWyr]);
        }

        addItems(adventurers[aid], rDragons, rWyrmprints, 'wind-team-table');
    }

}

function initLightAgitoTeam() {
    // body...

    for (var i = 0; i < agito_light_advs.length; i++) {
        var aid = agito_light_advs[i].aid;
        var rDragons = [];
        var rWyrmprints = [];

        for (var j = 0; j < agito_light_advs[i].dragon.length; j++) {
            var tempDragon = agito_light_advs[i].dragon[j];
            rDragons.push(dragons[tempDragon]);
        }

        for (var k = 0; k < agito_light_advs[i].wyrmprint.length; k++) {
            var tempWyr = agito_light_advs[i].wyrmprint[k];
            rWyrmprints.push(wyrmprints[tempWyr]);
        }

        addItems(adventurers[aid], rDragons, rWyrmprints, 'light-team-table');
    }
}

$(document).ready(function() {
    initWindAgitoTeam();
    initLightAgitoTeam();

    check_webp_feature(picture_lazyload);
    $("#main").scroll(function() {
        picture_lazyload(isWebp);
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
    var scrolltop = $(document).scrollTop();
    var scrollheight = $(document).height();
    var scrollleft = $(document).scrollLeft();
    var scrollwidth = $(document).width();

    console.log(scrollheight + scrolltop);

    $('.lazy').each(function(index, el) {

        var x = $(this).offset().left;
        var y = $(this).offset().top;

        if (y >= scrolltop && y < (scrolltop + scrollheight) && x >= scrollleft && x < (scrollleft + scrollwidth)) {

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