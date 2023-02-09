import React, { useState, useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import QuantityBtn from './QuantityBtn';
import Title from './Title';

export default function ProductDetail() {
  let params = useParams();
  let [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
      .then(response => response.json())
      .then(data => {
        let productInfo = data.find((element) => {
          return element.id === parseInt(params.id);
        });
        setProductDetail(productInfo);
      });
  }, []);

  return (
    <div>
      {
        productDetail &&
        <div className="ProductDetail">
          <Title mainTitle={productDetail.name + " Product Detail"}></Title>
          <table width="100%">
            <tbody>
              <td align="right">
                <img src={process.env.PUBLIC_URL + '/img/' + productDetail.image} alt={productDetail.name} width="400" />
              </td>
              <td width="45%" padding="10">
                <p>名稱 : {productDetail.name}</p>
                <p>售價 : {productDetail.price}元</p>
                <p>描述 : {productDetail.description}</p><br />
                <QuantityBtn productInfo={productDetail} />
              </td>
            </tbody>
          </table>
        </div>
      }
      <Link to={'/'}><div className="backToGoodsListBtn">↩️ 返回商品列表</div></Link>
    </div>
  )
}
