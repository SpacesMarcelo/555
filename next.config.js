
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['cUHwTDoU9G18qb52LC1rGT'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  