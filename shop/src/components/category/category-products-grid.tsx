import React from "react";
import { useProductsInfinite } from "@framework/products";
import ProductInfiniteGrid from "@components/product/product-infinite-grid";

type Props = {
  classname?: string;
  categorySlug: string;
};

const CategoryProductsGrid: React.FC<Props> = ({
  classname = "",
  categorySlug,
}) => {
  const {
    isLoading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    data,
    error,
  } = useProductsInfinite({
    category: categorySlug && categorySlug,
  });

  if (error) return <p>{error.message}</p>;

  return (
    <ProductInfiniteGrid
      className={classname}
      loading={isLoading}
      data={data}
      hasNextPage={hasNextPage}
      loadingMore={loadingMore}
      fetchNextPage={fetchNextPage}
    />
  );
};

export default CategoryProductsGrid;
