CREATE DATABASE library;

USE library;

CREATE TABLE book (
    id int auto_increment not null,
    title varchar(255),
    author varchar(255) , 
    published_at varchar(255) , 
    price int,
    
    primary key(id)
)

