import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/search_bar'
import BigScreen from './Components/big_screen'
import VideoList from './Components/video_list'
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
const API_KEY = 'AIzaSyDYoS-BMDQlChu3XrQvLd5xdaOtAVYNkoQ';



class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      videos:[],
      activeVideo: null
    };
    this.viedoSearch('Carts');
    this.onSearchTermChanged = _.debounce(this.onSearchTermChanged, 300);
  }

  

  onSearchTermChanged(term){
    console.log('term', term);
    this.viedoSearch(term);
  }

  viedoSearch(term){
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      console.log('videos', videos);

        this.setState({
          videos: videos,
          activeVideo: videos[0],
        });
      });
    }


  onVideoSelect(video){
    this.setState({
      activeVideo: video
      })
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SearchBar onSearchTermChanged={this.onSearchTermChanged.bind(this)}/>
              <BigScreen video={this.state.activeVideo} />
              <VideoList onVideoSelect={this.onVideoSelect.bind(this)} videos={this.state.videos} />
            </div>
          </div>    
        </div>
      </div>
    );
  }
}

export default App;
