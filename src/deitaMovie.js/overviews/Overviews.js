import React from "react";
import ReactPlayer from "react-player";

function Overviews() {
  return (
    <div>
      <p>
        Tony Stark creates the Ultron Program to protect the world, but when the
        peacekeeping program becomes hostile, The Avengers go into action to try
        and defeat a virtually impossible enemy together. Earth's mightiest
        heroes must come together once again to protect the world from global
        extinction.
      </p>
      <div className="title_video">
        <span>VIDEOS&PHOTOS</span>
        <a href="#photos">All 5 Videos & 245 Photos </a>
      </div>
      <div className="bg_overview"></div>
      <div style={{ display: "flex" }}>
        <ReactPlayer
          url="https://vimeo.com/644494272"
          playing={false}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          volume={1}
          style={{ marginRight: "10px" }}
        />
        <ReactPlayer
          url="https://vimeo.com/707012696"
          playing={false}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          volume={1}
          style={{ marginRight: "10px" }}
        />
        <ReactPlayer
          url="https://vimeo.com/145218574"
          playing={false}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          volume={1}
          style={{ marginRight: "10px" }}
        />
        <ReactPlayer
          url="https://vimeo.com/83409369"
          playing={true}
          loop={true}
          muted={false}
          width="100%"
          height="100%"
          volume={1}
        />
      </div>
      <div className="title_cast">
        <span>DIRECTOR&CAST</span>
      </div>
      <div className="bg_overview"></div>
      <div className="director">
        <div>
          <div className="img_director">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Kevin_Feige_%2848462887397%29_%28cropped%29.jpg"
              alt=""
            />
            <p>Kevin Feige</p>
          </div>
          <div className="img_director">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Kevin_Feige_%2848462887397%29_%28cropped%29.jpg"
              alt=""
            />
            <p>Kevin Feige</p>
          </div>
          <div className="img_director">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Kevin_Feige_%2848462887397%29_%28cropped%29.jpg"
              alt=""
            />
            <p>Kevin Feige</p>
          </div>
          <div className="img_director">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Kevin_Feige_%2848462887397%29_%28cropped%29.jpg"
              alt=""
            />
            <p>Kevin Feige</p>
          </div>
        </div>

        <div style={{ marginLeft: "150px" }}>
          <div className="img_director">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Kevin_Feige_%2848462887397%29_%28cropped%29.jpg"
              alt=""
            />
            <p>Kevin Feige</p>
          </div>
          <div className="img_director">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Kevin_Feige_%2848462887397%29_%28cropped%29.jpg"
              alt=""
            />
            <p>Kevin Feige</p>
          </div>
          <div className="img_director">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Kevin_Feige_%2848462887397%29_%28cropped%29.jpg"
              alt=""
            />
            <p>Kevin Feige</p>
          </div>
          <div className="img_director">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Kevin_Feige_%2848462887397%29_%28cropped%29.jpg"
              alt=""
            />
            <p>Kevin Feige</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overviews;
