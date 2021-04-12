import React, { Component } from 'react'

class EmployeeList extends Component {
  state = {
    employees: [
      { id:  1, first_name:  "George", last_name:  "Bluth", avatar:  "https://reqres.in/img/faces/1-image.jpg" },
      { id:  2, first_name:  "Janet", last_name:  "Weaver", avatar:  "https://reqres.in/img/faces/2-image.jpg" },
      { id:  3, first_name:  "Emma", last_name:  "Wong", avatar:  "https://reqres.in/img/faces/3-image.jpg" },
      { id:  4, first_name:  "Eve", last_name:  "Holt", avatar:  "https://reqres.in/img/faces/4-image.jpg" },
      { id:  5, first_name:  "Charles", last_name:  "Morris", avatar:  "https://reqres.in/img/faces/5-image.jpg" },
      { id:  6, first_name:  "Tracey", last_name:  "Ramos", avatar:  "https://reqres.in/img/faces/6-image.jpg" }
    ]
  }
  
  render() {
    let employeeList = this.state.employees.map(employee => (
        <li key={employee.id} data-cy='employee-item'>
          <p data-cy='name'>{employee.first_name} {employee.last_name}</p>
        </li>
      )
    )
  return (
    <ul data-cy='employee-list'>
      {employeeList}
    </ul>
  )
  }
}

export default EmployeeList
