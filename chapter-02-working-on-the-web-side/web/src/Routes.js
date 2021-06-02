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