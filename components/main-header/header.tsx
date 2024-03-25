import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/mealsLogo.png";
import classes from "./header.module.css";
import HeaderBackground from "@/components/main-header/header-background";

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
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Meals Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
