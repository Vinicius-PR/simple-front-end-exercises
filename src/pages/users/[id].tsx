import {GetStaticProps, GetStaticPaths} from 'next'
import Link from 'next/link'

import commonStyles from '../../styles/common.module.scss'
import styles from './user.module.scss'

interface UserInfo {
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  }
  phone: string;
  company: {
    name: string;
  }  
}

export default function User(user: UserInfo) {
  return(
    <div className={`${commonStyles.mainContainer} ${styles.info}`}>
      <h1 className={commonStyles.title}>User Information</h1>

      <div>
        <h2>{user.name}</h2>
        <p><strong>Username: </strong> {user.username}</p>
      </div>

      <div>
        <p><strong>Email: </strong>{user.email}</p>
        <p><strong>Phone: </strong>{user.phone}</p>
        <p><strong>Address: </strong>Street {user.address.street}, {user.address.suite}. City {user.address.city} - {user.address.zipcode}</p>
        <p><strong>Work at company: </strong>{user.company.name}</p>
      </div>
      
      <p className={styles.link}>
        <Link href="/users">
          <a>Back</a>
        </Link>     
      </p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json()

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }))
  return { paths, fallback: false }
}


export const getStaticProps: GetStaticProps = async({params} ) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await res.json()
  return {
    props: user
  }
}