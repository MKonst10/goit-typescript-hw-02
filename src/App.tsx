import { useState, useEffect, useRef } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios";
import toast from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { Image } from "./types";
import { fetchImages } from "./fetchImages-api";

function App() {
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [search, setSearch] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Partial<Image> | null>(
    null
  );
  const [totalPages, setTotalPages] = useState<number>(0);

  const handleSubmit = (value: string): void => {
    setSearch(value);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (search === "") return;

    const fetchPhotos = async () => {
      try {
        setLoader(true);
        const data = await fetchImages(search, page);
        setTotalPages(data.total_pages);
        console.log(totalPages);

        const imgResults: Image[] = data.results;
        if (data.results.length === 0) {
          setImages(data.results);
          return toast(
            "Sorry, there are no images matching your search query. Please try again!"
          );
        } else {
          setImages((prevImages) => [...prevImages, ...data.results]);
        }
      } catch (error) {
        console.log(error);
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoader(false);
      }
    };

    if (search) {
      fetchPhotos();
    }
  }, [search, page]);

  useEffect(() => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      console.log("Image position and size:", rect);
    }
  }, []);

  const handleChangePage = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (page > 1 && imgRef.current) {
      const cardHeight = imgRef.current.getBoundingClientRect().height;
      scrollBy({
        top: cardHeight * 3,
        behavior: "smooth",
      });
    }
  }, [images]);

  const openModal = (image: Image): void => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  const closeModal = (): void => setIsModalOpen(false);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {images !== null && (
        <ImageGallery images={images} openModal={openModal} ref={imgRef} />
      )}
      {loader && <Loader />}
      {error && <ErrorMessage error={error} />}
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onLoad={handleChangePage} />
      )}
      {selectedImage && (
        <ImageModal
          data={selectedImage}
          isOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}{" "}
    </>
  );
}

export default App;
