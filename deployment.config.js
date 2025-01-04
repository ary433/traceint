// Deployment configuration for Traceint applications
module.exports = {
  apps: [
    {
      name: 'traceint-api',
      script: 'apps/api/dist/main.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },
    {
      name: 'traceint-web',
      script: 'apps/web/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    }
  ]
};
