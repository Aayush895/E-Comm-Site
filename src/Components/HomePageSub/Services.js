import React from "react";

const Services = () => {
  return (
    <div className="flex justify-center space-x-8">
      <div className="bg-slate-100 p-16 rounded-lg">
        <i className="fa-solid fa-truck-fast bg-white rounded-full text-purple-500 p-4 mt-7"></i>
        <p className="mt-7">Super Fast and Free Delivery</p>
      </div>

      <div>
        <div className="flex bg-slate-100 px-16 py-8 space-x-6 rounded-lg">
          <i className="fa-solid fa-shield-halved bg-white rounded-full text-purple-500 p-4"></i>
          <p className="mt-3">Non-Contact Shipping</p>
        </div>

        <div className="flex bg-slate-100 px-16 py-9 space-x-6 rounded-lg mt-6">
          <i className="fa-solid fa-money-bill-transfer bg-white rounded-full text-purple-500 p-4"></i>
          <p className="mt-3">Money-back Gurantee</p>
        </div>
      </div>

      <div className="bg-slate-100 p-16 rounded-lg">
        <i className="fa-solid fa-user-shield bg-white rounded-full text-purple-500 p-4 mt-7"></i>
        <p className="mt-7">Super Secure Payment System</p>
      </div>
    </div>
  );
};

export default Services;
