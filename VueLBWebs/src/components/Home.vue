<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <p>Welcome to your new single-page application, built with <a href="https://vuejs.org" target="_blank">Vue.js</a>.</p>
    </div>
</template>

<script>
    export default {
        name: 'app',
        props: {
            msg: String
        }

    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .app {
        width:75%;
        margin: auto;
    }
</style>

