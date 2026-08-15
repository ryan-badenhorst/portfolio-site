import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

export default function Contact() {
    return (
        <section id="contact" className="relative mb-15 overflow-hidden py-8">

            <div className="pointer-events-none absolute inset-0">

                {/* Left side */}
                <div className="absolute left-[3%] top-[22%] h-28 w-28 rounded-full bg-linear-to-br from-blue-300 to-purple-400 opacity-60" />

                <div className="absolute left-[8%] top-[45%] h-16 w-16 rounded-full bg-linear-to-br from-blue-300 to-indigo-400 opacity-55" />

                <div className="absolute bottom-[30%] left-[4%] h-20 w-20 rounded-full bg-linear-to-br from-blue-300 to-indigo-400 opacity-55" />

                {/* Right side */}
                <div className="absolute right-[4%] bottom-[5%] h-20 w-20 rounded-full bg-linear-to-br from-blue-300 to-indigo-400 opacity-60" />

                <div className="absolute right-[0%] bottom-[20%] h-32 w-32 rounded-full bg-linear-to-br from-blue-300 to-indigo-400 opacity-55" />

            </div>

            <div className="relative z-10">

                <h1 className="section-headings mb-3">
                    Let's Connect
                </h1>

                <p className="mb-6 max-w-4xl text-lg leading-8 text-slate-600">
                    I'm looking for my first opportunity to work as a Front-End Developer,
                    where I can contribute what I've learned, continue developing my skills
                    and grow as part of a professional team.
                </p>

                <div className="flex justify-center">

                    <div className="w-full max-w-5xl rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">

                        <div className="mx-auto max-w-3xl text-center">

                            <h2 className="text-3xl font-bold text-slate-900">
                                I'd Love to Hear From You
                            </h2>

                            <p className="mt-3 text-lg leading-8 text-slate-600">
                                Whether you'd like to discuss an opportunity, connect
                                professionally or take a look at what I've been building,
                                feel free to get in touch.
                            </p>

                        </div>

                        <div className="my-8 h-px bg-slate-200" />

                        <div className="grid grid-cols-3 gap-5">

                            {/* Email */}
                            <div className="flex flex-col items-center rounded-2xl border border-indigo-200 bg-indigo-50 p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md">

                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-200 text-2xl text-indigo-700">
                                    <MdEmail />
                                </div>

                                <h3 className="text-xl font-semibold text-slate-900">
                                    Email
                                </h3>

                                <p className="mt-2 leading-7 text-slate-600">
                                    The best way to reach me directly.
                                </p>

                                <a
                                    href="mailto:ryanwbadenhorst@gmail.com"
                                    className="mt-5 inline-flex items-center gap-2 font-semibold text-indigo-700 transition-colors hover:text-indigo-500"
                                >
                                    Send me an email
                                    <FaArrowRight className="text-sm" />
                                </a>

                            </div>


                            {/* LinkedIn */}
                            <div className="flex flex-col items-center rounded-2xl border border-indigo-200 bg-indigo-50 p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md">

                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-200 text-2xl text-indigo-700">
                                    <FaLinkedin />
                                </div>

                                <h3 className="text-xl font-semibold text-slate-900">
                                    LinkedIn
                                </h3>

                                <p className="mt-2 leading-7 text-slate-600">
                                    Connect with me and follow my journey into
                                    professional development.
                                </p>

                                <a
                                    href="https://www.linkedin.com/in/ryan-badenhorst-7975313b1/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 inline-flex items-center gap-2 font-semibold text-indigo-700 transition-colors hover:text-indigo-500"
                                >
                                    View my LinkedIn
                                    <FaArrowRight className="text-sm" />
                                </a>

                            </div>


                            {/* GitHub */}
                            <div className="flex flex-col items-center rounded-2xl border border-indigo-200 bg-indigo-50 p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md">

                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-200 text-2xl text-indigo-700">
                                    <FaGithub />
                                </div>

                                <h3 className="text-xl font-semibold text-slate-900">
                                    GitHub
                                </h3>

                                <p className="mt-2 leading-7 text-slate-600">
                                    Explore my projects and see what I've been building.
                                </p>

                                <a
                                    href="https://github.com/ryan-badenhorst"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 inline-flex items-center gap-2 font-semibold text-indigo-700 transition-colors hover:text-indigo-500"
                                >
                                    View my GitHub
                                    <FaArrowRight className="text-sm" />
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}