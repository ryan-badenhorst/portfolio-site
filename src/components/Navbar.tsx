export default function Navbar() {
    return (
        <nav className="flex flex-row border rounded-lg mb-5">
            <a href="">Ryan</a>
            <div className="flex flex-row gap-4 ml-auto">
                <a href="">Projects</a>
                <a href="">About</a>
                <a href="">Skills</a>
                <a href="">Contact</a>
            </div>
        </nav>
    )
}