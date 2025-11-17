import ProductPage from '@/app/Components/Products/ProductPage';
import api from '@/utils/axios';

async function getProducts(category = null) {
  try {
    const params = {};
    if (category && category !== 'all') {
      params.category = category;
    }
    
    const response = await api.get('/products/', { params });
    return response.data || [];
  } catch (error) {
    console.error('Error fetching products:', error.message);
    // Return empty array on error to prevent page crash
    return [];
  }
}

async function getCategories() {
  try {
    const response = await api.get('/productcategories/');
    return response.data || [];
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    // Return empty array on error to prevent page crash
    return [];
  }
}

export default async function Page({ searchParams }) {
  // Destructure after awaiting
  const { category } = await searchParams;
  const products = await getProducts(category);
  const categories = await getCategories();

  return (
    <div className='flex flex-col'>
      <ProductPage 
        initialProducts={products} 
        initialCategories={categories} 
        initialCategory={category || null}
      />
    </div>
  );
}