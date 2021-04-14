import React, { Component } from "react";
import { Modal, Header, Button } from "semantic-ui-react";
import axios from "axios";

class CharacterModal extends Component {
  state = {
    open: false,
    character: {},
  };

  getCharacter = async () => {
    let characterData = await axios.get(this.props.url);
    this.setState({ character: characterData.data });
  };

  render() {
    return (
      <Modal
        onClose={() => this.setState({ open: false })}
        onOpen={() => this.setState({ open: true })}
        open={this.state.open}
        trigger={
          <Button
            onClick={() => {
              this.getCharacter();
            }}
            size="small"
            positive
            data-cy="view-button"
          >
            View
          </Button>
        }
      >
        <Modal.Content image data-cy="modal-container">
          <Modal.Description>
            <Header data-cy="name">{this.state.character.name}</Header>
            <p data-cy="height">Height: {this.state.character.height}</p>
            <p data-cy="mass">Mass: {this.state.character.mass}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black">Edit</Button>
          <Button negative>Delete</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default CharacterModal;
