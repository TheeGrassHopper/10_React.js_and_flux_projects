import React, {Component} from 'react';

class BigScreen extends Component {
	render(){
		if(!this.props.video){
			return <div> Loading ...</div>
		}

		let videoUrl = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
		return (
				<div className="video-detail col-md-8">
               		<div className="embed-responsive embed-responsive-16by9">
               			<iframe className="embed-responsive-item" src={videoUrl}></iframe>
               		</div>
               		<div className="details">
                  		<div className="media-heading">Title: {this.props.video.snippet.title} </div>
                 		<div>Description: {this.props.video.snippet.description} </div>
               		</div>
            	</div>
		 )
	}
}


export default BigScreen