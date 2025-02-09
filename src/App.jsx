import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProduct from "./components/allProductlist";
import AppLayout from "./components/AppLayout";
import NewProduct from "./components/newProduct";
import ShowProduct from "./components/ShowProduct";
import UpdateProduct from "./components/updateProduct";
import Profile from "./components/Profile";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import AddToCart from "./AddToCard/Addtocard";
import { Provider, useDispatch } from "react-redux";
import store from "./store";
import { ToastContainer } from "react-toastify"; // Importing Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import About from "./components/About";
import Contact from "./components/Contactus";
import PrivacyPolicy from "./components/Privacypolice";
import Carousel from "./components/Carousal";
import Hero from "./components/Hero";
import Payment from "./components/Payments";
import CancellationReturns from "./components/CancellationRetun";
import Shipping from "./components/Shipping";
import FAQs from "./components/FAQs";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/new",
        element: <NewProduct />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/products/:id",
        element: <ShowProduct />,
      },
      {
        path: "/products/:id/update",
        element: <UpdateProduct />,
      },
      {
        path: "/addtocart",
        element: <AddToCart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/cancellation",
        element: <CancellationReturns />,
      },
      {
        path: "/shipping",
        element: <Shipping />,
      },
      {
        path: "/faqs",
        element: <FAQs />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
