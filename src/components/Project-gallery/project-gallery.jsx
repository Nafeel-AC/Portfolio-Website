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
          {galleryImages.map((src, index) => {
            // Last image is always full width, others are col-md-3 (4 per row)
            const isLastImage = index === galleryImages.length - 1;
            const colClass = isLastImage ? "col-md-12" : "col-md-3";
            
            return (
              <a
                href="#"
                key={index}
                className={`${colClass} popimg`}
              >
                <img alt="" src={src} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
