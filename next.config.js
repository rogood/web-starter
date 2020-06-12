/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const withPWA = require('next-pwa')
require('dotenv').config()

module.exports = withPWA({
    pwa: {
        dest: 'public',
    },
    env: {
        FIREBASE_CONFIG: process.env.FIREBASE_CONFIG,
    },
    target: 'serverless',
})
