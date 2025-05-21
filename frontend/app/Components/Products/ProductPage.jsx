
import Hero from "@/app/components/Products/Hero/Hero";
import ProductComponent from "./Product/ProductComponent";
import HireUs from "../Home/HireUs/HireUs";
import CategoryComponents from "./Category/CategoryComponents";

const ProductPage = ({ initialProducts, initialCategories, initialCategory }) => {
  return (
    <div className="pt-5 pb-20">
      <Hero />
      <CategoryComponents 
        categories={initialCategories} 
        activeCategory={initialCategory}
      />
      <ProductComponent products={initialProducts} />

      <HireUs />
    </div>
  );
};

export default ProductPage;