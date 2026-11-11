/**
 * AI 零基础视觉与社媒创作手把手指南 - 核心数据库 (data.js)
 * 所有工具链接、风格对比、实战案例、质感词典与常见问题均在此集中管理，方便日后修改与扩展。
 */

const APP_DATA = {
    // 1. 模块一：AI 工具导航台（3人创作小团队）
    tools: {
        brain: {
            title: "🧠 第一站：文字军师（帮你写文案、把大白话扩写成专业提示词）",
            subtitle: "新手最推荐先打开这里的任意一个！你只需对它讲日常华语大白话，它就能帮你写出大师级的生图指令。",
            items: [
                {
                    name: "Google Gemini",
                    badge: "🔥 主力推荐 · 全能首选",
                    badgeColor: "badge-emerald",
                    desc: "免费且极其聪明！不仅能把你的大白话扩写成 4 种风格的提示词，而且它内部直接集成了 Google 顶级的生图模型（Imagen 3），聊完直接说一句“帮我把第1个风格画出来”就能直接出图！",
                    buttons: [
                        { text: "打开 Gemini", url: "https://gemini.google.com", primary: true }
                    ]
                },
                {
                    name: "ChatGPT (OpenAI)",
                    badge: "💡 创意与对话天花板",
                    badgeColor: "badge-amber",
                    desc: "非常适合用来构思社交平台（FB/IG/小红书）的选题、润色文案，以及帮你把脑海里模糊的想法拆解成非常细致的画面描述，也支持直接对话画图。",
                    buttons: [
                        { text: "打开 ChatGPT", url: "https://chatgpt.com", primary: true }
                    ]
                },
                {
                    name: "Claude AI / Qwen (通义千问)",
                    badge: "✍️ 中文文笔极其自然",
                    badgeColor: "badge-sky",
                    desc: "Claude 的文笔最有温度、最像真人写的感悟；而阿里的 Qwen（通义千问）对中文语境、古风、亚洲与本地生活场景的理解非常到位，完全免费好用。",
                    buttons: [
                        { text: "打开 Claude AI", url: "https://claude.ai", primary: true },
                        { text: "打开 Qwen AI", url: "https://chat.qwen.ai", primary: false }
                    ]
                },
                {
                    name: "Perplexity AI",
                    badge: "🔍 找最新资料/热点神器",
                    badgeColor: "badge-purple",
                    desc: "如果你想写跟最近新闻、健康知识、真实数据有关的社交贴文，用它搜索整理资料最准确，有据可查，不会乱编故事。",
                    buttons: [
                        { text: "打开 Perplexity", url: "https://www.perplexity.ai", primary: true }
                    ]
                }
            ]
        },
        painter: {
            title: "🎨 第二站：视觉画师（负责把提示词变成高清美图）",
            subtitle: "当“文字军师”帮你写好 4 种风格的提示词后，把你最喜欢的那一段复制给下面的画师：",
            items: [
                {
                    name: "Gemini 直接对话生图",
                    badge: "⭐ 零门槛 · 最省事",
                    badgeColor: "badge-emerald",
                    desc: "不用换网站！在 Gemini 让它写出 4 种风格提示词后，直接回复它：“请用第 1 种电影感风格帮我生成图片”，几秒钟就能拿到超高质感的照片。",
                    buttons: [
                        { text: "去 Gemini 画图", url: "https://gemini.google.com", primary: true }
                    ]
                },
                {
                    name: "即梦 AI (Dreamina) / 通义万相",
                    badge: "🎨 最懂中文与海报汉字",
                    badgeColor: "badge-amber",
                    desc: "剪映旗下的 AI 创作平台！最大优点是完全看懂中文提示词，审美非常符合小红书/抖音风格，甚至能在图片里直接写出漂亮的汉字海报标题！",
                    buttons: [
                        { text: "打开即梦 AI", url: "https://jimeng.jianying.com", primary: true },
                        { text: "通义万相", url: "https://tongyi.aliyun.com/wanxiang/", primary: false }
                    ]
                },
                {
                    name: "ChatGPT (内置图片生成)",
                    badge: "🎯 听话度极高",
                    badgeColor: "badge-sky",
                    desc: "理解复杂画面的能力超强！如果你对画面里“左边放什么、右边放什么、人物穿什么颜色衣服”有严格要求，它画得最准确，还支持圈选涂抹修改。",
                    buttons: [
                        { text: "打开 ChatGPT", url: "https://chatgpt.com", primary: true }
                    ]
                },
                {
                    name: "Bing Image Creator / Midjourney",
                    badge: "✨ 艺术感与光影大师",
                    badgeColor: "badge-purple",
                    desc: "Bing 可免费使用 DALL-E 模型；而 Midjourney 则是专业设计师的最爱，适合把我们生成的英文版提示词粘贴进去，光影审美绝佳。",
                    buttons: [
                        { text: "打开 Bing 画图", url: "https://www.bing.com/images/create", primary: true },
                        { text: "打开 Midjourney", url: "https://www.midjourney.com", primary: false }
                    ]
                }
            ]
        },
        director: {
            title: "🎬 第三站：动态导演（把静态美图变成 5~10 秒短视频）",
            subtitle: "💡 新手重要秘诀：千万不要直接用文字生成视频！先在第二站生成一张满意的图片，再上传到下面工具变成视频，成功率 100%！",
            items: [
                {
                    name: "可灵 AI (Kling AI)",
                    badge: "🔥 图生视频极强 · 动作最自然",
                    badgeColor: "badge-emerald",
                    desc: "顶级视频大模型！每天有免费额度。把你生成的咖啡馆图片传上去，输入“咖啡冒着热气，阳光光影微微晃动，镜头缓慢推进”，出来的视频就像电影一样真实！",
                    buttons: [
                        { text: "打开可灵 AI", url: "https://klingai.kuaishou.com", primary: true }
                    ]
                },
                {
                    name: "海螺 AI (Hailuo / MiniMax)",
                    badge: "✨ 电影级运镜质感",
                    badgeColor: "badge-amber",
                    desc: "人物表情、微风吹拂头发、水波流动等细节处理得极其细腻，支持直接输入中文运镜指令（如：镜头向右平移、缓慢推进特写）。",
                    buttons: [
                        { text: "打开海螺 AI", url: "https://hailuoai.com", primary: true }
                    ]
                },
                {
                    name: "即梦 AI 视频生成",
                    badge: "🎵 可一键配音乐与对口型",
                    badgeColor: "badge-sky",
                    desc: "在即梦里生成完图片后，直接点图片下方的“生成视频”，还能自动帮你配好应景的纯音乐，下载下来直接就能发 Reels 或小红书！",
                    buttons: [
                        { text: "打开即梦视频", url: "https://jimeng.jianying.com", primary: true }
                    ]
                },
                {
                    name: "Luma Dream Machine / Runway",
                    badge: "🌍 国际知名视频工具",
                    badgeColor: "badge-purple",
                    desc: "国际创作者常用的视频生成工具，擅长大场景转换、奇幻特效与丝滑的首尾帧过渡动画。",
                    buttons: [
                        { text: "打开 Luma", url: "https://lumalabs.ai/dream-machine", primary: true },
                        { text: "打开 Runway", url: "https://runwayml.com", primary: false }
                    ]
                }
            ]
        }
    },

    // 2. 模块二：6大提示词公式要素（来自第一个参考文件精华）
    formulaElements: [
        { tag: "① 主体", question: "画面里最重要的是谁/什么？", example: "一位短发女生、一杯热拿铁" },
        { tag: "② 场景", question: "在哪里？什么时间？", example: "周末午后的木质咖啡馆靠窗位" },
        { tag: "③ 光线", question: "是什么光？（决定高级感）", example: "温暖的黄金斜阳、柔和自然窗光" },
        { tag: "④ 风格", question: "像照片还是插画？", example: "电影感写实、治愈水彩、极简海报" },
        { tag: "⑤ 构图", question: "镜头怎么拍？", example: "特写、浅景深虚化、90度俯拍留白" },
        { tag: "⑥ 情绪/比例", question: "看了有什么感觉？什么尺寸？", example: "放松治愈、竖版 9:16 或 3:4" }
    ],

    // 3. 模块二：咖啡馆看书 4 种视觉风格对比
    coffeeStyles: [
        {
            id: 0,
            shortName: "电影感写实",
            icon: "📸",
            name: "风格 A：电影感写实摄影 (Cinematic Photography)",
            sceneBadge: "最适合：早安问候、心情随笔、生活感悟配图",
            whyGood: "AI 自动帮你加上了『85mm人像镜头』、『浅景深虚化』和『柯达胶片颗粒感』，彻底去掉假假的 AI 塑料感，像单反相机拍出来的真实大片。",
            gradientClass: "style-banner-cinematic",
            svgIllustration: `<svg viewBox="0 0 120 80" class="w-24 h-16 opacity-90"><rect x="10" y="10" width="100" height="60" rx="8" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/><circle cx="85" cy="28" r="10" fill="rgba(251,191,36,0.5)"/><path d="M25 55 Q40 45 55 55 L55 62 L25 62 Z" fill="rgba(255,255,255,0.7)"/><rect x="62" y="42" width="22" height="16" rx="3" fill="rgba(255,255,255,0.85)"/><path d="M84 46 C89 46 89 54 84 54" stroke="rgba(255,255,255,0.85)" stroke-width="2" fill="none"/><path d="M68 38 Q70 33 68 28 M75 37 Q77 32 75 27" stroke="rgba(253,224,71,0.8)" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>`,
            visualDesc: "☀️ 黄金午后斜阳穿透百叶窗 · 拿铁拉花冒着细腻白雾 · 翻开的书页边缘泛着金光 · 背景温暖焦外光斑",
            cnPrompt: "电影感写实摄影，周末午后的复古木质咖啡馆一角，胡桃木桌面上放着一杯精致拉花的热拿铁咖啡，杯口升起袅袅热气，旁边是一本翻开的精装书和一副金丝眼镜。温暖的午后黄金时刻阳光透过百叶窗斜射在桌面上，形成柔和的光影斑驳与丁达尔光束。85mm镜头拍摄，大光圈浅景深，背景温暖虚化，柯达Portra 400胶片色彩，极致细腻的纹理，宁静放松的治愈氛围，8k超高清。",
            enPrompt: "Cinematic realistic photography, a cozy wooden cafe corner on a weekend afternoon, a ceramic cup of hot latte with delicate latte art steaming gently on a walnut table, beside an open hardcover book and vintage glasses. Warm golden hour sunlight streaming through window blinds, casting soft dappled shadows and volumetric light rays. Shot on 85mm lens, f/1.8 shallow depth of field, warm bokeh background, Kodak Portra 400 film grain aesthetic, ultra-detailed texture, peaceful and relaxing mood, 8k."
        },
        {
            id: 1,
            shortName: "治愈水彩插画",
            icon: "🎨",
            name: "风格 B：治愈系小清新水彩插画 (Healing Watercolor & Ghibli Vibe)",
            sceneBadge: "最适合：读书笔记、心灵感悟、温馨活动分享",
            whyGood: "不想要真人照片时，这种『吉卜力动画+温暖水彩手绘』风格最受欢迎，色彩明快柔和，让人一看就觉得心情平静美好。",
            gradientClass: "style-banner-watercolor",
            svgIllustration: `<svg viewBox="0 0 120 80" class="w-24 h-16 opacity-90"><circle cx="35" cy="35" r="22" fill="rgba(167,243,208,0.35)"/><circle cx="75" cy="42" r="25" fill="rgba(253,230,138,0.4)"/><path d="M25 58 C45 48 75 48 95 58" stroke="rgba(255,255,255,0.8)" stroke-width="2.5" stroke-linecap="round" fill="none"/><circle cx="60" cy="36" r="9" fill="rgba(255,255,255,0.85)"/><path d="M55 22 Q60 12 65 22" stroke="#FDE047" stroke-width="2" fill="none"/></svg>`,
            visualDesc: "🎨 手绘水彩纸纹理 · 窗外摇曳的绿植与阳光 · 暖黄色调的咖啡与书本 · 吉卜力动画电影般的治愈笔触",
            cnPrompt: "日系治愈系水彩插画风格，吉卜力工作室动画美感。阳光明媚的周末午后咖啡馆窗边座位，桌上摆着冒热气的咖啡杯、翻开的书本和一小瓶洋甘菊鲜花。窗外是翠绿的树叶与温暖的阳光，柔和的暖黄与抹茶绿配色，细腻的水彩晕染笔触与水彩纸纹理，画面充满温暖、宁静与慢生活的美好气息。",
            enPrompt: "Healing Japanese watercolor illustration style, Studio Ghibli aesthetic. A sunny weekend afternoon by the window of a cozy cafe, a steaming coffee cup, an open book, and a small vase of chamomile flowers on the table. Lush green leaves outside the window glowing in warm sunlight. Soft pastel warm yellow and matcha green color palette, delicate hand-painted watercolor brushstrokes and paper texture, peaceful and heartwarming slow-living atmosphere."
        },
        {
            id: 2,
            shortName: "极简杂志风",
            icon: "✨",
            name: "风格 C：现代极简杂志海报风 (Minimalist Editorial Flat-Lay)",
            sceneBadge: "最适合：小红书封面、IG 九宫格排版、做带字海报背景",
            whyGood: "AI 自动帮你加入了『桌面俯拍视角 (Flat Lay)』和『35% 大面积留白』，这样你把图片存下来后，可以直接在空白处加上你的标题文字，版面干净高级！",
            gradientClass: "style-banner-minimal",
            svgIllustration: `<svg viewBox="0 0 120 80" class="w-24 h-16 opacity-90"><rect x="20" y="8" width="80" height="64" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" stroke-dasharray="3 3"/><text x="60" y="25" fill="rgba(255,255,255,0.8)" font-size="8" text-anchor="middle">[ 上方35%留白放标题 ]</text><circle cx="45" cy="52" r="10" fill="rgba(255,255,255,0.85)"/><rect x="62" y="42" width="22" height="20" rx="2" fill="rgba(255,255,255,0.75)"/></svg>`,
            visualDesc: "✨ 90度垂直俯拍桌面 · 亚麻桌布与极简白瓷杯 · 画面上方预留干净空白区（方便你后期加字）· Kinfolk 杂志高级色调",
            cnPrompt: "现代极简主义生活方式摄影，Kinfolk杂志美学，90度垂直桌面俯拍视角（Flat lay）。米白色天然亚麻桌布上，整齐而自然地摆放着一杯极简白瓷黑咖啡和一本摊开的艺术书籍。温暖柔和的自然侧光拉出优美的长影，画面上方预留35%干净留白空间方便排版加字，低饱和度大地色系，干净、克制、高级的松弛感。",
            enPrompt: "Modern minimalist lifestyle photography, Kinfolk magazine editorial aesthetic, 90-degree overhead flat-lay view. On a natural beige linen tablecloth, a minimalist white ceramic coffee cup and an open art book placed artfully. Warm soft directional natural sunlight casting gentle long shadows, 35% clean negative space at the top for text typography, muted earth tones, clean, serene, and sophisticated relaxation."
        },
        {
            id: 3,
            shortName: "3D 可爱盲盒",
            icon: "🧸",
            name: "风格 D：3D 治愈盲盒公仔风 (3D Cute Pixar/Chibi Render)",
            sceneBadge: "最适合：打造个人 IP 形象、轻松幽默日常、吸引年轻受众",
            whyGood: "像泡泡玛特（Pop Mart）和皮克斯动画一样的圆润 3D 质感，色彩温暖讨喜，在社交平台上非常抓眼球。",
            gradientClass: "style-banner-3d",
            svgIllustration: `<svg viewBox="0 0 120 80" class="w-24 h-16 opacity-90"><rect x="25" y="20" width="70" height="45" rx="16" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.6)" stroke-width="2"/><circle cx="48" cy="42" r="12" fill="rgba(254,215,170,0.9)"/><circle cx="74" cy="45" r="10" fill="rgba(255,255,255,0.9)"/><circle cx="44" cy="40" r="2" fill="#431407"/><circle cx="52" cy="40" r="2" fill="#431407"/></svg>`,
            visualDesc: "🧸 泡泡玛特盲盒质感 · 圆润可爱的微缩咖啡馆角落 · 毛毡与粘土细腻材质 · 暖洋洋的皮克斯动画灯光",
            cnPrompt: "3D可爱盲盒设计风格，皮克斯动画质感，泡泡玛特（Pop Mart）美学。一个微缩的温馨咖啡馆角落，圆润可爱的木质小桌子上放着胖乎乎的拉花咖啡杯和一本厚厚的小书，旁边有一只打盹的小猫咪。柔和的粘土与毛毡材质纹理，温暖金色的全局光照，马卡龙暖色调，Octane渲染器，C4D，超级治愈可爱，细节丰富。",
            enPrompt: "3D cute blind box toy style, Pixar animation aesthetic, Pop Mart style. A miniature cozy cafe corner diorama, a chubby cute ceramic coffee cup with heart latte art and a thick little open book on a rounded wooden table, a tiny sleeping kitten beside it. Soft clay and felt material textures, warm golden global illumination, pastel warm color palette, Octane render, C4D, ultra-cute and heartwarming, 8k."
        }
    ],

    // 4. 模块四：5大社媒高频场景手把手练习（融合两个文件的全部经典练习）
    workshops: [
        {
            id: 0,
            shortTab: "生活美图 & 封面留白",
            tag: "练习 1 · 新手破冰必学",
            title: "生活氛围美图 & 社媒封面：告别“一眼假”的 AI 塑料感",
            targetUse: "适用场景：早安/晚安问候图、小红书/IG 封面图（预留标题位置）、读书心得配图",
            tipTitle: "💡 3 个立刻去掉 AI 塑料感的小秘诀：",
            tips: [
                "<strong>不要只写物体，一定要写『光线』</strong>：加上“清晨柔和阳光”、“黄金时刻逆光”或“温暖台灯光晕”，画面立刻有灵魂。",
                "<strong>加上『相机与胶片词』</strong>：在提示词末尾加上 <code>浅景深背景虚化</code>、<code>胶片颗粒感</code>，AI 就不会把所有东西都画得又硬又假。",
                "<strong>预留加字空间（封面必学）</strong>：如果你要在图上写标题或早安金句，记得加一句 <code>画面上方留白，方便添加文字</code>，AI 就会自动帮你空出干净背景！"
            ],
            examples: [
                {
                    title: "🌅 案例 A：治愈系清晨阳光花束（留白可加早安/正能量文字）",
                    rawText: "我想做一张清晨窗台放着鲜花和一杯温水的画面，阳光照进来很有希望感，画面上方要留一点空白让我自己加文字。",
                    readyPrompt: "电影感治愈生活摄影，清晨阳光透过薄纱窗帘洒在原木窗台上，窗台上放着一束新鲜的白色洋甘菊与尤加利叶玻璃花瓶，旁边是一杯清澈的温水。阳光在桌面折射出晶莹剔透的光斑与柔和的丁达尔光束。浅景深，背景温暖柔和虚化，画面上方三分之一处为干净柔和的浅色墙面留白（方便后期排版加字），胶片质感，色彩清新通透，充满希望与宁静的早晨氛围，竖版 3:4，8k高清。"
                },
                {
                    title: "👗 案例 B：社交平台账号封面图（指定比例 + 自动留白）",
                    rawText: "我要为我的社交平台账号做一张“每日穿搭/生活分享”的封面图，竖版 3:4，画面清新干净，留出上方空白位置方便我加标题文字。",
                    readyPrompt: "我要为我的社交平台账号做一张“每日生活与穿搭分享”的封面图，竖版 3:4 比例。画面主体是极简温馨的亚麻色衣架与几件质感温柔的米色针织衫、草帽与藤编包，靠在干净的奶油色墙边，温暖的午后自然窗光斜照，画面上方预留 35% 干净空白位置方便我后期加标题文字。请根据这句话帮我写出专业的生图提示词，并提供 3 种不同风格。"
                }
            ]
        },
        {
            id: 1,
            shortTab: "本地美食 & 产品好物",
            tag: "练习 2 · 高赞互动流量密码",
            title: "本地美食与产品特写：如何拍出让人流口水的质感？",
            targetUse: "适用场景：本地美食分享（叻沙/椰浆饭/烘焙）、养生茶饮、个人产品宣传图",
            tipTitle: "💡 让美食与产品看起来“色香味俱全”的 3 个关键词：",
            tips: [
                "<strong>动态温度词</strong>：一定要写 <code>冒着袅袅热气</code>、<code>表面晶莹剔透的汤汁光泽</code> 或 <code>杯壁凝结的冰水珠</code>。",
                "<strong>微距与视角</strong>：拍特写用 <code>微距镜头45度角拍摄</code>（突出层次感），拍整桌丰盛美食用 <code>90度桌面俯拍 (Flat lay)</code>。",
                "<strong>让 AI 帮你想产品创意</strong>：如果你卖产品（如手工蜡烛、糕点、护肤品），直接让 AI 帮你设计 3 个不同场景的展示方案！"
            ],
            examples: [
                {
                    title: "🍜 案例 A：南洋本地美食特写（叻沙 / 椰浆饭 / 炒粿条通用）",
                    rawText: "一碗刚煮好的叻沙，汤面有热气，配料有鲜虾、豆卜和香菜，俯拍角度，木质餐桌，看起来超诱人。",
                    readyPrompt: "米其林级别的美食摄影特写，45度俯拍视角。复古木质餐桌上放着一碗刚煮好的南洋风味叻沙（Laksa），浓郁金红的椰浆汤汁泛着诱人油光，碗口升起袅袅热气，上面铺着饱满的鲜虾、吸满汤汁的豆卜、半颗流心水煮蛋和翠绿香菜，旁边摆着小青柠和参巴辣椒酱。温暖的自然窗光从侧面打亮食材纹理，色彩饱满诱人，浅景深，方形 1:1，8k超高清。（💡 自己试试：把“叻沙”换成“椰浆饭 Nasi Lemak”或“炒粿条”！）"
                },
                {
                    title: "🕯️ 案例 B：产品宣传图（让 AI 帮你想 3 个展示创意）",
                    rawText: "我卖手工香薰蜡烛（或你自己的产品），请帮我设计 3 个适合社交平台的产品展示画面创意。",
                    readyPrompt: "我经营【手工香薰蜡烛 / 可替换成你的产品或服务】。请帮我设计 3 个适合发在社交平台（小红书 / Instagram / FB）的高级产品展示画面创意，并为每个创意写出完整的 AI 生图提示词（中英文对照），3 个风格分别是：1. 温馨治愈家居风、2. 极简杂志高级风（带留白）、3. 自然森林植物系风格。"
                }
            ]
        },
        {
            id: 2,
            shortTab: "图生视频魔法",
            tag: "练习 3 · 进阶短视频吸睛绝招",
            title: "图生视频魔法 (Image-to-Video)：让你的静态美图动起来！",
            targetUse: "适用场景：Instagram Reels、小红书动态笔记、抖音/TikTok 短视频、WhatsApp 状态",
            tipTitle: "🎬 为什么新手一定要用『先画图，再转视频』？",
            tips: [
                "<strong>黄金法则</strong>：直接用文字生成视频，画面容易变形。<strong>最稳做法是：先用练习1或2生成一张你满意的图片，把图片上传到『可灵 AI』或『即梦 AI』，再输入下面的一句简短动态指令！</strong>",
                "<strong>万能视频公式</strong>：<code>图片提示词 + 1个主要动作 + 1个镜头运动 + 5秒时长</code>。",
                "<strong>切记动作要慢、要少</strong>：一次只写一个动作，写“微风轻拂”、“缓慢推进”、“热气缓缓上升”，画面最稳最唯美！"
            ],
            examples: [
                {
                    title: "🎥 视频运镜词 A：直接粘贴到【可灵 / 即梦】（适合咖啡/美食/室内图）",
                    rawText: "把静态的咖啡看书图片上传到视频 AI 后，复制下面这段话作为图生视频提示词：",
                    readyPrompt: "镜头极其缓慢地向咖啡杯推近（Slow push in），杯口的热气轻柔地袅袅上升并消散，窗外温暖的阳光光束微微闪烁，微风轻轻吹动书本的一角，浅景深，电影质感，温暖治愈，画面主体保持稳定不变形，5秒。"
                },
                {
                    title: "🪄 视频指令 B：发给【文字 AI】让它帮你写 3 套运镜方案",
                    rawText: "当你手里有一张好图，不知道怎么让它动起来时，把这段话发给 Gemini / ChatGPT：",
                    readyPrompt: "我有一张图片，画面内容是：【一位女生在咖啡馆靠窗看书，桌上有热咖啡】。请帮我写一段 5 秒的『图生视频（Image-to-Video）』提示词，包含：人物或物体的细微动作、镜头运动方式、光影变化，并提供 3 种不同感觉的运镜方案供我选择。"
                }
            ]
        },
        {
            id: 3,
            shortTab: "文案+配图一条龙",
            tag: "练习 4 · 社媒发帖懒人一条龙",
            title: "爆款文案 + 配图提示词：一次指令搞定整篇贴文！",
            targetUse: "适用场景：当你今天想发一篇 FB / IG / 小红书，但不知道怎么写字、也不知道配什么图时",
            tipTitle: "🚀 二合一超级指令用法：",
            tips: [
                "把下面这段指令复制给 <strong>Gemini、ChatGPT、Claude 或 Qwen</strong>，只需要把【】里的主题换成你今天想分享的事。",
                "AI 会一次性帮你写出：<strong>3 个吸引人点击的标题 + 分段排好版且带 Emoji 的正文 + 热门标签 (Hashtags) + 配套的生图提示词</strong>！"
            ],
            examples: [
                {
                    title: "📱 万能社媒发帖一条龙模板（点击复制后替换【】里的内容即可）",
                    rawText: "一键让 AI 当你的私人新媒体运营小编 + 视觉摄影总监：",
                    readyPrompt: "我想在社交平台（Instagram / 小红书 / Facebook）发一篇贴文，今天想分享的主题是：【周末给自己留一杯咖啡的时间，学会放慢脚步休息】。请帮我完成以下两件事：\n\n第一部分：写出贴文文案\n1. 提供 3 个温柔且吸引人共鸣的标题选择。\n2. 写出正文内容：语气要真诚温暖像朋友聊天，不要有说教感，适当分段并加上好看的 Emoji 表情，最后附上 5 个相关的热门标签（Hashtags）。\n\n第二部分：提供配图生图提示词\n请根据这篇贴文的意境，帮我写出 3 种不同视觉风格的 AI 生图提示词（包含：1.电影感写实摄影、2.治愈系插画风、3.极简杂志俯拍风），方便我直接拿去生成配图。"
                }
            ]
        },
        {
            id: 4,
            shortTab: "微调追问 & 固定人物",
            tag: "练习 5 · 高手与新手的分水岭（最重要！）",
            title: "第一次出图不满意？学会“追问微调”与“固定人物形象”",
            targetUse: "适用场景：画出来的图差一点点感觉、想换光线/背景、或者想做系列统一人物头像",
            tipTitle: "🎯 为什么高手从不“推倒重来”，而是用“追问”？",
            tips: [
                "<strong>一次只改一个地方</strong>：不要重新开新对话！直接在原对话里告诉 AI 哪里不满意（比如：“光线再暖一点”、“背景简单一点”）。",
                "<strong>固定人物特征技巧</strong>：想做系列内容时，把人物的『年龄、发型、服装颜色』固定下来每次带上，画出来的人物就会高度一致！"
            ],
            examples: [
                {
                    title: "🔄 追问话术 A：改光线、换风格、去多余杂物（直接复制发给 AI）",
                    rawText: "拿到第一张图觉得还不够完美时，复制下面任意一句追问 AI：",
                    readyPrompt: "请保持画面中的主要人物和咖啡馆场景不变，帮我做以下微调并更新生图提示词：\n1. 把光线改成【黄昏温暖的橙金色夕阳】，整体改成【日系胶片感】；\n2. 背景请更简洁干净一些，不要出现任何乱码文字和水印，画面上方留出空白。"
                },
                {
                    title: "👩 案例 B：打造统一人物形象 / 专属头像（适合做系列账号）",
                    rawText: "固定“发型+穿搭+光影”公式，让你的账号人物形象保持统一：",
                    readyPrompt: "一位 25 岁左右的亚洲女生，黑色及肩短发，穿米白色柔软针织衫，温柔微笑看向镜头，背景是极简干净的浅米色墙面与一抹绿植虚化，柔和的窗边自然光，半身像，85mm人像镜头，写实摄影风格，肤质自然真实，8k高清。（💡 小贴士：把“黑色及肩短发、米白色针织衫”记在备忘录，下次换成在书店或海边时继续带上这句话！）"
                }
            ]
        }
    ],

    // 5. 模块五：画面质感翻倍词典（光影、镜头、风格、视频运镜）
    dictionary: [
        {
            category: "☀️ 光影调味料（决定画面高不高级）",
            desc: "不知道怎么写光线时，点下面任意一个词加进你的句子里：",
            items: [
                { word: "温暖的黄金时刻斜阳 (Golden hour sunlight)", effect: "日落前1小时最温柔的暖金色阳光" },
                { word: "丁达尔效应光束 (Volumetric light rays)", effect: "阳光穿透窗户或树叶形成看得见的光柱" },
                { word: "柔和的窗边自然漫射光", effect: "最适合拍室内美食、书本，阴影极其柔和不刺眼" },
                { word: "电影级侧逆光与温暖光斑 (Warm bokeh)", effect: "让主体边缘发亮，背景变成梦幻的小圆点光斑" },
                { word: "百叶窗斑驳光影", effect: "在桌面或墙面上投射出极具故事感的条纹光影" }
            ]
        },
        {
            category: "📷 镜头与构图词（决定画面专不专业）",
            desc: "告诉 AI 摄像机摆在哪里，构图立刻像专业摄影师：",
            items: [
                { word: "85mm镜头，大光圈浅景深，背景虚化", effect: "突出主角（如咖啡杯或人），把杂乱背景变模糊" },
                { word: "90度垂直桌面俯拍视角 (Flat lay)", effect: "从正上方往下拍，最适合拍一桌美食、书本手账" },
                { word: "微距特写镜头 (Macro close-up)", effect: "放大食物纹理、水珠、花瓣细节，震撼视觉" },
                { word: "画面上方三分之一干净留白", effect: "专门留出空白背景，方便你后期自己在图上加文字" },
                { word: "柯达Portra 400胶片颗粒质感", effect: "瞬间去掉数码塑料感，带有一点点复古文艺色调" }
            ]
        },
        {
            category: "🎨 热门视觉风格词（换个词就是新世界）",
            desc: "除了真实照片，你随时可以让 AI 换成这些超火的艺术风格：",
            items: [
                { word: "吉卜力工作室治愈水彩手绘风", effect: "宫崎骏动画般的蓝天绿树与温暖治愈手绘感" },
                { word: "Kinfolk极简生活杂志风，低饱和大地色", effect: "高级冷淡风、米白与原木配色，极度舒适干净" },
                { word: "3D泡泡玛特盲盒公仔风，粘土与毛毡材质", effect: "圆润可爱的立体微缩模型感，非常讨喜" },
                { word: "新海诚动漫电影光影风格", effect: "极致唯美的云朵、星光与通透绚丽的色彩" },
                { word: "东方新中式水墨留白意境", effect: "禅意、雅致，适合茶道、古诗词或传统佳节配图" }
            ]
        },
        {
            category: "🎬 图生视频专用运镜词（让照片优雅动起来）",
            desc: "把图片传到可灵/即梦转视频时，用这些词控制画面怎么动：",
            items: [
                { word: "镜头极其缓慢地向前推进 (Slow push in)", effect: "最有电影感的运镜，慢慢聚焦到画面主角上" },
                { word: "镜头缓慢拉远展示全景 (Slow pull out)", effect: "从局部细节慢慢拉开，展示整个优美环境" },
                { word: "杯口热气袅袅升腾，窗外光影微微摇曳", effect: "让静态的美食/咖啡照片瞬间活过来的神器" },
                { word: "微风轻轻吹拂书页与绿植叶片自然摆动", effect: "幅度轻柔自然，画面不会崩坏变形" },
                { word: "固定机位，仅有光影与细微尘埃在空气中流动", effect: "适合做配有音乐的氛围感背景视频" }
            ]
        }
    ],

    // 6. 模块六：避坑急救问答 FAQ
    faqs: [
        {
            q: "1. 我把指令发给 AI 了，为什么它只回复我文字，没有直接画出图片？",
            a: "这是完全正常的！因为我们的<strong>第一步是让 AI 当『文字军师』</strong>，帮你写出 4 种不同风格的提示词让你挑。当你看到它回复的 4 段提示词后，如果你用的是 <strong>Gemini 或 ChatGPT</strong>，你只需要接着回复一句：<span class='highlight-inline'>“我很喜欢第 1 种风格，请直接帮我根据这段提示词生成图片！”</span> 它就会立刻开始画图啦！或者你也可以复制那段提示词，贴去『即梦 AI』生成。"
        },
        {
            q: "2. 提示词应该用中文还是英文？我不懂英文怎么办？",
            a: "完全不用懂英文！现在像 <strong>Gemini、ChatGPT、Qwen、即梦 AI、可灵 AI</strong> 全部都完全听得懂中文。而且在本网页提供的『万能扩写咒语』里，我们已经默认让 AI <strong>同时输出中英文对照版本</strong>——中文版方便你自己看懂画面细节，英文版方便你直接复制给偏爱英文的工具，一举两得！"
        },
        {
            q: "3. 如果画出来的图片里，人物的手指怪怪的，或者背景里有乱码文字怎么办？",
            a: "这是 AI 画图的常见现象。有两个超简单的解决办法：<br>① <strong>尽量拍局部或意境</strong>：做社媒氛围图时，多用『捧着咖啡杯的手部特写』、『人物看海的背影/侧影』或『纯静物桌面』，不仅更有意境，还能完美避开人脸手脚瑕疵。<br>② <strong>先生成无字纯背景图</strong>：如果用国外工具画图，不要让它在图里写汉字（容易变乱码），让它“上方留白”，然后你把图存到手机里，用『美图秀秀、Canva 或 剪映』加上漂亮的文字即可！"
        },
        {
            q: "4. 看到别人好看的图片，怎么知道他是用什么提示词画出来的？",
            a: "有一个超级好用的高手技巧——<strong>『让 AI 帮你反推提示词』</strong>！你只需把那张好看的图片上传发给 Gemini、ChatGPT 或 Claude，然后对它说：<span class='highlight-inline'>“我很喜欢这张图的色调、光影和构图，请帮我分析并反推出它的 AI 生图提示词（中英文对照）。”</span> 拿到后把里面的主体换成你想画的东西就行啦！"
        },
        {
            q: "5. 这些 AI 工具需要付钱吗？可以发社交平台商用吗？",
            a: "对于日常学习、经营社交平台账号来说，<strong>免费版完全够用！</strong> Google Gemini、ChatGPT、Claude、Qwen（通义千问）都可以免费对话；即梦 AI 和可灵 AI 每天登录都会赠送免费积分，足够每天生成多张美图和短视频。发社交平台时请避免模仿特定真人面孔或知名版权卡通角色即可。"
        }
    ],

    // 7. 新手通关打卡清单（6项完整实战闭环）
    checklist: [
        "1. 打开一个文字 AI（如 Gemini / ChatGPT / Claude / Qwen），粘贴“咖啡馆看书”的万能扩写指令。",
        "2. 从 AI 给出的 4 种风格中挑一个最喜欢的，让它直接帮你生成第一张图片。",
        "3. 用网页里的“双模式提示词组装器”，输入一个你自己想发到社交平台的画面。",
        "4. 尝试做一张“上方留白”的封面图，或生成一张本地美食（如叻沙/烘焙）特写图。",
        "5. 对着生成的图片试一次“微调追问”（例如让 AI 把光线改得更温暖、或换个风格）。",
        "6. 把满意的图片保存下来，尝试丢进“可灵”或“即梦”加上一句运镜词变成 5 秒短视频！"
    ],

    // 8. 前页大厅 (Homepage Portal) 后续课程列表（以后新增课程只需在此数组添加一项，把 status 改为 'live' 并填写 url 即可！）
    portalCourses: [
        {
            id: "course-2",
            lessonNum: "第 02 课",
            category: "writing",
            icon: "✍️",
            badgeColor: "badge-sky",
            status: "coming_soon", // 上线时改为 'live'
            url: "#",              // 上线时改为新页面文件名，如 'writing-social.html'
            title: "用 AI 写走心社媒文案与高情商回复，彻底告别词穷！",
            desc: "发小红书 / IG / FB 不知道写什么字？教你如何让 Claude、ChatGPT 与 Qwen 模仿你的语气，1 分钟写出真诚不套路的爆款贴文、活动邀请与节日祝福。"
        },
        {
            id: "course-3",
            lessonNum: "第 03 课",
            category: "life",
            icon: "🧭",
            badgeColor: "badge-purple",
            status: "coming_soon",
            url: "#",
            title: "把 AI 当成你的私人生活百科、旅游规划师与翻译官",
            desc: "出国旅游怎么排行程？遇到看不懂的英文/马来文信件或体检报告怎么看？教你用拍照上传与语音对话，让 AI 成为全天候贴身顾问。"
        },
        {
            id: "course-4",
            lessonNum: "第 04 课",
            category: "visual",
            icon: "🎵",
            badgeColor: "badge-amber",
            status: "coming_soon",
            url: "#",
            title: "AI 音乐、配音与手机剪辑：3分钟做出专属配乐大片",
            desc: "不会乐器也能写歌！教你用 AI 生成温柔的纯音乐或专属主题曲，并配合生成好的图片与视频，合成完整有声作品。"
        }
    ]
};
