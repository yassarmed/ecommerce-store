export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      {props.products.map((product) => (
         <div key={product.id}>
           <h2>{product.name}</h2>
           <img src={product.image} width={60} />
           <p>{product.description}</p>
           <p> {product.category}</p>
           <button onClick={() => props.onShowProduct(product)}>More info</button>
         </div>
       ))}

    </div>
  );
}