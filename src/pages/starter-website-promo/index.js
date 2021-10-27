import React from 'react'

import Head from '../../components/head'
import Layout from '../../components/layout'
import StarterPromoBanner from './starter-promo-banner'
import StarterPromoContact from './starter-promo-contact'
import StarterPromoDetails from './starter-promo-details'
import StarterPromoHero from './starter-promo-hero'
import StarterPromoPitch from './starter-promo-pitch'

const StarterPromoIndex = () => {
  return (
    <Layout type="subpage">
      <Head />
      <StarterPromoHero />
      <StarterPromoPitch />
      <StarterPromoBanner />
      <StarterPromoDetails />
      <StarterPromoContact />
    </Layout>
  )
}

export default StarterPromoIndex
