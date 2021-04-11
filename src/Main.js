import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';
import './Main.css';
import { Form } from 'react-bootstrap';

class Main extends React.Component {
  render() {
   let beastArray =  this.props.beasts.map((beast, index) => (
      <HornedBeast
        name = {beast.keyword}
        title = {beast.title}
        image_url = {beast.image_url}
        description = {beast.description}
        key = {index}
        handleClick = {this.props.handleClick}
      />
    ));
    return (
      <>
      <Form className="Form">
        <Form.Group controlId="bootstrapName">
          <Form.Label>Number of Horns</Form.label>
            <Form.Control onInput = {this.props.handleFormSubmitted} as="select">
             <option value="1">1 Horn</option>
             <option value="2">2 Horn</option>
             <option value="3">3 Horn</option>
             <option value="100">100 Horn</option>
            </Form.Control>
        </Form.Group>
      </form>
        <CardColumns>
          {beastArray};
      </CardColumns>
      </>
    )
  }
}

export default Main;
