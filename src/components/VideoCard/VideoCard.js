import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.scss";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img className="videocard-thumb" src={image} alt="" />
      <div className="videocard-info">
        <Avatar className="videocard-avatar" alt={channel} src={channelImage} />
        <div className="videocard-text">
          <h3>{title}</h3>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
