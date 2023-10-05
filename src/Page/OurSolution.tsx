import solutions from "../../src/data/solutions.json";
import { ThreeColumns } from "../components/threeColumns";

export const OurSolution = () => {
  return (
    <section id="solution" className="darkBG">
      <div className="vidContainer col-section">
        <ThreeColumns componentTitle="Our Solution" columnData={solutions} />
      </div>
    </section>
  );
};
