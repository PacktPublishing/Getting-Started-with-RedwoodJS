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