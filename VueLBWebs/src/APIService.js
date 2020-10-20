import axios from 'axios';
const API_URL = 'http://localhost:49489';

export class APIService {
    Table 
    Clase
    constructor(tabla) {
        this.Table = tabla
        //this.Clase = clase
    }

    getacces() {
        const url = `${API_URL}/api/` + this.Table+`/`;
        return axios.get(url);
    }
    deleteacces(id) {
        const url = `${API_URL}/api/`+this.Table+`/`+ id;
        return axios.delete(url);
    }
    postdata(data) {
        const url = `${API_URL}/api/` + this.Table;
        return axios.post(url, data)
    }
}