import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeaturedProjects from "./components/FeaturedProjects"
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
    return (
        <>
            <main className="mx-35">
                <Navbar />
                <Hero />
                <FeaturedProjects />
                <About />
                <Skills />
                <Contact />
            </main>
            
            <Footer />
        </>
    )
}