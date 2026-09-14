import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { momentsTimeline } from "../../data/momentsData";
import coverImg from "../../assets/covers/maincover.jpg";
import "./Moments.css";

const Moments = () => {
  const dialogRef = useRef(null);
  const [selectedPhotoId, setSelectedPhotoId] = useState(null);

  const posts = useMemo(
    () =>
      momentsTimeline.flatMap((yearGroup) =>
        yearGroup.events.map((event) => ({ ...event, year: yearGroup.year }))
      ),
    []
  );

  const allPhotos = useMemo(
    () =>
      posts.flatMap((post) =>
        post.photos.map((photo) => ({
          ...photo,
          eventTitle: post.title,
          date: post.date,
        }))
      ),
    [posts]
  );

  const selectedIndex = allPhotos.findIndex((photo) => photo.id === selectedPhotoId);
  const selectedPhoto = selectedIndex >= 0 ? allPhotos[selectedIndex] : null;

  const showPrevious = useCallback(() => {
    const index = (selectedIndex - 1 + allPhotos.length) % allPhotos.length;
    setSelectedPhotoId(allPhotos[index].id);
  }, [allPhotos, selectedIndex]);

  const showNext = useCallback(() => {
    const index = (selectedIndex + 1) % allPhotos.length;
    setSelectedPhotoId(allPhotos[index].id);
  }, [allPhotos, selectedIndex]);

  const isOpen = selectedPhoto !== null;
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <section className="moments-viewport" aria-label="Moments photo collage">
        <div className="moments-header" style={{ backgroundImage: `url(${coverImg})` }}>
          <div className="moments-header__overlay" />
          <div className="moments-header__content">
            <span className="moments-header__label">Gallery</span>
            <h1 className="moments-header__title">Moments</h1>
            <p className="moments-header__subtitle">Explore our latest lab achievements and memories</p>
          </div>
        </div>

        <div className="moments-grid">
          {allPhotos.map((photo) => (
            <button
              key={photo.id}
              className="moments-grid__item"
              onClick={() => setSelectedPhotoId(photo.id)}
              aria-label={`Open ${photo.alt}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </section>

      <dialog
        ref={dialogRef}
        className="moment-lightbox"
        aria-label="Moments image viewer"
        aria-describedby="moment-caption"
        onCancel={() => setSelectedPhotoId(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelectedPhotoId(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") { event.preventDefault(); showPrevious(); }
          if (event.key === "ArrowRight") { event.preventDefault(); showNext(); }
        }}
      >
        {selectedPhoto && <>
          <button autoFocus type="button" className="moment-lightbox__close" onClick={() => setSelectedPhotoId(null)} aria-label="Close image viewer"><FiX /></button>
          <figure>
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
            <figcaption id="moment-caption" aria-live="polite">
              <strong>{selectedPhoto.alt}</strong>
              <span>{selectedPhoto.eventTitle} · {selectedPhoto.date}</span>
            </figcaption>
          </figure>
          <div className="moment-lightbox__controls">
            <button type="button" onClick={showPrevious} aria-label="Previous image"><FiChevronLeft /> Previous</button>
            <span>{selectedIndex + 1} / {allPhotos.length}</span>
            <button type="button" onClick={showNext} aria-label="Next image">Next <FiChevronRight /></button>
          </div>
        </>}
      </dialog>
    </>
  );
};

export default Moments;
