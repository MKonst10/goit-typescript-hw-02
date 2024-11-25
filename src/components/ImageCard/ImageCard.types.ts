import { Image } from "../../types";

export type ImageCardProps = {
  data: Image;
  openModal: (data: Image) => void;
};
