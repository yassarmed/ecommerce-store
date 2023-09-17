export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      {props.products.map((product) => (
         <div key={product.id}>
           
           <img src={product.image} width={60} />
           <button onClick={() => props.onShowProduct(product)}>More info</button>
         </div>
       ))}

    </div>
  );
}