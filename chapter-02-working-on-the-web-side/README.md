# Chapter 2 - Working on the Web Side

## 1. Technical Requirements

## 2. Using the Redwood CLI

### Creating a Redwood App

```bash
yarn create redwood-app portfolio-site
cd portfolio-site
yarn rw dev
```

### Helpful Redwood Commands

```bash
yarn rw info
yarn rw --version
yarn rw help
```

## 3. Generating Pages

### Creating a Home Page

```bash
yarn rw g page home /
```

```jsx
// web/src/pages/HomePage/HomePage.js

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
```

```jsx
// web/src/pages/HomePage/HomePage.js

import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Home"
        description="My web development portfolio site home page"
      />

      <h1>My Portfolio</h1>
      <p>This is the home page!</p>

      <footer>
        <h3>Find me online:</h3>
        <ul>
          <li><a href="https://twitter.com/">Twitter</a></li>
          <li><a href="https://github.com/">GitHub</a></li>
        </ul>
      </footer>
    </>
  )
}

export default HomePage
```

### Creating an About Page

```bash
yarn rw g page about
```

```jsx
// web/src/pages/AboutPage/AboutPage.js

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags
        title="About"
        // description="About description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>AboutPage</h1>
      <p>
        Find me in <code>./web/src/pages/AboutPage/AboutPage.js</code>
      </p>
      <p>
        My default route is named <code>about</code>, link to me with `
        <Link to={routes.about()}>About</Link>`
      </p>
    </>
  )
}

export default AboutPage
```

```jsx
// web/src/pages/AboutPage/AboutPage.js

import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags
        title="About"
        description="A brief summary of who I am and what I do"
      />

      <h1>About</h1>
      <p>This page tells you about stuff!</p>
    </>
  )
}

export default AboutPage
```

### Modify Routes to Change Paths

```jsx
// web/src/Routes.js

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
```

## 4. Generating Layouts

### Create a Layout for Navigation Bar and Footer

```bash
yarn rw g layout home
```

```jsx
// web/src/layouts/HomeLayout/HomeLayout.js

const HomeLayout = ({ children }) => {
  return <>{children}</>
}

export default HomeLayout
```

```jsx
// web/src/layouts/HomeLayout/HomeLayout.js

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
          <li>
            <a href="https://twitter.com/">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/">GitHub</a>
          </li>
        </ul>
        <small>Made with RedwoodJS</small>
      </footer>
    </>
  )
}

export default HomeLayout
```

### Import Layout on Home and About Pages

```jsx
// web/src/pages/HomePage/HomePage.js

import { MetaTags } from '@redwoodjs/web'
import HomeLayout from 'web/src/layouts/HomeLayout/HomeLayout'

const HomePage = () => {
  return (
    <HomeLayout>
      <MetaTags
        title="Home"
        description="My web development portfolio site home page"
      />

      <p>This is the home page!</p>
    </HomeLayout>
  )
}

export default HomePage
```

```jsx
// web/src/pages/AboutPage/AboutPage.js

import { MetaTags } from '@redwoodjs/web'
import HomeLayout from 'web/src/layouts/HomeLayout/HomeLayout'

const AboutPage = () => {
  return (
    <HomeLayout>
      <MetaTags
        title="About"
        description="A brief summary of who I am and what I do"
      />

      <h1>About</h1>
      <p>This page tells you about stuff!</p>
    </HomeLayout>
  )
}

export default AboutPage
```