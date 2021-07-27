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
}