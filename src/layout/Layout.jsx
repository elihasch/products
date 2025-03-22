import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

import styles from "./Layout.module.css";

function Layout({ children }) {
  const state = useSelector((store) => store.cart) || { itemsCounter: 0 };
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">MojEl Shop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Elnaz Hashemi</p>
      </footer>
    </>
  );
}

export default Layout;
