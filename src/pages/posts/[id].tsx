import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import commonStyles from '../../styles/common.module.scss'

interface postProps {
  id: string;
  title: string;
  body: string;
}

export default function Post(post: postProps) {
  
  return(
    <>
      <Head>
        <title>Post {post.title}</title>
      </Head>
      <div className={commonStyles.mainContainer}>
        <h1 className={commonStyles.title}>{post.title}</h1>
        <p>{post.body}</p>

      </div>
    </>
  )
}
export const getStaticPaths:GetStaticPaths = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false }
}

export const getStaticProps:GetStaticProps = async({params}) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return {
    props : post
  }
}