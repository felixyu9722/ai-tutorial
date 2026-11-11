/**
 * AI 零基础视觉与社媒创作手把手指南 - 核心交互逻辑 (app.js)
 */

// 状态管理：提示词组装器（支持双模式：模式 A 万能扩写指令、模式 B 6要素直接拼装）
let builderState = {
    mode: "expand", // 'expand' | 'direct'
    scene: "周末午后在木质咖啡馆喝拿铁、翻看纸质书",
    mood: "光线很温暖柔和，感觉很放松治愈",
    goal: "image"
};

// ================= 1. AI 工具导航台切换 (Module 1) =================
function switchToolTab(roleKey) {
    const roles = ['brain', 'painter', 'director'];
    roles.forEach(k => {
        const btn = document.getElementById(`tab-tool-${k}`);
        if (!btn) return;
        if (k === roleKey) {
            btn.className = "tool-tab-btn py-3 px-2 sm:px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 bg-white text-brand-800 shadow-sm border border-brand-200";
        } else {
            btn.className = "tool-tab-btn py-3 px-2 sm:px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 text-stone-600 hover:text-stone-900";
        }
    });

    const data = APP_DATA.tools[roleKey];
    const container = document.getElementById('tool-content-container');
    if (!container || !data) return;

    const cardsHtml = data.items.map(item => {
        // 支持单按钮或多按钮（例如同时显示“打开 Claude AI”与“打开 Qwen AI”）
        const btnsHtml = item.buttons.map(b => {
            if (b.primary) {
                return `
                    <a href="${b.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 px-3.5 py-2 rounded-xl shadow-sm transition active:scale-95">
                        <span>${b.text}</span>
                        <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                    </a>
                `;
            } else {
                return `
                    <a href="${b.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-900 bg-brand-50 hover:bg-brand-100 border border-brand-200 px-3.5 py-2 rounded-xl transition active:scale-95">
                        <span>${b.text}</span>
                        <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                    </a>
                `;
            }
        }).join('');

        return `
            <div class="p-4 sm:p-5 rounded-2xl border border-stone-200 hover:border-brand-400 bg-cream-50/60 hover:bg-white transition-all flex flex-col justify-between gap-4 shadow-sm">
                <div>
                    <div class="flex items-start justify-between gap-2 flex-wrap mb-2">
                        <h4 class="font-black text-base sm:text-lg text-stone-900">${item.name}</h4>
                        <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full ${item.badgeColor}">${item.badge}</span>
                    </div>
                    <p class="text-xs sm:text-sm text-stone-600 leading-relaxed">${item.desc}</p>
                </div>
                <div class="pt-3 border-t border-stone-200/70 flex items-center justify-end flex-wrap gap-2">
                    ${btnsHtml}
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="mb-5">
            <h3 class="text-lg sm:text-xl font-black text-stone-900">${data.title}</h3>
            <p class="text-xs sm:text-sm text-stone-600 mt-1">${data.subtitle}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${cardsHtml}
        </div>
    `;
    refreshIcons();
}

// ================= 2. 渲染 6要素公式表格 & 4种视觉风格切换 (Module 2) =================
function renderFormulaTable() {
    const tbody = document.getElementById('formula-table-body');
    if (!tbody) return;
    tbody.innerHTML = APP_DATA.formulaElements.map(row => `
        <tr class="border-b border-stone-200/70 last:border-none">
            <td class="py-2.5 px-3 font-bold text-brand-700 whitespace-nowrap text-xs sm:text-sm">${row.tag}</td>
            <td class="py-2.5 px-3 text-stone-600 text-xs sm:text-sm">${row.question}</td>
            <td class="py-2.5 px-3 text-stone-800 font-medium text-xs sm:text-sm">${row.example}</td>
        </tr>
    `).join('');
}

function selectCoffeeStyle(index) {
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`style-btn-${i}`);
        if (!btn) continue;
        if (i === index) {
            btn.className = "style-tab-btn p-2.5 rounded-xl border-2 text-left transition-all border-brand-600 bg-brand-50/70 shadow-sm";
        } else {
            btn.className = "style-tab-btn p-2.5 rounded-xl border-2 text-left transition-all border-stone-200 hover:border-stone-300 bg-white";
        }
    }

    const style = APP_DATA.coffeeStyles[index];
    const display = document.getElementById('coffee-style-display');
    if (!display || !style) return;

    display.innerHTML = `
        <!-- 视觉预览横幅 -->
        <div class="rounded-2xl ${style.gradientClass} text-white p-5 relative overflow-hidden shadow-inner flex items-center justify-between gap-4">
            <div class="relative z-10">
                <div class="inline-block text-[11px] font-bold bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full text-amber-300 mb-2">
                    ${style.sceneBadge}
                </div>
                <h4 class="text-base sm:text-lg font-black mb-1">${style.name}</h4>
                <p class="text-xs sm:text-sm text-white/90 font-medium">${style.visualDesc}</p>
            </div>
            <div class="hidden sm:block shrink-0">
                ${style.svgIllustration}
            </div>
        </div>

        <!-- 为什么效果好解析 -->
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-3.5 text-xs sm:text-sm text-stone-700 flex items-start gap-2.5">
            <i data-lucide="check-circle" class="w-4 h-4 text-brand-600 shrink-0 mt-0.5"></i>
            <div><strong class="text-stone-900">AI 帮你补齐了什么细节？</strong> ${style.whyGood}</div>
        </div>

        <!-- 中文专业提示词框 -->
        <div class="rounded-2xl border border-stone-200 p-4 bg-cream-50">
            <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
                <span class="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-brand-500"></span>
                    <span>AI 扩写出的【中文专业生图提示词】：</span>
                </span>
                <button onclick="copyDirectText(\`${style.cnPrompt}\`, '已复制【${style.shortName}】中文提示词！')" class="text-xs bg-brand-600 hover:bg-brand-700 text-white font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition active:scale-95 shadow-sm">
                    <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                    <span>复制中文词</span>
                </button>
            </div>
            <p class="text-xs sm:text-sm text-stone-700 leading-relaxed select-all">${style.cnPrompt}</p>
        </div>

        <!-- 英文专业提示词框 -->
        <div class="rounded-2xl border border-stone-200 p-4 bg-stone-50/80">
            <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
                <span class="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span>配套【英文版提示词】（适合 Midjourney / 国外生图工具）：</span>
                </span>
                <button onclick="copyDirectText(\`${style.enPrompt}\`, '已复制【${style.shortName}】英文提示词！')" class="text-xs bg-stone-800 hover:bg-stone-900 text-white font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition active:scale-95">
                    <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                    <span>复制英文词</span>
                </button>
            </div>
            <p class="text-xs text-stone-600 font-mono leading-relaxed select-all">${style.enPrompt}</p>
        </div>
    `;
    refreshIcons();
}

// ================= 3. 双模式互动提示词组装器 (Module 3) =================
function switchBuilderMode(mode) {
    builderState.mode = mode;
    const tabExpand = document.getElementById('builder-mode-expand');
    const tabDirect = document.getElementById('builder-mode-direct');
    const panelExpand = document.getElementById('panel-builder-expand');
    const panelDirect = document.getElementById('panel-builder-direct');
    const outputBadge = document.getElementById('builder-output-label');

    if (mode === 'expand') {
        tabExpand.className = "px-4 py-2 rounded-xl font-bold text-xs sm:text-sm bg-amber-400 text-stone-950 shadow-sm transition";
        tabDirect.className = "px-4 py-2 rounded-xl font-bold text-xs sm:text-sm bg-white/10 text-white hover:bg-white/20 transition";
        panelExpand.classList.remove('hidden');
        panelDirect.classList.add('hidden');
        outputBadge.textContent = "自动组装好的【万能扩写指令】（发给文字AI）：";
        updateBuilderOutput();
    } else {
        tabDirect.className = "px-4 py-2 rounded-xl font-bold text-xs sm:text-sm bg-amber-400 text-stone-950 shadow-sm transition";
        tabExpand.className = "px-4 py-2 rounded-xl font-bold text-xs sm:text-sm bg-white/10 text-white hover:bg-white/20 transition";
        panelDirect.classList.remove('hidden');
        panelExpand.classList.add('hidden');
        outputBadge.textContent = "自动拼装好的【6要素成品提示词】（直接拿去生图）：";
        updateDirectFormulaOutput();
    }
}

function setBuilderScene(sceneText) {
    document.getElementById('builder-scene-input').value = sceneText;
    updateBuilderOutput();
}

function setBuilderMood(moodText, btnEl) {
    builderState.mood = moodText;
    const buttons = document.querySelectorAll('#builder-mood-group .mood-btn');
    buttons.forEach(b => {
        b.className = "mood-btn bg-white/10 text-white hover:bg-white/15 font-medium text-xs py-2.5 px-3 rounded-xl border border-white/15 transition text-left";
    });
    btnEl.className = "mood-btn bg-amber-400 text-stone-950 font-bold text-xs py-2.5 px-3 rounded-xl border border-amber-300 transition text-left";
    updateBuilderOutput();
}

function setBuilderGoal(goalType, btnEl) {
    builderState.goal = goalType;
    const buttons = document.querySelectorAll('#builder-goal-group .goal-btn');
    buttons.forEach(b => {
        b.className = "goal-btn bg-white/10 text-white hover:bg-white/15 font-medium text-xs py-2.5 px-3 rounded-xl border border-white/15 transition text-left";
    });
    btnEl.className = "goal-btn bg-brand-400 text-stone-950 font-bold text-xs py-2.5 px-3 rounded-xl border border-brand-300 transition text-left";
    updateBuilderOutput();
}

function updateBuilderOutput() {
    const rawScene = document.getElementById('builder-scene-input').value.trim() || "周末午后在咖啡馆喝咖啡看书";
    const mood = builderState.mood;
    const goal = builderState.goal;

    let finalPrompt = "";
    if (goal === 'image') {
        finalPrompt = `我想做一个「${rawScene}」的画面，整体要求「${mood}」。\n\n请根据我这句日常描述，帮我扩写出专门用于 AI 绘图的专业提示词（请同时提供中文版和英文版对照），并帮我设计 4 种截然不同的视觉风格供我选择：\n1. 电影感写实摄影风（带镜头焦段与胶片光影细节）\n2. 治愈系温暖水彩/插画风\n3. 现代极简生活杂志海报风（预留排版留白空间）\n4. 3D 可爱盲盒公仔渲染风`;
    } else if (goal === 'video') {
        finalPrompt = `我想做一个关于「${rawScene}」的社交平台短视频，画面感觉要「${mood}」。\n\n请分两步帮我设计提示词：\n第一步【先生成静态美图】：请帮我写出 3 种不同风格的超高清 AI 生图提示词（中英文对照）。\n第二步【图生视频动态指令】：假设我已经生成好这张图片并上传到视频 AI（如可灵 Kling / 即梦），请帮我写出配套的『图生视频运镜与微动提示词』，包含镜头如何缓慢移动、画面主体如何自然微动、光影如何流动。`;
    } else {
        finalPrompt = `我想在社交平台（小红书 / Instagram / Facebook）发一篇贴文，画面与主题是「${rawScene}」，整体氛围是「${mood}」。\n\n请帮我一条龙完成：\n1. 提供 3 个吸引人互动的爆款标题。\n2. 写出一段真诚温暖、排好版且带有 Emoji 的正文，并附上 5 个热门标签（Hashtags）。\n3. 紧接着根据这篇贴文的意境，帮我写出 3 种不同视觉风格的 AI 配图生图提示词（如电影写实风、治愈插画风、极简俯拍风）。`;
    }

    document.getElementById('builder-final-output').value = finalPrompt;
}

// 模式 B：6要素积木下拉选择直接拼装提示词（来自第一个参考文件）
function updateDirectFormulaOutput() {
    const sub = document.getElementById('f_sub').value.trim() || "一位短发女生在看书，旁边有一杯热拿铁";
    const sce = document.getElementById('f_sce').value;
    const lig = document.getElementById('f_lig').value;
    const sty = document.getElementById('f_sty').value;
    const com = document.getElementById('f_com').value;
    const mood = document.getElementById('f_mood').value;

    const combined = `${sub}，位于${sce}，${lig}，${sty}，${com}，${mood}，画面细节极其丰富，光影自然真实，8k超高清。`;
    document.getElementById('builder-final-output').value = combined;
}

function randomizeBuilder() {
    if (builderState.mode === 'direct') {
        switchBuilderMode('expand');
    }
    const randomScenes = [
        "清晨阳光下的木质书桌，放着一本打开的手账本、钢笔和一杯热美式",
        "一碗刚煮好的南洋叻沙（Laksa），汤面冒着热气，配料有鲜虾和豆卜",
        "温馨的厨房岛台，刚烤好的牛角包淋上蜂蜜，旁边有一壶热红茶",
        "傍晚柔和的落地窗前，一只慵懒的橘猫蜷缩在针织毛毯上晒太阳",
        "周末的户外草坪野餐垫，摆着藤编篮子、热带水果、鲜花与草帽",
        "雨后的花园小径，绣球花上挂着晶莹的水珠，远处有温暖的小木屋灯光"
    ];
    const picked = randomScenes[Math.floor(Math.random() * randomScenes.length)];
    document.getElementById('builder-scene-input').value = picked;
    updateBuilderOutput();
    showToast("✨ 已为你换一个随机灵感！", "看看右侧组装好的提示词吧");
}

function copyBuilderOutput() {
    const text = document.getElementById('builder-final-output').value;
    copyDirectText(text, "已复制组装好的完整指令！");
}

// ================= 4. 5大实战练习场切换 (Module 4) =================
function switchWorkshop(index) {
    const total = APP_DATA.workshops.length;
    for (let i = 0; i < total; i++) {
        const tab = document.getElementById(`ws-tab-${i}`);
        if (!tab) continue;
        if (i === index) {
            tab.className = "ws-tab shrink-0 px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm border-2 transition-all bg-stone-900 text-white border-stone-900 shadow-sm flex items-center gap-2";
        } else {
            tab.className = "ws-tab shrink-0 px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm border-2 transition-all bg-white text-stone-700 border-stone-200 hover:border-stone-300 flex items-center gap-2";
        }
    }

    const ws = APP_DATA.workshops[index];
    const container = document.getElementById('workshop-content');
    if (!container || !ws) return;

    const tipsHtml = ws.tips.map(t => `
        <li class="flex items-start gap-2 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <span class="text-brand-600 font-bold mt-0.5">✔</span>
            <span>${t}</span>
        </li>
    `).join('');

    const examplesHtml = ws.examples.map(ex => `
        <div class="rounded-2xl border border-stone-200 bg-cream-50/70 p-4 sm:p-5 space-y-3">
            <div class="flex items-center justify-between flex-wrap gap-2">
                <h4 class="font-black text-stone-900 text-sm sm:text-base">${ex.title}</h4>
                <button onclick="copyDirectText(\`${ex.readyPrompt.replace(/\n/g, '\\n')}\`, '已复制练习提示词！')" class="bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-sm transition active:scale-95">
                    <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                    <span>一键复制这段提示词</span>
                </button>
            </div>
            <div class="text-xs text-stone-500 bg-white px-3 py-2 rounded-lg border border-stone-200/80">
                <strong class="text-stone-700">💬 场景说明：</strong>“${ex.rawText}”
            </div>
            <div class="bg-white p-3.5 rounded-xl border border-brand-200 text-xs sm:text-sm text-stone-800 leading-relaxed whitespace-pre-line select-all">${ex.readyPrompt}</div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="space-y-6">
            <div class="border-b border-stone-200 pb-4">
                <span class="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md">${ws.tag}</span>
                <h3 class="text-xl sm:text-2xl font-black text-stone-900 mt-2">${ws.title}</h3>
                <p class="text-xs sm:text-sm text-brand-700 font-medium mt-1">${ws.targetUse}</p>
            </div>

            <!-- 技巧提炼框 -->
            <div class="bg-brand-50/60 border border-brand-200 rounded-2xl p-4 sm:p-5">
                <h4 class="font-bold text-stone-900 text-sm sm:text-base mb-2.5">${ws.tipTitle}</h4>
                <ul class="space-y-2">
                    ${tipsHtml}
                </ul>
            </div>

            <!-- 案例模板 -->
            <div class="space-y-4">
                ${examplesHtml}
            </div>
        </div>
    `;
    refreshIcons();
}

// ================= 5. 渲染质感词典 & 急救问答 & 打卡清单 =================
function renderDictionary() {
    const grid = document.getElementById('dictionary-grid');
    if (!grid) return;
    grid.innerHTML = APP_DATA.dictionary.map(group => {
        const pills = group.items.map(item => `
            <button onclick="copyDirectText('${item.word}', '已复制调味词：${item.word}')" class="group text-left p-2.5 rounded-xl bg-white hover:bg-brand-600 border border-stone-200 hover:border-brand-600 transition-all shadow-sm active:scale-98 flex items-start justify-between gap-2">
                <div>
                    <div class="text-xs sm:text-sm font-bold text-stone-800 group-hover:text-white transition">${item.word}</div>
                    <div class="text-[11px] text-stone-500 group-hover:text-emerald-100 mt-0.5 transition">${item.effect}</div>
                </div>
                <i data-lucide="copy" class="w-3.5 h-3.5 text-stone-400 group-hover:text-white shrink-0 mt-1"></i>
            </button>
        `).join('');

        return `
            <div class="bg-cream-50 rounded-2xl p-4 sm:p-5 border border-stone-200/90 flex flex-col justify-between">
                <div>
                    <h3 class="font-black text-stone-900 text-sm sm:text-base">${group.category}</h3>
                    <p class="text-xs text-stone-500 mt-0.5 mb-3">${group.desc}</p>
                    <div class="grid grid-cols-1 gap-2">
                        ${pills}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderFaq() {
    const container = document.getElementById('faq-container');
    if (!container) return;
    container.innerHTML = APP_DATA.faqs.map((item, idx) => `
        <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
            <button onclick="toggleFaq(${idx})" class="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-stone-50 transition">
                <span class="font-bold text-stone-900 text-xs sm:text-sm">${item.q}</span>
                <i data-lucide="chevron-down" id="faq-icon-${idx}" class="w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${idx === 0 ? 'rotate-180' : ''}"></i>
            </button>
            <div id="faq-ans-${idx}" class="${idx === 0 ? 'block' : 'hidden'} px-4 pb-4 pt-2 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                ${item.a}
            </div>
        </div>
    `).join('');
}

function toggleFaq(idx) {
    const ans = document.getElementById(`faq-ans-${idx}`);
    const icon = document.getElementById(`faq-icon-${idx}`);
    if (!ans || !icon) return;
    const isHidden = ans.classList.contains('hidden');
    if (isHidden) {
        ans.classList.remove('hidden');
        icon.classList.add('rotate-180');
    } else {
        ans.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
}

function renderChecklistItems() {
    const container = document.getElementById('checklist-items');
    if (!container) return;
    container.innerHTML = APP_DATA.checklist.map(text => `
        <label class="flex items-start gap-3 p-3 rounded-xl border border-stone-200 hover:bg-stone-50 cursor-pointer transition">
            <input type="checkbox" onchange="updateChecklist()" class="check-item mt-1 w-4 h-4 accent-brand-600 rounded shrink-0">
            <span class="text-xs sm:text-sm text-stone-800 font-medium">${text}</span>
        </label>
    `).join('');
}

function updateChecklist() {
    const checkboxes = document.querySelectorAll('.check-item');
    let checkedCount = 0;
    const states = [];
    checkboxes.forEach(cb => {
        states.push(cb.checked);
        if (cb.checked) checkedCount++;
    });

    try {
        localStorage.setItem('ai_tutorial_checklist_v2', JSON.stringify(states));
    } catch (e) {}

    const total = checkboxes.length;
    const percent = total > 0 ? Math.round((checkedCount / total) * 100) : 0;
    document.getElementById('checklist-bar').style.width = `${percent}%`;
    document.getElementById('checklist-progress-text').textContent = `已完成 ${checkedCount}/${total}`;

    // 同步更新顶部迷你进度显示（如果存在）
    const topProg = document.getElementById('top-progress-badge');
    if (topProg) {
        topProg.textContent = `进度 ${checkedCount}/${total}`;
    }

    const celebration = document.getElementById('checklist-celebration');
    if (checkedCount === total && total > 0) {
        celebration.classList.remove('hidden');
    } else {
        celebration.classList.add('hidden');
    }
}

function loadChecklist() {
    try {
        const saved = localStorage.getItem('ai_tutorial_checklist_v2');
        if (saved) {
            const states = JSON.parse(saved);
            const checkboxes = document.querySelectorAll('.check-item');
            checkboxes.forEach((cb, i) => {
                if (states[i]) cb.checked = true;
            });
        }
        updateChecklist();
    } catch (e) {}
}

// ================= 6. 一键复制 + 快捷跳往 AI + 大字/深色模式 =================
function copyText(elementId, toastTitle) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const text = el.innerText || el.value;
    copyDirectText(text, toastTitle);
}

function copyDirectText(text, toastTitle = "提示词已复制成功！") {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(toastTitle, "点击下方快捷按钮，直接去粘贴发送吧 👇");
        }).catch(() => fallbackCopy(text, toastTitle));
    } else {
        fallbackCopy(text, toastTitle);
    }
}

function fallbackCopy(text, toastTitle) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showToast(toastTitle, "点击下方快捷按钮，直接去粘贴发送吧 👇");
    } catch (err) {
        showToast("复制失败，请长按文字手动复制", "");
    }
    document.body.removeChild(textarea);
}

let toastTimeout;
function showToast(title, desc) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    document.getElementById('toast-title').textContent = title;
    document.getElementById('toast-desc').textContent = desc;
    toast.classList.remove('opacity-0', '-translate-y-3', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        hideToast();
    }, 4500);
}

function hideToast() {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
    toast.classList.add('opacity-0', '-translate-y-3', 'pointer-events-none');
}

// 切换大字舒适模式
function toggleFontSize() {
    const html = document.documentElement;
    const btn = document.getElementById('btn-font-size');
    const isLarge = html.getAttribute('data-font') === 'large';
    if (isLarge) {
        html.removeAttribute('data-font');
        if (btn) btn.textContent = 'A+ 大字';
        try { localStorage.setItem('ai_tutorial_font', 'normal'); } catch(e) {}
    } else {
        html.setAttribute('data-font', 'large');
        if (btn) btn.textContent = 'A- 标准';
        try { localStorage.setItem('ai_tutorial_font', 'large'); } catch(e) {}
    }
}

// 切换深浅色主题
function toggleTheme() {
    const html = document.documentElement;
    const btn = document.getElementById('btn-theme-toggle');
    const isDark = html.getAttribute('data-theme') === 'dark';
    if (isDark) {
        html.setAttribute('data-theme', 'light');
        if (btn) btn.textContent = '🌙';
        try { localStorage.setItem('ai_tutorial_theme', 'light'); } catch(e) {}
    } else {
        html.setAttribute('data-theme', 'dark');
        if (btn) btn.textContent = '☀️';
        try { localStorage.setItem('ai_tutorial_theme', 'dark'); } catch(e) {}
    }
}

function loadPreferences() {
    try {
        const savedFont = localStorage.getItem('ai_tutorial_font');
        if (savedFont === 'large') {
            document.documentElement.setAttribute('data-font', 'large');
            const btn = document.getElementById('btn-font-size');
            if (btn) btn.textContent = 'A- 标准';
        }
        const savedTheme = localStorage.getItem('ai_tutorial_theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            const btn = document.getElementById('btn-theme-toggle');
            if (btn) btn.textContent = '☀️';
        }
    } catch (e) {}
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

// 初始化全站组件
window.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
    switchToolTab('brain');
    renderFormulaTable();
    selectCoffeeStyle(0);
    updateBuilderOutput();
    switchWorkshop(0);
    renderDictionary();
    renderFaq();
    renderChecklistItems();
    loadChecklist();
    refreshIcons();
});
