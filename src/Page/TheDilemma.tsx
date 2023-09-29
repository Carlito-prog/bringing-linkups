import SVGColumns from "../components/threeColumns";
import data from "../../src/data/dilemma.json";

function TheDilemma() {
  return (
    <section id="dilemma" className="col-section">
      <SVGColumns componentTitle="The Dilemma" columnData={data} />
    </section>
  );
}

export default TheDilemma;
