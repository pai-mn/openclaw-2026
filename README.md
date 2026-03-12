# OpenClaw 2026

**应运而生，因时而成**

OpenClaw 演示网站 —— 一个展示 AI Agent 架构哲学、核心能力与未来思考的交互式 Web 应用。

## 📖 内容结构

### 01 | OpenClaw的诞生
- AI 发展史时间线（从 AlexNet 到 Claude Sonnet 4.5）
- 四块拼图：LLM + Bash + MCP + Skills
- 真实问题：性能、配置、安全、成本

### 02 | OpenClaw可以做什么
- 多渠道通信（IM 直连）
- 24小时自主运行示例
- 丰富的工具能力边界
- Claw 生态宇宙（15+ 框架）

### 03 | OpenClaw的原理
- **核心哲学：Bash is All You Need**
  - 与其定义成千上万个 API，不如给 Agent 一个终端
  - Bash + 文件系统 = 通用计算能力
- 系统架构图
- Agent 执行循环

### 04 | AI Agent与我们
20+ 精选话题卡片：
- 哲学思考（维特根斯坦、庄子、第一性原理）
- 技术原理（光电效应、最小二乘法、熵与智能）
- 产业洞察（Anthropic 研究、Martin Fowler）
- 方法论（TDD、抽象泄漏法则、Agentic Workflow）
- 趋势观察（大的要来了、2028全球智能危机）

### 05 | 感谢聆听
Q & A

## 🚀 快速开始

```bash
# 安装依赖
bun install

# 开发模式
bun run dev

# 构建生产版本
bun run build

# 启动生产服务器
bun start
```

访问 `http://localhost:2026`

## 🌐 国际化支持

支持三语切换：
- 🇨🇳 简体中文
- 🇺🇸 English
- 🇰🇷 한국어

翻译文件位于 `src/i18n/locales/`

## 🛠 技术栈

- **运行时：** Bun
- **框架：** Next.js 16 (App Router)
- **UI 库：** React 19
- **样式：** Tailwind CSS 4
- **图标：** Lucide React
- **国际化：** js-yaml
- **路径别名：** `@/*` 指向 `src/`

## 📂 项目结构

```
src/
├── app/
│   ├── page.tsx                    # 首页导航
│   ├── openclaw-puzzle/            # 01 OpenClaw的诞生
│   ├── openclaw-capabilities/      # 02 OpenClaw可以做什么
│   ├── openclaw-principle/         # 03 OpenClaw的原理
│   ├── ai-agent-and-us/           # 04 AI Agent与我们
│   ├── ending/                     # 05 感谢聆听
│   └── components/                 # 可复用组件
├── i18n/
│   ├── index.ts                    # i18n 核心逻辑
│   └── locales/                    # 翻译文件
│       ├── zh.yaml
│       ├── en.yaml
│       └── ko.yaml
└── styles/
    └── globals.css
```

## 🎨 设计特色

- 渐变色彩体系（红-橙-绿-蓝-紫）
- 响应式布局（移动端适配）
- 流畅的页面切换动画
- 轻量级交互反馈
- 两列瀑布流卡片布局（AI Agent与我们页面）
- 可点击放大的架构图与流程图

## 📝 License

MIT
