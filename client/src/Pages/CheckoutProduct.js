import React from 'react';

const CheckoutProduct = ({ id, title, image, rating, price, actionType, onRemove }) => {
    return (
        <div className="product-item card p-3 shadow-sm d-flex justify-content-center flex-column align-items-center">
            <h4>{title}</h4>
            <strong>Rs. {price}</strong>
            <p>
                {Array(rating).fill().map((_, i) => (
                    <span key={i}>⭐</span>
                ))}
            </p>
            <div className="product-image d-flex justify-content-center align-items-center">
                <img
                    src={image}
                    className="card-img-top img-fluid"
                    alt={title}
                    style={{ width: "250px", height: "250px" }}
                />
            </div>

            {/* Conditional Button Rendering */}
            {actionType === "remove" ? (
                <button
                    className='btn btn-danger mt-3'
                    onClick={onRemove} // Remove function ko handle karna hai
                >
                    Remove Product
                </button>
            ) : (
                <button
                    className='btn btn-warning mt-3'
                >
                    Add Product
                </button>
            )}
        </div>
    );
};

export default CheckoutProduct;
