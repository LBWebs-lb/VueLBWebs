<template>
    <div id="app">
        <Acces />
        <editacces></editacces>
    </div>
</template>

<script>
    import Acces from './components/Acces.vue';
    import editacces from './components/EditAcces.vue';
    export default {
        name: 'acces',
        components: {
            Acces, editacces
        }
    };
</script>

<style>
</style>

