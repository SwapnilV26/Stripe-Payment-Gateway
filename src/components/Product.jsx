import React from "react";
import ProductCard from "./ProductCard";
import Camera from '../../public/images/camera.jpg'
import Ipad from '../../public/images/ipad.jpg'
import Mobile from '../../public/images/mobile.jpg'
import Tab from '../../public/images/tab.jpg'

const Product = () => {
    const products = [
        {
            name: "Nikon",
            image: Camera,
            price: "₹25,000"
        },
        {
            name: "Ipad",
            image: Ipad,
            price: "₹55,000"
        },
        {
            name: "Xiomi",
            image: Mobile,
            price: "₹27,999"
        },
        {
            name: "Tablets",
            image: Tab,
            price: "₹1,25,000"
        },
    ]
  return (
    <div className="flex gap-4">
        {
            products.map((p)=>{
                return <ProductCard item={p} key={p.id} />
            })
        }
    </div>
  );
};

export default Product;
