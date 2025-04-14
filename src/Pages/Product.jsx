import React from 'react'
import { useContext } from "react";
import { useParams } from 'react-router-dom';
import Bredcrum from '../Components/Breadcrum/Bredcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import { ShopContext } from '../Context/ShopContext';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} =useParams()
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Bredcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
