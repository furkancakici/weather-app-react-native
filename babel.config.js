module.exports = function (api) {
    const config = require('./tsconfig.json')

    const { baseUrl, paths } = config.compilerOptions

    const getAliases = () => {
        return Object.entries(paths).reduce((aliases, alias) => {
            const key = alias[0].replace('/*', '')
            const value = baseUrl + alias[1][0].replace('*', '')
            return {
                ...aliases,
                [key]: value
            }
        }, {})
    }

    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            'nativewind/babel',
            [
                'module-resolver',
                {
                    extensions: ['.js', '.jsx', '.ts', '.tsx', '.android.js', '.android.tsx', '.ios.js', '.ios.tsx'],
                    alias: getAliases()
                }
            ]
        ]
    }
}
