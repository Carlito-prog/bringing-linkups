import { Formik } from 'formik'
import { ContactFormSchema } from './contactformvalidation';

export type formTypes = {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  reason: string,
}

export const ContactUs = () => {
  const initialValues: formTypes = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
  }
  return (
    <section id="contact" className="darkBG">
      <div className="col-section">
        <div>
          <h3>Contact Us</h3>
          <Formik
            initialValues={initialValues}
            validationSchema = {
              ContactFormSchema
            }
            onSubmit={(values) => {
              console.log(values)
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
        dirty
        /* and other goodies */
        }) => (
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input 
                id="firstName"
                name="firstName"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              {errors.firstName && touched.firstName ? <p className="error">{errors.firstName}</p> : null}
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input 
                id="lastName"
                name="lastName"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                />
              {errors.lastName && touched.lastName ? <p className="error">{errors.lastName}</p> : null}
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? <p className="error">{errors.email}</p> : null}
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              {errors.phone && touched.phone ? <p className="error">{errors.phone}</p> : null}
            </div>
            <div>
              <label htmlFor="reason">Reason for inquiry</label>
              <textarea
                cols={40}
                rows={8}
                id="reason"
                name="reason"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.reason}
              />
              {errors.reason && touched.reason ? <p className="error">{errors.reason}</p> : null}
            </div>
            <button type="submit" disabled={isSubmitting&&dirty}>Submit</button>
          </form>
          )}
          </Formik>
        </div>
      </div>
    </section>
  );
}