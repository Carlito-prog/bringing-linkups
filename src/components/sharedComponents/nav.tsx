import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MobileNav from "./mobileNav";

export function Nav() {
  const [show, setShow] = useState(true);
  const [previousScrollPos, setPreviousScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Determine scroll direction
      const visible =
        previousScrollPos > currentScrollPos || currentScrollPos < 10;

      // Update state
      setShow(visible);
      setPreviousScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previousScrollPos]);

  const handleClickScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const handleClickScrollTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <nav className={`nav-wrp ${show ? "" : "hidden"}`} id="wrapper">
      <MobileNav
        handleClickScroll={handleClickScroll}
        handleClickScrollTop={handleClickScrollTop}
      />
      <div className="navInner">
        <div className="logo-wrp">
          <NavLink onClick={() => handleClickScrollTop()} to={"our-mission"}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/Bringing-Link-Ups-logo-2.png?alt=media&token=c19e2e23-08e0-4ec8-b649-e02a50114b57"
              alt="Bringing Link Ups"
            />
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
            The Dilemma{""}
          </NavLink>
          <NavLink
            onClick={() => handleClickScroll("solution")}
            to={"solution"}
          >
            Our Solution{""}
          </NavLink>
          <NavLink
            onClick={() => handleClickScroll("ourGoals")}
            to={"ourGoals"}
          >
            Our Goals
          </NavLink>
          <NavLink
            onClick={() => handleClickScroll("founders")}
            to={"founders"}
          >
            Founders
          </NavLink>
          <NavLink
            onClick={() => handleClickScroll("comparisons")}
            to={"comparisons"}
          >
            Us vs Them
          </NavLink>
          <NavLink onClick={() => handleClickScroll("contact")} to={"contact"}>
            Contact Us{""}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

