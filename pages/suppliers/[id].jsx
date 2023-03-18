import Head from "next/head"
import Link from "next/link"
import axios from 'axios';

// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Supplier({ supplier }) {
  console.log('supplier 2', supplier)
  if (!supplier) return (
    <div>
      <p>Supplier not found</p>
      <Link href="/suppliers">Back</Link>
      </div>
  );

  return (
    <>
    <style>
          {`
            body {
              background-color: #FFF6F6;
              font-family: Arial, Helvetica, sans-serif;
              color: #444444;
            }
            h1 {
              font-size: 2rem;
              color: #c72c41;
              text-align: center;
              margin-top: 3rem;
            }
            p {
              font-size: 1.2rem;
              color: #444444;
              text-align: center;
              margin-top: 1rem;
            }
            a {
              color: #c72c41;
              display: block;
              text-align: center;
              margin-top: 2rem;
            }
          `}
        </style>

      <Head>
        <title>{supplier.supplier_name}</title>
      </Head>
      <h1>{supplier.supplier_name}</h1>
      <p>{supplier.address}</p>
      <p>{supplier.phone_number}</p>
      <Link href="/suppliers">Back</Link>
    </>
  )
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
    console.debug('params', params);
    const response = await axios.get(`https://web-final-6328003.vercel.app/api/suppliers/information/${params.id}`);
    const supplier = response.data;
    console.debug('supplier 1', supplier);
    return { props: { supplier } };
  }