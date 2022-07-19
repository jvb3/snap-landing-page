/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import FeaturesMenu from "./FeaturesMenu";
import CompaniesMenu from "./CompaniesMenu";

function MobileNavLinks({
  closeMenu,
  setCloseMenu,
  showMobileMenu,
  setShowMobileMenu,
  showFeaturesMenu,
  setShowFeaturesMenu,
  showCompaniesMenu,
  setShowCompaniesMenu,
}) {
  return (
    <>
      <ul className="m-nav">
        {closeMenu && (
          <img
            onClick={() => {
              setCloseMenu(false);
              setShowMobileMenu(false);
              setShowFeaturesMenu(false);
              setShowCompaniesMenu(false);
            }}
            className="m-nav__close-button"
            src="http://jvb3.github.io/snap-landing-page/images/icon-close-menu.svg"
            alt="close menu button"
          />
        )}

        <div>
          <li className="m-nav-link__title">
            <span className="m-nav__features-title">Features</span>
            {showFeaturesMenu ? (
              <img
                onClick={() => setShowFeaturesMenu(false)}
                className="m-nav-link__icon"
                src="http://jvb3.github.io/snap-landing-page/images/icon-arrow-up.svg"
              />
            ) : (
              <img
                onClick={() => setShowFeaturesMenu(true)}
                className="m-nav-link__icon"
                src="http://jvb3.github.io/snap-landing-page/images/icon-arrow-down.svg"
              />
            )}
            {showFeaturesMenu && <FeaturesMenu />}
          </li>
        </div>

        <div>
          <li className="m-nav-link__title">
            <span className="m-nav__companies-title">Company</span>
            {showCompaniesMenu ? (
              <img
                onClick={() => setShowCompaniesMenu(false)}
                className="m-nav-link__icon"
                src="http://jvb3.github.io/snap-landing-page/images/icon-arrow-up.svg"
              />
            ) : (
              <img
                onClick={() => setShowCompaniesMenu(true)}
                className="m-nav-link__icon"
                src="http://jvb3.github.io/snap-landing-page/images/icon-arrow-down.svg"
              />
            )}
            {showCompaniesMenu && <CompaniesMenu />}
          </li>
        </div>
        <li>Careers</li>
        <li>About</li>
        <div className="m-nav__buttons">
          <button className="m-nav__login-button">Login</button>
          <button className="m-nav__reg-button">Register</button>
        </div>
      </ul>
    </>
  );
}

export default MobileNavLinks;
