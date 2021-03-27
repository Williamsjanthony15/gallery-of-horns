import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';
import data from './data.json';

class Main extends React.Component {
  render() {
    let beastArray = [];
    data.forEach((animal) => {
      beastArray.push (
        <HornedBeast
      name = { animal.keyword }
      title = { animal.title }
      image_url = { animal.image_url }
      description = { animal.description }
      />
      );
    })
    return (
      <>
      <CardColumns>
        {beastArray};
      </CardColumns>
      </>
    )
  }
}

export default Main;
