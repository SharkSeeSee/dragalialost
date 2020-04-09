var vm = new Vue({
    el: "#app",
    data: {
        raritys: [{
            fid: "checkbox_star_3",
            value: "3",
            title: "3星",
            img0: "/dragalialost/public/images/other/star_3.webp",
            img1: "/dragalialost/public/images/other/star_3.png"
        }, {
            fid: "checkbox_star_4",
            value: "4",
            title: "4星",
            img0: "/dragalialost/public/images/other/star_4.webp",
            img1: "/dragalialost/public/images/other/star_4.png"
        }, {
            fid: "checkbox_star_5",
            value: "5",
            title: "5星",
            img0: "/dragalialost/public/images/other/star_5.webp",
            img1: "/dragalialost/public/images/other/star_5.png"
        }],
        elements: [{
            fid: "checkbox_element_0",
            value: "Fire",
            title: "火",
            img0: "/dragalialost/public/images/other/Element_Fire.webp",
            img1: "/dragalialost/public/images/other/Element_Fire.png"
        }, {
            fid: "checkbox_element_1",
            value: "Water",
            title: "水",
            img0: "/dragalialost/public/images/other/Element_Water.webp",
            img1: "/dragalialost/public/images/other/Element_Water.png"
        }, {
            fid: "checkbox_element_2",
            value: "Wind",
            title: "风",
            img0: "/dragalialost/public/images/other/Element_Wind.webp",
            img1: "/dragalialost/public/images/other/Element_Wind.png"
        }, {
            fid: "checkbox_element_3",
            value: "Light",
            title: "光",
            img0: "/dragalialost/public/images/other/Element_Light.webp",
            img1: "/dragalialost/public/images/other/Element_Light.png"
        }, {
            fid: "checkbox_element_4",
            value: "Shadow",
            title: "暗",
            img0: "/dragalialost/public/images/other/Element_Shadow.webp",
            img1: "/dragalialost/public/images/other/Element_Shadow.png"
        }],
        weapons: [{
            fid: "checkbox_weapon_0",
            value: "Sword",
            title: "剑",
            img0: "/dragalialost/public/images/other/Weapon_Sword.webp",
            img1: "/dragalialost/public/images/other/Weapon_Sword.png"
        }, {
            fid: "checkbox_weapon_1",
            value: "Blade",
            title: "刀",
            img0: "/dragalialost/public/images/other/Weapon_Blade.webp",
            img1: "/dragalialost/public/images/other/Weapon_Blade.png"
        }, {
            fid: "checkbox_weapon_2",
            value: "Dagger",
            title: "匕",
            img0: "/dragalialost/public/images/other/Weapon_Dagger.webp",
            img1: "/dragalialost/public/images/other/Weapon_Dagger.png"
        }, {
            fid: "checkbox_weapon_3",
            value: "Axe",
            title: "斧",
            img0: "/dragalialost/public/images/other/Weapon_Axe.webp",
            img1: "/dragalialost/public/images/other/Weapon_Axe.png"
        }, {
            fid: "checkbox_weapon_4",
            value: "Lance",
            title: "枪",
            img0: "/dragalialost/public/images/other/Weapon_Lance.webp",
            img1: "/dragalialost/public/images/other/Weapon_Lance.png"
        }, {
            fid: "checkbox_weapon_5",
            value: "Bow",
            title: "弓",
            img0: "/dragalialost/public/images/other/Weapon_Bow.webp",
            img1: "/dragalialost/public/images/other/Weapon_Bow.png"
        }, {
            fid: "checkbox_weapon_6",
            value: "Wand",
            title: "魔杖",
            img0: "/dragalialost/public/images/other/Weapon_Wand.webp",
            img1: "/dragalialost/public/images/other/Weapon_Wand.png"
        }, {
            fid: "checkbox_weapon_7",
            value: "Staff",
            title: "法杖",
            img0: "/dragalialost/public/images/other/Weapon_Staff.webp",
            img1: "/dragalialost/public/images/other/Weapon_Staff.png"
        }],
        resistances: [{
            fid: "checkbox_res_0",
            value: "ablilities_101",
            title: "睡眠抗性",
            img0: "/dragalialost/public/images/other/ablilities_101.webp",
            img1: "/dragalialost/public/images/other/ablilities_101.png"
        }, {
            fid: "checkbox_res_1",
            value: "ablilities_102",
            title: "昏迷抗性",
            img0: "/dragalialost/public/images/other/ablilities_102.webp",
            img1: "/dragalialost/public/images/other/ablilities_102.png"
        }, {
            fid: "checkbox_res_2",
            value: "ablilities_105",
            title: "烧伤抗性",
            img0: "/dragalialost/public/images/other/ablilities_105.webp",
            img1: "/dragalialost/public/images/other/ablilities_105.png"
        }, {
            fid: "checkbox_res_3",
            value: "ablilities_109",
            title: "湿身抗性",
            img0: "/dragalialost/public/images/other/ablilities_109.webp",
            img1: "/dragalialost/public/images/other/ablilities_109.png"
        }, {
            fid: "checkbox_res_4",
            value: "ablilities_110",
            title: "冰冻抗性",
            img0: "/dragalialost/public/images/other/ablilities_110.webp",
            img1: "/dragalialost/public/images/other/ablilities_110.png"
        }, {
            fid: "checkbox_res_5",
            value: "ablilities_114",
            title: "诅咒抗性",
            img0: "/dragalialost/public/images/other/ablilities_114.webp",
            img1: "/dragalialost/public/images/other/ablilities_114.png"
        }, {
            fid: "checkbox_res_6",
            value: "ablilities_115",
            title: "中毒抗性",
            img0: "/dragalialost/public/images/other/ablilities_115.webp",
            img1: "/dragalialost/public/images/other/ablilities_115.png"
        }, {
            fid: "checkbox_res_7",
            value: "ablilities_118",
            title: "麻痹抗性",
            img0: "/dragalialost/public/images/other/ablilities_118.webp",
            img1: "/dragalialost/public/images/other/ablilities_118.png"
        }, {
            fid: "checkbox_res_8",
            value: "ablilities_119",
            title: "黑暗抗性",
            img0: "/dragalialost/public/images/other/ablilities_119.webp",
            img1: "/dragalialost/public/images/other/ablilities_119.png"
        }],

        adsList: {},
    },
    methods: {
        showIconImage(key) {
            return "/dragalialost/public/images/adventures/" + key.image + ".webp";
        },
        showAblityImage(key, i, k) {

            var img0, img1;
            if (i == 0) {
                img0 = "/dragalialost/public/images/other/" + key.ability1[0] + ".webp";
                img1 = "/dragalialost/public/images/other/" + key.ability1[0] + ".png";

            } else if (i == 1) {
                img0 = "/dragalialost/public/images/other/" + key.ability2[0] + ".webp";
                img1 = "/dragalialost/public/images/other/" + key.ability2[0] + ".png";

            } else if (i == 2) {
                img0 = "/dragalialost/public/images/other/" + key.ability3[0] + ".webp";
                img1 = "/dragalialost/public/images/other/" + key.ability3[0] + ".png";
            }
            return k == 0 ? img0 : img1;

        },
        defaultIMG() {
            var defaultImage = new Image();
            defaultImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAHlBMVEXMzMyWlpaxsbHFxcW3t7ejo6O+vr6qqqqmpqatra3LZGLaAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAY0lEQVRIie3MwQmAMAwF0BIpOEb4Lc3VGbKEV8EFenCSTiwUj1q86Ok/QiDk80MgIiL6jfYtNci7YJ/ruAVdC1AEJVrb63MwafaUXbLH6VgGja4GM4hhRtsGjT28jP9ERPSxE6UOCacylc9zAAAAAElFTkSuQmCC";
            return defaultImage.src;
        },
        stepIcon(key) {
            return "icon-" + key;
        },
        resText(key){
            return key?"限定":"普迟";
        },
        bindEvent(ads){

        }
    }
});