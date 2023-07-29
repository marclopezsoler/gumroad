import { useState } from "react";
import "./Header.scss";
import logo from "./img/logo.svg";
import { useEffect } from "react";
import { useRef } from "react";

function Header() {
  const [height, setHeight] = useState(0);
  const [height2, setHeight2] = useState(0);
  const ref = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
    setHeight2(ref2.current.clientHeight);
    console.log(height, height2);
  }, []);

  useEffect(() => {
    const header = document.querySelector(".fixedHeader");

    const handleScroll = () => {
      if (window.scrollY >= height - height2) {
        header.classList.add("showFixedHeader");
      } else {
        header.classList.remove("showFixedHeader");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, [height, height2]);

  return (
    <section className="header" ref={ref}>
      <div className="logo-header">
        <img src={logo} className="logo-landing" />
      </div>
      <div className="second-header" ref={ref2}>
        <div className="second-header-links">
          <a>Features</a>
          <a>Pricing</a>
          <a>Blog</a>
          <a>Discover</a>
        </div>
        <div className="second-header-buttons">
          <a>Login</a>
          <a>Start Selling</a>
        </div>
      </div>

      <div className="second-header fixedHeader hide">
        <div>
          <img src={logo} className="logo-landing-small" />
        </div>
        <div className="second-header-links">
          <a>Features</a>
          <a>Pricing</a>
          <a>Blog</a>
          <a>Discover</a>
        </div>
        <div className="second-header-buttons">
          <a>Login</a>
          <a>Start Selling</a>
        </div>
        
      </div>

      <div className="second-header fixedHeader shortMenu">
        <div>
          <img src={logo} className="logo-landing-small" />
        </div>        
      </div>
    </section>
  );
}

export default Header;
