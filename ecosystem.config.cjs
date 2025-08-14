module.exports = {
  apps: [
    {
      name: 'webapp',
      script: 'npx',
      args: 'wrangler pages dev dist --ip 0.0.0.0 --port 3000',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      watch: false, // 禁用PM2文件监控
      instances: 1, // 开发模式只使用一个实例
      exec_mode: 'fork'
    }
  ]
}