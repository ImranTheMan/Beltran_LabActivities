import Product from "./Product";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import headsetProducts from "./headsetData.js"
function ProductList() {
  const headset = headsetProducts;
  

  //const headset = [];

  

  return (
    <div className="py-3 py-md-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="mb-4">Our Products</h4>
          </div>
          {/* add product here */}
          {/* {headset.map((headset) => 
          (<Product headsetObj ={headset}/>
          ))} */}
          {headset.map((headset) => ( <Product headsetObj={headset}/>))}
          
        </div>
      </div>
    </div>
  );
}

export default ProductList;