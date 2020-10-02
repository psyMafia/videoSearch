//122

import React from "react";
import SearchBar from "./SearchBar";
import AxiosYouTubeInstance from "./apis/YouTube";
// eslint-disable-next-line no-unused-vars
import { AxiosResponse } from "axios";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  callSearch = async (term: string) => {
    console.log("search for: " + term);

    const respone: AxiosResponse<any> = await AxiosYouTubeInstance.get(
      "/search",
      {
        params: {
          q: term,
        },
      }
    );

    console.log("reciver result: ");
    console.log(respone);

    this.setState({
      videos: respone.data.items,
      selectedVideo: respone.data.items[0]
    });
  };

  onVideoSelect = (v: any) => {
    this.setState({
      selectedVideo: v,
    });
  };

  componentDidMount(){

    this.callSearch("");

  }


  render() {
    return (
      <div className="ui container">
        <SearchBar externalHandler={this.callSearch}></SearchBar>
        <div className="ui two column doubling stackable grid container">
        
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelectCallback={this.onVideoSelect}
              ></VideoList>
            </div>
          </div>
      
      </div>
    );
  }
}
export default App;
