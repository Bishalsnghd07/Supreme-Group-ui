import React from "react";

const Contact = () => {
  return (
    <section
      className="bg-[#0067B1] text-white px-4 py-16"
      aria-labelledby="contact-heading"
    >
      {/* Left Side: Contact Info */}
      <div className="flex w-full p-2">
        <div className="flex justify-center w-full items-center md:px-40">
          <div className="w-full">
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Get in touch
            </h2>
            <div className="flex md:flex-row flex-col-reverse w-full">
              <div className="flex flex-col w-full">
                <p className="text-lg mt-8 md:mt-0 mb-2 md:mb-6 text-gray-200">
                  For general enquiries
                </p>

                <div className="space-y-4 text-base leading-relaxed">
                  <p>
                    <strong>Address :</strong>
                    <br />
                    110, 16th Road, Chembur, Mumbai – 400071
                  </p>
                  <p>
                    <strong>Phone :</strong>
                    <br />
                    +91 22 25208822
                  </p>
                  <p>
                    <strong>Email :</strong>
                    <br />
                    <a
                      href="mailto:info@supremegroup.co.in"
                      className="underline hover:text-white"
                    >
                      info@supremegroup.co.in
                    </a>
                  </p>
                </div>
              </div>

              {/* Right Side: Contact Form */}
              <div className="flex w-full">
                <form
                  className="space-y-6 w-full"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Form submitted (you can hook your API here)");
                  }}
                  aria-label="Contact form"
                >
                  <div className="flex flex-col w-full">
                    <div className="pb-4">
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="w-full mt-1 border-b-1 border-gray-50 bg-transparent text-white focus:outline-none focus:border-white placeholder:text-gray-200"
                        placeholder="Full name"
                      />
                    </div>

                    <div className="pb-4">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full mt-1 border-b-1 border-gray-50 bg-transparent text-white focus:outline-none focus:border-white placeholder:text-gray-200"
                        placeholder="E-mail"
                      />
                    </div>

                    <div className="pb-4">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full mt-1 border-b-1 border-gray-50 bg-transparent text-white focus:outline-none focus:border-white placeholder:text-gray-200"
                        placeholder="Subject"
                      />
                    </div>

                    <div>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full mt-1 border-b-1 border-gray-50 bg-transparent text-white focus:outline-none focus:border-white placeholder:text-gray-200 resize-none"
                        placeholder="Message"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#0067B1] text-white px-6 py-2 rounded-full hover:bg-[#007cb1] transition-all font-semibold border border-white cursor-pointer w-full md:w-[8rem]"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
