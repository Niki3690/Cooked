import React from 'react'
import ChooseRecipes from './ChooseRecipes'
import Recipes from './Recipes'
import LatestRecipes from './LatestRecipes'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    document.title = "Cooked_Home"
  }, [])
  return (
    <div>
      {/* <div>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://qph.cf2.quoracdn.net/main-qimg-89104f9247d10b8f4a337fdb28220b52" class="d-block w-100 " alt="..." className='fff' />
            </div>
            <div class="carousel-item">
              <img src="https://t3.ftcdn.net/jpg/07/27/22/18/360_F_727221858_QSPbFs9yQo4z2MX1XpYBhHjZCGh5zLTM.jpg" class="d-block w-100" alt="..." className='fff' />
            </div>
            <div class="carousel-item">
              <img src="https://c.ndtvimg.com/2022-03/jcliv9dg_shahi-paneer_625x300_15_March_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675" class="d-block w-100" alt="..." className='fff' />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}



      <div className='bbb'>

        <img src='https://t4.ftcdn.net/jpg/04/76/57/27/360_F_476572792_zMwqHpmGal1fzh0tDJ3onkLo88IjgNbL.jpg' style={{ width: "100%", height: 480, objectFit: "cover" }} />



        <div className='ccc'>
          <h1>Unforgettable Snacks</h1>
          <h1>Unforgettable Memories</h1>
        </div>

      </div>


      <ChooseRecipes />




      <div className='pp pt-1 '>
        <div className='reci text-center'>
          <h4>Recent Recipes</h4>
          <h1 className='fw-bold mt-3'>Latest Recipes</h1>
        </div>

        <LatestRecipes />
      </div>
    </div>


  )
}

export default Home
