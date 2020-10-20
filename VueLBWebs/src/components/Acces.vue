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
                <td><button class="mod">Modificar</button></td>
                <td><button v-on:click="deleteData(value.idlb)" class="del">Eliminar</button></td>
            </tr>
        </table>
        <button v-on:click="pagemod()" class="btncrt">Nou</button>
    </div>
</template>
<script>
    import { APIService } from '../APIService';
    const apiService = new APIService("lbacces");
    export default {
        name: 'acces',
        data: () => ({
            results: null,
        }),
        created() {
            apiService.getacces().then((result) => {
                this.results = result.data;
            })
        },
        methods: {
            deleteData: function (id) {
                apiService.deleteacces(id).then(
                    this.loadOnce()
                );
            },

            pagemod: function () {
                window.location.href = '/acces/create';
            },
            loadOnce: function () {
                location.reload();
            }
        }
    };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    .title {
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-family: 'Montserrat', sans-serif;
    }

    table, th, td {
        border: 1px solid black;
    }

    .mod {
        background-color: #008CBA;
    }

    .del {
        background-color: #f44336;
    }

    .btncrt {
        margin-top: 25px;
        background-color: #257904;
        margin-left: 47%;
    }
</style>

