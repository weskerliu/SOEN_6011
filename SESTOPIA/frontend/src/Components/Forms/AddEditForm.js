import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForm extends React.Component {

  getItems(){
    fetch('http://localhost:6011/api/v1/tools')
      .then(response => response.json())
      .then(items => this.setState({items}))
      .catch(err => console.log(err))
  }

  state = {
    id: '0',
    name: '',
    descrption: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:6011/api/v1/tools', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        descrption: this.state.descrption,
      })
    })
      .then(response => response.json())
      .then(item => {
        console.log(item);
        if(item.error === false) {
          this.setState({id:item.data})
          this.props.addItemToState(this.state)
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:6011/api/v1/tools', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        descrption: this.state.descrption,
      })
    })
      .then(response => response.json())
      .then(item => {
        //console.log(item)
        if(item.error === false) {
          console.log("enter if");
          this.props.updateState(this.state)
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { id, name, descrption } = this.props.item
      this.setState({ id, name, descrption })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="name">name</Label>
          <Input type="text" name="name" id="name" onChange={this.onChange} value={this.state.name === null ? '' : this.state.name} />
        </FormGroup>
        <FormGroup>
          <Label for="descrption">descrption</Label>
          <Input type="text" name="descrption" id="descrption" onChange={this.onChange} value={this.state.descrption === null ? '' : this.state.descrption}  />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForm