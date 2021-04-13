import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";

const Header = () => {
  return (
    <Segment basic inverted textAlign="center" color="blue">      
      <Menu ui secondary inverted compact menu size="large">
        <Menu.Item
          position="right"
          id="characters-tab"
          name="characters-tab"
          data-cy="characters-tab"
          as={NavLink}
          to={{ pathname: "/characters" }}
        />
        <Menu.Item
          id="employees-tab"
          name="employees-tab"
          data-cy="employees-tab"
          as={NavLink}
          to={{ pathname: "/employees" }}
        />        
      </Menu>
    </Segment>
  );
};

export default Header;