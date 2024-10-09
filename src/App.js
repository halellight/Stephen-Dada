import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import RevealLinks from "./components/RevealLinks";
import About from "./components/nn/About";
import AboutSection from "./components/AboutSection";
import Stack from "./components/Stack";
import Page from "./components/nn/Page";
import Curve from "./components/Curve";
import Pan from "./components/Pan";
import Footer from "./components/Footer";
import MinimalistPage from "./components/MinimalistPage";
import Tools from "./components/Tools";
import Random from "./components/Random";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">{isLoading && <Loading />}</AnimatePresence>
      {!isLoading && (
        <>
          <Navbar />
          <Curve />
          <Main />
          <AboutSection />
          <Random />
          <Pan />
          {/* <Stack />
          <Page />
          <About />
          <Footer /> */}
          <Tools />
          <MinimalistPage />
        </>
      )}
    </div>
  );
}

export default App;
