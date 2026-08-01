import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
    title: string;
    image: string;
    imageAlt: string;

    about: string;
    technologies: string[];
    highlights: string[];
    learned: string;

    githubUrl: string;
    liveDemoUrl: string;

    reverse?: boolean;
}

export default function ProjectCard({title, image, imageAlt, about, technologies, highlights, learned, githubUrl, liveDemoUrl}: ProjectCardProps) {
    return (
        <article className="mb-16">

            <div className="flex gap-12">

                <div className="flex-[1.25] pt-7">
                    <h2 className="mb-8 text-4xl font-bold text-indigo-900">
                        {title}
                    </h2>

                    <div className="relative mb-8">
                        <div className="absolute -top-10 -right-10 -z-10 h-40 w-40 bg-[radial-gradient(#3b82f6_2px,transparent_2px)] bg-size-[16px_16px] opacity-60" />
                        <div className="absolute -bottom-10 -left-10 -z-10 h-40 w-40 bg-[radial-gradient(#3b82f6_2px,transparent_2px)] bg-size-[16px_16px] opacity-60" />

                        <div className="rounded-3xl bg-white p-3 shadow-2xl ring-1 ring-slate-200">
                            <div className="overflow-hidden rounded-2xl border border-slate-200">
                                <img src={image} alt={imageAlt} className="w-full" />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a href={githubUrl} className="resume-button">
                            <FaGithub />
                            GitHub
                        </a>

                        <a href={liveDemoUrl} className="resume-button">
                            <FaExternalLinkAlt />
                            Live Demo
                        </a>
                    </div>
                </div>

                <div className="flex flex-1 items-center">
                    <div className="w-full rounded-3xl border-t-4 border-indigo-600 bg-white p-7 shadow-xl">

                        <h3 className="mb-3 text-3xl font-bold text-slate-900">
                            About this Project
                        </h3>

                        <p className="mb-7 text-lg leading-8 text-slate-700">
                            {about}
                        </p>

                        <div className="mb-7">
                            <p className="mb-3 font-semibold text-indigo-800">
                                Built With
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {technologies.map((technology) => (
                                    <span key={technology} className="hero-stack">
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mb-7">
                            <h3 className="mb-3 text-2xl font-semibold">
                                Highlights
                            </h3>

                            <ul className="list-disc space-y-2 pl-5 text-slate-700">
                                {highlights.map((highlight) => (
                                    <li key={highlight}>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-3 text-2xl font-semibold">
                                What I Learned
                            </h3>

                            <p className="leading-8 text-slate-700">
                                {learned}
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </article>
    )
}