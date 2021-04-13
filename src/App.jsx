import React, { Component } from 'react'
import EmployeeList from './EmployeeList'
import CharacterList from './CharacterList'
import { Container, Header } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container>
        <Header size='huge' data-cy='header'>Employee List</Header>
        <EmployeeList/>
        <Header size='huge' data-cy='character-header'>Character List</Header>
        <CharacterList/>
      </Container>
    )
  }
}


export default App;
