const path = require('path')
const withOffline = require('next-offline')
const withManifest = require('next-manifest')
const withSourceMaps = require('@zeit/next-source-maps')
require('dotenv').config()

const env = {
  crispID: process.env.CRISP_ID,
  headwayAccount: process.env.HEADWAY_ACCOUNT,
  typeformSurveyID: process.env.TYPEFORM_SURVEY_ID
}

const manifest = {
  output: path.join(__dirname, 'public'),
  name: 'DormDev',
  short_name: 'DormDev',
  description: 'Home of student developers.',
  icons: [
    {
      src: '/assets/icon192.png',
      type: 'image/png',
      sizes: '192x192'
    },
    {
      src: '/assets/icon512.png',
      type: 'image/png',
      sizes: '512x512'
    }
  ]
}

const config = {
  env,
  manifest,
  workboxOpts: {
    swDest: path.join(__dirname, 'public/service-worker.js')
  }
}

const wrappedConfig = withManifest(withOffline(withSourceMaps(config)))

module.exports = wrappedConfig
