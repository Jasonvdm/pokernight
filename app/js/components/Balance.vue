<template>
    <b-container class="balance">
        <b-row><h2>Balance</h2></b-row>
        <b-row>
            <h1 class="display-1">{{ balance | currency }}</h1>
        </b-row>
    </b-container>
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

<style>

</style>