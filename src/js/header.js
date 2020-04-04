var vm = new Vue({
    el: "#app",
    data: {
        seen: false,
        selected: "0",
        isFilterShow: true
    },
    methods: {
        selectMenuChange: function(el) {
            // body...
        },
        filterShow: function(el) {
            // body...
        }
    },
    watch: {
        selected(val) {
            if (val == "0") {
                this.isFilterShow = true;
            } else {
                this.isFilterShow = false;
            }
        }
    }
});