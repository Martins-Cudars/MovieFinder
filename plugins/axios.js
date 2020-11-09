export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    // add apikey to each request
    config.params.apikey = process.env.API_KEY
  })
}
