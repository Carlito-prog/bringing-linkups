import { TextComponent } from "../components/TextComponent";
import { ImageComponent } from "../components/ImageComponent";

function OurMission() {
  const handleClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
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
        <div className="contactEarly">
          <h5>Want To Join Our Efforts?</h5>
          <button onClick={handleClick}>Join Us</button>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
