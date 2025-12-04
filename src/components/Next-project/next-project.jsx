import React from "react";

const NextProject = ({ title }) => {
  const text = title || "Next project";

  return (
    <section className="next-prog section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="box text-center">
              <h1 className="mb-0">
                <span>{text}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextProject;
