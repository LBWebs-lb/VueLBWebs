<template>
    <div id="app">
        <h2 class="title">Acces</h2>
        <table>
            <tr>
                <th>User</th>
                <th>Pass</th>
                <th>Link</th>
                <th>Acces</th>
            </tr>
            <tr v-for="value in results" v-bind:key="value.idlb">
                <td>{{ value.userWp }}</td>
                <td>{{ value.passWd }}</td>
                <td>{{ value.linkWp }}</td>
                <td>{{ value.acc }}</td>
                <td>
                    <button class="mod">Modificar</button>
                </td>
                <td>
                    <button v-on:click="deleteData({{value.idlb}})" class="mod">Eliminar</button>
                    <!--<button class="mod">Eliminar</button>-->
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        el: '#app',
        data: () => ({
            results: null
        }),
        created() {
            axios.get("http://localhost:49489/api/LBAcces/").then((result) => {
                this.results = result.data;
            })
        },
        methods: {
            deleteData: function (id) {
                axios.delete('http://localhost:49489/api/LBAcces/' + id)
                    .then(result => {
                        this.results = result.data;
                    });
            }
        }
    };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    table {
        width: 70%;
        margin: auto;
    }

        table td {
            text-align: center;
        }

    .title {
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-family: 'Montserrat', sans-serif;
    }

    table, th, td {
        border: 1px solid black;
    }

    button {
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }

    .mod {
        background-color: #008CBA;
    }

    .del {
        background-color: #f44336;
    }
</style>

