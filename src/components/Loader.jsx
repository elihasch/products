import { RotatingLines } from "react-loader-spinner";
import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className={styles.loader}>
      <RotatingLines
        visible={true}
        height="100px"
        width="100px"
        color="grey"
        strokeWidth="3"
        strokeColor="#fe5d42"
      />
    </div>
  );
}

export default Loader;
