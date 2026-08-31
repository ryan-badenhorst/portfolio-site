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
            <Navbar />

            <main className="mx-35 max-xl:mx-15">
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