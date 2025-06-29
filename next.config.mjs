/** @type {import('next').NextConfig} */
const nextConfig = {

    basePath: '/how-the-body-works',
    assetPrefix: '/how-the-body-works/',

    // webpack: (config, { isServer }) => {
    //     config.module.rules.push({
    //         test: /\.(md|html)$/i,
    //         use: 'raw-loader',
    //     });
    //     return config;
    // },
    images: { unoptimized: true },
    output: "export",

    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,

    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,

    distDir: "docs",
};

export default nextConfig;
