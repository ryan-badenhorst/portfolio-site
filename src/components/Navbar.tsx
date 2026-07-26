export default function Navbar() {
    return (
        <nav className="flex flex-row border rounded-lg mb-5">
            <a href="">Ryan</a>
            <div className="ml-auto flex flex-row gap-20">
                <div className="flex flex-row gap-4">
                    <a href="">Projects</a>
                    <a href="">About</a>
                    <a href="">Skills</a>
                    <a href="">Contact</a>
                </div>
                <button className="p-5">Rusume</button>
            </div>
        </nav>
    )
}