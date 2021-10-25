export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Almost there...</div>
export const Empty = () => <div>I NEED A POST</div>
export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>{error.message}</div>
)

export const Success = ({ posts }) => {
  return posts.map(post => (
    <article key={post.id}>
      <header>
        <h2>{post.title}</h2>
      </header>

      <p>{post.body}</p>

      <time>{post.createdAt}</time>
    </article>
  ))
}