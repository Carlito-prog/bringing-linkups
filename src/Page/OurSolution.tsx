import solutions from "../../src/data/solutions.json";
import { ThreeColumns } from "../components/threeColumns";

export const OurSolution = () => {
  return (
    <section id="solution">
      <div className="vidContainer darkBG">
        <ThreeColumns componentTitle="Our Solution" columnData={solutions} />
        <video
          src="https://firebasestorage.googleapis.com/v0/b/litos-portfolio.appspot.com/o/Loom%20Message%20-%2011%20April%202023.mp4?alt=media&token=1874c461-4586-4ee6-b448-4653fb7fdf61"
          className="solutionVideo"
          controls
          loop
        />
      </div>
    </section>
  );
};
