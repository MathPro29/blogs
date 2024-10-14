import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import BlogPostCard from '../../components/blogPostCard/BlogPostCard'
import Boardtps from '../../components/board/Boardtopics'

function Home() {
  return (
    <Layout>
        <HeroSection/>
        <BlogPostCard/>
        <Boardtps />
    </Layout>
  )
}

export default Home