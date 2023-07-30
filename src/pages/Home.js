import React, { useContext } from "react";

import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { product } = useContext(ProductContext);

  let filterProducts = product?.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid gap-[30px] grid-cols-2  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filterProducts.map((item) => {
              return <Product product={item} key={item.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
