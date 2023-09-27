import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./sharedComponents/nav";
import OurMIssion from "./Page/OurMIssion";
import ContactUs from "./Page/ContactUs";
import OurSolution from "./Page/OurSolution";
import TheDilemma from "./Page/TheDilemma";

function App() {
  return (
    <section id="/">
      <Nav />
      <Routes>
        <Route path="#our-mission" element={<OurMIssion />} />
        <Route path="#dilemma" element={<TheDilemma />} />
        <Route path="#solution" element={<OurSolution />} />
        <Route path="#contact" element={<ContactUs />} />
      </Routes>
      <section id="our-mission">
        <OurMIssion />
      </section>
      <section id="dilemma">
        <TheDilemma />
      </section>
      <section id="solution">
        <OurSolution />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </section>
  );
}

export default App;
