import { Image } from "../../types";

export type ImageGalleryProps = {
  images: Image[];
  openModal: (image: Image) => void;
};
