const request = require('supertest')

test('/clientes/dados', async()=>{

    await request('http://localhost:3050')
    .get('/clientes/dados')
    .expect(200)
    .then((res)=> console.log('Passou no teste'))
})

test('/clientes/dados/novoCliente', async()=>{

    await request('http://localhost:3050')
    .post('/clientes/dados/novoCliente')
    .send({
            "NOME": "Luco Lucas",
            "IDADE": "18",
            "GENERO": "Masculino",
            "RUA": "Rua das Ruas ",
            "NUMERO": "56",
            "CIDADE": "Guaraqueçaba",
            "ESTADO": "Paraná",
            "TELEFONE": "(41) 5416-4154",
            "TATUADOR": "Oswaldo",
            "DATA_CADASTRO": "26/07/2021"
    })
    .expect(200)
    .then((res)=> console.log('Passou no teste'))
})