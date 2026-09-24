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

  const allPhotos = useMemo(() => momentsTimeline.map(group => ({
    id: String(group.year),
    eventTitle: `Life outside the lab · ${group.year}`,
    date: String(group.year),
    photos: posts.filter(post => post.year === group.year).flatMap(post =>
      post.photos.map(photo => ({ ...photo, caption: `${post.title} · ${post.date}` }))
    ),
  })).filter(album => album.photos.length), [posts]);

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

        <div className="moments-albums">
          <div className="moments-albums__intro">
            <h2>A collection of shared moments</h2>
            <p>Beyond the research. Open an album to explore life outside the lab.</p>
          </div>
          <div className="moments-albums__grid">
            {allPhotos.map(album => (
              <button key={album.id} className="moment-album"
                onClick={() => setSelectedPhotoId(album.id)}
                aria-label={`Open ${album.date} album`}>
                <span className="moment-album__stack">
                  <span className="moment-album__sheet">
                    <span className={`moment-collage moment-collage--${album.photos.length}`}>
                      {album.photos.map(photo => <img key={photo.id} src={photo.src} alt="" loading="lazy" />)}
                    </span>
                  </span>
                </span>
                <span className="moment-album__caption">
                  <span><strong>{album.date}</strong><span>{album.photos.length} photographs</span></span>
                  <span className="moment-album__open">Open album <FiChevronRight aria-hidden="true" /></span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <dialog
        ref={dialogRef}
        className="moment-lightbox"
        aria-label="Moments album viewer"
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
          <button autoFocus type="button" className="moment-lightbox__close" onClick={() => setSelectedPhotoId(null)} aria-label="Close album viewer"><FiX /></button>
          <figure>
            <div className={`moment-collage moment-collage--${selectedPhoto.photos.length}`}>
              {selectedPhoto.photos.map(photo => <img key={photo.id} src={photo.src} alt={photo.alt} title={photo.caption} />)}
            </div>
            <figcaption id="moment-caption" aria-live="polite">
              <strong>{selectedPhoto.eventTitle}</strong>
              <span>{selectedPhoto.photos.length} photographs · Esc to close · Arrow keys to navigate</span>
            </figcaption>
          </figure>
          <div className="moment-lightbox__controls">
            <button type="button" onClick={showPrevious} aria-label="Previous album"><FiChevronLeft /> Previous</button>
            <span>{selectedIndex + 1} / {allPhotos.length}</span>
            <button type="button" onClick={showNext} aria-label="Next album">Next <FiChevronRight /></button>
          </div>
        </>}
      </dialog>
    </>
  );
};

export default Moments;
