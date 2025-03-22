import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { shortenText } from "../helpers/helpers";
import { fetchProducts } from "../features/product/productSlice";

import Loader from "../components/Loader";

import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); // dar faze munting
  }, []);

  const productDetails = useSelector((store) =>
    store.product.products.find((i) => i.id === +id)
  );

  if (!productDetails) return <Loader />;
  const title = shortenText(productDetails.title);
  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.information}>
        <h3>{title}</h3>
        <p className={styles.description}>{productDetails.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {productDetails.category}
        </p>
        <div>
          <span>
            <IoMdPricetag />${productDetails.price}
          </span>
          <Link to="/products">
            <FaArrowLeft />
            Back to shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
