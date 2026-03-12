import styles from "./NewsBox.module.css"

const NewsBox = ({headline, description}) => {
  return (
    <div className={styles.news}>
      <h2>{headline}</h2>
      <p>{description}</p>
    </div>
  )
}

export default NewsBox
