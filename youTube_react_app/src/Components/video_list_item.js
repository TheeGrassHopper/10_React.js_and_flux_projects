import React, {Component} from 'react';


class VideoListItem extends Component{
	render(){
		return (
				<li onClick={this.props.onVideoSelect.bind(this, this.props.videoItem)} className="list-group-item">
                  <div className="video-list media">
                    <div className="media-left">
						<img className="media-object" alt="viedos" src={this.props.videoItem.snippet.thumbnails.default.url} />
					</div>	
                  	<div className="media-body">
                    	<div className="media-heading">Title: {this.props.videoItem.snippet.channelTitle}</div>
                    	<div>Description: {this.props.videoItem.snippet.description}</div>
                    </div>	
                  </div>
                </li>
               )
	}
}

export default VideoListItem;