import React from "react";
import "./SearchPage.scss";
function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="video-row">
      <img src={image} alt={channel} />
      <div className="text">
        <h2>{title}</h2>
        <p className="headline">
          {channel} •{" "}
          <span className="subs">
            <span className="subsNumber">{subs}</span> Subscribers
          </span>{" "}
          {views} views • {timestamp}
        </p>
        <p className="description"> {description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
