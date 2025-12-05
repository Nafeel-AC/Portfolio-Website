/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import projectsData from "../../data/project-details2-list.json";

const WorksStyle2 = ({ grid, hideFilter, filterPosition }) => {
  // Display all projects from JSON data
  const displayProjects = projectsData;
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section
      className={`${
        grid ? (grid === 3 ? "three-column" : null) : null
      } portfolio section-padding pb-70`}
    >
      {!hideFilter && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Portfolio
                </h6>
                <h3 className="wow color-font">
                  Our Recent Web Design &amp; <br /> Some Past Projects.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={"container"}>
        <div className="row">
          {!hideFilter && (
            <div
              className={`filtering ${
                filterPosition === "center"
                  ? "text-center"
                  : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
              } col-12`}
            >
              <div className="filter">
                <span data-filter="*" className="active">
                  All
                </span>
                <span data-filter=".saas">SaaS</span>
                <span data-filter=".finance">Finance</span>
                <span data-filter=".business">Business</span>
              </div>
            </div>
          )}

          <div className="gallery full-width">
            {displayProjects.map((project, index) => {
              // Get filter class from project category
              const categoryName = project.categories && project.categories[0] ? project.categories[0].name.toLowerCase() : "business";
              const itemClass = categoryName === "saas" ? "saas" : categoryName === "finance" ? "finance" : "business";
              const previewImg = project.previewImage || (project.gallery && project.gallery[0]) || "/img/portfolio/portfolio/1/1.jpg";
              
              return (
                <div
                  className={`${
                    grid === 3
                      ? "col-lg-4 col-md-6"
                      : grid === 2
                      ? "col-md-6"
                      : "col-12"
                  } items ${itemClass} wow fadeInUp`}
                  data-wow-delay=".4s"
                  key={project.id}
                >
                  <div className="item-img">
                    <Link href={`/project-details2/${project.slug}`}>
                      <a className="imago wow">
                        <img src={previewImg} alt={project.title.big} />
                        <div className="item-img-overlay"></div>
                      </a>
                    </Link>
                  </div>
                  <div className="cont">
                    <h6>{project.title.big}</h6>
                    <span>
                      {project.categories && project.categories.map((cat, catIndex) => (
                        <React.Fragment key={cat.id}>
                          <Link href="/works3/works3-dark">{cat.name}</Link>
                          {catIndex < project.categories.length - 1 && ", "}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle2;
