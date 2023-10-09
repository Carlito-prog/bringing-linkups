import { TextComponent } from "../components/TextComponent";
import { ImageComponent } from "../components/ImageComponent";

export const Founders = () => {
  return (
    <section id="founders">
      <div className="col-section two-col">
        <TextComponent
          title={"Carl V Verrier"}
          text={
            "A cool story about our CEO, he once became an Uber driver for 3-months, with the sole purpose being; he want to meet strangers and ask them about their frustrations in the travel/tourism industry. Carl is a millennial, Haitian American from New York, and attended university both in Utah and Idaho. He for sure understands what its like to be in a lively city and a not so lively city. Not only that, but his age allows him to relate to those who this very app is intended to help, making it the perfect time for BLU. His love for the event space industry came from his prior dealings in the industry as a concert and party promoter at university. He has a passion for helping others and has a strong desire to help others find their tribe, because he remembers a day age when he rode bikes, played sports with his neighbors and made lifetime friends. This was shown by, the story shared above, he genuinely cares about the people. He is a strong believer in the power of community and the power of connection. In a world with social media, google, and text messaging he is offering a better solution to people connecting, a one stop shop for any outing."
          }
        />
        <ImageComponent
          url={
            "https://firebasestorage.googleapis.com/v0/b/bringing-link-ups.appspot.com/o/Me.jpeg?alt=media&token=822fc054-bd40-4d41-abc3-7554863a418c&_gl=1*1i1mq5n*_ga*MjA5MDUxODA4Ny4xNjk2Mjk5ODE1*_ga_CW55HF8NVT*MTY5Njg1NzYxMC4xMS4xLjE2OTY4NTg0MTIuNDkuMC4w"
          }
          alt={"CEO-PICTURE"}
        />
      </div>
    </section>
  );
};
