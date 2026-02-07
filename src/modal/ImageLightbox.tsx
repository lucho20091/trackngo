 

import { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface LightboxProps {
  images: string[];
  isOpen: boolean;
  initialIndex?: number;
  onClose: () => void;
}

export default function ImageLightbox({
  images,
  isOpen,
  initialIndex = 0,
  onClose
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Reset index when lightbox opens with new initialIndex
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  if (!isOpen) return null;

  const slides = images.map(src => ({
    src,
    alt: 'Project image'
  }));

  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      index={currentIndex}
      slides={slides}
      on={{
        view: (index) => setCurrentIndex(index.index),
      }}
      carousel={{
        finite: images.length <= 1,
      }}
      controller={{
        closeOnBackdropClick: true,
        closeOnPullDown: true,
      }}
      styles={{
        container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
      }}
    />
  );
}

