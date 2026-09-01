// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkMermaid } from './src/plugins/remark-mermaid.mjs';

// https://astro.build/config
export default defineConfig({
  // 项目站点：仓库 xiaoshus-blog，部署地址 https://waldronwhy.github.io/xiaoshus-blog/
  site: 'https://waldronwhy.github.io',
  base: '/xiaoshus-blog',

  markdown: {
    remarkPlugins: [remarkMath, remarkMermaid],
    rehypePlugins: [rehypeKatex],
  },

  integrations: [
    starlight({
      title: '小澍的知识库',
      description: '学习笔记、教材与技术文档',
      defaultLocale: 'zh-CN',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },

      // 社交链接
      social: {
        github: 'https://github.com/WaldronWhy',
      },

      // KaTeX + Mermaid 样式
      customCss: ['./src/styles/katex.css', './src/styles/mermaid.css'],

      // Mermaid 客户端渲染（CDN 加载，自动渲染 .mermaid 元素）
      head: [
        {
          tag: 'script',
          attrs: {
            src: 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js',
          },
        },
      ],

      // 显示最后更新时间
      lastUpdated: true,

      // 侧边栏：教材用显式分组，笔记用 autogenerate
      sidebar: [
        { label: '🏠 首页', link: '/' },

        {
          label: '📚 学习笔记',
          autogenerate: { directory: 'notes' },
          collapsed: true,
        },
        {
          label: '🤖 AI 技术',
          autogenerate: { directory: 'ai' },
          collapsed: true,
        },
        {
          label: '💻 编程笔记',
          autogenerate: { directory: 'coding' },
          collapsed: true,
        },

        // ============ 教材专区 ============
        {
          label: '📖 教材专区',
          collapsed: false,
          items: [
            { label: '教材总览', link: '/textbooks/' },

            // ---- AI 教材 ----
            {
              label: '🤖 AI 教材',
              collapsed: true,
              items: [
                { label: 'AI 教材首页', link: '/textbooks/ai/' },
                {
                  label: '一、数学基础',
                  collapsed: true,
                  items: [
                    { label: '高等数学', autogenerate: { directory: 'textbooks/ai/math-foundations/calculus' } },
                    { label: '线性代数', autogenerate: { directory: 'textbooks/ai/math-foundations/linear-algebra' } },
                    { label: '概率论与数理统计', autogenerate: { directory: 'textbooks/ai/math-foundations/probability-statistics' } },
                    { label: '最优化方法', autogenerate: { directory: 'textbooks/ai/math-foundations/optimization' } },
                  ],
                },
                {
                  label: '二、程序设计',
                  collapsed: true,
                  items: [
                    { label: 'Python 程序设计', autogenerate: { directory: 'textbooks/ai/programming/python' } },
                    { label: '数据结构与算法', autogenerate: { directory: 'textbooks/ai/programming/data-structures' } },
                  ],
                },
                {
                  label: '三、人工智能核心',
                  collapsed: true,
                  items: [
                    { label: '机器学习', autogenerate: { directory: 'textbooks/ai/ai-core/machine-learning' } },
                    { label: '深度学习', autogenerate: { directory: 'textbooks/ai/ai-core/deep-learning' } },
                    { label: '计算机视觉', autogenerate: { directory: 'textbooks/ai/ai-core/computer-vision' } },
                    { label: '自然语言处理', autogenerate: { directory: 'textbooks/ai/ai-core/nlp' } },
                    { label: '强化学习', autogenerate: { directory: 'textbooks/ai/ai-core/reinforcement-learning' } },
                    { label: '知识表示与推理', autogenerate: { directory: 'textbooks/ai/ai-core/knowledge-reasoning' } },
                  ],
                },
                {
                  label: '四、工程实践',
                  collapsed: true,
                  items: [
                    { label: '数据工程', autogenerate: { directory: 'textbooks/ai/engineering/data-engineering' } },
                    { label: '实验设计与评估', autogenerate: { directory: 'textbooks/ai/engineering/experiment-design' } },
                    { label: '模型部署与 MLOps', autogenerate: { directory: 'textbooks/ai/engineering/mlops' } },
                  ],
                },
              ],
            },

            // ---- 数学建模竞赛教材 ----
            {
              label: '📊 数学建模竞赛教材',
              collapsed: true,
              items: [
                { label: '教材首页', link: '/textbooks/modeling/' },
                { label: '一、基础篇', autogenerate: { directory: 'textbooks/modeling/01-foundations' } },
                { label: '二、方法篇', autogenerate: { directory: 'textbooks/modeling/02-methods' } },
                { label: '三、工具篇', autogenerate: { directory: 'textbooks/modeling/03-tools' } },
                { label: '四、实战篇', autogenerate: { directory: 'textbooks/modeling/04-practice' } },
              ],
            },

            // ---- 高等化学教材 ----
            {
              label: '⚗️ 高等化学教材',
              collapsed: true,
              items: [
                { label: '教材首页', link: '/textbooks/chemistry/' },
                { label: '一、数理基础与化学总论', autogenerate: { directory: 'textbooks/chemistry/01-foundations' } },
                { label: '二、无机化学', autogenerate: { directory: 'textbooks/chemistry/02-inorganic' } },
                { label: '三、分析化学', autogenerate: { directory: 'textbooks/chemistry/03-analytical' } },
                { label: '四、物理化学', autogenerate: { directory: 'textbooks/chemistry/04-physical' } },
                { label: '五、结构化学与量子化学', autogenerate: { directory: 'textbooks/chemistry/05-structural-quantum' } },
                { label: '六、有机化学', autogenerate: { directory: 'textbooks/chemistry/06-organic' } },
                { label: '七、高分子化学', autogenerate: { directory: 'textbooks/chemistry/07-polymer' } },
              ],
            },
          ],
        },

        {
          label: '📝 随笔',
          autogenerate: { directory: 'essay' },
          collapsed: true,
        },
      ],

      // 编辑链接
      editLink: {
        baseUrl: 'https://github.com/WaldronWhy/xiaoshus-blog/edit/main/',
      },
    }),
  ],
});
