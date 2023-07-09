## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

notes : 
installed barebones nextjs with recommended settings, using nextjs new app router.
<!-- installed pnpm -->

    npx create-next-app@latest
    <!-- npm install pnpm -->

installed  frontmatter-markdown-loader (looking for simplicity here)

    npm install frontmatter-markdown-loader

add this to config

    /** @type {import('next').NextConfig} */
    const nextConfig = {
        webpack: (cfg) => {
            cfg.module.rules.push(
                {
                    test: /\.md$/,
                    loader: 'frontmatter-markdown-loader',
                    options: { mode: ['react-component'] }
                }
            )
            return cfg
        }
    }

    module.exports = nextConfig

add a app/blog/[slug]/page.tsx file

added a folder called "components", build a bloglist.tsx component.