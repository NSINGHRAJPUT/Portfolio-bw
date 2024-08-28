import Link from "next/link";
import Image from "next/image";
import styles from "./Slider.module.css";
import s1 from "../../assets/images/1.png";
import s2 from "../../assets/images/2.png";
import s3 from "../../assets/images/3.png";
import s4 from "../../assets/images/4.png";
import s5 from "../../assets/images/5.png";
import s6 from "../../assets/images/6.png";
import s7 from "../../assets/images/7.png";
import s8 from "../../assets/images/8.png";
import bg from "../../assets/images/bg.png";

const projects = [
  {
    name: "Condominium Portal",
    link: "https://condominiumportal.com/",
    image: s1,
  },
  {
    name: "Company Website",
    link: "https://www.tinyscript.in/",
    image: s2,
  },
  {
    name: "Travel Website",
    link: "https://travel-website-rho-livid.vercel.app/",
    image: s3,
  },
  {
    name: "Construction Masters",
    link: "https://construction-masters.vercel.app/",
    image: s4,
  },
  {
    name: "Job Fair",
    link: "https://job-fair.vercel.app/",
    image: s5,
  },
  {
    name: "First Portfolio",
    link: "https://simpleportfolio-iota.vercel.app/",
    image: s6,
  },
  {
    name: "Burger App",
    link: "https://burger-orcin-phi.vercel.app/",
    image: s7,
  },
  {
    name: "New Portfolio",
    link: "https://my-portfolio-swart-beta-85.vercel.app/",
    image: s8,
  },
];

export default function Slider() {
  return (
    <div className="relative pt-12">
      <div className=" absolute -z-1 h-full w-full">
        <Image
          src={bg}
          // layout="fill"
          objectFit="cover"
          className="h-full w-full"
        />
      </div>
      <h1 className="heading mb-8 text-center">Portfolio</h1>
      <div className={styles.banner}>
        <div className={styles.slider} style={{ "--quantity": 8 }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={styles.item}
              style={{ "--position": index + 1 }}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="contain"
                />
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.content}>
          <p className="w-full px-[5%]">
            As a passionate full stack web developer and designer, I specialize
            in creating dynamic, responsive, and user-friendly websites. With
            expertise in HTML, CSS, JavaScript, React, Node.js, Express.js,
            Next.js, React Native, and MongoDB, I bring a comprehensive approach
            to web development. My portfolio showcases a diverse range of
            projects, each reflecting my commitment to clean, efficient code,
            modern design principles, and innovative solutions in the digital
            space.
          </p>
        </div>
      </div>
    </div>
  );
}
