<template>
    <div>
        <q-card color="positive" class="q-ma-sm">
            <q-card-main style="text-align: center;">
                <p>Best Night</p>
                <h1>+$15</h1>
            </q-card-main>
        </q-card>
        <q-card color="negative" class="q-ma-sm">
            <q-card-main style="text-align: center;">
                <p>Worst Night</p>
                <h1>-$10</h1>
            </q-card-main>
        </q-card>
        <q-card color="warning" class="q-ma-sm">
            <q-card-main style="text-align: center;">
                <p>Average</p>
                <h1>+$2.45</h1>
            </q-card-main>
        </q-card>
    </div>
</template>

<script>
    export default {
        name: 'stats',
        computed: {
            balance() {
                //return this.$store.getters['user/getUserBalance'];
            }
        }
    }
</script>

<style lang="stylus">
    @import "~quasar-framework/dist/quasar.ios.styl";
</style>