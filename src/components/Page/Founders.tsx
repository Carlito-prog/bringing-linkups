import foundersData from "../../data/founders.json"
import FounderSection from "../sharedComponents/founderSection";

export const Founders = () => {

  return (
    <section id="founders">
      <h2> Meet Our Founders</h2>
      <FounderSection lastIdx={foundersData.length - 1}>
        <FounderSection.ArrowLeft />
        <FounderSection.founderCard data={foundersData} />
        <FounderSection.ArrowRight />
      </FounderSection>
    </section>
  );
};
