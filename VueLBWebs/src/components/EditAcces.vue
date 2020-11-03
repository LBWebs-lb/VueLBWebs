<template>
    <h1>{{sort}}</h1>
</template>

<script>
    import EventBus from '../bus'
    export default {
        name: 'editacces',
        data() {
            return {
                sort: null
            }
        },
        created: function () {
            EventBus.$on("accesmod", (sort) => {
                this.sort = sort
            })
        }
    }
</script>

<style scoped>
</style>