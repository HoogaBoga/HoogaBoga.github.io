import "./App.css"
import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"

function App() {
  return (
    <>
      <NavBar />

      <section
        id="hero"
        className="scroll-mt-13 h-170 md:h-190 md:pt-30 flex flex-col pt-10 items-center bg-[#f6f6f6]"
      >
        <Hero></Hero>
      </section>

      <section
        id="about"
        className="scroll-mt-12 w-full flex flex-col items-center bg-[#FBFBFB]"
      >
        <About></About>
      </section>

      <section
        id="experience"
        className="scroll-mt-12 w-full flex flex-col items-center"
      >
        <Experience></Experience>
      </section>

      <section
        id="projects"
        className="scroll-mt-12 w-full flex flex-col items-center bg-[#FBFBFB]"
      >
        <Projects></Projects>
      </section>

      <section
        id="contact"
        className="scroll-mt-12 w-full flex flex-col bg-white"
      >
        <Contact></Contact>
      </section>
      <Footer />
    </>
  )
}

export default App
