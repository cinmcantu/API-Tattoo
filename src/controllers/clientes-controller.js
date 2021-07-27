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

    app.get('/clientes/dados/:ID', async (req, res)=>{
        try{

            const id = req.params.ID
            const respostaVerUmCliente = await DaoClientes.VerUmCliente(id)
            res.send(respostaVerUmCliente)

        }catch(error){
            res.send(error)
        }
    })

    app.post('/clientes/dados/novoCliente', async(req, res)=>{
        try{
            const body = req.body
            const infos = [body.NOME, body.IDADE, body.GENERO, body.RUA, body.NUMERO, body.CIDADE, body.ESTADO, body.TELEFONE, body.TATUADOR, body.DATA_CADASTRO]
        
            const respostaNovoCliente = await DaoClientes.NovoCliente(infos)
            res.send(respostaNovoCliente)
        
        }catch(error){
            res.send(error)
        }
    })
}