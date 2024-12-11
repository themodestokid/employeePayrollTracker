// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const getNextEmployee = function() {
  const first = prompt("first name:");
  if (!first) {
    return null;
  }
  const last = prompt("last name:");
  if (!last) {
    return null;
  }
  const sal = prompt("salary:");
  if (!sal) {
    return null;
  }
  const result = {
    firstName: first,
    lastName: last,
    salary: isNaN(sal) ? 0 : Number(sal)
  }
  return confirm('Add employee?') ? result : null;
}

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let result = [];
  while (true) {
    const employee = getNextEmployee();
    if (!employee) {
      break;
    }
    result.push(employee);
  }
  return result;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let count = 0;
  let sum = 0;
  for (const employee of employeesArray) {
    count++;
    sum += employee.salary;
  }
  console.log (`sum ${sum} count ${count}`);
  console.log(`The average employee salary between our employee(s) is ${(count === 0 ? 0 : sum / count)}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  if (employeesArray.length === 0) {
    return; //no employees
  }
  const employee = employeesArray[Math.floor(Math.random() * employeesArray.length)]
  console.log(`Congratulations to ${employee.firstName} ${employee.lastName}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
