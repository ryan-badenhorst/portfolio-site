import topLogo from "../images/top-logo.jpg";

export default function Navbar() {
    return (
        <nav className="flex flex-row text-xl bg-slate-50" id="nav">
            <a href="#hero" className="pl-3 flex flex-row items-center">
                <img src={topLogo} alt="Top Logo" className="w-16 h-16"/>
                <p className="font-bold p-5">Ryan Badenhorst</p>
            </a>

            <div className="flex flex-row gap-4 ml-auto">
                <a href="#projects" className="navbar-link">Projects</a>
                <a href="#about" className="navbar-link">About</a>
                <a href="#skills" className="navbar-link">Skills</a>
                <a href="#contact" className="navbar-link">Contact</a>
            </div>
        </nav>
    )
}