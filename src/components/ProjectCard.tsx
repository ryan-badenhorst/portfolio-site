import PokemonNuzlockeTracker from "../images/pokemon-nuzlocke-tracker.jpg";

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard() {
    return (
        <article className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">

            <div className="flex items-center gap-12">

                {/* Screenshot */}

                <div className="basis-3/5">

                    <div className="rounded-2xl border border-slate-200 bg-slate-100 p-3 shadow-lg">

                        {/* Browser Bar */}

                        <div className="mb-3 flex gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-400" />
                            <div className="h-3 w-3 rounded-full bg-yellow-400" />
                            <div className="h-3 w-3 rounded-full bg-green-400" />
                        </div>

                        <img src={PokemonNuzlockeTracker} alt="Pokemon Nuzlocke Tracker" className="w-full rounded-xl" />

                    </div>

                </div>

                {/* Information */}

                <div className="basis-2/5">

                    <h2 className="mb-3 text-4xl font-bold text-slate-900">
                        Pokemon Nuzlocke Tracker
                    </h2>

                    <div className="mb-6 flex flex-wrap gap-3">
                        <span className="hero-stack">React</span>
                        <span className="hero-stack">TypeScript</span>
                        <span className="hero-stack">Tailwind CSS</span>
                    </div>

                    <p className="mb-6 text-lg leading-8 text-slate-700">
                        A web application that helps players manage Pokémon
                        Nuzlocke runs by tracking encounters, routes,
                        team members, boxed Pokémon and overall progress.
                    </p>

                    <div className="mb-6">

                        <h3 className="mb-3 text-xl font-semibold text-slate-900">
                            Highlights
                        </h3>

                        <ul className="list-inside list-disc space-y-2 text-slate-700">
                            <li>Track encounters for every route</li>
                            <li>Manage active team and storage</li>
                            <li>Filter and search Pokémon</li>
                            <li>Responsive React application</li>
                        </ul>

                    </div>

                    <div className="mb-8">

                        <h3 className="mb-3 text-xl font-semibold text-slate-900">
                            What I Learned
                        </h3>

                        <p className="leading-7 text-slate-700">
                            This project taught me how to structure a larger
                            React application, create reusable components,
                            and manage shared state across multiple pages.
                        </p>

                    </div>

                    <div className="flex gap-4">

                        <a href="" className="resume-button">
                            <FaGithub />
                            GitHub
                        </a>

                        <a href="" className="resume-button">
                            <FaExternalLinkAlt />
                            Live Demo
                        </a>

                    </div>

                </div>

            </div>

        </article>
    )
}