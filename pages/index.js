import Product from "@/components/Product";

const index = ({products}) => {
  return (
    <div className=" w-full flex justify-center items-center">
      <div className=" my-10 flex flex-wrap w-10/12 ">
        {products
          ? products.map((e) => {
              return <Product product={e} key={e.id} />;
            })
          : []}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
}

export default index;
