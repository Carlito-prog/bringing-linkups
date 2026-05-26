'use client'

import { useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { HiPhone } from 'react-icons/hi2'

export default function Contact() {
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (form) => {
    const newErrors = {}

    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()

    if (!name) {
      newErrors.name = 'Name is required'
    }

    if (!email) {
      newErrors.email = 'Email is required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = 'Invalid email address'
    }

    if (!message) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleBlur = (e) => {
    validateForm(e.target.form)
  }

  const handleChange = (e) => {
    if (success) {
      setSuccess(false)
    }

    const form = e.target.form

    validateForm(form)
  }

  const handlePhoneChange = (e) => {
    if (success) {
      setSuccess(false)
    }

    // Remove anything that isn't a number
    e.target.value = e.target.value.replace(/\D/g, '')

    validateForm(e.target.form)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target

    if (!validateForm(form)) return

    setIsSubmitting(true)

    try {
      const formData = new FormData(form)

      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      )

      const result = await response.json()

      if (result.success) {
        setSuccess(true)
        setErrors({})
        form.reset()
      }
    } catch (error) {
      console.error('Submission failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="flex items-center gap-10 md:gap-20 max-w-[1600px] h-screen mx-auto px-5 relative">
      <div className="bg-[url(/images/teamwork.png)] bg-no-repeat bg-contain bg-bottom absolute opacity-10 h-full w-full"></div>

      <div className="flex flex-col md:flex-row flex-1 justify-center items-center gap-20 md:gap-5 h-full relative z-1">
        <div className="w-full md:w-1/2">
          <h2 className="uppercase text-lg md:text-2xl text-[#2d72ff] tracking-[.2rem]">
            Contact Us
          </h2>

          <h1 className="font-bold py-2 text-5xl md:text-8xl">
            Let&#39;s Link Up
          </h1>

          <p className="text-lg md:text-2xl font-thin">
            Have a question, idea, or want to partner with BLU?
            <br />
            We’d love to hear from you.
          </p>

          <hr className="h-[1px] bg-white border-0 my-4 w-[15%]" />

          <div className="flex flex-col gap-5">
            <p className="flex items-center gap-5 md:text-xl">
              <FaMapMarkerAlt size={20} color="#dcff00" />
              1405 Dewar Dr. #1190
              <br />
              Rock Springs, Wyoming 82901 US
            </p>

            <p className="flex items-center gap-5 md:text-xl">
              <HiPhone size={20} color="#dcff00" />
              +1 (307) 336-3646
            </p>
          </div>
        </div>

        <div className="self-center w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:text-lg"
          >
            <input
              type="hidden"
              name="access_key"
              value="80675b06-c147-4061-a0c2-b28e87b2b782"
            />

            <input
              type="hidden"
              name="subject"
              value="New Contact Form Submission"
            />

            <input
              type="text"
              name="name"
              placeholder="full name *"
              className="border-[1.5px] rounded-xs border-white p-2"
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <span className="text-pink-600 -mt-2 min-h-[20px]">
              {errors.name}
            </span>

            <input
              type="email"
              name="email"
              placeholder="example@mail.com *"
              className="border-[1.5px] rounded-xs border-white p-2"
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <span className="text-pink-600 -mt-2 min-h-[20px]">
              {errors.email}
            </span>

            <input
              type="tel"
              name="phone"
              placeholder="phone number"
              className="border-[1.5px] rounded-xs border-white p-2"
              onChange={handlePhoneChange}
            />

            <textarea
              name="message"
              rows="5"
              placeholder="message *"
              className="border-[1.5px] rounded-xs border-white mt-4 p-2"
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <span className="text-pink-600 -mt-4 min-h-[20px]">
              {errors.message}
            </span>

            {success && (
              <p className="text-green-500 font-medium">
                Thanks! Your message has been sent successfully.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer py-1 px-2 rounded-xs w-[25%] bg-[#dcff00] text-black hover:font-semibold disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}