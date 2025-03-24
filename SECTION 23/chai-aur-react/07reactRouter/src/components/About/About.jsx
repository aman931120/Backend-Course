import React from 'react'

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12 object-left-top">
            <img
              src="https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              React is a JavaScript library for building user interfaces,
              primarily for web applications. It was developed by Facebook and
              is now maintained by Meta and a large open-source community. React
              is widely used because of its component-based architecture, which
              allows developers to build reusable UI elements efficiently.
            </p>
            <p className="mt-4 text-gray-600">
              ✔️ Reusable components save development time. <br /> ✔️ High performance
              due to Virtual DOM. <br /> ✔️ Large community and rich ecosystem. 
              <br /> ✔️ Easy
              to integrate with other libraries and frameworks. <br /> ✔️ Strong
              support for modern web development trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}