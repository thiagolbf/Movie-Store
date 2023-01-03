import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/Home";
import { CartResume } from "../pages/StoreCartResume";

import { HeaderComponent } from "../components/Header";

export const RoutesComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resumecart" element={<CartResume />} />
      </Routes>
    </>
  );
};
