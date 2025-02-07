import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-12 px-6 md:px-12 lg:px-24 min-h-screen flex items-center justify-center"> {/* Gradient background, flex for centering */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden md:flex"> {/* Rounded corners */}

        {/* Image Section */}
        <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex items-center justify-center"> {/* Centered image */}
          <img
            src="your-profile-image.jpg"
            alt="Bhawai Singh Shekhawat"
            className="w-full h-auto rounded-xl object-cover" />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Bhawai Singh Shekhawat</h2> {/* Larger name */}
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Full-Stack Developer & BA Final Year Student</h3> {/* Added title */}
          <p className="text-gray-700 leading-relaxed mb-8">
            I'm a final-year BA student at MDSU, Ajmer, and a passionate full-stack developer with expertise in both front-end and back-end technologies. I enjoy building innovative and user-friendly web applications.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact</h3>
            <p className="text-gray-700">
              Phone: <a href="tel:6350606790" className="text-blue-500 hover:underline">6350606790</a><br />
              Email: <a href="mailto:shekhawatbhwanisingh49@gmail.com" className="text-blue-500 hover:underline">shekhawatbhwanisingh49@gmail.com</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Links</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2"> {/* Added spacing between list items */}
              <li><a href="your-portfolio-link" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Portfolio</a></li>
              <li><a href="your-linkedin-link" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a></li>
              <li><a href="your-github-link" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a></li>
              <li><a href="your-website-link" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Website</a></li>{/* Added Website link */}
            </ul>
          </div>

          <div className="mt-8"> {/* Added margin top */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Projects</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2"> {/* Added spacing */}
              <li><a href="your-project1-link" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Project 1</a></li> {/* Added Project 1 */}
              <li><a href="your-project2-link" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Project 2</a></li> {/* Added Project 2  */}
              {/* Add more projects as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;