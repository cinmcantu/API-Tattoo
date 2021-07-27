module.exports = class ClientesDao{

    constructor(bd){
        this.bd = bd
    }


    VerClientes(){
        return new Promise((resolve, reject)=>{
            const query = 'SELECT * FROM CLIENTES'
            this.bd.all(query, (error, response)=>{
                if(error) reject(`Erro ao acessar o Banco de Dados. ${error}`)
                else resolve(response)
            })
        })
    }

    VerUmCliente(id){
        return new Promise((resolve, reject)=>{
            const query = 'SELECT * FROM CLIENTES WHERE ID= (?)'
            this.bd.all(query, id,(error, response)=>{
                if(error) reject(`Erro ao acessar o Banco de Dados. ${error}`)
                else resolve(response)
            } )
        })
    }
}