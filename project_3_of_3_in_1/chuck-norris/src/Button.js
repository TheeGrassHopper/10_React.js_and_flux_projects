import React from 'react';

// another way to import componets
const Button = (props) => {
	return (
		<div className='container'>
			<div className="row">
				<div className="col-md-1 col-xs-offset-4">
					<button className="btn btn-primary" onClick={props.handleClick}>{props.children}</button>
				</div>
			</div>
		</div> 
	)
}

export default Button;