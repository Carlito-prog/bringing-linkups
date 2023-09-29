import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="nav-wrp" id="wrapper">
      <div className="navInner">
        <div className="logo-wrp">
          <NavLink onClick={() => handleClickScrollTop()} to={"/"}>
            <img src="src/assets/images/blu-logo-white.png" alt="Bringing Link Ups" width="125px"/>
          </NavLink>
        </div>
        <div className="link-wrp">
          <NavLink
            onClick={() => handleClickScroll("our-mission")}
            to={"our-mission"}
          >
            Our Mission
          </NavLink>
          <NavLink onClick={() => handleClickScroll("dilemma")} to={"dilemma"}>
            {" "}
            The Dilemma{" "}
          </NavLink>
          <NavLink
            onClick={() => handleClickScroll("solution")}
            to={"solution"}
          >
            {" "}
            Our Solution{" "}
          </NavLink>
          <NavLink
            onClick={() => handleClickScroll("founders")}
            to={"founders"}
          >
            Founders
          </NavLink>
          <NavLink onClick={() => handleClickScroll("contact")} to={"contact"}>
            {" "}
            Contact Us{" "}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
