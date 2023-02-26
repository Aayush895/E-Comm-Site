import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cartContext";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  let totalProducts = 0;

  for (let i = 0; i < cart.length; i++) {
    totalProducts += cart[i].qty;
  }

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    const nav_link = document.querySelector("#nav-bar");
    const links = nav_link.querySelectorAll(".nav-item");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelector(".active_navBar")?.classList.remove("active_navBar");
        link.classList.add("active_navBar");
      });
    });
  }, []);

  return (
    <div className="flex justify-between p-4 bg-gray-100">
      <div>
        <img
          className="h-24 w-24"
          src="https://media.istockphoto.com/id/912819604/vector/storefront-flat-design-e-commerce-icon.jpg?s=612x612&w=0&k=20&c=_x_QQJKHw_B9Z2HcbA2d1FH1U1JVaErOAp2ywgmmoTI="
          alt="store-img"
        />
      </div>
      <div>
        <ul className="flex p-10 space-x-10" id="nav-bar">
          <Link to="/">
            <li className="uppercase py-0.5 hover:text-indigo-300 nav-item active_navBar">Home</li>
          </Link>{" "}
          <Link to="/about">
            <li className="uppercase py-0.5 hover:text-indigo-300 nav-item">About</li>
          </Link>
          <Link to="/product">
            <li className="uppercase py-0.5 hover:text-indigo-300 nav-item">Products</li>
          </Link>
          <Link to="/contact">
            <li className="uppercase py-0.5 hover:text-indigo-300 nav-item">Contact</li>
          </Link>
          {isAuthenticated && <li className="py-0.5">{user.name}</li>}
          {isAuthenticated ? (
            <li
              className="bg-indigo-500 uppercase px-4 py-[0.2rem] text-white cursor-pointer hover:bg-indigo-700"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </li>
          ) : (
            <li
              className="bg-indigo-500 uppercase px-4 py-[0.2rem] text-white cursor-pointer hover:bg-indigo-700"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </li>
          )}
          <Link to="/cart">
            <li className="hover:text-indigo-300 nav-item">
              <span>
                <i className="fa-solid fa-cart-shopping">{totalProducts}</i>
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
