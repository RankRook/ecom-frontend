/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getOrder, getOrderDetail } from "../features/user/authSlice";
import Container from "../components/Container";
import { useLocation } from "react-router-dom";

const OrderDetail = () => {
  const dispatch = useDispatch();
  const [shippingInfo, setShippingInfo] = useState([]);
  const location = useLocation();
  console.log(location);
  const orderId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(getOrder(orderId));
  }, []);

  const orderState = useSelector((state) => state?.auth?.getSingleOrdered);

  return (
    <>
      <BreadCrumb title="My OrderDetail" />
      <Container class="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div class="col-rg-12 mb-5">
            <div class="d-flex justify-content-between mt-md-5">
              <span> Order Details #{orderState?._id}</span>
              <span>
                Created At: {new Date(orderState?.createdAt).toLocaleString()}{" "}
              </span>
            </div>
            <div class="d-flex gap-5 mt-3 ">
              <span>
                {" "}
                Payment Status:{" "}
                <span class="text-danger">
                  {orderState?.isPaid ? "Complete" : "Pending"}
                </span>
              </span>
              <span class="d-flex gap-2">
                {" "}
                <span> Order Status: </span>
                <span class="text-primary fw-bold">
                  <span class="flex-center text-success">
                    {orderState?.orderStatus}
                  </span>
                </span>
              </span>
            </div>
            <div class="d-flex gap-3 mt-3">
              <div class="row">
                <div class="col-12">
                  <span>SHIPPING ADDRESS</span>
                  <div class="border px-2 py-2 h-75 d-flex flex-column gap-1 pb-3 fw-light text-size-16">
                    <span>
                      Address: {orderState?.shippingInfo?.address},{" "}
                      {orderState?.shippingInfo?.city},{" "}
                      {orderState?.shippingInfo?.country}
                    </span>
                    <span>
                      Phone: {orderState?.shippingInfo?.mobile}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="table-order-detail">
              <table class="m-0 table table-sm">
                <thead>
                  <tr class="text-center">
                    <th class="w-10 text-start align-middle">Product</th>
                    <th class="w-15   align-middle">Unit Price</th>
                    <th class="  align-middle">Quantity</th>
                    <th class="w-20  align-middle">Total</th>
                  </tr>
                </thead>
                <tbody class=" position-relative">
                  {orderState?.orderItems.map((item, index) => {
                    return (
                      <tr class="" key={index}>
                        <td class="cursor w-50 py-3">
                          <div>
                            <div class="row">
                              <div class="col-2">
                                <img
                                  src={item?.product?.images[0]?.url}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div class="d-flex flex-column align-content-center mt-2 col-10">
                                <div>
                                  {item?.product.title}
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="align-middle text-center p-2">
                          {item?.price} $
                        </td>
                        <td class="align-middle text-center p-2 ">
                          {item?.quantity}
                        </td>
                        <td class="align-middle text-center p-2">
                          {item?.price * item?.quantity} $
                        </td>
                      </tr>
                    );
                  })}
                  <tr class="">
                    <td class="cursor w-50 py-3"></td>
                    <td class="align-middle text-center p-2">
                      <div class="d-flex flex-column gap-3 text-end text-size-15 fw-light">
                        <span>Discount </span>
                        <span>Shipping Fee </span>
                        <span>Total Amount </span>
                      </div>
                    </td>
                    <td class="align-middle text-end p-2 " colspan="2">
                      <div class="d-flex flex-column gap-3">
                        <span>0$</span>
                        <span>5$ (Home Delivery)</span>
                        <span class="text-danger text-size-20 fw-bold">
                          {orderState?.totalPriceAfterDiscount}$
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OrderDetail;
