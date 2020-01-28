import React from 'react'

import DocumentHead from '~/components/Head'
import Global from '~/layout/Global'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import HeroSection from '~/components/homepage/HeroSection'
import NewsletterSection from '~/components/homepage/NewsletterSection'
import FeaturedSection from '~/components/homepage/FeaturedSection'
import OpenSourceSection from '~/components/homepage/OpenSourceSection'

export default () => (
  <>
    <DocumentHead />
    <Global>
      <Header />
      <HeroSection />
      <NewsletterSection />
      <FeaturedSection />
      <OpenSourceSection />
      <Footer />
    </Global>
  </>
)
