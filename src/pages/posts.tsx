import Head from "next/head";
import Link from "next/link";
import {GetStaticProps} from 'next'
import { useState } from "react";

import commonStyles from '../styles/common.module.scss'
import styles from '../styles/posts.module.scss'

interface post {
  id: string,
  title: string
}

interface PostsProps {
  postsInfo: post[]
}

export default function Posts({postsInfo}: PostsProps) {
  
  const [page, setPage] = useState(1)

  const numberPostPerPage = 10;
  let currentPosts = [];

  if (page === 1) {
    currentPosts = postsInfo.slice( 0 , numberPostPerPage * page);
  } else {
    currentPosts = postsInfo.slice( numberPostPerPage * (page - 1) , numberPostPerPage * page);
  }

  const numberPage = Math.ceil(postsInfo.length/ numberPostPerPage);

  return(
    <>
      <Head>
        <title>Posts</title>
      </Head>
      
      <div className={`${commonStyles.mainContainer} ${styles.postContainer}`}>
        <h1 className={commonStyles.title}>List of Posts</h1>
        <table>
          <thead>
            <tr>
              <th>Titles</th>
            </tr>
          </thead>
          <tbody>
            {
              currentPosts.map((post) => (
                <tr key={post.id}>
                  <td className={commonStyles.tableLink}>
                    <Link href={`/posts/${post.id}`}>
                      <a> {post.title}</a>
                    </Link>
                  </td>
                </tr>
              ))
            }


          </tbody>


        </table>
        <div className={styles.postsBtn}>
          <button onClick={() => setPage(page -1)} disabled={page < 2}>Previous</button>
          <p>{page} / {numberPage}</p>
          <button onClick={() => setPage(page + 1)} disabled={page > (numberPage - 1)}>Next</button>
        </div>

      </div>
    </>
  )
}

export const getStaticProps:GetStaticProps = async() => {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=11`)
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await res.json();
  let postsInfo = []

  posts.map((post) => {
    postsInfo.push({
      'id': post.id,
      'title': post.title
    })
  })
  return {
    props: {postsInfo}
  }
}