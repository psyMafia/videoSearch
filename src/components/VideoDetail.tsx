import React from "react";

class VideoDetail extends React.Component<{ video: any }> {
  render() {
    if (this.props.video == null) {
      return null;
    }

    const url: string = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;

    return (
      <div>
        <div className="ui embed">
          <iframe src={url} title="VideoPlayer"></iframe>
        </div>
        <div className="ui segment">
          <div className="ui small header">
            {this.props.video.snippet.title}
          </div>
          <div className="ui description">
            {" "}
            {this.props.video.snippet.description}{" "}
          </div>
        </div>
      </div>
    );
  }
}
export default VideoDetail;
