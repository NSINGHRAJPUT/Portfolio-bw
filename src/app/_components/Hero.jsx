import Link from "next/link";
import hero from "../../assets/images/hero.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex h-fit md:h-[80vh] flex-col md:flex-row items-center justify-between px-[5%] space-y-24 py-[10vh]"
    >
      {/* Left Section */}
      <div className="flex flex-col space-y-4 md:w-3/5">
        <h1 className="heading">NEERAJ SINGH RAJPUT</h1>
        <p className="paragraph">
          I am a dedicated Full Stack Web Developer with a passion for creating
          dynamic and responsive web applications. With extensive experience in
          HTML, CSS, JavaScript, React, Node.js, Express.js, Next.js, and React
          Native, I build efficient and scalable solutions tailored to meet your
          needs. Explore my work and let's collaborate to bring your ideas to
          life!
        </p>
        <Link
          href="mailto:nsinghrajputx@gmail.com"
          className="button-opposite w-fit"
        >
          CONTACT ME
        </Link>
      </div>

      {/* Right Section */}
      <div className="md:w-2/5 flex justify-end items-end">
        <div className="w-fit p-4 overflow-hidden">
          <Image
            src={hero}
            alt="hero"
            className="min-w-[540px] md:min-w-[440px] h-[340px] mb-12"
          />
        </div>
      </div>
    </section>
  );
}
