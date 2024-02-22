import React from "react";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-700 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-700 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="">
        <input
          placeholder="Your message"
          name="message"
          className="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-700 bg-white border-0 rounded shadow"
        />
      </div>
      <button className="rounded-lg px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;