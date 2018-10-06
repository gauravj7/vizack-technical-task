import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//
import Questions from'./components/questions.js';


class App extends Component {

  constructor(props) {
     super(props);
     this.state = {
       showComponent: false,
       showlevels: true
     };
     this.changeComponent = this.changeComponent.bind(this);
   }


   changeComponent() {
     this.setState({
      showComponent: true,
      showlevels: false
    });
   }

  render() {
    return (
      <div className="App">
        <h1>QUIZ APP</h1>
        <div className="container">
        {this.state.showlevels ?
          <div>

          <button className="btn btn-info custom" onClick={this.changeComponent}>easy</button>
          <button className="btn btn-info custom" onClick={this.changeComponent}>medium</button>
          <button className="btn btn-info custom" onClick={this.changeComponent}>hard</button>

          </div>
           :
       null
    }
            {this.state.showComponent ?
           <Questions /> :
           null
        }
        </div>
      </div>
    );
  }
}

export default App;
