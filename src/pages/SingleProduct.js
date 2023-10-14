/* eslint-disable no-script-url */
/* eslint-disable react-hooks/exhaustive-deps */
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRating, getProduct } from "../features/products/productSlice";
import { addProdToCart, getUserCart } from "../features/user/authSlice";
import { toast } from "react-toastify";

const SingleProduct = () => {
  const [orderProduct, setorderedProduct] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [alreadyAddCart, setAlreadyAddCart] = useState(false);
  const [star, setStar] = useState(null);
  const [comment, setComment] = useState(null);

  const location = useLocation();
  const getProductId = location.pathname.split("/")[2];
  const productState = useSelector((state) => state?.product?.singleproduct);
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userState = useSelector((state) => state?.auth.user)
  const fullname = userState?.firstname + " " + userState?.lastname

  const addRatingToProduct = () => {
    if (star === null) {
      toast.error("Please add star rating");
      return false;
    } else if (comment === null) {
      toast.error("Please Write Review About the Product");
      return false;
    } else {
      dispatch(
        addRating({ star: star, comment: comment, prodId: getProductId, fullname: fullname })
      );
      // setTimeout(() => {
      //   dispatch(getAProduct(getProductId));
      // }, 100);
    }
    return false;
  };
  useEffect(() => {
    getAProduct();
  }, []);

  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductId === cartState[index]?.productId?._id) {
        setAlreadyAddCart(true);
      }
    }
  });
  const getAProduct = () => {
    dispatch(getProduct(getProductId));
    dispatch(getUserCart());
  };

  const uploadCart = () => {
    dispatch(
      addProdToCart({
        productId: productState?._id,
        quantity,
        price: productState?.price,
      })
    );
    setTimeout(() => {
      getAProduct();
    }, 200);
  };

  const props = {
    width: 600,
    height: 600,
    zoomWidth: 600,
    // img: productState?.images[1].url ? productState?.images[1]?.url : "",
    img : "https://nhaccutienmanh.vn/wp-content/uploads/2021/07/dan-guitar-acoustic-yamaha-f-370-33-768x768.jpg"
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
      <BreadCrumb title={productState?.title} />
      <div className="main-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div><ReactImageZoom {...props} /></div>
              </div>
              <div className="other-product-images d-flex gap-30">
              
                <div>
                  {/* {productState &&
                    productState?.images.map((item, index) => {
                      return (
                        <img src="https://nhaccutienmanh.vn/wp-content/uploads/2021/07/dan-guitar-acoustic-yamaha-f-370-33-768x768.jpg" className="img-fluid" alt="" />
                      );
                    })} */}
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">{productState?.title}</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price"> $ {productState?.price}</p>
                  <div className="d-flex align-items-ceter gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={productState?.totalrating?.toString()}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    {/* <p className="mb-0 t-review">(2 Reviews)</p> */}
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
                    <p class="product-data">{productState?.brand}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 mb-3">
                    <h3 className="product-heading">Category: </h3>
                    <p class="product-data">{productState?.category}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 mb-3">
                    <h3 className="product-heading">Tags: </h3>
                    <p class="product-data">{productState?.tags}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 mb-3">
                    <h3 className="product-heading">Available: </h3>
                    <p class="product-data">IN Stock</p>
                  </div>
                  <div className="d-flex gap-15 align-items-center flex-row my-2 mb-3">
                    {alreadyAddCart === false && (
                      <>
                        <h3 className="product-heading">Quantity: </h3>
                        <div>
                          <input
                            type="number"
                            name=""
                            min={1}
                            max={10}
                            className="form-control"
                            style={{ width: "60px", height: "35px" }}
                            onChange={(e) => setQuantity(e.target.value)}
                            value={quantity}
                          />
                        </div>
                      </>
                    )}
                    <div
                      className={
                        alreadyAddCart
                          ? "mb-0"
                          : "d-flex align-item-center gap-15 ms-2"
                      }
                    >
                      <button
                        className="button border-0"
                        type="button"
                        onClick={() => {
                          alreadyAddCart ? navigate("/cart") : uploadCart();
                        }}
                      >
                        {alreadyAddCart ? "Go to cart" : "Add to cart"}
                      </button>
                      {/* <button className="button signup">Buy It Now</button> */}
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
                <p
                  className="desc"
                  dangerouslySetInnerHTML={{
                    __html: productState?.description,
                  }}
                ></p>
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

                  <div className="">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={true}
                      activeColor="#ffd700"
                      onChange={(e) => {
                        setStar(e);
                      }}
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
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      onClick={addRatingToProduct}
                      className="button border-0"
                      type="submit"
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
                <div className="reviews mt-4">
                  {productState &&
                    productState?.ratings1?.map((item, index) => {
                      return (
                        <div key={index} className="review">
                          <div className="d-flex gap-10 align-items-center">
                            <h6 className="mb-0">({item?.fullname})</h6>
                            <ReactStars
                              count={5}
                              size={24}
                              value={item?.star}
                              edit={false}
                              activeColor="#ffd700"
                            />
                          </div>
                          <p className="mt-3">{item?.comment}</p>
                        </div>
                      );
                    })}
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
