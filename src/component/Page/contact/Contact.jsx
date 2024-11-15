import React from "react";
import LogoB from "../../../assets/title-icon.png";

const Company = `Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. 
Nunc nec maximus dui, vel suscipit dolor. Donec elementum velit a orci facilisis rutrum.`;

const Description = "Get in touch, send an e-mail or call us";

function Contact() {
  return (
    <div className="px-6 md:px-20 lg:px-44 space-y-20">
      <div className="text-left mb-8 space-y-8 md:space-y-14">
        <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4">Contact</h1>
        <h2 className="text-lg md:text-xl font-semibold text-gray-600">
          Get In Touch with Us
        </h2>
        <hr className="w-24 md:w-52 border-t-2 border-gray-300" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <form>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-5 text-lg">
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 border-b-2 text-base border-gray-200 text-gray-500 outline-none bg-transparent p-3"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 border-b-2 text-base border-gray-200 text-gray-500 outline-none bg-transparent p-3"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject *"
                className="border-b-2 border-gray-200 text-base text-gray-500 outline-none bg-transparent p-3"
                required
              />
              <textarea
                placeholder="Message"
                className="border-b-2 border-purple-400 text-base text-gray-500 outline-none bg-transparent p-3 h-32 resize-none"
                required
              />
              <button
                type="submit"
                className="self-start py-3 px-3 text-base font-semibold rounded-full w-24 md:w-36 border-4 border-blue-200 text-white hover:bg-gradient-to-r hover:from-sky-500 hover:to-purple-500 bg-gradient-to-r from-sky-400 to-purple-400 transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="md:-mt-28 mb-10">
          <div className="text-black p-6 md:p-10 space-y-3 md:space-y-5">
            <img src={LogoB} className="animate-pulse w-14 mb-4" alt="Logo" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold py-4">
              {Description}
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-semibold">
              {Company}
            </p>
            <h1 className="font-semibold text-blue-300">Call Now</h1>
            <p className="text-xl md:text-2xl font-semibold">+91 87675465789</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
