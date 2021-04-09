import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recVideos">
      <h2>Recommended</h2>
      <div className="recommended-videos">
        <VideoCard
          title="Become a Front End Developer in 1 Hour | 2020"
          views="1.7M Views"
          timestamp="2 days ago"
          channelImage="./profile.jpg"
          channel="Turhan Sel"
          image="https://i.ytimg.com/vi/n9Y2Eb4BaSg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMoajoKbwaxBckT95fv4NZJijK0w"
        />
        <VideoCard
          title="Become a Front End Developer in 1 Hour | 2020"
          views="1.7M Views"
          timestamp="2 days ago"
          channelImage="./profile.jpg"
          channel="Turhan Sel"
          image="https://i.ytimg.com/vi/n9Y2Eb4BaSg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMoajoKbwaxBckT95fv4NZJijK0w"
        />
        <VideoCard
          title="Become a Front End Developer in 1 Hour | 2020"
          views="1.7M Views"
          timestamp="2 days ago"
          channelImage="./profile.jpg"
          channel="Turhan Sel"
          image="https://i.ytimg.com/vi/n9Y2Eb4BaSg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMoajoKbwaxBckT95fv4NZJijK0w"
        />
        <VideoCard
          title="Become a Front End Developer in 1 Hour | 2020"
          views="1.7M Views"
          timestamp="2 days ago"
          channelImage="./profile.jpg"
          channel="Turhan Sel"
          image="https://i.ytimg.com/vi/n9Y2Eb4BaSg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMoajoKbwaxBckT95fv4NZJijK0w"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
