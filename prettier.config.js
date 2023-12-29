const styleguide = require('@vercel/style-guide/prettier');

const sg = { ...styleguide, ...{ tabWidth : 4 } };

module.exports = {
  ...sg,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
