// import ImageCard from './ImageCard.js';
// import css from "./ImageGallery.module.css";

// const ImageGallery = ({ images, onClick }) => {
//   if (images.length === 0) {
//     return null;
//   }

//   return (
//     <ul className={css.imageGallery}>
//       {images.map((image) => (
//         <li key={image.id} className={css.imageItem}>
//           <ImageCard
//             imageUrl={image.small}
//             alt={image.alt}
//             onClick={() => onClick(image)} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ImageGallery;





import React from 'react';
import ImageCard from './ImageCard';
import css from "./ImageGallery.module.css";


interface Image {
  alt: string;
  id: string;
  small: string;
  regular: string; // Должно быть определено и здесь
}


interface ImageGalleryProps {
  images: Image[];
  onClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onClick }) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <ul className={css.imageGallery}>
      {images.map((image) => (
        <li key={image.id} className={css.imageItem}>
          <ImageCard
            imageUrl={image.small}
            alt={image.alt}
            onClick={() => onClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

