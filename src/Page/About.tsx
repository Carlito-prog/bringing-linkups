import React from "react";
import { TextComponent } from "../components/TextComponent";
import { ImageComponent } from "../components/ImageComponent";

function About() {
  return (
    <section id="founders">
      <div className="content">
        <TextComponent
          title={"Our Founder"}
          text={
            "Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui."
          }
        />
        <ImageComponent url={"https://placeholder.com/300x300"} alt={"text"} />
      </div>
    </section>
  );
}

export default About;
