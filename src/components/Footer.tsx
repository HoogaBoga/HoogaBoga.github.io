import {
  FaCircle,
  FaCopyright,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { IoMdMail } from "react-icons/io"

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#27194F] h-75 p-5 items-center ">
      <h1 className="text-[24px] font-bold bg-gradient-to-r from-[#A88FEB] to-[#E0B3FF] bg-clip-text text-transparent mt-2 md:mt-6 ">
        Spyke Matthew Lim
      </h1>

      <div className="flex flex-wrap justify-center items-center  gap-x-3 mt-5">
        <span>Software Engineer</span>
        <FaCircle size={8} className="text-[#B89EFF]" />
        <span>Java Developer</span>
        <FaCircle size={8} className="text-[#B89EFF]" />
        <span>Problem Solver</span>
      </div>

      <div className="flex text-[#A88FEB] mt-10 gap-x-10">
        <FaLinkedin size={25} />
        <FaGithub size={25} />
        <FaFacebook size={25} />
        <FaXTwitter size={25} />
        <IoMdMail size={25} />
      </div>

      <div className="w-full max-w-xs border-t border-[#A88FEB] bg-gradient-to-r from-[#A88FEB] to-[#E0B3FF] bg-clip-text text-transparent mt-6"></div>

      <div className="flex text-white mt-4">
        <FaCopyright className="ml-3 mt-0.5 text-[#A88FEB]" />
        <span className="ml-2.5 mr-2.5 text-[13px]">
          2025 Spyke Matthew Lim. All rights reserved. Built with React and
          TailwindCSS
        </span>
      </div>
    </footer>
  )
}

export default Footer
