import Header from "./header";
import Home from "./home";
import Work from "./work";
import Skill from "./skill";
import About from "./about";
import Contact from "./Contact";
import Footer from "./footer";

const Main = () => {
  return (
    <div className="bg-white min-w-[320px]">
      <Header />
      <Home />
      <Work />
      <Skill />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
