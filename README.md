# 珩小派科技有限公司官网

> High-end AI / OPC corporate website for **珩小派科技有限公司**.

这是一个面向“AI、人工智能、一人公司 OPC”赛道的企业官网项目。设计目标不是常见的 AI 紫蓝渐变模板，而是更克制、更高级、更可长期迭代的数字名片级官网。

## 品牌定位

**小体量，不小气场。**  
珩小派科技有限公司定位为高杠杆智能产品与解决方案工作室，强调精密、可信、克制、实验性与长期主义。

## 视觉方向

- 精密黑场：深色矿物质背景、克制光影、低噪声材质
- 高端科技：3D 粒子、轨道光线、微交互、滚动叙事
- 非 AI 味：避免机器人头像、过度紫蓝渐变、节点连线模板感
- 中文优先：面向中文官网场景优化字号、行高、段落节奏

## 技术栈

- Next.js App Router
- TypeScript
- Tailwind CSS
- Motion for React
- Three.js / React Three Fiber / Drei
- 渐进增强：低性能设备降级为 CSS / SVG 光影层

## 推荐部署

- 域名：`hengxiaopai.com`
- DNS / CDN / WAF：Cloudflare
- 应用部署：Vercel、Cloudflare Pages 或自有香港 KVM 服务器
- 博客入口：`blog.hengxiaopai.com`

## 本地开发

```bash
npm install
npm run dev
```

访问：

```text
http://localhost:3000
```

## 目录结构

```text
app/                 Next.js App Router 页面
components/          UI 与 3D/动效组件
lib/                 品牌文案、设计 token、工具函数
public/              logo、favicon、静态素材
DESIGN.md            项目专属设计系统规范
```

## 联系方式

- 微信公众号：珩小派
- 博客：<https://blog.hengxiaopai.com>
