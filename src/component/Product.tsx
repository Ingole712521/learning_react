import { useQuery } from "@tanstack/react-query";

const useProduct = () => {
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return {
    data,
    isPending,
    isError,
    error,
  };
};

export default useProduct;
