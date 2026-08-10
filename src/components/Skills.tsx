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
    
                <div className="grid w-full max-w-5xl grid-cols-2 gap-4">

                    {/* Card 1 */}
                    <div className="col-span-2 p-2 border">
                        Core Technologies
                    </div>

                    {/* Card 2 */}
                    <div className="p-2 border">
                        React Ecosystem
                    </div>

                    {/* Card 3 */}
                    <div className="p-2 border">
                        Tools
                    </div>

                    {/* Card 4 */}
                    <div className="col-span-2 p-2 border">
                        Development
                    </div>

                </div>

            </div>

        </section>
    )
}