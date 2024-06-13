import clsx from "clsx";
import * as React from "react";
type ProjectDetail = string | any;
type IProjectCardProps = {
  imgSrc: string;
  description: string;
  name: string;
  url: string;
  details: ProjectDetail[];
}

const projects: IProjectCardProps[] = [
  {
    imgSrc: "https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A redux middleware to slow down store updates. Helps in batching updates to redux store.",
    name: "redux-delayed-middleware",
    url: "https://github.com/prakhar-pal/redux-delayed-middleware",
    details: [
      "Delay redux actions until main thread becomes free",
      "Prevent choppy UI by slowing down redux state updates",
      "Allow configuring the actions to make batch updates and then dispatch an action for updated value"
    ]
  },
  {
    imgSrc: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Reusable UI components for redux-form, styled in bootstrap",
    name: "redux-form-bootstrap",
    url: "https://github.com/prakhar-pal/redux-form-bootstrap",
    details: [
      "Combines the power of Redux and redux-form with Bootstrap react components",
      "Built with redux, React, reactstrap, rollup",
      "Supports components such as Input (textarea, switch etc. i.e. types supported by reactstrap), Dropdown, Select, PopupTextarea, RadioButton",
      "Examples included in the respository"
    ]
  },
  {
    imgSrc: "https://images.pexels.com/photos/7544291/pexels-photo-7544291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Hit the circle is an interactive 2d game written in pure JavaScript",
    name: "Hit the Circle",
    url: "https://prakhar-pal.github.io/hit-the-circle",
    details: [
      "Written in pure JavaScript",
      "Interactive on front-end, no API required",
      <div>
        GitHub link: <a href="https://github.com/prakhar-pal/hit-the-circle">hit-the-circle</a>
      </div>
    ]
  },
  {
    imgSrc: "https://images.pexels.com/photos/3662635/pexels-photo-3662635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "An online playground for children to learn programming through concepts like procedures, loops and triggers etc.",
    name: "MIT Scratch - Clone",
    url: "https://mit-scratch.netlify.app/",
    details: [
      <>Clone of popular MIT scratch programming environment (original project <a href="https://scratch.mit.edu/projects/editor/?tutorial=getStarted" className="underline">link</a>)</>,
      "Supports features such as Events, Motion, Action (AKA Looks) and Control like waiting for 1 second or doing an action/motion indefinitely",
      "Used React.js, tailwindcss along with webpack, babel, sass, mini-css-extract-plugin etc. to bootstrap the project afresh"
    ],
  },
  {
    imgSrc: "https://images.pexels.com/photos/3800541/pexels-photo-3800541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "An app about cricket matches. Know when your favourite teams are playing next, details about running matches and all about the past matches.",
    name: "Cricket App",
    url: "https://cricket-fan.netlify.app/",
    details: [
      "Used React.js, GraphQL, Apollo and create-react-app to bootstrap the project",
      "It can show schedule of matches and can be filtered with upcoming, running and completed status. User can also filter the cricket match is international match or domestic match"
    ],
  },
  {
    imgSrc: "https://images.pexels.com/photos/7187882/pexels-photo-7187882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Fifa connect is an online marketplace for NFTs",
    name: "Fifa Connect - Clone",
    url: "https://fifa-connect-clone.netlify.app/marketplace",
    details: [
      "Built using Next.js, swr, and tailwindcss"
    ],
  },
]

const ProjectCard = (props: IProjectCardProps) => {
  return (
    <div
      className="transition-all duration-50 flex flex-col border-solid border-gray-500 shadow-card border-spacing-1 rounded-lg overflow-hidden min-h-full bg-gray-300 text-black"
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
        <ul className="list-disc ml-8 mt-6">
          {props.details.map((detail, index) => {
            return <li key={index}>{detail}</li>
          })}
        </ul>
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
      <h4 className="font-semibold text-xl text-center text-black bg-slate-200 py-2 rounded px-4 w-80 mx-auto">My Personal Projects</h4>
      <div className="flex mt-6">
        <ul className="basis-2 shrink-0 flex-grow">
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => changeProjectIndex(index)}
              className={clsx("mb-4  hover:shadow-xl p-4 rounded cursor-pointer text-white relative", [index === showProjectIndex ? "bg-gray-500" : "bg-gray-600 "])}>
              <h5 className="font-semibold text-lg">{project.name}</h5>
              <p>{project.description}</p>
              {index === showProjectIndex && (
                <span className="absolute top-1/2 -translate-y-1/2 -right-4 bg-gray-800 w-6 h-6 rounded-full flex items-center justify-center">
                &rarr;
                </span>
              )}
            </li>
          ))}
        </ul>
        <div className="basis-1 shrink-0 flex-grow ml-8">
          <ProjectCard {...activeProject} />
        </div>
      </div>
    </section>
  );
});

export default SelfProjects;
