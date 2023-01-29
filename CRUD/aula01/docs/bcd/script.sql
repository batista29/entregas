drop database if exists lanchonete;
create database lanchonete charset = UTF8 collate utf8_general_ci;
use lanchonete;

create table entregadores(
    id_entregador integer AUTO_INCREMENT not null primary key,
    nome varchar (20) not null,
    email varchar (30) not null,
    senha varchar (30) not null,
    veiculo varchar (30) not null
);

create table pedidos(
    id_pedido integer AUTO_INCREMENT not null primary key,
    cliente varchar (40) not null,
    endereco varchar (50) not null,
    produto varchar (30) not null,
    data date not null,
    hora_pedido time not null,
    hora_entrega time,
    hora_fim time,
    id_entregador integer not null,
    foreign key (id_entregador) references entregadores(id_entregador) on delete cascade
);

LOAD DATA INFILE 'C:/Users/SUPORTE/Desktop/entregas/CRUD/aula01/docs/csv/entregadores.csv'
INTO TABLE entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/SUPORTE/Desktop/entregas/CRUD/aula01/docs/csv/pedidosNew.csv'
INTO TABLE pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


-- Listar pedidos em execução, com os campos hora_entrega e hora_fim em branco ou nulo ou hora 0:00 PEDIDOS EM EXECUCAO
drop view if exists vw_execucao;
create view vw_execucao AS 

SELECT e.nome,p.id_pedido,p.cliente,p.endereco,p.produto,p.data, p.hora_pedido, p.hora_entrega, p.hora_fim
FROM entregadores e INNER JOIN pedidos p
on e.id_entregador = p.id_entregador
WHERE p.hora_entrega = "00:00:00" or p.hora_entrega = null  order by p.id_pedido desc;

-- PROCURAR PELO NOME DO ENTREGADOR
drop view if exists vw_pedidos_entregador;
create view vw_pedidos_entregador AS 

SELECT e.id_entregador, e.nome, p.hora_pedido, p.hora_entrega, p.hora_fim
FROM entregadores e INNER JOIN pedidos p WHERE e.nome = "nomeEntregador" AND p.hora_fim = "00:00:00";