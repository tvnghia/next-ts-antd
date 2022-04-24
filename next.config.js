/* eslint-disable @typescript-eslint/no-var-requires */
const withAntdLess = require('next-plugin-antd-less')
const { i18n } = require('./next-i18next.config')

/**
 * @type {import('next').NextConfig}
 * */
module.exports = {
  ...withAntdLess({
    lessVarsFilePath: './src/styles/antdVariables.less',
    lessVarsFilePathAppendToEndOfContent: false,
  }),
  i18n,
  publicRuntimeConfig: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    STORAGE_URI: process.env.STORAGE_URI,
  },
  images: {
    // domains: ['s3.hlk-demo.online'],
  },
}
