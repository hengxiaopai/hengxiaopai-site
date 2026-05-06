# 部署说明

## 推荐架构

```text
GitHub Repository → Vercel / Cloudflare Pages / 香港 KVM → Cloudflare DNS/CDN/WAF → hengxiaopai.com
```

## 方案 A：Vercel 部署

适合 Next.js 官网快速上线与预览环境。

1. 登录 Vercel。
2. Import Git Repository：`hengxiaopai/hengxiaopai-site`。
3. Framework Preset 选择 Next.js。
4. Build Command：`npm run build`。
5. Output 默认即可。
6. 在 Vercel 添加域名：`hengxiaopai.com` 与 `www.hengxiaopai.com`。
7. 在 Cloudflare DNS 中按 Vercel 提示添加记录。

## 方案 B：Cloudflare Pages

适合你已经使用 Cloudflare 管理域名、希望统一 CDN/WAF/Turnstile 的情况。

1. Cloudflare Pages 连接 GitHub 仓库。
2. Framework preset 选择 Next.js。
3. Build command：`npm run build`。
4. 根据 Cloudflare 当前 Next.js 适配要求配置运行环境。
5. 绑定自定义域名：`hengxiaopai.com`。

## 方案 C：香港 KVM 自托管

适合你希望完全掌控服务器，后续同机部署博客、API、自动化服务。

```bash
git clone https://github.com/hengxiaopai/hengxiaopai-site.git
cd hengxiaopai-site
npm install
npm run build
npm run start
```

建议使用 PM2：

```bash
npm install -g pm2
pm2 start npm --name hengxiaopai-site -- start
pm2 save
pm2 startup
```

建议使用 Nginx 反代：

```nginx
server {
  listen 80;
  server_name hengxiaopai.com www.hengxiaopai.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

## Cloudflare 建议

- SSL/TLS：Full 或 Full Strict
- 开启 Brotli
- 开启 HTTP/2 / HTTP/3
- WAF 开启基础托管规则
- 后续联系表单接入 Cloudflare Turnstile
- `blog.hengxiaopai.com` 可单独指向 Halo / 博客服务

## 下一步

- 增加 GitHub Actions 自动构建检查
- 增加联系表单与邮件服务
- 增加案例页、关于页、产品页
- 增加 3D 视觉降级策略与性能监测
