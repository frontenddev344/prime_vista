import { useState, useRef, useEffect } from "react";
import HotelVideo from '../assets/homeVideo.mp4'

export default function HomeVideo({ videoSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const videoRef = useRef(null);
  const buttonRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    positionRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  // Smooth animation loop
  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      if (buttonRef.current) {
        const { x, y } = positionRef.current;
        buttonRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ minHeight: "300px", cursor: "none" }}
    >
      <video
        ref={videoRef}
        src={HotelVideo}
        className="w-full h-auto max-h-screen object-cover"
        loop
        muted
        playsInline
      />

      {isHovered && (
        <button
          ref={buttonRef}
          onClick={togglePlayPause}
          className="absolute flex items-center justify-center rounded-full 
                     bg-white/70 backdrop-blur-md text-black
                     shadow-lg"
          style={{
            width: "120px",
            height: "120px",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <span className="text-sm font-medium tracking-wide">
            {isPlaying ? "PAUSE" : "PLAY VIDEO"}
          </span>
        </button>
      )}
    </section>
  );
}