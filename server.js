
const mysql = require('mysql2');

const inquire = require('inquirer');



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
  inquire.prompt([{

    type: 'list',
    name: 'type',
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
  }])
    .then((response) => {
      switch (response.type) {
        case 'View All Departments': {
          selectAll('department');
          break;
        }
        case 'View All Roles': {
          selectAll('role');
          break;
        }


        case 'View All Employees': {
          selectAll('employee');
          break;
        }
        case 'Add Department': {
          addNewDepartment();
          break;
        }
        case 'Add Role': {
          addNewRole();
          break;
        }
        case 'Add Employee': {
          addNewEmployee();
          break;
        }
        case 'Update Employee Role': {
          updateEmployee();
          break;
        }
        case 'EXIT': {
          db.end();
        }

      }


    })
};
const addNewDepartment = async () => {
  inquire.prompt([
    {
      name: 'department',
      type: 'input',
      message: 'Add the name of the Department'
    }
  ])
    .then((response) => {
      insert('department, response');
    })
};


const addNewRole = async () => {
  inquire.prompt([
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
      db.query(
        'INSERT INTO employee_db.role SET ',
        {
          role: response.role,
          department: response.department,
          salary: response.salary,
          id: response.id,
        },
        (error) => {
          if (error) throw error;
          console.log('Succesful')
        })
    });
 
};

const addNewEmployee = async () => {
  inquire.prompt([
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

const updateEmployee = async () => {
  let query = `SELECT * FROM employee`
  db.query(query, function (error, data) {
    if (error) console.log(error)
console.log(data);
    // new variable from data variable
    // new variable => [ {name:'', value: 'id'}, {}, {} ]
    
  })
  inquire.prompt([
    {
      name: 'employee',
      type: 'list',
      message: 'Which Employee do you wish to update?',
      choices: [] // <== [ {name: '', value: id }, {}, {} ]

    },
    {
      name: 'salary',
      type: 'input',
      message: 'Input New Update',

    }

  ])
    .then((response) => {
      db.query('UPDATE employee SET salary=?'
      [response.salary],
        (error) => {
          if (error) throw error;
          console.log('Succesful');
        })
    });


}

function selectAll(type) {
  console.log(type);
  let query = `SELECT * FROM ${type}`
  db.query(query, function (error, data) {
    if (error) console.log(error)

    console.table(data);
    init();
  })
}
init();

