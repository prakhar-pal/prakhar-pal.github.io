import * as React from "react";
import Image from "next/image";
import clsx from "clsx";
type IProjectCardProps = {
    imgSrc: string;
    description: string;
    name: string;
}

const projects = [
    {
      imgSrc: "",
      description: "Hit the circle is an interactive 2d game written in pure JavaScript",
      name: "Hit the Circle"
    },
    {
      imgSrc: "",
      description: "Hit the circle is an interactive 2d game written in pure JavaScript",
      name: "Hit the Circle"
    },
    {
      imgSrc: "",
      description: "Hit the circle is an interactive 2d game written in pure JavaScript",
      name: "Hit the Circle"
    },
    {
      imgSrc: "",
      description: "Hit the circle is an interactive 2d game written in pure JavaScript",
      name: "Hit the Circle"
    },
  ]

const ProjectCard = (props: IProjectCardProps) => {
    return (
        <div className="p-4 transition-all duration-500 bg-slate-400 hover:bg-slate-500 flex flex-col border-solid border-spacing-1 border-gray-400 rounded-none shadow-card">
            <Image
                src={props.imgSrc}
                alt={props.name}
                height={1080}
                width={1920}
            />
            <div>
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
