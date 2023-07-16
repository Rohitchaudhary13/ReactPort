import React from "react";
import "./services.css";

const projects = [
  {
    id:1,
    name: "Salaah!",
    description: `Developed and optimized a NextJS/TypeScript platform, improving website performance by 40%. Collaborated on a MERN-based Mini LinkedIn platform, enhancing code for better performance. Leveraged Clarity and Google Analytics for improved website ranking and technical SEO.`,
    stack: ["NextJS", "TypeScript", "Sanity"],
  },
  {
    id:2,
    name: "Asiana Times",
    description: `Created bespoke WordPress themes and templates with HTML, CSS, and PHP, following coding standards. Assisted content creators and editors with WordPress support and training for effective content management.`,
    stack: ["PHP", "Html/Css", "Bootstrap", "JS"],
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>Experience</h5>
      <h2>My Recent Work</h2>
      <div className="container">
        <section id="projects" className="section projects">
          <div className="projects__grid">
            {projects.map((project) => (
              <div key={project.id} className="project">
                <h3>{project.name}</h3>

                <p className="project__description">{project.description}</p>
                {project.stack && (
                  <ul className="project__stack">
                    {project.stack.map((item) => (
                      <li className="project__stack-item">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
