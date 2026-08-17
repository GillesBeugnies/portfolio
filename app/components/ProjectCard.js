"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({ project }) {
  const {
    meta,
    title,
    description,
    tags,
    image,
    images,
    imageLabel,
    link,
    linkLabel,
  } = project;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const displayImages = images || (image ? [image] : null);
  const hasMultipleImages = images && images.length > 1;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? displayImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === displayImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <article className="project">
      <div className="project__media">
        {displayImages ? (
          <div className="project__carousel">
            <Image
              src={displayImages[currentImageIndex]}
              alt={imageLabel}
              width={960}
              height={640}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {hasMultipleImages && (
              <>
                <button
                  className="carousel__btn carousel__btn--prev"
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14.5 5.5 8 12l6.5 6.5" />
                  </svg>
                </button>
                <button
                  className="carousel__btn carousel__btn--next"
                  onClick={handleNextImage}
                  aria-label="Next image"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9.5 5.5 16 12l-6.5 6.5" />
                  </svg>
                </button>
                <div className="carousel__dots">
                  {displayImages.map((_, index) => (
                    <button
                      key={index}
                      className={`carousel__dot ${
                        index === currentImageIndex ? "carousel__dot--active" : ""
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="placeholder-img">
            <span className="placeholder-img__label">{imageLabel}</span>
          </div>
        )}
      </div>
      <div className="project__body">
        <p className="project__meta">{meta}</p>
        <h3 className="project__title">{title}</h3>
        <p className="project__desc">{description}</p>
        <ul className="project__tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {link && (
          <a
            href={link}
            className="project__external-link"
            target="_blank"
            rel="noreferrer"
          >
            {linkLabel || "Watch demo"}
          </a>
        )}
      </div>

    </article>
  );
}
