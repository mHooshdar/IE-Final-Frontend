import Link from 'next/link'

const Index = () => (
  <div>
    <style jsx>{`
      .link {
        color: green;
      }
    `}</style>

      
    <Link href="/about">
      <a className="link">
        About Page
      </a>
    </Link>
    <Link href="/about">
      <button>About Page</button>
    </Link>
    <p>Hello Next.js</p>
    <div className='col-lg-3'>
      a
    </div>
    <div className='col-sm-3'>
      a
    </div>
  </div>
)

export default Index
