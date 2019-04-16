<template>
    <div>
        <p class="q-ml-md">Your Balance: {{ balance | currency }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Balance',
        computed: {
            balance() {
                return this.$store.getters['user/getUserBalance'];
            }
        }
    }
</script>

<style lang="stylus">
    @import "~quasar-framework/dist/quasar.ios.styl";
</style>