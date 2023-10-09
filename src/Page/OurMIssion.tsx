import { TextComponent } from "../components/TextComponent";
import { ImageComponent } from "../components/ImageComponent";

export const OurMission = () => {
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
        <ImageComponent
          url={
            "https://firebasestorage.googleapis.com/v0/b/bringing-link-ups.appspot.com/o/blu-logo.png?alt=media&token=98ff515c-a1a3-4721-9e6e-6006b11b7524&_gl=1*ebc3mr*_ga*MjA5MDUxODA4Ny4xNjk2Mjk5ODE1*_ga_CW55HF8NVT*MTY5Njg1NzYxMC4xMS4xLjE2OTY4NTg2NTkuNi4wLjA."
          }
          alt={"text"}
        />
        <div className="contactEarly">
          <h5>Want To Give Us Your Take On BLU?</h5>
          <button onClick={handleClick}>Lets Talk</button>
        </div>
      </div>
    </section>
  );
};
