const API = "https://viacep.com.br/ws/63580000/json/";

async function fetchCEP() {
    const res = await fetch(API)
    const data = await res.json();
    return data;
}

(async function () {
const data = await fetchCEP()
console.log(data.uf);
console.log(data.localidade);
})();