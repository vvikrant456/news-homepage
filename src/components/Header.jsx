import React from 'react';
import RightBox from './content';
import img from '/images/image-web-3-desktop.jpg';
import Card from './Card';

const Header = () => {
  return (
    <div className="my-8 sm:grid sm:grid-cols-2   sm:gap-6">
      <section id="popular">
        <img src={img} alt="desktop-img" />
        <div className="sm:flex sm:justify-between my-4">
          <h1 className=" text-5xl font-extrabold w-80">
            The Bright <br /> Future of <br /> Web 3.0?
          </h1>
          <div className="sm:w-96">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="px-4 py-2 mt-2 text-base tracking-widest text-white bg-[#f15e50] uppercase hover:bg-[#00001a]">
              Read more
            </button>
          </div>
        </div>
      </section>

      <section
        className=" sm:px-2 sm:py-2 bg-[#00001a] sm:col-start-2"
        id="new"
      >
        <h1 className="text-[#e9ab53] px-2 pt-4 text-2xl font-bold tracking-wider">
          New
        </h1>
        {RightBox.map((post, index) => {
          return (
            <Card
              key={post.id}
              head={post.heading}
              size={RightBox.length - 1}
              ind={index}
              details={post.para}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Header;

// this is for left and right body content.
