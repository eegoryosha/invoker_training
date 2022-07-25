module.exports = {
    chainWebpack: config => config.optimization.minimize(false),
    publicPath: process.env.NODE_ENV === 'production' ?
        './' :
        '/',
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "@/assets/scss/_variables.scss";'
            }
        }
    }
};
