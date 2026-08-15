export default function Footer() {
    return (
        <footer className="bg-slate-900 p-5">

            <div className="flex items-end justify-between">

                <div>
                    <p className="font-medium text-slate-100 mb-1">
                        © 2026 Ryan Badenhorst
                    </p>

                    <p className="text-sm text-slate-400">
                        Built with React & TypeScript
                    </p>
                </div>

                <a href="#nav"
                    className="inline-flex items-center gap-2 text-xl font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                >
                    Back to top
                    <span className="text-2xl font-bold" aria-hidden="true">
                        ↑
                    </span>
                </a>

            </div>

        </footer>
    )
}