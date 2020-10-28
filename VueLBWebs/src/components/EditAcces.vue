<template>
    <h1>dasdasdas</h1>
</template>

<script>
    import EventBus from './event-bus';
    export default {
        data() {
            return {
                idacces: null
            }
        },
        created() {
            EventBus.$on('mod-acces', (idacces) => {
                this.idacces = idacces
            })
            alert(this.idacces);
        },
        methods: {
            //getVueItems: function (page) {
              
            //}
        }
    }
</script>

<style scoped>
</style>