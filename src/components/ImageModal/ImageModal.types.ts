import { Image } from "../../types";

export type ImageModalProps = {
  data: Partial<Image>;
  isOpen: boolean;
  closeModal: () => void;
};
