import React, { Component } from 'react'

import CharacterList from './CharacterList'
import { Container, Header } from 'semantic-ui-react'

class Characters extends Component {
  render() {
    return (
      <Container>        
        <Header size='huge' data-cy='character-header'>Character List</Header>
        <CharacterList/>
      </Container>
    )
  }
}


export default Characters;
