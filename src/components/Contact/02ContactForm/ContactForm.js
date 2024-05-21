"use client";

const ContactForm = () => {
  return (
    // <div className="">
      <div className="w-full sm:mb-0 mb-10 sm:w-[500px] bg-white shadow-xl rounded px-4 sm:px-8 pt-6 pb-8 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-gray-100">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow-sm appearance-none rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-600 text-sm font-bold mb-2"
            >
              Phone:
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              className="shadow-sm appearance-none rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-600 text-sm font-bold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="shadow-sm appearance-none rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none bg-white"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#d17a29] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    // </div>
  );
};

export default ContactForm;
