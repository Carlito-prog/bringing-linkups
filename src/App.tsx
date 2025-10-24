import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Nav } from "./components/sharedComponents/nav";
import { ContactUs } from "./components/Page/ContactUs";
import { OurSolution } from "./components/Page/OurSolution";
import { TheDilemma } from "./components/Page/TheDilemma";
import { Founders } from "./components/Page/Founders";
import { OurMission } from "./components/Page/OurMIssion";
import { OurGoals } from "./components/Page/OurGoals";
import { Comparison } from "./components/Page/Comparison";

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Nav />
      <Routes>
        <Route path="#our-mission" element={<OurMission />} />
        <Route path="#dilemma" element={<TheDilemma />} />
        <Route path="#solution" element={<OurSolution />} />
        <Route path="#ourGoals" element={<OurGoals />} />
        <Route path="#founders" element={<Founders />} />
        <Route path="#comparisons" element={<Comparison />} />
        <Route path="#contact" element={<ContactUs />} />
      </Routes>
      <main id="wrapper">
        <OurMission />
        <TheDilemma />
        <OurSolution />
        <OurGoals />
        <Founders />
        <Comparison />
        <ContactUs />
      </main>
      <p className="copyrights-text">
        ©2024 - {currentYear} Bringing Link Ups LLC. All Rights Reserved.
      </p>
    </>
  );
}

export default App;
