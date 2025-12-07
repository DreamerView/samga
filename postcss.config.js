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
          'bi',
          'bi-house',
          'bi-compass',
          'bi-calendar-week',
          'bi-file-earmark-richtext',
          'bi-grid',
          'bi-list',
          'bi-bell',
          'bi-chat-dots',
          'bi-plus-lg',
        ],
      }
    })
  ]
};
