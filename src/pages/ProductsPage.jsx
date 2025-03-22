import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import SearchBox from "../components/SearchBox";
import Siedbar from "../components/Siedbar";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { fetchProducts } from "../features/product/productSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  filterProducts,
  searchProducts,
  getInitialQuery,
} from "../helpers/helpers";
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.product);
  console.log(products);
  const [display, setDisplay] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts()); // dar faze munting inja kari mikonad k product ma taghir konad ke khodash dipendency ast va ma faghat yek bar mikhahim ejra shavad
  }, []);

  useEffect(() => {
    setDisplay(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplay(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {loading && <Loader />}
          {display.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <Siedbar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
