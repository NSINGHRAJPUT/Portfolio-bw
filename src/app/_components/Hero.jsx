import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex h-[80vh] flex-col md:flex-row items-center justify-between px-[5%] space-y-24 py-[10vh]"
    >
      {/* Left Section */}
      <div className="flex flex-col space-y-4 md:w-3/5">
        <h1 className="heading">Chaitali Mewada </h1>
        <p className="paragraph">
          I'm a passionate web developer and designer with experience in
          building web applications. Check out my work and get in touch!
        </p>
        <Link
          href="mailto:your-email@example.com"
          className="button-opposite w-fit"
        >
          CONTACT ME
        </Link>
      </div>

      {/* Right Section */}
      <div className="md:w-2/5 flex justify-end items-center">
        <div className="w-fit p-4 "></div>
      </div>
    </section>
  );
}
