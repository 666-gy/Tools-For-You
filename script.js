// ===== 工具数据 =====
const toolsData = [
    {
        name: 'VS Code',
        icon: 'https://favicon.im/visualstudio.com',
        category: 'dev',
        categoryName: '开发工具',
        desc: '微软出品的轻量级代码编辑器，插件生态丰富，支持几乎所有编程语言，是我日常写代码的首选。',
        platforms: ['Windows', 'macOS', 'Linux'],
        link: 'https://code.visualstudio.com/',
        color: '#007ACC'
    },
    {
        name: 'Cursor',
        icon: 'https://cdn.simpleicons.org/cursor/000000',
        category: 'dev',
        categoryName: '开发工具',
        desc: '内置 AI 的代码编辑器，基于 VS Code，支持智能代码补全、重构和对话式编程，效率神器。',
        platforms: ['Windows', 'macOS', 'Linux'],
        link: 'https://cursor.sh/',
        color: '#1a1a1a'
    },
    {
        name: 'Git',
        icon: 'https://cdn.simpleicons.org/git/F05032',
        category: 'dev',
        categoryName: '开发工具',
        desc: '分布式版本控制系统，代码管理的必备工具，配合 GitHub 使用实现代码托管与协作。',
        platforms: ['Windows', 'macOS', 'Linux'],
        link: 'https://git-scm.com/',
        color: '#F05032'
    },
    {
        name: 'Trae',
        icon: 'https://favicon.im/trae.ai',
        category: 'dev',
        categoryName: '开发工具',
        desc: '字节跳动推出的 AI IDE，内置强大的代码生成与对话能力，支持多种编程语言，开发体验丝滑。',
        platforms: ['Windows', 'macOS'],
        link: 'https://www.trae.ai/',
        color: '#2563EB'
    },
    {
        name: 'Trae Solo',
        icon: 'https://favicon.im/trae.ai',
        category: 'dev',
        categoryName: '开发工具',
        desc: 'Trae 的独立模式，支持纯 AI 自动生成项目，从需求描述到完整代码，一键搞定。',
        platforms: ['Windows', 'macOS'],
        link: 'https://www.trae.ai/',
        color: '#7C3AED'
    },
    {
        name: 'Sublime Text',
        icon: 'https://cdn.simpleicons.org/sublimetext/FF9800',
        category: 'dev',
        categoryName: '开发工具',
        desc: '轻量极速的代码编辑器，启动飞快，界面简洁，支持丰富的插件扩展，是很多开发者的心头好。',
        platforms: ['Windows', 'macOS', 'Linux'],
        link: 'https://www.sublimetext.com/',
        color: '#FF9800'
    },
    {
        name: 'GitHub Copilot CLI',
        icon: 'https://cdn.simpleicons.org/github/181717',
        category: 'dev',
        categoryName: '开发工具',
        desc: 'GitHub Copilot 的命令行版本，在终端里用自然语言描述需求，AI 帮你生成对应的 shell 命令。',
        platforms: ['Windows', 'macOS', 'Linux'],
        link: 'https://githubnext.com/projects/copilot-cli/',
        color: '#6E40C9'
    },
    {
        name: 'Claude CLI',
        icon: 'https://favicon.im/anthropic.com',
        category: 'dev',
        categoryName: '开发工具',
        desc: 'Anthropic 官方推出的 Claude 命令行工具，直接在终端与 Claude AI 对话，支持文件分析和代码审查。',
        platforms: ['Windows', 'macOS', 'Linux'],
        link: 'https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview',
        color: '#D97757'
    },
    {
        name: 'DeepSeek TUI',
        icon: 'https://favicon.im/deepseek.com',
        category: 'dev',
        categoryName: '开发工具',
        desc: 'DeepSeek 的终端交互界面，在命令行中直接与 DeepSeek AI 对话，适合喜欢键盘操作的开发者。',
        platforms: ['Windows', 'macOS', 'Linux'],
        link: 'https://github.com/OxidizedLoop/DeepSeek-TUI',
        color: '#4D6BFA'
    },
    {
        name: 'Figma',
        icon: 'https://cdn.simpleicons.org/figma/F24E1E',
        category: 'design',
        categoryName: '设计创意',
        desc: '在线 UI/UX 设计工具，支持实时协作，做原型设计和界面设计非常方便。',
        platforms: ['Web', 'Windows', 'macOS'],
        link: 'https://www.figma.com/',
        color: '#F24E1E'
    },
    {
        name: 'React Bits',
        icon: 'https://favicon.im/reactbits.dev',
        category: 'design',
        categoryName: '设计创意',
        desc: '开源 React 动效组件库，110+ 精心设计的动画组件，复制即用，让界面瞬间出彩。',
        platforms: ['Web'],
        link: 'https://www.reactbits.dev/',
        color: '#61DAFB'
    },
    {
        name: 'Universe Design',
        icon: 'https://favicon.im/github.com',
        category: 'design',
        categoryName: '设计创意',
        desc: '开源设计规范仓库，汇集 60+ 大厂 UI 设计标准，一键复刻 Apple、Stripe、Linear 等风格。',
        platforms: ['Web'],
        link: 'https://github.com/nicepkg/awesome-design-md',
        color: '#8B5CF6'
    },
    {
        name: 'Design.md',
        icon: 'https://cdn.simpleicons.org/markdown/000000',
        category: 'design',
        categoryName: '设计创意',
        desc: 'AI 时代的设计规范文件格式，用 Markdown 定义色板、字号、间距等设计令牌，让 AI 生成界面有据可依。',
        platforms: ['Web'],
        link: 'https://github.com/nicepkg/awesome-design-md',
        color: '#10B981'
    },
    {
        name: 'Rainmeter',
        icon: 'https://cdn.simpleicons.org/rainmeter/39457E',
        category: 'design',
        categoryName: '设计创意',
        desc: 'Windows 桌面美化神器，可在桌面上显示 CPU、内存、天气等实时信息，海量皮肤自由定制。',
        platforms: ['Windows'],
        link: 'https://www.rainmeter.net/',
        color: '#39457E'
    },
    {
        name: 'Pyisland',
        icon: 'https://favicon.im/pyisland.com',
        category: 'design',
        categoryName: '设计创意',
        desc: '在 Windows 桌面上实现类似 iPhone 灵动岛效果的开源项目，基于 Python 开发，让 Windows 桌面也能拥有炫酷的灵动岛交互体验。',
        platforms: ['Windows'],
        link: 'https://pyisland.com/#hero',
        color: '#3776AB'
    },
    {
        name: 'Nexus',
        icon: 'https://favicon.im/winstep.net',
        category: 'design',
        categoryName: '设计创意',
        desc: 'Winstep 出品的 Windows Dock 栏工具，带来 macOS 般丝滑的交互体验，支持图标倒影、动画效果和高度自定义。',
        platforms: ['Windows'],
        link: 'https://winstep.tw/nexus.html',
        color: '#4A90D9'
    },
    {
        name: 'MyDockFinder',
        icon: 'https://favicon.im/mydockfinder.com',
        category: 'design',
        categoryName: '设计创意',
        desc: '把 Windows 桌面变成 macOS 风格，自带 Dock 栏和 Finder，支持模糊效果、图标放大动画，免费开源。',
        platforms: ['Windows'],
        link: 'https://www.mydockfinder.com/',
        color: '#333333'
    },
    {
        name: 'TranslucentTB',
        icon: 'https://favicon.im/translucenttb.net',
        category: 'design',
        categoryName: '设计创意',
        desc: 'Windows 任务栏透明化工具，轻量小巧，支持全透明、磨砂、动态模糊等多种效果，让任务栏焕然一新。',
        platforms: ['Windows'],
        link: 'https://translucenttb.net/',
        color: '#0078D4'
    },
    {
        name: 'Lively Wallpaper',
        icon: 'https://favicon.im/livelywallpaper.net',
        category: 'design',
        categoryName: '设计创意',
        desc: '开源免费的动态壁纸引擎，支持视频、网页、WebGL、Unity 场景当壁纸，让 Windows 桌面"活"起来。',
        platforms: ['Windows'],
        link: 'https://livelywallpaper.net/',
        color: '#E91E63'
    },
    {
        name: 'Notion',
        icon: 'https://cdn.simpleicons.org/notion/000000',
        category: 'productivity',
        categoryName: '效率办公',
        desc: '全能笔记与知识管理工具，支持文档、表格、看板等多种视图，整理学习笔记神器。',
        platforms: ['Web', 'Windows', 'macOS', 'iOS', 'Android'],
        link: 'https://www.notion.so/',
        color: '#000000'
    },
    {
        name: 'Obsidian',
        icon: 'https://cdn.simpleicons.org/obsidian/7C3AED',
        category: 'productivity',
        categoryName: '效率办公',
        desc: '本地优先的双向链接笔记软件，适合构建个人知识库，Markdown 格式，插件丰富。',
        platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
        link: 'https://obsidian.md/',
        color: '#7C3AED'
    },
    {
        name: 'Typora',
        icon: 'https://cdn.simpleicons.org/markdown/000000',
        category: 'productivity',
        categoryName: '效率办公',
        desc: '极简 Markdown 编辑器，所见即所得，写文档、博客、笔记体验极佳。',
        platforms: ['Windows', 'macOS', 'Linux'],
        link: 'https://typora.io/',
        color: '#2CA4E9'
    },
    {
        name: 'MarkText',
        icon: 'https://favicon.im/marktext.me',
        category: 'productivity',
        categoryName: '效率办公',
        desc: '开源免费的 Markdown 编辑器，所见即所得，支持数学公式、流程图，Typora 的最佳免费替代。',
        platforms: ['Windows', 'macOS', 'Linux'],
        link: 'https://marktext.me/',
        color: '#364F6B'
    },
    {
        name: 'Snipaste',
        icon: 'https://favicon.im/snipaste.com',
        category: 'productivity',
        categoryName: '效率办公',
        desc: '强大的截图贴图工具，支持标注、取色、贴图到屏幕，截图后可以直接贴在屏幕上参考。',
        platforms: ['Windows', 'macOS', 'Linux'],
        link: 'https://www.snipaste.com/',
        color: '#4A90D9'
    },
    {
        name: 'PowerToys',
        icon: 'https://favicon.im/github.com',
        category: 'productivity',
        categoryName: '效率办公',
        desc: '微软官方的效率工具集，包含窗口管理、快速预览、颜色拾取、批量重命名等实用功能。',
        platforms: ['Windows'],
        link: 'https://github.com/microsoft/PowerToys',
        color: '#0078D4'
    },
    {
        name: 'Everything',
        icon: 'https://cdn.simpleicons.org/google/4285F4',
        category: 'productivity',
        categoryName: '效率办公',
        desc: '极速文件搜索工具，基于文件名索引，秒搜百万文件，告别 Windows 自带搜索的缓慢。',
        platforms: ['Windows'],
        link: 'https://www.voidtools.com/',
        color: '#4A90E2'
    },
    {
        name: 'VLC',
        icon: 'https://cdn.simpleicons.org/vlcmediaplayer/FF8800',
        category: 'productivity',
        categoryName: '效率办公',
        desc: '开源万能播放器，几乎支持所有音视频格式，无需安装额外解码器，轻量无广告，本地播放首选。',
        platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
        link: 'https://www.videolan.org/',
        color: '#FF8800'
    },
    {
        name: 'Geek',
        icon: 'https://favicon.im/geekuninstaller.com',
        category: 'productivity',
        categoryName: '效率办公',
        desc: '极简强力卸载工具，彻底清除软件残留的注册表和文件，体积小巧，免安装，清理垃圾必备。',
        platforms: ['Windows'],
        link: 'https://geekuninstaller.com/',
        color: '#2ECC71'
    },
    {
        name: '火绒安全',
        icon: 'https://favicon.im/huorong.cn',
        category: 'productivity',
        categoryName: '效率办公',
        desc: '国产良心杀毒软件，安静不打扰，弹窗拦截、病毒查杀、安全防护一应俱全，不捆绑不广告。',
        platforms: ['Windows'],
        link: 'https://www.huorong.cn/',
        color: '#E74C3C'
    },
    {
        name: 'LM Studio',
        icon: 'https://favicon.im/lmstudio.ai',
        category: 'learning',
        categoryName: '学习资源',
        desc: '本地大模型运行工具，支持下载和运行各种开源 LLM，界面友好，无需命令行，AI 学习必备。',
        platforms: ['Windows', 'macOS', 'Linux'],
        link: 'https://lmstudio.ai/',
        color: '#1A1A2E'
    },
    {
        name: 'Ollama',
        icon: 'https://cdn.simpleicons.org/ollama/000000',
        category: 'learning',
        categoryName: '学习资源',
        desc: '本地大模型部署工具，一行命令即可运行 Llama、Qwen、DeepSeek 等模型，轻量高效。',
        platforms: ['Windows', 'macOS', 'Linux'],
        link: 'https://ollama.com/',
        color: '#000000'
    },
    {
        name: 'Hugging Face',
        icon: 'https://cdn.simpleicons.org/huggingface/FFD21E',
        category: 'learning',
        categoryName: '学习资源',
        desc: '全球最大的 AI 模型和数据集社区，海量预训练模型免费下载，AI 学习和研究的宝库。',
        platforms: ['Web'],
        link: 'https://huggingface.co/',
        color: '#FFD21E'
    },
    {
        name: 'VMware',
        icon: 'https://cdn.simpleicons.org/vmware/607078',
        category: 'learning',
        categoryName: '学习资源',
        desc: '强大的虚拟机软件，可以在一台电脑上运行多个操作系统，学 Linux 和搞实验的必备工具。',
        platforms: ['Windows', 'macOS', 'Linux'],
        link: 'https://www.vmware.com/',
        color: '#607078'
    },
    {
        name: 'Kali Linux',
        icon: 'https://cdn.simpleicons.org/kalilinux/557C94',
        category: 'learning',
        categoryName: '学习资源',
        desc: '专为渗透测试和安全审计设计的 Linux 发行版，内置 600+ 安全工具，网络安全学习必装。',
        platforms: ['Windows', 'macOS', 'Linux'],
        link: 'https://www.kali.org/',
        color: '#557C94'
    },
    {
        name: 'Arch Linux',
        icon: 'https://cdn.simpleicons.org/archlinux/1793D1',
        category: 'learning',
        categoryName: '学习资源',
        desc: '高度可定制的滚动发行版 Linux，安装过程本身就是一堂 Linux 系统课，适合想深入理解系统的学习者。',
        platforms: ['Windows', 'macOS', 'Linux'],
        link: 'https://archlinux.org/',
        color: '#1793D1'
    }
];

const websitesData = [
    {
        name: 'GitHub',
        icon: 'https://cdn.simpleicons.org/github/181717',
        category: 'dev',
        categoryName: '开发工具',
        desc: '全球最大的代码托管平台，开源项目的宝库，学习编程必逛，可以发现很多优秀项目。',
        platforms: ['Web'],
        link: 'https://github.com/',
        color: '#181717'
    },
    {
        name: 'Stack Overflow',
        icon: 'https://cdn.simpleicons.org/stackoverflow/F48024',
        category: 'dev',
        categoryName: '开发工具',
        desc: '程序员问答社区，遇到问题先搜这里，几乎能找到所有编程问题的答案。',
        platforms: ['Web'],
        link: 'https://stackoverflow.com/',
        color: '#F48024'
    },
    {
        name: 'MDN Web Docs',
        icon: 'https://cdn.simpleicons.org/mdnwebdocs/000000',
        category: 'dev',
        categoryName: '开发工具',
        desc: 'Mozilla 维护的 Web 技术文档，前端开发最权威的中文/英文参考资料。',
        platforms: ['Web'],
        link: 'https://developer.mozilla.org/',
        color: '#000000'
    },
    {
        name: 'LeetCode',
        icon: 'https://cdn.simpleicons.org/leetcode/FFA116',
        category: 'learning',
        categoryName: '学习资源',
        desc: '在线编程练习平台，海量算法题，支持多种语言，刷题准备面试的好帮手。',
        platforms: ['Web'],
        link: 'https://leetcode.cn/',
        color: '#FFA116'
    },
    {
        name: 'freeCodeCamp',
        icon: 'https://cdn.simpleicons.org/freecodecamp/0A0A23',
        category: 'learning',
        categoryName: '学习资源',
        desc: '免费的编程学习平台，提供完整的课程和项目实战，从入门到进阶都有。',
        platforms: ['Web'],
        link: 'https://www.freecodecamp.org/',
        color: '#0A0A23'
    },
    {
        name: 'Coursera',
        icon: 'https://cdn.simpleicons.org/coursera/0056D2',
        category: 'learning',
        categoryName: '学习资源',
        desc: '在线课程平台，与全球顶尖大学合作，可以系统学习计算机科学基础课程。',
        platforms: ['Web', 'iOS', 'Android'],
        link: 'https://www.coursera.org/',
        color: '#0056D2'
    },
    {
        name: 'Dribbble',
        icon: 'https://cdn.simpleicons.org/dribbble/EA4C89',
        category: 'design',
        categoryName: '设计创意',
        desc: '设计师作品展示平台，UI 设计灵感来源，可以看到很多优秀的界面设计案例。',
        platforms: ['Web'],
        link: 'https://dribbble.com/',
        color: '#EA4C89'
    },
    {
        name: 'Unsplash',
        icon: 'https://cdn.simpleicons.org/unsplash/000000',
        category: 'design',
        categoryName: '设计创意',
        desc: '高质量免费图片素材网站，做项目需要配图时的首选，图片质量极高。',
        platforms: ['Web'],
        link: 'https://unsplash.com/',
        color: '#000000'
    },
    {
        name: 'Vercel',
        icon: 'https://cdn.simpleicons.org/vercel/000000',
        category: 'dev',
        categoryName: '开发工具',
        desc: '前端项目托管与部署平台，支持 Next.js 等框架，自动 CI/CD，部署网站超简单。',
        platforms: ['Web'],
        link: 'https://vercel.com/',
        color: '#000000'
    },
    {
        name: 'Canva',
        icon: 'https://favicon.im/canva.com',
        category: 'design',
        categoryName: '设计创意',
        desc: '在线设计工具，海报、PPT、社交媒体图片都能做，模板丰富，小白也能做出好设计。',
        platforms: ['Web', 'iOS', 'Android'],
        link: 'https://www.canva.com/',
        color: '#00C4CC'
    },
    {
        name: '致美化',
        icon: 'https://favicon.im/zhutix.com',
        category: 'design',
        categoryName: '设计创意',
        desc: '国内专注视觉美化的资源平台，50万+活跃用户，提供桌面主题、图标包、壁纸等海量美化资源。',
        platforms: ['Web'],
        link: 'https://zhutix.com/',
        color: '#E74C3C'
    },
    {
        name: '哲风壁纸',
        icon: 'https://favicon.im/zefeng.com',
        category: 'design',
        categoryName: '设计创意',
        desc: '免费 4K-8K 高清壁纸网站，涵盖电脑桌面、手机、动态壁纸，分类丰富，支持多分辨率下载。',
        platforms: ['Web'],
        link: 'https://haowallpaper.com/',
        color: '#2C3E50'
    },
    {
        name: 'Sweezy Cursors',
        icon: 'https://favicon.im/sweezy-cursors.com',
        category: 'design',
        categoryName: '设计创意',
        desc: '海量创意鼠标光标素材站，2000+ 风格各异的光标可选，极简线条、像素艺术、手绘质感、科技光效等，一键安装浏览器扩展。',
        platforms: ['Web'],
        link: 'https://sweezy-cursors.com/',
        color: '#FF6B9D'
    },
    {
        name: 'W3School',
        icon: 'https://favicon.im/w3schools.com',
        category: 'learning',
        categoryName: '学习资源',
        desc: '最经典的 Web 技术教程网站，HTML/CSS/JS 入门必看，教程简洁易懂，自带在线编辑器。',
        platforms: ['Web'],
        link: 'https://www.w3school.com.cn/',
        color: '#04AA6D'
    },
    {
        name: '菜鸟教程',
        icon: 'https://cdn.simpleicons.org/bookstack/0288D1',
        category: 'learning',
        categoryName: '学习资源',
        desc: '中文编程教程大全，涵盖前端、后端、数据库等众多技术栈，适合快速查阅语法和用法。',
        platforms: ['Web'],
        link: 'https://www.runoob.com/',
        color: '#5CB85C'
    },
    {
        name: 'Excalidraw',
        icon: 'https://cdn.simpleicons.org/excalidraw/6965DB',
        category: 'productivity',
        categoryName: '效率办公',
        desc: '手绘风格的在线画图工具，画流程图、架构图、思维导图非常顺手，导出方便。',
        platforms: ['Web'],
        link: 'https://excalidraw.com/',
        color: '#6965DB'
    },
    {
        name: 'iTab 新标签页',
        icon: 'https://favicon.im/itab.link',
        category: 'productivity',
        categoryName: '效率办公',
        desc: 'Edge 浏览器编辑精选推荐的新标签页插件，组件式主页，内置日历、待办、天气、热搜，让新标签页变成生产力工具。',
        platforms: ['Web'],
        link: 'https://www.itab.link/',
        color: '#6366F1'
    },
    {
        name: 'NeatDownload',
        icon: 'https://favicon.im/neatdownloadmanager.com',
        category: 'productivity',
        categoryName: '效率办公',
        desc: 'Edge 知名下载插件，多线程下载+视频嗅探，免费替代 IDM，支持 32 线程加速，轻松下载网页视频。',
        platforms: ['Windows', 'macOS'],
        link: 'https://www.neatdownloadmanager.com/',
        color: '#00A8E8'
    },
    {
        name: 'Magic Eraser',
        icon: 'https://favicon.im/magiceraser.org',
        category: 'productivity',
        categoryName: '效率办公',
        desc: 'AI 在线去水印/去背景工具，鼠标涂抹即可自动擦除图片中不需要的部分，无需注册，免费使用。',
        platforms: ['Web'],
        link: 'https://magiceraser.org/zh/remove-watermark-from-image/',
        color: '#FF6B6B'
    },
    {
        name: '太妃糖分享',
        icon: 'https://favicon.im/toffeeshare.com',
        category: 'productivity',
        categoryName: '效率办公',
        desc: '免费 P2P 文件分享服务，点对点传输不经过服务器，无文件大小限制，注重隐私保护。',
        platforms: ['Web'],
        link: 'https://toffeeshare.com/',
        color: '#D4A574'
    },
    {
        name: '喵星人',
        icon: 'https://favicon.im/miaoyasuo.com',
        category: 'productivity',
        categoryName: '效率办公',
        desc: '免费在线图片工具箱，支持图片压缩、去背景、加水印、裁剪、格式转换等，批量处理超方便。',
        platforms: ['Web'],
        link: 'https://www.miaoyasuo.com/removebg',
        color: '#FF8C42'
    },
    {
        name: 'Sakuran',
        icon: 'https://favicon.im/sakuran.org',
        category: 'productivity',
        categoryName: '效率办公',
        desc: '科学上网节点服务，线路稳定、价格实惠，支持多种协议，节点覆盖多地区，翻墙访问外网的好选择。',
        platforms: ['Web'],
        link: 'https://sakuran.org/',
        color: '#FF69B4'
    }
];

// ===== GitHub项目数据 =====
const githubData = [
    {
        name: 'MinerU',
        icon: 'https://favicon.im/github.com',
        category: 'github',
        categoryName: '其他GitHub项目',
        desc: 'OpenDataLab 开源的一站式高质量文档解析引擎，将 PDF 和 Office 文档转化为结构化数据，RAG 上游方向热门项目。',
        platforms: ['Python'],
        link: 'https://github.com/opendatalab/MinerU',
        color: '#2E7D32'
    },
    {
        name: 'Taste Skill',
        icon: 'https://favicon.im/github.com',
        category: 'github',
        categoryName: '其他GitHub项目',
        desc: '给 AI 注入设计品味的 Skill，让 Cursor、Claude Code 等 AI 工具生成更有品味的前端页面，告别廉价感。',
        platforms: ['JavaScript'],
        link: 'https://github.com/Leonxlnx/taste-skill',
        color: '#E91E63'
    },
    {
        name: 'Understand Anything',
        icon: 'https://favicon.im/github.com',
        category: 'github',
        categoryName: '其他GitHub项目',
        desc: '把任何代码库变成一张可交互的知识图谱，AI 辅助理解代码，20 万行代码也能快速上手。',
        platforms: ['Python'],
        link: 'https://github.com/Lum1104/Understand-Anything',
        color: '#9C27B0'
    },
    {
        name: 'miniMind',
        icon: 'https://favicon.im/github.com',
        category: 'github',
        categoryName: '其他GitHub项目',
        desc: '极简全流程开源小模型训练项目，26M 到 1B 参数，从数据清洗到推理测试全套流程，GTX 1060 就能跑。',
        platforms: ['Python'],
        link: 'https://github.com/jingyaogong/minimind',
        color: '#FF9800'
    },
    {
        name: 'VizFlow',
        icon: 'https://favicon.im/github.com',
        category: 'github',
        categoryName: '其他GitHub项目',
        desc: '代码可视化与流程图生成工具，把复杂代码逻辑转化为直观的可视化图表，帮助理解和教学。',
        platforms: ['JavaScript'],
        link: 'https://github.com/topics/vizflow',
        color: '#00BCD4'
    },
    {
        name: 'ByteBot',
        icon: 'https://favicon.im/github.com',
        category: 'github',
        categoryName: '其他GitHub项目',
        desc: '自托管的 AI 桌面代理，给 AI 配一台 Ubuntu 虚拟机，能看屏幕、动鼠标、敲键盘，真正的数字员工。',
        platforms: ['Python'],
        link: 'https://github.com/bytebot-ai/bytebot',
        color: '#3F51B5'
    },
    {
        name: 'VoxCPM',
        icon: 'https://favicon.im/github.com',
        category: 'github',
        categoryName: '其他GitHub项目',
        desc: '清华面壁智能开源的语音生成基座模型，0.5B 参数即可媲美真人语音，支持方言和流式实时输出。',
        platforms: ['Python'],
        link: 'https://github.com/OpenBMB/VoxCPM',
        color: '#F44336'
    },
    {
        name: 'Scrapling',
        icon: 'https://favicon.im/github.com',
        category: 'github',
        categoryName: '其他GitHub项目',
        desc: '自适应智能爬虫框架，比 BeautifulSoup 快 700+ 倍，自动适配网页结构变化，绕过反爬机制。',
        platforms: ['Python'],
        link: 'https://github.com/D4Vinci/Scrapling',
        color: '#795548'
    },
    {
        name: 'Impeccable',
        icon: 'https://favicon.im/github.com',
        category: 'github',
        categoryName: '其他GitHub项目',
        desc: 'AI 前端设计专属"设计语言"，包含核心技能与 17 个指令，根治 AI 生成页面的"设计 slop"。',
        platforms: ['JavaScript'],
        link: 'https://github.com/pbakaus/impeccable',
        color: '#607D8B'
    }
];

// ===== 分类配置 =====
const categoryConfig = {
    dev: { name: '开发工具', icon: '💻' },
    design: { name: '设计创意', icon: '🎨' },
    productivity: { name: '效率办公', icon: '⚡' },
    learning: { name: '学习资源', icon: '📚' },
    media: { name: '媒体娱乐', icon: '🎵' }
};

// ===== DOM 元素 =====
const toolsGrid = document.getElementById('toolsGrid');
const websitesGrid = document.getElementById('websitesGrid');
const githubGrid = document.getElementById('githubGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const themeToggle = document.getElementById('themeToggle');
const toolCountEl = document.getElementById('toolCount');
const siteCountEl = document.getElementById('siteCount');
const backToTopBtn = document.getElementById('backToTop');

// ===== 回到顶部 =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== 渲染卡片 =====
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'tool-card fade-in';
    card.dataset.category = item.category;
    card.dataset.name = item.name.toLowerCase();

    const platformsHtml = item.platforms.map(p =>
        `<span class="platform-tag">${p}</span>`
    ).join('');

    const isUrl = item.icon.startsWith('http');
    const iconHtml = isUrl
        ? `<img src="${item.icon}" alt="${item.name}" class="tool-logo" loading="lazy">`
        : `<span>${item.icon}</span>`;

    card.innerHTML = `
        <div class="card-header">
            <div class="tool-icon" style="background: ${item.color}15;">${iconHtml}</div>
            <div class="tool-info">
                <h3 class="tool-name">${item.name}</h3>
                <span class="tool-category">${item.categoryName}</span>
            </div>
        </div>
        <p class="tool-desc">${item.desc}</p>
        <div class="card-footer">
            <div class="tool-platform">
                ${platformsHtml}
            </div>
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="tool-link">
                <span>访问</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
            </a>
        </div>
    `;

    return card;
}

function renderCards() {
    toolsGrid.innerHTML = '';
    websitesGrid.innerHTML = '';
    githubGrid.innerHTML = '';

    toolsData.forEach(item => {
        toolsGrid.appendChild(createCard(item));
    });

    websitesData.forEach(item => {
        websitesGrid.appendChild(createCard(item));
    });

    githubData.forEach(item => {
        githubGrid.appendChild(createCard(item));
    });

    // 更新统计
    animateNumber(toolCountEl, toolsData.length);
    animateNumber(siteCountEl, websitesData.length);

    // 触发滚动动画
    setTimeout(() => observeElements(), 100);
}

// ===== 数字动画 =====
function animateNumber(element, target) {
    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 30);
}

// ===== 筛选功能 =====
let currentFilter = 'all';
let currentSearch = '';

function filterCards() {
    const allCards = document.querySelectorAll('.tool-card');

    allCards.forEach(card => {
        const category = card.dataset.category;
        const name = card.dataset.name;

        const matchesFilter = currentFilter === 'all' || category === currentFilter;
        const matchesSearch = !currentSearch || name.includes(currentSearch.toLowerCase());

        if (matchesFilter && matchesSearch) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        filterCards();
    });
});

searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    filterCards();
});

// ===== 主题切换 =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('.theme-icon');
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// ===== 滚动动画 =====
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// ===== 导航栏滚动效果 =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px var(--shadow)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===== 导航链接高亮 =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Canvas 动态背景 =====
function initCanvas() {
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticles() {
        particles = [];
        const count = Math.min(window.innerWidth / 10, 80);
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const color = isDark ? '200, 180, 160' : '180, 160, 140';

        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
            ctx.fill();

            // 连线
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(${color}, ${0.1 * (1 - dist / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        });

        animationId = requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', () => {
        resize();
        createParticles();
    });
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderCards();
    initCanvas();
});
