// components/SampleOMCard.tsx

import React from 'react';
import Image from 'next/image';
import styles from './SampleOMCard.module.css';

interface SampleOMCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

const SampleOMCard: React.FC<SampleOMCardProps> = ({ image, title, subtitle, description, buttonText }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image className={styles.img} src={image} alt={title} layout="responsive" width={357} height={276} />
      </div>
      <div className={styles.cardContent}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>{buttonText}</button>
      </div>
    </div>
  );
};

export default SampleOMCard;
