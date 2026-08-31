import profilePicture from "../images/profile-picture.png";

import { FaGithub } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
    return (
        <section id="hero" className="flex mb-10 gap-2 max-[900px]:flex-col">

            <div className="flex-1 flex items-center py-5">
                <div>
                    <div className="mb-8 flex flex-col gap-2">
                        <p className="text-2xl text-slate-600 ml-1">
                            Hi, I'm
                        </p>

                        <h1 className="text-6xl font-bold text-slate-900">
                            Ryan Badenhorst
                        </h1>

                        <p className="text-3xl font-bold text-indigo-900">
                            Front-End Web Developer
                        </p>

                        <p className="text-xl font-medium text-slate-600">
                            Durban, South Africa
                        </p>
                    </div>

                    <div className="mb-8 max-w-xl space-y-2 text-lg text-slate-700">
                        <p>
                            I enjoy building responsive, accessible web applications with React and TypeScript.
                        </p>

                        <p>
                            Currently focused on creating polished user interfaces while continually expanding my
                            front-end development skills.
                        </p>
                    </div>

                    <div className="mb-8">
                        <p className="mb-3 font-semibold text-indigo-800">
                            Primary Stack
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <span className="hero-stack">React</span>
                            <span className="hero-stack">TypeScript</span>
                            <span className="hero-stack">JavaScript</span>
                            <span className="hero-stack">HTML</span>
                            <span className="hero-stack">CSS</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-5">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
                            View Resume <FaArrowRight />
                        </a>

                        <div className="flex gap-5">
                            <a href="https://github.com/ryan-badenhorst" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub className="icon-button" />
                            </a>

                            <a href="https://www.linkedin.com/in/ryan-badenhorst-7975313b1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <BiLogoLinkedin className="icon-button" />
                            </a>

                            <a href="mailto:ryanwbadenhorst@gmail.com" aria-label="Email">
                                <MdEmail className="icon-button" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 items-center justify-center px-4 max-[900px]:mb-4">
                <div className="relative">
                    <div className="absolute -top-12 -right-12 -z-10 h-48 w-48 max-[1100px]:h-36 max-[1100px]:w-36 bg-[radial-gradient(#3b82f6_2px,transparent_2px)] bg-size-[16px_16px] opacity-70 mask-[radial-gradient(ellipse_at_bottom_left,black_30%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_at_top_right,black_30%,transparent_75%)]" />
                    <div className="absolute -bottom-12 -left-12 -z-10 h-48 w-48 max-[1100px]:h-36 max-[1100px]:w-36 bg-[radial-gradient(#3b82f6_2px,transparent_2px)] bg-size-[16px_16px] opacity-70 mask-[radial-gradient(ellipse_at_bottom_left,black_30%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_at_bottom_left,black_30%,transparent_75%)]" />

                    <div className="relative h-120 w-120 max-[1100px]:h-100 max-[1100px]:w-100 max-[515px]:h-65 max-[515px]:w-65 max-[375px]:h-40 max-[375px]:w-40 rounded-full bg-linear-to-br from-slate-200 via-slate-400 to-slate-600 p-2 shadow-2xl shadow-blue-900/30 ring-1 ring-slate-300/40">
                        <div className="h-full w-full overflow-hidden rounded-full border-4 border-slate-400/80 shadow-inner">
                            <img src={profilePicture} alt="Ryan Badenhorst" className="h-full w-full object-cover"/>
                        </div>
                    </div>

                    <div className="absolute bottom-7 -right-14 max-[375px]:left-40 h-24 w-24 max-[1100px]:h-20 max-[1100px]:w-20 max-[515px]:w-15 max-[515px]:h-15 max-[375px]:w-10 max-[375px]:h-10 rounded-full bg-linear-to-br from-blue-200 via-blue-400 to-blue-500 shadow-xl shadow-blue-400/20 ring-1 ring-white/50" />
                    <div className="absolute bottom-1 max-[515px]:-bottom-5 right-13 max-[515px]:right-7 h-8 w-8 max-[1100px]:h-6 max-[1100px]:w-6 rounded-full bg-linear-to-br from-blue-200 via-blue-400 to-blue-500 shadow-md ring-1 ring-white/50" />
                </div>
            </div>
        </section>
    )
}