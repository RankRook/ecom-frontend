/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/authSlice";
import Container from "../components/Container";
import { Link } from "react-router-dom";
const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state?.auth?.getOrderedProduct);
  const [shippingInfo, setShippingInfo] = useState([]);
  const [orderNumber, setOrderNumber] = useState(1);
  useEffect(() => {
    getUserOrders();
  }, []);
  const getUserOrders = () => {
    dispatch(getOrders());
  };
  useEffect(() => {
    if (orderState && orderState.length > 0) {
      const newShippingInfo = orderState.map((order) => {
        const { country, address, city } = order?.shippingInfo || {};
        return `${country}, ${city}, ${address}`;
      });
      setShippingInfo(newShippingInfo);
    }
  }, [orderState]);

  return (
    <>
      <BreadCrumb title="My Orders" />
      <Container class="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          {Array.isArray(orderState) &&
            orderState?.map((item, index) => {
              const shipInfo = shippingInfo[index];
              const currentOrderNumber = orderNumber + index;
              return (
                <div class="mt-4 mb-4" key={index}>
                  <table class="m-0 table table-sm table-bordered">
                    <thead>
                      <tr class="text-center">
                        <th class="w-10 bg-danger align-middle">Đơn hàng</th>
                        <th class="w-15  bg-danger align-middle">Ngày</th>
                        <th class=" bg-danger align-middle">Địa chỉ </th>
                        <th class="w-20 bg-danger align-middle">
                          Giá trị đơn hàng{" "}
                        </th>
                        <th class="w-20  bg-danger align-middle">
                          TT thanh toán
                        </th>
                      </tr>
                    </thead>
                    <tbody class=" position-relative">
                      <tr class="text-center">
                        <td class="align-middle text-info cursor p-2">
                          <Link to={`/order/${item?._id}`}>
                            <span class="text-nowrap">
                              #{currentOrderNumber}
                            </span>
                          </Link>
                        </td>
                        <td class="align-middle p-2">
                          {new Date(item?.createdAt).toLocaleString()}{" "}
                        </td>
                        <td class="align-middle p-2">{shipInfo}, </td>
                        <td class="align-middle p-2">
                          {item?.totalPriceAfterDiscount}&nbsp;VND
                        </td>
                        <td class="align-middle p-2">
                          <button
                            type="button"
                            class=" text-uppercase btn btn-success btn-xs w-10"
                          >
                            <span class="flex-center">
                              {item?.isPaid ? "Complete" : "Pending"}
                            </span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
        </div>
      </Container>
    </>
  );
};

export default Orders;
