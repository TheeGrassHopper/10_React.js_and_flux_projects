import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: 'TheeGrassHopper',
			userData: [],
			userRepos: [],
			perPage: 10
		};
	}

	// Get User Date from github
	getUserData(){
		$.ajax({
   		 url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,	
 				dataType: 'json',
				cache: false,
				success: function(data){
					this.setState({userData: data});
					console.log(data)
				}.bind(this),
				error: function(xhr, status, err){
					this.setState({username: null});
					alert(err);
				}.bind(this)
			});
	}
	getUserReops(){
		$.ajax({
    	url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
    	dataType:'json',
    	cache: false,
    	success: function(data){
    		this.setState({userRepos: data});
    			console.log(data)
    	}.bind(this),
    	error: function(xhr, status, err){
    		this.setState({username: null});
    		alert(err);
    	}.bind(this)
			});
	}

	handleFormSubmit(username){
		this.setState({username: username}, function(){
			this.getUserData();
			this.getUserReops();
			})
	}
	componentDidMount(){
		this.getUserData();
		this.getUserReops();
	}

	render(){
		return (
			<div>
				<Search onFormSubmit = {this.handleFormSubmit.bind(this)}/>
				<Profile {...this.state} />
			</div>
		)
	}
}

App.propTypes = {
 	clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};
App.defaultProps ={
	clientId: 'cbc4df4d7d8e1c2c359a',
	clientSecret: '1b637b535ff5ba288feeb731be3947d7000c6fe7'
};

export default App



