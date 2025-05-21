
import Hero from "@/app/components/Products/Hero/Hero";
import ProductComponent from "./Product/ProductComponent";
import HireUs from "../Home/HireUs/HireUs";
import CategoryComponents from "./Category/CategoryComponents";
import api from "@/utils/axios";


const ServicesData = async () => {
  try {
    const res = await api.get('/services/');
    const data = res.data;

    if (!Array.isArray(data)) {
      throw new Error("API did not return an array");
    }

    const services = data.map((service) => {
      const firstImage = service.service_images.length > 0 ? service.service_images[0].image : null;
      const basicPackage = service.service_packages.find(pkg => pkg.package_type === "Basic") || service.service_packages[0] || {};

      return {
        id: service.id,
        title: service.title,
        rating: service.rating,
        reviews: service.purchase_number,
        images: {
          image: firstImage,
        },
        packages: {
          price: basicPackage.price || "N/A",
          delivery_time: basicPackage.delivery_time || "N/A",
        },
      };
    });

    return services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return []; 
  }
}





const ProductPage = async ({ initialProducts, initialCategories, initialCategory }) => {

  const services = await ServicesData();

  return (
    <div className=" pb-20">
      <Hero />
      <CategoryComponents 
        categories={initialCategories} 
        activeCategory={initialCategory}
      />
      <ProductComponent products={initialProducts} />

      <HireUs services={services} />
    </div>
  );
};

export default ProductPage;