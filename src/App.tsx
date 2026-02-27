import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Meals from "./components/Meals";
import MealDetail from "./components/MealDetail";
import ChefSpecials from "./components/ChefSpecials";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import OrderPage from "./components/OrderPage";
import DeliveryDetailsPage from "./components/DeliveryDetailsPage";
import PaymentPage from "./components/PaymentPage";
import ProcessingPage from "./components/ProcessingPage";
import SuccessPage from "./components/SuccessPage";
import RevenuePage from "./components/Revenue";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryName" element={<Meals />} />
        <Route path="/meal/:mealId" element={<MealDetail />} />
        <Route path="/chef-specials" element={<ChefSpecials />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/order-summary" element={<OrderPage />} />
        <Route path="/delivery" element={<DeliveryDetailsPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/processing" element={<ProcessingPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/revenue" element={<RevenuePage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
