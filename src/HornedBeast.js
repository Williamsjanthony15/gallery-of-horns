import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import reactDom from 'react-dom';
// Acting Parent

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      numberOfHearts: 0,
    }
  }
 
  buttonClicked = () => {
    this.setState ({
      numberOfHearts: this.state.numberOfHeart +1
    });
    this.props.handleClick({
      title: this.props.title,
      description: this.props.description,
      image_url: this.props.image_url
    })
    
  }

  render() {
    return (
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={this.props.image_url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
           {this.props.description}
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


