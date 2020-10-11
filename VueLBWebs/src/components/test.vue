<template>
    <div class="test">
        <img src="logo.png" />
        <ul>
            <li><a href="default.asp">Home</a></li>
            <li><a href="news.asp">News</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'test',
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
    }
    img {
        width:10%;
    }
    .test {
        display: inline-flex;
    }

</style>

