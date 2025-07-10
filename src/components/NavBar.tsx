import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../assets/logo.svg"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const NavBar = () => {
  //States to open navbar for mobile and to highlight which section is active
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  //mav items or texts
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  //to open and close hamburger navbar
  const toggleMenu = () => setIsOpen(!isOpen)

  //function to scroll to a section smoothly
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)

    if (element) {
      const yOffset = -80 // or whatever your nav height is
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({ top: y, behavior: "smooth" })
    }

    setIsOpen(false)
  }

  //useEFfect to highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY

      navItems.forEach((item) => {
        const id = item.href.substring(1)
        const section = document.getElementById(id)

        if (section) {
          const offset = section.offsetTop
          const height = section.offsetHeight
          if (scrollPos >= offset - 80 && scrollPos < offset + height - 80) {
            setActiveSection(id)
          }
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  return (
    <>
      <nav className="navbar flex justify-between sticky top-0 w-full bg-[#27194F] p-3 z-50">
        <img src={logo} className="h-9"></img>

        {/*Desktop*/}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`px-2 py-1 ${
                activeSection === item.href.substring(1)
                  ? "bg-purple-600 text-white rounded-md"
                  : "text-white hover:bg-purple-700 hover:rounded-md"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/*Hamburger Button*/}
        <button
          className="btn btn-square btn-ghost bg-[#27194F] md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20}></FaBars>}
        </button>
      </nav>

      {/*Mobile menu with Framer Motion*/}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-14 left-0 w-full bg-[#27194F] flex flex-col gap-4 p-4 md:hidden z-40"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-white px-2 py-1 ${
                  activeSection === item.href.substring(1)
                    ? "bg-purple-600 text-white rounded-md"
                    : "text-white hover:bg-purple-700 hover:rounded-md"
                }`}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavBar
