import React from "react";
import ListElement from "./ListElement";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default class TodoList extends React.Component {
  render() {
    return (
      <Container className="mt-4">
        <Row className="justify-content-md-center">
          <h1>To Do List</h1>
        </Row>
        <Form>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="What would you like to do?"
              aria-label="To do to add"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button type="submit" variant="info">
                Add
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        <ListElement />
      </Container>
    );
  }
}
