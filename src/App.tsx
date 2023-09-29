import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Nav from "./sharedComponents/nav";
import OurMission from "./Page/OurMission";
import ContactUs from "./Page/ContactUs";
import OurSolution from "./Page/OurSolution";
import TheDilemma from "./Page/TheDilemma";
import About from "./Page/Founders";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="#our-mission" element={<OurMission />} />
        <Route path="#dilemma" element={<TheDilemma />} />
        <Route path="#solution" element={<OurSolution />} />
        <Route path="#founders" element={<About />} />
        <Route path="#contact" element={<ContactUs />} />
      </Routes>
      <main id="wrapper">
        <OurMission />
        <TheDilemma />
        <OurSolution />
        <About />
        <ContactUs />
      </main>
    </>
  );
}

export default App;
