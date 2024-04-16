import React from "react";

type ImageComponentType = {
  alt: string;
  url: string;
  styles?: React.CSSProperties | undefined
};

export const ImageComponent: React.FC<ImageComponentType> = ({ alt, url, styles }) => {
  return (
    <div className="image">
      <img style={styles} src={url} alt={alt} width="100%" height="auto" />
    </div>
  );
};
