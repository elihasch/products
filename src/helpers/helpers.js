const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter((p) => p.category === category);
  return filteredProducts;
};

const cearteQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...res } = currentQuery;
    return res;
  }
  if (newQuery.search === "") {
    const { search, ...res } = currentQuery;
    return res;
  }
  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const cateqory = searchParams.get("category");
  const search = searchParams.get("search");
  if (cateqory) query.category = cateqory;
  if (search) query.search = search;
  return query;
};

const sumPrice = (products) => {
  return products
    .reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0)
    .toFixed(2);
};
const sumQuantity = (products) => {
  return products.reduce((counter, product) => {
    return counter + product.quantity;
  }, 0);
};

const productQuantity = (state, id) => {
  const item = state.selectedItems.find((item) => item.id === id);
  return item ? item.quantity : 0; // ساده‌سازی بررسی مقدار
};

export {
  shortenText,
  searchProducts,
  filterProducts,
  cearteQueryObject,
  getInitialQuery,
  // sumProducts,
  sumPrice,
  sumQuantity,
  productQuantity,
};
