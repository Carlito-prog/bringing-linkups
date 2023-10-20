import { Formik } from "formik";
import { ContactFormSchema } from "../utils/contactformvalidation";
import {
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { Link } from "react-router-dom";
import AWS from "aws-sdk";
const define = import.meta.env;

const awsAccessKey = define.VITE_AWS_ACCESS_KEY_ID;
const awsSecretKey = define.VITE_AWS_SECRET_ACCESS_KEY;
const awsBucketName = define.VITE_AWS_BUCKET_NAME;
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
      <div className="col-section two-col mobile-split">
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
              <Link
                className="link"
                to="https://www.instagram.com/calitos_apps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialInstagram size={30} />
              </Link>
              <Link
                className="link"
                to="https://www.linkedin.com/in/carl-verrier-121a0610b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialLinkedin size={30} />
              </Link>
              <Link
                className="link"
                to="https://twitter.com/vcarl123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialTwitter size={30} />
              </Link>
            </div>
          </div>
        </div>
        <div className="contact-inner">
          <Formik
            initialValues={initialValues}
            validationSchema={ContactFormSchema}
            onSubmit={async (values, { resetForm }) => {
              console.log(values);

              const s3 = new AWS.S3({
                region: "us-east-1",
                credentials: new AWS.Credentials(
                  awsAccessKey as string,
                  awsSecretKey as string
                ), // Ideally use IAM roles and not hard-coded credentials
              });

              const params = {
                Bucket: awsBucketName as string,
                Key: `${values.email}.json`,
                Body: JSON.stringify(values),
              };

              try {
                await s3.putObject(params).promise();
                console.log("Data uploaded successfully");
                alert("Data uploaded successfully");
              } catch (error) {
                console.error("Error uploading data:", error);
                alert("Error uploading data try again later");
              }

              resetForm({
                values: {
                  fullName: "",
                  email: "",
                  phone: "",
                  reason: "",
                },
              });
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
