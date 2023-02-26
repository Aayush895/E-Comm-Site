import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Product from "./Components/Product";
import ContactUs from "./Components/ContactUs";
import HomePage from "./Components/HomePage";
import ErrorPage from "./Components/ErrorPage";
import { AppProvider } from "./Context/productContext";
import SingleProduct from "./Components/SingleProduct";
import { CartProvider } from "./Context/cartContext";
import { FilterContextProvider } from "./Context/filterContext";
import Cart from "./Components/Cart";
import { Auth0Provider } from "@auth0/auth0-react"; 

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/singleProduct/:prodID",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
const domainName = process.env.REACT_APP_AUTH_DOMAIN;
const clientId = process.env.REACT_APP_CLIENT_ID;
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={domainName}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <RouterProvider router={appRouter} />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
