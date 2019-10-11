import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default class ListElement extends React.Component {
  render() {
    return (
      <div>
        <ListGroup.Item className="d-flex justify-content-between">
          {this.props.item}
          <ButtonGroup>
            <Button variant="success">Done</Button>
            <Button variant="danger">Remove</Button>
          </ButtonGroup>
        </ListGroup.Item>
      </div>
    );
  }
}
