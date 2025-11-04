import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '7mqq8y0t', // your project ID
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: false,
})

const builder = imageUrlBuilder(client)
console.log("✅ Sanity client connected:", client)
export const urlFor = (source) => builder.image(source)
export default client
