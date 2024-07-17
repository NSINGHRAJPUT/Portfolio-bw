import Link from "next/link";
import Image from "next/image";
import s1 from "../../assets/images/1.png";
import s2 from "../../assets/images/2.png";
import s3 from "../../assets/images/3.png";
import s4 from "../../assets/images/4.png";
import s5 from "../../assets/images/5.png";
import s6 from "../../assets/images/6.png";
import s7 from "../../assets/images/7.png";
import s8 from "../../assets/images/8.png";

const Portfolio = () => {
  const projects = [
    {
      name: "Condominium Portal",
      link: "https://condominiumportal.com/",
      image: s1,
      description: "A comprehensive portal for condominium management.",
    },
    {
      name: "Company Website",
      link: "https://www.tinyscript.in/",
      image: s2,
      description: "The official website for TinyScript.",
    },
    {
      name: "Travel Website",
      link: "https://travel-website-rho-livid.vercel.app/",
      image: s3,
      description: "A travel booking website with various features.",
    },
    {
      name: "Construction Masters",
      link: "https://construction-masters.vercel.app/",
      image: s4,
      description: "A project showcasing construction projects.",
    },
    {
      name: "Job Fair",
      link: "https://job-fair.vercel.app/",
      image: s5,
      description: "A platform to find and post job fair events.",
    },
    {
      name: "First Portfolio",
      link: "https://simpleportfolio-iota.vercel.app/",
      image: s6,
      description: "My first portfolio showcasing various projects.",
    },
    {
      name: "Burger App",
      link: "https://burger-orcin-phi.vercel.app/",
      image: s7,
      description: "An app to order and customize burgers.",
    },
    {
      name: "New Portfolio",
      link: "https://my-portfolio-swart-beta-85.vercel.app/",
      image: s8,
      description: "My latest portfolio showcasing recent work.",
    },
  ];

  return (
    <section id="projects" className="p-8">
      <h2 className="heading mb-8 text-center">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <Link key={index} href={project.link}>
            <div className="relative h-48 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center text-center rounded-lg overflow-hidden cursor-pointer">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="text-sm text-white mt-2">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
