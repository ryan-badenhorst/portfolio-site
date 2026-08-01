import ProjectCard from "./ProjectCard";

import PokemonNuzlockeTracker from "../images/pokemon-nuzlocke-tracker.jpg"
import WeatherDashboard from "../images/weather-daashboard.png"

export default function FeaturedProjects() {
    return (
        <section id="projects" className="mb-10">
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
                technologies={["React", "React Router", "TypeScript", "Tailwind CSS", "PokéAPI", "Vitest & React Testing Library"]}
                highlights={["Track encounters by route", "Manage active team and boxed Pokémon", "Search and browse the Pokédex", "Automatically save progress using Local Storage"]}
                learned="Building this application taught me how to structure larger React applications using reusable components, organize state across multiple pages, think more carefully about designing interfaces that remain intuitive as new features are added, and write unit tests for components using Vitest and React Testing Library."
                
                githubUrl="https://github.com/ryan-badenhorst/pokemon-nuzlocke-tracker"
                liveDemoUrl="pokemon-nuzlocke-tracker.netlify.app/"
            />

            <ProjectCard 
                title="Weather Dashboard"
                image={WeatherDashboard}
                imageAlt="Weather Dashboard Web App"

                about="A React web application that displays current weather conditions and forecasts for locations around the world using data from a third-party weather API. The application provides an intuitive interface for searching and viewing weather information."
                technologies={["React", "TypeScript", "Tailwind CSS", "Open-Meteo API", "Vitest & React Testing Library"]}
                highlights={["Search weather by city", "Display current weather conditions", "View extended weather forecasts", "Loading states while fetching data", "Responsive interface across devices"]}
                learned="Building this project gave me practical experience working with external APIs, managing asynchronous data in React, and designing components that update dynamically as new data is received, and writing tests to verify component behavior and user interactions."

                githubUrl="https://github.com/ryan-badenhorst/react-typescript-weather-dashboard"
                liveDemoUrl="https://react-typescript-weather-dashboard.netlify.app/"

                reverse
            />

        </section>
    )
}