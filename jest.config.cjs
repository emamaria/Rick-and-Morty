/* eslint-disable no-undef */
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    moduleNameMapper: {
        "^.+\\.(css|scss)$": "identity-obj-proxy",
        
      }
    
}