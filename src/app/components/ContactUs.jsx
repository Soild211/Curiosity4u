"use client"
import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Add your form submission logic here
  }

  return (
    <div className="min-h-fit bg-gradient-to-b from-black to-red-950">
      {/* Navigation */}
      

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 ">
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Connect with us
            <br />
            {/* just say hello. */}
          </h1>
          <p className="max-w-md mx-auto">
            Thank you for your interest in our services. Please fill out the form below or e-mail us at{" "}
            <span className="underline">support@curiosity4u.in</span>
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-red-950 to-black rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Contact Info */}
            <div className="w-full md:w-1/3 p-8 flex flex-col justify-center items-start">
                <div className="space-y-6 text-white">
                  <div className="flex items-center">
                    <MapPin className="text-teal-500 mr-3" size={20} />
                    <div>
                      <p>Wakad, Pune</p>
                      <p>Maharashtra, India</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-teal-500 mr-3" size={20} />
                    <p>+91-123-4456-7890</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-teal-500 mr-3" size={20} />
                    <p>support@curiosity4u.in</p>
                  </div>
                </div>
              </div>

            {/* Right Side - Form */}
            <div className="w-full md:w-2/3 p-8">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center border-b border-gray-300 py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        className="w-full outline-none placeholder:text-white "
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center border-b border-gray-300 py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone *"
                        className="w-full outline-none placeholder:text-white"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center border-b border-gray-300 py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        className=" w-full outline-none placeholder:text-white"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start border-b border-gray-300 py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 mr-3 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                      <textarea
                        name="message"
                        placeholder="Message"
                        className="w-full outline-none resize-none placeholder:text-white "
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-800 text-white py-3 rounded-3xl hover:bg-green-600 transition duration-300"
                  >
                    SUBMIT
                  </button>
                  <p className="text-xs text-white text-center mt-4">
                    We will not sell, share, or rent customer information. Your privacy is very important to
                    us.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

