/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-stars";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";

const ProductCard = (props) => {
  const { grid, data } = props;
  console.log(data)
  const dispatch = useDispatch();
  let location = useLocation();

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  // if (!Array.isArray(data)) {
  //   return <p>No product data available.</p>; // You can render an error message or handle it as needed.
  // }
  return (
    <>
      {data &&
        data?.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                location.pathname === "/product" ? `gr-${grid}` : "col-3"
              }`}
            >
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
                  <p
                    className={`description ${
                      grid === 12 ? "d-block" : "d-none"
                    }`}
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></p>
                  <p className="price">$ {item?.price}</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    <Link>
                      <img src="images/prodcompare.svg" alt="compare" />
                    </Link>
                    <Link>
                      <img src="images/view.svg" alt="view" />
                    </Link>
                    <Link>
                      <img src="images/add-cart.svg" alt="add cart" />
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default ProductCard;
