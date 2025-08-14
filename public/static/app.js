// Hello World 前端交互逻辑

// 测试API功能
async function testAPI() {
  const resultDiv = document.getElementById('api-result');
  
  try {
    // 显示加载状态
    resultDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 正在调用API...';
    resultDiv.classList.add('show');
    
    // 调用多个API
    const [helloResponse, timeResponse] = await Promise.all([
      axios.get('/api/hello'),
      axios.get('/api/time')
    ]);
    
    // 格式化结果
    const result = {
      hello_api: helloResponse.data,
      time_api: timeResponse.data,
      call_time: new Date().toLocaleString('zh-CN')
    };
    
    // 显示结果
    resultDiv.innerHTML = `
      <h4><i class="fas fa-check-circle text-green-500"></i> API调用成功！</h4>
      <pre>${JSON.stringify(result, null, 2)}</pre>
    `;
    
  } catch (error) {
    console.error('API调用失败:', error);
    resultDiv.innerHTML = `
      <h4><i class="fas fa-exclamation-triangle text-red-500"></i> API调用失败</h4>
      <p>错误信息: ${error.message}</p>
    `;
  }
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Hello World 网站已加载完成！');
  
  // 添加一些动画效果
  const features = document.querySelectorAll('.feature');
  features.forEach((feature, index) => {
    feature.style.animationDelay = `${index * 0.1}s`;
    feature.classList.add('animate-fadeInUp');
  });
});

// 添加一些全局工具函数
window.testAPI = testAPI;

// 控制台欢迎信息
console.log(`
🌟 欢迎使用 Hello World 网站！
📝 这是一个基于 Hono + Cloudflare Pages 的现代web应用
⚡ 技术栈: TypeScript + Hono + TailwindCSS
🚀 部署平台: Cloudflare Pages
`);