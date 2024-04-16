import { NavLink } from "react-router-dom";
import { slide as HamburgerMenu } from "react-burger-menu";
import MenuIcon from "@mui/icons-material/Menu";

type MobileNavProps = {
  handleClickScroll: (id: string) => void;
  handleClickScrollTop: () => void;
};

function MobileNav({
  handleClickScroll,
  handleClickScrollTop,
}: MobileNavProps) {
  return (
    <div className="hamburgerInner " id="outer-container">
      <HamburgerMenu
        className="hamburger"
        width={"100%"}
        // pageWrapId={"page-wrap"}
        // outerContainerId={"outer-container"}
        customBurgerIcon={<MenuIcon />}
      >
        <div className="logo-wrp" id="page-wrap">
          <NavLink onClick={() => handleClickScrollTop()} to={"/"}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bringing-link-ups.appspot.com/o/blu-logo-white.png?alt=media&token=a5c69472-2fff-44f1-9498-03cee80304f6&_gl=1*w82l82*_ga*MjA5MDUxODA4Ny4xNjk2Mjk5ODE1*_ga_CW55HF8NVT*MTY5Njg1NzYxMC4xMS4xLjE2OTY4NTg3MTMuNjAuMC4w"
              alt="Bringing Link Ups"
              width="125px"
            />
          </NavLink>
        </div>
        <div className="link-wrp" style={{ display: "inline-flex" }}>
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
      </HamburgerMenu>
    </div>
  );
}

export default MobileNav;
