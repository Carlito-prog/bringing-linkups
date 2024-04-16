import solutions from "../../data/solutions.json";
import { ThreeColumns } from "../sharedComponents/threeColumns";

export const OurSolution = () => {
  return (
    <section id="solution" className="col-section">
      <ThreeColumns componentTitle="Our Solution" columnData={solutions} />
    </section>
  );
};
