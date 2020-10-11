<template>
    <div id="api">
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
                    <button type="button">Click Me!</button>
                </td>
                <td>
                    <button type="button">Click Me!</button>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        el: '#api',
        data: () => ({
            results: null
        }),
        created() {
            axios.get("http://localhost:49489/api/LBAcces/").then((result) => {
                this.results = result.data;
            })
        }
    };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    table {
        width: 100%;
    }

     table td {
         text-align: center;
     }

    table, th, td {
        border: 1px solid black;
    }
</style>

