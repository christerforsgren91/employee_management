import React, { Component } from 'react'
import axios from 'axios'

class EmployeeList extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    this.getEmployees()
  }

  getEmployees = async () => {
    let employeeData = await axios.get('https://reqres.in/api/users')
    this.setState({ employees: employeeData.data.data })
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
