/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import projectsData from "../../data/project-details2-list.json";

const WorksStyle4 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio-frl section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Portfolio
              </h6>
              <h3 className="wow color-font">
                Recent Full-Stack Projects & <br /> Selected Case Studies
              </h3>
              <div className="mt-40">
                <Link href="/works2/works2-dark">
                  <a className="butn bord curve">
                    <span>View all projects</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".saas">SaaS</span>
              <span data-filter=".finance">Finance</span>
              <span data-filter=".business">Business</span>
            </div>
          </div>

          <div className="gallery full-width">
            {projectsData.map((project, index) => {
              const imgSrc =
                project.previewImage ||
                (project.gallery && project.gallery.length
                  ? project.gallery[0]
                  : "/img/portfolio/freelancer/1.jpg");
              const delay = ".4s";
              // Get filter class from project category
              const categoryName = project.categories && project.categories[0] ? project.categories[0].name.toLowerCase() : "business";
              const itemClass = categoryName === "saas" ? "saas" : categoryName === "finance" ? "finance" : "business";

              return (
                <div
                  className={`col-md-6 items ${itemClass} wow fadeInUp`}
                  data-wow-delay={delay}
                  key={project.id}
                >
                  <div className="item-img">
                    <div className="cont">
                      <h6>{project.title.big}</h6>
                      <p>{project.intro.content}</p>
                    </div>
                    <Link href={`/project-details2/${project.slug}`}>
                      <a className="rota">
                        <img src={imgSrc} alt={project.title.big} />
                        <div className="item-img-overlay"></div>
                      </a>
                    </Link>
                    <div className="tags">
                      {project.categories &&
                        project.categories.map((cat) => (
                          <span key={cat.id}>
                            <Link href="/works2/works2-dark">
                              {cat.name}
                            </Link>
                          </span>
                        ))}
                    </div>
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

export default WorksStyle4;
