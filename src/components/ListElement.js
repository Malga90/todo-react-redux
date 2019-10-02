import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default class ListElement extends React.Component {
  render() {
    return (
      <div>
        <ListGroup>
          <ListGroup.Item>Get a job</ListGroup.Item>
          <ListGroup.Item>Make espresso martini</ListGroup.Item>
          <ListGroup.Item>Become React Ninja</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
