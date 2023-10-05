/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  getUserCart,
  deleteProductCart,
  updateCartProduct,
} from "../features/user/authSlice";

const Cart = () => {
  const [prodUpdateDetail, setProdUpdateDetail] = useState(null);
   const [totalAmount, setTotalAmount] = useState(null);
  const userCartState = useSelector((state) => state?.auth?.cartProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (prodUpdateDetail !== null) {
      dispatch(
        updateCartProduct({
          cartItemId: prodUpdateDetail?.cartItemId,
          quantity: prodUpdateDetail?.quantity,
        })
      );
      setTimeout(() => {
        dispatch(getUserCart());
      }, 100);
    }
  }, [prodUpdateDetail]);

  useEffect(() => {
    dispatch(getUserCart());
  }, []);
  const deleteACartProduct = (id) => {
    dispatch(deleteProductCart(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 100);
  };

  useEffect(()=>{
    let sum = 0;
    for(let index = 0; index < userCartState?.length; index ++){
      sum = sum +(Number(userCartState[index].quantity) * userCartState[index].price)
      setTotalAmount(sum)
    }
  },[userCartState])

  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              {Array.isArray(userCartState) &&
                userCartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
                    >
                      <h4 className="cart-col-1 gap-15 d-flex align-items-center">
                        <div className="w-25">
                          <img
                            src="https://thelightmusic.net/wp-content/uploads/2020/04/267896bf64449d1ac455_49268178378_o.jpg"
                            className="img-fluid"
                            alt="product img"
                          />
                        </div>
                        <div className="w-75">
                          <p className="title">{item?.productId?.title}</p>
                        </div>
                      </h4>
                      <h4 className="cart-col-2">
                        <h5 className="price">${item?.productId?.price}</h5>
                      </h4>
                      <h4 className="cart-col-3 d-flex align-items-center gap-15">
                        <div>
                          <input
                            className="form-control"
                            type="number"
                            min={1}
                            max={10}
                            value={
                              prodUpdateDetail?.quantity
                                ? prodUpdateDetail?.quantity
                                : item?.quantity
                            }
                            onChange={(e) => {
                              setProdUpdateDetail({
                                cartItemId: item?._id,
                                quantity: e.target.value,
                              });
                            }}
                            name=""
                            id=""
                          />
                        </div>
                        <div>
                          <AiFillDelete
                            onClick={() => {
                              deleteACartProduct(item?._id);
                            }}
                            className="text-danger "
                          />
                        </div>
                      </h4>
                      <h4 className="cart-col-4">
                        $ {item?.price * item?.quantity}
                      </h4>
                    </div>
                  );
                })}
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button">
                  Continue To Shopping
                </Link>
                {
                  (totalAmount !== null || totalAmount !==0 ) && 
                  <div className="d-flex flex-column align-items-end">
                  <h4>SubTotal: $ {totalAmount}</h4>
                  <p>Taxes and Shipping calculated at checkout</p>
                  <Link to="/checkout" className="button">
                    CheckOut
                  </Link>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
