import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()

// 启用CORS
app.use('/api/*', cors())

// 服务静态文件
app.use('/static/*', serveStatic({ root: './public' }))

// 使用渲染器
app.use(renderer)

// 主页
app.get('/', (c) => {
  return c.render(
    <div class="container">
      <div class="hero">
        <h1>🌟 Hello World!</h1>
        <p>欢迎来到我的第一个Hono网站</p>
        <div class="features">
          <div class="feature">
            <h3>⚡ 超快速度</h3>
            <p>基于Cloudflare Workers边缘计算</p>
          </div>
          <div class="feature">
            <h3>🚀 轻量框架</h3>
            <p>Hono框架，简洁高效</p>
          </div>
          <div class="feature">
            <h3>💻 现代开发</h3>
            <p>TypeScript + 现代工具链</p>
          </div>
        </div>
        <button onclick="testAPI()">测试API</button>
        <div id="api-result"></div>
      </div>
    </div>
  )
})

// API路由
app.get('/api/hello', (c) => {
  return c.json({ 
    message: 'Hello from Hono API!',
    timestamp: new Date().toISOString(),
    status: 'success'
  })
})

app.get('/api/time', (c) => {
  return c.json({
    time: new Date().toLocaleString('zh-CN'),
    timezone: 'Asia/Shanghai'
  })
})

export default app
