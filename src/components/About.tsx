import aboutme from "../assets/aboutMeImg.jpg"

const About = () => {
  const skills = [
    "Java",
    "PostgreSQL",
    "Flutter",
    "React",
    "C++",
    "Typescript",
    "Laravel",
    "n8n",
    "Docker",
    "Git",
  ]

  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-16 md:py-24 flex flex-col items-center">
      {/* Heading */}
      <h1 className="font-bold text-black text-4xl md:text-5xl">About Me</h1>
      <div className="w-[130px] h-[4px] bg-gradient-to-r from-[#A88FEB] to-[#E0B3FF] mt-6"></div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center mt-12 w-full">
        {/* Text Column */}
        <div>
          <h3 className="font-bold text-[#41268C] text-2xl mb-4">
            Passionate Developer Ready to Break Into Tech!
          </h3>

          <p className="text-[#A88FEB] mt-6 leading-relaxed">
            I am a passionate Java and mobile developer who loves to create and
            innovate ideas for the benefit of the community. I’m now eager to
            break into the field of AI and contribute my skills to meaningful
            projects.
          </p>

          <p className="text-[#A88FEB] mt-6 leading-relaxed mb-6">
            I’m driven to keep learning, collaborating with others, and building
            technology that makes a positive impact. I feel ready to grow as
            part of the tech industry and I’m excited to take on new challenges
            that push me to keep improving.
          </p>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-[#27194F] text-[#A88FEB] rounded-full text-sm font-medium hover:bg-[#A88FEB] hover:text-[#27194F] transition-colors duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div className="flex justify-center">
          <div className="relative overflow-hidden rounded-lg w-full max-w-xs md:max-w-md lg:max-w-lg shadow-2xl">
            <img
              src={aboutme}
              alt="About Me"
              className="w-full hover:scale-105 transition-transform duration-300"
            />
            {/* Soft gradient blobs */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-400 opacity-30 rounded-2xl blur-2xl"></div>
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-400 opacity-30 rounded-2xl blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
