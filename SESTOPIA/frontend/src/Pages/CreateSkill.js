import React, { Component } from "react";
//import { BrowserRouter as Router, Switch } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Badge,
} from "reactstrap";
import  CheckBox  from './../Components/Tables/Checkbox';

class CreateSkill extends Component {
  state = {
    title:'',
    author:'',
    classification:'',
    prerequisites:'',
    rationaleForSkill:'',
    work_relate:'',
    roleofCultivatingSkill:'',
    selfAssessment_score:'5',
    reason:'',
    tool_id:[],
    se_id:'',
    roles_id:[],
    toolItems: [],
    seItems: [],
    roleItems: [],
  };

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
    console.log(e.target.value)
    console.log(e.target.name)
    console.log("se id: ",this.state[e.target.name]);
  }



  handleCheckChieldElement = (event,asd) => {
    console.log(event.target.name)
    let items = this.state[asd]
    for(const item of items){
      if (item.id == event.target.value){
        item.isChecked =  event.target.checked;
      }
    }
    this.setState({[asd]:items})

    console.log(event.target.value);
    console.log(this.state[asd]);
  }




  getToolItems() {
    fetch("http://localhost:6011/api/v1/tools")
      .then((response) => response.json())
      .then((toolItems)=>{
        for(const index of toolItems){
          index.isChecked = false;
        }
        this.setState({ toolItems:toolItems })
      })
      .catch((err) => console.log(err));
  }

  getSoftEngineerAreaItems() {
    fetch("http://localhost:6011/api/v1/seareas")
      .then((response) => response.json())
      .then((seItems) => {
        this.setState({ seItems });
      })
      .catch((err) => console.log(err));
  }

  getRoleItems() {
    fetch("http://localhost:6011/api/v1/roles")
      .then((response) => response.json())
      .then((roleItems) => {
        for(const index of roleItems){
          index.isChecked = false;
        }
        this.setState({ roleItems });
      })
      .catch((err) => console.log(err));
  }

  submitFormAdd = e => {
    e.preventDefault()
    let toolItemId=[];
    for(const index of this.state.toolItems){
      if(index.isChecked == true){
        toolItemId.push(index.id);
      }
    }
    console.log(toolItemId)
    this.setState({tool_id:toolItemId});
    console.log("tools ", this.state.tool_id)
    let roleItemId=[];
    for(const index of this.state.roleItems){
      if(index.isChecked == true){
        roleItemId.push(index.id);
      }
    }
    console.log("item: ", roleItemId)
    this.setState({roles_id:roleItemId})
    console.log("roles ",this.state.roles_id)
    console.log("reason: ", this.state.reason)

    fetch('http://localhost:6011/api/v1/skills', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        author:this.state.author,
        classification: this.state.classification,
        prerequisites: this.state.classification,
        rationaleForSkill: this.state.rationaleForSkill,
        work_relate: this.state.work_relate,
        roleofCultivatingSkill:this.state.roleofCultivatingSkill,
        selfAssessment_score:this.state.selfAssessment_score,
        reason:this.state.reason,
        tool_id:toolItemId,
        se_id:this.state.se_id,
        roles_id:roleItemId
      })
    })
      .then(response => response.json())
      .then(item => {
        console.log(item);
        if(item.error === false) {
            console.log("success!")
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getToolItems();
    this.getRoleItems();
    this.getSoftEngineerAreaItems();
  }

  render() {
    const toolItems = this.state.toolItems;
    const roleItems = this.state.roleItems;
    const seItems = this.state.seItems;
    //console.log(this.state.toolItems);
    return (
      <Form onSubmit={this.submitFormAdd}>
        <h1><Badge color="secondary">Create Skill</Badge></h1>
        <FormGroup>
          <Label for="title">Skill title</Label>
          <Input
            type="text"
            name="title"
            id="skillTitle"
            onChange={this.onChange}
            value={this.state.title === null ? '' : this.state.title}
            placeholder="Skill title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="author">Author</Label>
          <Input
            type="text"
            name="author"
            id="author"
            onChange={this.onChange}
            value={this.state.author === null ? '' : this.state.author}
            placeholder="who edit it?"
          />
        </FormGroup>
        <FormGroup>
          <Label for="classification">Classification</Label>
          <Input
            type="text"
            name="classification"
            id="classification"
            onChange={this.onChange}
            value={this.state.classification === null ? '' : this.state.classification}
            placeholder="soft/hard, tech/non-tech "
          />
        </FormGroup>
        <FormGroup>
          <Label for="prerequisites">prerequisites</Label>
          <Input
            type="text"
            name="prerequisites"
            id="prerequisites"
            onChange={this.onChange}
            value={this.state.prerequisites === null ? '' : this.state.prerequisites}
            placeholder="to use this skill, what you need to have "
          />
        </FormGroup>
        <FormGroup>
          <Label for="work_relate">Work Related to Skill</Label>
          <Input
            type="text"
            name="work_relate"
            id="author"
            onChange={this.onChange}
            value={this.state.work_relate === null ? '' : this.state.work_relate}
            placeholder="Related Activities and Artifacts"
          />
        </FormGroup>
        <FormGroup>
          <Label for="rationaleForSkill">rationale For Skill</Label>
          <Input
            type="textarea"
            name="rationaleForSkill"
            id="classification"
            onChange={this.onChange}
            value={this.state.rationaleForSkill === null ? '' : this.state.rationaleForSkill}
            placeholder="why this skill "
          />
        </FormGroup>
        <FormGroup>
          <Label for="roleofCultivatingSkill">Role of Academia or Industry in Cultivating the Skill</Label>
          <Input
            type="textarea"
            name="roleofCultivatingSkill"
            id="roleofCultivatingSkill"
            onChange={this.onChange}
            value={this.state.roleofCultivatingSkill === null ? '' : this.state.roleofCultivatingSkill}
            placeholder="where can you gain the skill"
          />
        </FormGroup>
        <FormGroup>
          <Label for="seArea">Software Engineer Area</Label>
          <Input type="select" name="se_id" id="selectseArea"  value={this.state.value} onChange={this.onChange}>
            {seItems.map((seItem, index) => (
              <option key={index} value={seItem.id} >{seItem.title}</option>
            ))}
          </Input>
        </FormGroup>
        <Label for="tools">Tool</Label>
        <ul>
        {
          toolItems.map((toolItem,index) => {
            return (<CheckBox key={index}   handleCheckChieldElement={(e)=>this.handleCheckChieldElement(e,"toolItems")}  {...toolItem} />)
          })
        }
        </ul>

        <Label for="roles">Roles for work</Label>
        <ul>
        {
          roleItems.map((roleItem,index) => {
            return (<CheckBox key={index}   handleCheckChieldElement={(e)=>this.handleCheckChieldElement(e,"roleItems")}  {...roleItem} />)
          })
        }
        </ul>

        <FormGroup>
          <Label for="reasonForselfAssess"> Reasons for Self-Assigned Score</Label>
          <Input
            type="textarea"
            name="reason"
            id="reasonForselfAssess"
            onChange={this.onChange}
            value={this.state.reason === null ? '' : this.state.reason}
            placeholder="why you give this score "
          />
        </FormGroup>
        <a href="/admin">
        <Button type="submit">Submit</Button>
        </a>
      </Form>
    );
  }
}

export default CreateSkill;
