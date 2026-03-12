import NewsBox from "../../components/newsBox/NewsBox"
import styles from "./NewsSection.module.css"


const NewsSection = () => {
  return (
    <section className={styles.newsSection}>
      <NewsBox headline = {"Ramadan: The Last 10 Days"} description = {"One of the holiest times for muslims around the world"}/>
      <NewsBox headline = {"Cats Rule the World"} description = {"How cats can instantly become the light of your life"}/>
      <NewsBox headline = {"TikTok: Has your time run out?"} description = {"Have influencers changed the career world"}/>
      <NewsBox headline = {"Netflix and Chill"} description = {"What does genZ love look like?"}/>
    </section>
  )
}

export default NewsSection
