/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import ReactStars from "react-stars";
import { addToWishlist } from "../features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllBLogs } from "../features/blogs/blogSlice";
import { getAllProducts } from "../features/products/productSlice";

const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state.product.product);
  const navigate = useNavigate();
  console.log(productState);
  const dispatch = useDispatch();

  useEffect(() => {
    getBlogs();
    getProducts();
  }, []);

  const getBlogs = () => {
    dispatch(getAllBLogs());
  };

  const getProducts = () => {
    dispatch(getAllProducts());
  };

  let location = useLocation();

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <>
      <Meta title={"Blogs"} />
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src="images\main-banner-2.jpg"
                  class="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHANGED FOR PROS</h4>
                  <h5>Guitars LakeWood</h5>
                  <p></p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items">
                <div className="small-banner position-relative">
                  <img
                    src="images\catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHANGED FOR PROS</h4>
                    <h5>Guitars LakeWood</h5>
                    <p>From $999</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images\catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHANGED FOR PROS</h4>
                    <h5>Guitars LakeWood</h5>
                    <p>From $999</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images\catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHANGED FOR PROS</h4>
                    <h5>Guitars LakeWood</h5>
                    <p>From $999</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images\catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
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

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all order over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Superise Offers</h6>
                    <p className="mb-0">Save up to 25%</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justifu-content-between align-items-center">
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images\camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images\tv.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images\tv.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images\camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images\camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images\tv.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images\tv.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images\camera.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row ">
            {productState &&
              productState?.map((item, index) => {
                if (index < 4) {
                  if (item.tags === "featured") {
                    return (
                      <div key={index} className={`${"col-3"}`}>
                        <Link className="product-card position-relative">
                          <div className="wishlist-icon position-absolute">
                            <button
                              className="border-0 bg-transparent"
                              onClick={(e) => {
                                addToWish(item?._id);
                              }}
                            >
                              <img src="images/wish.svg" alt="wishlist" />
                            </button>
                          </div>
                          <div className="product-image ">
                            <img
                              src={item?.images?.[0]?.url}
                              className="img-fluid"
                              alt="product-image"
                            />
                            <img
                              src={item?.images?.[1]?.url}
                              className="img-fluid"
                              alt="product image"
                            />
                          </div>
                          <div className="product-details">
                            <h6 className="brand">{item?.brand}</h6>
                            <h5 className="product-title">{item?.title}</h5>
                            <ReactStars
                              count={5}
                              size={24}
                              value={item?.totalRating?.toString()}
                              edit={false}
                              activeColor="#ffd700"
                            />
                            <p className="price">$ {item?.price}</p>
                          </div>
                          <div className="action-bar position-absolute">
                            <div className="d-flex flex-column gap-15">
                              <Link>
                                <img
                                  src="images/prodcompare.svg"
                                  alt="compare"
                                />
                              </Link>
                              <Link>
                                <img
                                  onClick={() =>
                                    navigate("/product/" + item?._id)
                                  }
                                  src="images/view.svg"
                                  alt="view"
                                />
                              </Link>
                              <Link>
                                <img src="images/add-cart.svg" alt="add cart" />
                              </Link>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  }
                }
              })}
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row ">
            {productState &&
              productState?.map((item, index) => {
                if (index < 4) {
                  if (item.tags === "special") {
                    return (
                      <SpecialProduct
                        key={index}
                        id={item?._id}
                        brand={item?.brand}
                        title={item?.title}
                        quantity={item?.quantity}
                        price={item?.price}
                        totalrating={item?.totalrating.toString()}
                      />
                    );
                  }
                }
              })}
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <div className="row ">
              {productState &&
                productState?.map((item, index) => {
                  if (index < 4) {
                    // if (item.tags === "popular") {
                    return (
                      <div key={index} className={`${"col-3"}`}>
                        <Link className="product-card position-relative">
                          <div className="wishlist-icon position-absolute">
                            <button
                              className="border-0 bg-transparent"
                              onClick={(e) => {
                                addToWish(item?._id);
                              }}
                            >
                              <img src="images/wish.svg" alt="wishlist" />
                            </button>
                          </div>
                          <div className="product-image ">
                            <img
                              src={item?.images?.[0]?.url}
                              className="img-fluid"
                              alt="product-image"
                            />
                            <img
                              src={item?.images?.[1]?.url}
                              className="img-fluid"
                              alt="product image"
                            />
                          </div>
                          <div className="product-details">
                            <h6 className="brand">{item?.brand}</h6>
                            <h5 className="product-title">{item?.title}</h5>
                            <ReactStars
                              count={5}
                              size={24}
                              value={item?.totalRating?.toString()}
                              edit={false}
                              activeColor="#ffd700"
                            />
                            <p className="price">$ {item?.price}</p>
                          </div>
                          <div className="action-bar position-absolute">
                            <div className="d-flex flex-column gap-15">
                              <Link>
                                <img
                                  src="images/prodcompare.svg"
                                  alt="compare"
                                />
                              </Link>
                              <Link>
                                <img
                                  onClick={() =>
                                    navigate("/product/" + item?._id)
                                  }
                                  src="images/view.svg"
                                  alt="view"
                                />
                              </Link>
                              <Link>
                                <img src="images/add-cart.svg" alt="add cart" />
                              </Link>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                    // }
                  }
                })}
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-wrapper py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper bg-white p-3 card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/taylor-1.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/lakewood-1.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            {blogState &&
              // eslint-disable-next-line array-callback-return
              blogState.map((item, index) => {
                if (index < 4) {
                  return (
                    <div className="col-3 " key={index}>
                      <BlogCard
                        id={item?._id}
                        title={item?.title}
                        description={item?.description}
                        image={item?.images[0]?.url}
                      />
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
