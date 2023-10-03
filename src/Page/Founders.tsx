import { TextComponent } from "../components/TextComponent";
import { ImageComponent } from "../components/ImageComponent";

function About() {
  return (
    <section id="founders">
      <div className="col-section two-col">
        <TextComponent
          title={"Carl V Verrier"}
          text={
            "Our founder is a millennial, Haitian American from New York, and went to university in Utah and Idaho. A young man that understands what its like to be in a lively city and a not so lively city. So he understands the yearning to connect with others with the same interest as we all do. His love for the event space industry came from his prior dealings in the industry as a concert and party promoter in his college days in Utah.He truly has a versatile personality; outgoing when needed when no one is having fun but introverted at heart, which has driven his understanding of the challenge in finding events and gatherings throughout his lifetime. He has a passion for helping others and has a strong desire to help others find their tribe. He is a strong believer in the power of community and the power of connection. In a world with social media, google, and text messaging he is offering a One Stop Shop where people can interact, invite, and control each outing."
          }
        />
        <ImageComponent url={"src/assets/images/Me.jpeg"} alt={"text"} />
      </div>
    </section>
  );
}

export default About;
