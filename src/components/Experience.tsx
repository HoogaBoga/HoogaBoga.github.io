const experiences = [
  {
    title: "Software Engineer",
    company: "iDiscount Mobile Philippines",
    timeline: "2025 - Present",
    description:
      "Contributed to the development of a Flutter mobile app that helps students make the most out of their student discounts that they pay for in school.",
    technologies: ["Flutter", "Stacked", "Supabase"],
  },
]

const Experience = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*Header*/}
        <div className="text-center">
          <h1 className="font-bold text-black text-4xl md:text-5xl">
            Experience
          </h1>
          <div className="w-[130px] h-[4px] bg-gradient-to-r from-[#A88FEB] to-[#E0B3FF] mt-6 mb-16 mx-auto"></div>
        </div>

        <div className="relative">
          {/*Timeline line*/}
          <div className="absolute left-3 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-r from-[#A88FEB] to-[#E0B3FF]"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                {/*Timeline dot*/}
                <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#A88FEB] to-[#E0B3FF] rounded-full border-4 border-white shadow-lg z-10"></div>

                {/*Content*/}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  } ml-8 md:ml-0`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-[#41268C] font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 text-sm mb-4">{exp.timeline}</p>
                    <p className="text-[#A88FEB] mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#27194F] text-[#A88FEB] rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
