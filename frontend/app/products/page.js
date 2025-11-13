import ProductPage from '@/app/Components/Products/ProductPage';

async function getProducts(category = null) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}/products/`;
  if (category && category !== 'all') {
    url += `?category=${category}`;
  }
  const res = await fetch(url);
  return res.json();
}

async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/productcategories/`);
  return res.json();
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