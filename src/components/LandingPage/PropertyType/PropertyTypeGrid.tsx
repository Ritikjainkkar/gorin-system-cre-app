import React from 'react';
import PropertyCard from './PropertyCard';
import styles from './PropertyTypeGrid.module.css';

interface PropertyType {
  name: string;
  icon: string;
}

interface PropertyTypeGridProps {
  propertyTypes: PropertyType[];
}

const PropertyTypeGrid: React.FC<PropertyTypeGridProps> = ({ propertyTypes }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.subheading}>Create OMs and Ads For</h3>
      <h2 className={styles.heading}>Various Real Estate Property Types</h2>
      <div className={styles.grid}>
        {propertyTypes.map((property, index) => (
          <PropertyCard key={index} name={property.name} icon={property.icon} />
        ))}
      </div>
    </div>
  );
};

export default PropertyTypeGrid;
