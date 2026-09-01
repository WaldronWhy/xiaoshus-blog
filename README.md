# 小澍的知识库

基于 **Astro + Starlight** 搭建的个人文档站，用于记录学习笔记、技术文档和随笔。

## 特性

- 📝 **Markdown 写作** — 纯文本文件，更新方便
- 🧮 **LaTeX 支持** — 基于 KaTeX，行内和块级公式完美渲染
- 🔍 **全文搜索** — 内置 Pagefind 搜索
- 🌙 **暗黑模式** — 支持明暗主题切换
- 📱 **响应式设计** — 适配桌面和移动端
- 🚀 **自动部署** — GitHub Actions 自动构建部署到 GitHub Pages

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# ⚠️ 注意：本项目配置了 base: '/xiaoshus-blog'，访问地址是
# http://localhost:4321/xiaoshus-blog/
# 直接访问 http://localhost:4321/ 会 404

# 构建生产版本
npm run build

# 本地预览构建结果（同样访问 http://localhost:4321/xiaoshus-blog/）
npm run preview
```

> ⚠️ 构建产物 `dist/` 里的资源全部是 `/xiaoshus-blog/...` 绝对路径，
> **不能直接双击 `dist/index.html` 用浏览器打开**（会白屏），必须通过 `npm run dev` 或 `npm run preview` 起服务访问。

## 如何添加新文档

### 1. 在对应目录下创建 `.md` 文件

```
src/content/docs/
├── textbooks/      # 教材专区（系统性教材，共 200 章）
│   ├── ai/             # AI 教材（136 章）
│   ├── modeling/       # 数学建模竞赛教材（18 章）
│   └── chemistry/      # 高等化学教材（46 章）
├── notes/          # 学习笔记
│   ├── calculus/       # 高等数学
│   └── linear-algebra/ # 线性代数
├── ai/             # AI 技术
├── coding/         # 编程笔记
└── essay/          # 随笔
```

> 教材文件按「模块英文目录 + 数字编号」组织，如 `textbooks/ai/ai-core/machine-learning/01.md`，
> 中文标题写在 frontmatter 的 `title` 里。教材内部链接已统一转为 `/textbooks/...` 绝对路径。

### 2. 文件开头写 frontmatter

```markdown
---
title: 页面标题（显示在侧边栏和页面顶部）
description: 页面描述（用于 SEO 和搜索摘要）
---

# 正文标题

正文内容...
```

### 3. 提交后自动部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署。

## 日常更新流程（写完文章后怎么发布）

写完或改完 `.md` 文件后，在项目目录下依次执行三条命令即可：

```bash
git add .
git commit -m "描述这次改了什么"
git push
```

推送后 GitHub Actions 会在 2~3 分钟内自动构建部署，刷新站点就能看到更新。

想在推送前先在本地看看效果：

```bash
npm run dev      # 然后访问 http://localhost:4321/xiaoshus-blog/
```

### 常用检查命令

```bash
git status                    # 看哪些文件改了、还没提交
git --no-pager diff           # 看具体改了什么内容
git --no-pager log --oneline -5   # 看最近的提交记录
```

### 注意事项

- 只有 `push` 之后线上才会更新，本地保存不会。
- `dist/` 和 `node_modules/` 已被 `.gitignore` 忽略，不会被提交，
  线上由 GitHub Actions 重新构建，无需手动上传。
- 如果 `git push` 报错，先用 `git status` 看是否有未提交的改动，
  或执行 `git pull` 拉取远程最新内容后再推送。
- 网络受限导致 `git push` 连不上时，可改用 SSH 通道（见下一节）。

### 关于 SSH 推送通道

本机 HTTPS 的 443 端口访问 `github.com` 被阻断（`git push` 会卡住并报
`Failed to connect to github.com port 443`），但 SSH 的 22 端口可用，
因此远程地址已配置为 SSH：

```
git@github.com:WaldronWhy/xiaoshus-blog.git
```

如果换了一台网络正常的电脑，`git push` 用 HTTPS 也没问题，不必强行改回。
若需要在新电脑上配置 SSH，做法是：生成密钥 `ssh-keygen -t ed25519`，
把 `~/.ssh/id_ed25519.pub` 的内容粘贴到 GitHub 的
Settings → SSH and GPG keys → New SSH key，然后
`git remote set-url origin git@github.com:WaldronWhy/xiaoshus-blog.git`。

## LaTeX 公式用法

### 行内公式

用单个 `$` 包裹：

```markdown
质能方程 $E = mc^2$ 是爱因斯坦提出的。
```

渲染效果：质能方程 $E = mc^2$ 是爱因斯坦提出的。

### 块级公式

用 `$$` 包裹（单独一行）：

```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

渲染效果：

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

### 常用公式示例

**矩阵：**

```markdown
$$
A = \begin{pmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{pmatrix}
$$
```

**方程组：**

```markdown
$$
\begin{cases}
x + y = 5 \\
2x - y = 1
\end{cases}
$$
```

**求和与极限：**

```markdown
$$
\lim_{n \to \infty} \sum_{i=1}^{n} \frac{1}{i^2} = \frac{\pi^2}{6}
$$
```

## 部署到 GitHub Pages

本站采用**项目站点**方式，仓库名 `xiaoshus-blog`，部署后访问：
**https://waldronwhy.github.io/xiaoshus-blog/**

`astro.config.mjs` 已配置好项目站点路径（**改仓库名时这两处必须同步改**）：

```js
site: 'https://waldronwhy.github.io',
base: '/xiaoshus-blog',   // 必须以 / 开头、与仓库名一致
```

> ⚠️ 项目站点下，正文 Markdown 里的内部链接都带了 `/xiaoshus-blog` 前缀；
> 侧边栏由 Starlight 自动加前缀，无需手写。若以后改仓库名，需批量替换正文链接前缀和 `base`。

部署步骤：

1. 推送到 `WaldronWhy/xiaoshus-blog` 仓库的 `main` 分支
2. 仓库 Settings → Pages → Source 选择 **GitHub Actions**
3. `.github/workflows/deploy.yml` 会自动构建并部署

### 附：若改用用户站点（仓库名 `WaldronWhy.github.io`）

用户站点访问 `https://waldronwhy.github.io/`，此时需要：删除 `base`（或设为 `/`）、
把正文链接的 `/xiaoshus-blog` 前缀去掉、editLink 改回对应仓库。

## 目录结构

```
xiaoshu-site/
├── .github/workflows/deploy.yml  # GitHub Actions 部署配置
├── src/
│   ├── content/
│   │   ├── config.ts              # 内容集合配置（重要！用传统 glob 方式）
│   │   └── docs/                  # 所有文档放在这里
│   │       ├── index.mdx          # 首页
│   │       ├── textbooks/         # 教材专区（AI/建模/化学，200 章）
│   │       ├── notes/             # 学习笔记
│   │       ├── ai/                # AI 技术
│   │       ├── coding/            # 编程笔记
│   │       └── essay/             # 随笔
│   ├── styles/
│   │   └── katex.css              # KaTeX 样式
│   └── assets/                    # 图片等静态资源
├── astro.config.mjs               # Astro 配置
└── package.json
```

## 注意事项

### ⚠️ 文件名必须用英文

由于 Starlight 0.28 的内容集合 loader 在 Windows 上处理中文文件名存在编码 bug，**所有目录名和文件名必须使用英文或拼音**，页面显示的中文标题在 frontmatter 的 `title` 中设置。

✅ 正确：`notes/calculus/limits-and-continuity.md`，frontmatter 中 `title: 极限与连续`
❌ 错误：`notes/高等数学/极限与连续.md`

### ⚠️ 内容集合配置方式

本项目使用传统的 `src/content/config.ts`（glob loader），而不是新的 `src/content.config.ts`（docsLoader）。原因是 docsLoader 在 Windows 上存在兼容问题，会导致构建失败且只生成首页。

不要将 `config.ts` 改回 `content.config.ts`，否则会导致文档页面无法生成。

### 新增分类

如果需要新增侧边栏分类（如「读书」），需要：

1. 在 `src/content/docs/` 下创建对应目录（如 `reading/`）
2. 在 `astro.config.mjs` 的 `sidebar` 中添加：
   ```js
   {
     label: '📖 读书',
     autogenerate: { directory: 'reading' },
     collapsed: false,
   },
   ```

## 避坑记录（重建/升级时必看）

### 1. @astrojs/sitemap 构建崩溃（Astro 4.x）
- **现象**：清缓存（删 node_modules / .astro / dist）后 `npm run build` 报 `Cannot read properties of undefined (reading 'reduce')`，定位到 `node_modules/@astrojs/sitemap/dist/index.js:85`。
- **根因**：sitemap 3.7.4 在 `astro:routes:resolved` 钩子中给 `_routes` 赋值，但 Astro 4.16 上该钩子不触发，导致 `_routes` 为 undefined，在 `astro:build:done` 中调用 `_routes.reduce` 崩溃。
- **修复**：已用 patch-package 打补丁（`patches/@astrojs+sitemap+3.7.4.patch`），把 `_routes.reduce` 改为 `(_routes ?? []).reduce`；`package.json` 已加 `"postinstall": "patch-package"`，CI 中 `npm ci` 会自动应用。
- **注意**：Starlight 0.28 **没有** `sitemap` 配置选项，不能写 `sitemap: false`，会报 `Unrecognized key(s) in object: 'sitemap'`。

### 2. 项目站点 base 路径
- 部署到 `https://waldronwhy.github.io/xiaoshu-blog/` 时，`astro.config.mjs` 必须设 `site: 'https://waldronwhy.github.io'` + `base: '/xiaoshus-blog'`。
- Starlight 侧边栏链接会自动加 base 前缀，但**正文 Markdown 里的绝对链接和首页 hero action link 不会**，需手动加 `/xiaoshus-blog` 前缀。
- 改仓库名时：`base`、正文链接前缀、editLink 都要同步改。

### 3. Astro / Starlight 版本与 Node 兼容
- 本机 Node v20，**不能用 Astro 7 / create-astro 5**（要求 Node ≥22.12）。必须锁 `astro@^4.16` + `@astrojs/starlight@^0.28`。
- Starlight 0.28 的 `social` 必须是对象（如 `social:{github:'...'}`），不支持数组；不识别顶层 `footer`、`search` 键。
- pagefind 在 windows-x64 首次构建可能报 "Failed to install pagefind"，手动 `npm i pagefind -D` 即可。

### 4. Windows 中文文件名 / Content Loader bug
- Starlight 0.28 模板自带的 `src/content.config.ts`（docsLoader）在 Windows 上会导致中文 slug 乱码且只生成首页。必须改用传统 `src/content/config.ts`（`defineCollection({type:'content', schema:docsSchema()})` glob 方式）。
- 所有目录名 / 文件名必须用英文或数字，中文只放 frontmatter 的 `title` 里。

### 5. GitHub Pages 项目站点
- 每个仓库要单独在 Settings → Pages 把 Source 设为 **GitHub Actions**，用户站点（`WaldronWhy.github.io`）的设置不会自动应用到项目站点。
- 部署工作流 `.github/workflows/deploy.yml` 对用户站点和项目站点通用，只要 Astro 构建时 base 正确即可。

## 技术栈

| 层级 | 技术 | 版本 |
|------|------|------|
| 框架 | Astro | 4.x |
| 主题 | Starlight | 0.28.x |
| 数学公式 | KaTeX | 0.16.x |
| 搜索 | Pagefind | 1.x |
| 部署 | GitHub Pages + Actions | - |

