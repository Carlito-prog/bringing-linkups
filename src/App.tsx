import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Nav from "./sharedComponents/nav";
import { ContactUs } from "./Page/ContactUs";
import { OurSolution } from "./Page/OurSolution";
import { TheDilemma } from "./Page/TheDilemma";
import { Founders } from "./Page/Founders";
import { OurMission } from "./Page/OurMIssion";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="#our-mission" element={<OurMission />} />
        <Route path="#dilemma" element={<TheDilemma />} />
        <Route path="#solution" element={<OurSolution />} />
        <Route path="#founders" element={<Founders />} />
        <Route path="#contact" element={<ContactUs />} />
      </Routes>
      <main id="wrapper">
        <OurMission />
        <TheDilemma />
        <OurSolution />
        <Founders />
        <ContactUs />
      </main>
    </>
  );
}

export default App;
