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

VerCliente(id){
    return new Promise((resolve, reject)=>{
        const query = 'SELECT * FROM CLIENTES WHERE ID = (?)'
        this.bd.all(query, id,(error, response)=>{
            if(error) reject(`Erro ao acessar o Banco de Dados. ${error}`)
            else resolve(response)
        })
    })
}

NovoCliente(infos){
    return new Promise((resolve, reject)=>{
        const query = 'INSERT INTO CLIENTES (NOME, IDADE, GENERO, RUA, NUMERO, CIDADE, ESTADO, TELEFONE, TATUADOR, DATA_CADASTRO) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        const parametros = [infos[0], infos[1], infos[2], infos[3], infos[4], infos[5], infos[6], infos[7], infos[8], infos[9]]
        this.bd.run(query, parametros, (error, response)=>{
            if(error) reject(`Erro ao adicionar cliente. ${error}`)
            else resolve('Cliente adicionado com sucesso')
        })
    })
}

DeleteCliente(id){
    return new Promise((resolve, reject)=>{
        const query = 'DELETE FROM CLIENTES WHERE ID = (?)'
        this.bd.run(query, id, (error, response)=>{
            if(error) reject(`Erro ao excluir Cliente. ${error}`)
            else resolve("Cliente excluido")
        })
    })
}

EditCliente(infos, id){
    return new Promise((resolve, reject)=>{
        const query = 'UPDATE CLIENTES SET NOME = (?), IDADE = (?), GENERO = (?), RUA = (?), NUMERO = (?), CIDADE = (?), ESTADO = (?), TELEFONE = (?), TATUADOR = (?), DATA_CADASTRO = (?) WHERE ID = (?)'
        const parametros = [infos[0], infos[1], infos[2], infos[3], infos[4], infos[5], infos[6], infos[7], infos[8], infos[9],id]
        this.bd.run(query, parametros, (error, response)=>{
            if(error) reject(`Erro ao editar Cliente. ${error}`)
            else resolve("Cliente Editado")
        })
    })
}

PegarUltimoCliente(){
    return new Promise((resolve, reject)=>{
        const query = 'SELECT * FROM CLIENTES ORDER BY ID DESC LIMIT 1'
        this.bd.all(query, (error, response)=>{
            if(error) reject(`Erro ao acessar o Banco de Dados. ${error}`)
            else resolve(response)
        })
    })
}

}