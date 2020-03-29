import wyrmprints from './wyrmprints.js'
import dragons from './dragons.js'
import adventurers_5 from './adventurers_5.js'
import adventurers_4 from './adventurers_4.js'
import adventurers_3 from './adventurers_3.js'

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
    wyrmprint: ['10002','10111' ,'10205']
},{
    aid: '1050201',
    dragon: ['50002'],
    wyrmprint: ['10001','10111', '10205']
}, {
    aid: '1050301',
    dragon: ['50002', '50003'],
    wyrmprint: ['10114','10111', '10205']
}, {
    aid: '1050401',
    dragon: ['50002', '50003'],
    wyrmprint: ['10007','10111', '10205']
}, {
    aid: '1050501',
    dragon: ['50002', '50006'],
    wyrmprint: ['10001','10111', '10205']
}, {
    aid: '1050601',
    dragon: ['50002'],
    wyrmprint: ['10003','10111', '10205']
}, {
    aid: '1050702',
    dragon: ['50002'],
    wyrmprint: ['10009','10111', '10205']
}, {
    aid: '2050501',
    dragon: ['50003'],
    wyrmprint: ['10010','10111', '10209']
}, {
    aid: '2050801',
    dragon: ['50002', '40002'],
    wyrmprint: ['10203', '10118']
}];

function addItems(adventurer, rDragons, rWyrmprints, tablename) {
    // body...
    var tr = document.createElement('tr');

    var td_0 = document.createElement('td');
    td_0.setAttribute('align', 'center');

    var pic_0 = document.createElement('picture');

    var source_0 = document.createElement('source');
    source_0.setAttribute('srcset', './images/adventures/' + adventurer.image + '.webp');
    source_0.setAttribute('type', 'image/webp');

    var img_0 = document.createElement('img');
    img_0.setAttribute('data-original', './images/adventures/' + adventurer.image + '.png');
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

        var dragon_source = document.createElement('source');
        dragon_source.setAttribute('srcset', './images/dragon/' + rDragons[i].icon + '.webp');
        dragon_source.setAttribute('type', 'image/webp');

        var dragon_img = document.createElement('img');
        dragon_img.setAttribute('data-original', './images/dragon/' + rDragons[i].icon + '.png');
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

        var wyr_source = document.createElement('source');
        wyr_source.setAttribute('srcset', './images/hf/' + rWyrmprints[i].img + '.webp');
        wyr_source.setAttribute('type', 'image/webp');

        var wyr_img = document.createElement('img');
        wyr_img.setAttribute('data-original', './images/hf/' + rWyrmprints[i].img + '.png');
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

    // $('img').lazyload({ effect: "show", threshold: 100, container: $(tablename) });
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
});