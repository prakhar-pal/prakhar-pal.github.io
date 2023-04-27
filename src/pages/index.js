import { useRef } from "react";
import SelfIntroduction from "../components/SelfIntroduction";
import SelfProjects from "../components/SelfProjects";

const Home = () => {
  const projectsRef = useRef(null);
  const goToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const goToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <main>
      <SelfIntroduction onClickDownArrow={goToProjects} />
      <SelfProjects ref={projectsRef} />
      <button className="w-10 block mx-auto my-8 bounce" onClick={goToTop}>
        <i className="fa fa-chevron-up h-10 w-10 text-black bg-yellow-300 rounded-full flex items-center justify-center cursor-pointer" />
      </button>
    </main>
  );
};

export default Home;
