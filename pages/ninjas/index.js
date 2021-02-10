import styles from "../../styles/Ninjas.module.css";
import Head from "next/head";
import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const index = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | All Ninjas</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja) => (
          <div key={ninja.id}>
            <a className={styles.single} href="">
              <h3>{ninja.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default index;
