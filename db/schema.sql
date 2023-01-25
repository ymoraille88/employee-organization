
CREATE DATABASE if not exists employees_db;

DROP DATABASE IF EXISTS employees_db;
CREATE TABLE department_db;
id INT NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);
CREATE TABLE role_db(
id INT NOT NULL PRIMARY KEY,
  title VARCHAR(30) NOT NULL
  salary DECIMAL NOT NULL
  department_id INT NOT NULL
);
CREATE TABLE employee_db(
id INT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL
  last_name VARCHAR(30) NOT NULL
  role_id INT
  manager_id INT NULL
);

USE employees_db;


SELECT TABLE();