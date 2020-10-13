<template>
    <div class="menu">
       <img src="logo.png" />
        <ul>
            <li><a href="/">Inici</a></li>
            <li><a href="/acces">Acces</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'menuprincipal',
        props: {
            msn: String
        }
    };
</script>

<style scoped>
    ul {
        list-style-type: none;
        margin-top: 7%;
    }
    li {
        display: inline;
    }
    a {
        padding: 20px;
        background-color: #fdd116;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        color: black;
    }

    img {
        width:15%;
    }
    .menu {
        display: inline-flex;
        height:230px;
    }
    a:link, a:visited, a:active {
        text-decoration: none;
    }

</style>

