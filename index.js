const axios = require('axios');

class marii {

    constructor(){
        this.base = "https://marii.cc"
    }

    neko(){
        return new Promise((resolve, reject) => {
            this.request("/api/v1/img/nekos")
            .then((res) => {
                resolve(res.url);
            })
        })
    }

    hentai(){
        return new Promise((resolve, reject) => {
            this.request("/api/v1/img/hentai")
            .then((res) => {
                resolve(res.url);
            })
        })
    }

    traps(){
        return new Promise((resolve, reject) => {
            this.request("/api/v1/img/traps")
            .then((res) => {
                resolve(res.url);
            })
        })
    }

    porn(){
        return new Promise((resolve, reject) => {
            this.request("/api/v1/img/porn")
            .then((res) => {
                resolve(res.url);
            })
        })
    }

    request(path){
        return new Promise((reslove, reject) => {
            axios.get(`${this.base}${path}`)
                .then((res) => {
                    reslove(res.data);
                })
                .catch((e) => {
                    reject(e);
                })
        });
    }
}

module.exports = marii;