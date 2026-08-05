import { FaLightbulb } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

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

                <div className="rounded-3xl bg-white shadow-xl overflow-hidden">

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
                            Every project I build follows the same process.
                            Taking time to plan, build incrementally and think
                            ahead helps me create applications that are easier
                            to understand, maintain and expand.
                        </p>

                    </div>

                    <div className="relative p-8">

                        <div className="absolute left-12.5 top-15 bottom-36 w-1 h-100 bg-indigo-200" />

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
                                        Before writing code, I map out the pages,
                                        components, hooks and functionality the
                                        project will need.
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
                                        Large features become smaller,
                                        manageable tasks so I can solve one
                                        problem at a time.
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
                                        I build one feature at a time, making
                                        sure it works before moving on.
                                        Whenever I notice repeated logic, I
                                        extract it into reusable components.
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
                                        I write clear, organized code that is
                                        easy to understand and straightforward
                                        to extend as the project grows.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="border-t border-slate-200 bg-indigo-50 p-6">

                        <div className="mb-4 flex items-center gap-3">

                            <FaLightbulb className="text-xl text-indigo-600" />

                            <h3 className="font-bold text-slate-900">
                                Core Principle
                            </h3>

                        </div>

                        <blockquote className="border-l-4 border-indigo-500 pl-5 text-lg italic leading-8 text-slate-700">
                            "Taking a little more time to build something
                            properly usually saves far more time as the
                            project grows."
                        </blockquote>

                    </div>

                </div>

                {/* ===================================================== */}
                {/* Card 2 */}
                {/* ===================================================== */}

                <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200" />

                {/* ===================================================== */}
                {/* Card 3 */}
                {/* ===================================================== */}

                <div className="col-span-2 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200" />

                {/* ===================================================== */}
                {/* Card 4 */}
                {/* ===================================================== */}

                <div className="col-span-2 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200" />

            </div>

        </section>
    );
}