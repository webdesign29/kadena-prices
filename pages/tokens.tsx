import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllTokens } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import Header from '../components/header'

type Props = {
  allTokens: Post[]
}

const Index = ({ allTokens }: Props) => {
  return (
    <>
      <Layout>
        <Header />
        <Head>
          <title>Kadena Tokens {CMS_NAME}</title>
        </Head>
        <Container>
            <h2 className="mt-4 mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
                Tokens
            </h2>
            {allTokens.length > 0 && <MoreStories tokens={allTokens} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allTokens = getAllTokens([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allTokens },
  }
}
