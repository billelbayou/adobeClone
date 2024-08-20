import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <React.StrictMode>
      <Header />
      <Main />
      <Section />
      <Footer />
    </React.StrictMode>
  )
}