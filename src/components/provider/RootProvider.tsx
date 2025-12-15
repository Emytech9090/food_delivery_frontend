import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "../pages/Homepage";
import AboutPage from "../pages/AboutPage";
import Contactpage from "../pages/Contactpage";
import Authpage from "../pages/Authpage";
import SignupPage from "../pages/SignupPage";
import SigninPage from "../pages/SigninPage";
import AuthLayout from "../pages/AuthLayout";
import RootLayout from "../pages/RootLayout";
import FoodPage from "../pages/FoodPage";
import OrderPage from "../pages/OrderPage";
import AddFoodPage from "../pages/AddFoodPage";
import AddOrderPage from "../pages/AddOrderPage";
import AddRestaurantPage from "../pages/AddRestaurantPage";
import RestaurantPage from "../pages/RestaurantPage";

const RootProvider = () => {
  return (
    <div className="max-h-screen w-screen overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Authpage />} />
            <Route path="sign-up" element={<SignupPage />} />
            <Route path="sign-in" element={<SigninPage />} />
          </Route>
          <Route path="/admin" element={<div></div>}>
            <Route index element={<div></div>} />
            <Route path="create" element={<div></div>} />
            <Route path="restaurant" element={<div></div>} />
          </Route>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Homepage />} />

            <Route path="restaurant">
              <Route index element={<RestaurantPage />} />
              <Route path="add-restaurant" element={<AddRestaurantPage />} />
            </Route>

            <Route path="order">
              <Route index element={<OrderPage />} />
              <Route path="add-order" element={<AddOrderPage />} />
            </Route>

            <Route path="food" element={<FoodPage />}>
              <Route path="add-food" element={<AddFoodPage />} />
            </Route>

            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<Contactpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RootProvider;
