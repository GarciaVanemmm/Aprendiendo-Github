CREATE DATABASE Mensajeusuario;
USE Mensajeusuario;

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50),
    Correo  VARCHAR(100),
    Tema  VARCHAR(50),
    Mensaje VARCHAR(225)
);

