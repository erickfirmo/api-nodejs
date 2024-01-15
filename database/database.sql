create database api_node;

use api_node;

create table users (
    id int primary key auto_increment,
    name varchar(40),
    email varchar(40) unique,
    password varchar(30)
);

insert into users (name, email, password) values ('Эрик Фирмо', 'erickfirmo1996@gmail.com', 'secret');
insert into users (name, email, password) values ('Александра', 'alexsandra@gmail.com', 'secret');
