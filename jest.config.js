module.exports = {
    coverageDirectory: "coverage",
    testEnvironment: "node",
    clearMocks: true,
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
};