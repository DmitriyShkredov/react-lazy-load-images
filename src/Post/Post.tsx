import type { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./styles.css";

type props = {
  image: {
    src: string;
    minsrc: string;
    width: number;
    height: number;
  };
  title: string;
  text: string;
};

export const Post: FC<props> = ({ image, title, text }) => {
  return (
    <div className="post">
      <LazyLoadImage
        className="post-img"
        src={image.src}
        placeholderSrc={image.minsrc}
        width={image.width}
        height={image.height}
      />
      <h2 className="post-title">{title}</h2>
      <p className="post-text">{text}</p>
    </div>
  );
};
