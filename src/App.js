import React, { Component } from 'react';
import logo from './logo.svg';
import CanvasBody from './projects/Ants/interfaceScreen/canvasBody.js';
import './App.css';

var navigateAnts = (signal) => {
  console.log("fire");
  return {
    page: "ants"
  }
}

var navigateHome = (signal) => {
  console.log("fire");
  return {
    page: "home"
  }
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      page: "home"
    }
  }

  render() {

    var handlePageChanges = () => {
      this.setState(
        navigateAnts
      );
    }

    var handlePageChanges2 = () => {
      this.setState(
        navigateHome
      );
    }

    if(this.state.page == "home"){
      return (

        <button onClick={handlePageChanges}/>

      )

    }else if(this.state.page == "ants"){
      return (
        <div>
          <CanvasBody/>
          <button onClick={handlePageChanges2}/>
        </div>
      )
    }
  }
}

export default App;
