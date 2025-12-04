import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ProjectDetails2Header from "../../components/Project-details2-header/project-details2-header";
import ProjectIntroduction from "../../components/Project-introduction/project-introduction";
import ProjectGallery from "../../components/Project-gallery/project-gallery";
import ProjectDescription from "../../components/Project-description/project-description";
import NextProject from "../../components/Next-project/next-project";
import projectsData from "../../data/project-details2-list.json";

const ProjectDetailsDynamic = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const router = useRouter();
  const { slug } = router.query;

  const project =
    projectsData.find((item) => item.slug === slug) || projectsData[0];

  React.useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const onScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [navbarRef]);

  if (!project) {
    return null;
  }

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="wrapper">
        <ProjectDetails2Header projectHeaderData={project} />
        <ProjectIntroduction projectIntroductionData={project.intro} />
        <ProjectGallery images={project.gallery} />
        <ProjectDescription projectDescriptionData={project.description} />
        <NextProject title={project.nextTitle} />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetailsDynamic;


