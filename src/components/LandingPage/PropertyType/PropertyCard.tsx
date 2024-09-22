import React from 'react';
import Image from 'next/image';
import styles from './PropertyCard.module.css';

interface PropertyCardProps {
  name: string;
  icon: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ name, icon }) => {
  return (
    <div className={styles.card}>
      <Image src={icon} alt={name} width={64} height={64} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default PropertyCard;
