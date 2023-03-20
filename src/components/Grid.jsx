import React from 'react';

const containers = [
  {
    id: 1,
    img: 'images/image-retro-pcs.jpg',
    title: 'Reviving Retro PCs',
    para: 'What happens when old PCs are given modern upgrades?',
  },
  {
    id: 2,
    img: '/images/image-top-laptops.jpg',
    title: 'Top 10 Laptops of 2022',
    para: 'What happens when old PCs are given modern upgrades?',
  },
  {
    id: 3,
    img: '/images/image-gaming-growth.jpg',
    title: 'The growth of Gaming',
    para: 'What happens when old PCs are given modern upgrades?',
  },
];
const Grid = () => {
  return (
    <div className="mt-12 sm:grid sm:grid-cols-3 sm:gap-2" id="categories">
      {containers.map((item) => (
        <>
          <div key={item.id} className="flex py-2">
            <img
              src={item.img}
              alt={item.id}
              className="object-fit lg:h-48 h-36"
            />
            <div className="ml-4">
              <h1 className="text-[#c5c6ce] tracking-wide font-bold lg:text-2xl  text-base">
                0{item.id}
              </h1>
              <div className="font-semibold lg:text-lg  hover:text-[#e9ab53] cursor-pointer text-base">
                {item.title}
              </div>
              <p className="lg:text-base text-xs">{item.para}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Grid;

//this is for last portion
