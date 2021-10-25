import { Link, routes } from '@redwoodjs/router'

const HomeLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>My Portfolio</h1>

        <nav>
          <ul>
            <li><Link to={routes.home()}>Home</Link></li>
            <li><Link to={routes.about()}>About</Link></li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <h3>Find me online:</h3>
        <ul>
          <li><a href="https://twitter.com/">Twitter</a></li>
          <li><a href="https://github.com/">GitHub</a></li>
        </ul>
        <small>Made with RedwoodJS</small>
      </footer>
    </>
  )
}

export default HomeLayout