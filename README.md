# Eleventy Tailwind Starter

A very basic starting point for using [Eleventy](https://11ty.dev) and [TailwindCSS](https://tailwindcss.com).

## Usage

If you don't have npm installed, you can use [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md) to install the latest version.

Clone this repository:

```shell
$ git clone https://github.com/3x/eleventy-tailwind-starter
```

Enter the directory:

```shell
$ cd eleventy-tailwind-starter
```

Install the required npm packages:

```shell
npm i
```

Once installed, you can remove or overwrite `README.md`.

## Local development

For local development, use this command:

```shell
$ npm run dev
```

- Eleventy will scan the `_src/` directory and output content to `_site/`.
- Tailwind will create a full CSS document including all classes and styles, output to `_site/assets/css/main.css`. **Do not use this for production.**

## Building

When you're ready to publish your site using a service like [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com), use this command:

```shell
npm run build
```

- Eleventy will scan the `_src/` directory and output content to `_site/`.
- Tailwind will create an optimized CSS document containing only necessary classes, output to `_site/assets/css/main.css`. This will likely be hundreds of times smaller than the full Tailwind stylesheet, but is more complicated to use in development.
- cssnano will compress this stylesheet.

# FAQ

> Can I use different directories for Eleventy's source or for CSS input/output?

Yes, all of these paths have been defined in the scripts in `package.json`.