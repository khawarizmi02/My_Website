import imageUrlBuilder from '@sanity/image-url'
import {createClient} from '@sanity/client'
import { PortableText } from '@portabletext/react';
import { BsFillCircleFill } from "react-icons/bs";

import "./index.css"

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

const components = {
  block: {
    h1: ({children}) => <h1 className="text-semibold text-[25px]">{children}</h1>,
    h2: ({children}) => <h2 className="text-semibold text-[20px]">{children}</h2>,
    p: ({children}) => <p className="text-reqular text-[20px]">{children}</p>,
  },

  listItem: {
    bullet: ({children}) => <li 
      className='font-poppins text-[20px] flex items-center space-x-4 pl-3'>
      <BsFillCircleFill className='w-2 h-2'/> <div>{children}</div>
    </li>,
    number: ({children}) => <li className="font-poppins text-[20px] pl-3">{children}</li>,
  },
}

export const RenderBlockContent = ({ blocks }) => {
  return <PortableText value={blocks} components={components}/>
}
