import { useRef } from "react";
import SelfIntroduction from "../components/SelfIntroduction";

const Home = () => {
  const projectsRef = useRef(null);
  const gotoProjects = () => {
    projectsRef.current?.scrollIntoView( { behavior: "smooth"});
  }
  return (
    <main>
      <SelfIntroduction onClickDownArrow={gotoProjects}/>
      <section ref={projectsRef} className="min-h-screen">
        <h3>Work In Progress</h3>
        <p>Checkout <a href="/hit-the-circle">this</a> for the time being.</p>
      </section>
    </main>
  );
};

export default Home;
