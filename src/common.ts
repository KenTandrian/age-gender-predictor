const { version } = require("../package.json");

export const APP_VERSION = import.meta.env.npm_package_version || version;