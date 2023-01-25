import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

export default function BlogCard({
  title,
  cardsDescription,
  catagury,
  coverPhoto,
  timeToRead,
  slug,
}) {
  return (
    <div className={styles.blogCard}>
      <div>
        <Link href={"/posts/" + slug}>
          <div className={styles.cardsImg}>
            <img src={coverPhoto.url} alt="blog post" />
          </div>
        </Link>
        <div>
          <div className={styles.cardsInfoHeader}>
            <div>
              <h4>{catagury}</h4>
            </div>
            <div>
              <h4>{timeToRead}</h4>
            </div>
          </div>
          <div className={styles.cardsInfoFooter}>
            <h2>{title}</h2>
            <p>{cardsDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
