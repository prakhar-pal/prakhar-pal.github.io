import clsx from "clsx";
import * as React from "react";
type IProjectCardProps = {
  imgSrc: string;
  description: string;
  name: string;
  url: string;
}

const projects = [
  {
    imgSrc: "https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A redux middleware to slow down store updates. Helps in batching updates to redux store.",
    name: "redux-delayed-middleware",
    url: "https://github.com/prakhar-pal/redux-delayed-middleware"
  },
  {
    imgSrc: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Reusable UI components for redux-form, styled in bootstrap",
    name: "redux-form-bootstrap",
    url: "https://github.com/prakhar-pal/redux-form-bootstrap"
  },
  {
    imgSrc: "https://images.pexels.com/photos/7544291/pexels-photo-7544291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Hit the circle is an interactive 2d game written in pure JavaScript",
    name: "Hit the Circle",
    url: "https://prakhar-pal.github.io/hit-the-circle"
  },
  {
    imgSrc: "https://images.pexels.com/photos/3662635/pexels-photo-3662635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "An online playground for children to learn programming through concepts like procedures, loops and triggers etc.",
    name: "MIT Scratch - Clone",
    url: "https://mit-scratch.netlify.app/"
  },
  {
    imgSrc: "https://images.pexels.com/photos/7187882/pexels-photo-7187882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Fifa connect is an online marketplace for NFTs",
    name: "Fifa Connect - Clone",
    url: "https://fifa-connect-clone.netlify.app/marketplace"
  },
  {
    imgSrc: "https://images.pexels.com/photos/3800541/pexels-photo-3800541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "An app about cricket matches. Know when your favourite teams are playing next, details about running matches and all about the past matches.",
    name: "Cricket App",
    url: "https://cricket-fan.netlify.app/"
  },
]

const ProjectCard = (props: IProjectCardProps) => {
  return (
    <div
      className="transition-all duration-50 flex flex-col border-solid border-gray-500 shadow-card border-spacing-1 rounded-lg overflow-hidden min-h-full"
    >
      <a href={props.url} target="_blank" className="flex items-center justify-center mb-6  mt-4">
        <h4 className="text-xl font-semibold text-center">{props.name}</h4>
        &nbsp;
        <small className="relative top-0.5 transform duration-200 translate-x-2"> (link &rarr;)</small>
      </a>
      <div className="w-11/12 mx-auto">
        <div className="p-4 h-full bg-transparent opacity-50 hover:opacity-60 bg-white text-black rounded hover:scale-105 transform duration-200">
          {props.description}
        </div>
      </div>

    </div>
  )
}

const SelfProjects = React.forwardRef((_, ref) => {
  const [showProjectIndex, setShowProjectIndex] = React.useState(0);
  const [isChangedByUser, setIsChangedByUser] = React.useState(false);
  const activeProject = React.useMemo(() => {
    return projects[showProjectIndex];
  }, [showProjectIndex]);

  function changeProjectIndex(index) {
    setShowProjectIndex(index);
    setIsChangedByUser(true);
  }

  React.useEffect(() => {
    let id = 0;
    if (!isChangedByUser) {
      id = setInterval(() => {
        setShowProjectIndex(index => {
          const nextIndex = index === projects.length - 1 ? 0 : index + 1;
          return nextIndex;
        })
      }, 5000);
    }
    return () => clearInterval(id);
  }, [isChangedByUser]);

  return (
    <section ref={ref as any} className="py-8 rounded p-4 bg-gray-400">
      <h4 className="text-center font-semibold text-xl underline text-black">My Personal Projects</h4>
      <div className="flex mt-6">
        <ul className="basis-2 shrink-0 flex-grow">
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => changeProjectIndex(index)}
              className={clsx("mb-4  hover:shadow-xl p-4 rounded cursor-pointer text-white", [index === showProjectIndex ? "bg-gray-500" : "bg-gray-600 "])}>
              <h5 className="font-semibold text-lg">{project.name}</h5>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
        <div className="basis-1 shrink-0 flex-grow ml-4">
          <ProjectCard {...activeProject} />
        </div>
      </div>
    </section>
  );
});

export default SelfProjects;
