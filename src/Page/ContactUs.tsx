import { Formik } from "formik";
import { ContactFormSchema } from "../utils/contactformvalidation";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
// import { sendData } from "../utils/firebase/firebase";

export type formTypes = {
  fullName: string;
  email: string;
  phone: string;
  reason: string;
};

export const ContactUs = () => {
  const initialValues: formTypes = {
    fullName: "",
    email: "",
    phone: "",
    reason: "",
  };
  return (
    <section id="contact" className="darkBG">
      <div className="col-section two-col">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>
            407 E Ayre St
            <br />
            Wilmington, DE 19804
          </p>

          <div className="social">
            <h4>Follow us</h4>
            <div className="social-inner">
              <TiSocialFacebook size={30} />
              <TiSocialInstagram size={30} />
              <TiSocialLinkedin size={30} />
              <TiSocialTwitter size={30} />
            </div>
          </div>
        </div>
        <div className="contact-inner">
          <Formik
            initialValues={initialValues}
            validationSchema={ContactFormSchema}
            onSubmit={async (values, { resetForm }) => {
              console.log(values);
              resetForm({
                values: {
                  fullName: "",
                  email: "",
                  phone: "",
                  reason: "",
                },
              });
              // await sendData(values).then(() => {
              //   resetForm({
              //     values: {
              //       fullName: "",
              //       email: "",
              //       phone: "",
              //       reason: "",
              //     },
              //   });
              // });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              dirty,
              isValid,
              /* and other goodies */
            }) => (
              <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                  <input
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullName}
                  />
                  {errors.fullName && touched.fullName ? (
                    <span className="error">{errors.fullName}</span>
                  ) : null}
                </div>
                <div>
                  <input
                    id="email"
                    name="email"
                    placeholder="example@mail.com"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <span className="error">{errors.email}</span>
                  ) : null}
                </div>
                <div>
                  <input
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  {errors.phone && touched.phone ? (
                    <span className="error">{errors.phone}</span>
                  ) : null}
                </div>
                <div>
                  <textarea
                    cols={40}
                    rows={8}
                    id="reason"
                    name="reason"
                    placeholder="Reason for inquiry..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.reason}
                  />
                  {errors.reason && touched.reason ? (
                    <span className="error">{errors.reason}</span>
                  ) : null}
                </div>
                <button
                  type="submit"
                  disabled={!dirty && isValid && isSubmitting}
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};
