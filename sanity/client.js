const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'gky1ig75',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: 'sk8WgSOZj0SwcbrZ9twok5mRIB9O4eTSvJc60rqGSAZPLjWBcEu6YbIejfb6ToOAqzSMgJ4TvC7rLpSXkOGieIwxVhoEi71X8fjS2Rfp70kzJnUjWI3gg0yTgw7lg7XoL3CwGUcmxExrQHnA4JAFpkF0fsD6SKwvFDM4KvGKlojA2K150FuE', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client;