import { Image } from "../../types";

export type ImageModalProps = {
  data: Image;
  isOpen: boolean;
  closeModal: () => void;
};
