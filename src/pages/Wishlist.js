import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
function Wishlist() {
  return (
    <>
      <Meta title={"Wish List"} />
      <BreadCrumb title="Wish List" />
      <div className="compare-wishlist-wrapper py-2 home-wrapper-2">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-3 mb-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="wishlist-details">
                  <h5 className="title">Honor T1 8GB Ram</h5>
                  <h6 className="price mb-3 mt-3">$ 100</h6>
                  <div className="wishlist-detail">
                    <div className="availability">
                      <h5>Availability:</h5>
                      <p>In Stock</p>
                    </div>
                    <Link className="button">Add to Cart</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 mb-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="wishlist-details">
                  <h5 className="title">Honor T1 8GB Ram</h5>
                  <h6 className="price mb-3 mt-3">$ 100</h6>
                  <div className="wishlist-detail">
                    <div className="availability">
                      <h5>Availability:</h5>
                      <p>In Stock</p>
                    </div>
                    <Link className="button">Add to Cart</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 mb-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="wishlist-details">
                  <h5 className="title">Honor T1 8GB Ram</h5>
                  <h6 className="price mb-3 mt-3">$ 100</h6>
                  <div className="wishlist-detail">
                    <div className="availability">
                      <h5>Availability:</h5>
                      <p>In Stock</p>
                    </div>
                    <Link className="button">Add to Cart</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 mb-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="wishlist-details">
                  <h5 className="title">Honor T1 8GB Ram</h5>
                  <h6 className="price mb-3 mt-3">$ 100</h6>
                  <div className="wishlist-detail">
                    <div className="availability">
                      <h5>Availability:</h5>
                      <p>In Stock</p>
                    </div>
                    <Link className="button">Add to Cart</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 mb-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="wishlist-details">
                  <h5 className="title">Honor T1 8GB Ram</h5>
                  <h6 className="price mb-3 mt-3">$ 100</h6>
                  <div className="wishlist-detail">
                    <div className="availability">
                      <h5>Availability:</h5>
                      <p>In Stock</p>
                    </div>
                    <Link className="button">Add to Cart</Link>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
