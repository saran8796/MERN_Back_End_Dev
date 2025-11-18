import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="slider">
        <Card
          title={"Card 1"}
          description={"This is the description of the first card"}
        />
        <Card
          title={"Card 2"}
          description={
            "This is the description of the second card Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non excepturi voluptas perferendis, veniam, sed deserunt nobis adipisci iusto esse incidunt eligendi vero explicabo ipsum, animi quod! Sapiente, quisquam sed?"
          }
        />
        <Card
          title={"Card 3"}
          description={"This is the description of the third card"}
        />
        <Card
          title={"Card 4"}
          description={
            "This is the description of the fourth card Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non excepturi voluptas perferendis, veniam, sed deserunt nobis adipisci iusto esse incidunt eligendi vero explicabo ipsum, animi quod! Sapiente, quisquam sed?"
          }
        />
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
