import { ThreeColumns } from "../components/threeColumns";
import data from "../../src/data/dilemma.json";

import React from "react";

export const TheDilemma = () => {
  return (
    <section id="dilemma" className="col-section">
      <ThreeColumns componentTitle="The Dilemma" columnData={data} />
    </section>
  );
}