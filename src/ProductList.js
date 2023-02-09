import React, { useState, useEffect, useContext } from 'react'
import logo from './React-icon.png'
import styles from './ProductList.module.css'
import { Link } from 'react-router-dom'
import Title from './Title'
import QuantityBtn from './QuantityBtn'


export default function ProductList() {

    let [productList, setProductList] = useState([]);
    // let [input, setInput] = useState('');

    useEffect(() => {
        fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
            .then(response => response.json())
            .then(data => setProductList(data));
        console.log(productList);
    }, []);

    // let product = '水果';
    // const [product,setProduct] = useState('水果');
    // const handleClick = () => {
    //     setProduct('react');
    //     console.log(product);
    // }

    // const [showProduct, setShowProduct] = useState(true);

    // console.log(productList);

    // useEffect(() => {
    //     console.log(input)
    // }, [input]);

    return (
        <>
            {/* {showProduct && <button onClick={()=>{setShowProduct(false)}}>隱藏產品</button>}
            {!showProduct && <button onClick={()=>{setShowProduct(true)}}>顯示產品</button>} */}
            {/* <button onClick={()=>setProductList('change')}>change</button> */}
            {/* <input type='text' onChange={e => setInput(e.target.value)}></input> */}
            <Title mainTitle={"Please select the product"}></Title>
            <div className="container">
                {
                    // showProduct && 
                    productList.map((product) => {
                        return (
                            <React.Fragment key={product.id}>
                                <div className="containerItem" >
                                    <Link to={'/product/' + product.id} >
                                        <img src={process.env.PUBLIC_URL + '/img/' + product.image} /><br />
                                    </Link>
                                    <div className="productName">
                                        {product.name}  -  {product.price}元/件
                                    </div>
                                    <QuantityBtn productInfo={product} />
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </>
    )
}
