import SVGColumns from "../components/threeColumns";
import data from "../../src/data/dilemma.json";

function TheDilemma() {
  return (
    <section id="dilemma">
      <SVGColumns componentTitle="The Dilemma" columnData={data} />
    </section>
  );
}

export default TheDilemma;
