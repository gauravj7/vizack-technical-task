import React , { Component }from 'react';
import { questionbank } from './questionbank';
class Questions extends Component {
  constructor(props) {
     super(props);
     this.state = {
       next: 0,
       prev: 0,
       value:0
     };
     this.nextquestion = this.nextquestion.bind(this);
     this.prevquestion = this.prevquestion.bind(this);
   }

   nextquestion() {
     if(this.state.next<5){
       this.setState({next:this.state.next + 1, value:this.state.value + 1,prev:this.state.prev + 1});
     }

   }
   prevquestion() {
     if(this.state.prev>-1 && this.state.value>0 ){
       this.setState({prev:this.state.prev - 1, value:this.state.value - 1,next:this.state.next - 1 });
     }
   }

  render(){
    return (
      <div className='container'>
          <h3>{questionbank[this.state.value].questions}</h3>
          <input type="radio" name="answer" value="1"/> {questionbank[this.state.value].choices[0]}<br />
          <input type="radio" name="answer" value="2"/> {questionbank[this.state.value].choices[1]}<br />
          <input type="radio" name="answer" value="3"/> {questionbank[this.state.value].choices[2]}<br />
          <input type="radio" name="answer" value="4"/> {questionbank[this.state.value].choices[3]}<br />
          <div>
          <button className="btn btn-info custom" onClick={this.prevquestion}>Previous</button>
          <button className="btn btn-info custom" onClick={this.nextquestion}>Next</button>
          </div>
      </div>
    );
  }
}

export default Questions;
