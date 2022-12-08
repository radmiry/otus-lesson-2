module.exports = {
    coverageDirectory: "coverage",
    testEnvironment: "node",
    moduleDirectories: ["node_modules", "src"],
    clearMocks: true,
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
};