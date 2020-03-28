const path = require('path');
// This is done for recharts -corejs compatibility: https://github.com/gatsbyjs/gatsby/issues/15601#issuecomment-583800059
// https://github.com/recharts/recharts/issues/1673
exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
    const config = getConfig();

    const coreJs2config = config.resolve.alias['core-js'];
    delete config.resolve.alias['core-js'];
    config.resolve.alias[`core-js/modules`] = `${coreJs2config}/modules`;
    try {
        config.resolve.alias[`core-js/es`] = path.dirname(require.resolve('core-js/es'));
    } catch (err) {}
    actions.replaceWebpackConfig(config);
};
