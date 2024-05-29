import solutions from "../../data/solutions.json";
import { ThreeColumns } from "../../data/threeColumns";

export const OurSolution = () => {
  return (
    <section id="solution" className="darkBG">
      <div className="col-section">
        <ThreeColumns componentTitle="Our Solution" columnData={solutions} />
      </div>
    </section>
  );
};
