import profile from "../assets/ProfilePic 1.svg"
import { FaArrowDown } from "react-icons/fa"

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)

    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <>
      <div className="flex justify-center ">
        <section className="bg-[#27194F] rounded-full border-[3px] border-[#27194F]">
          <img src={profile} />
        </section>
      </div>

      <div className="flex justify-center mt-3 text-black m">
        <p className="font-bold text-[48px]/[60px] text-center m-4">
          Hi, I'm <span className="text-[#41268C]">Spyke Matthew Lim</span>
        </p>
      </div>

      <div className="flex justify-center mt-3  text-[#A88FEB] ">
        <p className=" text-[18px] text-center mr-10 ml-10">
          Aspiring Software Engineer passionate about AI and making a difference
          in the tech industry
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mt-8 gap-y-4">
        <button
          className="bg-[#27194F] shadow-[0px_4px_4px_0px_rgba(39,25,79,0.5)] text-[18px] text-[#A88FEB] font-bold w-[182px] h-[50px] rounded-[10px]"
          onClick={() => scrollToSection("projects")}
        >
          View My Works
        </button>
        <button className="bg-white border-black border-1 shadow-[0px_4px_4px_0px_rgba(39,25,79,0.5)] text-[18px] text-[#A88FEB] font-bold w-[182px] h-[50px] rounded-[10px]">
          Download CV
        </button>
        <button>
          <FaArrowDown
            size={30}
            className="text-[#A88FEB] hover:text-[#41268C] duration-300 mt-8 animate-bounce cursor-pointer"
            onClick={() => scrollToSection("#about")}
          ></FaArrowDown>
        </button>
      </div>
    </>
  )
}

export default Hero
