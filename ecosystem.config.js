module.exports = {
    apps: [
        {
            name: 'friedrichsays',
            script: './start.js',
            env: {
                HOST: 'localhost',
                PORT: 3000
            }
        }
    ],
}