import Link from 'next/link'

const titleStyle = {
  fontSize: '4rem',
  lineHeight: '1.6',
  color: '#222'
}

export default () => (
  <div>
    <p style={titleStyle}>This is the about page</p>
    <Link href="/about">
      <a>About Page</a>
    </Link>
  </div>
)