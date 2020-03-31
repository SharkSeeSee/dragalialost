import wyrmprints from './wyrmprints.js'
import dragons from './dragons.js'
import adventurers_5 from './adventurers_5.js'
import adventurers_4 from './adventurers_4.js'
import adventurers_3 from './adventurers_3.js'

var defaultPic = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAHlBMVEXMzMyWlpaxsbHFxcW3t7ejo6O+vr6qqqqmpqatra3LZGLaAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAY0lEQVRIie3MwQmAMAwF0BIpOEb4Lc3VGbKEV8EFenCSTiwUj1q86Ok/QiDk80MgIiL6jfYtNci7YJ/ruAVdC1AEJVrb63MwafaUXbLH6VgGja4GM4hhRtsGjT28jP9ERPSxE6UOCacylc9zAAAAAElFTkSuQmCC";
var adventurers = Object.assign(adventurers_5, adventurers_4, adventurers_3);
var isWebp = false;
var defaultImage = new Image();
defaultImage.src = defaultPic;

const trial_wind_advs = [{
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
        aid: '1010401',
        dragon: ['10002', '10006'],
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
        aid: '1010601',
        dragon: ['10002'],
        wyrmprint: ['10003', '10106']
    },
    {
        aid: '1010602',
        dragon: ['10002'],
        wyrmprint: ['10003', '10106']
    },
    {
        aid: '2010501',
        dragon: ['10004', '10005', '10008'],
        wyrmprint: ['10117', '10210', '10203', '10115']
    },
    {
        aid: '2010801',
        dragon: ['10001', '10004', '10005', '10008'],
        wyrmprint: ['10108', '10117']
    },
    {
        aid: '2010802',
        dragon: ['10001', '10004', '10005', '10008', '40002'],
        wyrmprint: ['10203', '10108', '10115']
    }
];

const trial_water_advs = [{
        aid: '1030102',
        dragon: ['30003', '30005'],
        wyrmprint: ['10002', '10008', '10120']
    },
    {
        aid: '1030201',
        dragon: ['30003'],
        wyrmprint: ['10001', '10121']
    },
    {
        aid: '2030701',
        dragon: ['30002'],
        wyrmprint: ['10112', '10115']
    },
    {
        aid: '1030602',
        dragon: ['30003'],
        wyrmprint: ['10111', '10117']
    },
    {
        aid: '1030202',
        dragon: ['30002'],
        wyrmprint: ['10112', '10117']
    },
    {
        aid: '2030602',
        dragon: ['30003'],
        wyrmprint: ['10003', '10205']
    }
];

const trial_flame_advs = [{
        aid: '1020402',
        dragon: ['20002', '20005'],
        wyrmprint: ['10202', '10117']
    },
    {
        aid: '1020602',
        dragon: ['20005', '20007'],
        wyrmprint: ['10103', '10106']
    },
    {
        aid: '1020701',
        dragon: ['20003'],
        wyrmprint: ['10009', '10120']
    },
    {
        aid: '1020801',
        dragon: ['20002', '20005'],
        wyrmprint: ['10108', '10202']
    },
    {
        aid: '2020801',
        dragon: ['20002', '20005'],
        wyrmprint: ['10108', '10117']
    },
    {
        aid: '2020703',
        dragon: ['20005'],
        wyrmprint: ['10117', '10209']
    }
];

const trial_light_advs = [{
        aid: '1050102',
        dragon: ['50002'],
        wyrmprint: ['10002', '10111', '10205']
    },
    {
        aid: '1050301',
        dragon: ['50003', '50008'],
        wyrmprint: ['10117', '10114']
    },
    {
        aid: '1050702',
        dragon: ['50002'],
        wyrmprint: ['10009', '10111', '10205']
    }
];

const trial_shadow_advs = [{
        aid: '1040301',
        dragon: ['40003', '40005'],
        wyrmprint: ['10006', '10113', '10120']
    },
    {
        aid: '2040302',
        dragon: ['40003', '40005'],
        wyrmprint: ['10006', '10113', '10120']
    },
    {
        aid: '1040202',
        dragon: ['40003', '40005'],
        wyrmprint: ['10005', '10113']
    },
    {
        aid: '2040201',
        dragon: ['40003', '40005'],
        wyrmprint: ['10001', '10113']
    },
    {
        aid: '1040103',
        dragon: ['40005'],
        wyrmprint: ['10117', '10114']
    },
    {
        aid: '1040402',
        dragon: ['40005'],
        wyrmprint: ['10007', '10113']
    },
    {
        aid: '2040701',
        dragon: ['40005'],
        wyrmprint: ['10108', '10207', '10115', '10203']
    }
];

function addItems(adventurer, mDragons, mWyrmprints, tablename) {
    // body...
    var tr = document.createElement('tr');

    var td_0 = document.createElement('td');
    td_0.setAttribute('align', 'center');

    var pic_0 = document.createElement('picture');
    pic_0.setAttribute('id', 'icon-' + adventurer.rid);
    pic_0.setAttribute('class', 'lazy');

    var source_0 = document.createElement('source');
    source_0.setAttribute('srcset', defaultImage.src);
    source_0.setAttribute('data-src', './images/adventures/' + adventurer.image + '.webp');
    source_0.setAttribute('type', 'image/webp');

    var img_0 = document.createElement('img');
    img_0.setAttribute('src', defaultImage.src);
    img_0.setAttribute('data-src', './images/adventures/' + adventurer.image + '.png');
    img_0.setAttribute('style', 'width:80px;')
    img_0.setAttribute('alt', adventurer.name);
    img_0.setAttribute('title', adventurer.name);

    pic_0.appendChild(source_0);
    pic_0.appendChild(img_0);
    td_0.appendChild(pic_0);

    var td_1 = document.createElement('td');
    td_1.setAttribute('align', 'center');

    for (var i = 0; i < mDragons.length; i++) {

        var dragon_pic = document.createElement('picture');
        dragon_pic.setAttribute('id', 'dragon-' + mDragons[i].mid);
        dragon_pic.setAttribute('class', 'lazy');

        var dragon_source = document.createElement('source');
        dragon_source.setAttribute('srcset', defaultImage.src);
        dragon_source.setAttribute('data-src', './images/dragon/' + mDragons[i].icon + '.webp');
        dragon_source.setAttribute('type', 'image/webp');

        var dragon_img = document.createElement('img');
        dragon_img.setAttribute('src', defaultImage.src);
        dragon_img.setAttribute('data-src', './images/dragon/' + mDragons[i].icon + '.png');
        dragon_img.setAttribute('style', 'width:40px;margin:5px;')
        dragon_img.setAttribute('alt', mDragons[i].name);
        dragon_img.setAttribute('title', mDragons[i].name);

        dragon_pic.appendChild(dragon_source);
        dragon_pic.appendChild(dragon_img);
        td_1.appendChild(dragon_pic);

    }

    var td_2 = document.createElement('td');
    td_2.setAttribute('align', 'center');

    for (var i = 0; i < mWyrmprints.length; i++) {

        var wyr_pic = document.createElement('picture');
        wyr_pic.setAttribute('id', 'wyr-' + mWyrmprints[i].wid);
        wyr_pic.setAttribute('class', 'lazy');

        var wyr_source = document.createElement('source');
        wyr_source.setAttribute('srcset', defaultImage.src);
        wyr_source.setAttribute('data-src', './images/hf/' + mWyrmprints[i].img + '.webp');
        wyr_source.setAttribute('type', 'image/webp');

        var wyr_img = document.createElement('img');
        wyr_img.setAttribute('src', defaultImage.src);
        wyr_img.setAttribute('data-src', './images/hf/' + mWyrmprints[i].img + '.png');
        wyr_img.setAttribute('style', 'width:40px;margin:5px;')
        wyr_img.setAttribute('alt', mWyrmprints[i].name);
        wyr_img.setAttribute('title', mWyrmprints[i].name);


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


function initWindTrialTeam() {


    for (var i = 0; i < trial_wind_advs.length; i++) {
        var aid = trial_wind_advs[i].aid;
        var rDragons = [];
        var rWyrmprints = [];

        for (var j = 0; j < trial_wind_advs[i].dragon.length; j++) {
            var tempDragon = trial_wind_advs[i].dragon[j];
            rDragons.push(dragons[tempDragon]);
        }

        for (var k = 0; k < trial_wind_advs[i].wyrmprint.length; k++) {
            var tempWyr = trial_wind_advs[i].wyrmprint[k];
            rWyrmprints.push(wyrmprints[tempWyr]);
        }

        addItems(adventurers[aid], rDragons, rWyrmprints, 'wind-team-table');
    }

}

function initWaterTrialTeam() {
    // body...
    for (var i = 0; i < trial_water_advs.length; i++) {
        var aid = trial_water_advs[i].aid;
        var rDragons = [];
        var rWyrmprints = [];

        for (var j = 0; j < trial_water_advs[i].dragon.length; j++) {
            var tempDragon = trial_water_advs[i].dragon[j];
            rDragons.push(dragons[tempDragon]);
        }

        for (var k = 0; k < trial_water_advs[i].wyrmprint.length; k++) {
            var tempWyr = trial_water_advs[i].wyrmprint[k];
            rWyrmprints.push(wyrmprints[tempWyr]);
        }

        addItems(adventurers[aid], rDragons, rWyrmprints, 'water-team-table');
    }
}

function initFlameTrialTeam() {
    // body...
    for (var i = 0; i < trial_flame_advs.length; i++) {
        var aid = trial_flame_advs[i].aid;
        var rDragons = [];
        var rWyrmprints = [];

        for (var j = 0; j < trial_flame_advs[i].dragon.length; j++) {
            var tempDragon = trial_flame_advs[i].dragon[j];
            rDragons.push(dragons[tempDragon]);
        }

        for (var k = 0; k < trial_flame_advs[i].wyrmprint.length; k++) {
            var tempWyr = trial_flame_advs[i].wyrmprint[k];
            rWyrmprints.push(wyrmprints[tempWyr]);
        }

        addItems(adventurers[aid], rDragons, rWyrmprints, 'flame-team-table');
    }
}

function initLightTrialTeam() {
    // body...
    for (var i = 0; i < trial_light_advs.length; i++) {
        var aid = trial_light_advs[i].aid;
        var rDragons = [];
        var rWyrmprints = [];

        for (var j = 0; j < trial_light_advs[i].dragon.length; j++) {
            var tempDragon = trial_light_advs[i].dragon[j];
            rDragons.push(dragons[tempDragon]);
        }

        for (var k = 0; k < trial_light_advs[i].wyrmprint.length; k++) {
            var tempWyr = trial_light_advs[i].wyrmprint[k];
            rWyrmprints.push(wyrmprints[tempWyr]);
        }

        addItems(adventurers[aid], rDragons, rWyrmprints, 'light-team-table');
    }
}

function initShadowTrialTeam() {
    // body...
    for (var i = 0; i < trial_shadow_advs.length; i++) {
        var aid = trial_shadow_advs[i].aid;
        var rDragons = [];
        var rWyrmprints = [];

        for (var j = 0; j < trial_shadow_advs[i].dragon.length; j++) {
            var tempDragon = trial_shadow_advs[i].dragon[j];
            rDragons.push(dragons[tempDragon]);
        }

        for (var k = 0; k < trial_shadow_advs[i].wyrmprint.length; k++) {
            var tempWyr = trial_shadow_advs[i].wyrmprint[k];
            rWyrmprints.push(wyrmprints[tempWyr]);
        }

        addItems(adventurers[aid], rDragons, rWyrmprints, 'shadow-team-table');
    }
}

function initTrialTeam() {
    // body...
    initWindTrialTeam();
    initWaterTrialTeam();
    initFlameTrialTeam();
    initLightTrialTeam();
    initShadowTrialTeam();
}

$(document).ready(function() {
    initTrialTeam();
    check_webp_feature(picture_lazyload);

    $(document).scroll(function() {
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

    $('.lazy').each(function(index, el) {

        var x = el.getBoundingClientRect().left;
        var y = el.getBoundingClientRect().top;

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
                        children_img.attr('srcset', tempImage.src);
                    }
                }
            }

        }
    });
}