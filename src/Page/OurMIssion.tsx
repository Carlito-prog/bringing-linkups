import { TextComponent } from "../components/TextComponent";
import { ImageComponent } from "../components/ImageComponent";

function OurMission() {
  return (
    <section id="our-mission" className="darkBG">
      <div className="col-section two-col">
        <TextComponent
          title={"Our Mission"}
          text={
            "We are a social networking platform that unites individuals based on proximity to events!"
          }
        />
        <ImageComponent url={"src/assets/images/blu-logo.png"} alt={"text"} />
      </div>
    </section>
  );
}

export default OurMission;
