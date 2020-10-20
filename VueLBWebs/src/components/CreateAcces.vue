<template>
    <div id="app">
        <h1>Crear Acces</h1>
        <form @submit="checkForm" action="/acces" method="post">
            <input type="text" id="dnomusuari"  placeholder="Usuari">
            <input type="password" id="passwd1"  placeholder="Contrasenya">
            <input type="password" id="passwd2"  placeholder="Repetir contrasenya">
            <input type="text" id="linkwd" placeholder="Link">
            <input type="text" id="accwd"  placeholder="Acces">
        </form>
        <input type="submit" v-on:click="checkForm()" value="Enviar">
    </div>
</template>

<script>
    import axios from "axios";
    import { APIService } from '../APIService';
    const apiService = new APIService("lbacces");

    export default {
        name: 'crtacces',
        data: {
            dnomusuari: '',
            pass1: '',
            pass2: '',
            linkwp: '',
            acceswd: ''
        },
        methods: {
            sbmit() {
                let post = {
                    title: 'foo',
                    body: 'bar',
                    userId: 1
                };
                axios.put("https://jsonplaceholder.typicode.com/posts/1", post);
            },
            checkForm: function (e) {
                const userWp = document.getElementById("dnomusuari").value;
                const passWd = document.getElementById("passwd1").value;
                const passWd2 = document.getElementById("passwd2").value;
                const linkWp = document.getElementById("linkwd").value;
                const acc = document.getElementById("accwd").value;

                if (passWd != passWd2) {
                    alert("Contrasenyes no son iguals");
                } else {
                    let post = { userWp, passWd, linkWp, acc };
                    apiService.postdata(post);
                }

            }
        }
    };
</script>

<style scoped>

    form {
        text-align: center;
    }

    h1 {
        text-align: center;
    }

    input[type=text], input[type=password] {
        width: 51%;
        padding: 12px 20px;
        box-sizing: border-box;
        text-align: center;
        margin-bottom: 10px;
    }

    input[type=submit] {
        margin-left: 47%;
        background-color: #257904;
    }
</style>

