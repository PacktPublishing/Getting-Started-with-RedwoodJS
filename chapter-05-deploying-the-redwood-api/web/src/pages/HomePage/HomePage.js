import { MetaTags } from '@redwoodjs/web'
import HomeLayout from 'web/src/layouts/HomeLayout/HomeLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <HomeLayout>
      <MetaTags
        title="Home"
        description="My web development portfolio site home page"
      />

      <p>This is the home page!</p>

      <BlogPostsCell />
    </HomeLayout>
  )
}

export default HomePage