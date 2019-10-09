import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default class ListElement extends React.Component {
  render() {
    return (
      <div>
        <ListGroup>
          <ListGroup.Item className="d-flex justify-content-between">
            Get a job
            <ButtonGroup>
              <Button variant="success">Done</Button>
              <Button variant="danger">Remove</Button>
            </ButtonGroup>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            Make espresso martini
            <ButtonGroup>
              <Button variant="success">Done</Button>
              <Button variant="danger">Remove</Button>
            </ButtonGroup>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            Become React Ninja
            <ButtonGroup>
              <Button variant="success">Done</Button>
              <Button variant="danger">Remove</Button>
            </ButtonGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
