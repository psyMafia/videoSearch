import React from "react";

class VideoItem extends React.Component<{ item: any, onSelectCallback: (v: any)=> void }> {

  passVideoOnSelect = ()=> {
    this.props.onSelectCallback(this.props.item);
  }

  render() {
    return (
         <div className="item" onClick={this.passVideoOnSelect}>
         
        <div className="content">
        <img
            className="ui medium rounded left floated image"
            src={this.props.item.snippet.thumbnails.medium.url}
            alt={this.props.item.snippet.thumbnails.default}
          ></img>
          <div className="header">{this.props.item.snippet.title}</div>
          <div className="description">  {this.props.item.snippet.description}   </div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
