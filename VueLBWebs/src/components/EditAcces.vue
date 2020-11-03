<template>
    <h1>{{header}}</h1>
</template>

<script>
    import { bus } from '../main';
    export default {
        props: {
            header: {
                type: Number
            }
        },
        created() {
            bus.$on('changeIt', (data) => {
                this.header = data;
            })
        }
    }
</script>

<style scoped>
</style>