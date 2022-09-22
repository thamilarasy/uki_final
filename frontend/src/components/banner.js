import React, { Fragment } from 'react'

const Banner = () => {
    return (
        <>
      <div className='header-color '>
        <div className='container py-5'>
          <div className='bannerComponent'>
          <div className='row'>
            {/* <div className='col-5 '> */}
              <img style={{width:'1000%', height:'100%',  objectFit: 'cover'}}
                src='https://www.localsamosa.com/wp-content/uploads/2021/09/coconut-products.jpg' class="img-fluid"
                alt=''              
                width={"500"} 
              />
            </div>
            <div className='bannerText'>
            <div className='col-7  my-auto pb-5'>
              <h3 className='fw-light'>Shop Now</h3>
              <h1 className='fw-bold  display-5'>BROWSE OUR PRODUCTS</h1>
              <p>
              Cococart. through its website will create a huge market opportunity for 
              coconut buyers and sellers while using the whole coconut. 

              </p>
              {/* <button className='btn btn-info rounded-pill mt-3'>
                Browse Now
              </button> */}
            </div>
            </div>
          </div>
        
            
          </div>
        {/* </div> */}
      </div>
    </>
    )
}

export default Banner
