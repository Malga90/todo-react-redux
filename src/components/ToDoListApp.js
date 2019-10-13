import React from "react";
import { connect } from "react-redux";
//import { getTodos } from "../selectors/selectors";
import * as todoAction from "../actions/todoAction";
// import ListElement from "./ListElement";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      inputValue: ""
    };
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let todo = {
      inputValue: this.state.inputValue
    };

    if (!todo.inputValue) {
      return false;
    } else {
      e.target.elements[0].value = "";

      this.setState({
        inputValue: ""
      });
    }

    this.props.addTodo(todo);
  }

  render() {
    return (
      <Container className="mt-4">
        <Row className="justify-content-md-center">
          <h1>To Do List</h1>
        </Row>
        <Form onSubmit={this.handleSubmit}>
          <InputGroup className="mb-3" onChange={this.handleChange}>
            <FormControl placeholder="What would you like to do?" />
            <InputGroup.Append>
              <Button type="submit" variant="info">
                Add
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        <ListGroup>
          {this.props.todos.map((todo, i) => (
            <ListGroup.Item className="d-flex justify-content-between" key={i}>
              {i + 1}. {todo.inputValue}
              <ButtonGroup>
                <Button variant="success">Done!!</Button>
                <Button variant="danger">Remove</Button>
              </ButtonGroup>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = (state, store) => {
  return {
    todos: state.todos,
    storeTodos: store.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(todoAction.addTodo(text))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
