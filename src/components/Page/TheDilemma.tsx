import { ThreeColumns } from "../../data/threeColumns";
import data from "../../data/dilemma.json";

export const TheDilemma = () => {
  return (
    <section id="dilemma" className="col-section">
      <ThreeColumns componentTitle="The Dilemma" columnData={data} />
    </section>
  );
};
