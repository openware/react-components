module.exports = {
    setupFilesAfterEnv: ['jest-enzyme', '<rootDir>/jest/setup.tsx'],
    testEnvironment: 'enzyme',
    verbose: true,
    globals: {
        __webpack_hash__: '1',
    },
    // ---------------------------------------------------------------------------
    roots: ['<rootDir>'],
    transform: {
        '^.+\\.(tsx|ts)$': 'ts-jest',
    },
    testRegex: '.src/.*.(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'css', 'scss'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/jest/file.js',
        '^src(.*)$': '<rootDir>/src$1',
        '\\.(css|scss|pcss)$': '<rootDir>/jest/style.js',
    },
};
