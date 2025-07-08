import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../shared/cmps/NavBar";

import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
