const postcssPresetEnv = require(`postcss-preset-env`)

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 0,
      importFrom: "src/styles/global.module.css",
      features: {
        "custom-properties": true, // already enabled by default
        "custom-media-queries": true,
        "custom-selectors": true,
      },
    }),
  ],
})
