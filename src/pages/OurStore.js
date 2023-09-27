/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";

function OurStore() {
  const [grid, setGrid] = useState(4);
  const productState = useSelector((state)=> state.product.product)

  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    dispatch(getAllProducts());
  };
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Guitar</li>
                    <li>Piano</li>
                    <li>Drum</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availablity</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label class="form-check-label" htmlFor="">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label class="form-check-label" htmlFor="">
                        Out of Stock
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Availablity</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label class="form-check-label" htmlFor="">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label class="form-check-label" htmlFor="">
                        Out of Stock
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label for="floatingInput">From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput1"
                        placeholder="To"
                      />
                      <label for="floatingInput1">To</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-content-center gap-10">
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">
                      Acoustic
                    </span>
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">
                      Piano
                    </span>
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">
                      Classic
                    </span>
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">
                      Ukulele
                    </span>
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">
                      Capo
                    </span>
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">
                      Acoustic
                    </span>
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">
                      Piano
                    </span>
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">
                      Classic
                    </span>
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">
                      Ukulele
                    </span>
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">
                      Capo
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual" selected="selected">
                        Featured
                      </option>
                      <option value="best-selling" selected="selected">
                        Best Selling
                      </option>
                      <option value="title-ascending" selected="selected">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending" selected="selected">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending" selected="selected">
                        Price, Low to High
                      </option>
                      <option value="price-decending" selected="selected">
                        Price, High to Low
                      </option>
                      <option value="created-ascending" selected="selected">
                        Date, old to new
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="total-products mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/gr.svg"
                        c
                        lassName="d-block img-fluid"
                        a
                        lt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard data={productState} grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStore;
