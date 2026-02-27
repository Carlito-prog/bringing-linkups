'use client'
import { Formik } from 'formik';
import {FaMapMarkerAlt} from "react-icons/fa";
import { HiPhone } from "react-icons/hi2";

export default function Contact(){

  return (
    <section className="flex items-center gap-10 md:gap-20 max-w-[1600px] h-screen mx-auto px-5 relative">
      <div className="bg-[url(/images/teamwork.png)] bg-no-repeat bg-contain bg-bottom absolute opacity-10 h-full w-full"></div>
      <div className="flex flex-col md:flex-row flex-1 justify-center items-center gap-20 md:gap-5 h-full relative z-1">
        <div className="w-full md:w-1/2">
          <h2 className={`uppercase text-lg md:text-2xl text-[#2d72ff] tracking-[.2rem]`}>Contact Us</h2>
          <h1 className="font-bold py-2 text-5xl md:text-8xl">Let&#39;s Link Up</h1>
          <p className="text-lg md:text-2xl font-thin">Have a question, idea, or want to partner with BLU? <br/> We’d love to hear from you.</p>
          <hr className="h-[1] bg-white border-0 my-4 w-[15%]"/>
          <div className="flex flex-col gap-5">
            <p className="flex items-center gap-5 md:text-xl"><FaMapMarkerAlt size={20} color="dcff00"/> 1405 Dewar Dr. #1190<br/>Rock Springs, Wyoming 82901 US</p>
            <p className="flex items-center gap-5 md:text-xl"><HiPhone size={20} color="dcff00"/>+1 (307) 336-3646</p>
          </div>
        </div>
        <div className="self-center w-full md:w-1/2">
          <Formik initialValues={{ fullName:'', email: '', phone: '', message: '' }}
            validate={values => { const errors = {};
              if (!values.email) {
                errors.email = 'Email is required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              if(!values.fullName){
                errors.fullName = 'Name is required'
              }

              if(!values.message){
                errors.message = 'Message is required'
              }

              return errors;
            }}
            onSubmit={ async (values) => {
              await fetch("https://blu-landing.azurewebsites.net/api/HttpSendSendgridEmail?code=bDvKG0xdME-0IM91LjIm3ATjYHijEH0M1GjDBdEjxTisAzFucPbuSw%3D%3D",{
                  "fullName":values.fullName,
                  "email": values.email,
                  "phone": values.phone,
                  "message": values.message
                })
              .catch(err => {
                console.log(err.message)
              })
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isSubmitting,
              isValidating
            }) => (
              <form className='flex flex-col gap-5 md:text-lg'>
                <input
                  type="text"
                  name="fullName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                  placeholder='full name *'
                  className='border-[1.5] rounded-xs border-white p-2 invalid:border-b-pink-600'
                />
                <span className='-mt-4 text-pink-600'>{errors.fullName && touched.fullName && errors.fullName}</span>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder='example@mail.com *'
                  className='border-[1.5] rounded-xs border-white p-2'
                />
                <span className='-mt-4 text-pink-600'>{errors.email && touched.email && errors.email}</span>
                <input
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  pattern="[0-9]*"
                  placeholder='phone number'
                  className='border-[1.5] rounded-xs border-white p-2'
                />
                <span className='-mt-4 text-pink-600'>{errors.phone && touched.phone && errors.phone}</span>
                <textarea
                  type="textarea"
                  name="message"
                  rows="5"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  placeholder='message *'
                  className='border-[1.5] rounded-xs border-white p-2'
                ></textarea>
                <span className='-mt-4 text-pink-600'>{errors.message && touched.message && errors.message}</span>
                <button type="submit" disabled={isSubmitting} className={`cursor-pointer py-1 px-2 rounded-xs w-[25%] ${isValidating === true?"bg-[#dcff00]":"border-[1.5] rounded-xs border-white"}`}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
}