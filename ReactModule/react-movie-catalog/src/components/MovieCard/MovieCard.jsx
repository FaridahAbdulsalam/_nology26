import styles from "./MovieCard.module.css"

const MovieCard = ({title, director, year, rating}) => {

    
  return (
    <div className={styles.movieCard}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.director}>{director} </h3>
      <h4 className={styles.year}>{year}</h4>
      <p className={styles.rating}>Rating: {rating}</p>
    </div>
  )
}

export default MovieCard
