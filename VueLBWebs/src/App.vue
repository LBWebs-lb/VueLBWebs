<template>
    <div id="app">
        <Home msg="Hello world!" />
    </div>
</template>

<script>
    import Home from './components/Home.vue';

    export default {
        name: 'app',
        components: {
            Home
        }
    };
</script>

<style>
    table {
        width: 70%;
        margin: auto;
    }

    table td {
        text-align: center;
    }

    button, input[type=submit] {
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
</style>

