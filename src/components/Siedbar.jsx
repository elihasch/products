import { FaListUl } from "react-icons/fa";
import { cearteQueryObject } from "../helpers/helpers";
import { categoris } from "../constants/list";

import styles from "./Siedbar.module.css";
function Siedbar({ setQuery, query }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => cearteQueryObject(query, { category }));
  };

  return (
    <div className={styles.siedbar}>
      <div>
        <FaListUl />
        <p>Categoryes</p>
      </div>
      <ul onClick={categoryHandler}>
        {categoris.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLocaleLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Siedbar;
