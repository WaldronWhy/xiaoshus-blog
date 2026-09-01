// src/plugins/remark-mermaid.mjs
// 把 ```mermaid 代码块转成 <div class="mermaid">...</div>，供客户端 mermaid.js 渲染
// 不依赖 playwright，构建零开销；客户端按需加载 mermaid.js 渲染

function visit(node, visitor) {
  visitor(node);
  if (node.children) {
    for (const child of node.children) {
      visit(child, visitor);
    }
  }
}

export function remarkMermaid() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'code' && node.lang === 'mermaid') {
        // 转义 HTML 特殊字符，防止 mermaid 代码里的 </div> 等破坏结构
        const escaped = node.value
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
        node.type = 'html';
        node.value = `<div class="mermaid">${escaped}</div>`;
        delete node.lang;
        delete node.meta;
      }
    });
  };
}
