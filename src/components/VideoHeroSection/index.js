import React, { useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { styled } from "@mui/system";

// Styling for the hero container
const HeroContainer = styled(Box)({
  position: "relative",
  width: "100%",
//   height: "100vh", // Full screen height
  overflow: "hidden",
});

// Styling for the video element
const StyledVideo = styled("video")({
  width: "100%",
  height: "100%",
  objectFit: "cover", // Ensure video covers the entire hero section
});

// Styling for the volume control button
const VolumeButton = styled(IconButton)({
  position: "absolute",
  bottom: 20,
  right: 20,
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  color: "white",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
});

// Styling for overlay text (optional)
// const OverlayText = styled(Typography)({
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   color: "white",
//   textAlign: "center",
//   fontWeight: "bold",
//   fontSize: "2rem",
//   textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
// });

const VideoHeroSection = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [isMuted, setIsMuted] = useState(true); // Mute state

  // Function to toggle mute state
  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <HeroContainer>
      {/* Video Element */}
      <StyledVideo
        ref={videoRef}
        src="https://scsoft.sirv.com/banner/Swani_Spice_Website.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional Overlay Text */}
      {/* <OverlayText variant="h1">Experience the Flavor of Innovation</OverlayText> */}

      {/* Volume Control Button */}
      <VolumeButton onClick={toggleMute}>
        {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </VolumeButton>
    </HeroContainer>
  );
};

export default VideoHeroSection;
