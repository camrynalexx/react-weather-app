import React from "react";
import "./AudioPlayer.css";

export default function AudioPlayer() {
  
  return (
    <div className="AudioPlayer">
      <audio
        className="trackPlayer mt-2"
        src={"mr.rager.mp3"}
        preload="metadata"
        controls={true}
      ></audio>
    </div>
  );
}
