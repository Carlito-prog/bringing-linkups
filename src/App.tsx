import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Nav } from "./sharedComponents/nav";
import { ContactUs } from "./Page/ContactUs";
import { OurSolution } from "./Page/OurSolution";
import { TheDilemma } from "./Page/TheDilemma";
import { Founders } from "./Page/Founders";
import { OurMission } from "./Page/OurMIssion";
import { OurGoals } from "./Page/OurGoals";

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
        <Route path="#contact" element={<ContactUs />} />
      </Routes>
      <main id="wrapper">
        <OurMission />
        <TheDilemma />
        <OurSolution />
        <OurGoals />
        <Founders />
        <ContactUs />
      </main>
      <p className="copyrights-text">
        ©{currentYear} Bringing Link Ups LLC. All Rights Reserved.
      </p>
    </>
  );
}

export default App;
