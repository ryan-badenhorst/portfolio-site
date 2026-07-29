import profilePicture from "../images/profile-picture.png";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
    return (
        <div id="hero" className="flex flex-row mb-5">

            <div className="py-5 pl-30 flex-1 flex items-center">

                <div>
                    <div className="mb-7 text-2xl flex flex-col gap-2">
                        <p className="pl-1">Hi, I'm</p>

                        <h1 className="text-6xl font-bold">
                            Ryan Badenhorst
                        </h1>

                        <p className="text-3xl font-semibold">
                            Front-End Web Developer
                        </p>

                        <p>Durban, South Africa</p>
                    </div>

                    <div className="mb-7 max-w-xl flex flex-col gap-2 text-lg">
                        <p>
                            I enjoy building responsive, accessible web
                            applications with React and TypeScript.
                        </p>

                        <p>
                            Currently focused on creating polished user
                            interfaces while continually expanding my
                            front-end development skills.
                        </p>
                    </div>

                    <div className="mb-7">
                        <p>Primary Stack</p>
                        <p className="text-xl">
                            React · TypeScript · JavaScript · HTML · CSS
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <button className="mr-auto border rounded-lg p-3 text-lg flex flex-row items-center gap-4">
                            View my resume <span><FaArrowRight /></span>
                        </button>

                        <div className="flex flex-row gap-7">
                            <FaGithub className="icons" />
                            <FaLinkedin className="icons" />
                            <MdEmail className="icons" />
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex-1 flex items-center justify-center pr-4">
                <div className="relative">
                    <div className="absolute -top-12 -right-12 -z-10 h-48 w-48 bg-[radial-gradient(#3b82f6_2px,transparent_2px)] bg-size-[16px_16px] opacity-70 mask-[radial-gradient(ellipse_at_bottom_left,black_30%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_at_top_right,black_30%,transparent_75%)]" />
                    <div className="absolute -bottom-12 -left-12 -z-10 h-48 w-48 bg-[radial-gradient(#3b82f6_2px,transparent_2px)] bg-size-[16px_16px] opacity-70 mask-[radial-gradient(ellipse_at_bottom_left,black_30%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_at_bottom_left,black_30%,transparent_75%)]" />

                    <div className="relative w-120 h-120 rounded-full p-2 bg-linear-to-br from-slate-200 via-slate-400 to-slate-600 shadow-2xl shadow-blue-900/30 ring-1 ring-slate-300/40">
                        <div className="w-full h-full rounded-full border-4 border-slate-400/80 overflow-hidden shadow-inner">
                            <img src={profilePicture} alt="Profile Picture" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="absolute bottom-7 -right-14 h-24 w-24 rounded-full bg-linear-to-br from-blue-200 via-blue-400 to-blue-500 shadow-xl shadow-blue-400/20 ring-1 ring-white/50" />

                    <div className="absolute bottom-1 right-13 h-8 w-8 rounded-full bg-linear-to-br from-blue-200 via-blue-400 to-blue-500 shadow-sm shadow-blue-400/20 ring-1 ring-white/50" />
                </div>
            </div>

        </div>
    )
}