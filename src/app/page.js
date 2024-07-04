import AboutMe from "./_components/About";
import ContactForm from "./_components/Contact";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Portfolio from "./_components/Portfolio";
import Skills from "./_components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <ContactForm />
      <hr className="border-white border-1" />

      <Footer />
    </>
  );
}
