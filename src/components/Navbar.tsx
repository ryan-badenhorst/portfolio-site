import topLogo from "../images/top-logo.jpg";

export default function Navbar() {
    return (
        <nav className="flex flex-row text-xl bg-slate-50 max-[673px]:flex-col max-[900px]:border max-[900px]:border-b-indigo-400" id="nav">
            <a href="#hero" className="pl-3 flex flex-row items-center">
                <img src={topLogo} alt="Top Logo" className="w-16 h-16 max-[673px]:w-12 max-[673px]:h-12"/>
                <p className="font-bold p-5 max-[673px]:p-3">Ryan Badenhorst</p>
            </a>

            <div className="flex flex-row gap-4 ml-auto max-md:gap-0 max-[673px]:ml-0 max-[395px]:grid max-[395px]:grid-cols-2 max-[395px]:place-items-center">
                <a href="#projects" className="navbar-link">Projects</a>
                <a href="#about" className="navbar-link">About</a>
                <a href="#skills" className="navbar-link">Skills</a>
                <a href="#contact" className="navbar-link">Contact</a>
            </div>
        </nav>
    )
}