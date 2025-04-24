import React from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { cartMethod } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function Product({ product }) {
  const dispatch = useDispatch();
  const addToCartHandler = (product) => {
    dispatch(cartMethod({product,type:'add'}));
    toast.success("added to cart");
  };
  return (
    <div className="bg-gray-300 w-72 px-4 py-2 rounded-md">
      <Link to={`${product.id}`}>
      <img
        className="w-72 h-64"
        src={product.images[0] || product.thumbnail}
        alt={product.title}
      />
      </Link>
      <div className="flex flex-col">
        <div className="text-lg font-semibold">{product.title}</div>
        <div>{product.description.substring(0, 20) + "..."}</div>
        <div className="flex justify-between my-1">
          <span className="text-sm px-2 border-2 rounded-md">
            {product.category.substring(0,8)}...
          </span>
          <span>
            {" "}
            <del className="text-red-700/60">
              {product.discountPercentage}%
            </del>{" "}
            <span className="text-green-700">RS. {product.price}</span>
          </span>
        </div>
        <div className="flex justify-between items-baseline my-1">
          <div
            className={`${
              product.stock > 10 ? "text-green-700/60" : "text-red-700/60"
            }`}
          >
            Stock : {product.stock}
          </div>
          <button
            onClick={() => addToCartHandler(product)}
            className="border-2 px-4 py-2 z-50"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;

// {
// "id": 1,
// "title": "Essence Mascara Lash Princess",
// "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
// "category": "beauty",
// "price": 9.99,
// "discountPercentage": 7.17,
// "rating": 4.94,
// "stock": 5,
// "tags": [
// "beauty",
// "mascara"
// ],
// "brand": "Essence",
// "sku": "RCH45Q1A",
// "weight": 2,
// "dimensions": {
// "width": 23.17,
// "height": 14.43,
// "depth": 28.01
// },
// "warrantyInformation": "1 month warranty",
// "shippingInformation": "Ships in 1 month",
// "availabilityStatus": "Low Stock",
// "reviews": [
// {
// "rating": 2,
// "comment": "Very unhappy with my purchase!",
// "date": "2024-05-23T08:56:21.618Z",
// "reviewerName": "John Doe",
// "reviewerEmail": "john.doe@x.dummyjson.com"
// },
// {
// "rating": 2,
// "comment": "Not as described!",
// "date": "2024-05-23T08:56:21.618Z",
// "reviewerName": "Nolan Gonzalez",
// "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
// },
// {
// "rating": 5,
// "comment": "Very satisfied!",
// "date": "2024-05-23T08:56:21.618Z",
// "reviewerName": "Scarlett Wright",
// "reviewerEmail": "scarlett.wright@x.dummyjson.com"
// }
// ],
// "returnPolicy": "30 days return policy",
// "minimumOrderQuantity": 24,
// "meta": {
// "createdAt": "2024-05-23T08:56:21.618Z",
// "updatedAt": "2024-05-23T08:56:21.618Z",
// "barcode": "9164035109868",
// "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
// },
// "images": [
// "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
// ],
// "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
// }
