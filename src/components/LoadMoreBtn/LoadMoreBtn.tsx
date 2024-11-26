import styles from "./LoadMoreBtn.module.css";
import { onLoadBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn = ({ onLoad }: onLoadBtnProps) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.button} onClick={onLoad}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
