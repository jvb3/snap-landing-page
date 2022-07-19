import React from "react";
import "../styles/styles.css";
import FeaturesMenu from "./FeaturesMenu";
import CompaniesMenu from "./CompaniesMenu";

function DesktopNavLinks({
  showDeskTopMenu,
  setShowDeskTopMenu,
  showFeaturesMenu,
  setShowFeaturesMenu,
  showCompaniesMenu,
  setShowCompaniesMenu,
}) {
  return (
    <>
      <ul className="dt-nav">
        <li
          onClick={() => {
            setShowFeaturesMenu(!showFeaturesMenu);
            setShowCompaniesMenu(false);
          }}
          className="dt-nav__features-container"
        >
          <span className="dt-nav__features-title">Features</span>

          {showFeaturesMenu ? (
            <img
              src="http://jvb3.github.io/snap-landing-page/images/icon-arrow-up.svg"
              alt="up arrow"
            />
          ) : (
            <img
              src="http://jvb3.github.io/snap-landing-page/images/icon-arrow-down.svg"
              alt="down arrow"
            />
          )}
          {showFeaturesMenu && <FeaturesMenu />}
        </li>
        <li
          onClick={() => {
            setShowCompaniesMenu(!showCompaniesMenu);
            setShowFeaturesMenu(false);
          }}
          className="dt-nav__companies-container"
        >
          <span className="dt-nav__company-title">Company</span>
          {showCompaniesMenu ? (
            <img
              src="http://jvb3.github.io/snap-landing-page/images/icon-arrow-up.svg"
              alt="up arrow"
            />
          ) : (
            <img
              src="http://jvb3.github.io/snap-landing-page/images/icon-arrow-down.svg"
              alt="down arrow"
            />
          )}
          {showCompaniesMenu && <CompaniesMenu />}
        </li>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <div className="dt-nav__buttons">
        <button className="dt-nav__login-button">Login</button>
        <button className="dt-nav__reg-button">Register</button>
      </div>
    </>
  );
}

export default DesktopNavLinks;
