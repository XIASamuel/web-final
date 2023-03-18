import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="center">
      <Head>
        <title>Web Application Development Final Exam</title>
      </Head>
      <h1>CHUNGJIAN XIA</h1>
      <Link href="/suppliers">Click to access</Link>
    </div>
  );
}