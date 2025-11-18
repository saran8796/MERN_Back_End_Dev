import React from "react";
import Banner from "../componets/Banner";
import TopWorkers from "../componets/TopWorkers";
import OurPartners from "../componets/OurPartners";
import OurServices from "../componets/OurServices";

const LandingPage = () => {
  return (
    <>
      <Banner />
      <OurPartners />
      <OurServices />
      <TopWorkers />
    </>
  );
};

export default LandingPage;
