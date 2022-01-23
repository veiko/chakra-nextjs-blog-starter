![tailwind-nextjs-banner](/public/assets/logo.svg)

# Chakra Nextjs Blog Starter

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/veiko/chakra-nextjs-blog-starter)

This is a [Next.js](https://nextjs.org/), [Chakra UI](https://chakra-ui.com/) blogging starter template.

Check out the documentation below to get started.

Feature request? Check the past discussions to see if it has been brought up previously. Otherwise, feel free to start a new discussion thread. All ideas are welcomed!

[Demo](https://chakra-nextjs-blog-starter.vercel.app/)

## Quick Start Guide

1. JS (official support)

```bash
npx create-next-app --example https://github.com/veiko/chakra-nextjs-blog-starter.git
# or
yarn create next-app --example https://github.com/veiko/chakra-nextjs-blog-starter.git
```

2. Next steps

## Installation

```bash
npm install
```

## Development

First, run the development server:

```bash
npm run dev
#or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Extend / Customize

`data/siteMetadata.js` - contains most of the site related information which should be modified for a user's need.

`layouts` - main templates used in pages.

`pages` - pages to route to. Read the [Next.js documentation](https://nextjs.org/docs) for more information.

`next.config.js` - configuration related to Next.js. You need to adapt the Content Security Policy if you want to load scripts, images etc. from other domains.

### Compose

Run `node ./scripts/compose.js` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled front matter.

## Deploy

**Vercel**  
The easiest way to deploy the template is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

**Netlify / GitHub Pages / Firebase etc.**  
As the template uses `next/image` for image optimization, additional configurations have to be made to deploy on other popular static hosting websites like [Netlify](https://www.netlify.com/) or [GitHub Pages](https://pages.github.com/). An alternative image optimization provider such as Imgix, Cloudinary or Akamai has to be used. Alternatively, replace the `next/image` component with a standard `<img>` tag. See [`next/image` documentation](https://nextjs.org/docs/basic-features/image-optimization) for more details.

## Licence

[MIT](https://github.com/veiko/chakra-nextjs-blog-starter/blob/master/LICENSE) © [Veronica Carrillo-Marquez](https://www.veiko.com)
