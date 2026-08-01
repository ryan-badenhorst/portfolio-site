import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
    return (
        <section id="projects" className="mb-20">
            <h1 className="section-headings mb-3">
                Featured Projects
            </h1>

            <p className="mb-10 max-w-4xl text-lg leading-8 text-slate-600">
                A selection of projects that showcase my experience building
                responsive web applications with React, TypeScript and modern
                frontend technologies. Each project reflects a different set of
                challenges and highlights what I learned while designing,
                developing and refining the application.
            </p>

            <ProjectCard />
        </section>
    )
}