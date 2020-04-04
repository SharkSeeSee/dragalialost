import _ from 'lodash';
import $ from 'expose-loader?$!jquery';
import '../styles/main.css';

function goToPage(param) {
    $('#ifr1').attr('src', param);
    $('.loading').fadeIn('slow/400/fast');
}


function addShowClass() {
    // body...

    var frame = window.frames["myframe"].$(".options");
 
    frame.addClass("show");

    console.log(frame);
}

$(document).ready(function() {

    window.onresize = function() {
        if (document.body.clientWidth < 800) {
            vm.seen = true;

        } else {
            vm.seen = false;
        }
    };

    vm.selectMenuChange = function() {
        // body...
        var ifr = document.getElementById('ifr1');
        switch (vm.selected) {
            case "0":
                goToPage('/dragalialost/src/html/adventurers.html');
                break;
            case "1":
                goToPage('/dragalialost/src/html/dragontrial.html');
                break;
            case "2":
                goToPage('/dragalialost/src/html/agito.html');
                break;
        }
    }

    vm.filterShow = function() {
        // body...
        addShowClass();
    }

    $(".menu-item").each(function(index, el) {
        $(this).click(function(event) {
            /* Act on the event */
            switch (index) {
                case 0:
                    goToPage('/dragalialost/src/html/adventurers.html');
                    break;
                case 1:
                    goToPage('/dragalialost/src/html/dragontrial.html');
                    break;
                case 2:
                    goToPage('/dragalialost/src/html/agito.html');
                    break;
            }
        });
    });

    if ($('#ifr1')[0].attachEvent) {
        $('#ifr1')[0].attachEvent("onload", function() {
            $('.loading').fadeOut('slow/400/fast');
        });
    } else {
        $('#ifr1')[0].onload = function() {
            $('.loading').fadeOut('slow/400/fast');
        };
    }
});