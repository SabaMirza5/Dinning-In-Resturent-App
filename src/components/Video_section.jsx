
import React from 'react';
import {FaPlay, FaPause} from 'react-icons/fa'
import meal from '../assets/meal.mp4'

function Video_section(){
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <>
    <div className="container video-sec">
      <div className="row">
        <div className="col-md-12">
        <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay">
        <div
          className="app__video-overlay_circle"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <FaPause color="#fff" fontSize={30} />
          ) : (
            <FaPlay color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Video_section;

