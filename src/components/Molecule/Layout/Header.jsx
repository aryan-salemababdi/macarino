"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { useSession } from "next-auth/react";

function Header() {
  const data = false

  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>
      {data ? (
        <div className={styles.login}>
          <Link href="/dashboard">
            ورود
          </Link>
        </div>
      ) : (
        <div className={styles.login}>
          <Link href="/signin">
            <span>ورود</span>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;