import Head from "next/head";
import styles from "../styles/Home.module.css";
import Form from "../components/form";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  function getFeedbackData() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setData(data.feedback));
  }

  const showData = data.map((data) => <div>{data.name}</div>);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>API FORM</h1>
          <Form submitMe={getFeedbackData} />
          {showData}
        </main>
      </div>
    </>
  );
}
