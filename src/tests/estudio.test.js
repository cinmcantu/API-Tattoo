const request = require('supertest')

test('/pets/dogs', async()=>{

    await request('http://localhost:3030')
    .get('/pets/dogs')
    .expect(200)
    .then((res)=> console.log('Passou no teste'))
})

test('/pets/dogs/newDog', async()=>{

    await request('http://localhost:3030')
    .post('/pets/dogs/newDog')
    .send({
        "RACA": "airedale",
        "FOTO": "https://images.dog.ceo/breeds/basenji/n02110806_518.jpg",
        "IDADE": "11",
        "NOME": "Ezequiel",
        "GENERO": "male",
        "RUA": "Rua Bela Vista ",
        "NUMERO": "6195",
        "CIDADE": "Alvorada",
        "ESTADO": "Rondônia",
        "TELEFONE": "(58) 3354-1813"
    })
    .expect(200)
    .then((res)=> console.log('Passou no teste'))
})