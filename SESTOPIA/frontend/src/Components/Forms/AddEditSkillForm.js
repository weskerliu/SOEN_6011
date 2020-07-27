import React, { Component } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Badge,
} from "reactstrap";


class AddEditSkillForm extends Component{

  render(){
    return(
      <Form>
        <h1><Badge color="secondary">Create Skill</Badge></h1>
        <FormGroup>
          <Label for="title">Skill title</Label>
          <Input
            type="text"
            name="title"
            id="skillTitle"
            placeholder="Skill title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="author">Author</Label>
          <Input
            type="text"
            name="author"
            id="author"
            placeholder="who edit it?"
          />
        </FormGroup>
        <FormGroup>
          <Label for="classification">Classification</Label>
          <Input
            type="text"
            name="classification"
            id="classification"
            placeholder="soft/hard, tech/non-tech "
          />
        </FormGroup>
        <FormGroup>
          <Label for="prerequisites">prerequisites</Label>
          <Input
            type="text"
            name="prerequisites"
            id="prerequisites"
            placeholder="to use this skill, what you need to have "
          />
        </FormGroup>
        <FormGroup>
          <Label for="work_relate">Work Related to Skill</Label>
          <Input
            type="text"
            name="author"
            id="author"
            placeholder="Related Activities and Artifacts"
          />
        </FormGroup>
        <FormGroup>
          <Label for="rationaleForSkill">rationale For Skill</Label>
          <Input
            type="textarea"
            name="classification"
            id="classification"
            placeholder="why this skill "
          />
        </FormGroup>
        <FormGroup>
          <Label for="roleofCultivatingSkill">Role of Academia or Industry in Cultivating the Skill</Label>
          <Input
            type="textarea"
            name="roleofCultivatingSkill"
            id="roleofCultivatingSkill"
            placeholder="where can you gain the skill"
          />
        </FormGroup>

        <FormGroup>
          <Label for="seArea">Software Engineer Area</Label>
          <Input type="select" name="selectseArea" id="selectseArea">
            {seItems.map((seItem, index) => (
              <option key={index}>{seItem.title}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="selectMultiTools">Select tools</Label>
          <Input
            type="select"
            name="selectMultiTools"
            id="selectMultiTools"
            multiple
          >
            {toolItems.map((toolItem, index) => (
              <option key={index}>{toolItem.name}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="selectMultiRoles">Select roles</Label>
          <Input
            type="select"
            name="selectMultiTools"
            id="selectMultiRoles"
            multiple
          >
            {roleItems.map((rolelItem, index) => (
              <option key={index}>{rolelItem.name}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>self assessment score</legend>
          <Row>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="score" /> 1
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="score" /> 2
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="score" /> 3
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="score" /> 4
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="score" /> 5
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="score" /> 6
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="score" /> 7
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="score" /> 8
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="score" /> 9
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="score" /> 10
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Label for="reasonForselfAssess"> Reasons for Self-Assigned Score</Label>
          <Input
            type="textarea"
            name="reasonForselfAssess"
            id="reasonForselfAssess"
            placeholder="why you give this score "
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditSkillForm