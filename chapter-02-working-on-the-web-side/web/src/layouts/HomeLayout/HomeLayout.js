import { Link, routes } from '@redwoodjs/router'

const HomeLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>ajcwebdev</h1>
        
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>Made with RedwoodJS</footer>
    </>
  )
}

export default HomeLayout