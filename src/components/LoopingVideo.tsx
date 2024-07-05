// components/LoopingVideo.tsx
import React, { useState, useEffect } from "react";

interface LoopingVideoProps {
  src: string;
  blurAmount?: number; // Opcional, por defecto a 5px
}

const LoopingVideo: React.FC<LoopingVideoProps> = ({ src, blurAmount = 5 }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById(
      "loopingVideo",
    ) as HTMLVideoElement;
    if (videoElement) {
      videoElement.oncanplay = () => setIsLoaded(true);
    }
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      <video
        id="loopingVideo"
        src={src}
        autoPlay
        loop
        muted
        onCanPlay={() => setIsLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          filter: `blur(${blurAmount}px)`,
          objectFit: "cover",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 2s ease-in-out",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};

export default LoopingVideo;
