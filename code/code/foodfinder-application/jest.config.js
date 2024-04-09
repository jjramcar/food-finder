const nextJest = require("next/jest"); 

const createJestConfig = nextJest({ 
    dir: "./",
}); 

const customJestConfig = { 
    moduleDirectories: ["node_modules","<rootDir>/"], 
    testEnviroment: "jest-environment-jsdom",
}; 

module.exports = createJestConfig(customJestConfig);