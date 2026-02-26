# Niyu Blog 使用文档（中文）

本项目是基于 Fuwari 的 Astro 博客模板，已做 Argon 风格改造，并将配置统一收口到 `src/config.ts`。

## 环境要求

- Node.js `>= 24`
- pnpm `>= 10`（建议 `10.30.1`）

## 快速开始

```bash
corepack enable
corepack use pnpm@10.30.1
pnpm install
pnpm dev
```

访问：`http://localhost:4321`

## 模板仓库使用流程

1. 在 GitHub 点击 `Use this template`（或 Fork）。
2. 克隆自己的仓库到本地。
3. 修改 `src/config.ts`（所有配置都在这里）。
4. 本地运行确认。
5. 部署到 Vercel / Cloudflare Pages / 自托管。

## 配置说明（全部在 config.ts）

文件：`src/config.ts`

- `globalConfig`：站点 URL、仓库名/链接、RSS 回退描述、Astro base/trailingSlash
- `siteConfig`：博客名、副标题、语言、主题、Banner、目录、favicon
- `navBarConfig`：顶部导航链接
- `profileConfig`：侧栏头像、昵称、简介、社交链接
- `licenseConfig`：文章版权声明开关与内容
- `expressiveCodeConfig`：代码高亮主题

当前不需要 CMS 后台配置文件。

## 部署说明

产物目录：`dist/`

### Vercel

- Build Command: `pnpm build`
- Output Directory: `dist`
- 缓存头：`vercel.json`

### Cloudflare Pages

- Build Command: `pnpm build`
- Output Directory: `dist`
- 缓存头：`public/_headers`

### 自托管（Nginx）

1. 执行 `pnpm build`。
2. 上传 `dist/` 到服务器。
3. 套用 `deploy/nginx/astro-static-cache.conf` 缓存规则。

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `pnpm dev` | 启动本地开发服务器 |
| `pnpm build` | 生产构建并生成 Pagefind 索引 |
| `pnpm preview` | 本地预览生产构建 |
| `pnpm check` | Astro 类型/内容检查 |
| `pnpm type-check` | TypeScript 检查 |
| `pnpm new-post <slug>` | 新建文章模板 |

## 主题 Token 文档

- 中文：`docs/THEME_TOKENS.zh-CN.md`
- English：`docs/THEME_TOKENS.en.md`
