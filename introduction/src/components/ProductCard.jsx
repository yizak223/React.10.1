
function ProductCard(props) {
            return (
                <div>
                    <h1>{props.product.title}</h1>
                    <h2>{props.product.price}</h2>
                    <img src={props.product.image} alt="" />
                </div>
    )
}
export default ProductCard