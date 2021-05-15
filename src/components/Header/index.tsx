import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react'
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from '../MediaQueryVariables';
import styles from './head.module.scss'
import { LinkItem } from './LinkItem';
import { MenuToggle } from './MenuTogle'

export function Header() {
  const isMobile = useMediaQuery({maxWidth: DeviceSize.tablet})
  const [isOpen, setOpen] = useState(false);

  const path = useRouter();
  useEffect(() => {
    setOpen(false)
  },[path.asPath])

  return(
    <header className={styles.headerContainer}>
      {isMobile ? (
        <>
          <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)}/>
          {isOpen && (
            <>
              <ul>
                <img src="logo.png" alt="Logo" />
                <LinkItem linkUrl="/" linkName="Home"/>
                <LinkItem linkUrl="/counter" linkName="Counter"/>
                <LinkItem linkUrl="/users" linkName="Users"/>
                <LinkItem linkUrl="/posts" linkName="Posts"/>
              </ul>
            </>
          )}
        </>
        ) : (
          <>
          <img src="logo.png" alt="Logo" />
          <ul>
            <LinkItem linkUrl="/" linkName="Home"/>
            <LinkItem linkUrl="/counter" linkName="Counter"/>
            <LinkItem linkUrl="/users" linkName="Users"/>
            <LinkItem linkUrl="/posts" linkName="Posts"/>
          </ul>
        </>
      )}
      
    </header>
  )

  // return (
  //   isMobile ? (
  //     <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)}/>      
  //   ) : (
  //     <header className={styles.headerContainer}>
  //     <img src="logo.png" alt="Logo" />
  //     <ul>
  //       <Link href="/">
  //         <a>
  //           <li>
  //             Home
  //           </li>
  //         </a>
  //       </Link>

  //       <Link href="/counter">
  //         <a>
  //           <li>
  //             Counter
  //           </li>
  //         </a>
  //       </Link>

  //       <Link href="/users">
  //         <a>
  //           <li>
  //             Users
  //           </li>
  //         </a>
  //       </Link>
  //     </ul>
      
  //   </header>
  //   )
  // )
}