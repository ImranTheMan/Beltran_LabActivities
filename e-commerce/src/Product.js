import { useState } from "react";
import headsetObj from "./ProductList.js"

export default function Product({
  image,
  brand,
  model,
  price,
  color,
  quantity,
}) {
  // function Product({ shoesObj }) {
  // if (shoesObj.quantity < 10) return null;
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div class="col-md-3">
     
      <div class="product-card">
        <div class="product-card-img">
          {headsetObj.quantity === 0 ? (
            <label className="stock bg-danger"> Out of Stock</label>
          ) : (<label class="stock bg-success">In Stock</label>)}
          
          <img src={image} alt="Shoes" 
            className={${headsetObj.quantity === 0 ? "sold-out":""}}/>
        </div>
        <div class="product-card-body">
          <p class="product-brand">{brand}</p>
          <h5 class="product-name">
            <a href="">{model}</a>
          </h5>
          <p class="product-brand">{color}</p>
          <div>
            <span class="selling-price">PHP{price}</span>
            <span class="original-price">PHP200</span>
          </div>
          <div class="mt-2">
            <button href="" class="btn btn1">
              Add To Cart
            </button>
            <button
              class="btn btn1"
              onClick={() => setIsFavorite((state) => !state)}
            >
              <i class={`fa-${isFavorite ? "solid" : "regular"} fa-heart`}></i>{" "}
            </button>
            <button href="" class="btn btn1">
              {" "}
              View{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}