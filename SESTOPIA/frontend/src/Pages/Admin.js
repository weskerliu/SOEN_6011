import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ModalForm from "./../Components/Modals/Modal";
import DataTable from "./../Components/Tables/DataTable";

class Admin extends Component {
  state = {
    items: [],
    skills: [],
  };

  getItems() {
    fetch("http://localhost:6011/api/v1/tools")
      .then((response) => response.json())
      .then((items) => this.setState({ items }))
      .catch((err) => console.log(err));
      console.log("items", this.state.items);
  }

  getSkills() {
    fetch("http://localhost:6011/api/v1/skills")
      .then((response) => response.json())
      .then((skills) => this.setState({ skills }))
      .catch((err) => console.log(err));
  }

  addItemToState = (item) => {
    this.setState((prevState) => ({
      items: [...prevState.items, item],
    }));
  };

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex((data) => data.id === item.id);
    const newArray = [
      // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
      // add the updated item to the array
      item,
      // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1),
    ];
    this.setState({ items: newArray });
  };

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: updatedItems });
  };

  componentDidMount() {
    this.getItems();
    this.getSkills();
    console.log("tools", this.state.items);
  }

  render() {
    return (
      <Container className="App">
        <Row>
          <Col>
            <h1 style={{ margin: "20px 0" }}>Tools</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable
              items={this.state.items}
              updateState={this.updateState}
              deleteItemFromState={this.deleteItemFromState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ModalForm
              buttonLabel="Add tool"
              addItemToState={this.addItemToState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 style={{ margin: "20px 0" }}>SKills</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="/CreateSkill">
              <Button color="success">add SKill</Button>
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Admin;
