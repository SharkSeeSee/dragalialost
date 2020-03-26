function addItems(adventurer, dragons, wyrmprints, tablename) {
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

    for (var i = 0; i < dragons.length; i++) {

        var dragon_pic = document.createElement('picture');

        var dragon_source = document.createElement('source');
        dragon_source.setAttribute('srcset', './images/dragon/' + dragons[i].icon + '.webp');
        dragon_source.setAttribute('type', 'image/webp');

        var dragon_img = document.createElement('img');
        dragon_img.setAttribute('data-original', './images/dragon/' + dragons[i].icon + '.png');
        dragon_img.setAttribute('style', 'width:40px;margin:5px;')
        dragon_img.setAttribute('alt', dragons[i].name);
        dragon_img.setAttribute('title', dragons[i].name);

        dragon_pic.appendChild(dragon_source);
        dragon_pic.appendChild(dragon_img);
        td_1.appendChild(dragon_pic);

    }

    var td_2 = document.createElement('td');
    td_2.setAttribute('align', 'center');

    for (var i = 0; i < wyrmprints.length; i++) {

        var wyr_pic = document.createElement('picture');

        var wyr_source = document.createElement('source');
        wyr_source.setAttribute('srcset', './images/hf/' + wyrmprints[i].img + '.webp');
        wyr_source.setAttribute('type', 'image/webp');

        var wyr_img = document.createElement('img');
        wyr_img.setAttribute('data-original', './images/hf/' + wyrmprints[i].img + '.png');
        wyr_img.setAttribute('style', 'width:40px;margin:5px;')
        wyr_img.setAttribute('alt', wyrmprints[i].name);
        wyr_img.setAttribute('title', wyrmprints[i].name);

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

    $('img').lazyload({ effect: "fadeIn", threshold: 200, container: $(tablename) });
}


export function initWindTrialTeam(adventurers, dragons, wyrmprints) {


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

export function initWaterTrialTeam(adventurers, dragons, wyrmprints) {
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

export function initFlameTrialTeam(adventurers, dragons, wyrmprints) {
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
        aid: '2010802',
        dragon: ['40002', '50002'],
        wyrmprint: ['10203', '10107']
    }
];

const trial_water_advs = [{
    aid: '1030102',
    dragon: ['30003', '30005'],
    wyrmprint: ['10008', '10120']
}, {
    aid: '1030201',
    dragon: ['30003'],
    wyrmprint: ['10001', '10121']
}, {
    aid: '2030701',
    dragon: ['30002'],
    wyrmprint: ['10112', '10115']
}];

const trial_flame_advs = [{
    aid: '1020402',
    dragon: ['20002', '20005'],
    wyrmprint: ['10202', '10117']
},{
    aid: '1020602',
    dragon: ['20005', '20007'],
    wyrmprint: ['10103', '10106']
},{
    aid: '1020701',
    dragon: ['20003'],
    wyrmprint: ['10009', '10120']
},{
    aid: '1020801',
    dragon: ['20002','20005'],
    wyrmprint: ['10108', '10202']
},{
    aid: '2020801',
    dragon: ['20002','20005'],
    wyrmprint: ['10108', '10117']
},{
    aid: '2020703',
    dragon: ['20005'],
    wyrmprint: ['10117', '10122']
}];