import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/Home";

import { HeaderComponent } from "../components/Header";
import { MovieCardComponent } from "../components/MovieCard";

export const RoutesComponent = () => {
  return (
    <>
      <HeaderComponent />
      <HomePage />
    </>
  );
};
