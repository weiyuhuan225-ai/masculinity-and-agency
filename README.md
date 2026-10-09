# 男性、关系与自主

围绕“后男性主义语境下男性自我工具化的传播机制与主体性重建”整理的公开阅读项目，包含完整论文和独立通俗解读。

## 阅读入口

- **通俗阅读版**：[index.html](index.html) — “你不必一直有用，也值得被尊重”。用生活情境、可交互的机制说明和传播理论词条解释论文观点。
- **完整论文网页版**：[paper.html](paper.html) — 保留原文的章节、图表、引文及完整书目。
- **完整论文 Markdown**：[paper.md](paper.md) — 方便直接在 GitHub 阅读和引用。
- **原始 Word 文件**：[original-paper.docx](docs/original-paper.docx) — 与原交付文件逐字节一致。
- **42 项参考文献数据**：[references.json](data/references.json) — 包含编号、书目信息及 DOI 或原始来源链接。

## 核心问题

论文讨论的不是某一种职业或付出多少，而是：当一个人相信自己必须持续提供资源、劳动或支持，才有资格获得尊重与表达需要，关系中的责任会怎样进入整体自我评价？

文章区分三个不能相互替代的维度：投入强度、价值条件化和实际协商空间。基于传播学与相关研究，提出“供给型承认循环”“承认领域错置”和“反力工的绩效回流”等解释性构想。

## 文本与研究边界

原论文标题为《后男性主义语境下男性自我工具化的传播机制与主体性重建——以力工思维为分析入口》。通俗网页是独立改写，原文文件保留完整论证。网页中的三个生活情境是帮助理解的虚构例子。

这是一项整合性文献综述与理论建构，机制、适用范围和实践建议仍需经验检验。“后男性主义”在文中作为分析问题的语境，未被当作公认历史分期；“力工思维”不指体力劳动者，也不是诊断或人格评分。基本尊重不意味着任何人负有提供爱情、性同意或维持特定关系的义务。

原论文的文献检索范围截至 2026 年 10 月 9 日，保留 42 项参考文献。研究方法及理论迁移的具体限制见完整论文。

## 网页使用

本项目为纯静态 HTML、CSS 和 JavaScript，无需安装依赖或构建。首页和完整原文均可在禁用 JavaScript 的情况下阅读；JavaScript 只增强情境切换、循环解释和阅读进度。

本地打开 `index.html` 即可阅读。也可以在目录内运行 `python -m http.server 8000`，然后访问 `http://localhost:8000`。

### GitHub Pages

在仓库 **Settings → Pages → Build and deployment** 中，将 Source 设为 **Deploy from a branch**，选择 **main** 分支和 **/(root)**，保存即可。仓库根目录包含 `.nojekyll`，可直接发布静态文件。

配置说明：[GitHub 官方文档](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 文件结构

| 路径 | 内容 |
| --- | --- |
| `index.html` | 通俗阅读页 |
| `paper.html` / `paper.md` | 完整论文 |
| `assets/` | 页面样式、交互脚本及原论文机制图 |
| `docs/original-paper.docx` | 原始 Word 文件 |
| `data/references.json` | 完整书目数据 |

引用本文时，请区分原论文提出的解释性命题与所引文献已经支持的发现，并核对相关原始研究。
