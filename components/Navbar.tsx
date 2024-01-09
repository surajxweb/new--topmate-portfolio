"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <div className={styles.container}>
      <Link className={path === "/" ? styles.selected : styles.link} href={"/"}>
        Home
      </Link>
      <Link
        className={path === "/projects" ? styles.selected : styles.link}
        href={"/projects"}
      >
        Projects
      </Link>
      <Link
        className={path === "/blogs" ? styles.selected : styles.link}
        href={"/blogs"}
      >
        Blogs
      </Link>
      <Link
        className={path === "/contact" ? styles.selected : styles.link}
        href={"/contact"}
      >
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
