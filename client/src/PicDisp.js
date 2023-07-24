import React, { useState } from 'react';
import styled from 'styled-components';
import imageSource from './assets/peakpx.jpg'; // Replace this with your image file path

const ImageContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const FullScreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullScreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const ImageDisplay = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
      <ImageContainer onClick={toggleFullScreen}>
        <img src={imageSource} alt="Image" />
      </ImageContainer>
      {isFullScreen && (
        <FullScreenOverlay onClick={toggleFullScreen}>
          <FullScreenImage src={imageSource} alt="Full-Screen Image" />
        </FullScreenOverlay>
      )}
    </>
  );
};

export default ImageDisplay;
