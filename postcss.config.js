import purgecssPlugin from '@fullhuman/postcss-purgecss';

const purgecss = purgecssPlugin.default;

export default {
  plugins: [
    purgecss({
      content: [
        './index.html',
        './src/**/*.vue',
        './src/**/*.js',
      ],
      defaultExtractor: content =>
        content.match(/[A-Za-z0-9-_:%/]+/g) || [],

      safelist: {
        standard: [
          /^container/, /^row/, /^col-/,
          /^d-/, /^flex/, /^justify-/, /^align-/, /^gap-/,
          /^mt-/, /^mb-/, /^ms-/, /^me-/, /^px-/, /^py-/,
          /^position-/, /^top-/, /^start-/, /^end-/, /^bottom-/, /^translate-/,
          /^rounded-/,

          /^btn/, /^badge/,

          /^bg-/, /^text-/,
        ],
        deep: [/^bi-/],
      }
    })
  ]
};
