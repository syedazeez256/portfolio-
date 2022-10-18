import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-auto bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full">
        <div className="mt-20">
          <p className="text-4xl border-b-4 font-bold border-gray-500 inline">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <form
            action="https://getform.io/f/a892da6c-9195-4b9f-9ffc-b6c820136d78"
            method="POST"
            className="flex flex-col justify-center w-2/3"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Type Something."
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-4 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
