import { FaReact } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { SiVitest } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
    return (
        <section id="skills" className="mb-15">

            <h1 className="section-headings mb-3">
                Skills and Tools
            </h1>

            <p className="mb-6 max-w-4xl text-lg leading-8 text-slate-600">
                The technologies and practices I use to build modern,
                responsive web applications.
            </p>

            <div className="flex justify-center">
    
                <div className="grid w-full max-w-5xl grid-cols-2 gap-5">

                    {/* Card 1 */}
                    <div className="col-span-2 p-4 rounded-xl bg-white shadow-xl ring-2 ring-slate-300">

                        <h3 className="mb-5 text-2xl font-semibold text-slate-900 italic">
                            Core Technologies
                        </h3>

                        <div className="grid grid-cols-3 gap-x-8 gap-y-4">

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                <FaReact className="text-xl" />
                                <span>React</span>
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                <BsTypescript className="text-xl" />
                                <span>TypeScript</span>
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                <RiTailwindCssFill className="text-xl" />
                                <span>Tailwind CSS</span>
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                <IoLogoJavascript className="text-xl" />
                                <span>JavaScript</span>
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                <FaHtml5 className="text-xl" />
                                <span>HTML</span>
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                <FaCss3Alt className="text-xl" />
                                <span>CSS</span>
                            </div>

                        </div>

                    </div>

                    {/* Card 2 */}
                    <div className="p-4 rounded-xl bg-white shadow-xl ring-2 ring-slate-300">

                        <h3 className="mb-5 text-2xl font-semibold text-slate-900 italic">
                            React Ecosystem
                        </h3>

                        <div className="flex flex-col gap-4">

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                <SiReactrouter className="text-xl"/>
                                <span>React Router</span>
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                React Testing Library
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                <SiVitest className="text-xl"/>
                                <span>Vitest</span>
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                React Icons
                            </div>

                        </div>

                    </div>

                    {/* Card 3 */}
                    <div className="p-4 rounded-xl bg-white shadow-xl ring-2 ring-slate-300">

                        <h3 className="mb-5 text-2xl font-semibold text-slate-900 italic">
                            Tools
                        </h3>

                        <div className="flex flex-col gap-4">

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                <FaGitAlt className="text-xl"/>
                                <span>Git</span>
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                <FaGithub className="text-xl"/>
                                <span>GitHub</span>
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                <FaNodeJs className="text-xl"/>
                                <span>Node.js</span>
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                <FaNpm className="text-xl"/>
                                <span>npm</span>
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                <SiVite className="text-xl"/>
                                <span>Vite</span>
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                <VscVscode className="text-xl"/>
                                <span>VS Code</span>
                            </div>
                        
                        </div>

                    </div>

                    {/* Card 4 */}
                    <div className="col-span-2 p-4 rounded-xl bg-white shadow-xl ring-2 ring-slate-300">

                        <h3 className="mb-5 text-2xl font-semibold text-slate-900 italic">
                            Development
                        </h3>

                        <div className="grid grid-cols-3 gap-x-8 gap-y-4">

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                Responsive Design
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                Accessibility
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                Component-Based Development
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                Reusable Components
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                State Management
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                Data Management & Manipulation
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                API Integration
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                Local Storage
                            </div>

                            <div className="flex items-center justify-center gap-3 rounded-xl border border-indigo-500 bg-slate-100 px-4 py-3 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">
                                Testing
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}