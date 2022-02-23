module.exports = {
    siteUrl: 'https://cv-nyctibiusvii.vercel.app',
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    exclude: ['/__tests__'],
    alternateRefs: [],
    // - Default transformation function
    transform: async (config, path) => {
        return {
            loc:           path, // => - This will be exported as http(s)://<config.siteUrl>/<path>
            changefreq:    config.changefreq,
            priority:      config.priority,
            lastmod:       config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        }
    },
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: ['/'],
                disallow: ['/__tests__']
            }
        ]
    }
}