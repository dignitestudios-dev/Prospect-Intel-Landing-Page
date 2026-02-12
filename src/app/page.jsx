import React from "react";
import Navbar from "../components/landing-page/navbar";
import Hero from "../components/landing-page/hero";
import Features from "@/components/landing-page/features";
import Team from "@/components/landing-page/team";
import Contact from "@/components/landing-page/contact";
import Footer from "@/components/landing-page/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
