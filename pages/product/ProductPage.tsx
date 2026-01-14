

"use client";
import ProductCard from "@/components/productCard/ProductCard";
import { products } from "@/lib/data";
import { useState, useEffect, useMemo } from "react";
import {
  Filter,
  ChevronDown,
  ChevronUp,
  Star,
  DollarSign,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useColorClasses } from "@/lib/styles";

// Define filter types
interface Filters {
  categories: string[];
  priceRange: { min: number; max: number };
  rating: number | null;
  sortBy: "price-asc" | "price-desc" | "rating" | "newest";
}

export default function ProductPage() {
  // Calculate max price from products
  const maxProductPrice = Math.max(...products.map(p => p.price));
  const minProductPrice = Math.min(...products.map(p => p.price));

  const { bgMain, textMain, textSecondary, btnPage } = useColorClasses();

  const [filters, setFilters] = useState<Filters>({
    categories: [],
    priceRange: { min: minProductPrice, max: maxProductPrice },
    rating: null,
    sortBy: "newest",
  });
  const [showDiscountedOnly, setShowDiscountedOnly] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);

  const [priceRange, setPriceRange] = useState([minProductPrice, maxProductPrice]);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    rating: true,
  });

  // Extract unique categories from products
  const allCategories = ["cat", "dog", "bird", "fish", "health", "other"];

  // Filter and sort products
  const filteredProducts = useMemo(() => {

    return products
      .filter((product) => {
        // Category filter
        if (
          filters.categories.length > 0 &&
          !filters.categories.includes(product.category)
        ) {
          return false;
        }

        // Price filter
        if (product.price < priceRange[0] || product.price > priceRange[1]) {
          return false;
        }

        // Rating filter
        if (filters.rating !== null && product.rating < filters.rating) {
          return false;
        }

        // Discount filter
        if (showDiscountedOnly && (!product.discount || product.discount === 0)) {
          return false;
        }

        // Stock filter
        if (inStockOnly && product.stock === 0) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        switch (filters.sortBy) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "rating":
            return b.rating - a.rating;
          case "newest":
          default:
            return (
              new Date(b.createdAt || 0).getTime() -
              new Date(a.createdAt || 0).getTime()
            );
        }
      });
  }, [filters, priceRange, showDiscountedOnly, inStockOnly]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, priceRange, showDiscountedOnly, inStockOnly]);

  const toggleCategory = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      priceRange: { min: minProductPrice, max: maxProductPrice },
      rating: null,
      sortBy: "newest",
    });
    setPriceRange([minProductPrice, maxProductPrice]);
    setShowDiscountedOnly(false);
    setInStockOnly(false);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductsPerPageChange = (value: number) => {
    setProductsPerPage(value);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const halfVisible = Math.floor(maxVisiblePages / 2);
      let startPage = Math.max(1, currentPage - halfVisible);
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      
      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
      
      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) pageNumbers.push('...');
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };


  return (
<div className={`${bgMain} min-h-screen py-10`}>
      <section 
    className={`container mx-auto py-10 px-4 `}>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0 ">
          <div className="sticky top-24">
            <div className={`rounded-xl shadow-lg p-6 ${bgMain}`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Filter className={`w-5 h-5 ${textMain}`} />
                  <h2 className={`${textMain} font-bold text-xl`}>Filters</h2>
                </div>
                <button
                  onClick={clearFilters}
                  className={`text-sm ${textSecondary} hover:${textMain} transition-colors cursor-pointer`}
                >
                  Clear all
                </button>
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 ${textMain}`}>
                  Sort By
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      sortBy: e.target.value as Filters["sortBy"],
                    }))
                  }
                  className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${bgMain} ${textMain} `}
                >
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>

              {/* Categories Section */}
              <div className="border-t border-gray-200 mb-4 pt-6">
                <button
                  onClick={() => toggleSection("categories")}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <span className={`${textMain} font-semibold`}>
                    Categories
                  </span>
                  {expandedSections.categories ? (
                    <ChevronUp className={`w-5 h-5 ${textMain}`} />
                  ) : (
                    <ChevronDown className={`w-5 h-5 ${textMain}`} />
                  )}
                </button>

                {expandedSections.categories && (
                  <div className="space-y-3">
                    {allCategories.map((category) => (
                      <div key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`cat-${category}`}
                          checked={filters.categories.includes(category)}
                          onChange={() => toggleCategory(category)}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor={`cat-${category}`}
                          className={`ml-3  cursor-pointer capitalize ${textSecondary}`}
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Range Section */}
              <div className="border-t border-gray-200 pt-6">
                <button
                  onClick={() => toggleSection("price")}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <div className="flex items-center gap-2">
                    <DollarSign className={`w-4 h-4 ${textSecondary}`} />
                    <span className={`${textMain} font-semibold`}>
                      Price Range
                    </span>
                  </div>
                  {expandedSections.price ? (
                    <ChevronUp className={`w-5 h-5 ${textMain}`}   />
                  ) : (
                    <ChevronDown className={`w-5 h-5 ${textMain}`} />
                  )}
                </button>

                {expandedSections.price && (
                  <div className="space-y-4">
                    <div className={`flex justify-between text-sm ${textSecondary}`}>
                      <span>৳{priceRange[0].toLocaleString()}</span>
                      <span>৳{priceRange[1].toLocaleString()}</span>
                    </div>
                    <div className="space-y-2">
                      <input
                        type="range"
                        min={minProductPrice}
                        max={maxProductPrice}
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([parseInt(e.target.value), priceRange[1]])
                        }
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600"
                      />
                      <input
                        type="range"
                        min={minProductPrice}
                        max={maxProductPrice}
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([priceRange[0], parseInt(e.target.value)])
                        }
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600"
                      />
                    </div>
                    <div className={`flex items-center justify-between text-xs mb-4 ${textSecondary}`}>
                      <span>Min: ৳{minProductPrice.toLocaleString()}</span>
                      <span>Max: ৳{maxProductPrice.toLocaleString()}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Additional Filters */}
              <div className="space-y-4 border-t border-gray-200 pt-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="discounted-only"
                    checked={showDiscountedOnly}
                    onChange={(e) => setShowDiscountedOnly(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="discounted-only"
                    className={`ml-3 cursor-pointer  ${textSecondary}`}>
                    Show discounted items only
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="in-stock-only"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="in-stock-only"
                    className={`ml-3 cursor-pointer  ${textSecondary}`}
                  >
                    In stock only
                  </label>
                </div>
              </div>

              {/* Rating Section */}
              <div className="border-t border-gray-200 pt-6">
                <button
                  onClick={() => toggleSection("rating")}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <div className="flex items-center gap-2">
                    <Star className={`w-4 h-4 ${textSecondary}`} />
                    <span className={`${textMain} font-semibold`}>Rating</span>
                  </div>
                  {expandedSections.rating ? (
                    <ChevronUp className={`w-5 h-5 ${textMain}`} />
                  ) : (
                    <ChevronDown className={`w-5 h-5 ${textMain}`} />
                  )}
                </button>

                {expandedSections.rating && (
                  <div className="space-y-3">
                    {[4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center">
                        <input
                          type="radio"
                          id={`rating-${rating}`}
                          name="rating"
                          checked={filters.rating === rating}
                          onChange={() =>
                            setFilters((prev) => ({
                              ...prev,
                              rating: prev.rating === rating ? null : rating,
                            }))
                          }
                          className="w-4 h-4 cursor-pointer text-blue-600"
                        />
                        <label
                          htmlFor={`rating-${rating}`}
                          className="ml-3 flex items-center cursor-pointer hover:text-gray-900"
                        >
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < rating
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className={`ml-2 ${textSecondary}`}> & above</span>
                        </label>
                      </div>
                    ))}
                    <button
                      onClick={() => setFilters(prev => ({ ...prev, rating: null }))}
                      className="text-sm cursor-pointer text-blue-600 hover:text-blue-800 mt-2"
                    >
                      Clear rating filter
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className={`${textMain} text-3xl font-bold`}>All Products</h1>
              <p className={`mt-2 ${textSecondary}`}>
                Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
                {filteredProducts.length !== products.length && ` (filtered from ${products.length})`}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {filters.categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {filters.categories.map((category) => (
                    <span
                      key={category}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm"
                    >
                      <Tag className="w-3 h-3" />
                      {category}
                      <button
                        onClick={() => toggleCategory(category)}
                        className="ml-1 hover:text-blue-900"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}

              {/* Products per page selector */}
              <div className={`flex items-center gap-2 ${textSecondary}`}>
                <span className={`${textSecondary} text-sm`}>Show:</span>
                <select
                  value={productsPerPage}
                  onChange={(e) => handleProductsPerPageChange(Number(e.target.value))}
                  className={`px-2 py-1 border border-gray-300 rounded text-sm ${bgMain} ${textMain}`}
                >
                  <option value={4}>4</option>
                  <option value={8}>8</option>
                  <option value={12}>12</option>
                  <option value={16}>16</option>
                  <option value={20}>20</option>
                </select>
                <span className={`${textSecondary} text-sm`}>per page</span>
              </div>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl shadow">
              <div className="text-gray-400 mb-4">
                <Filter className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No products found
              </h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters</p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-gray-600">
                    Page {currentPage} of {totalPages} • {filteredProducts.length} products
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 ${btnPage}`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </button>
                    
                    <div className="flex items-center gap-1">
                      {getPageNumbers().map((page, index) => (
                        page === '...' ? (
                          <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-400">
                            ...
                          </span>
                        ) : (
                          <button
                            key={page}
                            onClick={() => handlePageChange(Number(page))}
                            className={`w-10 h-10 flex items-center justify-center rounded-md ${
                              currentPage === page
                                ? 'bg-blue-600 text-white'
                                : `border ${btnPage} border-gray-300 hover:bg-gray-50`
                            }`}
                          >
                            {page}
                          </button>
                        )
                      ))}
                    </div>
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 ${btnPage}`}
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
</div>
  );
}