import React from "react";
import featuresData from "../../data/sections/features.json";

const Services5 = () => {
  return (
    <section className="services box lficon section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Full-Stack Services
              </h6>
              <h3 className="wow color-font">
                I design, build, and ship end-to-end web applications.
              </h3>
            </div>
          </div>
        </div>
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {featuresData.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInLeft"
              data-wow-delay={
                index === 0
                  ? ".5s"
                  : index === 1
                  ? ".7s"
                  : index === 2
                  ? ".9s"
                  : index === 3
                  ? ".5s"
                  : index === 4
                  ? ".7s"
                  : ".9s"
              }
              key={item.id}
              style={{ display: 'flex', marginBottom: '30px' }}
            >
              <div className="item-box no-curve" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div>
                  <span className={`icon color-font ${item.icon}`}></span>
                </div>
                <div className="cont" style={{ flex: 1 }}>
                  <h6>{item.title}</h6>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default Services5;
