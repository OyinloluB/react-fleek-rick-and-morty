import React, { useState } from "react";
import { Route, useLocation } from "react-router-dom";

import styles from "./main.module.scss";
import backtotop from "../assets/images/backtotop.png";

import SideNavbar from "../components/layout/sidenavbar/SideNavbar";
import TopNavbar from "../components/layout/topnavbar/TopNavbar";
import Characters from "../pages/home/Characters";
import CharacterDetails from "../pages/details/CharacterDetails";

const Main = () => {
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={styles.main}>
      <TopNavbar
        setMobileNavOpen={setMobileNavOpen}
        mobileNavOpen={mobileNavOpen}
      />
      {location.pathname === "/" && (
        <SideNavbar mobileNavOpen={mobileNavOpen} />
      )}
      <Route exact path="/" component={Characters} />
      <Route exact path="/character/:id" component={CharacterDetails} />

      <a href="#">
        <div className={styles.backtotop}>
          <img src={backtotop} alt="Back to top" />
        </div>
      </a>
    </div>
  );
};

export default Main;
