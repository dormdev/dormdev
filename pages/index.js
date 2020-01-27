import React from 'react'

import DocumentHead from '~/components/Head'
import Global from '~/layout/Global'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import HeroSection from '~/components/homepage/HeroSection'
import SubscribeSection from '~/components/homepage/SubscribeSection'
import FeaturedSection from '~/components/homepage/FeaturedSection'
import OpenSourceSection from '~/components/homepage/OpenSourceSection'

export default () => (
  <>
    <DocumentHead />
    <Global>
      <Header />
      <HeroSection />
      <SubscribeSection />
      <FeaturedSection />
      <OpenSourceSection />
      <Footer />
    </Global>
  </>
)
