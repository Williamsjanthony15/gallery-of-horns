import React from 'react';
import './App.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      renderBeast: data,
      beast: {}
    }
  }

  showBeastInModal = (clickedBeast) => {
    this.setState({
      show: true,
      renderBeast: data,
      beast: clickedBeast,
    })
  }

  hideBeastInModal = () => {
    this.setState({
      show: false,
    })
  }

  handleFormSubmitted = event => {
    event.preventDefault();
    const horns = parseInt(event.target.value);
    let filteredBeastSubmitted = data.filter(beasts => beasts.horns === horns);
    this.setState({ renderBeast: filteredBeastSubmitted })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <Main 
          beasts = {this.state.renderBeast}
          handleClick = {this.showBeastInModal}
          handleFormSubmitted={this.handleFormSubmitted}
        />
        <SelectedBeast    
          show={this.state.show}
          hideBeast={this.hideBeastInModal}
          beast={this.state.beast}
        />
        <Footer />
      </div>
    );
  }
}

export default App;