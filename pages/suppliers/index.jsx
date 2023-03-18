import Head from 'next/head'
import Link from 'next/link'

export default function Home({ suppliers }) {

  function deleteSupplier(id) {
    fetch(`/api/suppliers/information/${id}`,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        // alert("Deleting " + id)
        window.location.reload(false);
      })

  }

  return (
    <>
        <style jsx global>{`
  body {
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center; 
    height: 100vh;

  }
  
  h1 {
    color: #c72c41;
  }

  table {
    border-collapse: collapse;
    margin-top: 2rem;
  }

  th {
    text-align: center;
    background-color: #f6e9e9;
    padding: 0.8rem;
  }

  td {
    padding: 0.8rem;
    border-bottom: 1px solid #e2d8d8;
  }

  tr:hover {
    background-color: #fee8e8;
  }

  a {
    color: #c72c41;
  }

  button {
    background-color: #c72c41;
    color: #fff;
    border: none;
    padding: 0.5rem;
    border-radius: 3px;
    cursor: pointer;
  }

  button:hover {
    background-color: #a32438;
  }

  input[type='text'], select {
    padding: 0.5rem;
    border-radius: 3px;
    border: 1px solid #d6d6d6;
    width: 100%;
    margin-bottom: 1rem;
  }

  input[type='submit'] {
    background-color: #c72c41;
    color: #fff;
    border: none;
    padding: 0.5rem;
    border-radius: 3px;
    cursor: pointer;
  }

  input[type='submit']:hover {
    background-color: #a32438;
  }
`}
</style>
      <Head>
        <title>Suppliers</title>
      </Head>
      <h1>Suppliers</h1>
      <p style={{ margin: '0.4rem' }}>
        <Link href="/suppliers/add">+New Supplier</Link>
      </p>
      <table>
        <thead>
          <tr>
            <th style={{width: '20rem'}}>Supplier Name</th>
            <th style={{width: '10rem'}}>Address</th>
            <th style={{width: '10rem'}}>Phone Number</th>
            <th style={{width: '10rem'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            suppliers.map(supplier => {
              return (
                <tr key={supplier._id}>
                  <td style={{textAlign:'center'}}>
                    <Link href={`/suppliers/${supplier._id}`}>
                      {supplier.supplier_name}
                    </Link>
                  </td>
                  <td style={{textAlign:'center'}}>{supplier.address}</td>
                  <td style={{textAlign:'center'}}>{supplier.phone_number}</td>
                  <td>
                      <>
                        <Link href={`/suppliers/update/${supplier._id}`}>Update</Link>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteSupplier(supplier._id)}>Delete</button>
                      </>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </>
  )
}
export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/suppliers/information/`)
    const suppliers = await res.json()
    const sortedSuppliers = suppliers.sort((a, b) => a.supplier_name.localeCompare(b.supplier_name))
    return { props: { suppliers: sortedSuppliers } }
  }