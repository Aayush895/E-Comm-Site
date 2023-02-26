import React from "react";

const Header = () => {
  return (
    <div className='flex justify-evenly mt-16 mb-16'>
      <div className='my-10'>
        <h3 className='text-left uppercase text-slate-400' >Welcome to</h3>
        <h1 className='text-left text-6xl' >Jha Store</h1>

        <p className='text-left w-[30rem] my-11 text-slate-500' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </p>

        <p className='text-left bg-indigo-500 w-28 px-4 py-2 text-white cursor-pointer hover:bg-indigo-700'>Shop Now</p>
      </div>

      <div>
        <div className="h-52 w-56 bg-purple-300 relative inset-x-52"></div>
        <img
        className='h-72 relative bottom-40 right-10'
          src="https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="fam-pic"
        />
      </div>

    </div>
  );
};

export default Header;
