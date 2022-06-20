import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Navbar = () => {
  return (
    <>
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    </Head>
    
        {/* NavBar */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Elite Coder
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link href='/'>
          <a className="nav-link active" aria-current="page">
            Home
          </a>
          </Link>
        </li>
        <li className="nav-item">
        <Link href='/about'>
         <a className="nav-link">About</a> 
          
          </Link>
        </li>

        <li className="nav-item">
          <Link href='/blog'>
         <a className="nav-link">Blog Post</a>
          
          </Link>
         
        </li>
        
        <li className="nav-item">
        <Link href='/contact'>
         <a className="nav-link">Contact</a>
          
          </Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

      {/* End NavBar */}

    </>
  )
}

export default Navbar