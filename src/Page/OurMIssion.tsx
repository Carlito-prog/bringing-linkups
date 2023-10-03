import { TextComponent } from "../components/TextComponent";
import { ImageComponent } from "../components/ImageComponent";

function OurMission() {
  return (
    <section id="our-mission" className="darkBG">
      <div className="col-section two-col">
        <TextComponent
          title={"Our Mission"}
          text={
            "Bringing People Together Based On Proximity & Interest To Events They Love!"
          }
        />
        <ImageComponent url={"src/assets/images/blu-logo.png"} alt={"text"} />
      </div>
    </section>
  );
}

export default OurMission;
