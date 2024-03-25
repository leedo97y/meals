import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/mealsLogo.png";
import classes from "./header.module.css";
import HeaderBackground from "@/components/main-header/header-background";
import NavLinkPart from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image priority src={logoImg} alt="meals-logo-img" />
          Foodie Meals
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLinkPart href="/meals">Browse Meals</NavLinkPart>
            </li>
            <li>
              <NavLinkPart href="/community">Foodies Community</NavLinkPart>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
