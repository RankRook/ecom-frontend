import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src="images\main-banner-2.jpg"
                  class='img-fluid rounded-3'
                  alt="main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHANGED FOR PROS</h4>
                  <h5>Guitars LakeWood</h5>
                  <p></p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items">
                <div className="small-banner position-relative">
                  <img
                    src="images\catbanner-01.jpg"
                    className='img-fluid rounded-3'
                    alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHANGED FOR PROS</h4>
                    <h5>Guitars LakeWood</h5>
                    <p>From $999</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images\catbanner-02.jpg"
                    className='img-fluid rounded-3'
                    alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHANGED FOR PROS</h4>
                    <h5>Guitars LakeWood</h5>
                    <p>From $999</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images\catbanner-03.jpg"
                    className='img-fluid rounded-3'
                    alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHANGED FOR PROS</h4>
                    <h5>Guitars LakeWood</h5>
                    <p>From $999</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images\catbanner-04.jpg"
                    className='img-fluid rounded-3'
                    alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHANGED FOR PROS</h4>
                    <h5>Guitars LakeWood</h5>
                    <p>From $999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home