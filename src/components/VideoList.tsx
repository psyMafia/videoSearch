import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component<{
  videos: any[];
  onVideoSelectCallback: (v: any) => void;
}> {
  render() {
    const rendered = this.props.videos.map((i) => {
      return (
        <VideoItem
          item={i}
          key={i.id.videoId}
          onSelectCallback={this.props.onVideoSelectCallback}
        ></VideoItem>
      );
    });

    return (
         <div  style={{ overflow: 'auto', maxHeight: '50em' }}>
          <div className="ui relaxed divided list">{rendered}</div>
        </div>
       
    );
  }
}
export default VideoList;
