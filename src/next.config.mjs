/** @type {import('next').NextConfig} */
const nextConfig = {

    // output: "export",

    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,

    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,

    // distDir: "../docs",

    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.xml$/,
            use: [
                {
                    loader: 'raw-loader',
                }
            ]
        });

        return config;
    },
};

export default nextConfig;
