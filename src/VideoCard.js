import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img className="videocard-thumb" src={image} alt="" />
      <div className="videocard-info"></div>
      <Avatar className="videocard-avatar" alt={channel} src={channelImage} />
      <div className="video-text">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>
          {views} • {timestamp}
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
