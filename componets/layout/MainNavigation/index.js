import Link from "next/link";
import classes from "./navigation.module.css";
import { Logo } from "../Logo";

export function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/posts">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}