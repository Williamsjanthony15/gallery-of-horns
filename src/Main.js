import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';
import { Form } from 'react-bootstrap';
// import data from './data.json';

class Main extends React.Component {
  render() {
   let beastArray =  this.props.beasts.map((beast, index) => (
      <HornedBeast
        name={beast.keyword}
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        key = {index}
        handleClick={this.props.handleClick}
      />
    ));

    return (
      <main>
        <Form className="Form">
          <Form.Group controlId="BootStrapName">
            <Form.Label>Number of Horns</Form.Label>
            <Form.Control onInput={this.props.handleFormSubmitted} as="select">
              <option value="1">1 horn</option>
              <option value="2">2 Horns</option>
              <option value="3">3 Horns</option>
              <option value="100">100 Horns</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <CardColumns>
          {beastArray}
        </CardColumns>
      </main>
    )
  }
}

export default Main;
