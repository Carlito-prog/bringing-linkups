import "./App.scss";
import { ImageComponent } from "./components/ImageComponent";
import { TextComponent } from "./components/TextComponent";
function App() {
  return (
    <>
      <main id="wrapper">
        <section id="about">
          <div className="content">
            <TextComponent
              title={"Our Mission"}
              text={
                "Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui."
              }
            />
            <ImageComponent
              url={"https://placeholder.com/300x300"}
              alt={"text"}
            />
          </div>
        </section>
        <section id="about">
          <div className="content">
            <ImageComponent
              url={"https://placeholder.com/300x300"}
              alt={"text"}
            />
            <TextComponent
              title={"The Dilemma"}
              text={
                "Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui."
              }
            />
          </div>
        </section>
        <section id="our-mission">
          <div className="content">
            <TextComponent
              title={"Our Solution"}
              text={
                "Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui."
              }
            />
            <ImageComponent
              url={"https://placeholder.com/300x300"}
              alt={"text"}
            />
          </div>
        </section>
        <section id="contact">
          <div className="content">
            <ImageComponent
              url={"https://placeholder.com/300x300"}
              alt={"text"}
            />
            <TextComponent
              title={"Contact Us"}
              text={
                "Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui."
              }
            />
          </div>
        </section>
      </main>
      <footer>This is a footer</footer>
    </>
  );
}

export default App;
