USE employees_db;

INSERT INTO department (name)
VALUES ("Finance"),
       ("Engineering"),
       ("Founders"),
       ("Human Resources");
       


INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 120000, 3),
       ("Senior Acountant", 130000, 3),
       ("Senior Engineer", 150000, 2),
       ("Engineer", 134000, 2),
       ("HR",80000, 4),
       ("Founder", 200000, 1),
       ("Co-Founder", 175000, 1);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Yves", "Moraille", 1, null),
       ("Henrys", "Legrand", 1, null),
       ("Zarah", "Moraille", 2, 1),
       ("Stefano", "Saintil", 2, 2),
       ("Stanley", "Clervil", 3, 3),
       ("Ruth", "PierrePaul" , 3, 4),
       ("Sheila", "Legrand", 4, 3);

    



       
