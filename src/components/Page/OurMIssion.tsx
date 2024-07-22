import { TextComponent } from "../sharedComponents/TextComponent";
import { ImageComponent } from "../sharedComponents/ImageComponent";
import { Form, Formik } from "formik";
import CustomInput from "../sharedComponents/customInput";
import { emailValidationSchema } from "../../utils/contactformvalidation";
import { useSend } from "../../utils/sendInfoHook";

interface FormValues {
  email: string;
}

export const OurMission = () => {
  const initialValues: FormValues = {
    email: '',
  };
  const { sendEmail } = useSend()

  const handleSubmit = (values: FormValues) => {

    if (values.email) {
      const email = {
        email: values.email,
        phone: "early form - No Contact",
        reason: "early form - No Contact",
        fullName: "early form - No Contact"
      }

      sendEmail(email).then(() => {
        localStorage.setItem('sentContact', "true");
      }).catch(() => {
        alert("An error occurred")
      })
    } else {
      alert("must enter an email")
    }
  };

  return (
    <section id="our-mission" className="darkBG">
      <div className="col-section two-col mobile-split">
        <ImageComponent
          url={
            "https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/Bringing-Link-Ups-logo.png?alt=media&token=f56dbbbc-eb7d-40d6-8da3-3ff2f21d0821"
          }
          alt={"bringing-link-ups-logo"}
        />
        <TextComponent
          title={"Our Mission"}
          text={
            "Bringing People Together Based On Interest In Proximity To Events They Love!"
          }
        />
        <div className="contactEarly">
          <h5>Join our wait list for special perks, and early access to BLU!</h5>
          <Formik
            initialValues={initialValues}
            validationSchema={emailValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <CustomInput
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  outerDiv="input-outer"
                  inputClassName="input-early"
                />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};
