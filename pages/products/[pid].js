import Image from "next/image";
import React from "react";

const SingleProduct = ({ product }) => {
  if (!product) {
    return <div>Loading....</div>;
  }
  return (
    <div className="flex flex-col justify-center items-center mt-5 mb-20">
      <h3 className="mb-20 text-4xl">{product.title}</h3>
      <div className="flex justify-between items-center px-3 w-7/12">
        <Image
          src={product.image}
          alt="product"
          width={400}
          height={400}
          className=" w-96 h-96"
        />
        <div className="w-96 h-96">
          <p className=" text-2xl text-blue-800">
            Price: ${product.price}
          </p>
          <div className="flex mt-10 items-center">
            <button className="px-3 w-32 hover:bg-red-400 py-1 rounded-3xl h-10 bg-blue-400 mr-5">
              Remove
            </button>
            <span className=" text-xl">{`QTY : ${4}`}</span>
            <button className="px-3 w-32 hover:bg-red-400 py-1 rounded-3xl h-10 bg-blue-400 ml-5">
              Add
            </button>
          </div>
          <p className="mt-10 text-justify text-xl pb-10">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.pid}`);
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { pid: "1" } }],
    fallback: true,
  };
}

export default SingleProduct;
