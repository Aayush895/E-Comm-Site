import React from "react";
import emailjs from "@emailjs/browser";
import { useAuth0 } from "@auth0/auth0-react";

const ContactUs = () => {
  // Here we don't need to create states for different input fields is because the onSubmit that is 
  // typically caught by the form's submit handler is just bubbling up the DOM, the event object that
  // we are using in handleSubmit for form, it's key 'event.target' actual value is the element changed
  // inside the form which is the input field mentioned inside. 

  const {isAuthenticated, user} = useAuth0();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_skkgdh9",
        "template_afvhp6k",
        e.target,
        "-XBWOm42NQuUrG9-y"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    e.target.reset();
  };

  return (
    <div className="my-16">
      <h2 className="text-2xl text-center">Feel Free To Contact Us</h2>

      <iframe
        title="Shop-Location"
        className="mt-12"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.6061175265!2d73.11138952609413!3d18.992995018382132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e841e7f7f037%3A0x5a177be8030c495a!2sOrion%20Mall%2C%20Forest%20Colony%2C%20Panvel%2C%20Navi%20Mumbai%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1676653420554!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <form
        className="w-full max-w-sm mt-28 my-0 mx-auto mb-28"
        onSubmit={handleSubmit}
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-[45rem]">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="Name"
              value={isAuthenticated ? user.name : ""}
              name="name"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-[45rem]">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="subject"
              placeholder="Subject"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-[45rem]">
            <textarea
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="message"
              cols="30"
              rows="10"
              name="message"
              placeholder="Message"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-[45rem]">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="email"
              name="email"
              value={isAuthenticated ? user.email : ""}
              placeholder="Email"
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-2/3 my-0 mx-auto text-center">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
