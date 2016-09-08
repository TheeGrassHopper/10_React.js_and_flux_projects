import React, {Component} from 'react';


class SearchBar extends Component {
	render(){
		return (
			<div className="search-bar">
				<input onKeyUp={(event) => {
					this.props.onSearchTermChanged(event.target.value);
						}
					}
					ref="search" className="form-control"/>
			</div>
			)
	}
}

export default SearchBar;













