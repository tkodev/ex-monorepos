const config = require("config/eslint-preset");

module.exports = {
  ...config,
  extends: ["next/babel", ...config.extends]
}
