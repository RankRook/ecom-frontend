import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'

function ProductCard() {
    return (
        <div className='col-3'>
            <Link className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link>
                    <img src="images/wish.svg" alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image ">
                    <img src="images/watch.jpg" className="img-fluid" alt="product image" />
                    <img src="images/watch.jpg"className="img-fluid"  alt="product image" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphone bulk 10 pack
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700" />
                    <p className="price">$100</p>
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
    )
}

export default ProductCard
