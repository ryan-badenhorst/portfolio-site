import { FaLightbulb } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";

export default function About() {
    return (
        <section id="about" className="mb-15">

            <h1 className="section-headings mb-3">
                About Me
            </h1>

            <p className="mb-6 max-w-4xl text-lg leading-8 text-slate-600">
                A little more about how I approach software development,
                what I've learned throughout my journey and the principles
                that guide the way I build applications.
            </p>

            <div className="grid grid-cols-2 gap-8">

                <div className="flex flex-col gap-8">

                    <div className="col-start-1 rounded-3xl bg-white shadow-xl overflow-hidden">

                        <div className="border-b border-slate-200 bg-linear-to-r from-indigo-100 via-white to-indigo-100 p-6">

                            <div className="mb-2 flex items-center gap-4">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-2xl text-indigo-600">
                                    <FaSitemap />
                                </div>

                                <h2 className="text-3xl font-bold text-slate-900">
                                    How I Build Software
                                </h2>

                            </div>

                            <p className="leading-8 text-slate-600">
                                Every project I build follows a similar process. 
                                Taking time to plan ahead helps me create applications 
                                that are easier to understand, maintain and expand.
                            </p>

                        </div>

                        <div className="relative p-8">

                            <div className="absolute left-12.5 top-15 bottom-36 w-1 h-110 bg-indigo-200" />

                            <div className="space-y-10">

                                <div className="relative flex gap-6">

                                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                                        1
                                    </div>

                                    <div>

                                        <h3 className="mb-2 text-xl font-semibold text-slate-900">
                                            Engineer a Plan
                                        </h3>

                                        <p className="leading-7 text-slate-600">
                                            Before writing any code, I map out the application 
                                            by deciding what components, pages, hooks and other functionality it will need.
                                        </p>

                                    </div>

                                </div>

                                <div className="relative flex gap-6">

                                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                                        2
                                    </div>

                                    <div>

                                        <h3 className="mb-2 text-xl font-semibold text-slate-900">
                                            Break It Down
                                        </h3>

                                        <p className="leading-7 text-slate-600">
                                            I then break down large features into smaller, manageable pieces 
                                            so I can focus on solving one problem at a time.
                                        </p>

                                    </div>

                                </div>

                                <div className="relative flex gap-6">

                                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                                        3
                                    </div>

                                    <div>

                                        <h3 className="mb-2 text-xl font-semibold text-slate-900">
                                            Build & Refine
                                        </h3>

                                        <p className="leading-7 text-slate-600">
                                            From there, I build one feature at a time, 
                                            making sure that it works before moving on. 
                                            If I notice any repeated logic, I extract it into 
                                            reusable components to keep the application  
                                            consistent and easier to maintain.
                                        </p>

                                    </div>

                                </div>

                                <div className="relative flex gap-6">

                                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                                        4
                                    </div>

                                    <div>

                                        <h3 className="mb-2 text-xl font-semibold text-slate-900">
                                            Think Ahead
                                        </h3>

                                        <p className="leading-7 text-slate-600">
                                            I write code with the future in mind by 
                                            using clear naming conventions, avoiding unnecessary complexity 
                                            and keeping everything organized so that 
                                            adding new features or making changes later is straightforward.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="border-t border-slate-200 bg-indigo-50 p-6">

                            <div className="mb-4 flex items-center gap-3">

                                <FaBookBookmark className="text-xl text-indigo-600" />

                                <h3 className="font-bold text-slate-900">
                                    Core Principle
                                </h3>

                            </div>

                            <blockquote className="border-l-4 border-indigo-500 pl-5 text-lg italic leading-8 text-slate-700">
                                "I believe taking a little more time 
                                to build something properly often saves a lot more time as the project grows"
                            </blockquote>

                        </div>

                    </div>

                    {/* Card 3 */}

                    <div className="col-start-1 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">

                        <div className="border-b border-slate-200 bg-linear-to-r from-indigo-100 via-white to-indigo-100 p-6">

                            <h2 className="text-3xl font-bold text-slate-900">
                                What I'm Working Towards
                            </h2>

                            <p className="mt-2 leading-8 text-slate-600">
                                I'm working towards becoming a stronger Front-End Developer by
                                challenging myself through projects, learning from each experience
                                and preparing for a professional development environment.
                            </p>

                        </div>

                        <div className="p-8">

                            <div className="rounded-2xl bg-indigo-50 p-6">

                                <div className="mb-4 flex items-center gap-4">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-xl text-indigo-600">
                                        <FaRocket />
                                    </div>

                                    <div>

                                        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                                            Current Focus
                                        </p>

                                        <h3 className="text-2xl font-bold text-slate-900">
                                            Building & Challenging Myself
                                        </h3>

                                    </div>

                                </div>

                                <p className="leading-8 text-slate-700">
                                    Every day, I work towards becoming a stronger Front-End Developer
                                    by building projects that challenge me to apply what I already know
                                    while pushing me beyond my current skills. Each project gives me an
                                    opportunity to take on something new and learn from the process.
                                </p>

                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-6">

                                <div className="rounded-2xl border-t-4 border-indigo-500 bg-white p-6 shadow-sm ring-1 ring-slate-200">

                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-xl text-indigo-600">
                                        <FaGraduationCap />
                                    </div>

                                    <h3 className="mb-3 text-xl font-semibold text-slate-900">
                                        Growing Professionally
                                    </h3>

                                    <p className="leading-8 text-slate-600">
                                        Alongside building projects, I'm learning more about modern
                                        frontend development, industry standards and best practices
                                        so that I can confidently contribute as part of a professional
                                        development team.
                                    </p>

                                </div>

                                <div className="rounded-2xl border-t-4 border-indigo-500 bg-white p-6 shadow-sm ring-1 ring-slate-200">

                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-xl text-indigo-600">
                                        <FaBullseye />
                                    </div>

                                    <h3 className="mb-3 text-xl font-semibold text-slate-900">
                                        My Goal
                                    </h3>

                                    <p className="leading-8 text-slate-600">
                                        My goal is to build software that is both well engineered
                                        and easy to use, while growing through real-world experience
                                        and collaboration with other developers.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>
                
                </div>

                {/* Card 2 */}

                <div className="col-start-2 rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">

                    <div className="mb-5 border-b border-slate-200 bg-linear-to-r from-indigo-100 via-white to-indigo-100 p-6">

                        <div className="mb-2 flex items-center gap-4">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-2xl text-indigo-600">
                                <FaLightbulb />
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900">
                                Principles I Build By
                            </h2>

                        </div>

                        <p className="leading-8 text-slate-600">
                            The way I build software is guided by a set of principles that help me 
                            make better technical decisions while continuing to grow as a developer.
                        </p>

                    </div>

                    <div className="px-8">
                        <div className="mb-4 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
                                <FaUsers />
                            </div>

                            <h3 className="text-2xl font-semibold text-slate-900">
                                Software is for People
                            </h3>
                        </div>

                        <p className="leading-8 text-slate-700">
                            I believe good software should be easy to understand just as much as it should be easy to use.
                            Whether someone is using the application or working on its code, the experience should feel intuitive, 
                            consistent and well thought out.
                        </p>

                        <p className="mt-4 leading-8 text-slate-700">
                            I also pay close attention to details such as spacing, consistency and overall layout 
                            because I believe they're what elevate a good application into a great user experience. 
                            Good software should be enjoyable for both the people using it and the developers working on it.
                        </p>
                    </div>

                    <div className="my-6 h-px bg-linear-to-r from-transparent via-slate-400 to-transparent" />

                    <div className="px-8">
                        <div className="mb-4 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
                                <FaBrain />
                            </div>

                            <h3 className="text-2xl font-semibold text-slate-900">
                                Every Decision Has a Reason
                            </h3>
                        </div>

                        <p className="leading-8 text-slate-700">
                            Every decision I make has a purpose. 
                            I enjoy understanding why one solution is better than another 
                            because understanding the reasoning behind those decisions helps me 
                            continually improve both my code and the experience I create for users.
                        </p>
                    </div>

                    <div className="my-8 h-px bg-linear-to-r from-transparent via-slate-400 to-transparent" />

                    <div className="px-8">
                        <div className="mb-4 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
                                <FaBookOpen />
                            </div>

                            <h3 className="text-2xl font-semibold text-slate-900">
                                Learning Never Stops
                            </h3>
                        </div>

                        <p className="leading-8 text-slate-700">
                            Teaching myself software development taught me how to learn independently, 
                            pushing me to research documentation, solve unfamiliar problems 
                            and become comfortable learning new technologies. 
                        </p>

                        <p className="mt-4 leading-8 text-slate-700">
                            Learning how to learn has become one of the most valuable skills I've gained 
                            because it allows me to approach every new project as an opportunity to improve.
                        </p>
                    </div>

                    <div className="my-8 h-px bg-linear-to-r from-transparent via-slate-300 to-transparent" />

                    <div className="px-8">
                        <div className="mb-4 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
                                <FaSeedling />
                            </div>

                            <h3 className="text-2xl font-semibold text-slate-900">
                                Think Beyond Today
                            </h3>
                        </div>

                        <p className="leading-8 text-slate-700">
                            The biggest lesson I've learned is that software isn't finished the moment it works. 
                            The decisions made today shape how easy it will be to maintain, improve and expand tomorrow.
                        </p>
                    </div>

                    <div className="mt-8 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-700">
                            Biggest Lesson
                        </p>

                        <blockquote className="text-xl font-medium italic leading-9 text-slate-800">
                            "Understanding why something works is just as important as making it work."
                        </blockquote>
                    </div>

                </div>

                {/* Card 4 */}

                <div className="col-span-2 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200" />

            </div>

        </section>
    )
}