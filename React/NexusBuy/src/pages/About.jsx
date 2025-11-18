import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import OurValues from "../components/about/OurValues";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Milestones from "../components/about/Milestones";
import BrandPromise from "../components/about/BrandPromis";

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <OurStory />
      <OurValues />
      <WhyChooseUs />
      <Milestones />
      <BrandPromise />
    </div>
  );
};

export default About;
