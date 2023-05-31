import Image from "next/image";
import Link from "next/link";

const Product = ({ product }) => {
  return (
    <div className=" mr-5 mb-5 flex flex-col items-center p-5 border-2 border-red-600 rounded-3xl w-72 h-80 ">
      <h3 className=" mb-5">{`${product.title.slice(0, 25)}...`}</h3>
      <Image
        src={product.image}
        alt="photo"
        width={400}
        height={400}
        className=" w-28 h-32 mb-5"
      />
      <p className="">
        {product.description.slice(0, 70)}{" "}
        <Link href={`/products/${product.id}`}>
        <span className=" text-red-700 pb-1 border-b border-blue-500 hover:cursor-pointer">
          ...Read More
        </span>{" "}
        </Link>
      </p>
    </div>
  );
};

export default Product;
