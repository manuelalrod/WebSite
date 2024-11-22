-- Crear la base de datos
CREATE DATABASE Products;
USE Products;

-- Tabla 'clientes'
CREATE TABLE clientes (
    cliente_id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100),
    direccion VARCHAR(255),
    telefono VARCHAR(15),
    email VARCHAR(100) NOT NULL
);

-- Tabla 'catalogo'
CREATE TABLE catalogo (
    catalogo_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

-- Tabla 'categoria'
CREATE TABLE categoria (
    categoria_id INT AUTO_INCREMENT PRIMARY KEY,
    catalogo_id INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    FOREIGN KEY (catalogo_id) REFERENCES catalogo(catalogo_id)
);

-- Tabla 'productos'
CREATE TABLE productos (
    producto_id INT AUTO_INCREMENT PRIMARY KEY,
    categoria_id INT NOT NULL,
    catalogo_id INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    FOREIGN KEY (categoria_id) REFERENCES categoria(categoria_id),
    FOREIGN KEY (catalogo_id) REFERENCES catalogo(catalogo_id)
);

-- Tabla 'carrito'
CREATE TABLE carrito (
    carrito_id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    producto_id INT NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id),
    FOREIGN KEY (producto_id) REFERENCES productos(producto_id)
);

-- Tabla 'compras'
CREATE TABLE compras (
    compras_id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    producto_id INT NOT NULL,
    fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id),
    FOREIGN KEY (producto_id) REFERENCES productos(producto_id)
);
