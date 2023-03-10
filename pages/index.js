import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/BlogCard";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcopjtjm08v901ungpi56cog/master"
);
const QUERY = gql`
  {
    posts {
      id
      title
      slug
      catagury
      content {
        html
      }
      timeToRead
      cardsDescription
      coverPhoto {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home(posts) {
  return (
    <>
      <Head>
        <title>Mana blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.blog}>
          <div className={styles.blogCards}>
            {posts.posts.map((post) => (
              <BlogCard
                title={post.title}
                coverPhoto={post.coverPhoto}
                key={post.id}
                slug={post.slug}
                catagury={post.catagury}
                timeToRead={post.timeToRead}
                cardsDescription={post.cardsDescription}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
