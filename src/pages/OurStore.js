/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const productState = useSelector((state) => state?.product?.product);
  const [brand, setBrand] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  //Filter State
  const [brands, setBrands] = useState(null);
  const [category, setCategory] = useState(null);
  const [tag, setTag] = useState(null);
  const [minPrice, setMinPrice] = useState(null)
  const [maxPrice, setMaxPrice] = useState(null)
  const [sort, setSort] = useState(null)

  useEffect(() => {
    let newBrand = [];
    let newCategories = [];
    let newTags = [];
    for (let i = 0; i < productState.length; i++) {
      const element = productState[i];
      newBrand.push(element.brands);
      newCategories.push(element.category);
      newTags.push(element.tags);
    }
    setCategories(newCategories);
    setTags(newTags);
    setBrand(newBrand);
  }, [productState]);


  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, [sort, tag, brands, category, minPrice, maxPrice]);
  const getProducts = () => {
    dispatch(getAllProducts({sort, tag, brands, category, minPrice, maxPrice}));
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
                    {categories &&
                      [...new Set(categories)].map((item, index) => (
                        <li key={index} onClick={() => setCategory(item)}>
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput"
                        placeholder="From"
                        onChange={(e)=>setMinPrice(e.target.value)}
                      />
                      <label for="floatingInput">From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput1"
                        placeholder="To"
                        onChange={(e)=>setMaxPrice(e.target.value)}
                      />
                      <label for="floatingInput1">To</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Brands</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-content-center gap-10">
                    {brand &&
                      [...new Set(brand)].map((item, index) => {
                        return (
                          <span
                            key={index}
                            onClick={() => setBrands(brands === item ? null : item)}
                            // className="badge bg-light text-muted fst-italic py-2 px-3"
                             className={`btn ${brands === item ? "btn-primary" : "btn-light"} fst-italic py-2 px-3`}
                          >
                            {item}
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-content-center gap-10">
                    {tags &&
                      [...new Set(tags)].map((item, index) => {
                        return (
                          <span
                            key={index}
                            onClick={() => setTag(tag === item ? null : item)}
                            // className="badge bg-light text-muted fst-italic py-2 px-3"
                            className={`btn ${tag === item ? "btn-primary" : "btn-light"} fst-italic py-2 px-3`}
                          >
                            {item}
                          </span>
                        );
                      })}
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
                    <select name="" className="form-control form-select" id="" onChange={(e)=>setSort(e.target.value)}>
                      <option value="title" selected="selected">
                        Alphabetically, A-Z
                      </option>
                      <option value="-title" selected="selected">
                        Alphabetically, Z-A
                      </option>
                      <option value="price" selected="selected">
                        Price, Low to High
                      </option>
                      <option value="-price" selected="selected">
                        Price, High to Low
                      </option>
                      <option value="created" selected="selected">
                        Date, old to new
                      </option>
                      <option value="-created" selected="selected">
                        Date, new to old 
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
                  <ProductCard
                    data={productState ? productState : []}
                    grid={grid}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
