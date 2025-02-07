import React from 'react';

const ContactUs = () => {
  return (
    <form action="https://fabform.io/f/xxxxx" method="post">
      <section className="py-12 bg-gray-100"> {/* Reduced padding */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"> {/* Adjusted max-width */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6"> {/* Reduced gap */}

            {/* Image Section */}
            <div className="lg:mb-0 mb-8"> {/* Reduced margin */}
              <div className="group w-full h-full relative">
                <img
                  src="https://pagedone.io/asset/uploads/1696488602.png"
                  alt="ContactUs"
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <h1 className="font-manrope text-white text-3xl font-bold leading-8">Contact us</h1> {/* Reduced text size */}
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-white p-4 lg:p-8 lg:rounded-r-2xl rounded-2xl shadow-md"> {/* Reduced padding */}
              <h2 className="text-indigo-600 font-manrope text-3xl font-semibold leading-8 mb-4 md:mb-6">Send Us A Message</h2> {/* Reduced text size and margin */}

              <input type="text" name="name" className="w-full h-10 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4 md:mb-6" placeholder="Name" required /> {/* Reduced height and margin */}
              <input type="email" name="email" className="w-full h-10 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4 md:mb-6" placeholder="Email" required /> {/* Reduced height and margin */}
              <input type="tel" name="phone" className="w-full h-10 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4 md:mb-6" placeholder="Phone" /> {/* Reduced height and margin */}

              <textarea name="message" className="w-full h-20 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 pt-3 mb-4 md:mb-6" placeholder="Message" required></textarea> {/* Reduced height and margin */}
              <button type="submit" className="w-full h-10 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">Send</button> {/* Reduced height */}
            </div>

          </div>
        </div>
      </section>
      <p className="leading-relaxed text-xl text-gray-900 mt-6 text-center"> {/* Reduced margin */}
        We use VeilMail.io to <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://veilmail.io">hide email address from spammers</a>
      </p>
    </form>
  );
};

export default ContactUs;