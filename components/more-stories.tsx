import PostPreview from './post-preview'
import ProjectPreview from './project-preview'
import TokenPreview from './token-preview'
import Post from '../types/post'

type Props = {
  posts?: Post[],
  projects?: Post[],
  tokens?: Post[],
}

const MoreStories = ({ posts, projects, tokens }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 mb-32 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
        {posts && posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
        {projects && projects.map((post) => (
          <ProjectPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
        {tokens && tokens.map((post) => (
          <div>
          <TokenPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
          kpsjkdsd
          </div>
        ))}
      </div>
    </section>
  )
}

export default MoreStories
