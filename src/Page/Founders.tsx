import { TextComponent } from "../components/TextComponent";
import { ImageComponent } from "../components/ImageComponent";

export const Founders = () => {
  return (
    <section id="founders">
      <div className="col-section two-col">
        <TextComponent
          title={"Discover our founder's captivating journey: Carl Verrier"}
          text={
            "A cool story about our founder, he once became an Uber driver for 3-months, with the sole purpose being; he wanted to meet potential users and ask them about their frustrations in the travel/tourism industry. Carl is a millennial, from NY and attended university both in Utah and Idaho. Carl's firsthand experiences in lively and quiet cities uniquely align with BLU's mission, making now the perfect time for our app. Not only that, if it wasn't for the fortune of playing sports and going to church led activities, which all sparked real relationships, by first common interest and finding community in his community. This experience allowed him to leave the neighborhood and attend university; which allowed him to broaden his perspective. He has a passion for multiply peoples relationships and has a strong desire to help others find their tribe, because he remembers how lucky he was to find his. He genuinely cares about humanities issue to connect and maintain relationships in a world with all the apps in the world claiming to be built to do so."
          }
        />
        <ImageComponent
          url={
            "https://firebasestorage.googleapis.com/v0/b/bringing-link-ups.appspot.com/o/Me.jpeg?alt=media&token=822fc054-bd40-4d41-abc3-7554863a418c&_gl=1*1i1mq5n*_ga*MjA5MDUxODA4Ny4xNjk2Mjk5ODE1*_ga_CW55HF8NVT*MTY5Njg1NzYxMC4xMS4xLjE2OTY4NTg0MTIuNDkuMC4w"
          }
          alt={"Founder-Picture"}
          styles={{ borderRadius: 15 }}
        />
      </div>
    </section>
  );
};
