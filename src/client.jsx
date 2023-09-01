import imageUrlBuilder from '@sanity/image-url'
import {createClient} from '@sanity/client'
import { PortableText } from '@portabletext/react';

export const client = createClient({

  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
  
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export const RenderBlockContent = ({ blocks }) => {
  return <PortableText value={blocks} />
}
