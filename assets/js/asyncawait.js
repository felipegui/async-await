/*
    Função assíncrona (async await), é uma forma sintetizada de uma uma promise
*/
function request() {
    const url = 'https://alunos.b7web.com.br/api/ping';
    const params = {
        method: 'POST',
        body: JSON.stringify({
            nome: 'Teste',
            idade: 99
        })
    };

    fetch(url, params)
        .then((r)=>r.json())
        .then((json)=>{
            console.log(json);
        });
        console.log("Rodou primeiro");
}

async function request2() {
    const url = 'https://alunos.b7web.com.br/api/ping';
    const params = {
        method: 'POST',
        body: JSON.stringify({
            nome: 'Teste',
            idade: 99
        })
    };

    const r = await fetch(url, params);
    const json = await r.json();

    console.log(json);
    console.log("Rodou em segundo?");
}

request2();