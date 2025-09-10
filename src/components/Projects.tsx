import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "School Publication Website",
      description:
        "Linya is iACADEMY Cebu's Student Publication website, created and designed by CS students to provide a platform for our school's news and updates.",
      image: "/1.png",
      technologies: ["Laravel", "PostgreSQL"],

      liveUrl:
        "http://ec2-13-236-207-223.ap-southeast-2.compute.amazonaws.com/home",
    },
    {
      title: "Travel Blog Website",
      description:
        "A simple travel blog website about Italy, giving tourists an idea of what to expect when visiting the beautiful country",
      image: "3.png",
      technologies: ["HTML", "CSS", "JavaScript"],

      liveUrl: "https://final-html-project-ruddy.vercel.app/",
    },
    {
      title: "Restaurant Management System",
      description:
        "A restaurant management system for digitalizing food stocks.",
      image: "2.jpeg",
      technologies: ["Java", "JavaFX"],

      liveUrl: "#",
    },
    {
      title: "iDiscount",
      description:
        "A fintech application that aims to give Cebu students discounts for their different needs and wants",
      image: "idis.jpg",
      technologies: ["Flutter", "Supabase"],

      liveUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1  bg-[#27194F] text-[#A88FEB] rounded-full text-sm font-medium hover:bg-[#A88FEB] hover:text-[#27194F] transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
