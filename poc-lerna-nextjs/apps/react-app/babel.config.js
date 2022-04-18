

module.exports = (api) => {
  api.cache(true)

  console.log('xxxx apps/react-app babel.config.js')

  const presets = [
    [
      '@babel/preset-env',
      {
        'debug': false,
        'targets': {'ie':'11'},
        'useBuiltIns': 'usage',
        // 'corejs': 3,  // dynamic import is broken:
                         // https://github.com/babel/babel/issues/9872
                         // so we will use corejs@2 instead
        'corejs': 2,
        'modules': false
      }
    ],
    '@babel/preset-react',
  ]

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import'
  ].filter(Boolean)

  return {
    presets,
    plugins
  }
}
