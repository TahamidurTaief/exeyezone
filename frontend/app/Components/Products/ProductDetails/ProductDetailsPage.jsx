'use client';

import { useState } from 'react';
import ProductHero from './ProductHero';
import ProductFeaturedImages from './ProductFeaturedImages';
import ProductFeatures from './ProductFeatures';
import ProductScreenshots from './ProductScreenshots';
import ProductTechnologies from './ProductTechnologies';
import ProductDescription from './ProductDescription';

const ProductDetailsPage = ({ product }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Title */}
      <ProductHero product={product} />

      {/* Featured Images */}
      <ProductFeaturedImages images={product.featured_images || []} />

      {/* Features */}
      <ProductFeatures features={product.features || []} />

      {/* Screenshots Section */}
      <ProductScreenshots 
        screenshots={product.screenshots || []} 
        product={product}
        productTitle={product.title}
        productDescription={product.short_description || product.description}
      />

      {/* Technologies */}
      <ProductTechnologies technologies={product.technologies || []} />

      {/* Description */}
      <ProductDescription description={product.description} product={product} />
    </div>
  );
};

export default ProductDetailsPage;
