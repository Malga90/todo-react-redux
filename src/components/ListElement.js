import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default class ListElement extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.deleteTodo(this.props.todo);
  }

  render() {
    return (
      <div>
        <ListGroup.Item className="d-flex justify-content-between">
          {this.props.count}. {this.props.todo}
          <ButtonGroup>
            <Button variant="success">Done</Button>
            <Button onClick={this.handleClick} variant="danger">
              Remove
            </Button>
          </ButtonGroup>
        </ListGroup.Item>
      </div>
    );
  }
}
