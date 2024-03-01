import solutions from "../../src/data/solutions.json";
import { ThreeColumns } from "../components/threeColumns";

export const OurSolution = () => {
  return (
    <section id="solution" className="col-section">
      <ThreeColumns componentTitle="Our Solution" columnData={solutions} />
    </section>
  );
};
