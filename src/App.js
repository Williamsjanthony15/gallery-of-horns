import React from 'react';
import './App.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeasts';

import data  from './data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      show: false,
      renderBeast: data,

      beast: {}
    }
    console.log('this is state -----', this.state);
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
    this.setState({renderBeast: filteredBeastSubmitted})
  }



  
  hideBeastInModal = () => {
    this.setState ({
      show: false,
    })
  }
  
  handleFormSubmitted = event => {
    event.preventDefault();
    const horns = parseInt(event.target.value);
//     console.log(horns);
    let filteredBeastSubmitted = data.filter(beasts => beast.horns === horns);
//     console.log(filteredBeastSubmitted);
    this.setState({beastToRender: filteredBeastSubmitted})
    
  }

  
  render(){
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

          beasts = {this.state.beastToRender}
          handleClick = {this.showBeastInModal}
          handleFormClick = {this.handleFormSubmitted}
        />
      <SelectedBeast
        Show = {this.state.show}
      hideBeast = {this.hideBeastInModal}
      beast = {this.state.beast}
      />

        <Footer />
      </div>
    );
  }
}

export default App;
