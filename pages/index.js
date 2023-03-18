import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="center">
      <Head>
        <title>Web Application Development</title>
      </Head>
      <h1>Web Application Development Final Exam</h1>
      <h3>CHUANGJIAN XIA</h3>
      <Link href="/suppliers">Click to access</Link>
    </div>
  );
}