import React, { useState } from "react";
import "./App.css";
import "./styles/styles.css";
import DesktopNavLinks from "./components/DesktopNavLinks";
import MobileNavLinks from "./components/MobileNavLinks";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDeskTopMenu, setShowDeskTopMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  const [showFeaturesMenu, setShowFeaturesMenu] = useState(false);
  const [showCompaniesMenu, setShowCompaniesMenu] = useState(false);

  return (
    <div className="wrapper">
      <div className={showMobileMenu && "overlay"}></div>
      <header>
        <nav className="nav-bar">
          <img
            className="nav-bar__logo"
            src="http://jvb3.github.io/snap-landing-page/images/logo.svg"
            alt="company logo"
          />
          <DesktopNavLinks
            setShowDeskTopMenu={setShowDeskTopMenu}
            showDeskTopMenu={showDeskTopMenu}
            showFeaturesMenu={showFeaturesMenu}
            setShowFeaturesMenu={setShowFeaturesMenu}
            showCompaniesMenu={showCompaniesMenu}
            setShowCompaniesMenu={setShowCompaniesMenu}
          />
          <img
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
              setCloseMenu(true);
            }}
            className="nav-bar__menu-icon"
            src="http://jvb3.github.io/snap-landing-page/images/icon-menu.svg"
            alt="hamburger menu icon"
          />
          <div>
            {showMobileMenu && (
              <MobileNavLinks
                closeMenu={closeMenu}
                setCloseMenu={setCloseMenu}
                showMobileMenu={showMobileMenu}
                setShowMobileMenu={setShowMobileMenu}
                showFeaturesMenu={showFeaturesMenu}
                setShowFeaturesMenu={setShowFeaturesMenu}
                showCompaniesMenu={showCompaniesMenu}
                setShowCompaniesMenu={setShowCompaniesMenu}
              />
            )}
          </div>
        </nav>
      </header>
      <div className="container">
        <article className="main-image">
          <img
            className="main-image__hero-image"
            src="http://jvb3.github.io/snap-landing-page/images/image-hero-mobile.png"
            alt="a man using a laptop"
          />
          <img
            className="main-image__dt-hero-image"
            src="http://jvb3.github.io/snap-landing-page/images/image-hero-desktop.png"
            alt="a man using a laptop"
          />
        </article>
        <div>
          <main className="main-content">
            <article className="main-text">
              <h1 className="main-text__heading">Make remote work</h1>
              <p className="main-text__paragraph">
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>
              <button className="main-text__button">Learn More</button>
            </article>
          </main>
          <footer className="footer-content">
            <img
              src="http://jvb3.github.io/snap-landing-page/images/client-databiz.svg"
              alt="client logo-1"
            />
            <img
              src="http://jvb3.github.io/snap-landing-page/images/client-audiophile.svg"
              alt="client logo-2"
            />
            <img
              src="http://jvb3.github.io/snap-landing-page/images/client-meet.svg"
              alt="client logo-3"
            />
            <img
              src="http://jvb3.github.io/snap-landing-page/images/client-maker.svg"
              alt="client logo-4"
            />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
