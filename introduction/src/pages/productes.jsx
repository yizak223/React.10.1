import { useState } from "react";
import ProductCard from '../components/ProductCard'
export default  function Products() {
    const [products,setProducts]= useState(
        [
        {title:'bicycle2',price:6343,image:'https://speedofun.com/wp-content/uploads/2018/02/TIGER-GREEN.jpg'},
        {title:'bicycle3',price:231,image:'https://softride.co.il/wp-content/uploads/2023/02/Cobra-Jet_04112022012205.jpg'},
        {title:'bicycle3',price:254,image:'https://d3m9l0v76dty0.cloudfront.net/system/photos/4475685/large/f54a17c1e32afdfc1589b0e1913a1718.jpg'},
    ])
    return (
        <div>
           {products.map((product,i) =>{
            return (
                <ProductCard product={product} key={i} />
            )
           })}
        </div>
    )
}