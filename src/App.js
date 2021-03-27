import React from 'react';
import './App.css';
import data  from './data.json';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';


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
  
  // hideBeastInModal = ()
  

  render(){
    console.log(this.state);
    return (
    
      <>
        <Header />
        <Main 
          beasts = {data}
          show = 
        
        />
        <Footer />
      </>
    );
  }
}

export default App;
