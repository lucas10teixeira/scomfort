create database db_tasks;
use db_tasks;
 
create table task(
    id int auto_increment primary key,
    nome varchar(30) not null,
    sobrenome varchar(30) not null,
    email varchar(50) unique not null

);
select*from task