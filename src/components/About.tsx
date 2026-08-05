import { FaCode, FaLightbulb, FaGraduationCap, FaArrowTrendUp, FaHeart } from "react-icons/fa6";

export default function About() {
    return (
        <section id="about" className="mb-20">

            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
                About Me
            </p>

            <h1 className="section-headings mb-4">
                More than just the projects I build.
            </h1>

            <p className="mb-12 max-w-4xl text-lg leading-8 text-slate-600">
                While my projects demonstrate what I can build, they don't fully
                show how I approach solving problems, the principles that guide
                my work, or what motivates me to keep improving every day.
            </p>

            <div className="grid grid-cols-2 gap-8">

                {/* Card 1 */}
                <article className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">

                    <div className="mb-10 flex items-center gap-5">

                        <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-indigo-50 text-3xl text-indigo-600">
                            <FaCode />
                        </div>

                        <div>

                            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
                                Process
                            </p>

                            <h2 className="text-3xl font-bold text-slate-900">
                                How I Build Software
                            </h2>

                        </div>

                    </div>

                    <div className="space-y-8">

                        <div className="flex gap-5">

                            <div className="flex flex-col items-center">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                                    1
                                </div>

                                <div className="mt-2 h-full w-px bg-slate-200" />
                            </div>

                            <div>

                                <h3 className="mb-2 text-xl font-semibold">
                                    Plan First
                                </h3>

                                <p className="leading-7 text-slate-600">
                                    Every project starts with planning the
                                    pages, components and functionality before
                                    writing any code.
                                </p>

                            </div>

                        </div>

                        <div className="flex gap-5">

                            <div className="flex flex-col items-center">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                                    2
                                </div>

                                <div className="mt-2 h-full w-px bg-slate-200" />
                            </div>

                            <div>

                                <h3 className="mb-2 text-xl font-semibold">
                                    Build Incrementally
                                </h3>

                                <p className="leading-7 text-slate-600">
                                    I focus on one feature at a time, making
                                    sure each piece works before moving on to
                                    the next.
                                </p>

                            </div>

                        </div>

                        <div className="flex gap-5">

                            <div className="flex items-center justify-center">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                                    3
                                </div>

                            </div>

                            <div>

                                <h3 className="mb-2 text-xl font-semibold">
                                    Refine & Improve
                                </h3>

                                <p className="leading-7 text-slate-600">
                                    Reusable components, clean code and future
                                    maintainability are always part of the
                                    process.
                                </p>

                            </div>

                        </div>

                    </div>

                </article>

                {/* Card 2 */}
                <article className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">

                    <div className="mb-8 flex items-center gap-5">

                        <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-indigo-50 text-3xl text-indigo-600">
                            <FaLightbulb />
                        </div>

                        <div>

                            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
                                Philosophy
                            </p>

                            <h2 className="text-3xl font-bold">
                                Development Philosophy
                            </h2>

                        </div>

                    </div>

                    <div className="grid gap-5">

                        <div className="rounded-2xl bg-slate-50 p-5">
                            <h3 className="mb-2 font-semibold">
                                Understand Why
                            </h3>

                            <p className="leading-7 text-slate-600">
                                I enjoy understanding the reasoning behind
                                technical decisions before applying them.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-slate-50 p-5">
                            <h3 className="mb-2 font-semibold">
                                Clean & Maintainable
                            </h3>

                            <p className="leading-7 text-slate-600">
                                I prefer readable code and thoughtful structure
                                over clever shortcuts.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-slate-50 p-5">
                            <h3 className="mb-2 font-semibold">
                                User Focused
                            </h3>

                            <p className="leading-7 text-slate-600">
                                Good software should feel intuitive and enjoyable
                                to use across all devices.
                            </p>
                        </div>

                    </div>

                </article>

                {/* Card 3 */}
                <article className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">

                    <div className="mb-8 flex items-center gap-5">

                        <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-indigo-50 text-3xl text-indigo-600">
                            <FaGraduationCap />
                        </div>

                        <h2 className="text-3xl font-bold">
                            What I've Learned
                        </h2>

                    </div>

                    <div className="space-y-6 border-l-2 border-indigo-200 pl-6">

                        <div>
                            <h3 className="font-semibold">
                                Learn Independently
                            </h3>

                            <p className="text-slate-600">
                                Documentation has become one of my strongest
                                learning tools.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold">
                                Solve Problems
                            </h3>

                            <p className="text-slate-600">
                                Breaking larger problems into smaller tasks makes
                                development far more manageable.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold">
                                Keep Improving
                            </h3>

                            <p className="text-slate-600">
                                Every project teaches me something I carry into
                                the next one.
                            </p>
                        </div>

                    </div>

                </article>

                {/* Card 4 */}
                <article className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">

                    <div className="mb-8 flex items-center gap-5">

                        <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-indigo-50 text-3xl text-indigo-600">
                            <FaArrowTrendUp />
                        </div>

                        <h2 className="text-3xl font-bold">
                            What I'm Working Towards
                        </h2>

                    </div>

                    <div className="space-y-5">

                        <div className="rounded-2xl border border-slate-200 p-5">
                            Continue building larger React applications.
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-5">
                            Learn more about testing, accessibility and
                            performance.
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-5">
                            Grow into a professional Front-End Developer working
                            as part of a collaborative team.
                        </div>

                    </div>

                </article>

                {/* Card 5 */}
                <article className="col-span-2 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">

                    <div className="mb-8 flex items-center gap-5">

                        <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-indigo-50 text-3xl text-indigo-600">
                            <FaHeart />
                        </div>

                        <h2 className="text-3xl font-bold">
                            Beyond Coding
                        </h2>

                    </div>

                    <div className="grid grid-cols-3 divide-x divide-slate-200">

                        <div className="px-6">
                            <h3 className="mb-3 font-semibold">
                                Curiosity
                            </h3>

                            <p className="leading-7 text-slate-600">
                                I enjoy understanding how things work and why
                                certain approaches are better than others.
                            </p>
                        </div>

                        <div className="px-6">
                            <h3 className="mb-3 font-semibold">
                                Languages
                            </h3>

                            <p className="leading-7 text-slate-600">
                                I'm learning Dutch and French because I enjoy
                                connecting with different cultures.
                            </p>
                        </div>

                        <div className="px-6">
                            <h3 className="mb-3 font-semibold">
                                Problem Solving
                            </h3>

                            <p className="leading-7 text-slate-600">
                                Whether it's software or everyday challenges, I
                                enjoy finding thoughtful, practical solutions.
                            </p>
                        </div>

                    </div>

                </article>

            </div>

        </section>
    );
}