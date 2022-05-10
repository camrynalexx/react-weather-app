import React, { useEffect } from "react";
import "./AudioPlayer.css";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { FiPlay } from "react-icons/fi";
import { FiPause } from "react-icons/fi";
import { useAudio } from "./AudioHook";


export default function AudioPlayer() {

  const {
    isPlaying,

    duration,

    setDuration,

    currentTime,

    audioPlayer,

    progressBar,

    calculateTime,

    togglePlayPause,

    changeRange,

    backThirty,

    forwardThirty
  } = useAudio();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);



 



  return (
    <div className="AudioPlayer border rounded">
      <audio ref={audioPlayer} src={"mr.rager.mp3"} preload="metadata"></audio>
      <button className="forwardBackward" onClick={backThirty}>
        {" "}
        <BiLeftArrowAlt /> 30{" "}
      </button>
      <button
        onClick={togglePlayPause}
        className="playPause border rounded-circle
        "
      >
        {" "}
        {isPlaying ? <FiPause /> : <FiPlay className="playButton" />}{" "}
      </button>
      <button className="forwardBackward" onClick={forwardThirty}>
        {" "}
        30 <BiRightArrowAlt />
      </button>

      {/* current time */}
      <div className="currentTime">{calculateTime(currentTime)}</div>

      {/* progress bar */}
      <div>
        <input
          type="range"
          className="progressBar"
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
        />
      </div>

      {/* duration */}
      <div className="duration">
        {duration && !isNaN(duration) && calculateTime(duration)}
      </div>
    </div>
  );
}