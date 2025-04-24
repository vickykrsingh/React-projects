import React, { useEffect, useState } from "react";
import { axiosInstance } from "../main";
import Product from "./Product";
import { useSearchParams } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  // Get current page from URL, default to 1
  const page = parseInt(searchParams.get("page")) || 1;
  console.log(page)

  const fetchProducts = async () => {
    console.log('running................')
    setLoading(true);
    try {
      const { data } = await axiosInstance.get(`/products?page=${page}&skip=${(page-1)*30}`);
      setProducts((prev)=>prev=data.products);
    } catch (error) {
      setProducts((prev)=>prev=[]);
      alert(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setSearchParams({ page: page + 1 });
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setSearchParams({ page: page - 1 });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  return (
    <main>
      <main className="px-4 md:px-8 lg:px-20 bg-[#242424] h-[84vh] py-4 overflow-scroll">
        <h1 className="text-amber-50 py-4">All Products (Page {page})</h1>
        {!loading ? (
          products.length > 0 ? (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-2 place-items-center">
              {products.map((p) => (
                <Product product={p} key={p.id} />
              ))}
            </section>
          ) : (
            <div>No Products Found</div>
          )
        ) : (
          <div className="w-full min-h-[92vh] flex items-center justify-center">
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </main>
      <div className="flex gap-4 h-[8vh] bg-[#242424] px-4 md:px-8 lg:px-20 justify-center items-center">
        <section className="flex gap-2">
          <button
            className="px-12 py-2 bg-gray-300 hover:bg-gray-400 text-[#242424] hover:text-neutral-700 duration-300"
            onClick={handlePrevPage}
            disabled={page <= 1}
          >
            Prev
          </button>
          <button
            className="px-12 py-2 bg-gray-300 hover:bg-gray-400 text-[#242424] hover:text-neutral-700 duration-300"
            onClick={handleNextPage}
          >
            Next
          </button>
        </section>
      </div>
    </main>
  );
}

export default Products;
