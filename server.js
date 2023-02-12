const { response } = require('express');
const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);



const init = () => {
  prompt({
    type: 'list',
    message: 'What would you like to do?',
    choices: [

      'View All Employees',
      'Add Employee',
      'Update Employee Role',
      'View All Roles',
      'Add Role',
      'View All Departments',
      'Add Department'

    ],
  })
    .then((response)) => {
  chooseOption(response.type);


};
const addNewDepartment = async () => {
  prompt([
    {
      name: 'department',
      type: 'input',
      message: 'Add the name of the Department'
    }
  ])
    .then((response) => {
      insert('department, response');
    });


  const addNewRole = async () => {
    prompt([
      {
        name: 'role',
        type: 'input',
        message: 'The Id of the Role?'
      },
      {

        name: 'department',
        type: 'list',
        choices: 'departments',
        message: 'Add the Id of the Department'
      },
      {
        name: 'salary',
        type: 'input',
        message: 'Add the Salary of the Employee'
      },

      {
        name: 'id',
        type: 'input',
        message: 'Add id number'
      }
    ])
      .then((response) => {
        deparments.forEach(department => {
          if (department.name === response.department) {
            response.department === department.id;
          }
        })
      });
    db.query(
      'INSERT INTO employee_db.role SET ',
      {
        role: response.role,
        department: response.department,
        salary: response.salary,
        id: response.id,
      },
      (error) => {
if (err) throw err;
console.log('Succesful')
      })
  };
  const addNewEmployee = async () => {
    let [managers] = await selectAllNameAndValue('first_name', 'last_name', 'employee', 'id');
    let [roles] = await selectAllNameAndValue('role', 'id');
    prompt([
      {
        name: 'first_name',
        type: 'input',
        message: 'Add Employee First Name'
      },
      {
        name: 'last_name',
        type: 'input',
        message: 'Add Employee Last Name'
      },
      {

        name: 'manager',
        type: 'input',
        message: 'Is the Employee going to be a Manager?'
        
      },
      {
        name: 'role',
        type: 'list',
        message: 'Please Choose a Role for the employee'
      },

      {
        name: 'id',
        type: 'input',
        message: 'Add id number'
      }
    ])
    .then((response) => {
      insert('employee', response);
    });  






}







  init();







}
