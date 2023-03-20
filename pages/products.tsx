import Link from "next/link";
import React from "react";
import { useQuery, useQueryClient } from "react-query";

export default function Products() {
  const queryClient = useQueryClient();

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");

    const data = await response.json();
    return data;
  };

  const { data } = useQuery("products", getProducts);
  return (
    <>
      <h1>Products</h1>
      <ul>
        {data?.map((product: any) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <p>{product.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
