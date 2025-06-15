function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <div className="info">
        <h2>{product.title}</h2>
        <p>{product.price}</p>
        <button>Buy Now</button>
      </div>
    </div>
  )
}

export default ProductCard

