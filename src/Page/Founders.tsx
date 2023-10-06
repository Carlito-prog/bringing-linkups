import { TextComponent } from "../components/TextComponent";
import { ImageComponent } from "../components/ImageComponent";

export const Founders = () => {
  return (
    <section id="founders">
      <div className="col-section two-col">
        <TextComponent
          title={"Carl V Verrier"}
          text={
            "A cool story about our ceo; he once became an uber driver for 3months just for the purpose of knowing the new city he recently moved to, and most importantly the ability to meet strangers and ask them about their frustration in this industry. Our founder is a millennial, Haitian American from New York, and attended university both in Utah and Idaho. A young man that understands what its like to be in a lively city and a not so lively city. Not only that, but his age allows him to relate to those who this very app is intended to help. He understands the yearning to connect with others with the same interest as we all do. His love for the event space industry came from his prior dealings in the industry as a concert and party promoter in his college days in Utah. He truly has a versatile personality; outgoing when needed when no one in the room is having fun but introverted at heart, which has driven his understanding of the challenge in finding events and gatherings throughout his lifetime. He has a passion for helping others and has a strong desire to help others find their tribe, because he remembers a day age when he rode bikes with his neighbors and made lifetime friends. This was shown by, the story shared above, he genuinely cares about the customer. He is a strong believer in the power of community and the power of connection. In a world with social media, google, and text messaging he is offering a better solution to people connecting, A One Stop Shop where people can interact, invite, and control each outing."
          }
        />
        <ImageComponent url={"src/assets/images/Me.jpeg"} alt={"text"} />
      </div>
    </section>
  );
};
