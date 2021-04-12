import React, { Component } from 'react'
import { Modal, Image, Header, Button } from 'semantic-ui-react'

class EmployeeModal extends Component {
  state= {
    open: false,
    employee: {}
  }

  render() {
    return (
      <Modal
      onClose={() => this.setState({ open: false})}
      onOpen={() => this.setState({ open: true})}
      open={this.state.open}
      trigger={<Button size='small' positive data-cy='view-button'>View</Button>}
      >
        <Modal.Content image data-cy='modal-container'>
          <Image data-cy='image' size='small' src={this.state.employee.avatar} wrapped />
          <Modal.Description>
            <Header data-cy='name'>{this.state.employee.first_name} {this.state.employee.last_name}</Header>
            <p data-cy='email'>
              Email: {this.state.employee.email}
            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black'>
            Edit
          </Button>
          <Button negative >
            Delete
          </Button>
        </Modal.Actions>
        
      </Modal>
    )
  }
}

export default EmployeeModal
