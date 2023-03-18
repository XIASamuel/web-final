/*
Update page
It populates the supplier data into the form.
*/
import Head from "next/head"
import Link from "next/link"

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";



// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Supplier({ supplier }) {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState("");

  useEffect(() => {
    reset(supplier)
  }, [])

  const updateSupplier = async (data) => {
    const response = await fetch(`/api/suppliers/information/${supplier._id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // serialisation
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const result = await response.json();   // deserialise
    if (result.error) {
      alert("Error: " + result.error)
    } else {
      alert("Supplier updated")
      window.location.href = "/suppliers"
    }
    console.log(result)
    setData(JSON.stringify(data))
  }

  console.log('supplier 2', supplier)
  if (!supplier) return (
    <div>
      <p>Supplier not found</p>
      <Link href="/suppliers">Back</Link>
    </div>
  );

  return (
    <>
        <style jsx global>{`
  
  body {
    background-color: #FFF6F6;
    font-family: Arial, Helvetica, sans-serif;
    color: #444444;
    width: 80%;
    margin: 0 auto;
  }

  h1 {
    font-size: 2rem;
    color: #c72c41;
  }

  label {
    display: block;
    margin-top: 1rem;
    color: #c72c41;
  }

  input[type="text"],
  input[type="tel"],
  input[type="submit"] {
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 2px solid #FF4500;
    border-radius: 4px;
    background-color: #FFE5E5;
    color: #444444;
  }

  input[type="submit"] {
    background-color: #c72c41;
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin-top: 2rem;
  }

  input[type="submit"]:hover {
    background-color: #FF6347;
  }
  `}
</style>
      <Head>
        <title>Update {supplier.supplier_name}</title>
      </Head>

      <div style={{ margin: '1rem' }}>
        <form onSubmit={handleSubmit(updateSupplier)}>
          <h1>Update Supplier</h1>
          <label htmlFor="supplier_name">Supplier Name</label><br />
                <input id="supplier_name" {...register("supplier_name", { required: true })} placeholder="Supplier Name" /><br />

                <label htmlFor="address">Address</label><br />
                <input id="address" {...register("address", { required: true })} placeholder="Address" /><br />

                <label htmlFor="phone_number">Phone Number</label><br />
                <input id="phone_number" {...register("phone_number", { required: true })} placeholder="Phone Number" /><br />
                <input type="submit" />
        </form>
      </div>

      <Link href="/suppliers">Back</Link>
    </>
  )
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
  console.debug('params', params)
  const res = await fetch(`https://web-final-6328003.vercel.app/api/suppliers/information/${params.id}`)
  const supplier = await res.json()
  console.debug('supplier 1', supplier)
  return { props: { supplier } }
}