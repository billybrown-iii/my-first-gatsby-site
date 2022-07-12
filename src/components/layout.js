import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby';
// @ts-ignore
import { nav } from './layout.module.css';



const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
    query {
        site {
        siteMetadata {
            title
        }
        }
    }`
    )

  return (
    <div className="p-4 text-center">
      <title>{pageTitle}</title>
      <nav className={nav}>
        <ul className="flex">
          <li className="p-2 mx-5"><Link to="/">{data.site.siteMetadata.title}</Link></li>
          <li className="p-2 mx-5"><Link to="/about">About</Link></li>
          <li className="p-2 mx-5"><Link to="/blog">Blog</Link></li>
          

        </ul>
      </nav>
      <main className='w-2/3 m-auto'>
        <h1 className="text-3xl mb-5">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout