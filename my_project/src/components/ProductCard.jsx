
function ProductCard(props){
    return(
        <div className="product-card">
            <h1 className="product-title">{props.product.title}</h1>
            <h2 className="product-price">{props.product.price}</h2>
            <img className="product-image" src={props.product.image} alt="" />
        </div>
    )
}

export default ProductCard