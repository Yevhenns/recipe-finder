Check the production [version](https://recipe-finder-zeta-six.vercel.app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Note

For the form, I used the [Form](https://nextjs.org/docs/app/api-reference/components/form) component from next/form.

Instead of React Suspense, I used a loading page as specified in the [documentation](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming).

.env.local is not added to .gitignore as requested.

I created simplified loading and error pages as this is a test task.
