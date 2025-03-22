import { MdDeleteOutline } from "react-icons/md";
import { shortenText } from "../helpers/helpers";
import styles from "./BasketCard.module.css";
import { useDispatch } from "react-redux";
import { removeItem, decrease, increase } from "../features/cart/cartSlice";

function BasketCard({ data }) {
  const dispatch = useDispatch()

  const { image, title, quantity } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => dispatch(decrease(data))}>-</button>
        )}
        <span>{data.quantity}</span>
        <button onClick={() => dispatch(increase(data))}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
