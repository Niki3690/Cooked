import React from 'react'
import { useEffect } from 'react'

const ChooseRecipes = () => {
  useEffect(() => {
    document.title = "Cooked_ChooseRecipes"
  }, [])
  return (
    <div>
      <div className='reci text-center'>
        <h4>Choose a Category</h4>
        <h1 className='fw-bold mt-3'>Recipe Categories</h1>
      </div>

      <div>
        <div className='container mt-5'>
          <div className="row text-center justify-content-center g-3">


            <div className='col-lg-2 col-md-4 col-sm-12'>
              <div>

                <div className='eeeee'>
                  <img src='https://thatix.progressionstudios.com/wp-content/uploads/elementor/thumbs/beef-steak-tomahawk-S3JHQLN-omrts5j8kcndyxcktp15s34fxqxhw3isn1lr4x0gbk.jpg' className='ww'></img>
                </div>
              </div>
            </div>

            <div className='col-lg-2 col-md-4 col-sm-12 '>
              <div>
                <div className='eeeee'>
                  <img src='https://thatix.progressionstudios.com/wp-content/uploads/elementor/thumbs/meat-burger-with-salad-cheese-tomato-and-ketchup-KRH2A48-omrfev0q6tq2wsunlkm4lu0tt6jg0dhvdjl0u6viok.jpg' className='ww'></img>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-12 '>
              <div>
                <div className='eeeee'>
                  <img src='https://thatix.progressionstudios.com/wp-content/uploads/2020/03/baked-chicken-breast-9C4F43W.jpg' className='ww'></img>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-12 '>
              <div>
                <div className='eeeee'>
                  <img src='https://thatix.progressionstudios.com/wp-content/uploads/2020/03/pasta-with-salmon-P784PLF.jpg' className='ww'></img>
                </div>
              </div>
            </div>

            <div className='col-lg-2 col-md-4 col-sm-12 '>
              <div>
                <div className='eeeee'>
                  <img src='https://thatix.progressionstudios.com/wp-content/uploads/elementor/thumbs/baked-chicken-breast-9C4F43W-omrrd1tn91eu3rvdg1lqq2eq8c90ltq8nx9y5u5sww.jpg' className='ww'></img>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-12 '>
              <div>
                <div className='eeeee'>
                  <img src='https://thatix.progressionstudios.com/wp-content/uploads/elementor/thumbs/cooked-vegetables-according-to-chinese-recipe-PN2GKUB-omrff2jgxcsv5cfw86lk4kjvmzkfiaqk7pxv13p38g.jpg' className='ww'></img>
                </div>
              </div>
            </div>
          </div></div>
      </div>
    </div>
  )
}

export default ChooseRecipes
