import React from 'react';
import ReactDOm from 'react-dom';
import Heading from './Heading';

class App extends React.Component {
	constructor(props){
		super(props)

		// we are binding the incrementCounter to the class App
		this.incrementCounter = this.incrementCounter.bind(this)
		this.onChange = this.onChange.bind(this)
		this.state = {
			counter: 0,
			name: 'Alwan'

		}
	}
	incrementCounter(e){
		e.preventDefault();
		this.setState({
			counter: this.state.counter + 1
		})
	}
	onChange(e){
		e.preventDefault();
		var newName = this.refs.nameField.value;
		this.setState({
			name: newName
			})
	}
	render(){
		return(
			<div>
				<input ref="nameField" type="text" onChange={this.onChange}/>
				<p> This name that was entered {this.state.name} </p>
				<Heading counter={this.state.counter} />
				<button onClick={this.incrementCounter}>Adding counter </button>
			</div>	
		 )
	}
}

export default App;