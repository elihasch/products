import { useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import BasketCard from "../components/BasketCard";
import BasketSiedBar from "../components/BasketSiedBar";
import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const state = useSelector((store) => store.cart);

  if (!state.itemsCounter) {
    return (
      <div className={styles.cart}>
        <p>Your shopping cart is empty</p>
        <Link className={styles.cartButton} to="/products">
          <FaArrowLeft />
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSiedBar state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
