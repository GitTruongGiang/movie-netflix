import React, { useState } from "react";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ReactPlayer from "react-player";

function Introl() {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <div className="introl_container">
      <ReactPlayer
        url="https://vimeo.com/235307580"
        playing={true}
        loop={true}
        muted={isMuted}
        width="100%"
        height="100%"
        volume={1}
        className="videoItrol"
      />
      <div className="infoIntrol">
        <h1 className="headdingIntrol">Netfilx Elite</h1>
        <p className="overViewIntrol">
          Materia for Netflix We had the exciting task to visualize the LSD trip
          sequences for Netflix’ upcoming documentary series „Wormwood“ by Oscar
          winning director Errol Morris (director of „The Fog of War“).
          <br />
          This six-part series probes the mysterious death of a Cold War
          military scientist involved in a secret biological warfare program.
          Starting December 15, 2017.
        </p>
      </div>
      <div onClick={() => setIsMuted((e) => !e)} className="vollume">
        {isMuted ? (
          <VolumeOffIcon id="btnVolume" sx={{ fontSize: "40px" }} />
        ) : (
          <VolumeUpIcon id="btnVolume" sx={{ fontSize: "40px" }} />
        )}
      </div>
      <div className="fadebottom"></div>
    </div>
  );
}

export default Introl;
