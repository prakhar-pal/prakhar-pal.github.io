import * as React from "react";
type IProjectCardProps = {
  imgSrc: string;
  description: string;
  name: string;
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
    url: "https://main--mellow-jalebi-a4b57c.netlify.app/marketplace"
  },
]

const ProjectCard = (props: IProjectCardProps) => {
  return (
    <div className="transition-all duration-50 flex flex-col border-solid border-spacing-1 border-fuchsia-500 rounded-lg shadow-card overflow-hidden cursor-pointer">
      <img
        src={props.imgSrc}
        alt={props.name}
        height={1080}
        width={1920}
        className="rounded-t-lg"
      />
      <div className="p-4 h-full bg-transparent opacity-50 hover:opacity-60 bg-white text-black">
        {props.description}
      </div>
    </div>
  )
}

const SelfProjects = React.forwardRef((_, ref) => {
  return (
    <section ref={ref as any} className="py-8 min-h-screen grid gap-4 grid-cols-2">
      {projects.map(project => <ProjectCard {...project} key={project.name} />)}
    </section>
  );
});

export default SelfProjects;
