import { TextComponent } from "../components/TextComponent";
import { ImageComponent } from "../components/ImageComponent";

export const Founders = () => {
  return (
    <section id="founders">
      <div className="col-section two-col">
        <TextComponent
          title={"Carl V Verrier"}
          text={
            "Our founder is a Haitian American from New York, went to university in Idaho and Utah. My love for the event space industry came from my prior dealings in the industry as a concert and party promoter. I have a versatile personality; outgoing when needed but introverted at heart, which has driven my understanding of the challenge in finding events and gatherings throughout my lifetime. "
          }
        />
        <ImageComponent url={"src/assets/images/Me.jpeg"} alt={"text"} />
      </div>
    </section>
  );
}