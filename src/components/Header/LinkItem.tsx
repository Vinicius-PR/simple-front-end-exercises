import Link from 'next/link'

interface LinkItemProps {
  linkUrl: string;
  linkName: string;
}

export function LinkItem({ linkUrl, linkName}: LinkItemProps) {
  return (
    <Link href={linkUrl}>
      <a>
        <li>
          {linkName}
        </li>
      </a>
    </Link>
  )
}