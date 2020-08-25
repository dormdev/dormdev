import Head from 'next/head'
import PropTypes from 'prop-types'

const DocumentHead = ({ title, description, ogImage }) => (
  <Head>
    <title>{title || 'DormDev - Home of student developers'}</title>
    <meta
      name="title"
      content={title || 'DormDev - Home of student developers'}
    />
    <meta
      name="description"
      content={
        description ||
        'The best learning, tools, resources and support for students in tech. Be part of a community of developers, designers, and doers.'
      }
    />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https:/dormdev.com" />
    <meta
      property="og:title"
      content={title || 'DormDev - Home of student developers'}
    />
    <meta
      property="og:description"
      content={
        description ||
        'The best learning, tools, resources and support for students in tech. Be part of a community of developers, designers, and doers.'
      }
    />
    <meta
      property="og:image"
      content={
        ogImage ||
        'https://og-image.dormdev.com/**Home%20of%20student%20developers.**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fraw.githubusercontent.com%2Fdormdev%2Fdormdev%2Fmaster%2Fpublic%2Fassets%2Flogo.png&widths=350&heights=350'
      }
    />

    <meta
      property="twitter:card"
      content={ogImage ? 'summary_large_image' : 'summary'}
    />
    <meta property="twitter:url" content="https:/dormdev.com" />
    <meta
      property="twitter:title"
      content={title || 'DormDev - Home of student developers'}
    />
    <meta
      property="twitter:description"
      content={
        description ||
        'The best learning, tools, resources and support for students in tech. Be part of a community of developers, designers, and doers.'
      }
    />
    <meta
      property="twitter:image"
      content={ogImage || 'https://dormdev.com/assets/logo.png'}
    />

    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="/favicons/apple-touch-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/favicons/apple-touch-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="/favicons/apple-touch-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/favicons/apple-touch-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="/favicons/apple-touch-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/favicons/apple-touch-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="/favicons/apple-touch-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/favicons/apple-touch-icon-152x152.png"
    />
    <link
      rel="icon"
      type="image/png"
      href="/favicons/favicon-196x196.png"
      sizes="196x196"
    />
    <link
      rel="icon"
      type="image/png"
      href="/favicons/favicon-96x96.png"
      sizes="96x96"
    />
    <link
      rel="icon"
      type="image/png"
      href="/favicons/favicon-32x32.png"
      sizes="32x32"
    />
    <link
      rel="icon"
      type="image/png"
      href="/favicons/favicon-16x16.png"
      sizes="16x16"
    />
    <link
      rel="icon"
      type="image/png"
      href="/favicons/favicon-128.png"
      sizes="128x128"
    />

    <meta name="application-name" content="&nbsp;" />
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />

    <base target="_blank" />
  </Head>
)

DocumentHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  ogImage: PropTypes.string
}

export default DocumentHead
