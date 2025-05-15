import HireUs from "../Home/HireUs/HireUs";
import CategoryComponents from "./Category/CategoryComponents";
import Hero from "./Hero/Hero";
import ProductComponent from "./Product/ProductComponent";

const ProductPage = () => {
  return (
    <div className=" pt-32 pb-20 ">
      <Hero />
      <CategoryComponents />
      <ProductComponent />
      <HireUs />
    </div>
  );
};

export default ProductPage;
