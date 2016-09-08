import React,{Component} from 'react';
import VideoListItem from './video_list_item';



class VideoList extends Component{
	render(){

	const listItems = this.props.videos.map((value, index) => {
		console.log('value', value);
		return <VideoListItem onVideoSelect={this.props.onVideoSelect} videoItem={value} key={value.etag} />;
	});

		return  (
				<ul className="col-md-4 list-group">
					{listItems}
				</ul>
			)
	}
}

export default VideoList;