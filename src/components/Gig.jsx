import styles from './Gig.module.css'
import React from 'react'

const Gig = ({ gig, isFavourite, handleClick }) => {
  const { bandName, imgSrc, description, timeDate, location } = gig;

  return (
    <div className={styles["gig-div"]}>
      <h3>{bandName}</h3>
      <img src={imgSrc} alt="band image" className={styles["band-img"]} />
      <p>{description}</p>
      <p>{timeDate}</p>
      <p>{location}</p>
      <button data-testid="heart-btn" className={styles["heart-btn"]} onClick={handleClick} style={isFavourite ? { backgroundColor: "red" } : undefined}></button>
    </div>
  )
}

export default React.memo(
  Gig,
  (prev, next) =>
    prev.gig === next.gig && prev.isFavourite === next.isFavourite
);