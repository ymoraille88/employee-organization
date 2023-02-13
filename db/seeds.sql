INSERT INTO role (id, title, salary, deparment_id)
VALUES (101, "Founder", 250000.00, 1),
       (102, "CEO", 175000.00, 2),
       (103, "Engineer", 145000.00, 3),
       (104,  "Manager", 90000.00, 4),
       (105, "Secretary", 60000.00, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Yves-Henry", "Moraille", 10),
       ("Stanley ", "Clervil", 20),
       ("Marie", "Moraille", 30),
       ("Zarah", "Moraille", 40, 061813),
       ("Secretary", 50);

       
