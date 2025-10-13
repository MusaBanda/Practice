'use client';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import { useState, useEffect } from "react";
import Contact from "./components/contact";
import Work from "./components/work";
import About from "./components/about";




export default function Home() {

  return (
    <>
    <Navbar />
    <Header />
    <About/>
    <Services />
    <Work/>
    <Contact/>
    <Footer />
    </>
  );
}

