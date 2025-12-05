/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";

const FreelancreIntro = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays when component mounts (only once on page load)
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Autoplay was prevented, which is fine
        console.log("Video autoplay prevented:", error);
      });
    }

    // Handle video end event to ensure it stops
    const video = videoRef.current;
    const handleVideoEnd = () => {
      if (video) {
        video.pause();
        video.currentTime = video.duration; // Ensure it's at the end
      }
    };

    if (video) {
      video.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []);

  return (
    <header className="freelancre valign position-re" style={{ overflow: "hidden" }}>
      {/* Video Background */}
      <div className="video-background">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="hero-video"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-4">
            <div className="img">
              <img src="/img/hero.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-8 valign">
            <div className="cont">
              <h1 className="cd-headline clip">
                Hello, I&apos;m a full-stack engineer who loves turning ideas
                into production-ready software and building
                <span
                  style={{ fontSize: "35px", lineHeight: "49px" }}
                  className="cd-words-wrapper"
                >
                  <Typewriter
                    options={{
                      wrapperClassName: "color-font fw-600",
                      strings: [
                        "Scalable Web Apps",
                        "Robust Backends",
                        "Modern Frontends",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                    loop={true}
                    onInit={(typewriter) => {
                      typewriter;
                    }}
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="states">
          <div className="container">
            <ul className="flex">
              <li className="flex">
                <div className="numb valign">
                  <h3>5</h3>
                </div>
                <div className="text valign">
                  <p>
                    Years <br /> of Experience
                  </p>
                </div>
              </li>

              <li className="flex">
                <div className="numb valign">
                  <h3>40+</h3>
                </div>
                <div className="text valign">
                  <p>
                    Full-Stack Projects <br /> Shipped to Production
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>

      <style jsx>{`
        .freelancre {
          position: relative;
        }

        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }

        .hero-video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translate(-50%, -50%);
          object-fit: cover;
          z-index: 1;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: 2;
        }

        @media (max-width: 768px) {
          .hero-video {
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </header>
  );
};

export default FreelancreIntro;
