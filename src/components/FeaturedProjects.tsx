import ProjectCard from "./ProjectCard";

import PokemonNuzlockeTracker from "../images/pokemon-nuzlocke-tracker.jpg"

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

            <ProjectCard 
                title="Pokemon Nuzlocke Tracker"
                image={PokemonNuzlockeTracker}
                imageAlt="Pokemon Nuzlocke Tracker pages"
                about="A React web application that helps players manage Pokémon Nuzlocke playthroughs by tracking encounters, routes, team members, boxed Pokémon, and overall progress throughout a run."
                technologies={["React", "React Router", "TypeScript", "Tailwind CSS"]}
                highlights={["Track encounters by route", "Manage active team and boxed Pokémon", "Search and browse the Pokédex", "Automatically save progress using Local Storage"]}
                learned="Building this application taught me how to structure larger React applications using reusable components, organize state across multiple pages, and think more carefully about designing interfaces that remain intuitive as new features are added."
                githubUrl="https://github.com/ryan-badenhorst/pokemon-nuzlocke-tracker"
                liveDemoUrl="pokemon-nuzlocke-tracker.netlify.app/"
            />
        </section>
    )
}