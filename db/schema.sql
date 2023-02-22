DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE if not exists employee_db;
USE employee_db;

CREATE TABLE department(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(30) NOT NULL
    );

CREATE TABLE role(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(30) NOT NULL, 
        salary DECIMAL NOT NULL,
        department_id INT NOT NULL,
        FOREIGN KEY (department_id) REFERENCES department(id)
    );

CREATE TABLE employee(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT,
        manager_id INT,
        FOREIGN KEY (role_id) REFERENCES role(id),
        FOREIGN KEY (manager_id) REFERENCES employee(id)
    );
