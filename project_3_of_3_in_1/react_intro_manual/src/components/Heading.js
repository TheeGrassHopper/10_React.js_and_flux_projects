import React from 'react';

class Heading extends React.Component {
	render(){
		return(
			<div>
				<h1> 
				{this.props.counter}
				</h1>
			</div>
			)
	}
}

export default Heading;