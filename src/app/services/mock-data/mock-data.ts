// ============================================================
// MOCK DATA — mirrors the original techs-experts.net API shape
// ============================================================

export const MOCK_CATEGORIES = {
  status: 'Success',
  data: [
    {
      id: 1,
      name: 'Women',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80',
      subcategories: [
        { id: 11, name: "Dresses", image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&q=80', hasThird: 0 },
        { id: 12, name: "Tops", image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=200&q=80', hasThird: 0 },
        { id: 13, name: "Shoes", image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&q=80', hasThird: 0 },
        { id: 14, name: "Bags", image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&q=80', hasThird: 0 },
      ]
    },
    {
      id: 2,
      name: 'Men',
      image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=400&q=80',
      subcategories: [
        { id: 21, name: "Shirts", image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&q=80', hasThird: 0 },
        { id: 22, name: "Pants", image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&q=80', hasThird: 0 },
        { id: 23, name: "Shoes", image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80', hasThird: 0 },
        { id: 24, name: "Watches", image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80', hasThird: 0 },
      ]
    },
    {
      id: 3,
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80',
      subcategories: [
        { id: 31, name: "Phones", image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&q=80', hasThird: 0 },
        { id: 32, name: "Laptops", image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&q=80', hasThird: 0 },
        { id: 33, name: "Headphones", image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80', hasThird: 0 },
        { id: 34, name: "Cameras", image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&q=80', hasThird: 0 },
      ]
    },
    {
      id: 4,
      name: 'Home & Garden',
      image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&q=80',
      subcategories: [
        { id: 41, name: "Furniture", image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80', hasThird: 0 },
        { id: 42, name: "Kitchen", image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&q=80', hasThird: 0 },
        { id: 43, name: "Decor", image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=200&q=80', hasThird: 0 },
      ]
    },
    {
      id: 5,
      name: 'Sports',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80',
      subcategories: [
        { id: 51, name: "Gym", image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&q=80', hasThird: 0 },
        { id: 52, name: "Outdoor", image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&q=80', hasThird: 0 },
      ]
    },
    {
      id: 6,
      name: 'Beauty',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80',
      subcategories: [
        { id: 61, name: "Skincare", image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&q=80', hasThird: 0 },
        { id: 62, name: "Makeup", image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=200&q=80', hasThird: 0 },
      ]
    },
  ]
};

export const MOCK_TOP_CATEGORIES = {
  status: 'Success',
  data: [
    { id: 1, name: 'Women', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&q=80', category_data: { category_name: 'Women Fashion' } },
    { id: 2, name: 'Men', image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=300&q=80', category_data: { category_name: 'Men Fashion' } },
    { id: 3, name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&q=80', category_data: { category_name: 'Electronics' } },
    { id: 4, name: 'Home & Garden', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=300&q=80', category_data: { category_name: 'Home & Garden' } },
    { id: 5, name: 'Sports', image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=300&q=80', category_data: { category_name: 'Sports' } },
    { id: 6, name: 'Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&q=80', category_data: { category_name: 'Beauty' } },
  ]
};

export const MOCK_PRODUCTS: { [key: string]: any } = {
  '1': {
    status: 'Success',
    data: [{
      id: 1,
      name: 'Classic Summer Dress',
      price: 49.99,
      old_price: 79.99,
      description: 'A beautiful classic summer dress made from lightweight fabric. Perfect for warm weather occasions.',
      category_id: 1,
      gallery: [
        { name: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80' },
        { name: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&q=80' },
        { name: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80' },
      ],
      attributes: [{
        name: 'Color',
        variations: [
          { name: 'Red', hex_color: '#FF0000' },
          { name: 'Blue', hex_color: '#0000FF' },
          { name: 'White', hex_color: '#FFFFFF' },
          { name: 'Black', hex_color: '#000000' },
        ]
      }],
      similar_products: [
        { id: 2, name: 'Floral Maxi Dress', price: 59.99, image: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=300&q=80' },
        { id: 3, name: 'Casual Wrap Dress', price: 44.99, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&q=80' },
        { id: 4, name: 'Evening Gown', price: 89.99, image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=300&q=80' },
      ],
      rating: 4.5,
      reviews_count: 128,
      stock: 50,
    }]
  },
  '2': {
    status: 'Success',
    data: [{
      id: 2,
      name: 'Floral Maxi Dress',
      price: 59.99,
      old_price: 89.99,
      description: 'Elegant floral maxi dress for special occasions. Features beautiful floral pattern with a flattering silhouette.',
      category_id: 1,
      gallery: [
        { name: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&q=80' },
        { name: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80' },
      ],
      attributes: [{
        name: 'Color',
        variations: [
          { name: 'Pink', hex_color: '#FFC0CB' },
          { name: 'Yellow', hex_color: '#FFFF00' },
        ]
      }],
      similar_products: [
        { id: 1, name: 'Classic Summer Dress', price: 49.99, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&q=80' },
        { id: 3, name: 'Casual Wrap Dress', price: 44.99, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&q=80' },
      ],
      rating: 4.7,
      reviews_count: 85,
      stock: 30,
    }]
  },
  '756': {
    status: 'Success',
    data: [{
      id: 756,
      name: 'Premium Wireless Headphones',
      price: 129.99,
      old_price: 199.99,
      description: 'High-quality wireless headphones with noise cancellation. Crystal clear sound and up to 30 hours battery life.',
      category_id: 3,
      gallery: [
        { name: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80' },
        { name: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80' },
        { name: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&q=80' },
      ],
      attributes: [{
        name: 'Color',
        variations: [
          { name: 'Black', hex_color: '#000000' },
          { name: 'White', hex_color: '#FFFFFF' },
          { name: 'Red', hex_color: '#FF0000' },
        ]
      }],
      similar_products: [
        { id: 3, name: 'Sport Earbuds', price: 59.99, image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=300&q=80' },
        { id: 4, name: 'Studio Monitor Headphones', price: 249.99, image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&q=80' },
      ],
      rating: 4.8,
      reviews_count: 342,
      stock: 75,
    }]
  },
};

// Products by category
export const MOCK_PRODUCTS_BY_CATEGORY: { [key: string]: any } = {
  '1': {
    status: 'Success',
    data: [
      { id: 1, name: 'Classic Summer Dress', price: 49.99, old_price: 79.99, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&q=80', rating: 4.5 },
      { id: 2, name: 'Floral Maxi Dress', price: 59.99, old_price: 89.99, image: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=300&q=80', rating: 4.7 },
      { id: 3, name: 'Casual Wrap Dress', price: 44.99, old_price: 60.00, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&q=80', rating: 4.2 },
      { id: 4, name: 'Evening Gown', price: 89.99, old_price: 130.00, image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=300&q=80', rating: 4.9 },
      { id: 5, name: 'Boho Sundress', price: 39.99, old_price: 55.00, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&q=80', rating: 4.3 },
      { id: 6, name: 'Cocktail Dress', price: 74.99, old_price: 110.00, image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&q=80', rating: 4.6 },
    ]
  },
  '2': {
    status: 'Success',
    data: [
      { id: 101, name: 'Classic Oxford Shirt', price: 34.99, old_price: 55.00, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&q=80', rating: 4.4 },
      { id: 102, name: 'Slim Fit Chinos', price: 44.99, old_price: 65.00, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&q=80', rating: 4.5 },
      { id: 103, name: 'Casual Polo Shirt', price: 29.99, old_price: 45.00, image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=300&q=80', rating: 4.3 },
      { id: 104, name: 'Denim Jacket', price: 69.99, old_price: 95.00, image: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=300&q=80', rating: 4.7 },
    ]
  },
  '3': {
    status: 'Success',
    data: [
      { id: 756, name: 'Premium Wireless Headphones', price: 129.99, old_price: 199.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80', rating: 4.8 },
      { id: 201, name: 'Smartphone Pro Max', price: 899.99, old_price: 1099.99, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&q=80', rating: 4.9 },
      { id: 202, name: 'Ultrabook Laptop', price: 1299.99, old_price: 1599.99, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&q=80', rating: 4.7 },
      { id: 203, name: 'Smart Watch Series 5', price: 249.99, old_price: 349.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80', rating: 4.6 },
    ]
  },
  '4': {
    status: 'Success',
    data: [
      { id: 301, name: 'Modern Sofa', price: 699.99, old_price: 999.99, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=80', rating: 4.5 },
      { id: 302, name: 'Ceramic Cookware Set', price: 129.99, old_price: 199.99, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&q=80', rating: 4.7 },
      { id: 303, name: 'Wall Art Print', price: 39.99, old_price: 59.99, image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=300&q=80', rating: 4.4 },
    ]
  },
  '5': {
    status: 'Success',
    data: [
      { id: 401, name: 'Yoga Mat Pro', price: 49.99, old_price: 79.99, image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&q=80', rating: 4.6 },
      { id: 402, name: 'Running Shoes', price: 89.99, old_price: 129.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80', rating: 4.8 },
      { id: 403, name: 'Resistance Bands Set', price: 24.99, old_price: 39.99, image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&q=80', rating: 4.5 },
    ]
  },
  '6': {
    status: 'Success',
    data: [
      { id: 501, name: 'Vitamin C Serum', price: 29.99, old_price: 45.00, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&q=80', rating: 4.7 },
      { id: 502, name: 'Eyeshadow Palette', price: 34.99, old_price: 55.00, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&q=80', rating: 4.5 },
    ]
  },
  // Default for unmatched categories
  'default': {
    status: 'Success',
    data: [
      { id: 1, name: 'Classic Summer Dress', price: 49.99, old_price: 79.99, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&q=80', rating: 4.5 },
      { id: 756, name: 'Premium Wireless Headphones', price: 129.99, old_price: 199.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80', rating: 4.8 },
      { id: 201, name: 'Smartphone Pro Max', price: 899.99, old_price: 1099.99, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&q=80', rating: 4.9 },
    ]
  }
};

export const MOCK_COUNTRIES = {
  status: 'Success',
  data: [
    { id: 1, name: 'Egypt', code: 'EG' },
    { id: 2, name: 'Saudi Arabia', code: 'SA' },
    { id: 3, name: 'United Arab Emirates', code: 'AE' },
    { id: 4, name: 'United States', code: 'US' },
    { id: 5, name: 'United Kingdom', code: 'GB' },
    { id: 6, name: 'France', code: 'FR' },
    { id: 7, name: 'Germany', code: 'DE' },
    { id: 8, name: 'Canada', code: 'CA' },
  ]
};

export const MOCK_GOVERNORATES: { [key: number]: any } = {
  1: {
    status: 'Success',
    data: [
      { id: 1, name: 'Cairo' },
      { id: 2, name: 'Giza' },
      { id: 3, name: 'Alexandria' },
      { id: 4, name: 'Aswan' },
      { id: 5, name: 'Luxor' },
    ]
  },
  2: {
    status: 'Success',
    data: [
      { id: 6, name: 'Riyadh' },
      { id: 7, name: 'Jeddah' },
      { id: 8, name: 'Mecca' },
    ]
  },
  3: {
    status: 'Success',
    data: [
      { id: 9, name: 'Dubai' },
      { id: 10, name: 'Abu Dhabi' },
      { id: 11, name: 'Sharjah' },
    ]
  }
};

export const MOCK_CITIES: { [key: number]: any } = {
  1: {
    status: 'Success',
    data: [
      { id: 1, name: 'Downtown Cairo' },
      { id: 2, name: 'Maadi' },
      { id: 3, name: 'Zamalek' },
      { id: 4, name: 'Heliopolis' },
    ]
  },
  2: {
    status: 'Success',
    data: [
      { id: 5, name: 'Dokki' },
      { id: 6, name: 'Mohandessin' },
      { id: 7, name: '6th of October' },
    ]
  },
  6: {
    status: 'Success',
    data: [
      { id: 8, name: 'Al Olaya' },
      { id: 9, name: 'Al Malaz' },
    ]
  },
  9: {
    status: 'Success',
    data: [
      { id: 10, name: 'Deira' },
      { id: 11, name: 'Downtown Dubai' },
      { id: 12, name: 'Marina' },
    ]
  }
};

export const MOCK_PROFILE = {
  status: 'Success',
  data: {
    id: 1,
    first_name: 'Mostafa',
    last_name: 'Ahmed',
    email: 'mostafa@example.com',
    phone: '+20 100 000 0000',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80',
    country_id: 1,
    state_id: { id: 1, name: 'Cairo' },
    city_id: 1,
    suburb: 'Maadi',
    street_address: '123 Main Street',
    building_number: '5',
    floor_number: '2',
    flat_number: '7',
  }
};

export const MOCK_USER_CART = {
  status: 'Success',
  data: [
    {
      id: 1,
      product_id: 756,
      qty: 1,
      product: {
        id: 756,
        name: 'Premium Wireless Headphones',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80',
      }
    },
    {
      id: 2,
      product_id: 1,
      qty: 2,
      product: {
        id: 1,
        name: 'Classic Summer Dress',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&q=80',
      }
    }
  ]
};

export const MOCK_ADDRESS_BOOK = {
  status: 'Success',
  data: [
    {
      id: 1,
      country_id: { id: 1, country_id: 1, name: 'Egypt' },
      state_id: { id: 1, name: 'Cairo' },
      cityInfo: { id: 1, name: 'Downtown Cairo' },
      suburb: 'Maadi',
      phone: '+20 100 000 0000',
      street_address: '123 Main Street',
      building_number: '5',
      floor_number: '2',
      flat_number: '7',
      default_address: 1,
    }
  ]
};

// Helper: generate a default product response for any id
export function getMockProduct(id: string | number): any {
  const strId = String(id);
  if (MOCK_PRODUCTS[strId]) return MOCK_PRODUCTS[strId];
  // Generate a plausible product for unknown IDs
  return {
    status: 'Success',
    data: [{
      id: Number(id),
      name: `Product #${id}`,
      price: 49.99,
      old_price: 79.99,
      description: 'A great product with excellent quality and craftsmanship.',
      category_id: 1,
      gallery: [
        { name: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80' },
        { name: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80' },
      ],
      attributes: [{
        name: 'Color',
        variations: [
          { name: 'Black', hex_color: '#000000' },
          { name: 'White', hex_color: '#FFFFFF' },
          { name: 'Blue', hex_color: '#0000FF' },
        ]
      }],
      similar_products: [
        { id: 1, name: 'Classic Summer Dress', price: 49.99, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&q=80' },
        { id: 756, name: 'Premium Wireless Headphones', price: 129.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80' },
      ],
      rating: 4.5,
      reviews_count: 60,
      stock: 25,
    }]
  };
}

export function getMockProductsByCategory(catId: string | number): any {
  const strId = String(catId);
  return MOCK_PRODUCTS_BY_CATEGORY[strId] || MOCK_PRODUCTS_BY_CATEGORY['default'];
}

export function getMockGovernorates(countryId: number): any {
  return MOCK_GOVERNORATES[countryId] || { status: 'Success', data: [{ id: 99, name: 'Other' }] };
}

export function getMockCities(governorateId: number): any {
  return MOCK_CITIES[governorateId] || { status: 'Success', data: [{ id: 99, name: 'Other' }] };
}
