export function ProductsShow(props) {
  return (
    <div>
      <h1>Product Info</h1>
      <p>{props.product.title}</p>
      <img src={props.product.image} width={150} />
      <p>{props.product.description}</p>
    </div>
  );
}