import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import video from "./assets/video1.mp4";

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;
`;

const FullScreenVideo = () => {
  const videoRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleVideoClick = () => {
    const videoElement = videoRef.current;

    if (!isFullScreen) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
      }
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  return (
    <VideoContainer>
      {isFullScreen && (
        <CloseButton onClick={handleVideoClick}>&times;</CloseButton>
      )}
      <video
        ref={videoRef}
        onClick={handleVideoClick}
        controls
        width="640"
        height="360"
      >
        <source
          src={video}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </VideoContainer>
  );
};

export default FullScreenVideo;
