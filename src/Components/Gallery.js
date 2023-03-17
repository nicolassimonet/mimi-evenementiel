/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { MdClose, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Modal } from "react-responsive-modal";
import "./Gallery.css";
import "react-responsive-modal/styles.css";

const Gallery = ({ images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openModal = (index) => {
    setCurrentImage(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const handleKeyDown = (event) => {
    if (modalOpen) {
      if (event.key === "ArrowRight") {
        nextImage();
      } else if (event.key === "ArrowLeft") {
        prevImage();
      } else if (event.key === "Escape") {
        closeModal();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, modalOpen]);

  return (
    <section id="gallery">
      <div className="gallery__container">
        {images.map((image, index) => (
          <div key={index} className="gallery__item" onClick={() => openModal(index)}>
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
        <Modal open={modalOpen} onClose={closeModal} center>
          <div className="modal__image-container">
            <MdChevronLeft className="modal__prev" onClick={prevImage} />
            <img src={images[currentImage].url} alt={images[currentImage].alt} className="modal__image" />
            <MdChevronRight className="modal__next" onClick={nextImage} />
          </div>
          <MdClose className="modal__close" onClick={closeModal} />
        </Modal>
      </div>
    </section>
  );
};

export default Gallery;
