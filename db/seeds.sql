INSERT INTO department (name)
VALUES ("Executive"),
       ("Administrative"),
       ("Engineering");


INSERT INTO role (id, title, salary, department_id)
VALUES (101, "Founder", 250000.00, 1),
       (102, "CEO", 175000.00, 1),
       (103, "Engineer", 145000.00, 3),
       (104,  "Manager", 90000.00, 2),
       (105, "Secretary", 60000.00, 2);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Yves-Henry", "Moraille", 101, NULL),
       ("Stanley ", "Clervil", 102, 1),
       ("Marie", "Moraille", 103, NULL),
       ("Zarah", "Moraille", 104, 3);
     

       
