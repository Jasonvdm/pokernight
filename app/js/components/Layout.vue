<template>
    <div>
        <b-container>
            <slot/>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'Layout',
        data () {
            return {
                model: null
            }
        }
    }
</script>

<style>

</style>
