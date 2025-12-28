import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useProduct = () => {
  const fetchProduct = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProduct,
  });

  return {
    data,
    isPending,
    isError,
    error,
  };
};

export default useProduct;

// import { useQuery } from "@tanstack/react-query";

// const useProduct = () => {
//   const fetchProducts = async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     return data;
//   };

//   const { data, isPending, isError, error } = useQuery({
//     queryKey: ["products"],
//     queryFn: fetchProducts,
//   });

//   return {
//     data,
//     isPending,
//     isError,
//     error,
//   };
// };

// export default useProduct;
