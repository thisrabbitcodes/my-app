import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>login</a>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
