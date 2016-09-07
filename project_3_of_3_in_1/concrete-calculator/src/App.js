import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.handleSubmit =this.handleSubmit.bind(this)
    this.reset = this.reset.bind(this)

    this.state = {
      totalYards: null

    }
  }

  handleSubmit(e){
    e.preventDefault()
    var length = parseFloat(this.refs.lengthFeet.value) + parseFloat(this.refs.lengthInch.value) / 12;
    var width = parseFloat(this.refs.widthFeet.value) + parseFloat(this.refs.lengthInch.value) / 12;
    var depth = parseFloat(this.refs.depthFeet.value) + parseFloat(this.refs.depthInch.value) / 12;
    var totalYards = (length * width * depth) / 27;

    this.setState({
      totalYards: totalYards
      })
    console.log('totalYards', totalYards);
  }

  reset(e){
    e.preventDefault()
    this.setState({
      totalYards: null
      })
    this.refs.lengthFeet.value = '';
    this.refs.widthFeet.value = '';
    this.refs.depthFeet.value= '';
    this.refs.lengthInch.value='';
    this.refs.widthInch.value='';
    this.refs.depthInch.value='';
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>This is Concrete Calculate </h1>
          <h2>{this.state.totalYards === null ? "Enter Values Below" : "You need enter  " + this.state.totalYards + " Yards of Concrete"}</h2>
        </div>

        <form onSubmit={this.handleSubmit}>
            <input ref="lengthFeet" type="text" placeholder="Length in Feet" />
            <input ref="lengthInch" type="text" placeholder="Length in Inch" />
          <br />
            <input ref="widthFeet" type="text" placeholder="Width in Feet" />
            <input ref="widthInch" type="text" placeholder="Width in Inch" />
          <br />
            <input ref="depthFeet" type="text" placeholder="Depth in Feet" />
            <input ref="depthInch" type="text" placeholder="Depth in Inch" />
          <br />

           <input type="submit" value="Calculate Yards"/>
           <button onClick={this.reset}>Reset</button>
        </form>
      </div>
    );
  }
}

export default App;
