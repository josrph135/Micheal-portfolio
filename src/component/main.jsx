import Header from "./header";
import Home from "./home";
import Work from "./work";
import About from "./about";
import Contact from "./Contact";
import Footer from "./footer";
import Skills from "./skill";

const Main = () => {
  return (
    <div className="bg-white min-w-[320px] scroll-smooth ease-linear duration-300 transition font-san min-h-screen  sm:px-0 w-screen flex flex-col">
      <Header />
      <Home />
      <Work />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
