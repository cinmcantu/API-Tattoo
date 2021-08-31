const ClientesDao = require('../dao/clientes-dao')
module.exports= (app, bd)=>{

const DaoClientes = new ClientesDao(bd)

app.get('/clientes/dados', async (req, res)=>{
    try{
        const respostaVerClientes = await DaoClientes.VerClientes()
        res.send(respostaVerClientes)
    }catch(error){
        res.send(error)
    }
})

app.get('/clientes/ultimo', async (req, res)=>{
    try{
        const respostaVerClientes = await DaoClientes.PegarUltimoCliente()
        res.send(respostaVerClientes)
    }catch(error){
        res.send({error: error})
    }
})

app.get('/clientes/dados/:ID', async (req, res)=>{
    try{

        const id = req.params.ID
        const respostaVerCliente = await DaoClientes.VerCliente(id)
        res.send(respostaVerCliente)

    }catch(error){
        res.send(error)
    }
})

app.post('/clientes/dados/novoCliente', async(req, res)=>{
    try{
        const body = req.body
        const infos = [body.NOME, body.IDADE, body.GENERO, body.RUA, body.NUMERO, body.CIDADE, body.ESTADO, body.TELEFONE, body.TATUADOR, body.DATA_CADASTRO]
        
        const respostaNovoCliente = await DaoClientes.NovoCliente(infos)
        const cliente = await DaoClientes.PegarUltimoCliente()
        res.json({
            cliente: cliente
        })
        
    }catch(error){
        res.send(error)
    }
})

app.delete('/clientes/dados/delete/:ID', async(req, res)=>{
    try{
        const id = req.params.ID
        const respostaDeleteCliente = await DaoClientes.DeleteCliente(id)
        res.json({message: respostaDeleteCliente})
    }catch(error){
        res.send(error)
    }
})
 
app.put('/clientes/dados/edit/:ID', async(req, res)=>{
    try{

        const id = req.params.ID

        const body = req.body
        const infos = [body.NOME, body.IDADE, body.GENERO, body.RUA, body.NUMERO, body.CIDADE, body.ESTADO, body.TELEFONE, body.TATUADOR, body.DATA_CADASTRO]

        const respostaEditCliente = await DaoClientes.EditCliente(infos, id)

        res.json({message:respostaEditCliente})

    }catch(error){
        res.send(error)
    }
})

}