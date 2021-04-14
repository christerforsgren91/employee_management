import React, { Component } from "react";
import axios from "axios";
import { Card, CardContent } from "semantic-ui-react";
import CharacterModal from "./CharacterModal";

class CharacterList extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters = async () => {
    let characterData = await axios.get("https://swapi.dev/api/people/");
    this.setState({ characters: characterData.data.results });
  };

  render() {
    let characterList = this.state.characters.slice(0, 6).map((character) => {
      return (
        <Card data-cy="character-item">
          <Card.Header data-cy="name">{character.name}</Card.Header>
          <Card.Description data-cy="hair-color">
            {character.hair_color}
          </Card.Description>
          <CardContent>
            <CharacterModal url={character.url} />
          </CardContent>
        </Card>
      );
    });
    return <Card.Group data-cy="character-list">{characterList}</Card.Group>;
  }
}

export default CharacterList;
