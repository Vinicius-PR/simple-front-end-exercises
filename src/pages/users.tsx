import { GetStaticProps } from 'next'
import Link from 'next/link';
import Head from "next/head";
import { useMediaQuery } from 'react-responsive'
import { DeviceSize } from '../components/MediaQueryVariables';

import commonStyles from '../styles/common.module.scss'
import styles from '../styles/users.module.scss'

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  city: string;
  
}

interface UsersProps {
  usersInfo: User[]
}

export default function Pokemon({usersInfo}: UsersProps) {
 
  const isTablet = useMediaQuery({maxWidth: DeviceSize.tablet})
  const isMobile = useMediaQuery({maxWidth: DeviceSize.largeMobile})

  return(
    <div className={`${styles.userContainer} ${commonStyles.mainContainer}`}>
      <Head>
        <title>Users</title>
      </Head>
      
      <h1 className={commonStyles.title}>Our users</h1>
      {
        isMobile ? (
          <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
              {
                usersInfo.map(user => (
                  <tr key={user.id}>
                    <td className={commonStyles.tableLink}>
                      <Link href={`/users/${user.id}`}>
                        <a>{user.name}</a> 
                      </Link>
                    </td>
                    <td>{user.city}</td>
                  </tr>
                ))
              }
              </tbody>
          </table>
        ) : (
          isTablet ? (
            <table>
              <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
              </tr>
              </thead>
              <tbody>
              {
                usersInfo.map(user => (
                  <tr key={user.id}>
                    <td className={commonStyles.tableLink}>
                      <Link href={`/users/${user.id}`}>
                        <a>{user.name}</a> 
                      </Link>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.city}</td>
                  </tr>
                ))
              }
              </tbody>
          </table>
          ) : (
            <table>
              <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>City</th>
              </tr>
              </thead>
              <tbody>
              {
                usersInfo.map(user => (
                  <tr key={user.id}>
                    <td className={commonStyles.tableLink}>
                      <Link href={`/users/${user.id}`}>
                        <a>{user.name}</a> 
                      </Link>
                    </td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.city}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          )
        )
      }
    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  let usersInfo = [];
  users.map(user => {
    usersInfo.push({
      'id': user.id,
      'name': user.name,
      'username': user.username,
      'email': user.email,
      'city' : user.address.city,
    })
  })

  return {
    props: { usersInfo }
  }
}