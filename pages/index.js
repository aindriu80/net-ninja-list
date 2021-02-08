import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi numquam
        architecto sapiente provident blanditiis obcaecati cum alias beatae!
        Itaque ut deserunt perspiciatis natus? Deleniti ratione omnis, ipsam
        explicabo officiis cum. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Quasi numquam architecto sapiente provident blanditiis
        obcaecati cum alias beatae! Itaque ut deserunt perspiciatis natus?
        Deleniti ratione omnis, ipsam explicabo officiis cum. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Quasi numquam architecto
        sapiente provident blanditiis obcaecati cum alias beatae! Itaque ut
        deserunt perspiciatis natus? Deleniti ratione omnis, ipsam explicabo
        officiis cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quasi numquam architecto sapiente provident blanditiis obcaecati cum
        alias beatae! Itaque ut deserunt perspiciatis natus? Deleniti ratione
        omnis, ipsam explicabo officiis cum. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Quasi numquam architecto sapiente
        provident blanditiis obcaecati cum alias beatae! Itaque ut deserunt
        perspiciatis natus? Deleniti ratione omnis, ipsam explicabo officiis
        cum.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi numquam
        architecto sapiente provident blanditiis obcaecati cum alias beatae!
        Itaque ut deserunt perspiciatis natus? Deleniti ratione omnis, ipsam
        explicabo officiis cum. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Quasi numquam architecto sapiente provident blanditiis
        obcaecati cum alias beatae! Itaque ut deserunt perspiciatis natus?
        Deleniti ratione omnis, ipsam explicabo officiis cum. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Quasi numquam architecto
        sapiente provident blanditiis obcaecati cum alias beatae! Itaque ut
        deserunt perspiciatis natus? Deleniti ratione omnis, ipsam explicabo
        officiis cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quasi numquam architecto sapiente provident blanditiis obcaecati cum
        alias beatae! Itaque ut deserunt perspiciatis natus? Deleniti ratione
        omnis, ipsam explicabo officiis cum. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Quasi numquam architecto sapiente
        provident blanditiis obcaecati cum alias beatae! Itaque ut deserunt
        perspiciatis natus? Deleniti ratione omnis, ipsam explicabo officiis
        cum.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
      <br />
      <Link href="/ninjas/test">This goes to test in Ninjas</Link>
    </div>
  );
}
