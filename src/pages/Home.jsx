import React from "react";
import Hero from "../components/Hero";
import EventDetails from "../components/EventDetails";
import Themes from "../components/Themes";
import Sponsors from "../components/Sponsors";

const Home = () => {
  return (
    <main>
      <Hero />
          <EventDetails />
          <Sponsors></Sponsors>
      <Themes />
    </main>
  );
};

export default Home;
