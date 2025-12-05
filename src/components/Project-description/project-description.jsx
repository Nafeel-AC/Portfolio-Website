import React from "react";

const ProjectDescription = ({ projectDescriptionData }) => {
  // Split content by newlines and process for headings
  const renderContent = () => {
    if (!projectDescriptionData.content) return null;
    
    const paragraphs = projectDescriptionData.content.split('\n\n');
    return paragraphs.map((para, index) => {
      // Check if paragraph starts with a heading pattern (e.g., "### Frontend" or "**Frontend**")
      if (para.trim().startsWith('###') || para.trim().startsWith('**') && para.trim().endsWith('**')) {
        const headingText = para.replace(/###\s*|\*\*/g, '').trim();
        return <h5 key={index} style={{ marginTop: index > 0 ? '30px' : '0', marginBottom: '15px', fontWeight: '600' }}>{headingText}</h5>;
      }
      return <p key={index} className="extra-text" style={{ marginBottom: '20px' }}>{para}</p>;
    });
  };

  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>
                <span>02 </span> Description
              </h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text js-scroll__content">
              {renderContent()}
              {projectDescriptionData.techStack && (
                <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <h5 style={{ marginBottom: '20px', fontWeight: '600' }}>Tech Stack</h5>
                  {projectDescriptionData.techStack.frontend && (
                    <div style={{ marginBottom: '25px' }}>
                      <h6 style={{ marginBottom: '10px', fontSize: '16px', fontWeight: '500', opacity: '0.9' }}>Frontend</h6>
                      <p className="extra-text" style={{ marginBottom: '10px' }}>{projectDescriptionData.techStack.frontend}</p>
                    </div>
                  )}
                  {projectDescriptionData.techStack.backend && (
                    <div style={{ marginBottom: '25px' }}>
                      <h6 style={{ marginBottom: '10px', fontSize: '16px', fontWeight: '500', opacity: '0.9' }}>Backend</h6>
                      <p className="extra-text" style={{ marginBottom: '10px' }}>{projectDescriptionData.techStack.backend}</p>
                    </div>
                  )}
                  {projectDescriptionData.techStack.services && (
                    <div style={{ marginBottom: '25px' }}>
                      <h6 style={{ marginBottom: '10px', fontSize: '16px', fontWeight: '500', opacity: '0.9' }}>Services & Infrastructure</h6>
                      <p className="extra-text" style={{ marginBottom: '10px' }}>{projectDescriptionData.techStack.services}</p>
                    </div>
                  )}
                  {projectDescriptionData.techStack.other && (
                    <div style={{ marginBottom: '25px' }}>
                      <h6 style={{ marginBottom: '10px', fontSize: '16px', fontWeight: '500', opacity: '0.9' }}>Other Technologies</h6>
                      <p className="extra-text" style={{ marginBottom: '10px' }}>{projectDescriptionData.techStack.other}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
