import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import reactDom from 'react-dom';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      numberOfHearts: 0,
    }
  }
 
  buttonClicked = () => {
    this.setState ({
      numberOfHearts: this.state.numberOfHearts + 1
    });
    
  }

  render() {
    return (
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={this.props.image_url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
           {this.props.description}
           {/* <div>{this.state.numberOfHearts}</div> */}
          </Card.Text>
          <Button onClick = {this.buttonClicked} variant = "secondary" size = "lg block">
          This is my favorite Horned Beast!
        </Button>
        </Card.Body>
      </Card>
    );
  }
}


export default HornedBeast;


