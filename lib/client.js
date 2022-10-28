import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '0g0z86x2',
    dataset: 'production',
    apiVersion: '2022-10-28',
    useCdn: true,
    token: process.env.REACT_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)