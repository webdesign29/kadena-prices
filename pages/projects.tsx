import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllProjects } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import Header from '../components/header'

type Props = {
  allProjects: Post[]
}

const Index = ({ allProjects }: Props) => {
  return (
    <>
      <Layout>
        <Header />
        <Head>
          <title>Kadena Projects {CMS_NAME}</title>
        </Head>
        <Container>
            <h2 className="mt-4 mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
                Projects
            </h2>
            {allProjects.length > 0 && <MoreStories posts={allProjects} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allProjects },
  }
}
