const path = require('path')
const withOffline = require('next-offline')
const withManifest = require('next-manifest')
const withSourceMaps = require('@zeit/next-source-maps')

const manifest = {
  output: path.join(__dirname, 'public'),
  name: 'DormDev',
  description: 'Home of student developers.',
  icons: [
    {
      src: '/assets/icons192.png',
      type: 'image/png',
      sizes: '192x192'
    },
    {
      src: '/assets/icons512.png',
      type: 'image/png',
      sizes: '512x512'
    }
  ]
}

module.exports = withManifest(
  withOffline(
    withSourceMaps({
      manifest,
      workboxOpts: {
        swDest: path.join(__dirname, 'public/service-worker.js')
      }
    })
  )
)
