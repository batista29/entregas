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
    cliente varchar (20) not null,
    endereco varchar (30) not null,
    produto varchar (30) not null,
    data date not null,
    hora_pedido time not null,
    hora_entrega time,
    hora_fim time,
    id_entregador integer not null,
    foreign key (id_entregador) references entregadores(id_entregador) on delete cascade
);

LOAD DATA INFILE 'C:/Users/SUPORTE/Desktop/senai/3DES/CRUD/aula01/docs/csv/entregadores.csv'
INTO TABLE entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/SUPORTE/Desktop/senai/3DES/CRUD/aula01/docs/csv/pedidos.csv'
INTO TABLE pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

drop view if exists vw_gestao_entregas;
create view vw_gestao_entregas AS 
SELECT e.id_entregador, e.nome, p.hora_pedido, p.hora_entrega, p.hora_fim
FROM entregadores e INNER JOIN pedidos p on e.id_entregador = p.id_entregador;
select * from vw_gestao_entregas;