import { useState ,useEffect } from "react";
import ProductCard from "../components/ProductCard";
import './Product.css'


// { title: 'Product1', price: '100', image: 'https://lh3.googleusercontent.com/proxy/LEMBE7nocXH9qY-j5xvVyLU1RKAyZubukXLTBV8BHA6x2HHPZlZ3VTmlLgICgoMXe1NmSDd1HRC75xQtGUaH1ielKDb9yXmU92lwrOnUDh1uYpz-' },
// { title: 'Product2', price: '100', image: 'https://www.shefab.co.il/files/products/product9_image1_2020-08-31_15-17-18.jpg' },
// { title: 'Product3', price: '100', image: 'https://10pri.biz/wp-content/uploads/2020/10/%D7%90%D7%A4%D7%A8%D7%A1%D7%A7-%D7%9C%D7%91%D7%9F.jpg' }

function Product() {
    const [products,setProducts] = useState([ { title: 'Product1', price: '100', image: 'https://lh3.googleusercontent.com/proxy/LEMBE7nocXH9qY-j5xvVyLU1RKAyZubukXLTBV8BHA6x2HHPZlZ3VTmlLgICgoMXe1NmSDd1HRC75xQtGUaH1ielKDb9yXmU92lwrOnUDh1uYpz-' }])

    const [product,setProduct]= useState({})

    const changeHandler=(e)=>{
        product[e.target.name]=e.target.value
        setProduct({...product})
        console.log(product)
    }
    
    const submitHandler=(e)=>{
        e.preventDefault()
        setProducts([...products, {...product}])
        console.log(products);
    }
    const fetchUrl=()=>{
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data=>{
                console.log(data);
                setProducts(data)
            })
    }
    useEffect(()=>{
        fetchUrl()
        },
        [])
    return (
            <div>
                {/* <button onClick={useEffect}>add product</button> */}
                <form onSubmit={submitHandler}>
                    <input onChange={changeHandler} type="text"  name="title"/>
                    <input onChange={changeHandler} type="text"  name="price"/>
                    <input onChange={changeHandler} type="text"  name="image"/>
                    <button type="submit">Add Product</button>
                </form>
                <div className="container">
                 {  products.map((products, index)=> {
                    return <ProductCard product={products} key={index} />})}
                    </div>
            </div>
    )
}

export default Product;