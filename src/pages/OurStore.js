import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function OurStore() {
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
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">Acoustic</span>
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">Piano</span>
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">Classic</span>
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">Ukulele</span>
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">Capo</span>
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">Acoustic</span>
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">Piano</span>
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">Classic</span>
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">Ukulele</span>
                    <span className="badge bg-light text-muted fst-italic  py-2 px-3">Capo</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-g"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStore;
