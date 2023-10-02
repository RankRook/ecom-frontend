/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-stars";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import ReactImageZoom from "react-image-zoom";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProduct } from "../features/products/productSlice";

const SingleProduct = () => {
  const [orderProduct, setorderedProduct] = useState(true);
  const location = useLocation()
  const getProductId = location.pathname.split("/")[2]
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProduct(getProductId))
  })
  const props = {
    zoomWidth: 600,
    img: "https://thelightmusic.net/wp-content/uploads/2020/04/267896bf64449d1ac455_49268178378_o.jpg",
  };
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title={"Dynamic Product Name"} />
      <BreadCrumb title="Dynamic Product Name" />
      <div className="main-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex gap-15">
                <div>
                  <img
                    src="https://thelightmusic.net/wp-content/uploads/2020/04/267896bf64449d1ac455_49268178378_o.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://thelightmusic.net/wp-content/uploads/2020/04/267896bf64449d1ac455_49268178378_o.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://thelightmusic.net/wp-content/uploads/2020/04/267896bf64449d1ac455_49268178378_o.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://thelightmusic.net/wp-content/uploads/2020/04/267896bf64449d1ac455_49268178378_o.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Guitar LakeWood SungHa Jung</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price"> $ 100</p>
                  <div className="d-flex align-items-ceter gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(2 Reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2 mb-3">
                    <h3 className="product-heading">Type: </h3>
                    <p class="product-data">Hello hello</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 mb-3">
                    <h3 className="product-heading">Brand: </h3>
                    <p class="product-data">Hello hello</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 mb-3">
                    <h3 className="product-heading">Category: </h3>
                    <p class="product-data">Hello hello</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 mb-3">
                    <h3 className="product-heading">Tags: </h3>
                    <p class="product-data">Hello hello</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 mb-3">
                    <h3 className="product-heading">Available: </h3>
                    <p class="product-data">IN Stock</p>
                  </div>
                  <div className="d-flex gap-15 align-items-center flex-row my-2 mb-3">
                    <h3 className="product-heading">Quantity: </h3>
                    <div>
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: "60px", height: "35px" }}
                      />
                    </div>
                    <div className="d-flex align-item-center gap-15 ms-2">
                      <button className="button border-0">Add to cart</button>
                      <button className="button signup">Buy It Now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        <TbGitCompare className="fs-5 me-2" />
                        Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2" />
                        Add to WishList
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Shipping & Returns:</h3>
                    <p class="product-data">
                      Free Shipping and returns available on all orders!
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Copy Product Link </h3>
                    <p class="product-data">
                      <a
                        href="javascript:void(0);"
                        onClick={() => {
                          copyToClipboard(
                            "https://thelightmusic.net/wp-content/uploads/2020/04/267896bf64449d1ac455_49268178378_o.jpg"
                          );
                        }}
                      >
                        Copy Product Link
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-̀5 home-wrapper-2">
        <div className="container-xxl">
          <div class="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  nemo consequuntur quaerat. Eos laboriosam obcaecati cumque
                  unde! Natus, voluptas similique totam corporis explicabo,
                  alias atque officia suscipit repellendus numquam quos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Reviews</h4>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                  <div>
                    {orderProduct && (
                      <div>
                        <a
                          className="text-dark text-decoration-underline"
                          href="/"
                        >
                          Write a review
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <div id="review" className="review-form py-4">
                  <h4 className="mb-2">Write A Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div className="">
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        row="10"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Hien Dep trai</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Illo placeat molestias porro. Error, illum. Eveniet
                      laborum ipsa consequuntur voluptates corporis possimus,
                      neque reprehenderit doloremque iste officia totam aliquam
                      accusantium mollitia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper  home-wrapper-2">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
