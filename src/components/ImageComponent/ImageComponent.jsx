import React from 'react';
import Image from 'next/image';
import styles from "./ImageComponent.module.css";

const ImageComponent = ({src, alt, imageStyle}) => {
  return (
	<div className={imageStyle}>
		<Image 
			src={src}
			alt={alt}
			className={styles.imageSizeStyle}
		/>
	</div>
  )
}

export default ImageComponent;