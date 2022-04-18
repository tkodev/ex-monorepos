module.exports = (api) => {
  api.cache(true)

  console.log('xxx node-app babel.config.js')

  const presets = [
    [
      '@babel/preset-env',
      {
        'debug': false,
        'targets': {'node':'current'},
        'useBuiltIns': 'usage',
        // 'corejs': 3,  // dynamic import is broken:
                         // https://github.com/babel/babel/issues/9872
                         // so we will use corejs@2 instead
        'corejs': 2,
        'modules': 'commonjs'
      }
    ],
    '@babel/preset-typescript',
  ]

  const plugins = [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['@babel/plugin-proposal-class-properties', { 'loose': true }]
  ].filter(Boolean)

  return {
    presets,
    plugins
  }
}
