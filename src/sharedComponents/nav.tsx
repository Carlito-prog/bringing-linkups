import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(true);
  const [previousScrollPos, setPreviousScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

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
    <nav className={`nav-wrp ${show ? "" : "hidden"}`} id="wrapper">
      <div className="navInner">
        <div className="logo-wrp">
          <NavLink onClick={() => handleClickScrollTop()} to={"/"}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bringing-link-ups.appspot.com/o/blu-logo-white.png?alt=media&token=a5c69472-2fff-44f1-9498-03cee80304f6&_gl=1*w82l82*_ga*MjA5MDUxODA4Ny4xNjk2Mjk5ODE1*_ga_CW55HF8NVT*MTY5Njg1NzYxMC4xMS4xLjE2OTY4NTg3MTMuNjAuMC4w"
              alt="Bringing Link Ups"
              width="125px"
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
          <NavLink onClick={() => handleClickScroll("contact")} to={"contact"}>
            Contact Us{""}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
