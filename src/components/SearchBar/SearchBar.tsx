import styles from "./SearchBar.module.css";
import { toast, Toaster } from "react-hot-toast";
import { FormEvent } from "react";
import { CiSearch } from "react-icons/ci";
import { SearchBarProps } from "./SearchBar.types";

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const input = form.elements.namedItem("text") as HTMLInputElement;
    const value = input?.value.trim();

    if (!value) {
      toast.error("This is an invalid request. Try again!");
      return;
    } else {
      onSubmit(value);
    }
  };
  return (
    <div>
      <header className={styles.search}>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={styles.button}>
            <CiSearch />
          </button>
          <Toaster />
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
