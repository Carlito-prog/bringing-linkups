import { TextComponent } from "../components/TextComponent";
import { ImageComponent } from "../components/ImageComponent";

function TheDilemma() {
  return (
    <section id="dilemma">
      <div className="content">
        <ImageComponent url={"https://placeholder.com/300x300"} alt={"text"} />
        <TextComponent
          title={"Dilema"}
          text={
            "Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui."
          }
        />
      </div>
    </section>
  );
}

export default TheDilemma;
