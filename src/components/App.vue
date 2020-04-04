<template>
    <div id='header' v-if="seen">
    </div>
</template>
<script>
export default {
    data: function() {
        // body...
        return {
            seen: false,
            screenWidth: document.body.clientWidth
        }
    },
    mounted() {
        const that = this;
        window.onresize = () => {
            return (() => {
                if (document.body.clientWidth < 800) {
                    that.seen = true;

                } else {
                    that.seen = false;
                }

            })();
        }

    }
}
</script>
<style scoped>
#header {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 40px;
    z-index: 999;
    background-color: white;
    box-shadow: #ddd 0px 2px 5px 0px;
}
</style>