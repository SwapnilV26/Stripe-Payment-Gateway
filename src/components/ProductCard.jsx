import Image from "next/image";
import Link from "next/link";
import React from "react";


const ProductCard = ({item}) => {
  console.log(item)
  return (
    <div className="w-[330px] h-[450px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4">
        <Image
          className="rounded-lg"
          src={item.image}
          alt="Product"
          objectFit="contain"
          width={300}
          height={250}
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.name}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {item.price}
        </p>

        <Link
          href="/payment"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;