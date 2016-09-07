import React, { Component } from 'react';
import axios from 'axios';
import Button from './Button.js';

class App extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state ={
      randomJoke:"randomJoke",
      previousJokes: [],
      isFetchingJoke: false
    }
  }

  // this.getRandomJoke = this.getRandomJoke.bind(this);
  // axios is a library that is fetching data from icndb.com and .then its console.longing it 
  getRandomJoke(e){
    this.setState({
      isFetchingJoke: true
      })
    axios.get('http://api.icndb.com/jokes/random').then((data) =>{
        var newJoke = data.data.value.joke
        this.setState({
          randomJoke: newJoke,
           isFetchingJoke: false
          })
      })
  }

  handleClick(e){
    e.preventDefault()
    var oldJoke = this.state.randomJoke;
    this.state.previousJokes.push(oldJoke)
    this.setState({
      previousJokes: this.state.previousJokes
      })
    this.getRandomJoke()
  }

  componentWillMount(){
    this.getRandomJoke()
  }

  render() {
    return (
      <div className="container">
        <div className="row">
           <h1>{this.isFetchingJoke ? "Loading Joke....." : this.state.randomJoke}</h1>
           <div className="col-md-12">
           <Button handleClick={this.handleClick}> Click of a new Joke</Button>
             <h3>Previous Jokes</h3>
              <ul className="list-group">
                  {this.state.previousJokes.map((joke,i) => {
                      return <li className="list-group-item" key={i}>{joke}</li>
                    })}
              </ul>
          </div> 
        </div>  
      </div>
    );
  }
}

export default App;
