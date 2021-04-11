import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';
import './Main.css';

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
        <CardColumns>
          {beastArray};
      </CardColumns>
      </>
    )
  }
}

export default Main;
