import profilePicture from "../images/profile-picture.png";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
    return (
        <div id="hero" className="flex flex-row gap-5 mb-5">

            <div className="p-5 flex-1 flex items-center">

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

            <div className="flex-1 flex items-center justify-center">
                <img src={profilePicture} alt="Profile Picture" className="w-100 h-100" />
            </div>

        </div>
    )
}