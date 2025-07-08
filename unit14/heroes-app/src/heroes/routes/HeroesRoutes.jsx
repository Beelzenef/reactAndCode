import { Navbar } from "../../shared/cmps/NavBar";

import { MarvelPage } from "../pages/MarvelPage";
import { DcPage } from "../pages/DcPage";

import { Navigate, Route, Routes } from "react-router-dom";
import { HeroPage } from "../pages/HeroPage";
import { SearchPage } from "../pages/SearchPage";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="detail" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
