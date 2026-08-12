import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeaturedProjects from "./components/FeaturedProjects"
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturedProjects />
            <About />
            <Skills />
            <Contact />
        </>
    )
}