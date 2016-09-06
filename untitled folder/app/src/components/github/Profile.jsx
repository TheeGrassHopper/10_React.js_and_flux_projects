import React, {Component} from 'react';
import RepoList from './RepoList.jsx';

class Profile extends Component{

	render(){
		return (
			<div className="panel panel-default">
			  <div className="panel-heading">
			    <h3 className="panel-title">{this.props.userData.name}</h3>
			  </div>
			  <div className="panel-body">
			    <div className="row">
			    	<div className="col-md-4">
			    		<img src={this.props.userData.avatar_url} className="thumbnail" style={{with:'50%'}}/>
			    	</div>
			    	<div className="col-md-4 col-xs-offset-1">
			    		<div className="row">
			    			<div className="col-md-12">
			    				<span className="label label-primary">Public Repos: {this.props.userData.public_repos}</span>
			    				<span className="label label-success">Public Gists: {this.props.userData.public_gists}</span>
			    				<span className="label label-info">Followers: {this.props.userData.followers}</span>
			    				<span className="label label-danger">Following: {this.props.userData.following}</span>
			    			</div>
			    		</div>
			    		<hr/>
			    		<div className="row">
			    			<div className="col-md-12">
			    				<ul className="list-group">
			    					<li className="list-group-item"><strong className="alert-danger"> Username: {this.props.userData.login}</strong></li>
			    					<li className="list-group-item"><strong className="alert-success"> Location: {this.props.userData.location}</strong></li>
			    					<li className="list-group-item"><strong className="alert-info"> Email: {this.props.userData.email}</strong></li>

			    				</ul>
			    			</div>	
			    		</div>
			    		<br/>
			    		<a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Vist User Profile</a>		
			    	</div>
			    </div>
			    <hr/>
			    <h3> User Repositories</h3>
			    	<RepoList userRepos= {this.props.userRepos} />
			  </div>
			</div>	
		)
	}
}

export default Profile



