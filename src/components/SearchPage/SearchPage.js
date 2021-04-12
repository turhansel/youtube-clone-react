import React from "react";
import "./SearchPage.scss";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import { Divider } from "@material-ui/core";
import ChannelRow from "./ChannelRow";

function SearchPage() {
  return (
    <div className="search-page">
      <div className="search-filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <Divider />
      <ChannelRow
        image="../logo.png"
        channel="Turhan Sel"
        verified
        subs="315K"
        noOfVideos={251}
        description="You can find really good frontend lessons here!"
      />
    </div>
  );
}

export default SearchPage;
