/* eslint-disable @next/next/no-img-element */
import React from "react";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";

const FreelancreIntro = () => {
  const particlesConfig = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#ff4b4b", "#7c3aed", "#3b82f6", "#10b981"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.5,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.3,
          },
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <header className="freelancre valign position-re" style={{ overflow: "hidden" }}>
      {/* Animated Background Elements */}
      <div className="animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Particles Animation */}
      <Particles
        id="particles-js"
        options={particlesConfig}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />

      {/* Gradient Circles */}
      <div className="circle-color">
        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
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
        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #ff4b4b 0%, transparent 70%);
          top: -200px;
          right: -100px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #7c3aed 0%, transparent 70%);
          bottom: -150px;
          left: -50px;
          animation-delay: 5s;
        }

        .orb-3 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, #3b82f6 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 10s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .freelancre {
          position: relative;
        }

        .freelancre::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(255, 75, 75, 0.1) 0%, transparent 50%);
          z-index: 0;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </header>
  );
};

export default FreelancreIntro;
