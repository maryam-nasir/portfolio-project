import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import AboutMe from "@/components/AboutMe";
import Awards from "@/components/Awards";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between">
      <ToastContainer
        draggable={false}
        hideProgressBar
        closeOnClick
        autoClose={4000}
        position="bottom-right"
      />
      <Header />
      <main>
        <AboutMe />
        <WorkExperience />
        <Skills />
        <Projects />
        <Awards />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}
