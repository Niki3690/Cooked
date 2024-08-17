import React, { useEffect } from 'react'
import { Link } from "react-router-dom"



const Navbar = () => {
  useEffect(() => {
    document.title = "Cooked_Navbar"
  }, [])
  return (
    <>
      <div className='d-flex navss align-items-center '>
        <div className=''>
          <nav class="nav ">
            <a class="nav-link fs-5 ms-5 text-dark" href="#"><i class="fa-brands fa-square-facebook"></i></a>
            <a class="nav-link fs-5 text-dark" href="#"><i class="fa-brands fa-twitter"></i></a>
            <a class="nav-link fs-5 text-dark" href="#"><i class="fa-brands fa-instagram"></i></a>
            <a class="nav-link fs-5 text-dark" href="#"><i class="fa-brands fa-youtube"></i></a>
          </nav>
        </div>
        <div className='ms-auto d-flex align-items-center me-5'>
          <div class="nav">
            <a class="nav-link fs-5 text-dark" href="#"><i class="fa-solid fa-user fs-5"></i></a>
          </div>
        </div>
      </div>



      <div className='d-flex justify-content-center'>
        <img src='https://images-platform.99static.com//WWnD6EAbLneiGZddNdLI1wW7i50=/0x1191:1005x2196/fit-in/500x500/99designs-contests-attachments/80/80692/attachment_80692191' style={{ height: 130 }} />
      </div>




      <div>

        <nav class="navbar navbar-expand-lg navss">
          <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
                <li class="nav-item">
                  <Link to="/" class="nav-link fs-4 text-black fw-bold  ms-4" href="#">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="about" class="nav-link fs-4 text-black fw-bold  ms-4" href="#">About</Link>
                </li>

                <li class="nav-item">
                  <Link to="cart" class="nav-link fs-4 text-black fw-bold  ms-4" aria-disabled="true">Cart</Link>
                </li>
                <li class="nav-item">
                  <Link to="contact" class="nav-link fs-4 text-black fw-bold  ms-4" aria-disabled="true">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>


  )
}

export default Navbar
