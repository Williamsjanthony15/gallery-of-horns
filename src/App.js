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
  

  render(){
    console.log(this.state);
    return (
    
      <>
        <Header />
        <Main 
          beasts = {data}
          handleClick = {this.showBeastInModal}
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
