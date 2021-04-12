import React from "react";
import "./SearchPage.scss";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import { Divider } from "@material-ui/core";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="search-page">
      <div className="search-filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <Divider />
      <ChannelRow
        image="../profile.jpg"
        channel="Turhan Sel"
        verified
        subs="315K"
        noOfVideos={251}
        description="You can find really good frontend lessons here!"
      />
      <Divider />

      <VideoRow
        views="270K"
        subs="273K"
        description="Do you want learn blabla"
        timestamp="1min"
        channel="Turhan Sel"
        title="Let's build a reactapp"
        image="https://i.ytimg.com/vi/n9Y2Eb4BaSg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMoajoKbwaxBckT95fv4NZJijK0w"
      />

      <VideoRow
        views="270K"
        subs="273K"
        description="Do you want learn blabla"
        timestamp="1min"
        channel="Turhan Sel"
        title="Let's build a reactapp"
        image="https://i.ytimg.com/vi/n9Y2Eb4BaSg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMoajoKbwaxBckT95fv4NZJijK0w"
      />

      <VideoRow
        views="270K"
        subs="273K"
        description="Do you want learn blabla"
        timestamp="1min"
        channel="Turhan Sel"
        title="Let's build a reactapp"
        image="https://i.ytimg.com/vi/n9Y2Eb4BaSg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMoajoKbwaxBckT95fv4NZJijK0w"
      />
    </div>
  );
}

export default SearchPage;
