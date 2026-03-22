# WirelessAgent 项目展示网站

基于Flask的WirelessAgent项目展示网站，用于展示基于大语言模型的无线网络智能代理研究成果。

## 项目简介

WirelessAgent是利用大语言模型（LLMs）为无线网络创建的智能AI代理框架，具有以下特点：

- **智能推理**: 通过先进推理能力处理复杂无线网络任务
- **多模态处理**: 支持多种数据类型的综合分析  
- **自主决策**: 实现网络的自动化管理和优化
- **高性能**: 相比传统方法实现44.4%更高的带宽利用率

## 功能特性

### 🎯 核心功能
- 项目摘要和技术介绍
- 关键结果可视化展示
- WCHW数据集概览
- 技术架构图解
- 论文引用和相关链接

### 📊 数据展示
- 核心指标展示
- 响应式设计

### 🎨 用户体验
- 现代化响应式设计
- 平滑滚动导航
- 动画效果和交互
- 移动端适配

## 技术栈

- **后端**: Flask 2.3.3
- **前端**: Bootstrap 5.3.0
- **图标**: Font Awesome 6.0
- **样式**: 自定义CSS + Bootstrap

## 快速开始

### 环境要求
- Python 3.7+
- pip包管理器

### 安装步骤

1. **克隆项目**
```bash
git clone https://github.com/logiczZXue/website-design.git
cd website-design
```

2. **创建虚拟环境**
```bash
python -m venv venv

# Windows
venv\\Scripts\\activate

# Linux/Mac
source venv/bin/activate
```

3. **安装依赖**
```bash
pip install -r requirements.txt
```

4. **运行应用**
```bash
python app.py
```

5. **访问网站**
打开浏览器访问: http://localhost:5001

## 项目结构

```
website-design/
├── app.py                 # Flask应用主文件
├── requirements.txt       # Python依赖包
├── README.md             # 项目说明文档
├── templates/            # HTML模板文件
│   ├── base.html        # 基础模板
│   └── index.html       # 主页模板
└── static/              # 静态资源文件
    ├── css/
    │   └── style.css    # 自定义样式
    └── js/
        └── main.js      # JavaScript功能
```

## API接口

### 数据集统计
- **URL**: `/api/dataset-stats`
- **方法**: GET
- **描述**: 获取WCHW数据集的统计信息

### 性能数据
- **URL**: `/api/performance-data`  
- **方法**: GET
- **描述**: 获取WirelessAgent的性能对比数据

## 部署说明

### 开发环境
```bash
python app.py
```

### 生产环境
使用Gunicorn部署：
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5001 app:app
```

## 相关链接

- **论文**: [WirelessAgent: Large Language Model Agents for Intelligent Wireless Networks](https://arxiv.org/abs/2409.07964)
- **期刊**: China Communications 2025
- **GitHub**: [项目仓库](https://github.com/logiczZXue/website-design)

## 引用格式

如果您在研究中使用了WirelessAgent，请引用我们的论文：

```bibtex
@article{wirelessagent2025,
  title={WirelessAgent: Large Language Model Agents for Intelligent Wireless Networks},
  author={Tong, Jingwen and others},
  journal={China Communications},
  year={2025},
  note={arXiv:2409.07964}
}
```

## 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

如有问题或建议，请通过以下方式联系：

- 项目Issues: [GitHub Issues](https://github.com/logiczZXue/website-design/issues)
- 邮箱: [项目邮箱]

---

© 2025 Jingwen Tong教授团队 | 发表于 China Communications 2025