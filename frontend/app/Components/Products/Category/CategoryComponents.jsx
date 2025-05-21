'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const CategoryComponents = ({ categories, activeCategory }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryClick = (categoryId) => {
    const params = new URLSearchParams(searchParams);
    if (categoryId === 'all') {
      params.delete('category');
    } else {
      params.set('category', categoryId);
    }
    router.push(`/products?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="container mt-2 w-full">
      <div className="w-full flex flex-row justify-center gap-4 flex-wrap mx-auto">
        {/* All Products Button */}
        <div>
          <button
            onClick={() => handleCategoryClick('all')}
            className={`border ${
              !activeCategory || activeCategory === 'all'
                ? 'border-[var(--primary)] bg-[var(--primary)] text-white' 
                : 'border-gray-400 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white'
            } duration-200 text-sm font-lato rounded-lg px-3 font-semibold py-1 block text-center`}
          >
            All Products
          </button>
        </div>
        
        {/* Category Buttons */}
        {categories.map((category) => (
          <div key={category.id}>
            <button
              onClick={() => handleCategoryClick(category.id)}
              className={`border ${
                activeCategory && activeCategory.toString() === category.id.toString()
                  ? 'border-[var(--primary)] bg-[var(--primary)] text-white' 
                  : 'border-gray-400 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white'
              } duration-200 text-sm font-lato rounded-lg px-3 font-semibold text-gray-700 py-1 block text-center`}
            >
              {category.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryComponents;