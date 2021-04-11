import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeasts';

import data  from './data.json';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: 'false',
      beastToRender: data,
      beast: {}
    }
    console.log('this is state -----', this.state);
  }
  
  showBeastInModal = () => {
    this.setState({
      show: true,
      beast: clickedBeast,
    })
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
    
      <>
        <Header />
        <Main 
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
      </>
    );
  }
}

export default App;
