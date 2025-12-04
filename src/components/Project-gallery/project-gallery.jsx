/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectGallery = ({ images }) => {
  const galleryImages =
    images && images.length
      ? images
      : [
          "/img/portfolio/project2/1.jpg",
          "/img/portfolio/project2/2.jpg",
          "/img/portfolio/project2/3.jpg",
          "/img/portfolio/project2/5.jpg",
          "/img/portfolio/project2/7.jpg",
        ];

  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row">
          {galleryImages.map((src, index) => (
            <a
              href="#"
              key={index}
              className={`col-md-${index === galleryImages.length - 1 ? "12" : "3"} popimg`}
            >
              <img alt="" src={src} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
