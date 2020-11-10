import React, {Component} from 'react'
import Tarantino from './tarantino.jpg'
import './Style.css'
class App extends Component{
  constructor(){
    super()
    this.state = {date : new Date(),name:'Quentin Tarantino',bio:'Born in Tennessee in 1963',profession:'Screenwriter, Producer, Director',image:Tarantino,show:true}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000  );
  } 
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  toggle = () => this.setState((currentState) => ({show: !currentState.show}));

  render(){
    return(
      <div className="container text-center body">
        {this.state.date.toLocaleTimeString()}
        <div>
        {this.state.show &&
                <div className="card container">
                    <img className="form" src={this.state.image} alt='' ></img>
                    <h1>{this.state.name}</h1>
                    <h2>{this.state.bio}</h2>
                    <h3>{this.state.profession}</h3>
                </div>}
                <button className='btn-primary btn-block position container' onClick={this.toggle}>Click me</button>
            </div>
      </div>
    )
  }
}
export default App;