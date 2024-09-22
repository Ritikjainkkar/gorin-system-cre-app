// components/SampleOMGrid.tsx

import React from 'react';
import SampleOMCard from './SampleOMCard';
import styles from './SampleOMGrid.module.css';

interface OMData {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

interface SampleOMGridProps {
  omData: OMData[];
}

const SampleOMGrid: React.FC<SampleOMGridProps> = ({ omData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.layer}>
        <h2 className={styles.heading}>Sample OMs created with our platform</h2>
        <div className={styles.grid}>
          {omData.map((om, index) => (
            <SampleOMCard
              key={index}
              image={om.image}
              title={om.title}
              subtitle={om.subtitle}
              description={om.description}
              buttonText={om.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SampleOMGrid;
