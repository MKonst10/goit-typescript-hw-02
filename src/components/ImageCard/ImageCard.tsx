import { ForwardedRef, forwardRef } from "react";
import styles from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard = forwardRef(
  (
    { data, openModal }: ImageCardProps,
    ref: ForwardedRef<HTMLImageElement>
  ) => {
    return (
      <div>
        <img
          className={styles.image}
          src={data.urls.small}
          alt={data.alt_description}
          onClick={(): void => openModal(data)}
          ref={ref}
        />
      </div>
    );
  }
);

ImageCard.displayName = "ImageCard";

export default ImageCard;
