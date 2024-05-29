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
        customBurgerIcon={<MenuIcon />}
      >
        <div className="logo-wrp" id="page-wrap">
          <NavLink onClick={() => handleClickScrollTop()} to={"our-mission"}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bringinglinkups.appspot.com/o/Bringing-Link-Ups-logo-2.png?alt=media&token=c19e2e23-08e0-4ec8-b649-e02a50114b57"
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
