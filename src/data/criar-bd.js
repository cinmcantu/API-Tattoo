const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/data/database.db');

//==== CLIENTES
const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(255),
    "IDADE" varchar(255),
    "GENERO" varchar(255),
    "RUA" varchar(255),
    "NUMERO" varchar(255),
    "CIDADE" varchar(255),
    "ESTADO" varchar(255),
    "TELEFONE" varchar(255),
    "TATUADOR" varchar(255),
    "DATA_CADASTRO" date
  );`;

const ADD_CLIENTES_DATA = `
  INSERT INTO CLIENTES (ID, NOME, IDADE, GENERO, RUA, NUMERO, CIDADE, ESTADO, TELEFONE, TATUADOR, DATA_CADASTRO)
  VALUES 
  (1, 'Bárbara Avelar', '24', 'Feminino', 'Rua dos Abacaxis', '36', 'Cidade dos Abacaxis', 'Estado dos Abacaxis', '(24) 7812-2937', 'Vicentino, o Primeiro', '13/04/2016')
  `

function criaTabelaClientes() {
    db.run(CLIENTES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de Clientes", error);
    });
}


function populaTabelaClientes() {
    db.run(ADD_CLIENTES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de Clientes", error);
    });
}

db.serialize( ()=> {
    criaTabelaClientes();
    populaTabelaClientes();
});